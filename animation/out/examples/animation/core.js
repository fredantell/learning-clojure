// Compiled by ClojureScript 0.0-2173
goog.provide('examples.animation.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.animation.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",1108755585),0], null));
examples.animation.core.animation_view = (function animation_view(app,owner,opts){if(typeof examples.animation.core.t5723 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.animation.core.t5723 = (function (opts,owner,app,animation_view,meta5724){
this.opts = opts;
this.owner = owner;
this.app = app;
this.animation_view = animation_view;
this.meta5724 = meta5724;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.animation.core.t5723.cljs$lang$type = true;
examples.animation.core.t5723.cljs$lang$ctorStr = "examples.animation.core/t5723";
examples.animation.core.t5723.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"examples.animation.core/t5723");
});
examples.animation.core.t5723.prototype.om$core$IRender$ = true;
examples.animation.core.t5723.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.app));
});
examples.animation.core.t5723.prototype.om$core$IWillMount$ = true;
examples.animation.core.t5723.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return setInterval((function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"count","count",1108755585),cljs.core.inc);
}),16);
});
examples.animation.core.t5723.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5725){var self__ = this;
var _5725__$1 = this;return self__.meta5724;
});
examples.animation.core.t5723.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5725,meta5724__$1){var self__ = this;
var _5725__$1 = this;return (new examples.animation.core.t5723(self__.opts,self__.owner,self__.app,self__.animation_view,meta5724__$1));
});
examples.animation.core.__GT_t5723 = (function __GT_t5723(opts__$1,owner__$1,app__$1,animation_view__$1,meta5724){return (new examples.animation.core.t5723(opts__$1,owner__$1,app__$1,animation_view__$1,meta5724));
});
}
return (new examples.animation.core.t5723(opts,owner,app,animation_view,null));
});
examples.animation.core._BANG_manual = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"count","count",1108755585),0,new cljs.core.Keyword(null,"incrementer","incrementer",2099276750),1], null));
examples.animation.core.incrementer = (function incrementer(app,owner,opts){if(typeof examples.animation.core.t5730 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.animation.core.t5730 = (function (opts,owner,app,incrementer,meta5731){
this.opts = opts;
this.owner = owner;
this.app = app;
this.incrementer = incrementer;
this.meta5731 = meta5731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.animation.core.t5730.cljs$lang$type = true;
examples.animation.core.t5730.cljs$lang$ctorStr = "examples.animation.core/t5730";
examples.animation.core.t5730.cljs$lang$ctorPrWriter = (function (this__4010__auto__,writer__4011__auto__,opt__4012__auto__){return cljs.core._write.call(null,writer__4011__auto__,"examples.animation.core/t5730");
});
examples.animation.core.t5730.prototype.om$core$IRender$ = true;
examples.animation.core.t5730.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div(null,new cljs.core.Keyword(null,"count","count",1108755585).cljs$core$IFn$_invoke$arity$1(self__.app)),React.DOM.button({"onClick": (function (){return om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"count","count",1108755585),(function (p1__5726_SHARP_){return (p1__5726_SHARP_ + new cljs.core.Keyword(null,"incrementer","incrementer",2099276750).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.app)));
})).call(null,om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"incrementer","incrementer",2099276750),cljs.core.inc));
})},"Button"));
});
examples.animation.core.t5730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5732){var self__ = this;
var _5732__$1 = this;return self__.meta5731;
});
examples.animation.core.t5730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5732,meta5731__$1){var self__ = this;
var _5732__$1 = this;return (new examples.animation.core.t5730(self__.opts,self__.owner,self__.app,self__.incrementer,meta5731__$1));
});
examples.animation.core.__GT_t5730 = (function __GT_t5730(opts__$1,owner__$1,app__$1,incrementer__$1,meta5731){return (new examples.animation.core.t5730(opts__$1,owner__$1,app__$1,incrementer__$1,meta5731));
});
}
return (new examples.animation.core.t5730(opts,owner,app,incrementer,null));
});
cljs.core.deref.call(null,examples.animation.core._BANG_manual);
examples.animation.core.target = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("manual")], null);
om.core.root.call(null,examples.animation.core.incrementer,examples.animation.core._BANG_manual,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("manual")], null));

//# sourceMappingURL=core.js.map