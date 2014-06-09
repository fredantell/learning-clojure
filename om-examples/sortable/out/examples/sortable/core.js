// Compiled by ClojureScript 0.0-2173
goog.provide('examples.sortable.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.style');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('om.dom');
goog.require('goog.ui.IdGenerator');
goog.require('goog.events.EventType');
goog.require('cljs.core.async');
goog.require('goog.style');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
examples.sortable.core.guid = (function guid(){return goog.ui.IdGenerator.getInstance().getNextUniqueId();
});
examples.sortable.core.gsize__GT_vec = (function gsize__GT_vec(size){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [size.width,size.height], null);
});
examples.sortable.core.to_QMARK_ = (function to_QMARK_(owner,next_props,next_state,k){var or__4071__auto__ = (function (){var and__4059__auto__ = cljs.core.not.call(null,om.core.get_render_state.call(null,owner,k));if(and__4059__auto__)
{return k.call(null,next_state);
} else
{return and__4059__auto__;
}
})();if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{var and__4059__auto__ = cljs.core.not.call(null,k.call(null,om.core.get_props.call(null,owner)));if(and__4059__auto__)
{return k.call(null,next_props);
} else
{return and__4059__auto__;
}
}
});
examples.sortable.core.from_QMARK_ = (function from_QMARK_(owner,next_props,next_state,k){var or__4071__auto__ = (function (){var and__4059__auto__ = om.core.get_render_state.call(null,owner,k);if(cljs.core.truth_(and__4059__auto__))
{return cljs.core.not.call(null,k.call(null,next_state));
} else
{return and__4059__auto__;
}
})();if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{var and__4059__auto__ = k.call(null,om.core.get_props.call(null,owner));if(cljs.core.truth_(and__4059__auto__))
{return cljs.core.not.call(null,k.call(null,next_props));
} else
{return and__4059__auto__;
}
}
});
examples.sortable.core.location = (function location__$1(e){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e.clientX,e.clientY], null);
});
examples.sortable.core.element_offset = (function element_offset(el){var offset = goog.style.getPageOffset(el);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [offset.x,offset.y], null);
});
examples.sortable.core.dragging_QMARK_ = (function dragging_QMARK_(owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633));
});
examples.sortable.core.drag_start = (function drag_start(e,item,owner){if(cljs.core.truth_(examples.sortable.core.dragging_QMARK_.call(null,owner)))
{return null;
} else
{var el = om.core.get_node.call(null,owner,"draggable");var state = om.core.get_state.call(null,owner);var drag_start__$1 = examples.sortable.core.location.call(null,e);var el_offset = examples.sortable.core.element_offset.call(null,el);var drag_offset = cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,el_offset,drag_start__$1));if(cljs.core.truth_(new cljs.core.Keyword(null,"delegate","delegate",1833226487).cljs$core$IFn$_invoke$arity$1(state)))
{} else
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),true);
}
var G__52371_52372 = owner;om.core.set_state_BANG_.call(null,G__52371_52372,new cljs.core.Keyword(null,"location","location",2914947879),(function (){var or__4071__auto__ = new cljs.core.Keyword(null,"constrain","constrain",592121065).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return cljs.core.identity;
}
})().call(null,el_offset));
om.core.set_state_BANG_.call(null,G__52371_52372,new cljs.core.Keyword(null,"drag-offset","drag-offset",934286014),drag_offset);
var temp__4092__auto__ = new cljs.core.Keyword(null,"chan","chan",1016956612).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(temp__4092__auto__))
{var c = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"location","location",2914947879),cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,drag_start__$1,drag_offset))], null));
} else
{return null;
}
}
});
examples.sortable.core.drag_stop = (function drag_stop(e,item,owner){if(cljs.core.truth_(examples.sortable.core.dragging_QMARK_.call(null,owner)))
{var state = om.core.get_state.call(null,owner);if(cljs.core.truth_(new cljs.core.Keyword(null,"dragging","dragging",4467773633).cljs$core$IFn$_invoke$arity$1(state)))
{om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"dragging","dragging",4467773633),false);
} else
{}
if(cljs.core.truth_(new cljs.core.Keyword(null,"delegate","delegate",1833226487).cljs$core$IFn$_invoke$arity$1(state)))
{} else
{var G__52374_52375 = owner;om.core.set_state_BANG_.call(null,G__52374_52375,new cljs.core.Keyword(null,"location","location",2914947879),null);
om.core.set_state_BANG_.call(null,G__52374_52375,new cljs.core.Keyword(null,"drag-offset","drag-offset",934286014),null);
}
var temp__4092__auto__ = new cljs.core.Keyword(null,"chan","chan",1016956612).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(temp__4092__auto__))
{var c = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"drag-stop","drag-stop",656412781),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item)], null));
} else
{return null;
}
} else
{return null;
}
});
examples.sortable.core.drag = (function drag(e,item,owner){var state = om.core.get_state.call(null,owner);if(cljs.core.truth_(examples.sortable.core.dragging_QMARK_.call(null,owner)))
{var loc = (function (){var or__4071__auto__ = new cljs.core.Keyword(null,"constrain","constrain",592121065).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return cljs.core.identity;
}
})().call(null,cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._PLUS_,examples.sortable.core.location.call(null,e),new cljs.core.Keyword(null,"drag-offset","drag-offset",934286014).cljs$core$IFn$_invoke$arity$1(state))));om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"location","location",2914947879),loc);
var temp__4092__auto__ = new cljs.core.Keyword(null,"chan","chan",1016956612).cljs$core$IFn$_invoke$arity$1(state);if(cljs.core.truth_(temp__4092__auto__))
{var c = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,c,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"event","event",1110795788),new cljs.core.Keyword(null,"drag","drag",1016996006),new cljs.core.Keyword(null,"location","location",2914947879),loc,new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(item)], null));
} else
{return null;
}
} else
{return null;
}
});
examples.sortable.core.draggable = (function draggable(item,owner){if(typeof examples.sortable.core.t52389 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.sortable.core.t52389 = (function (owner,item,draggable,meta52390){
this.owner = owner;
this.item = item;
this.draggable = draggable;
this.meta52390 = meta52390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.sortable.core.t52389.cljs$lang$type = true;
examples.sortable.core.t52389.cljs$lang$ctorStr = "examples.sortable.core/t52389";
examples.sortable.core.t52389.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.sortable.core/t52389");
});
examples.sortable.core.t52389.prototype.om$core$IRenderState$ = true;
examples.sortable.core.t52389.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;var style = (cljs.core.truth_(examples.sortable.core.dragging_QMARK_.call(null,self__.owner))?(function (){var vec__52392 = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state);var x = cljs.core.nth.call(null,vec__52392,0,null);var y = cljs.core.nth.call(null,vec__52392,1,null);var vec__52393 = new cljs.core.Keyword(null,"dimensions","dimensions",1428239167).cljs$core$IFn$_invoke$arity$1(state);var w = cljs.core.nth.call(null,vec__52393,0,null);var h = cljs.core.nth.call(null,vec__52393,1,null);return {"height": h, "width": w, "z-index": 1, "left": x, "top": y, "position": "absolute"};
})():((new cljs.core.Keyword(null,"else","else",1017020587))?{"z-index": 0, "position": "static"}:null));return React.DOM.li({"onMouseMove": (function (p1__52380_SHARP_){return examples.sortable.core.drag.call(null,p1__52380_SHARP_,cljs.core.deref.call(null,self__.item),self__.owner);
}), "onMouseUp": (function (p1__52379_SHARP_){return examples.sortable.core.drag_stop.call(null,p1__52379_SHARP_,cljs.core.deref.call(null,self__.item),self__.owner);
}), "onMouseDown": (function (p1__52378_SHARP_){return examples.sortable.core.drag_start.call(null,p1__52378_SHARP_,cljs.core.deref.call(null,self__.item),self__.owner);
}), "ref": "draggable", "style": style, "className": (cljs.core.truth_(examples.sortable.core.dragging_QMARK_.call(null,self__.owner))?"dragging":null)},om.core.build.call(null,new cljs.core.Keyword(null,"view","view",1017523735).cljs$core$IFn$_invoke$arity$1(state),self__.item));
});
examples.sortable.core.t52389.prototype.om$core$IWillUpdate$ = true;
examples.sortable.core.t52389.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(examples.sortable.core.to_QMARK_.call(null,self__.owner,next_props,next_state,new cljs.core.Keyword(null,"dragging","dragging",4467773633))))
{var mouse_up_52397 = (function (p1__52376_SHARP_){return examples.sortable.core.drag_stop.call(null,p1__52376_SHARP_,cljs.core.deref.call(null,next_props),self__.owner);
});var mouse_move_52398 = ((function (mouse_up_52397){
return (function (p1__52377_SHARP_){return examples.sortable.core.drag.call(null,p1__52377_SHARP_,cljs.core.deref.call(null,next_props),self__.owner);
});})(mouse_up_52397))
;om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"window-listeners","window-listeners",1599166484),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mouse_up_52397,mouse_move_52398], null));
var G__52394_52399 = window;goog.events.listen(G__52394_52399,goog.events.EventType.MOUSEUP,mouse_up_52397);
goog.events.listen(G__52394_52399,goog.events.EventType.MOUSEMOVE,mouse_move_52398);
} else
{}
if(cljs.core.truth_(examples.sortable.core.from_QMARK_.call(null,self__.owner,next_props,next_state,new cljs.core.Keyword(null,"dragging","dragging",4467773633))))
{var vec__52395 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"window-listeners","window-listeners",1599166484));var mouse_up = cljs.core.nth.call(null,vec__52395,0,null);var mouse_move = cljs.core.nth.call(null,vec__52395,1,null);var G__52396 = window;goog.events.unlisten(G__52396,goog.events.EventType.MOUSEUP,mouse_up);
goog.events.unlisten(G__52396,goog.events.EventType.MOUSEMOVE,mouse_move);
return G__52396;
} else
{return null;
}
});
examples.sortable.core.t52389.prototype.om$core$IDidMount$ = true;
examples.sortable.core.t52389.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var dims = examples.sortable.core.gsize__GT_vec.call(null,goog.style.getSize(om.core.get_node.call(null,self__.owner,"draggable")));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"dimensions","dimensions",1428239167),dims);
var temp__4092__auto__ = new cljs.core.Keyword(null,"dims-chan","dims-chan",4554159718).cljs$core$IFn$_invoke$arity$1(om.core.get_state.call(null,self__.owner));if(cljs.core.truth_(temp__4092__auto__))
{var dims_chan = temp__4092__auto__;return cljs.core.async.put_BANG_.call(null,dims_chan,dims);
} else
{return null;
}
});
examples.sortable.core.t52389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52391){var self__ = this;
var _52391__$1 = this;return self__.meta52390;
});
examples.sortable.core.t52389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52391,meta52390__$1){var self__ = this;
var _52391__$1 = this;return (new examples.sortable.core.t52389(self__.owner,self__.item,self__.draggable,meta52390__$1));
});
examples.sortable.core.__GT_t52389 = (function __GT_t52389(owner__$1,item__$1,draggable__$1,meta52390){return (new examples.sortable.core.t52389(owner__$1,item__$1,draggable__$1,meta52390));
});
}
return (new examples.sortable.core.t52389(owner,item,draggable,null));
});
examples.sortable.core.from_loc = (function from_loc(v1,v2){return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core._,v2,v1));
});
examples.sortable.core.sortable_spacer = (function sortable_spacer(height){return React.DOM.li({"style": {"height": height}, "key": "spacer-cell"});
});
examples.sortable.core.index_of = (function index_of(x,v){var i = 0;var v__$1 = cljs.core.seq.call(null,v);while(true){
if(v__$1)
{if(cljs.core._EQ_.call(null,x,cljs.core.first.call(null,v__$1)))
{return i;
} else
{{
var G__52400 = (i + 1);
var G__52401 = cljs.core.next.call(null,v__$1);
i = G__52400;
v__$1 = G__52401;
continue;
}
}
} else
{return -1;
}
break;
}
});
examples.sortable.core.insert_at = (function insert_at(x,idx,ignore,v){var len = cljs.core.count.call(null,v);var i = 0;var v__$1 = v;var ret = cljs.core.PersistentVector.EMPTY;while(true){
if((i >= len))
{return cljs.core.conj.call(null,ret,x);
} else
{var y = cljs.core.first.call(null,v__$1);if(cljs.core._EQ_.call(null,y,ignore))
{{
var G__52402 = i;
var G__52403 = cljs.core.next.call(null,v__$1);
var G__52404 = cljs.core.conj.call(null,ret,y);
i = G__52402;
v__$1 = G__52403;
ret = G__52404;
continue;
}
} else
{if((i === idx))
{return cljs.core.into.call(null,cljs.core.conj.call(null,ret,x),v__$1);
} else
{{
var G__52405 = (i + 1);
var G__52406 = cljs.core.next.call(null,v__$1);
var G__52407 = cljs.core.conj.call(null,ret,y);
i = G__52405;
v__$1 = G__52406;
ret = G__52407;
continue;
}
}
}
}
break;
}
});
examples.sortable.core.sorting_QMARK_ = (function sorting_QMARK_(owner){return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"sorting","sorting",3284289782));
});
examples.sortable.core.start_sort = (function start_sort(owner,e){var state = om.core.get_state.call(null,owner);var sort = new cljs.core.Keyword(null,"sort","sort",1017440528).cljs$core$IFn$_invoke$arity$1(state);var idx = examples.sortable.core.index_of.call(null,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e),sort);var G__52409 = owner;om.core.set_state_BANG_.call(null,G__52409,new cljs.core.Keyword(null,"sorting","sorting",3284289782),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e));
om.core.set_state_BANG_.call(null,G__52409,new cljs.core.Keyword(null,"real-sort","real-sort",4378264543),sort);
om.core.set_state_BANG_.call(null,G__52409,new cljs.core.Keyword(null,"drop-index","drop-index",834285542),idx);
om.core.set_state_BANG_.call(null,G__52409,new cljs.core.Keyword(null,"sort","sort",1017440528),examples.sortable.core.insert_at.call(null,new cljs.core.Keyword("examples.sortable.core","spacer","examples.sortable.core/spacer",4455491594),idx,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e),sort));
return G__52409;
});
examples.sortable.core.handle_drop = (function handle_drop(owner,e){if(cljs.core.truth_(examples.sortable.core.sorting_QMARK_.call(null,owner)))
{var map__52412 = om.core.get_state.call(null,owner);var map__52412__$1 = ((cljs.core.seq_QMARK_.call(null,map__52412))?cljs.core.apply.call(null,cljs.core.hash_map,map__52412):map__52412);var drop_index = cljs.core.get.call(null,map__52412__$1,new cljs.core.Keyword(null,"drop-index","drop-index",834285542));var sort = cljs.core.get.call(null,map__52412__$1,new cljs.core.Keyword(null,"sort","sort",1017440528));var idx = examples.sortable.core.index_of.call(null,new cljs.core.Keyword("examples.sortable.core","spacer","examples.sortable.core/spacer",4455491594),sort);var sort__$1 = cljs.core.vec.call(null,cljs.core.replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("examples.sortable.core","spacer","examples.sortable.core/spacer",4455491594),new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e)], null),cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e)], true),sort)));var G__52413 = owner;om.core.set_state_BANG_.call(null,G__52413,new cljs.core.Keyword(null,"sorting","sorting",3284289782),null);
om.core.set_state_BANG_.call(null,G__52413,new cljs.core.Keyword(null,"drop-index","drop-index",834285542),null);
om.core.set_state_BANG_.call(null,G__52413,new cljs.core.Keyword(null,"real-sort","real-sort",4378264543),null);
om.core.set_state_BANG_.call(null,G__52413,new cljs.core.Keyword(null,"sort","sort",1017440528),sort__$1);
return G__52413;
} else
{return null;
}
});
examples.sortable.core.update_drop = (function update_drop(owner,e){if(cljs.core.truth_(examples.sortable.core.sorting_QMARK_.call(null,owner)))
{var loc = new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(e);var state = om.core.get_state.call(null,owner);var vec__52417 = examples.sortable.core.from_loc.call(null,new cljs.core.Keyword(null,"location","location",2914947879).cljs$core$IFn$_invoke$arity$1(state),loc);var _ = cljs.core.nth.call(null,vec__52417,0,null);var y = cljs.core.nth.call(null,vec__52417,1,null);var vec__52418 = new cljs.core.Keyword(null,"cell-dimensions","cell-dimensions",1005044874).cljs$core$IFn$_invoke$arity$1(state);var ___$1 = cljs.core.nth.call(null,vec__52418,0,null);var ch = cljs.core.nth.call(null,vec__52418,1,null);var drop_index = Math.round((y / ch));if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"drop-index","drop-index",834285542).cljs$core$IFn$_invoke$arity$1(state),drop_index))
{var G__52419 = owner;om.core.set_state_BANG_.call(null,G__52419,new cljs.core.Keyword(null,"drop-index","drop-index",834285542),drop_index);
om.core.set_state_BANG_.call(null,G__52419,new cljs.core.Keyword(null,"sort","sort",1017440528),examples.sortable.core.insert_at.call(null,new cljs.core.Keyword("examples.sortable.core","spacer","examples.sortable.core/spacer",4455491594),drop_index,new cljs.core.Keyword(null,"id","id",1013907597).cljs$core$IFn$_invoke$arity$1(e),new cljs.core.Keyword(null,"real-sort","real-sort",4378264543).cljs$core$IFn$_invoke$arity$1(state)));
return G__52419;
} else
{return null;
}
} else
{return null;
}
});
examples.sortable.core.bound = (function bound(n,lb,ub){if((n < lb))
{return lb;
} else
{if((n > ub))
{return ub;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return n;
} else
{return null;
}
}
}
});
examples.sortable.core.handle_drag_event = (function handle_drag_event(owner,e){var G__52421 = new cljs.core.Keyword(null,"event","event",1110795788).cljs$core$IFn$_invoke$arity$1(e);if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"drag","drag",1016996006),G__52421))
{return examples.sortable.core.update_drop.call(null,owner,e);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"drag-stop","drag-stop",656412781),G__52421))
{return examples.sortable.core.handle_drop.call(null,owner,e);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"drag-start","drag-start",2816557563),G__52421))
{return examples.sortable.core.start_sort.call(null,owner,e);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
}
});
examples.sortable.core.sortable = (function sortable(p__52422,owner){var map__52507 = p__52422;var map__52507__$1 = ((cljs.core.seq_QMARK_.call(null,map__52507))?cljs.core.apply.call(null,cljs.core.hash_map,map__52507):map__52507);var sort = cljs.core.get.call(null,map__52507__$1,new cljs.core.Keyword(null,"sort","sort",1017440528));var items = cljs.core.get.call(null,map__52507__$1,new cljs.core.Keyword(null,"items","items",1114430258));if(typeof examples.sortable.core.t52508 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.sortable.core.t52508 = (function (items,sort,map__52507,owner,p__52422,sortable,meta52509){
this.items = items;
this.sort = sort;
this.map__52507 = map__52507;
this.owner = owner;
this.p__52422 = p__52422;
this.sortable = sortable;
this.meta52509 = meta52509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.sortable.core.t52508.cljs$lang$type = true;
examples.sortable.core.t52508.cljs$lang$ctorStr = "examples.sortable.core/t52508";
examples.sortable.core.t52508.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.sortable.core/t52508");
});
examples.sortable.core.t52508.prototype.om$core$IRenderState$ = true;
examples.sortable.core.t52508.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,state){var self__ = this;
var ___$1 = this;cljs.core.println.call(null,"Debug");
cljs.core.println.call(null,om.core.get_state.call(null,self__.owner));
return cljs.core.apply.call(null,om.dom.ul,{"ref": "sortable", "className": "sortable"},cljs.core.map.call(null,(function (id){if(!(cljs.core._EQ_.call(null,id,new cljs.core.Keyword("examples.sortable.core","spacer","examples.sortable.core/spacer",4455491594))))
{return om.core.build.call(null,examples.sortable.core.draggable,self__.items.call(null,id),(function (){var map__52511 = state;var map__52511__$1 = ((cljs.core.seq_QMARK_.call(null,map__52511))?cljs.core.apply.call(null,cljs.core.hash_map,map__52511):map__52511);var view = cljs.core.get.call(null,map__52511__$1,new cljs.core.Keyword(null,"view","view",1017523735));var chans = cljs.core.get.call(null,map__52511__$1,new cljs.core.Keyword(null,"chans","chans",1108527827));var constrain = cljs.core.get.call(null,map__52511__$1,new cljs.core.Keyword(null,"constrain","constrain",592121065));return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"id","id",1013907597),new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"view","view",1017523735),view,new cljs.core.Keyword(null,"chan","chan",1016956612),new cljs.core.Keyword(null,"drag-chan","drag-chan",655924157).cljs$core$IFn$_invoke$arity$1(chans),new cljs.core.Keyword(null,"dims-chan","dims-chan",4554159718),new cljs.core.Keyword(null,"dims-chan","dims-chan",4554159718).cljs$core$IFn$_invoke$arity$1(chans),new cljs.core.Keyword(null,"delegate","delegate",1833226487),true], null),new cljs.core.Keyword(null,"state","state",1123661827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"constrain","constrain",592121065),constrain,new cljs.core.Keyword(null,"dragging","dragging",4467773633),cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"sorting","sorting",3284289782).cljs$core$IFn$_invoke$arity$1(state))], null)], null);
})());
} else
{return examples.sortable.core.sortable_spacer.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"cell-dimensions","cell-dimensions",1005044874).cljs$core$IFn$_invoke$arity$1(state)));
}
}),new cljs.core.Keyword(null,"sort","sort",1017440528).cljs$core$IFn$_invoke$arity$1(state)));
});
examples.sortable.core.t52508.prototype.om$core$IDidMount$ = true;
examples.sortable.core.t52508.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879))))
{return null;
} else
{return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"location","location",2914947879),examples.sortable.core.element_offset.call(null,om.core.get_node.call(null,self__.owner,"sortable")));
}
});
examples.sortable.core.t52508.prototype.om$core$IWillUpdate$ = true;
examples.sortable.core.t52508.prototype.om$core$IWillUpdate$will_update$arity$3 = (function (_,next_props,next_state){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(examples.sortable.core.to_QMARK_.call(null,self__.owner,next_props,next_state,new cljs.core.Keyword(null,"cell-dimensions","cell-dimensions",1005044874))))
{var node = om.core.get_node.call(null,self__.owner,"sortable");var vec__52512 = examples.sortable.core.gsize__GT_vec.call(null,goog.style.getSize(node));var w = cljs.core.nth.call(null,vec__52512,0,null);var h = cljs.core.nth.call(null,vec__52512,1,null);var vec__52513 = examples.sortable.core.element_offset.call(null,node);var x = cljs.core.nth.call(null,vec__52513,0,null);var y = cljs.core.nth.call(null,vec__52513,1,null);var vec__52514 = new cljs.core.Keyword(null,"cell-dimensions","cell-dimensions",1005044874).cljs$core$IFn$_invoke$arity$1(next_state);var ___$2 = cljs.core.nth.call(null,vec__52514,0,null);var ch = cljs.core.nth.call(null,vec__52514,1,null);return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"constrain","constrain",592121065),(function (p__52515){var vec__52516 = p__52515;var ___$3 = cljs.core.nth.call(null,vec__52516,0,null);var cy = cljs.core.nth.call(null,vec__52516,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 1),examples.sortable.core.bound.call(null,cy,y,((y + h) - ch))], null);
}));
} else
{return null;
}
});
examples.sortable.core.t52508.prototype.om$core$IWillMount$ = true;
examples.sortable.core.t52508.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var drag_chan = cljs.core.async.chan.call(null);var dims_chan = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,1));om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"chans","chans",1108527827),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"drag-chan","drag-chan",655924157),drag_chan,new cljs.core.Keyword(null,"dims-chan","dims-chan",4554159718),dims_chan], null));
var c__10861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_52560){var state_val_52561 = (state_52560[1]);if((state_val_52561 === 1))
{var state_52560__$1 = state_52560;var statearr_52562_52591 = state_52560__$1;(statearr_52562_52591[2] = null);
(statearr_52562_52591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 2))
{var state_52560__$1 = state_52560;if(true)
{var statearr_52563_52592 = state_52560__$1;(statearr_52563_52592[1] = 4);
} else
{var statearr_52564_52593 = state_52560__$1;(statearr_52564_52593[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 3))
{var inst_52558 = (state_52560[2]);var state_52560__$1 = state_52560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52560__$1,inst_52558);
} else
{if((state_val_52561 === 4))
{var inst_52524 = [drag_chan,dims_chan];var inst_52525 = (new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,inst_52524,null));var state_52560__$1 = state_52560;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_52560__$1,7,inst_52525);
} else
{if((state_val_52561 === 5))
{var state_52560__$1 = state_52560;var statearr_52565_52594 = state_52560__$1;(statearr_52565_52594[2] = null);
(statearr_52565_52594[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 6))
{var inst_52556 = (state_52560[2]);var state_52560__$1 = state_52560;var statearr_52566_52595 = state_52560__$1;(statearr_52566_52595[2] = inst_52556);
(statearr_52566_52595[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 7))
{var inst_52529 = (state_52560[7]);var inst_52527 = (state_52560[8]);var inst_52527__$1 = (state_52560[2]);var inst_52528 = cljs.core.nth.call(null,inst_52527__$1,0,null);var inst_52529__$1 = cljs.core.nth.call(null,inst_52527__$1,1,null);var inst_52530 = cljs.core._EQ_.call(null,inst_52529__$1,drag_chan);var state_52560__$1 = (function (){var statearr_52567 = state_52560;(statearr_52567[7] = inst_52529__$1);
(statearr_52567[8] = inst_52527__$1);
(statearr_52567[9] = inst_52528);
return statearr_52567;
})();if(inst_52530)
{var statearr_52568_52596 = state_52560__$1;(statearr_52568_52596[1] = 8);
} else
{var statearr_52569_52597 = state_52560__$1;(statearr_52569_52597[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 8))
{var inst_52527 = (state_52560[8]);var inst_52533 = cljs.core.nth.call(null,inst_52527,0,null);var inst_52534 = cljs.core.nth.call(null,inst_52527,1,null);var inst_52535 = examples.sortable.core.handle_drag_event.call(null,self__.owner,inst_52533);var state_52560__$1 = (function (){var statearr_52570 = state_52560;(statearr_52570[10] = inst_52534);
return statearr_52570;
})();var statearr_52571_52598 = state_52560__$1;(statearr_52571_52598[2] = inst_52535);
(statearr_52571_52598[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 9))
{var inst_52529 = (state_52560[7]);var inst_52537 = cljs.core._EQ_.call(null,inst_52529,dims_chan);var state_52560__$1 = state_52560;if(inst_52537)
{var statearr_52572_52599 = state_52560__$1;(statearr_52572_52599[1] = 11);
} else
{var statearr_52573_52600 = state_52560__$1;(statearr_52573_52600[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 10))
{var inst_52552 = (state_52560[2]);var state_52560__$1 = (function (){var statearr_52574 = state_52560;(statearr_52574[11] = inst_52552);
return statearr_52574;
})();var statearr_52575_52601 = state_52560__$1;(statearr_52575_52601[2] = null);
(statearr_52575_52601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 11))
{var inst_52527 = (state_52560[8]);var inst_52540 = cljs.core.nth.call(null,inst_52527,0,null);var inst_52541 = cljs.core.nth.call(null,inst_52527,1,null);var inst_52542 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"cell-dimensions","cell-dimensions",1005044874),inst_52540);var state_52560__$1 = (function (){var statearr_52576 = state_52560;(statearr_52576[12] = inst_52541);
return statearr_52576;
})();var statearr_52577_52602 = state_52560__$1;(statearr_52577_52602[2] = inst_52542);
(statearr_52577_52602[1] = 13);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 12))
{var inst_52529 = (state_52560[7]);var inst_52544 = cljs.core._EQ_.call(null,inst_52529,new cljs.core.Keyword(null,"default","default",2558708147));var state_52560__$1 = state_52560;if(inst_52544)
{var statearr_52578_52603 = state_52560__$1;(statearr_52578_52603[1] = 14);
} else
{var statearr_52579_52604 = state_52560__$1;(statearr_52579_52604[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 13))
{var inst_52550 = (state_52560[2]);var state_52560__$1 = state_52560;var statearr_52580_52605 = state_52560__$1;(statearr_52580_52605[2] = inst_52550);
(statearr_52580_52605[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 14))
{var inst_52528 = (state_52560[9]);var state_52560__$1 = state_52560;var statearr_52581_52606 = state_52560__$1;(statearr_52581_52606[2] = inst_52528);
(statearr_52581_52606[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 15))
{var state_52560__$1 = state_52560;var statearr_52582_52607 = state_52560__$1;(statearr_52582_52607[2] = null);
(statearr_52582_52607[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_52561 === 16))
{var inst_52548 = (state_52560[2]);var state_52560__$1 = state_52560;var statearr_52583_52608 = state_52560__$1;(statearr_52583_52608[2] = inst_52548);
(statearr_52583_52608[1] = 13);
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
}
}
}
}
}
}
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_52587 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52587[0] = state_machine__10847__auto__);
(statearr_52587[1] = 1);
return statearr_52587;
});
var state_machine__10847__auto____1 = (function (state_52560){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_52560);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e52588){if((e52588 instanceof Object))
{var ex__10850__auto__ = e52588;var statearr_52589_52609 = state_52560;(statearr_52589_52609[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e52588;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__52610 = state_52560;
state_52560 = G__52610;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_52560){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_52560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_52590 = f__10862__auto__.call(null);(statearr_52590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto__);
return statearr_52590;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return c__10861__auto__;
});
examples.sortable.core.t52508.prototype.om$core$IInitState$ = true;
examples.sortable.core.t52508.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sort","sort",1017440528),om.core.value.call(null,self__.sort)], null);
});
examples.sortable.core.t52508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52510){var self__ = this;
var _52510__$1 = this;return self__.meta52509;
});
examples.sortable.core.t52508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52510,meta52509__$1){var self__ = this;
var _52510__$1 = this;return (new examples.sortable.core.t52508(self__.items,self__.sort,self__.map__52507,self__.owner,self__.p__52422,self__.sortable,meta52509__$1));
});
examples.sortable.core.__GT_t52508 = (function __GT_t52508(items__$1,sort__$1,map__52507__$2,owner__$1,p__52422__$1,sortable__$1,meta52509){return (new examples.sortable.core.t52508(items__$1,sort__$1,map__52507__$2,owner__$1,p__52422__$1,sortable__$1,meta52509));
});
}
return (new examples.sortable.core.t52508(items,sort,map__52507__$1,owner,p__52422,sortable,null));
});
if(typeof examples.sortable.core.app_state !== 'undefined')
{} else
{examples.sortable.core.app_state = (function (){var items = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__52611){var vec__52612 = p__52611;var id = cljs.core.nth.call(null,vec__52612,0,null);var n = cljs.core.nth.call(null,vec__52612,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"title","title",1124275658),n], null)], null);
}),cljs.core.take.call(null,10,cljs.core.map.call(null,cljs.core.vector,cljs.core.repeatedly.call(null,examples.sortable.core.guid),cljs.core.range.call(null)))));return cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"items","items",1114430258),items,new cljs.core.Keyword(null,"sort","sort",1017440528),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,items))], null));
})();
}
examples.sortable.core.item = (function item(the_item,owner){if(typeof examples.sortable.core.t52616 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.sortable.core.t52616 = (function (owner,the_item,item,meta52617){
this.owner = owner;
this.the_item = the_item;
this.item = item;
this.meta52617 = meta52617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.sortable.core.t52616.cljs$lang$type = true;
examples.sortable.core.t52616.cljs$lang$ctorStr = "examples.sortable.core/t52616";
examples.sortable.core.t52616.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.sortable.core/t52616");
});
examples.sortable.core.t52616.prototype.om$core$IRender$ = true;
examples.sortable.core.t52616.prototype.om$core$IRender$render$arity$1 = (function (this__48071__auto__){var self__ = this;
var this__48071__auto____$1 = this;return React.DOM.span(null,[cljs.core.str("Item #"),cljs.core.str(new cljs.core.Keyword(null,"title","title",1124275658).cljs$core$IFn$_invoke$arity$1(self__.the_item))].join(''));
});
examples.sortable.core.t52616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52618){var self__ = this;
var _52618__$1 = this;return self__.meta52617;
});
examples.sortable.core.t52616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52618,meta52617__$1){var self__ = this;
var _52618__$1 = this;return (new examples.sortable.core.t52616(self__.owner,self__.the_item,self__.item,meta52617__$1));
});
examples.sortable.core.__GT_t52616 = (function __GT_t52616(owner__$1,the_item__$1,item__$1,meta52617){return (new examples.sortable.core.t52616(owner__$1,the_item__$1,item__$1,meta52617));
});
}
return (new examples.sortable.core.t52616(owner,the_item,item,null));
});
examples.sortable.core.sortable_view = (function sortable_view(app,owner){if(typeof examples.sortable.core.t52622 !== 'undefined')
{} else
{
/**
* @constructor
*/
examples.sortable.core.t52622 = (function (owner,app,sortable_view,meta52623){
this.owner = owner;
this.app = app;
this.sortable_view = sortable_view;
this.meta52623 = meta52623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
examples.sortable.core.t52622.cljs$lang$type = true;
examples.sortable.core.t52622.cljs$lang$ctorStr = "examples.sortable.core/t52622";
examples.sortable.core.t52622.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"examples.sortable.core/t52622");
});
examples.sortable.core.t52622.prototype.om$core$IRender$ = true;
examples.sortable.core.t52622.prototype.om$core$IRender$render$arity$1 = (function (this__48071__auto__){var self__ = this;
var this__48071__auto____$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Sortable example"),om.core.build.call(null,examples.sortable.core.sortable,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"view","view",1017523735),examples.sortable.core.item], null)], null)));
});
examples.sortable.core.t52622.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52624){var self__ = this;
var _52624__$1 = this;return self__.meta52623;
});
examples.sortable.core.t52622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52624,meta52623__$1){var self__ = this;
var _52624__$1 = this;return (new examples.sortable.core.t52622(self__.owner,self__.app,self__.sortable_view,meta52623__$1));
});
examples.sortable.core.__GT_t52622 = (function __GT_t52622(owner__$1,app__$1,sortable_view__$1,meta52623){return (new examples.sortable.core.t52622(owner__$1,app__$1,sortable_view__$1,meta52623));
});
}
return (new examples.sortable.core.t52622(owner,app,sortable_view,null));
});
om.core.root.call(null,examples.sortable.core.sortable_view,examples.sortable.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map