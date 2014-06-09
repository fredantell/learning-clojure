// Compiled by ClojureScript 0.0-2173
goog.provide('examples.harmful.core');
goog.require('cljs.core');
goog.require('goog.ui.IdGenerator');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
examples.harmful.core.get_gstate = (function get_gstate(owner){return om.core.state.call(null,(owner.props["__om_cursor"]));
});
examples.harmful.core.merge_pending_state = (function merge_pending_state(owner){var gstate = examples.harmful.core.get_gstate.call(null,owner);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,owner)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),spath);if(cljs.core.truth_(new cljs.core.Keyword(null,"pending-state","pending-state",4640376909).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,(function (states__$1){return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,states__$1,new cljs.core.Keyword(null,"render-state","render-state",666961164),cljs.core.merge.call(null,new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states__$1),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909).cljs$core$IFn$_invoke$arity$1(states__$1))),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909));
}));
} else
{return null;
}
});
examples.harmful.core.no_local_state_meths = cljs.core.assoc.call(null,om.core.pure_methods,new cljs.core.Keyword(null,"getInitialState","getInitialState",2219830677),(function (){var this$ = this;var c = om.core.children.call(null,this$);var props = this$.props;var istate = (function (){var or__4071__auto__ = (props["__om_init_state"]);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();var id = (function (){var or__4071__auto__ = new cljs.core.Keyword("om.core","id","om.core/id",2663181321).cljs$core$IFn$_invoke$arity$1(istate);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();var state = cljs.core.merge.call(null,cljs.core.dissoc.call(null,istate,new cljs.core.Keyword("om.core","id","om.core/id",2663181321)),(((function (){var G__50045 = c;if(G__50045)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__50045.om$core$IInitState$;
}
})()))
{return true;
} else
{if((!G__50045.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__50045);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IInitState,G__50045);
}
})())?(function (){var _STAR_read_enabled_STAR_50046 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
return om.core.init_state.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50046;
}})():null));var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),id,new cljs.core.Keyword(null,"render-state","render-state",666961164)], null);(props["__om_init_state"] = null);
cljs.core.swap_BANG_.call(null,examples.harmful.core.get_gstate.call(null,this$),cljs.core.assoc_in,spath,state);
return {"__om_id": id};
}),new cljs.core.Keyword(null,"componentWillMount","componentWillMount",3257856604),(function (){var this$ = this;om.core.merge_props_state.call(null,this$);
var c_50057 = om.core.children.call(null,this$);if((function (){var G__50047 = c_50057;if(G__50047)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__50047.om$core$IWillMount$;
}
})()))
{return true;
} else
{if((!G__50047.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__50047);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillMount,G__50047);
}
})())
{var _STAR_read_enabled_STAR_50048_50058 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_mount.call(null,c_50057);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50048_50058;
}} else
{}
return examples.harmful.core.merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",4147620643),(function (){var this$ = this;var c = om.core.children.call(null,this$);var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$)], null);if((function (){var G__50049 = c;if(G__50049)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__50049.om$core$IWillUnmount$;
}
})()))
{return true;
} else
{if((!G__50049.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__50049);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUnmount,G__50049);
}
})())
{var _STAR_read_enabled_STAR_50050_50059 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_unmount.call(null,c);
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50050_50059;
}} else
{}
return cljs.core.swap_BANG_.call(null,examples.harmful.core.get_gstate.call(null,this$),cljs.core.update_in,spath,cljs.core.dissoc);
}),new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",3193956709),(function (next_props,next_state){var this$ = this;var _STAR_read_enabled_STAR_50051 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$.props;var state = this$.state;var c = om.core.children.call(null,this$);om.core.merge_props_state.call(null,this$,next_props);
if((function (){var G__50052 = c;if(G__50052)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__50052.om$core$IShouldUpdate$;
}
})()))
{return true;
} else
{if((!G__50052.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__50052);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IShouldUpdate,G__50052);
}
})())
{return om.core.should_update.call(null,c,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
} else
{if(!((om.core._value.call(null,(props["__om_cursor"])) === om.core._value.call(null,(next_props["__om_cursor"])))))
{return true;
} else
{if(!((cljs.core.get_in.call(null,cljs.core.deref.call(null,examples.harmful.core.get_gstate.call(null,this$)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909)], null)) == null)))
{return true;
} else
{if(!(((props["__om_index"]) === (next_props["__om_index"]))))
{return true;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return false;
} else
{return null;
}
}
}
}
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50051;
}}),new cljs.core.Keyword(null,"componentWillUpdate","componentWillUpdate",2086388618),(function (next_props,next_state){var this$ = this;var props_50060 = this$.props;var c_50061 = om.core.children.call(null,this$);if((function (){var G__50053 = c_50061;if(G__50053)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__50053.om$core$IWillUpdate$;
}
})()))
{return true;
} else
{if((!G__50053.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__50053);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IWillUpdate,G__50053);
}
})())
{var state_50062 = this$.state;var _STAR_read_enabled_STAR_50054_50063 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.will_update.call(null,c_50061,om.core.get_props.call(null,{"props": next_props}),om.core._get_state.call(null,this$));
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50054_50063;
}} else
{}
return examples.harmful.core.merge_pending_state.call(null,this$);
}),new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",4103164189),(function (prev_props,prev_state){var this$ = this;var c = om.core.children.call(null,this$);var gstate = examples.harmful.core.get_gstate.call(null,this$);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,gstate),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$)], null));var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$)], null);if((function (){var G__50055 = c;if(G__50055)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__50055.om$core$IDidUpdate$;
}
})()))
{return true;
} else
{if((!G__50055.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__50055);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,om.core.IDidUpdate,G__50055);
}
})())
{var state_50064 = this$.state;var _STAR_read_enabled_STAR_50056_50065 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
om.core.did_update.call(null,c,om.core.get_props.call(null,{"props": prev_props}),(function (){var or__4071__auto__ = new cljs.core.Keyword(null,"previous-state","previous-state",4207358381).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states);
}
})());
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50056_50065;
}} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"previous-state","previous-state",4207358381).cljs$core$IFn$_invoke$arity$1(states)))
{return cljs.core.swap_BANG_.call(null,gstate,cljs.core.update_in,spath,cljs.core.dissoc,new cljs.core.Keyword(null,"previous-state","previous-state",4207358381));
} else
{return null;
}
}));
examples.harmful.core.NoLocal = React.createClass((function (){var x50066 = cljs.core.clj__GT_js.call(null,examples.harmful.core.no_local_state_meths);x50066.om$core$IGetState$ = true;
x50066.om$core$IGetState$_get_state$arity$1 = (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,examples.harmful.core.get_gstate.call(null,this$__$1)),spath);var or__4071__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",4640376909).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states);
}
});
x50066.om$core$IGetState$_get_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});
x50066.om$core$IGetRenderState$ = true;
x50066.om$core$IGetRenderState$_get_render_state$arity$1 = (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",666961164)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,examples.harmful.core.get_gstate.call(null,this$__$1)),spath);
});
x50066.om$core$IGetRenderState$_get_render_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});
x50066.om$core$ISetState$ = true;
x50066.om$core$ISetState$_set_state_BANG_$arity$2 = (function (this$,val){var this$__$1 = this;var _STAR_read_enabled_STAR_50067 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var cursor = (this$__$1.props["__om_cursor"]);var path = om.core._path.call(null,cursor);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909)], null);cljs.core.swap_BANG_.call(null,examples.harmful.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50067;
}});
x50066.om$core$ISetState$_set_state_BANG_$arity$3 = (function (this$,ks,val){var this$__$1 = this;var _STAR_read_enabled_STAR_50068 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var cursor = (props["__om_cursor"]);var path = om.core._path.call(null,cursor);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909)], null);cljs.core.swap_BANG_.call(null,examples.harmful.core.get_gstate.call(null,this$__$1),cljs.core.update_in,spath,cljs.core.assoc_in,ks,val);
if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_50068;
}});
return x50066;
})());
examples.harmful.core.no_local = (function no_local(obj){return (new examples.harmful.core.NoLocal(obj));
});
examples.harmful.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"A Counter!"], null));
examples.harmful.core.counter_view = (function counter_view(data,owner){if(typeof examples.harmful.core.t50074 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t50074 = (function (owner,data,counter_view,meta50075){
this.owner = owner;
this.data = data;
this.counter_view = counter_view;
this.meta50075 = meta50075;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t50074.cljs$lang$type = true;
examples.harmful.core.t50074.cljs$lang$ctorStr = "examples.harmful.core/t50074";
examples.harmful.core.t50074.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t50074");
});
examples.harmful.core.t50074.prototype.om$core$IRenderState$ = true;
examples.harmful.core.t50074.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__50077){var self__ = this;
var map__50078 = p__50077;var map__50078__$1 = ((cljs.core.seq_QMARK_.call(null,map__50078))?cljs.core.apply.call(null,cljs.core.hash_map,map__50078):map__50078);var count = cljs.core.get.call(null,map__50078__$1,new cljs.core.Keyword(null,"count","count",1108755585));var ___$1 = this;return React.DOM.div(null,React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.div({"onClick": (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"count","count",1108755585),(count + 1));
})},count));
});
examples.harmful.core.t50074.prototype.om$core$IInitState$ = true;
examples.harmful.core.t50074.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",1108755585),0], null);
});
examples.harmful.core.t50074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50076){var self__ = this;
var _50076__$1 = this;return self__.meta50075;
});
examples.harmful.core.t50074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50076,meta50075__$1){var self__ = this;
var _50076__$1 = this;return (new examples.harmful.core.t50074(self__.owner,self__.data,self__.counter_view,meta50075__$1));
});
examples.harmful.core.__GT_t50074 = (function __GT_t50074(owner__$1,data__$1,counter_view__$1,meta50075){return (new examples.harmful.core.t50074(owner__$1,data__$1,counter_view__$1,meta50075));
});
}
return (new examples.harmful.core.t50074(owner,data,counter_view,null));
});
examples.harmful.core.label_style = (function label_style(){return {"style": {"display": "inline-block", "width": "60px"}};
});
examples.harmful.core.debug_view = (function debug_view(p__50079,owner){var vec__50086 = p__50079;var f = cljs.core.nth.call(null,vec__50086,0,null);var cursor = cljs.core.nth.call(null,vec__50086,1,null);var opts = cljs.core.nth.call(null,vec__50086,2,null);if(typeof examples.harmful.core.t50087 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t50087 = (function (opts,cursor,f,vec__50086,owner,p__50079,debug_view,meta50088){
this.opts = opts;
this.cursor = cursor;
this.f = f;
this.vec__50086 = vec__50086;
this.owner = owner;
this.p__50079 = p__50079;
this.debug_view = debug_view;
this.meta50088 = meta50088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t50087.cljs$lang$type = true;
examples.harmful.core.t50087.cljs$lang$ctorStr = "examples.harmful.core/t50087";
examples.harmful.core.t50087.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t50087");
});
examples.harmful.core.t50087.prototype.om$core$IRenderState$ = true;
examples.harmful.core.t50087.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__50090){var self__ = this;
var map__50091 = p__50090;var map__50091__$1 = ((cljs.core.seq_QMARK_.call(null,map__50091))?cljs.core.apply.call(null,cljs.core.hash_map,map__50091):map__50091);var id = cljs.core.get.call(null,map__50091__$1,new cljs.core.Keyword(null,"id","id",1013907597));var ___$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.label(examples.harmful.core.label_style.call(null),"Props:"),React.DOM.code(null,cljs.core.pr_str.call(null,om.core.value.call(null,self__.cursor)))),React.DOM.div(null,React.DOM.label(examples.harmful.core.label_style.call(null),"State:"),React.DOM.code(null,cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,self__.cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),id,new cljs.core.Keyword(null,"render-state","render-state",666961164)], null))))),om.core.build_STAR_.call(null,self__.f,self__.cursor,cljs.core.assoc.call(null,self__.opts,new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.core","id","om.core/id",2663181321),id], null))));
});
examples.harmful.core.t50087.prototype.om$core$IDidMount$ = true;
examples.harmful.core.t50087.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.identity);
});
examples.harmful.core.t50087.prototype.om$core$IInitState$ = true;
examples.harmful.core.t50087.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),goog.ui.IdGenerator.getInstance().getNextUniqueId()], null);
});
examples.harmful.core.t50087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50089){var self__ = this;
var _50089__$1 = this;return self__.meta50088;
});
examples.harmful.core.t50087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50089,meta50088__$1){var self__ = this;
var _50089__$1 = this;return (new examples.harmful.core.t50087(self__.opts,self__.cursor,self__.f,self__.vec__50086,self__.owner,self__.p__50079,self__.debug_view,meta50088__$1));
});
examples.harmful.core.__GT_t50087 = (function __GT_t50087(opts__$1,cursor__$1,f__$1,vec__50086__$1,owner__$1,p__50079__$1,debug_view__$1,meta50088){return (new examples.harmful.core.t50087(opts__$1,cursor__$1,f__$1,vec__50086__$1,owner__$1,p__50079__$1,debug_view__$1,meta50088));
});
}
return (new examples.harmful.core.t50087(opts,cursor,f,vec__50086,owner,p__50079,debug_view,null));
});
examples.harmful.core.debug = (function debug(app,owner,opts){if(typeof examples.harmful.core.t50095 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t50095 = (function (opts,owner,app,debug,meta50096){
this.opts = opts;
this.owner = owner;
this.app = app;
this.debug = debug;
this.meta50096 = meta50096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t50095.cljs$lang$type = true;
examples.harmful.core.t50095.cljs$lang$ctorStr = "examples.harmful.core/t50095";
examples.harmful.core.t50095.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t50095");
});
examples.harmful.core.t50095.prototype.om$core$IRender$ = true;
examples.harmful.core.t50095.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.h2(null,"Hello!");
});
examples.harmful.core.t50095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50097){var self__ = this;
var _50097__$1 = this;return self__.meta50096;
});
examples.harmful.core.t50095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50097,meta50096__$1){var self__ = this;
var _50097__$1 = this;return (new examples.harmful.core.t50095(self__.opts,self__.owner,self__.app,self__.debug,meta50096__$1));
});
examples.harmful.core.__GT_t50095 = (function __GT_t50095(opts__$1,owner__$1,app__$1,debug__$1,meta50096){return (new examples.harmful.core.t50095(opts__$1,owner__$1,app__$1,debug__$1,meta50096));
});
}
return (new examples.harmful.core.t50095(opts,owner,app,debug,null));
});
om.core.root.call(null,(function (app,owner){if(typeof examples.harmful.core.t50098 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t50098 = (function (owner,app,meta50099){
this.owner = owner;
this.app = app;
this.meta50099 = meta50099;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t50098.cljs$lang$type = true;
examples.harmful.core.t50098.cljs$lang$ctorStr = "examples.harmful.core/t50098";
examples.harmful.core.t50098.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t50098");
});
examples.harmful.core.t50098.prototype.om$core$IRender$ = true;
examples.harmful.core.t50098.prototype.om$core$IRender$render$arity$1 = (function (this__48071__auto__){var self__ = this;
var this__48071__auto____$1 = this;om.core.build.call(null,examples.harmful.core.counter_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctor","ctor",1016968582),examples.harmful.core.no_local], null));
return om.core.build.call(null,examples.harmful.core.counter_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctor","ctor",1016968582),examples.harmful.core.no_local], null));
});
examples.harmful.core.t50098.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50100){var self__ = this;
var _50100__$1 = this;return self__.meta50099;
});
examples.harmful.core.t50098.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50100,meta50099__$1){var self__ = this;
var _50100__$1 = this;return (new examples.harmful.core.t50098(self__.owner,self__.app,meta50099__$1));
});
examples.harmful.core.__GT_t50098 = (function __GT_t50098(owner__$1,app__$1,meta50099){return (new examples.harmful.core.t50098(owner__$1,app__$1,meta50099));
});
}
return (new examples.harmful.core.t50098(owner,app,null));
}),examples.harmful.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"instrument","instrument",2409387865),(function (f,cursor,opts){if(cljs.core._EQ_.call(null,f,examples.harmful.core.counter_view))
{return om.core.build_STAR_.call(null,examples.harmful.core.debug_view,om.core.graft.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cursor,opts], null),cursor));
} else
{return new cljs.core.Keyword("om.core","pass","om.core/pass",2667619603);
}
})], null));

//# sourceMappingURL=core.js.map