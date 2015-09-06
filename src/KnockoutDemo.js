define("amber-knockout-demo/KnockoutDemo", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "knockout", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);
,ko
//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('KnockoutDemo');
$core.packages["KnockoutDemo"].innerEval = function (expr) { return eval(expr); };
$core.packages["KnockoutDemo"].imports = ["ko=knockout", "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["KnockoutDemo"].transport = {"type":"amd","amdNamespace":"amber-knockout-demo"};

$core.addClass('KOModel', $globals.Object, [], 'KnockoutDemo');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.KOModel.comment="インスタンス変数へのアクセッサをJSONにしてkoとバインディングするところを隠蔽する。\x0aインスタンス変数には、koへのobservableをセットする。\x0aその手順はサブクラス化して行う";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.KOModel.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(ko)._applyBindings_(self._setupModel());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.KOModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09\x0a\x09ko applyBindings: self setupModel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "applyBindings:", "setupModel"]
}),
$globals.KOModel);

$core.addMethod(
$core.method({
selector: "setupModel",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
var viewModel;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
viewModel=$globals.HashedCollection._newFromPairs_([]);
self._setupModel_(viewModel);
$1=viewModel;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupModel",{viewModel:viewModel},$globals.KOModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupModel\x0a\x09| viewModel |\x0a\x09viewModel := #{}.\x0a\x09self setupModel: viewModel.\x0a\x09^viewModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setupModel:"]
}),
$globals.KOModel);

$core.addMethod(
$core.method({
selector: "setupModel:",
protocol: 'initialization',
fn: function (aJSON){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupModel:",{aJSON:aJSON},$globals.KOModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSON"],
source: "setupModel: aJSON\x0a\x09\x0a\x09\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.KOModel);



$core.addClass('KOPlanetModel', $globals.KOModel, ['planets', 'typeToShow', 'planetsToShow', 'displayAdvancedOptions', 'showPlanetElement', 'hidePlanetElement', 'addPlanet'], 'KnockoutDemo');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.KOPlanetModel.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@planets"]=nil;
self["@planetsToShow"]=nil;
self["@typeToShow"]=nil;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.KOPlanetModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09planets := nil.\x0a\x09planetsToShow := nil.\x0a\x09typeToShow := nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.KOPlanetModel);

$core.addMethod(
$core.method({
selector: "setupModel:",
protocol: 'initialization',
fn: function (aJSON){
"use strict";

var self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$4,$3,$5,$6,$7;
list=[];
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","水星","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","金星","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","地球","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","火星","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","木製","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=5;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","土星","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=6;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","天王星","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=7;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","海王星","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=8;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","冥王星","type","rock"]));
self["@planets"]=$recv(ko)._observableArray_(list);
self["@typeToShow"]=$recv(ko)._observable_("all");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
self["@displayAdvancedOptions"]=$recv(ko)._observable_(false);
self["@showPlanetElement"]=(function(elm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(elm)._nodeType();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nodeType"]=1;
//>>excludeEnd("ctx");
$1=$recv($2).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["=="]=1;
//>>excludeEnd("ctx");
if($core.assert($1)){
$4=$recv(elm)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._hide();
return $recv($3)._slideDown();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({elm:elm},$ctx1,1)});
//>>excludeEnd("ctx");
});
self["@hidePlanetElement"]=(function(elm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$5=$recv($recv(elm)._nodeType()).__eq_eq((1));
if($core.assert($5)){
$6=$recv(elm)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
return $recv($6)._slideUp_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(elm)._asJQuery())._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({elm:elm},$ctx1,3)});
//>>excludeEnd("ctx");
});
self["@addPlanet"]=(function(type){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addPlanet_(type);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({type:type},$ctx1,6)});
//>>excludeEnd("ctx");
});
self["@planetsToShow"]=$recv(ko)._computed_with_((function(){
var desiredType;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
desiredType=$recv(self["@typeToShow"])._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
desiredType;
$7=$recv(desiredType).__eq("all");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($7)){
return $recv(self["@planets"])._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=2;
//>>excludeEnd("ctx");
} else {
return $recv($recv(ko)._utils())._arrayFilter_with_($recv(self["@planets"])._value(),(function(planet){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(planet)._at_("type")).__eq(desiredType);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({planet:planet},$ctx2,10)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({desiredType:desiredType},$ctx1,7)});
//>>excludeEnd("ctx");
}),aJSON);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupModel:",{aJSON:aJSON,list:list},$globals.KOPlanetModel)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aJSON"],
source: "setupModel: aJSON\x0a\x09\x09| list |\x0a\x09list := #().\x0a\x09list add:\x09#{ #name -> '水星' . #type -> 'rock'}.\x0a\x09list add:\x09#{ #name -> '金星' . #type -> 'rock'}.\x0a\x09list add:\x09#{ #name -> '地球' . #type ->  'rock'}.\x0a    list add:   #{ #name ->  '火星' . #type -> 'rock'}.\x0a    list add:   #{ #name -> '木製' . #type ->  'gasgiant'}.\x0a    list add:   #{ #name -> '土星' . #type -> 'gasgiant'}.\x0a \x09list add:   #{ #name -> '天王星' . #type -> 'gasgiant'}.\x0a    list add:   #{ #name -> '海王星' . #type ->  'gasgiant'}.\x0a    list add:   #{ #name -> '冥王星' . #type -> 'rock'}.\x0a\x09\x0a\x09\x09planets := (ko observableArray: list) .\x0a\x09\x09typeToShow := (ko observable: 'all') .\x0a\x09\x09displayAdvancedOptions := (ko observable: false) .\x0a\x09\x09showPlanetElement := [:elm | elm nodeType == 1 ifTrue: [elm asJQuery hide slideDown]] .\x0a\x09\x09hidePlanetElement := [:elm | elm nodeType == 1 ifTrue: [elm asJQuery slideUp: [elm asJQuery remove]]] .\x0a\x09\x09addPlanet := [:type | self addPlanet: type] .\x0a\x09\x09planetsToShow := (ko computed:[| desiredType |\x0a\x09\x09\x09desiredType := typeToShow value. \x0a\x09\x09\x09desiredType = 'all' ifTrue: [planets value ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ko utils arrayFilter: planets value with: [:planet | \x0a\x09\x09\x09\x09\x09\x09\x09(planet at: 'type') = desiredType]]\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09with: aJSON)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "observableArray:", "observable:", "ifTrue:", "==", "nodeType", "slideDown", "hide", "asJQuery", "slideUp:", "remove", "addPlanet:", "computed:with:", "value", "ifTrue:ifFalse:", "=", "arrayFilter:with:", "utils", "at:"]
}),
$globals.KOPlanetModel);



