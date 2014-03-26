// Compiled by ClojureScript 0.0-2173
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t35301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35301 = (function (f,fn_handler,meta35302){
this.f = f;
this.fn_handler = fn_handler;
this.meta35302 = meta35302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35301.cljs$lang$type = true;
cljs.core.async.t35301.cljs$lang$ctorStr = "cljs.core.async/t35301";
cljs.core.async.t35301.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t35301");
});
cljs.core.async.t35301.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t35301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t35301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35303){var self__ = this;
var _35303__$1 = this;return self__.meta35302;
});
cljs.core.async.t35301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35303,meta35302__$1){var self__ = this;
var _35303__$1 = this;return (new cljs.core.async.t35301(self__.f,self__.fn_handler,meta35302__$1));
});
cljs.core.async.__GT_t35301 = (function __GT_t35301(f__$1,fn_handler__$1,meta35302){return (new cljs.core.async.t35301(f__$1,fn_handler__$1,meta35302));
});
}
return (new cljs.core.async.t35301(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__35305 = buff;if(G__35305)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__35305.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__35305.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35305);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35305);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_35306 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_35306);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_35306);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__4059__auto__ = ret;if(cljs.core.truth_(and__4059__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__4059__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4919__auto___35307 = n;var x_35308 = 0;while(true){
if((x_35308 < n__4919__auto___35307))
{(a[x_35308] = 0);
{
var G__35309 = (x_35308 + 1);
x_35308 = G__35309;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__35310 = (i + 1);
i = G__35310;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t35314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35314 = (function (flag,alt_flag,meta35315){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta35315 = meta35315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35314.cljs$lang$type = true;
cljs.core.async.t35314.cljs$lang$ctorStr = "cljs.core.async/t35314";
cljs.core.async.t35314.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t35314");
});
cljs.core.async.t35314.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t35314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t35314.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35316){var self__ = this;
var _35316__$1 = this;return self__.meta35315;
});
cljs.core.async.t35314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35316,meta35315__$1){var self__ = this;
var _35316__$1 = this;return (new cljs.core.async.t35314(self__.flag,self__.alt_flag,meta35315__$1));
});
cljs.core.async.__GT_t35314 = (function __GT_t35314(flag__$1,alt_flag__$1,meta35315){return (new cljs.core.async.t35314(flag__$1,alt_flag__$1,meta35315));
});
}
return (new cljs.core.async.t35314(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t35320 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35320 = (function (cb,flag,alt_handler,meta35321){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta35321 = meta35321;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35320.cljs$lang$type = true;
cljs.core.async.t35320.cljs$lang$ctorStr = "cljs.core.async/t35320";
cljs.core.async.t35320.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t35320");
});
cljs.core.async.t35320.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35320.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t35320.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t35320.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35322){var self__ = this;
var _35322__$1 = this;return self__.meta35321;
});
cljs.core.async.t35320.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35322,meta35321__$1){var self__ = this;
var _35322__$1 = this;return (new cljs.core.async.t35320(self__.cb,self__.flag,self__.alt_handler,meta35321__$1));
});
cljs.core.async.__GT_t35320 = (function __GT_t35320(cb__$1,flag__$1,alt_handler__$1,meta35321){return (new cljs.core.async.t35320(cb__$1,flag__$1,alt_handler__$1,meta35321));
});
}
return (new cljs.core.async.t35320(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35323_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35323_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4071__auto__ = wport;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__35324 = (i + 1);
i = G__35324;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__4071__auto__ = ret;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__4059__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__4059__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__4059__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__35325){var map__35327 = p__35325;var map__35327__$1 = ((cljs.core.seq_QMARK_.call(null,map__35327))?cljs.core.apply.call(null,cljs.core.hash_map,map__35327):map__35327);var opts = map__35327__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__35325 = null;if (arguments.length > 1) {
  p__35325 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__35325);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__35328){
var ports = cljs.core.first(arglist__35328);
var p__35325 = cljs.core.rest(arglist__35328);
return alts_BANG___delegate(ports,p__35325);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t35336 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35336 = (function (ch,f,map_LT_,meta35337){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35337 = meta35337;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35336.cljs$lang$type = true;
cljs.core.async.t35336.cljs$lang$ctorStr = "cljs.core.async/t35336";
cljs.core.async.t35336.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t35336");
});
cljs.core.async.t35336.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35336.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t35336.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35336.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t35339 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35339 = (function (fn1,_,meta35337,ch,f,map_LT_,meta35340){
this.fn1 = fn1;
this._ = _;
this.meta35337 = meta35337;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta35340 = meta35340;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35339.cljs$lang$type = true;
cljs.core.async.t35339.cljs$lang$ctorStr = "cljs.core.async/t35339";
cljs.core.async.t35339.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t35339");
});
cljs.core.async.t35339.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t35339.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t35339.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t35339.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__35329_SHARP_){return f1.call(null,(((p1__35329_SHARP_ == null))?null:self__.f.call(null,p1__35329_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t35339.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35341){var self__ = this;
var _35341__$1 = this;return self__.meta35340;
});
cljs.core.async.t35339.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35341,meta35340__$1){var self__ = this;
var _35341__$1 = this;return (new cljs.core.async.t35339(self__.fn1,self__._,self__.meta35337,self__.ch,self__.f,self__.map_LT_,meta35340__$1));
});
cljs.core.async.__GT_t35339 = (function __GT_t35339(fn1__$1,___$2,meta35337__$1,ch__$2,f__$2,map_LT___$2,meta35340){return (new cljs.core.async.t35339(fn1__$1,___$2,meta35337__$1,ch__$2,f__$2,map_LT___$2,meta35340));
});
}
return (new cljs.core.async.t35339(fn1,___$1,self__.meta35337,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__4059__auto__ = ret;if(cljs.core.truth_(and__4059__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__4059__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t35336.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35336.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35336.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35338){var self__ = this;
var _35338__$1 = this;return self__.meta35337;
});
cljs.core.async.t35336.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35338,meta35337__$1){var self__ = this;
var _35338__$1 = this;return (new cljs.core.async.t35336(self__.ch,self__.f,self__.map_LT_,meta35337__$1));
});
cljs.core.async.__GT_t35336 = (function __GT_t35336(ch__$1,f__$1,map_LT___$1,meta35337){return (new cljs.core.async.t35336(ch__$1,f__$1,map_LT___$1,meta35337));
});
}
return (new cljs.core.async.t35336(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t35345 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35345 = (function (ch,f,map_GT_,meta35346){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta35346 = meta35346;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35345.cljs$lang$type = true;
cljs.core.async.t35345.cljs$lang$ctorStr = "cljs.core.async/t35345";
cljs.core.async.t35345.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t35345");
});
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35345.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35345.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35347){var self__ = this;
var _35347__$1 = this;return self__.meta35346;
});
cljs.core.async.t35345.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35347,meta35346__$1){var self__ = this;
var _35347__$1 = this;return (new cljs.core.async.t35345(self__.ch,self__.f,self__.map_GT_,meta35346__$1));
});
cljs.core.async.__GT_t35345 = (function __GT_t35345(ch__$1,f__$1,map_GT___$1,meta35346){return (new cljs.core.async.t35345(ch__$1,f__$1,map_GT___$1,meta35346));
});
}
return (new cljs.core.async.t35345(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t35351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35351 = (function (ch,p,filter_GT_,meta35352){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta35352 = meta35352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35351.cljs$lang$type = true;
cljs.core.async.t35351.cljs$lang$ctorStr = "cljs.core.async/t35351";
cljs.core.async.t35351.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t35351");
});
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t35351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t35351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35353){var self__ = this;
var _35353__$1 = this;return self__.meta35352;
});
cljs.core.async.t35351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35353,meta35352__$1){var self__ = this;
var _35353__$1 = this;return (new cljs.core.async.t35351(self__.ch,self__.p,self__.filter_GT_,meta35352__$1));
});
cljs.core.async.__GT_t35351 = (function __GT_t35351(ch__$1,p__$1,filter_GT___$1,meta35352){return (new cljs.core.async.t35351(ch__$1,p__$1,filter_GT___$1,meta35352));
});
}
return (new cljs.core.async.t35351(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10861__auto___35436 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_35415){var state_val_35416 = (state_35415[1]);if((state_val_35416 === 1))
{var state_35415__$1 = state_35415;var statearr_35417_35437 = state_35415__$1;(statearr_35417_35437[2] = null);
(statearr_35417_35437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35416 === 2))
{var state_35415__$1 = state_35415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35415__$1,4,ch);
} else
{if((state_val_35416 === 3))
{var inst_35413 = (state_35415[2]);var state_35415__$1 = state_35415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35415__$1,inst_35413);
} else
{if((state_val_35416 === 4))
{var inst_35397 = (state_35415[7]);var inst_35397__$1 = (state_35415[2]);var inst_35398 = (inst_35397__$1 == null);var state_35415__$1 = (function (){var statearr_35418 = state_35415;(statearr_35418[7] = inst_35397__$1);
return statearr_35418;
})();if(cljs.core.truth_(inst_35398))
{var statearr_35419_35438 = state_35415__$1;(statearr_35419_35438[1] = 5);
} else
{var statearr_35420_35439 = state_35415__$1;(statearr_35420_35439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35416 === 5))
{var inst_35400 = cljs.core.async.close_BANG_.call(null,out);var state_35415__$1 = state_35415;var statearr_35421_35440 = state_35415__$1;(statearr_35421_35440[2] = inst_35400);
(statearr_35421_35440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35416 === 6))
{var inst_35397 = (state_35415[7]);var inst_35402 = p.call(null,inst_35397);var state_35415__$1 = state_35415;if(cljs.core.truth_(inst_35402))
{var statearr_35422_35441 = state_35415__$1;(statearr_35422_35441[1] = 8);
} else
{var statearr_35423_35442 = state_35415__$1;(statearr_35423_35442[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35416 === 7))
{var inst_35411 = (state_35415[2]);var state_35415__$1 = state_35415;var statearr_35424_35443 = state_35415__$1;(statearr_35424_35443[2] = inst_35411);
(statearr_35424_35443[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35416 === 8))
{var inst_35397 = (state_35415[7]);var state_35415__$1 = state_35415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35415__$1,11,out,inst_35397);
} else
{if((state_val_35416 === 9))
{var state_35415__$1 = state_35415;var statearr_35425_35444 = state_35415__$1;(statearr_35425_35444[2] = null);
(statearr_35425_35444[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35416 === 10))
{var inst_35408 = (state_35415[2]);var state_35415__$1 = (function (){var statearr_35426 = state_35415;(statearr_35426[8] = inst_35408);
return statearr_35426;
})();var statearr_35427_35445 = state_35415__$1;(statearr_35427_35445[2] = null);
(statearr_35427_35445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35416 === 11))
{var inst_35405 = (state_35415[2]);var state_35415__$1 = state_35415;var statearr_35428_35446 = state_35415__$1;(statearr_35428_35446[2] = inst_35405);
(statearr_35428_35446[1] = 10);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_35432 = [null,null,null,null,null,null,null,null,null];(statearr_35432[0] = state_machine__10847__auto__);
(statearr_35432[1] = 1);
return statearr_35432;
});
var state_machine__10847__auto____1 = (function (state_35415){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_35415);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e35433){if((e35433 instanceof Object))
{var ex__10850__auto__ = e35433;var statearr_35434_35447 = state_35415;(statearr_35434_35447[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35433;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35448 = state_35415;
state_35415 = G__35448;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_35415){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_35415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_35435 = f__10862__auto__.call(null);(statearr_35435[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___35436);
return statearr_35435;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__10861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_35600){var state_val_35601 = (state_35600[1]);if((state_val_35601 === 1))
{var state_35600__$1 = state_35600;var statearr_35602_35639 = state_35600__$1;(statearr_35602_35639[2] = null);
(statearr_35602_35639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 2))
{var state_35600__$1 = state_35600;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35600__$1,4,in$);
} else
{if((state_val_35601 === 3))
{var inst_35598 = (state_35600[2]);var state_35600__$1 = state_35600;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35600__$1,inst_35598);
} else
{if((state_val_35601 === 4))
{var inst_35546 = (state_35600[7]);var inst_35546__$1 = (state_35600[2]);var inst_35547 = (inst_35546__$1 == null);var state_35600__$1 = (function (){var statearr_35603 = state_35600;(statearr_35603[7] = inst_35546__$1);
return statearr_35603;
})();if(cljs.core.truth_(inst_35547))
{var statearr_35604_35640 = state_35600__$1;(statearr_35604_35640[1] = 5);
} else
{var statearr_35605_35641 = state_35600__$1;(statearr_35605_35641[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 5))
{var inst_35549 = cljs.core.async.close_BANG_.call(null,out);var state_35600__$1 = state_35600;var statearr_35606_35642 = state_35600__$1;(statearr_35606_35642[2] = inst_35549);
(statearr_35606_35642[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 6))
{var inst_35546 = (state_35600[7]);var inst_35551 = f.call(null,inst_35546);var inst_35556 = cljs.core.seq.call(null,inst_35551);var inst_35557 = inst_35556;var inst_35558 = null;var inst_35559 = 0;var inst_35560 = 0;var state_35600__$1 = (function (){var statearr_35607 = state_35600;(statearr_35607[8] = inst_35557);
(statearr_35607[9] = inst_35558);
(statearr_35607[10] = inst_35559);
(statearr_35607[11] = inst_35560);
return statearr_35607;
})();var statearr_35608_35643 = state_35600__$1;(statearr_35608_35643[2] = null);
(statearr_35608_35643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 7))
{var inst_35596 = (state_35600[2]);var state_35600__$1 = state_35600;var statearr_35609_35644 = state_35600__$1;(statearr_35609_35644[2] = inst_35596);
(statearr_35609_35644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 8))
{var inst_35559 = (state_35600[10]);var inst_35560 = (state_35600[11]);var inst_35562 = (inst_35560 < inst_35559);var inst_35563 = inst_35562;var state_35600__$1 = state_35600;if(cljs.core.truth_(inst_35563))
{var statearr_35610_35645 = state_35600__$1;(statearr_35610_35645[1] = 10);
} else
{var statearr_35611_35646 = state_35600__$1;(statearr_35611_35646[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 9))
{var inst_35593 = (state_35600[2]);var state_35600__$1 = (function (){var statearr_35612 = state_35600;(statearr_35612[12] = inst_35593);
return statearr_35612;
})();var statearr_35613_35647 = state_35600__$1;(statearr_35613_35647[2] = null);
(statearr_35613_35647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 10))
{var inst_35558 = (state_35600[9]);var inst_35560 = (state_35600[11]);var inst_35565 = cljs.core._nth.call(null,inst_35558,inst_35560);var state_35600__$1 = state_35600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35600__$1,13,out,inst_35565);
} else
{if((state_val_35601 === 11))
{var inst_35571 = (state_35600[13]);var inst_35557 = (state_35600[8]);var inst_35571__$1 = cljs.core.seq.call(null,inst_35557);var state_35600__$1 = (function (){var statearr_35617 = state_35600;(statearr_35617[13] = inst_35571__$1);
return statearr_35617;
})();if(inst_35571__$1)
{var statearr_35618_35648 = state_35600__$1;(statearr_35618_35648[1] = 14);
} else
{var statearr_35619_35649 = state_35600__$1;(statearr_35619_35649[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 12))
{var inst_35591 = (state_35600[2]);var state_35600__$1 = state_35600;var statearr_35620_35650 = state_35600__$1;(statearr_35620_35650[2] = inst_35591);
(statearr_35620_35650[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 13))
{var inst_35557 = (state_35600[8]);var inst_35558 = (state_35600[9]);var inst_35559 = (state_35600[10]);var inst_35560 = (state_35600[11]);var inst_35567 = (state_35600[2]);var inst_35568 = (inst_35560 + 1);var tmp35614 = inst_35557;var tmp35615 = inst_35558;var tmp35616 = inst_35559;var inst_35557__$1 = tmp35614;var inst_35558__$1 = tmp35615;var inst_35559__$1 = tmp35616;var inst_35560__$1 = inst_35568;var state_35600__$1 = (function (){var statearr_35621 = state_35600;(statearr_35621[8] = inst_35557__$1);
(statearr_35621[14] = inst_35567);
(statearr_35621[9] = inst_35558__$1);
(statearr_35621[10] = inst_35559__$1);
(statearr_35621[11] = inst_35560__$1);
return statearr_35621;
})();var statearr_35622_35651 = state_35600__$1;(statearr_35622_35651[2] = null);
(statearr_35622_35651[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 14))
{var inst_35571 = (state_35600[13]);var inst_35573 = cljs.core.chunked_seq_QMARK_.call(null,inst_35571);var state_35600__$1 = state_35600;if(inst_35573)
{var statearr_35623_35652 = state_35600__$1;(statearr_35623_35652[1] = 17);
} else
{var statearr_35624_35653 = state_35600__$1;(statearr_35624_35653[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 15))
{var state_35600__$1 = state_35600;var statearr_35625_35654 = state_35600__$1;(statearr_35625_35654[2] = null);
(statearr_35625_35654[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 16))
{var inst_35589 = (state_35600[2]);var state_35600__$1 = state_35600;var statearr_35626_35655 = state_35600__$1;(statearr_35626_35655[2] = inst_35589);
(statearr_35626_35655[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 17))
{var inst_35571 = (state_35600[13]);var inst_35575 = cljs.core.chunk_first.call(null,inst_35571);var inst_35576 = cljs.core.chunk_rest.call(null,inst_35571);var inst_35577 = cljs.core.count.call(null,inst_35575);var inst_35557 = inst_35576;var inst_35558 = inst_35575;var inst_35559 = inst_35577;var inst_35560 = 0;var state_35600__$1 = (function (){var statearr_35627 = state_35600;(statearr_35627[8] = inst_35557);
(statearr_35627[9] = inst_35558);
(statearr_35627[10] = inst_35559);
(statearr_35627[11] = inst_35560);
return statearr_35627;
})();var statearr_35628_35656 = state_35600__$1;(statearr_35628_35656[2] = null);
(statearr_35628_35656[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 18))
{var inst_35571 = (state_35600[13]);var inst_35580 = cljs.core.first.call(null,inst_35571);var state_35600__$1 = state_35600;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35600__$1,20,out,inst_35580);
} else
{if((state_val_35601 === 19))
{var inst_35586 = (state_35600[2]);var state_35600__$1 = state_35600;var statearr_35629_35657 = state_35600__$1;(statearr_35629_35657[2] = inst_35586);
(statearr_35629_35657[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35601 === 20))
{var inst_35571 = (state_35600[13]);var inst_35582 = (state_35600[2]);var inst_35583 = cljs.core.next.call(null,inst_35571);var inst_35557 = inst_35583;var inst_35558 = null;var inst_35559 = 0;var inst_35560 = 0;var state_35600__$1 = (function (){var statearr_35630 = state_35600;(statearr_35630[15] = inst_35582);
(statearr_35630[8] = inst_35557);
(statearr_35630[9] = inst_35558);
(statearr_35630[10] = inst_35559);
(statearr_35630[11] = inst_35560);
return statearr_35630;
})();var statearr_35631_35658 = state_35600__$1;(statearr_35631_35658[2] = null);
(statearr_35631_35658[1] = 8);
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
}
}
}
}
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_35635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35635[0] = state_machine__10847__auto__);
(statearr_35635[1] = 1);
return statearr_35635;
});
var state_machine__10847__auto____1 = (function (state_35600){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_35600);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e35636){if((e35636 instanceof Object))
{var ex__10850__auto__ = e35636;var statearr_35637_35659 = state_35600;(statearr_35637_35659[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35600);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35660 = state_35600;
state_35600 = G__35660;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_35600){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_35600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_35638 = f__10862__auto__.call(null);(statearr_35638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto__);
return statearr_35638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return c__10861__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__10861__auto___35741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_35720){var state_val_35721 = (state_35720[1]);if((state_val_35721 === 1))
{var state_35720__$1 = state_35720;var statearr_35722_35742 = state_35720__$1;(statearr_35722_35742[2] = null);
(statearr_35722_35742[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35721 === 2))
{var state_35720__$1 = state_35720;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35720__$1,4,from);
} else
{if((state_val_35721 === 3))
{var inst_35718 = (state_35720[2]);var state_35720__$1 = state_35720;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35720__$1,inst_35718);
} else
{if((state_val_35721 === 4))
{var inst_35703 = (state_35720[7]);var inst_35703__$1 = (state_35720[2]);var inst_35704 = (inst_35703__$1 == null);var state_35720__$1 = (function (){var statearr_35723 = state_35720;(statearr_35723[7] = inst_35703__$1);
return statearr_35723;
})();if(cljs.core.truth_(inst_35704))
{var statearr_35724_35743 = state_35720__$1;(statearr_35724_35743[1] = 5);
} else
{var statearr_35725_35744 = state_35720__$1;(statearr_35725_35744[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35721 === 5))
{var state_35720__$1 = state_35720;if(cljs.core.truth_(close_QMARK_))
{var statearr_35726_35745 = state_35720__$1;(statearr_35726_35745[1] = 8);
} else
{var statearr_35727_35746 = state_35720__$1;(statearr_35727_35746[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35721 === 6))
{var inst_35703 = (state_35720[7]);var state_35720__$1 = state_35720;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35720__$1,11,to,inst_35703);
} else
{if((state_val_35721 === 7))
{var inst_35716 = (state_35720[2]);var state_35720__$1 = state_35720;var statearr_35728_35747 = state_35720__$1;(statearr_35728_35747[2] = inst_35716);
(statearr_35728_35747[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35721 === 8))
{var inst_35707 = cljs.core.async.close_BANG_.call(null,to);var state_35720__$1 = state_35720;var statearr_35729_35748 = state_35720__$1;(statearr_35729_35748[2] = inst_35707);
(statearr_35729_35748[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35721 === 9))
{var state_35720__$1 = state_35720;var statearr_35730_35749 = state_35720__$1;(statearr_35730_35749[2] = null);
(statearr_35730_35749[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35721 === 10))
{var inst_35710 = (state_35720[2]);var state_35720__$1 = state_35720;var statearr_35731_35750 = state_35720__$1;(statearr_35731_35750[2] = inst_35710);
(statearr_35731_35750[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35721 === 11))
{var inst_35713 = (state_35720[2]);var state_35720__$1 = (function (){var statearr_35732 = state_35720;(statearr_35732[8] = inst_35713);
return statearr_35732;
})();var statearr_35733_35751 = state_35720__$1;(statearr_35733_35751[2] = null);
(statearr_35733_35751[1] = 2);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_35737 = [null,null,null,null,null,null,null,null,null];(statearr_35737[0] = state_machine__10847__auto__);
(statearr_35737[1] = 1);
return statearr_35737;
});
var state_machine__10847__auto____1 = (function (state_35720){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_35720);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e35738){if((e35738 instanceof Object))
{var ex__10850__auto__ = e35738;var statearr_35739_35752 = state_35720;(statearr_35739_35752[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35720);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35753 = state_35720;
state_35720 = G__35753;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_35720){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_35720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_35740 = f__10862__auto__.call(null);(statearr_35740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___35741);
return statearr_35740;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__10861__auto___35840 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_35818){var state_val_35819 = (state_35818[1]);if((state_val_35819 === 1))
{var state_35818__$1 = state_35818;var statearr_35820_35841 = state_35818__$1;(statearr_35820_35841[2] = null);
(statearr_35820_35841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 2))
{var state_35818__$1 = state_35818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35818__$1,4,ch);
} else
{if((state_val_35819 === 3))
{var inst_35816 = (state_35818[2]);var state_35818__$1 = state_35818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35818__$1,inst_35816);
} else
{if((state_val_35819 === 4))
{var inst_35799 = (state_35818[7]);var inst_35799__$1 = (state_35818[2]);var inst_35800 = (inst_35799__$1 == null);var state_35818__$1 = (function (){var statearr_35821 = state_35818;(statearr_35821[7] = inst_35799__$1);
return statearr_35821;
})();if(cljs.core.truth_(inst_35800))
{var statearr_35822_35842 = state_35818__$1;(statearr_35822_35842[1] = 5);
} else
{var statearr_35823_35843 = state_35818__$1;(statearr_35823_35843[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 5))
{var inst_35802 = cljs.core.async.close_BANG_.call(null,tc);var inst_35803 = cljs.core.async.close_BANG_.call(null,fc);var state_35818__$1 = (function (){var statearr_35824 = state_35818;(statearr_35824[8] = inst_35802);
return statearr_35824;
})();var statearr_35825_35844 = state_35818__$1;(statearr_35825_35844[2] = inst_35803);
(statearr_35825_35844[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 6))
{var inst_35799 = (state_35818[7]);var inst_35805 = p.call(null,inst_35799);var state_35818__$1 = state_35818;if(cljs.core.truth_(inst_35805))
{var statearr_35826_35845 = state_35818__$1;(statearr_35826_35845[1] = 9);
} else
{var statearr_35827_35846 = state_35818__$1;(statearr_35827_35846[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 7))
{var inst_35814 = (state_35818[2]);var state_35818__$1 = state_35818;var statearr_35828_35847 = state_35818__$1;(statearr_35828_35847[2] = inst_35814);
(statearr_35828_35847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 8))
{var inst_35811 = (state_35818[2]);var state_35818__$1 = (function (){var statearr_35829 = state_35818;(statearr_35829[9] = inst_35811);
return statearr_35829;
})();var statearr_35830_35848 = state_35818__$1;(statearr_35830_35848[2] = null);
(statearr_35830_35848[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 9))
{var state_35818__$1 = state_35818;var statearr_35831_35849 = state_35818__$1;(statearr_35831_35849[2] = tc);
(statearr_35831_35849[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 10))
{var state_35818__$1 = state_35818;var statearr_35832_35850 = state_35818__$1;(statearr_35832_35850[2] = fc);
(statearr_35832_35850[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35819 === 11))
{var inst_35799 = (state_35818[7]);var inst_35809 = (state_35818[2]);var state_35818__$1 = state_35818;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35818__$1,8,inst_35809,inst_35799);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_35836 = [null,null,null,null,null,null,null,null,null,null];(statearr_35836[0] = state_machine__10847__auto__);
(statearr_35836[1] = 1);
return statearr_35836;
});
var state_machine__10847__auto____1 = (function (state_35818){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_35818);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e35837){if((e35837 instanceof Object))
{var ex__10850__auto__ = e35837;var statearr_35838_35851 = state_35818;(statearr_35838_35851[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35818);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35852 = state_35818;
state_35818 = G__35852;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_35818){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_35818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_35839 = f__10862__auto__.call(null);(statearr_35839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___35840);
return statearr_35839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__10861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_35899){var state_val_35900 = (state_35899[1]);if((state_val_35900 === 7))
{var inst_35895 = (state_35899[2]);var state_35899__$1 = state_35899;var statearr_35901_35917 = state_35899__$1;(statearr_35901_35917[2] = inst_35895);
(statearr_35901_35917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35900 === 6))
{var inst_35888 = (state_35899[7]);var inst_35885 = (state_35899[8]);var inst_35892 = f.call(null,inst_35885,inst_35888);var inst_35885__$1 = inst_35892;var state_35899__$1 = (function (){var statearr_35902 = state_35899;(statearr_35902[8] = inst_35885__$1);
return statearr_35902;
})();var statearr_35903_35918 = state_35899__$1;(statearr_35903_35918[2] = null);
(statearr_35903_35918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35900 === 5))
{var inst_35885 = (state_35899[8]);var state_35899__$1 = state_35899;var statearr_35904_35919 = state_35899__$1;(statearr_35904_35919[2] = inst_35885);
(statearr_35904_35919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35900 === 4))
{var inst_35888 = (state_35899[7]);var inst_35888__$1 = (state_35899[2]);var inst_35889 = (inst_35888__$1 == null);var state_35899__$1 = (function (){var statearr_35905 = state_35899;(statearr_35905[7] = inst_35888__$1);
return statearr_35905;
})();if(cljs.core.truth_(inst_35889))
{var statearr_35906_35920 = state_35899__$1;(statearr_35906_35920[1] = 5);
} else
{var statearr_35907_35921 = state_35899__$1;(statearr_35907_35921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35900 === 3))
{var inst_35897 = (state_35899[2]);var state_35899__$1 = state_35899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35899__$1,inst_35897);
} else
{if((state_val_35900 === 2))
{var state_35899__$1 = state_35899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35899__$1,4,ch);
} else
{if((state_val_35900 === 1))
{var inst_35885 = init;var state_35899__$1 = (function (){var statearr_35908 = state_35899;(statearr_35908[8] = inst_35885);
return statearr_35908;
})();var statearr_35909_35922 = state_35899__$1;(statearr_35909_35922[2] = null);
(statearr_35909_35922[1] = 2);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_35913 = [null,null,null,null,null,null,null,null,null];(statearr_35913[0] = state_machine__10847__auto__);
(statearr_35913[1] = 1);
return statearr_35913;
});
var state_machine__10847__auto____1 = (function (state_35899){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_35899);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e35914){if((e35914 instanceof Object))
{var ex__10850__auto__ = e35914;var statearr_35915_35923 = state_35899;(statearr_35915_35923[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35914;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35924 = state_35899;
state_35899 = G__35924;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_35899){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_35899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_35916 = f__10862__auto__.call(null);(statearr_35916[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto__);
return statearr_35916;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return c__10861__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__10861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_35986){var state_val_35987 = (state_35986[1]);if((state_val_35987 === 1))
{var inst_35966 = cljs.core.seq.call(null,coll);var inst_35967 = inst_35966;var state_35986__$1 = (function (){var statearr_35988 = state_35986;(statearr_35988[7] = inst_35967);
return statearr_35988;
})();var statearr_35989_36007 = state_35986__$1;(statearr_35989_36007[2] = null);
(statearr_35989_36007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35987 === 2))
{var inst_35967 = (state_35986[7]);var state_35986__$1 = state_35986;if(cljs.core.truth_(inst_35967))
{var statearr_35990_36008 = state_35986__$1;(statearr_35990_36008[1] = 4);
} else
{var statearr_35991_36009 = state_35986__$1;(statearr_35991_36009[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35987 === 3))
{var inst_35984 = (state_35986[2]);var state_35986__$1 = state_35986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35986__$1,inst_35984);
} else
{if((state_val_35987 === 4))
{var inst_35967 = (state_35986[7]);var inst_35970 = cljs.core.first.call(null,inst_35967);var state_35986__$1 = state_35986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35986__$1,7,ch,inst_35970);
} else
{if((state_val_35987 === 5))
{var state_35986__$1 = state_35986;if(cljs.core.truth_(close_QMARK_))
{var statearr_35992_36010 = state_35986__$1;(statearr_35992_36010[1] = 8);
} else
{var statearr_35993_36011 = state_35986__$1;(statearr_35993_36011[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35987 === 6))
{var inst_35982 = (state_35986[2]);var state_35986__$1 = state_35986;var statearr_35994_36012 = state_35986__$1;(statearr_35994_36012[2] = inst_35982);
(statearr_35994_36012[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35987 === 7))
{var inst_35967 = (state_35986[7]);var inst_35972 = (state_35986[2]);var inst_35973 = cljs.core.next.call(null,inst_35967);var inst_35967__$1 = inst_35973;var state_35986__$1 = (function (){var statearr_35995 = state_35986;(statearr_35995[8] = inst_35972);
(statearr_35995[7] = inst_35967__$1);
return statearr_35995;
})();var statearr_35996_36013 = state_35986__$1;(statearr_35996_36013[2] = null);
(statearr_35996_36013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35987 === 8))
{var inst_35977 = cljs.core.async.close_BANG_.call(null,ch);var state_35986__$1 = state_35986;var statearr_35997_36014 = state_35986__$1;(statearr_35997_36014[2] = inst_35977);
(statearr_35997_36014[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35987 === 9))
{var state_35986__$1 = state_35986;var statearr_35998_36015 = state_35986__$1;(statearr_35998_36015[2] = null);
(statearr_35998_36015[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35987 === 10))
{var inst_35980 = (state_35986[2]);var state_35986__$1 = state_35986;var statearr_35999_36016 = state_35986__$1;(statearr_35999_36016[2] = inst_35980);
(statearr_35999_36016[1] = 6);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_36003 = [null,null,null,null,null,null,null,null,null];(statearr_36003[0] = state_machine__10847__auto__);
(statearr_36003[1] = 1);
return statearr_36003;
});
var state_machine__10847__auto____1 = (function (state_35986){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_35986);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e36004){if((e36004 instanceof Object))
{var ex__10850__auto__ = e36004;var statearr_36005_36017 = state_35986;(statearr_36005_36017[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35986);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36004;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36018 = state_35986;
state_35986 = G__36018;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_35986){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_35986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_36006 = f__10862__auto__.call(null);(statearr_36006[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto__);
return statearr_36006;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return c__10861__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj36020 = {};return obj36020;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__4059__auto__ = _;if(and__4059__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__4059__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4698__auto__ = (((_ == null))?null:_);return (function (){var or__4071__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj36022 = {};return obj36022;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t36246 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36246 = (function (cs,ch,mult,meta36247){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta36247 = meta36247;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36246.cljs$lang$type = true;
cljs.core.async.t36246.cljs$lang$ctorStr = "cljs.core.async/t36246";
cljs.core.async.t36246.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t36246");
});})(cs))
;
cljs.core.async.t36246.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t36246.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t36246.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t36246.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t36246.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t36246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36248){var self__ = this;
var _36248__$1 = this;return self__.meta36247;
});})(cs))
;
cljs.core.async.t36246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36248,meta36247__$1){var self__ = this;
var _36248__$1 = this;return (new cljs.core.async.t36246(self__.cs,self__.ch,self__.mult,meta36247__$1));
});})(cs))
;
cljs.core.async.__GT_t36246 = ((function (cs){
return (function __GT_t36246(cs__$1,ch__$1,mult__$1,meta36247){return (new cljs.core.async.t36246(cs__$1,ch__$1,mult__$1,meta36247));
});})(cs))
;
}
return (new cljs.core.async.t36246(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__10861__auto___36469 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_36383){var state_val_36384 = (state_36383[1]);if((state_val_36384 === 32))
{var inst_36327 = (state_36383[7]);var inst_36251 = (state_36383[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36383,31,Object,null,30);var inst_36334 = cljs.core.async.put_BANG_.call(null,inst_36327,inst_36251,done);var state_36383__$1 = state_36383;var statearr_36385_36470 = state_36383__$1;(statearr_36385_36470[2] = inst_36334);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36383__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 1))
{var state_36383__$1 = state_36383;var statearr_36386_36471 = state_36383__$1;(statearr_36386_36471[2] = null);
(statearr_36386_36471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 33))
{var inst_36340 = (state_36383[9]);var inst_36342 = cljs.core.chunked_seq_QMARK_.call(null,inst_36340);var state_36383__$1 = state_36383;if(inst_36342)
{var statearr_36387_36472 = state_36383__$1;(statearr_36387_36472[1] = 36);
} else
{var statearr_36388_36473 = state_36383__$1;(statearr_36388_36473[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 2))
{var state_36383__$1 = state_36383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,4,ch);
} else
{if((state_val_36384 === 34))
{var state_36383__$1 = state_36383;var statearr_36389_36474 = state_36383__$1;(statearr_36389_36474[2] = null);
(statearr_36389_36474[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 3))
{var inst_36381 = (state_36383[2]);var state_36383__$1 = state_36383;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36383__$1,inst_36381);
} else
{if((state_val_36384 === 35))
{var inst_36365 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36390_36475 = state_36383__$1;(statearr_36390_36475[2] = inst_36365);
(statearr_36390_36475[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 4))
{var inst_36251 = (state_36383[8]);var inst_36251__$1 = (state_36383[2]);var inst_36252 = (inst_36251__$1 == null);var state_36383__$1 = (function (){var statearr_36391 = state_36383;(statearr_36391[8] = inst_36251__$1);
return statearr_36391;
})();if(cljs.core.truth_(inst_36252))
{var statearr_36392_36476 = state_36383__$1;(statearr_36392_36476[1] = 5);
} else
{var statearr_36393_36477 = state_36383__$1;(statearr_36393_36477[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 36))
{var inst_36340 = (state_36383[9]);var inst_36344 = cljs.core.chunk_first.call(null,inst_36340);var inst_36345 = cljs.core.chunk_rest.call(null,inst_36340);var inst_36346 = cljs.core.count.call(null,inst_36344);var inst_36319 = inst_36345;var inst_36320 = inst_36344;var inst_36321 = inst_36346;var inst_36322 = 0;var state_36383__$1 = (function (){var statearr_36394 = state_36383;(statearr_36394[10] = inst_36321);
(statearr_36394[11] = inst_36322);
(statearr_36394[12] = inst_36320);
(statearr_36394[13] = inst_36319);
return statearr_36394;
})();var statearr_36395_36478 = state_36383__$1;(statearr_36395_36478[2] = null);
(statearr_36395_36478[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 5))
{var inst_36258 = cljs.core.deref.call(null,cs);var inst_36259 = cljs.core.seq.call(null,inst_36258);var inst_36260 = inst_36259;var inst_36261 = null;var inst_36262 = 0;var inst_36263 = 0;var state_36383__$1 = (function (){var statearr_36396 = state_36383;(statearr_36396[14] = inst_36261);
(statearr_36396[15] = inst_36260);
(statearr_36396[16] = inst_36263);
(statearr_36396[17] = inst_36262);
return statearr_36396;
})();var statearr_36397_36479 = state_36383__$1;(statearr_36397_36479[2] = null);
(statearr_36397_36479[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 37))
{var inst_36340 = (state_36383[9]);var inst_36349 = cljs.core.first.call(null,inst_36340);var state_36383__$1 = (function (){var statearr_36398 = state_36383;(statearr_36398[18] = inst_36349);
return statearr_36398;
})();var statearr_36399_36480 = state_36383__$1;(statearr_36399_36480[2] = null);
(statearr_36399_36480[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 6))
{var inst_36311 = (state_36383[19]);var inst_36310 = cljs.core.deref.call(null,cs);var inst_36311__$1 = cljs.core.keys.call(null,inst_36310);var inst_36312 = cljs.core.count.call(null,inst_36311__$1);var inst_36313 = cljs.core.reset_BANG_.call(null,dctr,inst_36312);var inst_36318 = cljs.core.seq.call(null,inst_36311__$1);var inst_36319 = inst_36318;var inst_36320 = null;var inst_36321 = 0;var inst_36322 = 0;var state_36383__$1 = (function (){var statearr_36400 = state_36383;(statearr_36400[20] = inst_36313);
(statearr_36400[19] = inst_36311__$1);
(statearr_36400[10] = inst_36321);
(statearr_36400[11] = inst_36322);
(statearr_36400[12] = inst_36320);
(statearr_36400[13] = inst_36319);
return statearr_36400;
})();var statearr_36401_36481 = state_36383__$1;(statearr_36401_36481[2] = null);
(statearr_36401_36481[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 38))
{var inst_36362 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36402_36482 = state_36383__$1;(statearr_36402_36482[2] = inst_36362);
(statearr_36402_36482[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 7))
{var inst_36379 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36403_36483 = state_36383__$1;(statearr_36403_36483[2] = inst_36379);
(statearr_36403_36483[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 39))
{var inst_36340 = (state_36383[9]);var inst_36358 = (state_36383[2]);var inst_36359 = cljs.core.next.call(null,inst_36340);var inst_36319 = inst_36359;var inst_36320 = null;var inst_36321 = 0;var inst_36322 = 0;var state_36383__$1 = (function (){var statearr_36404 = state_36383;(statearr_36404[21] = inst_36358);
(statearr_36404[10] = inst_36321);
(statearr_36404[11] = inst_36322);
(statearr_36404[12] = inst_36320);
(statearr_36404[13] = inst_36319);
return statearr_36404;
})();var statearr_36405_36484 = state_36383__$1;(statearr_36405_36484[2] = null);
(statearr_36405_36484[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 8))
{var inst_36263 = (state_36383[16]);var inst_36262 = (state_36383[17]);var inst_36265 = (inst_36263 < inst_36262);var inst_36266 = inst_36265;var state_36383__$1 = state_36383;if(cljs.core.truth_(inst_36266))
{var statearr_36406_36485 = state_36383__$1;(statearr_36406_36485[1] = 10);
} else
{var statearr_36407_36486 = state_36383__$1;(statearr_36407_36486[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 40))
{var inst_36349 = (state_36383[18]);var inst_36350 = (state_36383[2]);var inst_36351 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_36352 = cljs.core.async.untap_STAR_.call(null,m,inst_36349);var state_36383__$1 = (function (){var statearr_36408 = state_36383;(statearr_36408[22] = inst_36351);
(statearr_36408[23] = inst_36350);
return statearr_36408;
})();var statearr_36409_36487 = state_36383__$1;(statearr_36409_36487[2] = inst_36352);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36383__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 9))
{var inst_36308 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36410_36488 = state_36383__$1;(statearr_36410_36488[2] = inst_36308);
(statearr_36410_36488[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 41))
{var inst_36349 = (state_36383[18]);var inst_36251 = (state_36383[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36383,40,Object,null,39);var inst_36356 = cljs.core.async.put_BANG_.call(null,inst_36349,inst_36251,done);var state_36383__$1 = state_36383;var statearr_36411_36489 = state_36383__$1;(statearr_36411_36489[2] = inst_36356);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36383__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 10))
{var inst_36261 = (state_36383[14]);var inst_36263 = (state_36383[16]);var inst_36269 = cljs.core._nth.call(null,inst_36261,inst_36263);var inst_36270 = cljs.core.nth.call(null,inst_36269,0,null);var inst_36271 = cljs.core.nth.call(null,inst_36269,1,null);var state_36383__$1 = (function (){var statearr_36412 = state_36383;(statearr_36412[24] = inst_36270);
return statearr_36412;
})();if(cljs.core.truth_(inst_36271))
{var statearr_36413_36490 = state_36383__$1;(statearr_36413_36490[1] = 13);
} else
{var statearr_36414_36491 = state_36383__$1;(statearr_36414_36491[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 42))
{var state_36383__$1 = state_36383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36383__$1,45,dchan);
} else
{if((state_val_36384 === 11))
{var inst_36260 = (state_36383[15]);var inst_36280 = (state_36383[25]);var inst_36280__$1 = cljs.core.seq.call(null,inst_36260);var state_36383__$1 = (function (){var statearr_36415 = state_36383;(statearr_36415[25] = inst_36280__$1);
return statearr_36415;
})();if(inst_36280__$1)
{var statearr_36416_36492 = state_36383__$1;(statearr_36416_36492[1] = 16);
} else
{var statearr_36417_36493 = state_36383__$1;(statearr_36417_36493[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 43))
{var state_36383__$1 = state_36383;var statearr_36418_36494 = state_36383__$1;(statearr_36418_36494[2] = null);
(statearr_36418_36494[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 12))
{var inst_36306 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36419_36495 = state_36383__$1;(statearr_36419_36495[2] = inst_36306);
(statearr_36419_36495[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 44))
{var inst_36376 = (state_36383[2]);var state_36383__$1 = (function (){var statearr_36420 = state_36383;(statearr_36420[26] = inst_36376);
return statearr_36420;
})();var statearr_36421_36496 = state_36383__$1;(statearr_36421_36496[2] = null);
(statearr_36421_36496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 13))
{var inst_36270 = (state_36383[24]);var inst_36273 = cljs.core.async.close_BANG_.call(null,inst_36270);var state_36383__$1 = state_36383;var statearr_36422_36497 = state_36383__$1;(statearr_36422_36497[2] = inst_36273);
(statearr_36422_36497[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 45))
{var inst_36373 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36426_36498 = state_36383__$1;(statearr_36426_36498[2] = inst_36373);
(statearr_36426_36498[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 14))
{var state_36383__$1 = state_36383;var statearr_36427_36499 = state_36383__$1;(statearr_36427_36499[2] = null);
(statearr_36427_36499[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 15))
{var inst_36261 = (state_36383[14]);var inst_36260 = (state_36383[15]);var inst_36263 = (state_36383[16]);var inst_36262 = (state_36383[17]);var inst_36276 = (state_36383[2]);var inst_36277 = (inst_36263 + 1);var tmp36423 = inst_36261;var tmp36424 = inst_36260;var tmp36425 = inst_36262;var inst_36260__$1 = tmp36424;var inst_36261__$1 = tmp36423;var inst_36262__$1 = tmp36425;var inst_36263__$1 = inst_36277;var state_36383__$1 = (function (){var statearr_36428 = state_36383;(statearr_36428[14] = inst_36261__$1);
(statearr_36428[15] = inst_36260__$1);
(statearr_36428[16] = inst_36263__$1);
(statearr_36428[17] = inst_36262__$1);
(statearr_36428[27] = inst_36276);
return statearr_36428;
})();var statearr_36429_36500 = state_36383__$1;(statearr_36429_36500[2] = null);
(statearr_36429_36500[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 16))
{var inst_36280 = (state_36383[25]);var inst_36282 = cljs.core.chunked_seq_QMARK_.call(null,inst_36280);var state_36383__$1 = state_36383;if(inst_36282)
{var statearr_36430_36501 = state_36383__$1;(statearr_36430_36501[1] = 19);
} else
{var statearr_36431_36502 = state_36383__$1;(statearr_36431_36502[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 17))
{var state_36383__$1 = state_36383;var statearr_36432_36503 = state_36383__$1;(statearr_36432_36503[2] = null);
(statearr_36432_36503[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 18))
{var inst_36304 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36433_36504 = state_36383__$1;(statearr_36433_36504[2] = inst_36304);
(statearr_36433_36504[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 19))
{var inst_36280 = (state_36383[25]);var inst_36284 = cljs.core.chunk_first.call(null,inst_36280);var inst_36285 = cljs.core.chunk_rest.call(null,inst_36280);var inst_36286 = cljs.core.count.call(null,inst_36284);var inst_36260 = inst_36285;var inst_36261 = inst_36284;var inst_36262 = inst_36286;var inst_36263 = 0;var state_36383__$1 = (function (){var statearr_36434 = state_36383;(statearr_36434[14] = inst_36261);
(statearr_36434[15] = inst_36260);
(statearr_36434[16] = inst_36263);
(statearr_36434[17] = inst_36262);
return statearr_36434;
})();var statearr_36435_36505 = state_36383__$1;(statearr_36435_36505[2] = null);
(statearr_36435_36505[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 20))
{var inst_36280 = (state_36383[25]);var inst_36290 = cljs.core.first.call(null,inst_36280);var inst_36291 = cljs.core.nth.call(null,inst_36290,0,null);var inst_36292 = cljs.core.nth.call(null,inst_36290,1,null);var state_36383__$1 = (function (){var statearr_36436 = state_36383;(statearr_36436[28] = inst_36291);
return statearr_36436;
})();if(cljs.core.truth_(inst_36292))
{var statearr_36437_36506 = state_36383__$1;(statearr_36437_36506[1] = 22);
} else
{var statearr_36438_36507 = state_36383__$1;(statearr_36438_36507[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 21))
{var inst_36301 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36439_36508 = state_36383__$1;(statearr_36439_36508[2] = inst_36301);
(statearr_36439_36508[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 22))
{var inst_36291 = (state_36383[28]);var inst_36294 = cljs.core.async.close_BANG_.call(null,inst_36291);var state_36383__$1 = state_36383;var statearr_36440_36509 = state_36383__$1;(statearr_36440_36509[2] = inst_36294);
(statearr_36440_36509[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 23))
{var state_36383__$1 = state_36383;var statearr_36441_36510 = state_36383__$1;(statearr_36441_36510[2] = null);
(statearr_36441_36510[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 24))
{var inst_36280 = (state_36383[25]);var inst_36297 = (state_36383[2]);var inst_36298 = cljs.core.next.call(null,inst_36280);var inst_36260 = inst_36298;var inst_36261 = null;var inst_36262 = 0;var inst_36263 = 0;var state_36383__$1 = (function (){var statearr_36442 = state_36383;(statearr_36442[14] = inst_36261);
(statearr_36442[15] = inst_36260);
(statearr_36442[16] = inst_36263);
(statearr_36442[17] = inst_36262);
(statearr_36442[29] = inst_36297);
return statearr_36442;
})();var statearr_36443_36511 = state_36383__$1;(statearr_36443_36511[2] = null);
(statearr_36443_36511[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 25))
{var inst_36321 = (state_36383[10]);var inst_36322 = (state_36383[11]);var inst_36324 = (inst_36322 < inst_36321);var inst_36325 = inst_36324;var state_36383__$1 = state_36383;if(cljs.core.truth_(inst_36325))
{var statearr_36444_36512 = state_36383__$1;(statearr_36444_36512[1] = 27);
} else
{var statearr_36445_36513 = state_36383__$1;(statearr_36445_36513[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 26))
{var inst_36311 = (state_36383[19]);var inst_36369 = (state_36383[2]);var inst_36370 = cljs.core.seq.call(null,inst_36311);var state_36383__$1 = (function (){var statearr_36446 = state_36383;(statearr_36446[30] = inst_36369);
return statearr_36446;
})();if(inst_36370)
{var statearr_36447_36514 = state_36383__$1;(statearr_36447_36514[1] = 42);
} else
{var statearr_36448_36515 = state_36383__$1;(statearr_36448_36515[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 27))
{var inst_36322 = (state_36383[11]);var inst_36320 = (state_36383[12]);var inst_36327 = cljs.core._nth.call(null,inst_36320,inst_36322);var state_36383__$1 = (function (){var statearr_36449 = state_36383;(statearr_36449[7] = inst_36327);
return statearr_36449;
})();var statearr_36450_36516 = state_36383__$1;(statearr_36450_36516[2] = null);
(statearr_36450_36516[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 28))
{var inst_36340 = (state_36383[9]);var inst_36319 = (state_36383[13]);var inst_36340__$1 = cljs.core.seq.call(null,inst_36319);var state_36383__$1 = (function (){var statearr_36454 = state_36383;(statearr_36454[9] = inst_36340__$1);
return statearr_36454;
})();if(inst_36340__$1)
{var statearr_36455_36517 = state_36383__$1;(statearr_36455_36517[1] = 33);
} else
{var statearr_36456_36518 = state_36383__$1;(statearr_36456_36518[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 29))
{var inst_36367 = (state_36383[2]);var state_36383__$1 = state_36383;var statearr_36457_36519 = state_36383__$1;(statearr_36457_36519[2] = inst_36367);
(statearr_36457_36519[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 30))
{var inst_36321 = (state_36383[10]);var inst_36322 = (state_36383[11]);var inst_36320 = (state_36383[12]);var inst_36319 = (state_36383[13]);var inst_36336 = (state_36383[2]);var inst_36337 = (inst_36322 + 1);var tmp36451 = inst_36321;var tmp36452 = inst_36320;var tmp36453 = inst_36319;var inst_36319__$1 = tmp36453;var inst_36320__$1 = tmp36452;var inst_36321__$1 = tmp36451;var inst_36322__$1 = inst_36337;var state_36383__$1 = (function (){var statearr_36458 = state_36383;(statearr_36458[10] = inst_36321__$1);
(statearr_36458[11] = inst_36322__$1);
(statearr_36458[12] = inst_36320__$1);
(statearr_36458[31] = inst_36336);
(statearr_36458[13] = inst_36319__$1);
return statearr_36458;
})();var statearr_36459_36520 = state_36383__$1;(statearr_36459_36520[2] = null);
(statearr_36459_36520[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36384 === 31))
{var inst_36327 = (state_36383[7]);var inst_36328 = (state_36383[2]);var inst_36329 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_36330 = cljs.core.async.untap_STAR_.call(null,m,inst_36327);var state_36383__$1 = (function (){var statearr_36460 = state_36383;(statearr_36460[32] = inst_36328);
(statearr_36460[33] = inst_36329);
return statearr_36460;
})();var statearr_36461_36521 = state_36383__$1;(statearr_36461_36521[2] = inst_36330);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36383__$1);
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
var state_machine__10847__auto____0 = (function (){var statearr_36465 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36465[0] = state_machine__10847__auto__);
(statearr_36465[1] = 1);
return statearr_36465;
});
var state_machine__10847__auto____1 = (function (state_36383){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_36383);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e36466){if((e36466 instanceof Object))
{var ex__10850__auto__ = e36466;var statearr_36467_36522 = state_36383;(statearr_36467_36522[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36523 = state_36383;
state_36383 = G__36523;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_36383){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_36383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_36468 = f__10862__auto__.call(null);(statearr_36468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___36469);
return statearr_36468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj36525 = {};return obj36525;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__4059__auto__ = m;if(and__4059__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__4059__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4698__auto__ = (((m == null))?null:m);return (function (){var or__4071__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t36635 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36635 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36636){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta36636 = meta36636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36635.cljs$lang$type = true;
cljs.core.async.t36635.cljs$lang$ctorStr = "cljs.core.async/t36635";
cljs.core.async.t36635.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t36635");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36635.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36635.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36637){var self__ = this;
var _36637__$1 = this;return self__.meta36636;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36637,meta36636__$1){var self__ = this;
var _36637__$1 = this;return (new cljs.core.async.t36635(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36636__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36635 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36635(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36636){return (new cljs.core.async.t36635(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36636));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36635(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__10861__auto___36744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_36702){var state_val_36703 = (state_36702[1]);if((state_val_36703 === 1))
{var inst_36641 = (state_36702[7]);var inst_36641__$1 = calc_state.call(null);var inst_36642 = cljs.core.seq_QMARK_.call(null,inst_36641__$1);var state_36702__$1 = (function (){var statearr_36704 = state_36702;(statearr_36704[7] = inst_36641__$1);
return statearr_36704;
})();if(inst_36642)
{var statearr_36705_36745 = state_36702__$1;(statearr_36705_36745[1] = 2);
} else
{var statearr_36706_36746 = state_36702__$1;(statearr_36706_36746[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 2))
{var inst_36641 = (state_36702[7]);var inst_36644 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36641);var state_36702__$1 = state_36702;var statearr_36707_36747 = state_36702__$1;(statearr_36707_36747[2] = inst_36644);
(statearr_36707_36747[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 3))
{var inst_36641 = (state_36702[7]);var state_36702__$1 = state_36702;var statearr_36708_36748 = state_36702__$1;(statearr_36708_36748[2] = inst_36641);
(statearr_36708_36748[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 4))
{var inst_36641 = (state_36702[7]);var inst_36647 = (state_36702[2]);var inst_36648 = cljs.core.get.call(null,inst_36647,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36649 = cljs.core.get.call(null,inst_36647,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36650 = cljs.core.get.call(null,inst_36647,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36651 = inst_36641;var state_36702__$1 = (function (){var statearr_36709 = state_36702;(statearr_36709[8] = inst_36648);
(statearr_36709[9] = inst_36649);
(statearr_36709[10] = inst_36651);
(statearr_36709[11] = inst_36650);
return statearr_36709;
})();var statearr_36710_36749 = state_36702__$1;(statearr_36710_36749[2] = null);
(statearr_36710_36749[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 5))
{var inst_36651 = (state_36702[10]);var inst_36654 = cljs.core.seq_QMARK_.call(null,inst_36651);var state_36702__$1 = state_36702;if(inst_36654)
{var statearr_36711_36750 = state_36702__$1;(statearr_36711_36750[1] = 7);
} else
{var statearr_36712_36751 = state_36702__$1;(statearr_36712_36751[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 6))
{var inst_36700 = (state_36702[2]);var state_36702__$1 = state_36702;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36702__$1,inst_36700);
} else
{if((state_val_36703 === 7))
{var inst_36651 = (state_36702[10]);var inst_36656 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36651);var state_36702__$1 = state_36702;var statearr_36713_36752 = state_36702__$1;(statearr_36713_36752[2] = inst_36656);
(statearr_36713_36752[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 8))
{var inst_36651 = (state_36702[10]);var state_36702__$1 = state_36702;var statearr_36714_36753 = state_36702__$1;(statearr_36714_36753[2] = inst_36651);
(statearr_36714_36753[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 9))
{var inst_36659 = (state_36702[12]);var inst_36659__$1 = (state_36702[2]);var inst_36660 = cljs.core.get.call(null,inst_36659__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36661 = cljs.core.get.call(null,inst_36659__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36662 = cljs.core.get.call(null,inst_36659__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36702__$1 = (function (){var statearr_36715 = state_36702;(statearr_36715[13] = inst_36662);
(statearr_36715[14] = inst_36661);
(statearr_36715[12] = inst_36659__$1);
return statearr_36715;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36702__$1,10,inst_36660);
} else
{if((state_val_36703 === 10))
{var inst_36667 = (state_36702[15]);var inst_36666 = (state_36702[16]);var inst_36665 = (state_36702[2]);var inst_36666__$1 = cljs.core.nth.call(null,inst_36665,0,null);var inst_36667__$1 = cljs.core.nth.call(null,inst_36665,1,null);var inst_36668 = (inst_36666__$1 == null);var inst_36669 = cljs.core._EQ_.call(null,inst_36667__$1,change);var inst_36670 = (inst_36668) || (inst_36669);var state_36702__$1 = (function (){var statearr_36716 = state_36702;(statearr_36716[15] = inst_36667__$1);
(statearr_36716[16] = inst_36666__$1);
return statearr_36716;
})();if(cljs.core.truth_(inst_36670))
{var statearr_36717_36754 = state_36702__$1;(statearr_36717_36754[1] = 11);
} else
{var statearr_36718_36755 = state_36702__$1;(statearr_36718_36755[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 11))
{var inst_36666 = (state_36702[16]);var inst_36672 = (inst_36666 == null);var state_36702__$1 = state_36702;if(cljs.core.truth_(inst_36672))
{var statearr_36719_36756 = state_36702__$1;(statearr_36719_36756[1] = 14);
} else
{var statearr_36720_36757 = state_36702__$1;(statearr_36720_36757[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 12))
{var inst_36662 = (state_36702[13]);var inst_36667 = (state_36702[15]);var inst_36681 = (state_36702[17]);var inst_36681__$1 = inst_36662.call(null,inst_36667);var state_36702__$1 = (function (){var statearr_36721 = state_36702;(statearr_36721[17] = inst_36681__$1);
return statearr_36721;
})();if(cljs.core.truth_(inst_36681__$1))
{var statearr_36722_36758 = state_36702__$1;(statearr_36722_36758[1] = 17);
} else
{var statearr_36723_36759 = state_36702__$1;(statearr_36723_36759[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 13))
{var inst_36698 = (state_36702[2]);var state_36702__$1 = state_36702;var statearr_36724_36760 = state_36702__$1;(statearr_36724_36760[2] = inst_36698);
(statearr_36724_36760[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 14))
{var inst_36667 = (state_36702[15]);var inst_36674 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36667);var state_36702__$1 = state_36702;var statearr_36725_36761 = state_36702__$1;(statearr_36725_36761[2] = inst_36674);
(statearr_36725_36761[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 15))
{var state_36702__$1 = state_36702;var statearr_36726_36762 = state_36702__$1;(statearr_36726_36762[2] = null);
(statearr_36726_36762[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 16))
{var inst_36677 = (state_36702[2]);var inst_36678 = calc_state.call(null);var inst_36651 = inst_36678;var state_36702__$1 = (function (){var statearr_36727 = state_36702;(statearr_36727[18] = inst_36677);
(statearr_36727[10] = inst_36651);
return statearr_36727;
})();var statearr_36728_36763 = state_36702__$1;(statearr_36728_36763[2] = null);
(statearr_36728_36763[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 17))
{var inst_36681 = (state_36702[17]);var state_36702__$1 = state_36702;var statearr_36729_36764 = state_36702__$1;(statearr_36729_36764[2] = inst_36681);
(statearr_36729_36764[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 18))
{var inst_36662 = (state_36702[13]);var inst_36661 = (state_36702[14]);var inst_36667 = (state_36702[15]);var inst_36684 = cljs.core.empty_QMARK_.call(null,inst_36662);var inst_36685 = inst_36661.call(null,inst_36667);var inst_36686 = cljs.core.not.call(null,inst_36685);var inst_36687 = (inst_36684) && (inst_36686);var state_36702__$1 = state_36702;var statearr_36730_36765 = state_36702__$1;(statearr_36730_36765[2] = inst_36687);
(statearr_36730_36765[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 19))
{var inst_36689 = (state_36702[2]);var state_36702__$1 = state_36702;if(cljs.core.truth_(inst_36689))
{var statearr_36731_36766 = state_36702__$1;(statearr_36731_36766[1] = 20);
} else
{var statearr_36732_36767 = state_36702__$1;(statearr_36732_36767[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 20))
{var inst_36666 = (state_36702[16]);var state_36702__$1 = state_36702;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36702__$1,23,out,inst_36666);
} else
{if((state_val_36703 === 21))
{var state_36702__$1 = state_36702;var statearr_36733_36768 = state_36702__$1;(statearr_36733_36768[2] = null);
(statearr_36733_36768[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 22))
{var inst_36659 = (state_36702[12]);var inst_36695 = (state_36702[2]);var inst_36651 = inst_36659;var state_36702__$1 = (function (){var statearr_36734 = state_36702;(statearr_36734[19] = inst_36695);
(statearr_36734[10] = inst_36651);
return statearr_36734;
})();var statearr_36735_36769 = state_36702__$1;(statearr_36735_36769[2] = null);
(statearr_36735_36769[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36703 === 23))
{var inst_36692 = (state_36702[2]);var state_36702__$1 = state_36702;var statearr_36736_36770 = state_36702__$1;(statearr_36736_36770[2] = inst_36692);
(statearr_36736_36770[1] = 22);
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
var state_machine__10847__auto____0 = (function (){var statearr_36740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36740[0] = state_machine__10847__auto__);
(statearr_36740[1] = 1);
return statearr_36740;
});
var state_machine__10847__auto____1 = (function (state_36702){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_36702);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e36741){if((e36741 instanceof Object))
{var ex__10850__auto__ = e36741;var statearr_36742_36771 = state_36702;(statearr_36742_36771[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36702);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36772 = state_36702;
state_36702 = G__36772;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_36702){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_36702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_36743 = f__10862__auto__.call(null);(statearr_36743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___36744);
return statearr_36743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj36774 = {};return obj36774;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__4059__auto__ = p;if(and__4059__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__4059__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4698__auto__ = (((p == null))?null:p);return (function (){var or__4071__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__4059__auto__ = p;if(and__4059__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__4059__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4698__auto__ = (((p == null))?null:p);return (function (){var or__4071__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__4059__auto__ = p;if(and__4059__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__4059__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4698__auto__ = (((p == null))?null:p);return (function (){var or__4071__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__4059__auto__ = p;if(and__4059__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__4059__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4698__auto__ = (((p == null))?null:p);return (function (){var or__4071__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4698__auto__)]);if(or__4071__auto__)
{return or__4071__auto__;
} else
{var or__4071__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__4071__auto____$1)
{return or__4071__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__4071__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4071__auto__,mults){
return (function (p1__36775_SHARP_){if(cljs.core.truth_(p1__36775_SHARP_.call(null,topic)))
{return p1__36775_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36775_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4071__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36900 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36901){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36901 = meta36901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36900.cljs$lang$type = true;
cljs.core.async.t36900.cljs$lang$ctorStr = "cljs.core.async/t36900";
cljs.core.async.t36900.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t36900");
});})(mults,ensure_mult))
;
cljs.core.async.t36900.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36900.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36900.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36900.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36900.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36902){var self__ = this;
var _36902__$1 = this;return self__.meta36901;
});})(mults,ensure_mult))
;
cljs.core.async.t36900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36902,meta36901__$1){var self__ = this;
var _36902__$1 = this;return (new cljs.core.async.t36900(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36901__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36900 = ((function (mults,ensure_mult){
return (function __GT_t36900(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36901){return (new cljs.core.async.t36900(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36901));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36900(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__10861__auto___37024 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_36976){var state_val_36977 = (state_36976[1]);if((state_val_36977 === 1))
{var state_36976__$1 = state_36976;var statearr_36978_37025 = state_36976__$1;(statearr_36978_37025[2] = null);
(statearr_36978_37025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 2))
{var state_36976__$1 = state_36976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36976__$1,4,ch);
} else
{if((state_val_36977 === 3))
{var inst_36974 = (state_36976[2]);var state_36976__$1 = state_36976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36976__$1,inst_36974);
} else
{if((state_val_36977 === 4))
{var inst_36905 = (state_36976[7]);var inst_36905__$1 = (state_36976[2]);var inst_36906 = (inst_36905__$1 == null);var state_36976__$1 = (function (){var statearr_36979 = state_36976;(statearr_36979[7] = inst_36905__$1);
return statearr_36979;
})();if(cljs.core.truth_(inst_36906))
{var statearr_36980_37026 = state_36976__$1;(statearr_36980_37026[1] = 5);
} else
{var statearr_36981_37027 = state_36976__$1;(statearr_36981_37027[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 5))
{var inst_36912 = cljs.core.deref.call(null,mults);var inst_36913 = cljs.core.vals.call(null,inst_36912);var inst_36914 = cljs.core.seq.call(null,inst_36913);var inst_36915 = inst_36914;var inst_36916 = null;var inst_36917 = 0;var inst_36918 = 0;var state_36976__$1 = (function (){var statearr_36982 = state_36976;(statearr_36982[8] = inst_36915);
(statearr_36982[9] = inst_36917);
(statearr_36982[10] = inst_36916);
(statearr_36982[11] = inst_36918);
return statearr_36982;
})();var statearr_36983_37028 = state_36976__$1;(statearr_36983_37028[2] = null);
(statearr_36983_37028[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 6))
{var inst_36953 = (state_36976[12]);var inst_36905 = (state_36976[7]);var inst_36955 = (state_36976[13]);var inst_36953__$1 = topic_fn.call(null,inst_36905);var inst_36954 = cljs.core.deref.call(null,mults);var inst_36955__$1 = cljs.core.get.call(null,inst_36954,inst_36953__$1);var state_36976__$1 = (function (){var statearr_36984 = state_36976;(statearr_36984[12] = inst_36953__$1);
(statearr_36984[13] = inst_36955__$1);
return statearr_36984;
})();if(cljs.core.truth_(inst_36955__$1))
{var statearr_36985_37029 = state_36976__$1;(statearr_36985_37029[1] = 19);
} else
{var statearr_36986_37030 = state_36976__$1;(statearr_36986_37030[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 7))
{var inst_36972 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_36987_37031 = state_36976__$1;(statearr_36987_37031[2] = inst_36972);
(statearr_36987_37031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 8))
{var inst_36917 = (state_36976[9]);var inst_36918 = (state_36976[11]);var inst_36920 = (inst_36918 < inst_36917);var inst_36921 = inst_36920;var state_36976__$1 = state_36976;if(cljs.core.truth_(inst_36921))
{var statearr_36991_37032 = state_36976__$1;(statearr_36991_37032[1] = 10);
} else
{var statearr_36992_37033 = state_36976__$1;(statearr_36992_37033[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 9))
{var inst_36951 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_36993_37034 = state_36976__$1;(statearr_36993_37034[2] = inst_36951);
(statearr_36993_37034[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 10))
{var inst_36915 = (state_36976[8]);var inst_36917 = (state_36976[9]);var inst_36916 = (state_36976[10]);var inst_36918 = (state_36976[11]);var inst_36923 = cljs.core._nth.call(null,inst_36916,inst_36918);var inst_36924 = cljs.core.async.muxch_STAR_.call(null,inst_36923);var inst_36925 = cljs.core.async.close_BANG_.call(null,inst_36924);var inst_36926 = (inst_36918 + 1);var tmp36988 = inst_36915;var tmp36989 = inst_36917;var tmp36990 = inst_36916;var inst_36915__$1 = tmp36988;var inst_36916__$1 = tmp36990;var inst_36917__$1 = tmp36989;var inst_36918__$1 = inst_36926;var state_36976__$1 = (function (){var statearr_36994 = state_36976;(statearr_36994[8] = inst_36915__$1);
(statearr_36994[9] = inst_36917__$1);
(statearr_36994[10] = inst_36916__$1);
(statearr_36994[11] = inst_36918__$1);
(statearr_36994[14] = inst_36925);
return statearr_36994;
})();var statearr_36995_37035 = state_36976__$1;(statearr_36995_37035[2] = null);
(statearr_36995_37035[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 11))
{var inst_36915 = (state_36976[8]);var inst_36929 = (state_36976[15]);var inst_36929__$1 = cljs.core.seq.call(null,inst_36915);var state_36976__$1 = (function (){var statearr_36996 = state_36976;(statearr_36996[15] = inst_36929__$1);
return statearr_36996;
})();if(inst_36929__$1)
{var statearr_36997_37036 = state_36976__$1;(statearr_36997_37036[1] = 13);
} else
{var statearr_36998_37037 = state_36976__$1;(statearr_36998_37037[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 12))
{var inst_36949 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_36999_37038 = state_36976__$1;(statearr_36999_37038[2] = inst_36949);
(statearr_36999_37038[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 13))
{var inst_36929 = (state_36976[15]);var inst_36931 = cljs.core.chunked_seq_QMARK_.call(null,inst_36929);var state_36976__$1 = state_36976;if(inst_36931)
{var statearr_37000_37039 = state_36976__$1;(statearr_37000_37039[1] = 16);
} else
{var statearr_37001_37040 = state_36976__$1;(statearr_37001_37040[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 14))
{var state_36976__$1 = state_36976;var statearr_37002_37041 = state_36976__$1;(statearr_37002_37041[2] = null);
(statearr_37002_37041[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 15))
{var inst_36947 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_37003_37042 = state_36976__$1;(statearr_37003_37042[2] = inst_36947);
(statearr_37003_37042[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 16))
{var inst_36929 = (state_36976[15]);var inst_36933 = cljs.core.chunk_first.call(null,inst_36929);var inst_36934 = cljs.core.chunk_rest.call(null,inst_36929);var inst_36935 = cljs.core.count.call(null,inst_36933);var inst_36915 = inst_36934;var inst_36916 = inst_36933;var inst_36917 = inst_36935;var inst_36918 = 0;var state_36976__$1 = (function (){var statearr_37004 = state_36976;(statearr_37004[8] = inst_36915);
(statearr_37004[9] = inst_36917);
(statearr_37004[10] = inst_36916);
(statearr_37004[11] = inst_36918);
return statearr_37004;
})();var statearr_37005_37043 = state_36976__$1;(statearr_37005_37043[2] = null);
(statearr_37005_37043[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 17))
{var inst_36929 = (state_36976[15]);var inst_36938 = cljs.core.first.call(null,inst_36929);var inst_36939 = cljs.core.async.muxch_STAR_.call(null,inst_36938);var inst_36940 = cljs.core.async.close_BANG_.call(null,inst_36939);var inst_36941 = cljs.core.next.call(null,inst_36929);var inst_36915 = inst_36941;var inst_36916 = null;var inst_36917 = 0;var inst_36918 = 0;var state_36976__$1 = (function (){var statearr_37006 = state_36976;(statearr_37006[8] = inst_36915);
(statearr_37006[9] = inst_36917);
(statearr_37006[10] = inst_36916);
(statearr_37006[11] = inst_36918);
(statearr_37006[16] = inst_36940);
return statearr_37006;
})();var statearr_37007_37044 = state_36976__$1;(statearr_37007_37044[2] = null);
(statearr_37007_37044[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 18))
{var inst_36944 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_37008_37045 = state_36976__$1;(statearr_37008_37045[2] = inst_36944);
(statearr_37008_37045[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 19))
{var state_36976__$1 = state_36976;var statearr_37009_37046 = state_36976__$1;(statearr_37009_37046[2] = null);
(statearr_37009_37046[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 20))
{var state_36976__$1 = state_36976;var statearr_37010_37047 = state_36976__$1;(statearr_37010_37047[2] = null);
(statearr_37010_37047[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 21))
{var inst_36969 = (state_36976[2]);var state_36976__$1 = (function (){var statearr_37011 = state_36976;(statearr_37011[17] = inst_36969);
return statearr_37011;
})();var statearr_37012_37048 = state_36976__$1;(statearr_37012_37048[2] = null);
(statearr_37012_37048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 22))
{var inst_36966 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_37013_37049 = state_36976__$1;(statearr_37013_37049[2] = inst_36966);
(statearr_37013_37049[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 23))
{var inst_36953 = (state_36976[12]);var inst_36957 = (state_36976[2]);var inst_36958 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36953);var state_36976__$1 = (function (){var statearr_37014 = state_36976;(statearr_37014[18] = inst_36957);
return statearr_37014;
})();var statearr_37015_37050 = state_36976__$1;(statearr_37015_37050[2] = inst_36958);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36976__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36977 === 24))
{var inst_36905 = (state_36976[7]);var inst_36955 = (state_36976[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36976,23,Object,null,22);var inst_36962 = cljs.core.async.muxch_STAR_.call(null,inst_36955);var state_36976__$1 = state_36976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36976__$1,25,inst_36962,inst_36905);
} else
{if((state_val_36977 === 25))
{var inst_36964 = (state_36976[2]);var state_36976__$1 = state_36976;var statearr_37016_37051 = state_36976__$1;(statearr_37016_37051[2] = inst_36964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36976__$1);
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
var state_machine__10847__auto____0 = (function (){var statearr_37020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37020[0] = state_machine__10847__auto__);
(statearr_37020[1] = 1);
return statearr_37020;
});
var state_machine__10847__auto____1 = (function (state_36976){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_36976);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e37021){if((e37021 instanceof Object))
{var ex__10850__auto__ = e37021;var statearr_37022_37052 = state_36976;(statearr_37022_37052[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37053 = state_36976;
state_36976 = G__37053;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_36976){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_36976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_37023 = f__10862__auto__.call(null);(statearr_37023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___37024);
return statearr_37023;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__10861__auto___37190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_37160){var state_val_37161 = (state_37160[1]);if((state_val_37161 === 1))
{var state_37160__$1 = state_37160;var statearr_37162_37191 = state_37160__$1;(statearr_37162_37191[2] = null);
(statearr_37162_37191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 2))
{var inst_37123 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_37124 = 0;var state_37160__$1 = (function (){var statearr_37163 = state_37160;(statearr_37163[7] = inst_37124);
(statearr_37163[8] = inst_37123);
return statearr_37163;
})();var statearr_37164_37192 = state_37160__$1;(statearr_37164_37192[2] = null);
(statearr_37164_37192[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 3))
{var inst_37158 = (state_37160[2]);var state_37160__$1 = state_37160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37160__$1,inst_37158);
} else
{if((state_val_37161 === 4))
{var inst_37124 = (state_37160[7]);var inst_37126 = (inst_37124 < cnt);var state_37160__$1 = state_37160;if(cljs.core.truth_(inst_37126))
{var statearr_37165_37193 = state_37160__$1;(statearr_37165_37193[1] = 6);
} else
{var statearr_37166_37194 = state_37160__$1;(statearr_37166_37194[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 5))
{var inst_37144 = (state_37160[2]);var state_37160__$1 = (function (){var statearr_37167 = state_37160;(statearr_37167[9] = inst_37144);
return statearr_37167;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37160__$1,12,dchan);
} else
{if((state_val_37161 === 6))
{var state_37160__$1 = state_37160;var statearr_37168_37195 = state_37160__$1;(statearr_37168_37195[2] = null);
(statearr_37168_37195[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 7))
{var state_37160__$1 = state_37160;var statearr_37169_37196 = state_37160__$1;(statearr_37169_37196[2] = null);
(statearr_37169_37196[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 8))
{var inst_37142 = (state_37160[2]);var state_37160__$1 = state_37160;var statearr_37170_37197 = state_37160__$1;(statearr_37170_37197[2] = inst_37142);
(statearr_37170_37197[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 9))
{var inst_37124 = (state_37160[7]);var inst_37137 = (state_37160[2]);var inst_37138 = (inst_37124 + 1);var inst_37124__$1 = inst_37138;var state_37160__$1 = (function (){var statearr_37171 = state_37160;(statearr_37171[7] = inst_37124__$1);
(statearr_37171[10] = inst_37137);
return statearr_37171;
})();var statearr_37172_37198 = state_37160__$1;(statearr_37172_37198[2] = null);
(statearr_37172_37198[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 10))
{var inst_37128 = (state_37160[2]);var inst_37129 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_37160__$1 = (function (){var statearr_37173 = state_37160;(statearr_37173[11] = inst_37128);
return statearr_37173;
})();var statearr_37174_37199 = state_37160__$1;(statearr_37174_37199[2] = inst_37129);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37160__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 11))
{var inst_37124 = (state_37160[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37160,10,Object,null,9);var inst_37133 = chs__$1.call(null,inst_37124);var inst_37134 = done.call(null,inst_37124);var inst_37135 = cljs.core.async.take_BANG_.call(null,inst_37133,inst_37134);var state_37160__$1 = state_37160;var statearr_37175_37200 = state_37160__$1;(statearr_37175_37200[2] = inst_37135);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37160__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 12))
{var inst_37146 = (state_37160[12]);var inst_37146__$1 = (state_37160[2]);var inst_37147 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37146__$1);var state_37160__$1 = (function (){var statearr_37176 = state_37160;(statearr_37176[12] = inst_37146__$1);
return statearr_37176;
})();if(cljs.core.truth_(inst_37147))
{var statearr_37177_37201 = state_37160__$1;(statearr_37177_37201[1] = 13);
} else
{var statearr_37178_37202 = state_37160__$1;(statearr_37178_37202[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 13))
{var inst_37149 = cljs.core.async.close_BANG_.call(null,out);var state_37160__$1 = state_37160;var statearr_37179_37203 = state_37160__$1;(statearr_37179_37203[2] = inst_37149);
(statearr_37179_37203[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 14))
{var inst_37146 = (state_37160[12]);var inst_37151 = cljs.core.apply.call(null,f,inst_37146);var state_37160__$1 = state_37160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37160__$1,16,out,inst_37151);
} else
{if((state_val_37161 === 15))
{var inst_37156 = (state_37160[2]);var state_37160__$1 = state_37160;var statearr_37180_37204 = state_37160__$1;(statearr_37180_37204[2] = inst_37156);
(statearr_37180_37204[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37161 === 16))
{var inst_37153 = (state_37160[2]);var state_37160__$1 = (function (){var statearr_37181 = state_37160;(statearr_37181[13] = inst_37153);
return statearr_37181;
})();var statearr_37182_37205 = state_37160__$1;(statearr_37182_37205[2] = null);
(statearr_37182_37205[1] = 2);
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
var state_machine__10847__auto____0 = (function (){var statearr_37186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37186[0] = state_machine__10847__auto__);
(statearr_37186[1] = 1);
return statearr_37186;
});
var state_machine__10847__auto____1 = (function (state_37160){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_37160);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e37187){if((e37187 instanceof Object))
{var ex__10850__auto__ = e37187;var statearr_37188_37206 = state_37160;(statearr_37188_37206[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37207 = state_37160;
state_37160 = G__37207;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_37160){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_37160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_37189 = f__10862__auto__.call(null);(statearr_37189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___37190);
return statearr_37189;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10861__auto___37315 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_37291){var state_val_37292 = (state_37291[1]);if((state_val_37292 === 1))
{var inst_37262 = cljs.core.vec.call(null,chs);var inst_37263 = inst_37262;var state_37291__$1 = (function (){var statearr_37293 = state_37291;(statearr_37293[7] = inst_37263);
return statearr_37293;
})();var statearr_37294_37316 = state_37291__$1;(statearr_37294_37316[2] = null);
(statearr_37294_37316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37292 === 2))
{var inst_37263 = (state_37291[7]);var inst_37265 = cljs.core.count.call(null,inst_37263);var inst_37266 = (inst_37265 > 0);var state_37291__$1 = state_37291;if(cljs.core.truth_(inst_37266))
{var statearr_37295_37317 = state_37291__$1;(statearr_37295_37317[1] = 4);
} else
{var statearr_37296_37318 = state_37291__$1;(statearr_37296_37318[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37292 === 3))
{var inst_37289 = (state_37291[2]);var state_37291__$1 = state_37291;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37291__$1,inst_37289);
} else
{if((state_val_37292 === 4))
{var inst_37263 = (state_37291[7]);var state_37291__$1 = state_37291;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_37291__$1,7,inst_37263);
} else
{if((state_val_37292 === 5))
{var inst_37285 = cljs.core.async.close_BANG_.call(null,out);var state_37291__$1 = state_37291;var statearr_37297_37319 = state_37291__$1;(statearr_37297_37319[2] = inst_37285);
(statearr_37297_37319[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37292 === 6))
{var inst_37287 = (state_37291[2]);var state_37291__$1 = state_37291;var statearr_37298_37320 = state_37291__$1;(statearr_37298_37320[2] = inst_37287);
(statearr_37298_37320[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37292 === 7))
{var inst_37270 = (state_37291[8]);var inst_37271 = (state_37291[9]);var inst_37270__$1 = (state_37291[2]);var inst_37271__$1 = cljs.core.nth.call(null,inst_37270__$1,0,null);var inst_37272 = cljs.core.nth.call(null,inst_37270__$1,1,null);var inst_37273 = (inst_37271__$1 == null);var state_37291__$1 = (function (){var statearr_37299 = state_37291;(statearr_37299[10] = inst_37272);
(statearr_37299[8] = inst_37270__$1);
(statearr_37299[9] = inst_37271__$1);
return statearr_37299;
})();if(cljs.core.truth_(inst_37273))
{var statearr_37300_37321 = state_37291__$1;(statearr_37300_37321[1] = 8);
} else
{var statearr_37301_37322 = state_37291__$1;(statearr_37301_37322[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37292 === 8))
{var inst_37272 = (state_37291[10]);var inst_37270 = (state_37291[8]);var inst_37271 = (state_37291[9]);var inst_37263 = (state_37291[7]);var inst_37275 = (function (){var c = inst_37272;var v = inst_37271;var vec__37268 = inst_37270;var cs = inst_37263;return ((function (c,v,vec__37268,cs,inst_37272,inst_37270,inst_37271,inst_37263,state_val_37292){
return (function (p1__37208_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__37208_SHARP_);
});
;})(c,v,vec__37268,cs,inst_37272,inst_37270,inst_37271,inst_37263,state_val_37292))
})();var inst_37276 = cljs.core.filterv.call(null,inst_37275,inst_37263);var inst_37263__$1 = inst_37276;var state_37291__$1 = (function (){var statearr_37302 = state_37291;(statearr_37302[7] = inst_37263__$1);
return statearr_37302;
})();var statearr_37303_37323 = state_37291__$1;(statearr_37303_37323[2] = null);
(statearr_37303_37323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37292 === 9))
{var inst_37271 = (state_37291[9]);var state_37291__$1 = state_37291;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37291__$1,11,out,inst_37271);
} else
{if((state_val_37292 === 10))
{var inst_37283 = (state_37291[2]);var state_37291__$1 = state_37291;var statearr_37305_37324 = state_37291__$1;(statearr_37305_37324[2] = inst_37283);
(statearr_37305_37324[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37292 === 11))
{var inst_37263 = (state_37291[7]);var inst_37280 = (state_37291[2]);var tmp37304 = inst_37263;var inst_37263__$1 = tmp37304;var state_37291__$1 = (function (){var statearr_37306 = state_37291;(statearr_37306[11] = inst_37280);
(statearr_37306[7] = inst_37263__$1);
return statearr_37306;
})();var statearr_37307_37325 = state_37291__$1;(statearr_37307_37325[2] = null);
(statearr_37307_37325[1] = 2);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_37311 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37311[0] = state_machine__10847__auto__);
(statearr_37311[1] = 1);
return statearr_37311;
});
var state_machine__10847__auto____1 = (function (state_37291){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_37291);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e37312){if((e37312 instanceof Object))
{var ex__10850__auto__ = e37312;var statearr_37313_37326 = state_37291;(statearr_37313_37326[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37291);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37327 = state_37291;
state_37291 = G__37327;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_37291){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_37291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_37314 = f__10862__auto__.call(null);(statearr_37314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___37315);
return statearr_37314;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10861__auto___37420 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_37397){var state_val_37398 = (state_37397[1]);if((state_val_37398 === 1))
{var inst_37374 = 0;var state_37397__$1 = (function (){var statearr_37399 = state_37397;(statearr_37399[7] = inst_37374);
return statearr_37399;
})();var statearr_37400_37421 = state_37397__$1;(statearr_37400_37421[2] = null);
(statearr_37400_37421[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37398 === 2))
{var inst_37374 = (state_37397[7]);var inst_37376 = (inst_37374 < n);var state_37397__$1 = state_37397;if(cljs.core.truth_(inst_37376))
{var statearr_37401_37422 = state_37397__$1;(statearr_37401_37422[1] = 4);
} else
{var statearr_37402_37423 = state_37397__$1;(statearr_37402_37423[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37398 === 3))
{var inst_37394 = (state_37397[2]);var inst_37395 = cljs.core.async.close_BANG_.call(null,out);var state_37397__$1 = (function (){var statearr_37403 = state_37397;(statearr_37403[8] = inst_37394);
return statearr_37403;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37397__$1,inst_37395);
} else
{if((state_val_37398 === 4))
{var state_37397__$1 = state_37397;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37397__$1,7,ch);
} else
{if((state_val_37398 === 5))
{var state_37397__$1 = state_37397;var statearr_37404_37424 = state_37397__$1;(statearr_37404_37424[2] = null);
(statearr_37404_37424[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37398 === 6))
{var inst_37392 = (state_37397[2]);var state_37397__$1 = state_37397;var statearr_37405_37425 = state_37397__$1;(statearr_37405_37425[2] = inst_37392);
(statearr_37405_37425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37398 === 7))
{var inst_37379 = (state_37397[9]);var inst_37379__$1 = (state_37397[2]);var inst_37380 = (inst_37379__$1 == null);var inst_37381 = cljs.core.not.call(null,inst_37380);var state_37397__$1 = (function (){var statearr_37406 = state_37397;(statearr_37406[9] = inst_37379__$1);
return statearr_37406;
})();if(inst_37381)
{var statearr_37407_37426 = state_37397__$1;(statearr_37407_37426[1] = 8);
} else
{var statearr_37408_37427 = state_37397__$1;(statearr_37408_37427[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37398 === 8))
{var inst_37379 = (state_37397[9]);var state_37397__$1 = state_37397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37397__$1,11,out,inst_37379);
} else
{if((state_val_37398 === 9))
{var state_37397__$1 = state_37397;var statearr_37409_37428 = state_37397__$1;(statearr_37409_37428[2] = null);
(statearr_37409_37428[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37398 === 10))
{var inst_37389 = (state_37397[2]);var state_37397__$1 = state_37397;var statearr_37410_37429 = state_37397__$1;(statearr_37410_37429[2] = inst_37389);
(statearr_37410_37429[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37398 === 11))
{var inst_37374 = (state_37397[7]);var inst_37384 = (state_37397[2]);var inst_37385 = (inst_37374 + 1);var inst_37374__$1 = inst_37385;var state_37397__$1 = (function (){var statearr_37411 = state_37397;(statearr_37411[7] = inst_37374__$1);
(statearr_37411[10] = inst_37384);
return statearr_37411;
})();var statearr_37412_37430 = state_37397__$1;(statearr_37412_37430[2] = null);
(statearr_37412_37430[1] = 2);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_37416 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37416[0] = state_machine__10847__auto__);
(statearr_37416[1] = 1);
return statearr_37416;
});
var state_machine__10847__auto____1 = (function (state_37397){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_37397);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e37417){if((e37417 instanceof Object))
{var ex__10850__auto__ = e37417;var statearr_37418_37431 = state_37397;(statearr_37418_37431[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37432 = state_37397;
state_37397 = G__37432;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_37397){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_37397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_37419 = f__10862__auto__.call(null);(statearr_37419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___37420);
return statearr_37419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10861__auto___37529 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_37504){var state_val_37505 = (state_37504[1]);if((state_val_37505 === 1))
{var inst_37481 = null;var state_37504__$1 = (function (){var statearr_37506 = state_37504;(statearr_37506[7] = inst_37481);
return statearr_37506;
})();var statearr_37507_37530 = state_37504__$1;(statearr_37507_37530[2] = null);
(statearr_37507_37530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37505 === 2))
{var state_37504__$1 = state_37504;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37504__$1,4,ch);
} else
{if((state_val_37505 === 3))
{var inst_37501 = (state_37504[2]);var inst_37502 = cljs.core.async.close_BANG_.call(null,out);var state_37504__$1 = (function (){var statearr_37508 = state_37504;(statearr_37508[8] = inst_37501);
return statearr_37508;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37504__$1,inst_37502);
} else
{if((state_val_37505 === 4))
{var inst_37484 = (state_37504[9]);var inst_37484__$1 = (state_37504[2]);var inst_37485 = (inst_37484__$1 == null);var inst_37486 = cljs.core.not.call(null,inst_37485);var state_37504__$1 = (function (){var statearr_37509 = state_37504;(statearr_37509[9] = inst_37484__$1);
return statearr_37509;
})();if(inst_37486)
{var statearr_37510_37531 = state_37504__$1;(statearr_37510_37531[1] = 5);
} else
{var statearr_37511_37532 = state_37504__$1;(statearr_37511_37532[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37505 === 5))
{var inst_37481 = (state_37504[7]);var inst_37484 = (state_37504[9]);var inst_37488 = cljs.core._EQ_.call(null,inst_37484,inst_37481);var state_37504__$1 = state_37504;if(inst_37488)
{var statearr_37512_37533 = state_37504__$1;(statearr_37512_37533[1] = 8);
} else
{var statearr_37513_37534 = state_37504__$1;(statearr_37513_37534[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37505 === 6))
{var state_37504__$1 = state_37504;var statearr_37515_37535 = state_37504__$1;(statearr_37515_37535[2] = null);
(statearr_37515_37535[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37505 === 7))
{var inst_37499 = (state_37504[2]);var state_37504__$1 = state_37504;var statearr_37516_37536 = state_37504__$1;(statearr_37516_37536[2] = inst_37499);
(statearr_37516_37536[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37505 === 8))
{var inst_37481 = (state_37504[7]);var tmp37514 = inst_37481;var inst_37481__$1 = tmp37514;var state_37504__$1 = (function (){var statearr_37517 = state_37504;(statearr_37517[7] = inst_37481__$1);
return statearr_37517;
})();var statearr_37518_37537 = state_37504__$1;(statearr_37518_37537[2] = null);
(statearr_37518_37537[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37505 === 9))
{var inst_37484 = (state_37504[9]);var state_37504__$1 = state_37504;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37504__$1,11,out,inst_37484);
} else
{if((state_val_37505 === 10))
{var inst_37496 = (state_37504[2]);var state_37504__$1 = state_37504;var statearr_37519_37538 = state_37504__$1;(statearr_37519_37538[2] = inst_37496);
(statearr_37519_37538[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37505 === 11))
{var inst_37484 = (state_37504[9]);var inst_37493 = (state_37504[2]);var inst_37481 = inst_37484;var state_37504__$1 = (function (){var statearr_37520 = state_37504;(statearr_37520[7] = inst_37481);
(statearr_37520[10] = inst_37493);
return statearr_37520;
})();var statearr_37521_37539 = state_37504__$1;(statearr_37521_37539[2] = null);
(statearr_37521_37539[1] = 2);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_37525 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37525[0] = state_machine__10847__auto__);
(statearr_37525[1] = 1);
return statearr_37525;
});
var state_machine__10847__auto____1 = (function (state_37504){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_37504);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e37526){if((e37526 instanceof Object))
{var ex__10850__auto__ = e37526;var statearr_37527_37540 = state_37504;(statearr_37527_37540[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37504);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37526;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37541 = state_37504;
state_37504 = G__37541;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_37504){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_37504);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_37528 = f__10862__auto__.call(null);(statearr_37528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___37529);
return statearr_37528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10861__auto___37676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_37646){var state_val_37647 = (state_37646[1]);if((state_val_37647 === 1))
{var inst_37609 = (new Array(n));var inst_37610 = inst_37609;var inst_37611 = 0;var state_37646__$1 = (function (){var statearr_37648 = state_37646;(statearr_37648[7] = inst_37611);
(statearr_37648[8] = inst_37610);
return statearr_37648;
})();var statearr_37649_37677 = state_37646__$1;(statearr_37649_37677[2] = null);
(statearr_37649_37677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 2))
{var state_37646__$1 = state_37646;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37646__$1,4,ch);
} else
{if((state_val_37647 === 3))
{var inst_37644 = (state_37646[2]);var state_37646__$1 = state_37646;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37646__$1,inst_37644);
} else
{if((state_val_37647 === 4))
{var inst_37614 = (state_37646[9]);var inst_37614__$1 = (state_37646[2]);var inst_37615 = (inst_37614__$1 == null);var inst_37616 = cljs.core.not.call(null,inst_37615);var state_37646__$1 = (function (){var statearr_37650 = state_37646;(statearr_37650[9] = inst_37614__$1);
return statearr_37650;
})();if(inst_37616)
{var statearr_37651_37678 = state_37646__$1;(statearr_37651_37678[1] = 5);
} else
{var statearr_37652_37679 = state_37646__$1;(statearr_37652_37679[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 5))
{var inst_37619 = (state_37646[10]);var inst_37614 = (state_37646[9]);var inst_37611 = (state_37646[7]);var inst_37610 = (state_37646[8]);var inst_37618 = (inst_37610[inst_37611] = inst_37614);var inst_37619__$1 = (inst_37611 + 1);var inst_37620 = (inst_37619__$1 < n);var state_37646__$1 = (function (){var statearr_37653 = state_37646;(statearr_37653[10] = inst_37619__$1);
(statearr_37653[11] = inst_37618);
return statearr_37653;
})();if(cljs.core.truth_(inst_37620))
{var statearr_37654_37680 = state_37646__$1;(statearr_37654_37680[1] = 8);
} else
{var statearr_37655_37681 = state_37646__$1;(statearr_37655_37681[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 6))
{var inst_37611 = (state_37646[7]);var inst_37632 = (inst_37611 > 0);var state_37646__$1 = state_37646;if(cljs.core.truth_(inst_37632))
{var statearr_37657_37682 = state_37646__$1;(statearr_37657_37682[1] = 12);
} else
{var statearr_37658_37683 = state_37646__$1;(statearr_37658_37683[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 7))
{var inst_37642 = (state_37646[2]);var state_37646__$1 = state_37646;var statearr_37659_37684 = state_37646__$1;(statearr_37659_37684[2] = inst_37642);
(statearr_37659_37684[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 8))
{var inst_37619 = (state_37646[10]);var inst_37610 = (state_37646[8]);var tmp37656 = inst_37610;var inst_37610__$1 = tmp37656;var inst_37611 = inst_37619;var state_37646__$1 = (function (){var statearr_37660 = state_37646;(statearr_37660[7] = inst_37611);
(statearr_37660[8] = inst_37610__$1);
return statearr_37660;
})();var statearr_37661_37685 = state_37646__$1;(statearr_37661_37685[2] = null);
(statearr_37661_37685[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 9))
{var inst_37610 = (state_37646[8]);var inst_37624 = cljs.core.vec.call(null,inst_37610);var state_37646__$1 = state_37646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37646__$1,11,out,inst_37624);
} else
{if((state_val_37647 === 10))
{var inst_37630 = (state_37646[2]);var state_37646__$1 = state_37646;var statearr_37662_37686 = state_37646__$1;(statearr_37662_37686[2] = inst_37630);
(statearr_37662_37686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 11))
{var inst_37626 = (state_37646[2]);var inst_37627 = (new Array(n));var inst_37610 = inst_37627;var inst_37611 = 0;var state_37646__$1 = (function (){var statearr_37663 = state_37646;(statearr_37663[12] = inst_37626);
(statearr_37663[7] = inst_37611);
(statearr_37663[8] = inst_37610);
return statearr_37663;
})();var statearr_37664_37687 = state_37646__$1;(statearr_37664_37687[2] = null);
(statearr_37664_37687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 12))
{var inst_37610 = (state_37646[8]);var inst_37634 = cljs.core.vec.call(null,inst_37610);var state_37646__$1 = state_37646;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37646__$1,15,out,inst_37634);
} else
{if((state_val_37647 === 13))
{var state_37646__$1 = state_37646;var statearr_37665_37688 = state_37646__$1;(statearr_37665_37688[2] = null);
(statearr_37665_37688[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 14))
{var inst_37639 = (state_37646[2]);var inst_37640 = cljs.core.async.close_BANG_.call(null,out);var state_37646__$1 = (function (){var statearr_37666 = state_37646;(statearr_37666[13] = inst_37639);
return statearr_37666;
})();var statearr_37667_37689 = state_37646__$1;(statearr_37667_37689[2] = inst_37640);
(statearr_37667_37689[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37647 === 15))
{var inst_37636 = (state_37646[2]);var state_37646__$1 = state_37646;var statearr_37668_37690 = state_37646__$1;(statearr_37668_37690[2] = inst_37636);
(statearr_37668_37690[1] = 14);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_37672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37672[0] = state_machine__10847__auto__);
(statearr_37672[1] = 1);
return statearr_37672;
});
var state_machine__10847__auto____1 = (function (state_37646){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_37646);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e37673){if((e37673 instanceof Object))
{var ex__10850__auto__ = e37673;var statearr_37674_37691 = state_37646;(statearr_37674_37691[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37646);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37692 = state_37646;
state_37646 = G__37692;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_37646){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_37646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_37675 = f__10862__auto__.call(null);(statearr_37675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___37676);
return statearr_37675;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__10861__auto___37835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__10862__auto__ = (function (){var switch__10846__auto__ = (function (state_37805){var state_val_37806 = (state_37805[1]);if((state_val_37806 === 1))
{var inst_37764 = [];var inst_37765 = inst_37764;var inst_37766 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37805__$1 = (function (){var statearr_37807 = state_37805;(statearr_37807[7] = inst_37766);
(statearr_37807[8] = inst_37765);
return statearr_37807;
})();var statearr_37808_37836 = state_37805__$1;(statearr_37808_37836[2] = null);
(statearr_37808_37836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 2))
{var state_37805__$1 = state_37805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37805__$1,4,ch);
} else
{if((state_val_37806 === 3))
{var inst_37803 = (state_37805[2]);var state_37805__$1 = state_37805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37805__$1,inst_37803);
} else
{if((state_val_37806 === 4))
{var inst_37769 = (state_37805[9]);var inst_37769__$1 = (state_37805[2]);var inst_37770 = (inst_37769__$1 == null);var inst_37771 = cljs.core.not.call(null,inst_37770);var state_37805__$1 = (function (){var statearr_37809 = state_37805;(statearr_37809[9] = inst_37769__$1);
return statearr_37809;
})();if(inst_37771)
{var statearr_37810_37837 = state_37805__$1;(statearr_37810_37837[1] = 5);
} else
{var statearr_37811_37838 = state_37805__$1;(statearr_37811_37838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 5))
{var inst_37766 = (state_37805[7]);var inst_37773 = (state_37805[10]);var inst_37769 = (state_37805[9]);var inst_37773__$1 = f.call(null,inst_37769);var inst_37774 = cljs.core._EQ_.call(null,inst_37773__$1,inst_37766);var inst_37775 = cljs.core.keyword_identical_QMARK_.call(null,inst_37766,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37776 = (inst_37774) || (inst_37775);var state_37805__$1 = (function (){var statearr_37812 = state_37805;(statearr_37812[10] = inst_37773__$1);
return statearr_37812;
})();if(cljs.core.truth_(inst_37776))
{var statearr_37813_37839 = state_37805__$1;(statearr_37813_37839[1] = 8);
} else
{var statearr_37814_37840 = state_37805__$1;(statearr_37814_37840[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 6))
{var inst_37765 = (state_37805[8]);var inst_37790 = inst_37765.length;var inst_37791 = (inst_37790 > 0);var state_37805__$1 = state_37805;if(cljs.core.truth_(inst_37791))
{var statearr_37816_37841 = state_37805__$1;(statearr_37816_37841[1] = 12);
} else
{var statearr_37817_37842 = state_37805__$1;(statearr_37817_37842[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 7))
{var inst_37801 = (state_37805[2]);var state_37805__$1 = state_37805;var statearr_37818_37843 = state_37805__$1;(statearr_37818_37843[2] = inst_37801);
(statearr_37818_37843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 8))
{var inst_37765 = (state_37805[8]);var inst_37773 = (state_37805[10]);var inst_37769 = (state_37805[9]);var inst_37778 = inst_37765.push(inst_37769);var tmp37815 = inst_37765;var inst_37765__$1 = tmp37815;var inst_37766 = inst_37773;var state_37805__$1 = (function (){var statearr_37819 = state_37805;(statearr_37819[7] = inst_37766);
(statearr_37819[8] = inst_37765__$1);
(statearr_37819[11] = inst_37778);
return statearr_37819;
})();var statearr_37820_37844 = state_37805__$1;(statearr_37820_37844[2] = null);
(statearr_37820_37844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 9))
{var inst_37765 = (state_37805[8]);var inst_37781 = cljs.core.vec.call(null,inst_37765);var state_37805__$1 = state_37805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37805__$1,11,out,inst_37781);
} else
{if((state_val_37806 === 10))
{var inst_37788 = (state_37805[2]);var state_37805__$1 = state_37805;var statearr_37821_37845 = state_37805__$1;(statearr_37821_37845[2] = inst_37788);
(statearr_37821_37845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 11))
{var inst_37773 = (state_37805[10]);var inst_37769 = (state_37805[9]);var inst_37783 = (state_37805[2]);var inst_37784 = [];var inst_37785 = inst_37784.push(inst_37769);var inst_37765 = inst_37784;var inst_37766 = inst_37773;var state_37805__$1 = (function (){var statearr_37822 = state_37805;(statearr_37822[7] = inst_37766);
(statearr_37822[8] = inst_37765);
(statearr_37822[12] = inst_37785);
(statearr_37822[13] = inst_37783);
return statearr_37822;
})();var statearr_37823_37846 = state_37805__$1;(statearr_37823_37846[2] = null);
(statearr_37823_37846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 12))
{var inst_37765 = (state_37805[8]);var inst_37793 = cljs.core.vec.call(null,inst_37765);var state_37805__$1 = state_37805;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37805__$1,15,out,inst_37793);
} else
{if((state_val_37806 === 13))
{var state_37805__$1 = state_37805;var statearr_37824_37847 = state_37805__$1;(statearr_37824_37847[2] = null);
(statearr_37824_37847[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 14))
{var inst_37798 = (state_37805[2]);var inst_37799 = cljs.core.async.close_BANG_.call(null,out);var state_37805__$1 = (function (){var statearr_37825 = state_37805;(statearr_37825[14] = inst_37798);
return statearr_37825;
})();var statearr_37826_37848 = state_37805__$1;(statearr_37826_37848[2] = inst_37799);
(statearr_37826_37848[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37806 === 15))
{var inst_37795 = (state_37805[2]);var state_37805__$1 = state_37805;var statearr_37827_37849 = state_37805__$1;(statearr_37827_37849[2] = inst_37795);
(statearr_37827_37849[1] = 14);
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
});return ((function (switch__10846__auto__){
return (function() {
var state_machine__10847__auto__ = null;
var state_machine__10847__auto____0 = (function (){var statearr_37831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37831[0] = state_machine__10847__auto__);
(statearr_37831[1] = 1);
return statearr_37831;
});
var state_machine__10847__auto____1 = (function (state_37805){while(true){
var ret_value__10848__auto__ = (function (){try{while(true){
var result__10849__auto__ = switch__10846__auto__.call(null,state_37805);if(cljs.core.keyword_identical_QMARK_.call(null,result__10849__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10849__auto__;
}
break;
}
}catch (e37832){if((e37832 instanceof Object))
{var ex__10850__auto__ = e37832;var statearr_37833_37850 = state_37805;(statearr_37833_37850[5] = ex__10850__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10848__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37851 = state_37805;
state_37805 = G__37851;
continue;
}
} else
{return ret_value__10848__auto__;
}
break;
}
});
state_machine__10847__auto__ = function(state_37805){
switch(arguments.length){
case 0:
return state_machine__10847__auto____0.call(this);
case 1:
return state_machine__10847__auto____1.call(this,state_37805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10847__auto____0;
state_machine__10847__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10847__auto____1;
return state_machine__10847__auto__;
})()
;})(switch__10846__auto__))
})();var state__10863__auto__ = (function (){var statearr_37834 = f__10862__auto__.call(null);(statearr_37834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10861__auto___37835);
return statearr_37834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10863__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map