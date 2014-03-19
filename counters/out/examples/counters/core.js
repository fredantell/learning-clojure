// Compiled by ClojureScript 0.0-2173
goog.provide('examples.counters.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.counters.core._BANG_manual = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554),0], null));
examples.counters.core.target = document.getElementById("manual");
examples.counters.core.set_last_clicked = (function set_last_clicked(id){return cljs.core.swap_BANG_.call(null,examples.counters.core._BANG_manual,id);
});
examples.counters.core.increase = (function increase(e,app,p__13727,owner){var map__13729 = p__13727;var map__13729__$1 = ((cljs.core.seq_QMARK_.call(null,map__13729))?cljs.core.apply.call(null,cljs.core.hash_map,map__13729):map__13729);var state = map__13729__$1;var tally = cljs.core.get.call(null,map__13729__$1,new cljs.core.Keyword(null,"tally","tally",1124029662));om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"tally","tally",1124029662),(tally + 1));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"click-chan","click-chan",4485289961).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(state));
});
examples.counters.core.decrease = (function decrease(e,app,state,owner){return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"tally","tally",1124029662),(new cljs.core.Keyword(null,"tally","tally",1124029662).cljs$core$IFn$_invoke$arity$1(state) - 1));
});
examples.counters.core.display_click_alert = (function display_click_alert(id){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,examples.counters.core._BANG_manual)),id))
{return {};
} else
{return {"display": "none"};
}
});
examples.counters.core.one_counter = (function one_counter(app,owner,opts){if(typeof examples.counters.core.t13737 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t13737 = (function (opts,owner,app,one_counter,meta13738){
this.opts = opts;
this.owner = owner;
this.app = app;
this.one_counter = one_counter;
this.meta13738 = meta13738;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t13737.cljs$lang$type = true;
examples.counters.core.t13737.cljs$lang$ctorStr = "examples.counters.core/t13737";
examples.counters.core.t13737.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.counters.core/t13737");
});
examples.counters.core.t13737.prototype.om$core$IRenderState$ = true;
examples.counters.core.t13737.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13740){var self__ = this;
var map__13741 = p__13740;var map__13741__$1 = ((cljs.core.seq_QMARK_.call(null,map__13741))?cljs.core.apply.call(null,cljs.core.hash_map,map__13741):map__13741);var state = map__13741__$1;var tally = cljs.core.get.call(null,map__13741__$1,new cljs.core.Keyword(null,"tally","tally",1124029662));var ___$1 = this;return React.DOM.div(null,cljs.core.println.call(null,state),React.DOM.span(null,tally),React.DOM.button({"onClick": (function (p1__13730_SHARP_){return examples.counters.core.increase.call(null,p1__13730_SHARP_,self__.app,state,self__.owner);
})},"+"),React.DOM.button({"onClick": (function (p1__13731_SHARP_){return examples.counters.core.decrease.call(null,p1__13731_SHARP_,self__.app,state,self__.owner);
})},"-"),React.DOM.span({"style": examples.counters.core.display_click_alert.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(state))},"I was clicked"));
});
examples.counters.core.t13737.prototype.om$core$IInitState$ = true;
examples.counters.core.t13737.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tally","tally",1124029662),10], null);
});
examples.counters.core.t13737.prototype.om$core$IDisplayName$ = true;
examples.counters.core.t13737.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "counter";
});
examples.counters.core.t13737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13739){var self__ = this;
var _13739__$1 = this;return self__.meta13738;
});
examples.counters.core.t13737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13739,meta13738__$1){var self__ = this;
var _13739__$1 = this;return (new examples.counters.core.t13737(self__.opts,self__.owner,self__.app,self__.one_counter,meta13738__$1));
});
examples.counters.core.__GT_t13737 = (function __GT_t13737(opts__$1,owner__$1,app__$1,one_counter__$1,meta13738){return (new examples.counters.core.t13737(opts__$1,owner__$1,app__$1,one_counter__$1,meta13738));
});
}
return (new examples.counters.core.t13737(opts,owner,app,one_counter,null));
});
