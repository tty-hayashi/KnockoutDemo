Smalltalk createPackage: 'KnockoutDemo'!
(Smalltalk packageAt: 'KnockoutDemo') imports: {'ko' -> 'knockout'. 'amber/jquery/Wrappers-JQuery'. 'amber/web/Web'. 'silk/Silk'}!
Object subclass: #KOModel
	instanceVariableNames: ''
	package: 'KnockoutDemo'!
!KOModel commentStamp!
インスタンス変数へのアクセッサをJSONにしてkoとバインディングするところを隠蔽する。
インスタンス変数には、koへのobservableをセットする。
その手順はサブクラス化して行う!

!KOModel methodsFor: 'initialization'!

initialize
	super initialize.
	
	ko applyBindings: self setupModel.
!

setupModel
	| viewModel |
	viewModel := #{}.
	self setupModel: viewModel.
	^viewModel
!

setupModel: aJSON
	
	
	self subclassResponsibility
! !

KOModel subclass: #KOPlanetModel
	instanceVariableNames: 'planets typeToShow planetsToShow displayAdvancedOptions showPlanetElement hidePlanetElement addPlanet'
	package: 'KnockoutDemo'!

!KOPlanetModel methodsFor: 'initialization'!

initialize
	super initialize.

	planets := nil.
	planetsToShow := nil.
	typeToShow := nil
!

setupModel: aJSON
		| list |
	list := #().
	list add:	#{ #name -> '水星' . #type -> 'rock'}.
	list add:	#{ #name -> '金星' . #type -> 'rock'}.
	list add:	#{ #name -> '地球' . #type ->  'rock'}.
    list add:   #{ #name ->  '火星' . #type -> 'rock'}.
    list add:   #{ #name -> '木製' . #type ->  'gasgiant'}.
    list add:   #{ #name -> '土星' . #type -> 'gasgiant'}.
 	list add:   #{ #name -> '天王星' . #type -> 'gasgiant'}.
    list add:   #{ #name -> '海王星' . #type ->  'gasgiant'}.
    list add:   #{ #name -> '冥王星' . #type -> 'rock'}.
	
		planets := (ko observableArray: list) .
		typeToShow := (ko observable: 'all') .
		displayAdvancedOptions := (ko observable: false) .
		showPlanetElement := [:elm | elm nodeType == 1 ifTrue: [elm asJQuery hide slideDown]] .
		hidePlanetElement := [:elm | elm nodeType == 1 ifTrue: [elm asJQuery slideUp: [elm asJQuery remove]]] .
		addPlanet := [:type | self addPlanet: type] .
		planetsToShow := (ko computed:[| desiredType |
			desiredType := typeToShow value. 
			desiredType = 'all' ifTrue: [planets value ]
						ifFalse: [ko utils arrayFilter: planets value with: [:planet | 
							(planet at: 'type') = desiredType]]
					]
		with: aJSON)
! !

Object subclass: #KnockoutDemo
	instanceVariableNames: ''
	package: 'KnockoutDemo'!

!KnockoutDemo methodsFor: 'action'!

doAmberWith
	| tag |
	tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.
	tag with: [ :html | html li with: 'Amber Web #with: added me!!' ]
!

doJQueryAppend
	'#output-list' asJQuery append: '<li>jQuery append added me!!</li>'
!

doSilkTAG
	'#output-list' asSilk LI: 'Silk TAG: added me!!'
! !

!KnockoutDemo methodsFor: 'starting'!

augmentPage
	'#amber-with' asJQuery click: [ self doAmberWith ].
	'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].
	'#jquery-append' asJQuery click: [ self doJQueryAppend ]
! !

!KnockoutDemo class methodsFor: 'starting'!

start
	self new augmentPage
! !

KnockoutDemo subclass: #AnimationDemo
	instanceVariableNames: 'planetModel'
	package: 'KnockoutDemo'!

!AnimationDemo methodsFor: 'action'!

addPlanet: type

	| newList | 
	newList := (planetModel at: #planets) value.
	newList add: #{#name -> '新惑星' . #type -> type}.
	(planetModel at: #planets) value: newList
!

planetsToShow
	^(ko computed:[| desiredType |
		desiredType := (planetModel at: #typeToShow) value. 
		desiredType = 'all' ifTrue: [(planetModel at: #planets) value ]
						ifFalse: [ko utils arrayFilter: (planetModel at: #planets) value with: [:planet | 
							(planet at: 'type') = desiredType]]
					]
		with: planetModel)
! !

!AnimationDemo methodsFor: 'initialization'!

initialize
	super initialize.

	planetModel := nil.
	self setupModel.
! !

!AnimationDemo methodsFor: 'starting'!

augmentPage

	ko bindingHandlers at: #fadeVisible put: #{
	#init -> [:element :valueAccessor | | value |
		value := ko toJS: valueAccessor value.
		element asJQuery toggle: ko utils unwrapObservable: value] .
	#update -> [:element :valueAccessor| | value |
		value := ko toJS: valueAccessor value.
		(ko utils unwrapObservable: value)
			ifTrue: [element asJQuery fadeIn]
			ifFalse: [element asJQuery fadeOut]]
	}.
	
	ko applyBindings: planetModel
!

setupModel
	| list |
	list := #().
	list add:	#{ #name -> '水星' . #type -> 'rock'}.
	list add:	#{ #name -> '金星' . #type -> 'rock'}.
	list add:	#{ #name -> '地球' . #type ->  'rock'}.
    list add:   #{ #name ->  '火星' . #type -> 'rock'}.
    list add:   #{ #name -> '木製' . #type ->  'gasgiant'}.
    list add:   #{ #name -> '土星' . #type -> 'gasgiant'}.
 	list add:   #{ #name -> '天王星' . #type -> 'gasgiant'}.
    list add:   #{ #name -> '海王星' . #type ->  'gasgiant'}.
    list add:   #{ #name -> '冥王星' . #type -> 'rock'}.
			
	planetModel := #{
		#planets -> (ko observableArray:list) .
		#typeToShow -> (ko observable: 'all') .
		#displayAdvancedOptions -> (ko observable: false) .
		#showPlanetElement -> [:elm | elm nodeType == 1 ifTrue: [elm asJQuery hide slideDown]] .
		#hidePlanetElement -> [:elm | elm nodeType == 1 ifTrue: [elm asJQuery slideUp: [elm asJQuery remove]]] .
		#addPlanet -> [:type | self addPlanet: type] 
	}.
	
	planetModel addAll: #{
		#planetsToShow -> (self planetsToShow)
	}
! !

!AnimationDemo class methodsFor: 'starting'!

start
	self new augmentPage
! !