$core.addClass('KnockoutDemo', $globals.Object, [], 'KnockoutDemo');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#amber-with"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doAmberWith();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#silk-tag"._asSilk())._on_bind_("click",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doSilkTAG();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv("#jquery-append"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryAppend();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.KnockoutDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#amber-with' asJQuery click: [ self doAmberWith ].\x0a\x09'#silk-tag' asSilk on: #click bind: [ self doSilkTAG ].\x0a\x09'#jquery-append' asJQuery click: [ self doJQueryAppend ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doAmberWith", "on:bind:", "asSilk", "doSilkTAG", "doJQueryAppend"]
}),
$globals.KnockoutDemo);

$core.addMethod(
$core.method({
selector: "doAmberWith",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
var tag;
function $HTMLCanvas(){return $globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
tag=$recv($recv($HTMLCanvas())._onJQuery_("#output-list"._asJQuery()))._root();
$recv(tag)._with_((function(html){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._li())._with_("Amber Web #with: added me!");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({html:html},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doAmberWith",{tag:tag},$globals.KnockoutDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doAmberWith\x0a\x09| tag |\x0a\x09tag := (HTMLCanvas onJQuery: '#output-list' asJQuery) root.\x0a\x09tag with: [ :html | html li with: 'Amber Web #with: added me!' ]",
referencedClasses: ["HTMLCanvas"],
//>>excludeEnd("ide");
messageSends: ["root", "onJQuery:", "asJQuery", "with:", "li"]
}),
$globals.KnockoutDemo);

$core.addMethod(
$core.method({
selector: "doJQueryAppend",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>jQuery append added me!</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryAppend",{},$globals.KnockoutDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryAppend\x0a\x09'#output-list' asJQuery append: '<li>jQuery append added me!</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.KnockoutDemo);

$core.addMethod(
$core.method({
selector: "doSilkTAG",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asSilk())._LI_("Silk TAG: added me!");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doSilkTAG",{},$globals.KnockoutDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doSilkTAG\x0a\x09'#output-list' asSilk LI: 'Silk TAG: added me!'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["LI:", "asSilk"]
}),
$globals.KnockoutDemo);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.KnockoutDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.KnockoutDemo.klass);


$core.addClass('AnimationDemo', $globals.KnockoutDemo, ['planetModel'], 'KnockoutDemo');
$core.addMethod(
$core.method({
selector: "addPlanet:",
protocol: 'action',
fn: function (type){
"use strict";

var self=this;
var newList;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@planetModel"])._at_("planets");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
newList=$recv($1)._value();
$recv(newList)._add_($globals.HashedCollection._newFromPairs_(["name","新惑星","type",type]));
$recv($recv(self["@planetModel"])._at_("planets"))._value_(newList);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addPlanet:",{type:type,newList:newList},$globals.AnimationDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["type"],
source: "addPlanet: type\x0a\x0a\x09| newList | \x0a\x09newList := (planetModel at: #planets) value.\x0a\x09newList add: #{#name -> '新惑星' . #type -> type}.\x0a\x09(planetModel at: #planets) value: newList",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["value", "at:", "add:", "value:"]
}),
$globals.AnimationDemo);

$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6;
$recv($recv(ko)._bindingHandlers())._at_put_("fadeVisible",$globals.HashedCollection._newFromPairs_(["init",(function(element,valueAccessor){
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=ko;
$2=$recv(valueAccessor)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
value=$recv($1)._toJS_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["toJS:"]=1;
//>>excludeEnd("ctx");
value;
$3=$recv(element)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$4=$recv(ko)._utils();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["utils"]=1;
//>>excludeEnd("ctx");
return $recv($3)._toggle_unwrapObservable_($4,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({element:element,valueAccessor:valueAccessor,value:value},$ctx1,1)});
//>>excludeEnd("ctx");
}),"update",(function(element,valueAccessor){
var value;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
value=$recv(ko)._toJS_($recv(valueAccessor)._value());
value;
$5=$recv($recv(ko)._utils())._unwrapObservable_(value);
if($core.assert($5)){
$6=$recv(element)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
return $recv($6)._fadeIn();
} else {
return $recv($recv(element)._asJQuery())._fadeOut();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({element:element,valueAccessor:valueAccessor,value:value},$ctx1,2)});
//>>excludeEnd("ctx");
})]));
$recv(ko)._applyBindings_(self["@planetModel"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.AnimationDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x0a\x09ko bindingHandlers at: #fadeVisible put: #{\x0a\x09#init -> [:element :valueAccessor | | value |\x0a\x09\x09value := ko toJS: valueAccessor value.\x0a\x09\x09element asJQuery toggle: ko utils unwrapObservable: value] .\x0a\x09#update -> [:element :valueAccessor| | value |\x0a\x09\x09value := ko toJS: valueAccessor value.\x0a\x09\x09(ko utils unwrapObservable: value)\x0a\x09\x09\x09ifTrue: [element asJQuery fadeIn]\x0a\x09\x09\x09ifFalse: [element asJQuery fadeOut]]\x0a\x09}.\x0a\x09\x0a\x09ko applyBindings: planetModel",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "bindingHandlers", "toJS:", "value", "toggle:unwrapObservable:", "asJQuery", "utils", "ifTrue:ifFalse:", "unwrapObservable:", "fadeIn", "fadeOut", "applyBindings:"]
}),
$globals.AnimationDemo);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.AnimationDemo.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@planetModel"]=nil;
self._setupModel();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AnimationDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09planetModel := nil.\x0a\x09self setupModel.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "setupModel"]
}),
$globals.AnimationDemo);

