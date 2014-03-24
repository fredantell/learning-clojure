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
examples.counters.core.target = document.getElementById("manual");
examples.counters.core.increase = (function increase(e,app,p__13262,owner){var map__13264 = p__13262;var map__13264__$1 = ((cljs.core.seq_QMARK_.call(null,map__13264))?cljs.core.apply.call(null,cljs.core.hash_map,map__13264):map__13264);var state = map__13264__$1;var tally = cljs.core.get.call(null,map__13264__$1,new cljs.core.Keyword(null,"tally","tally",1124029662));om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"tally","tally",1124029662),(tally + 1));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"cc","cc",1013907410).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(state));
});
examples.counters.core.decrease = (function decrease(e,app,state,owner){om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"tally","tally",1124029662),(new cljs.core.Keyword(null,"tally","tally",1124029662).cljs$core$IFn$_invoke$arity$1(state) - 1));
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"cc","cc",1013907410).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(state));
});
examples.counters.core.show = (function show(bool){if(cljs.core.truth_(bool))
{return {};
} else
{return {"display": "none"};
}
});
examples.counters.core.one_counter = (function one_counter(app,owner,opts){if(typeof examples.counters.core.t13272 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t13272 = (function (opts,owner,app,one_counter,meta13273){
this.opts = opts;
this.owner = owner;
this.app = app;
this.one_counter = one_counter;
this.meta13273 = meta13273;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t13272.cljs$lang$type = true;
examples.counters.core.t13272.cljs$lang$ctorStr = "examples.counters.core/t13272";
examples.counters.core.t13272.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.counters.core/t13272");
});
examples.counters.core.t13272.prototype.om$core$IRenderState$ = true;
examples.counters.core.t13272.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13275){var self__ = this;
var map__13276 = p__13275;var map__13276__$1 = ((cljs.core.seq_QMARK_.call(null,map__13276))?cljs.core.apply.call(null,cljs.core.hash_map,map__13276):map__13276);var state = map__13276__$1;var lc = cljs.core.get.call(null,map__13276__$1,new cljs.core.Keyword(null,"lc","lc",1013907689));var id = cljs.core.get.call(null,map__13276__$1,new cljs.core.Keyword(null,"id","id",1013907597));var tally = cljs.core.get.call(null,map__13276__$1,new cljs.core.Keyword(null,"tally","tally",1124029662));var ___$1 = this;return React.DOM.div(null,cljs.core.println.call(null,state),React.DOM.span(null,tally),React.DOM.button({"onClick": (function (p1__13265_SHARP_){return examples.counters.core.increase.call(null,p1__13265_SHARP_,self__.app,state,self__.owner);
})},"+"),React.DOM.button({"onClick": (function (p1__13266_SHARP_){return examples.counters.core.decrease.call(null,p1__13266_SHARP_,self__.app,state,self__.owner);
})},"-"),React.DOM.span({"style": examples.counters.core.show.call(null,cljs.core._EQ_.call(null,id,lc))},"I was clicked"));
});
examples.counters.core.t13272.prototype.om$core$IInitState$ = true;
examples.counters.core.t13272.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tally","tally",1124029662),10], null);
});
examples.counters.core.t13272.prototype.om$core$IDisplayName$ = true;
examples.counters.core.t13272.prototype.om$core$IDisplayName$display_name$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return "counter";
});
examples.counters.core.t13272.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13274){var self__ = this;
var _13274__$1 = this;return self__.meta13273;
});
examples.counters.core.t13272.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13274,meta13273__$1){var self__ = this;
var _13274__$1 = this;return (new examples.counters.core.t13272(self__.opts,self__.owner,self__.app,self__.one_counter,meta13273__$1));
});
examples.counters.core.__GT_t13272 = (function __GT_t13272(opts__$1,owner__$1,app__$1,one_counter__$1,meta13273){return (new examples.counters.core.t13272(opts__$1,owner__$1,app__$1,one_counter__$1,meta13273));
});
}
return (new examples.counters.core.t13272(opts,owner,app,one_counter,null));
});
examples.counters.core.manual_counters = (function manual_counters(app,owner,opts){if(typeof examples.counters.core.t13307 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.counters.core.t13307 = (function (opts,owner,app,manual_counters,meta13308){
this.opts = opts;
this.owner = owner;
this.app = app;
this.manual_counters = manual_counters;
this.meta13308 = meta13308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.counters.core.t13307.cljs$lang$type = true;
examples.counters.core.t13307.cljs$lang$ctorStr = "examples.counters.core/t13307";
examples.counters.core.t13307.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.counters.core/t13307");
});
examples.counters.core.t13307.prototype.om$core$IRenderState$ = true;
examples.counters.core.t13307.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__13310){var self__ = this;
var map__13311 = p__13310;var map__13311__$1 = ((cljs.core.seq_QMARK_.call(null,map__13311))?cljs.core.apply.call(null,cljs.core.hash_map,map__13311):map__13311);var state = map__13311__$1;var last_clicked = cljs.core.get.call(null,map__13311__$1,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554));var ___$1 = this;cljs.core.println.call(null,"I'm rendering");
return cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,(function (p1__13277_SHARP_){return om.core.build.call(null,examples.counters.core.one_counter,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",1013907597),p1__13277_SHARP_,new cljs.core.Keyword(null,"lc","lc",1013907689),new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"cc","cc",1013907410),new cljs.core.Keyword(null,"click-chan","click-chan",4485289961).cljs$core$IFn$_invoke$arity$1(state)], null)], null));
}),cljs.core.range.call(null,0,10)));
});
examples.counters.core.t13307.prototype.om$core$IWillMount$ = true;
examples.counters.core.t13307.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var click_chan = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"click-chan","click-chan",4485289961));var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_13324){var state_val_13325 = (state_13324[1]);if((state_val_13325 === 4))
{var inst_13314 = (state_13324[2]);var inst_13315 = cljs.core.println.call(null,"You got a message");var inst_13316 = cljs.core.println.call(null,inst_13314);var inst_13317 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554),inst_13314);var inst_13318 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554));var inst_13319 = cljs.core.println.call(null,"New state is ",inst_13318);var state_13324__$1 = (function (){var statearr_13326 = state_13324;(statearr_13326[7] = inst_13315);
(statearr_13326[8] = inst_13316);
(statearr_13326[9] = inst_13317);
(statearr_13326[10] = inst_13319);
return statearr_13326;
})();var statearr_13327_13336 = state_13324__$1;(statearr_13327_13336[2] = null);
(statearr_13327_13336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13325 === 3))
{var inst_13322 = (state_13324[2]);var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13324__$1,inst_13322);
} else
{if((state_val_13325 === 2))
{var state_13324__$1 = state_13324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13324__$1,4,click_chan);
} else
{if((state_val_13325 === 1))
{var state_13324__$1 = state_13324;var statearr_13328_13337 = state_13324__$1;(statearr_13328_13337[2] = null);
(statearr_13328_13337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_13332 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13332[0] = state_machine__6871__auto__);
(statearr_13332[1] = 1);
return statearr_13332;
});
var state_machine__6871__auto____1 = (function (state_13324){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_13324);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e13333){if((e13333 instanceof Object))
{var ex__6874__auto__ = e13333;var statearr_13334_13338 = state_13324;(statearr_13334_13338[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13333;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13339 = state_13324;
state_13324 = G__13339;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_13324){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_13324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_13335 = f__6886__auto__.call(null);(statearr_13335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_13335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
}));
return c__6885__auto__;
});
examples.counters.core.t13307.prototype.om$core$IInitState$ = true;
examples.counters.core.t13307.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"last-clicked","last-clicked",1206387554),1,new cljs.core.Keyword(null,"click-chan","click-chan",4485289961),cljs.core.async.chan.call(null)], null);
});
examples.counters.core.t13307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13309){var self__ = this;
var _13309__$1 = this;return self__.meta13308;
});
examples.counters.core.t13307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13309,meta13308__$1){var self__ = this;
var _13309__$1 = this;return (new examples.counters.core.t13307(self__.opts,self__.owner,self__.app,self__.manual_counters,meta13308__$1));
});
examples.counters.core.__GT_t13307 = (function __GT_t13307(opts__$1,owner__$1,app__$1,manual_counters__$1,meta13308){return (new examples.counters.core.t13307(opts__$1,owner__$1,app__$1,manual_counters__$1,meta13308));
});
}
return (new examples.counters.core.t13307(opts,owner,app,manual_counters,null));
});
examples.counters.core._BANG_manual = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
om.core.root.call(null,examples.counters.core.manual_counters,examples.counters.core._BANG_manual,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),examples.counters.core.target], null));

//# sourceMappingURL=core.js.map