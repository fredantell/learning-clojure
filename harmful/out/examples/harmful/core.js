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
examples.harmful.core.NoLocal = React.createClass((function (){var x6869 = cljs.core.clj__GT_js.call(null,examples.harmful.core.no_local_state_meths);x6869.om$core$IGetState$ = true;
x6869.om$core$IGetState$_get_state$arity$1 = (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1)], null);var states = cljs.core.get_in.call(null,cljs.core.deref.call(null,examples.harmful.core.get_gstate.call(null,this$__$1)),spath);var or__4071__auto__ = new cljs.core.Keyword(null,"pending-state","pending-state",4640376909).cljs$core$IFn$_invoke$arity$1(states);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return new cljs.core.Keyword(null,"render-state","render-state",666961164).cljs$core$IFn$_invoke$arity$1(states);
}
});
x6869.om$core$IGetState$_get_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_state.call(null,this$__$1),ks);
});
x6869.om$core$IGetRenderState$ = true;
x6869.om$core$IGetRenderState$_get_render_state$arity$1 = (function (this$){var this$__$1 = this;var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1),new cljs.core.Keyword(null,"render-state","render-state",666961164)], null);return cljs.core.get_in.call(null,cljs.core.deref.call(null,examples.harmful.core.get_gstate.call(null,this$__$1)),spath);
});
x6869.om$core$IGetRenderState$_get_render_state$arity$2 = (function (this$,ks){var this$__$1 = this;return cljs.core.get_in.call(null,om.core._get_render_state.call(null,this$__$1),ks);
});
x6869.om$core$ISetState$ = true;
x6869.om$core$ISetState$_set_state_BANG_$arity$2 = (function (this$,val){var this$__$1 = this;var _STAR_read_enabled_STAR_6870 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var cursor = (this$__$1.props["__om_cursor"]);var path = om.core._path.call(null,cursor);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909)], null);cljs.core.swap_BANG_.call(null,examples.harmful.core.get_gstate.call(null,this$__$1),cljs.core.assoc_in,spath,val);
if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_6870;
}});
x6869.om$core$ISetState$_set_state_BANG_$arity$3 = (function (this$,ks,val){var this$__$1 = this;var _STAR_read_enabled_STAR_6871 = om.core._STAR_read_enabled_STAR_;try{om.core._STAR_read_enabled_STAR_ = true;
var props = this$__$1.props;var state = this$__$1.state;var cursor = (props["__om_cursor"]);var path = om.core._path.call(null,cursor);var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),om.core.id.call(null,this$__$1),new cljs.core.Keyword(null,"pending-state","pending-state",4640376909)], null);cljs.core.swap_BANG_.call(null,examples.harmful.core.get_gstate.call(null,this$__$1),cljs.core.update_in,spath,cljs.core.assoc_in,ks,val);
if(cljs.core.empty_QMARK_.call(null,path))
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.clone);
} else
{return cljs.core.swap_BANG_.call(null,om.core._state.call(null,cursor),cljs.core.update_in,path,cljs.core.clone);
}
}finally {om.core._STAR_read_enabled_STAR_ = _STAR_read_enabled_STAR_6871;
}});
return x6869;
})());
examples.harmful.core.no_local = (function no_local(obj){return (new examples.harmful.core.NoLocal(obj));
});
examples.harmful.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",1124275658),"A Counter!"], null));
examples.harmful.core.counter_view = (function counter_view(data,owner){if(typeof examples.harmful.core.t6877 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t6877 = (function (owner,data,counter_view,meta6878){
this.owner = owner;
this.data = data;
this.counter_view = counter_view;
this.meta6878 = meta6878;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t6877.cljs$lang$type = true;
examples.harmful.core.t6877.cljs$lang$ctorStr = "examples.harmful.core/t6877";
examples.harmful.core.t6877.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t6877");
});
examples.harmful.core.t6877.prototype.om$core$IRenderState$ = true;
examples.harmful.core.t6877.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__6880){var self__ = this;
var map__6881 = p__6880;var map__6881__$1 = ((cljs.core.seq_QMARK_.call(null,map__6881))?cljs.core.apply.call(null,cljs.core.hash_map,map__6881):map__6881);var count = cljs.core.get.call(null,map__6881__$1,new cljs.core.Keyword(null,"count","count",1108755585));var ___$1 = this;return React.DOM.div(null,React.DOM.h2(null,new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.div({"onClick": (function (e){return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"count","count",1108755585),(count + 1));
})},count));
});
examples.harmful.core.t6877.prototype.om$core$IInitState$ = true;
examples.harmful.core.t6877.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"count","count",1108755585),0], null);
});
examples.harmful.core.t6877.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6879){var self__ = this;
var _6879__$1 = this;return self__.meta6878;
});
examples.harmful.core.t6877.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6879,meta6878__$1){var self__ = this;
var _6879__$1 = this;return (new examples.harmful.core.t6877(self__.owner,self__.data,self__.counter_view,meta6878__$1));
});
examples.harmful.core.__GT_t6877 = (function __GT_t6877(owner__$1,data__$1,counter_view__$1,meta6878){return (new examples.harmful.core.t6877(owner__$1,data__$1,counter_view__$1,meta6878));
});
}
return (new examples.harmful.core.t6877(owner,data,counter_view,null));
});
examples.harmful.core.label_style = (function label_style(){return {"style": {"display": "inline-block", "width": "60px"}};
});
examples.harmful.core.debug_view = (function debug_view(p__6882,owner){var vec__6889 = p__6882;var f = cljs.core.nth.call(null,vec__6889,0,null);var cursor = cljs.core.nth.call(null,vec__6889,1,null);var opts = cljs.core.nth.call(null,vec__6889,2,null);if(typeof examples.harmful.core.t6890 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t6890 = (function (opts,cursor,f,vec__6889,owner,p__6882,debug_view,meta6891){
this.opts = opts;
this.cursor = cursor;
this.f = f;
this.vec__6889 = vec__6889;
this.owner = owner;
this.p__6882 = p__6882;
this.debug_view = debug_view;
this.meta6891 = meta6891;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t6890.cljs$lang$type = true;
examples.harmful.core.t6890.cljs$lang$ctorStr = "examples.harmful.core/t6890";
examples.harmful.core.t6890.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t6890");
});
examples.harmful.core.t6890.prototype.om$core$IRenderState$ = true;
examples.harmful.core.t6890.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__6893){var self__ = this;
var map__6894 = p__6893;var map__6894__$1 = ((cljs.core.seq_QMARK_.call(null,map__6894))?cljs.core.apply.call(null,cljs.core.hash_map,map__6894):map__6894);var id = cljs.core.get.call(null,map__6894__$1,new cljs.core.Keyword(null,"id","id",1013907597));var ___$1 = this;return React.DOM.div(null,React.DOM.div(null,React.DOM.label(examples.harmful.core.label_style.call(null),"Props:"),React.DOM.code(null,cljs.core.pr_str.call(null,om.core.value.call(null,self__.cursor)))),React.DOM.div(null,React.DOM.label(examples.harmful.core.label_style.call(null),"State:"),React.DOM.code(null,cljs.core.pr_str.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,om.core.state.call(null,self__.cursor)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state-map","state-map",3221823890),id,new cljs.core.Keyword(null,"render-state","render-state",666961164)], null))))),om.core.build_STAR_.call(null,self__.f,self__.cursor,cljs.core.assoc.call(null,self__.opts,new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.core","id","om.core/id",2663181321),id], null))));
});
examples.harmful.core.t6890.prototype.om$core$IDidMount$ = true;
examples.harmful.core.t6890.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return om.core.update_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"id","id",1013907597),cljs.core.identity);
});
examples.harmful.core.t6890.prototype.om$core$IInitState$ = true;
examples.harmful.core.t6890.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",1013907597),goog.ui.IdGenerator.getInstance().getNextUniqueId()], null);
});
examples.harmful.core.t6890.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6892){var self__ = this;
var _6892__$1 = this;return self__.meta6891;
});
examples.harmful.core.t6890.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6892,meta6891__$1){var self__ = this;
var _6892__$1 = this;return (new examples.harmful.core.t6890(self__.opts,self__.cursor,self__.f,self__.vec__6889,self__.owner,self__.p__6882,self__.debug_view,meta6891__$1));
});
examples.harmful.core.__GT_t6890 = (function __GT_t6890(opts__$1,cursor__$1,f__$1,vec__6889__$1,owner__$1,p__6882__$1,debug_view__$1,meta6891){return (new examples.harmful.core.t6890(opts__$1,cursor__$1,f__$1,vec__6889__$1,owner__$1,p__6882__$1,debug_view__$1,meta6891));
});
}
return (new examples.harmful.core.t6890(opts,cursor,f,vec__6889,owner,p__6882,debug_view,null));
});
examples.harmful.core.debug = (function debug(app,owner,opts){if(typeof examples.harmful.core.t6898 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t6898 = (function (opts,owner,app,debug,meta6899){
this.opts = opts;
this.owner = owner;
this.app = app;
this.debug = debug;
this.meta6899 = meta6899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t6898.cljs$lang$type = true;
examples.harmful.core.t6898.cljs$lang$ctorStr = "examples.harmful.core/t6898";
examples.harmful.core.t6898.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t6898");
});
examples.harmful.core.t6898.prototype.om$core$IRender$ = true;
examples.harmful.core.t6898.prototype.om$core$IRender$render$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return React.DOM.h2(null,"Hello!");
});
examples.harmful.core.t6898.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6900){var self__ = this;
var _6900__$1 = this;return self__.meta6899;
});
examples.harmful.core.t6898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6900,meta6899__$1){var self__ = this;
var _6900__$1 = this;return (new examples.harmful.core.t6898(self__.opts,self__.owner,self__.app,self__.debug,meta6899__$1));
});
examples.harmful.core.__GT_t6898 = (function __GT_t6898(opts__$1,owner__$1,app__$1,debug__$1,meta6899){return (new examples.harmful.core.t6898(opts__$1,owner__$1,app__$1,debug__$1,meta6899));
});
}
return (new examples.harmful.core.t6898(opts,owner,app,debug,null));
});
om.core.root.call(null,examples.harmful.core.debug,examples.harmful.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));
om.core.root.call(null,(function (app,owner){if(typeof examples.harmful.core.t6901 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.harmful.core.t6901 = (function (owner,app,meta6902){
this.owner = owner;
this.app = app;
this.meta6902 = meta6902;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.harmful.core.t6901.cljs$lang$type = true;
examples.harmful.core.t6901.cljs$lang$ctorStr = "examples.harmful.core/t6901";
examples.harmful.core.t6901.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.harmful.core/t6901");
});
examples.harmful.core.t6901.prototype.om$core$IRender$ = true;
examples.harmful.core.t6901.prototype.om$core$IRender$render$arity$1 = (function (this__3887__auto__){var self__ = this;
var this__3887__auto____$1 = this;return om.core.build.call(null,examples.harmful.core.counter_view,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ctor","ctor",1016968582),examples.harmful.core.no_local], null));
});
examples.harmful.core.t6901.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6903){var self__ = this;
var _6903__$1 = this;return self__.meta6902;
});
examples.harmful.core.t6901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6903,meta6902__$1){var self__ = this;
var _6903__$1 = this;return (new examples.harmful.core.t6901(self__.owner,self__.app,meta6902__$1));
});
examples.harmful.core.__GT_t6901 = (function __GT_t6901(owner__$1,app__$1,meta6902){return (new examples.harmful.core.t6901(owner__$1,app__$1,meta6902));
});
}
return (new examples.harmful.core.t6901(owner,app,null));
}),examples.harmful.core.app_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app"),new cljs.core.Keyword(null,"instrument","instrument",2409387865),(function (f,cursor,opts){if(cljs.core._EQ_.call(null,f,examples.harmful.core.counter_view))
{return om.core.build_STAR_.call(null,examples.harmful.core.debug_view,om.core.graft.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,cursor,opts], null),cursor));
} else
{return new cljs.core.Keyword("om.core","pass","om.core/pass",2667619603);
}
})], null));

//# sourceMappingURL=core.js.map