$core.addMethod(
$core.method({
selector: "planetsToShow",
protocol: 'action',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$7,$6,$1;
$1=$recv(ko)._computed_with_((function(){
var desiredType;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=$recv(self["@planetModel"])._at_("typeToShow");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
desiredType=$recv($2)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=1;
//>>excludeEnd("ctx");
desiredType;
$3=$recv(desiredType).__eq("all");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
$4=$recv(self["@planetModel"])._at_("planets");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=2;
//>>excludeEnd("ctx");
return $recv($4)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=2;
//>>excludeEnd("ctx");
} else {
$5=$recv(ko)._utils();
$7=$recv(self["@planetModel"])._at_("planets");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:"]=3;
//>>excludeEnd("ctx");
$6=$recv($7)._value();
return $recv($5)._arrayFilter_with_($6,(function(planet){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(planet)._at_("type")).__eq(desiredType);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({planet:planet},$ctx2,4)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({desiredType:desiredType},$ctx1,1)});
//>>excludeEnd("ctx");
}),self["@planetModel"]);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"planetsToShow",{},$globals.AnimationDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "planetsToShow\x0a\x09^(ko computed:[| desiredType |\x0a\x09\x09desiredType := (planetModel at: #typeToShow) value. \x0a\x09\x09desiredType = 'all' ifTrue: [(planetModel at: #planets) value ]\x0a\x09\x09\x09\x09\x09\x09ifFalse: [ko utils arrayFilter: (planetModel at: #planets) value with: [:planet | \x0a\x09\x09\x09\x09\x09\x09\x09(planet at: 'type') = desiredType]]\x0a\x09\x09\x09\x09\x09]\x0a\x09\x09with: planetModel)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["computed:with:", "value", "at:", "ifTrue:ifFalse:", "=", "arrayFilter:with:", "utils"]
}),
$globals.AnimationDemo);

