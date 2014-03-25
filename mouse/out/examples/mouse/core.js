// Compiled by ClojureScript 0.0-2173
goog.provide('examples.mouse.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.events.EventType');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
examples.mouse.core.color_list = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blue","red","magenta","yellow","black"], null);
examples.mouse.core.random_color = (function random_color(){return cljs.core.rand_nth.call(null,examples.mouse.core.color_list);
});
examples.mouse.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);cljs.core.println.call(null,"Listen Called");
goog.events.listen(el,type,(function (p1__22430_SHARP_){return cljs.core.async.put_BANG_.call(null,out,p1__22430_SHARP_);
}));
return out;
});
examples.mouse.core.extract_mouse_pos = (function extract_mouse_pos(e){return [cljs.core.str("Coords: "),cljs.core.str(e.clientX),cljs.core.str("x"),cljs.core.str(e.clientY)].join('');
});
examples.mouse.core.handle_rate_change = (function handle_rate_change(e,app,owner,state){cljs.core.println.call(null,"handle change fired");
console.dir(e.target.value);
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"rate","rate",1017397330),e.target.value);
});
examples.mouse.core.mouse_view = (function mouse_view(app,owner,opts){if(typeof examples.mouse.core.t22499 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.mouse.core.t22499 = (function (opts,owner,app,mouse_view,meta22500){
this.opts = opts;
this.owner = owner;
this.app = app;
this.mouse_view = mouse_view;
this.meta22500 = meta22500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.mouse.core.t22499.cljs$lang$type = true;
examples.mouse.core.t22499.cljs$lang$ctorStr = "examples.mouse.core/t22499";
examples.mouse.core.t22499.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.mouse.core/t22499");
});
examples.mouse.core.t22499.prototype.om$core$IRenderState$ = true;
examples.mouse.core.t22499.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.div({"style": {"color": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"color","color",1108746965))}},new cljs.core.Keyword(null,"mouse-pos","mouse-pos",1599110302).cljs$core$IFn$_invoke$arity$1(self__.app)),om.dom.input.call(null,{"value": om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"rate","rate",1017397330)), "onChange": (function (p1__22431_SHARP_){return examples.mouse.core.handle_rate_change.call(null,p1__22431_SHARP_,self__.app,self__.owner,state);
})},"Rate of Change"));
});
examples.mouse.core.t22499.prototype.om$core$IWillMount$ = true;
examples.mouse.core.t22499.prototype.om$core$IWillMount$will_mount$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var c_mouse_pos = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"c-mouse-pos","c-mouse-pos",3836379060)], null));var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_22541){var state_val_22542 = (state_22541[1]);if((state_val_22542 === 1))
{var inst_22502 = cljs.core.async.timeout.call(null,examples.mouse.core.rate);var inst_22503 = inst_22502;var state_22541__$1 = (function (){var statearr_22543 = state_22541;(statearr_22543[7] = inst_22503);
return statearr_22543;
})();var statearr_22544_22566 = state_22541__$1;(statearr_22544_22566[2] = null);
(statearr_22544_22566[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22542 === 2))
{var inst_22503 = (state_22541[7]);var inst_22506 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"rate","rate",1017397330));var inst_22507 = [inst_22503,c_mouse_pos];var inst_22508 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_22507,null));var state_22541__$1 = (function (){var statearr_22545 = state_22541;(statearr_22545[8] = inst_22506);
return statearr_22545;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_22541__$1,4,inst_22508);
} else
{if((state_val_22542 === 3))
{var inst_22539 = (state_22541[2]);var state_22541__$1 = state_22541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22541__$1,inst_22539);
} else
{if((state_val_22542 === 4))
{var inst_22512 = (state_22541[9]);var inst_22510 = (state_22541[2]);var inst_22511 = cljs.core.nth.call(null,inst_22510,0,null);var inst_22512__$1 = cljs.core.nth.call(null,inst_22510,1,null);var inst_22516 = cljs.core._EQ_.call(null,c_mouse_pos,inst_22512__$1);var state_22541__$1 = (function (){var statearr_22547 = state_22541;(statearr_22547[10] = inst_22511);
(statearr_22547[9] = inst_22512__$1);
return statearr_22547;
})();if(inst_22516)
{var statearr_22548_22567 = state_22541__$1;(statearr_22548_22567[1] = 5);
} else
{var statearr_22549_22568 = state_22541__$1;(statearr_22549_22568[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22542 === 5))
{var inst_22503 = (state_22541[7]);var inst_22511 = (state_22541[10]);var inst_22512 = (state_22541[9]);var inst_22518 = cljs.core.println.call(null,"mouse channel",inst_22512);var inst_22519 = examples.mouse.core.extract_mouse_pos.call(null,inst_22511);var inst_22520 = om.core.update_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"mouse-pos","mouse-pos",1599110302),inst_22519);var tmp22546 = inst_22503;var inst_22503__$1 = tmp22546;var state_22541__$1 = (function (){var statearr_22550 = state_22541;(statearr_22550[11] = inst_22518);
(statearr_22550[7] = inst_22503__$1);
(statearr_22550[12] = inst_22520);
return statearr_22550;
})();var statearr_22551_22569 = state_22541__$1;(statearr_22551_22569[2] = null);
(statearr_22551_22569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22542 === 6))
{var inst_22503 = (state_22541[7]);var inst_22512 = (state_22541[9]);var inst_22523 = cljs.core._EQ_.call(null,inst_22503,inst_22512);var state_22541__$1 = state_22541;if(inst_22523)
{var statearr_22552_22570 = state_22541__$1;(statearr_22552_22570[1] = 8);
} else
{var statearr_22553_22571 = state_22541__$1;(statearr_22553_22571[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22542 === 7))
{var inst_22537 = (state_22541[2]);var state_22541__$1 = state_22541;var statearr_22554_22572 = state_22541__$1;(statearr_22554_22572[2] = inst_22537);
(statearr_22554_22572[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22542 === 8))
{var inst_22506 = (state_22541[8]);var inst_22525 = cljs.core.println.call(null,"timeout channel");var inst_22526 = examples.mouse.core.random_color.call(null);var inst_22527 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"color","color",1108746965),inst_22526);var inst_22528 = cljs.core.async.timeout.call(null,inst_22506);var inst_22503 = inst_22528;var state_22541__$1 = (function (){var statearr_22555 = state_22541;(statearr_22555[7] = inst_22503);
(statearr_22555[13] = inst_22527);
(statearr_22555[14] = inst_22525);
return statearr_22555;
})();var statearr_22556_22573 = state_22541__$1;(statearr_22556_22573[2] = null);
(statearr_22556_22573[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22542 === 9))
{var inst_22512 = (state_22541[9]);var inst_22531 = [cljs.core.str("No matching clause: "),cljs.core.str(inst_22512)].join('');var inst_22532 = (new Error(inst_22531));var inst_22533 = (function(){throw inst_22532})();var state_22541__$1 = state_22541;var statearr_22557_22574 = state_22541__$1;(statearr_22557_22574[2] = inst_22533);
(statearr_22557_22574[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22542 === 10))
{var inst_22535 = (state_22541[2]);var state_22541__$1 = state_22541;var statearr_22558_22575 = state_22541__$1;(statearr_22558_22575[2] = inst_22535);
(statearr_22558_22575[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_22562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_22562[0] = state_machine__6871__auto__);
(statearr_22562[1] = 1);
return statearr_22562;
});
var state_machine__6871__auto____1 = (function (state_22541){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_22541);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e22563){if((e22563 instanceof Object))
{var ex__6874__auto__ = e22563;var statearr_22564_22576 = state_22541;(statearr_22564_22576[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22577 = state_22541;
state_22541 = G__22577;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_22541){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_22541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_22565 = f__6886__auto__.call(null);(statearr_22565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_22565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
}));
return c__6885__auto__;
});
examples.mouse.core.t22499.prototype.om$core$IInitState$ = true;
examples.mouse.core.t22499.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1108746965),"blue",new cljs.core.Keyword(null,"rate","rate",1017397330),1000,new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"c-mouse-pos","c-mouse-pos",3836379060),examples.mouse.core.listen.call(null,window,goog.events.EventType.MOUSEMOVE)], null)], null);
});
examples.mouse.core.t22499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22501){var self__ = this;
var _22501__$1 = this;return self__.meta22500;
});
examples.mouse.core.t22499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22501,meta22500__$1){var self__ = this;
var _22501__$1 = this;return (new examples.mouse.core.t22499(self__.opts,self__.owner,self__.app,self__.mouse_view,meta22500__$1));
});
examples.mouse.core.__GT_t22499 = (function __GT_t22499(opts__$1,owner__$1,app__$1,mouse_view__$1,meta22500){return (new examples.mouse.core.t22499(opts__$1,owner__$1,app__$1,mouse_view__$1,meta22500));
});
}
return (new examples.mouse.core.t22499(opts,owner,app,mouse_view,null));
});
om.core.root.call(null,examples.mouse.core.mouse_view,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mouse-pos","mouse-pos",1599110302),"hello"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("rewrite")], null));

//# sourceMappingURL=core.js.map