$core.addMethod(
$core.method({
selector: "setupModel",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
var list;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$6,$5,$7,$8;
list=[];
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","水星","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=1;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","金星","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=2;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","地球","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=3;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","火星","type","rock"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=4;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","木製","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=5;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","土星","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=6;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","天王星","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=7;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","海王星","type","gasgiant"]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["add:"]=8;
//>>excludeEnd("ctx");
$recv(list)._add_($globals.HashedCollection._newFromPairs_(["name","冥王星","type","rock"]));
$1=$recv(ko)._observableArray_(list);
$2=$recv(ko)._observable_("all");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["observable:"]=1;
//>>excludeEnd("ctx");
self["@planetModel"]=$globals.HashedCollection._newFromPairs_(["planets",$1,"typeToShow",$2,"displayAdvancedOptions",$recv(ko)._observable_(false),"showPlanetElement",(function(elm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=$recv(elm)._nodeType();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nodeType"]=1;
//>>excludeEnd("ctx");
$3=$recv($4).__eq_eq((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["=="]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
$6=$recv(elm)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._hide();
return $recv($5)._slideDown();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({elm:elm},$ctx1,1)});
//>>excludeEnd("ctx");
}),"hidePlanetElement",(function(elm){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$7=$recv($recv(elm)._nodeType()).__eq_eq((1));
if($core.assert($7)){
$8=$recv(elm)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
return $recv($8)._slideUp_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv(elm)._asJQuery())._remove();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,5)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({elm:elm},$ctx1,3)});
//>>excludeEnd("ctx");
}),"addPlanet",(function(type){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._addPlanet_(type);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({type:type},$ctx1,6)});
//>>excludeEnd("ctx");
})]);
$recv(self["@planetModel"])._addAll_($globals.HashedCollection._newFromPairs_(["planetsToShow",self._planetsToShow()]));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupModel",{list:list},$globals.AnimationDemo)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setupModel\x0a\x09| list |\x0a\x09list := #().\x0a\x09list add:\x09#{ #name -> '水星' . #type -> 'rock'}.\x0a\x09list add:\x09#{ #name -> '金星' . #type -> 'rock'}.\x0a\x09list add:\x09#{ #name -> '地球' . #type ->  'rock'}.\x0a    list add:   #{ #name ->  '火星' . #type -> 'rock'}.\x0a    list add:   #{ #name -> '木製' . #type ->  'gasgiant'}.\x0a    list add:   #{ #name -> '土星' . #type -> 'gasgiant'}.\x0a \x09list add:   #{ #name -> '天王星' . #type -> 'gasgiant'}.\x0a    list add:   #{ #name -> '海王星' . #type ->  'gasgiant'}.\x0a    list add:   #{ #name -> '冥王星' . #type -> 'rock'}.\x0a\x09\x09\x09\x0a\x09planetModel := #{\x0a\x09\x09#planets -> (ko observableArray:list) .\x0a\x09\x09#typeToShow -> (ko observable: 'all') .\x0a\x09\x09#displayAdvancedOptions -> (ko observable: false) .\x0a\x09\x09#showPlanetElement -> [:elm | elm nodeType == 1 ifTrue: [elm asJQuery hide slideDown]] .\x0a\x09\x09#hidePlanetElement -> [:elm | elm nodeType == 1 ifTrue: [elm asJQuery slideUp: [elm asJQuery remove]]] .\x0a\x09\x09#addPlanet -> [:type | self addPlanet: type] \x0a\x09}.\x0a\x09\x0a\x09planetModel addAll: #{\x0a\x09\x09#planetsToShow -> (self planetsToShow)\x0a\x09}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "observableArray:", "observable:", "ifTrue:", "==", "nodeType", "slideDown", "hide", "asJQuery", "slideUp:", "remove", "addPlanet:", "addAll:", "planetsToShow"]
}),
$globals.AnimationDemo);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
"use strict";

var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.AnimationDemo.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.AnimationDemo.klass);

});
