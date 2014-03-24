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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10376 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10376 = (function (f,fn_handler,meta10377){
this.f = f;
this.fn_handler = fn_handler;
this.meta10377 = meta10377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10376.cljs$lang$type = true;
cljs.core.async.t10376.cljs$lang$ctorStr = "cljs.core.async/t10376";
cljs.core.async.t10376.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10376");
});
cljs.core.async.t10376.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10376.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10376.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10376.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10378){var self__ = this;
var _10378__$1 = this;return self__.meta10377;
});
cljs.core.async.t10376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10378,meta10377__$1){var self__ = this;
var _10378__$1 = this;return (new cljs.core.async.t10376(self__.f,self__.fn_handler,meta10377__$1));
});
cljs.core.async.__GT_t10376 = (function __GT_t10376(f__$1,fn_handler__$1,meta10377){return (new cljs.core.async.t10376(f__$1,fn_handler__$1,meta10377));
});
}
return (new cljs.core.async.t10376(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10380 = buff;if(G__10380)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__10380.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10380.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10380);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10380);
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
{var val_10381 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10381);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10381);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4919__auto___10382 = n;var x_10383 = 0;while(true){
if((x_10383 < n__4919__auto___10382))
{(a[x_10383] = 0);
{
var G__10384 = (x_10383 + 1);
x_10383 = G__10384;
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
var G__10385 = (i + 1);
i = G__10385;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10389 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10389 = (function (flag,alt_flag,meta10390){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10390 = meta10390;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10389.cljs$lang$type = true;
cljs.core.async.t10389.cljs$lang$ctorStr = "cljs.core.async/t10389";
cljs.core.async.t10389.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10389");
});
cljs.core.async.t10389.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10389.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10389.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10389.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10391){var self__ = this;
var _10391__$1 = this;return self__.meta10390;
});
cljs.core.async.t10389.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10391,meta10390__$1){var self__ = this;
var _10391__$1 = this;return (new cljs.core.async.t10389(self__.flag,self__.alt_flag,meta10390__$1));
});
cljs.core.async.__GT_t10389 = (function __GT_t10389(flag__$1,alt_flag__$1,meta10390){return (new cljs.core.async.t10389(flag__$1,alt_flag__$1,meta10390));
});
}
return (new cljs.core.async.t10389(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10395 = (function (cb,flag,alt_handler,meta10396){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10396 = meta10396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10395.cljs$lang$type = true;
cljs.core.async.t10395.cljs$lang$ctorStr = "cljs.core.async/t10395";
cljs.core.async.t10395.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10395");
});
cljs.core.async.t10395.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10395.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10397){var self__ = this;
var _10397__$1 = this;return self__.meta10396;
});
cljs.core.async.t10395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10397,meta10396__$1){var self__ = this;
var _10397__$1 = this;return (new cljs.core.async.t10395(self__.cb,self__.flag,self__.alt_handler,meta10396__$1));
});
cljs.core.async.__GT_t10395 = (function __GT_t10395(cb__$1,flag__$1,alt_handler__$1,meta10396){return (new cljs.core.async.t10395(cb__$1,flag__$1,alt_handler__$1,meta10396));
});
}
return (new cljs.core.async.t10395(cb,flag,alt_handler,null));
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
return (function (p1__10398_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10398_SHARP_,port], null));
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
var G__10399 = (i + 1);
i = G__10399;
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
var alts_BANG___delegate = function (ports,p__10400){var map__10402 = p__10400;var map__10402__$1 = ((cljs.core.seq_QMARK_.call(null,map__10402))?cljs.core.apply.call(null,cljs.core.hash_map,map__10402):map__10402);var opts = map__10402__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10400 = null;if (arguments.length > 1) {
  p__10400 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10400);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10403){
var ports = cljs.core.first(arglist__10403);
var p__10400 = cljs.core.rest(arglist__10403);
return alts_BANG___delegate(ports,p__10400);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10411 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10411 = (function (ch,f,map_LT_,meta10412){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10412 = meta10412;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10411.cljs$lang$type = true;
cljs.core.async.t10411.cljs$lang$ctorStr = "cljs.core.async/t10411";
cljs.core.async.t10411.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10411");
});
cljs.core.async.t10411.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10411.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10411.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10411.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10414 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10414 = (function (fn1,_,meta10412,ch,f,map_LT_,meta10415){
this.fn1 = fn1;
this._ = _;
this.meta10412 = meta10412;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10415 = meta10415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10414.cljs$lang$type = true;
cljs.core.async.t10414.cljs$lang$ctorStr = "cljs.core.async/t10414";
cljs.core.async.t10414.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10414");
});
cljs.core.async.t10414.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10414.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10404_SHARP_){return f1.call(null,(((p1__10404_SHARP_ == null))?null:self__.f.call(null,p1__10404_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10416){var self__ = this;
var _10416__$1 = this;return self__.meta10415;
});
cljs.core.async.t10414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10416,meta10415__$1){var self__ = this;
var _10416__$1 = this;return (new cljs.core.async.t10414(self__.fn1,self__._,self__.meta10412,self__.ch,self__.f,self__.map_LT_,meta10415__$1));
});
cljs.core.async.__GT_t10414 = (function __GT_t10414(fn1__$1,___$2,meta10412__$1,ch__$2,f__$2,map_LT___$2,meta10415){return (new cljs.core.async.t10414(fn1__$1,___$2,meta10412__$1,ch__$2,f__$2,map_LT___$2,meta10415));
});
}
return (new cljs.core.async.t10414(fn1,___$1,self__.meta10412,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10411.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10411.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10411.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10413){var self__ = this;
var _10413__$1 = this;return self__.meta10412;
});
cljs.core.async.t10411.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10413,meta10412__$1){var self__ = this;
var _10413__$1 = this;return (new cljs.core.async.t10411(self__.ch,self__.f,self__.map_LT_,meta10412__$1));
});
cljs.core.async.__GT_t10411 = (function __GT_t10411(ch__$1,f__$1,map_LT___$1,meta10412){return (new cljs.core.async.t10411(ch__$1,f__$1,map_LT___$1,meta10412));
});
}
return (new cljs.core.async.t10411(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10420 = (function (ch,f,map_GT_,meta10421){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10421 = meta10421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10420.cljs$lang$type = true;
cljs.core.async.t10420.cljs$lang$ctorStr = "cljs.core.async/t10420";
cljs.core.async.t10420.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10420");
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10422){var self__ = this;
var _10422__$1 = this;return self__.meta10421;
});
cljs.core.async.t10420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10422,meta10421__$1){var self__ = this;
var _10422__$1 = this;return (new cljs.core.async.t10420(self__.ch,self__.f,self__.map_GT_,meta10421__$1));
});
cljs.core.async.__GT_t10420 = (function __GT_t10420(ch__$1,f__$1,map_GT___$1,meta10421){return (new cljs.core.async.t10420(ch__$1,f__$1,map_GT___$1,meta10421));
});
}
return (new cljs.core.async.t10420(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10426 = (function (ch,p,filter_GT_,meta10427){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10427 = meta10427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10426.cljs$lang$type = true;
cljs.core.async.t10426.cljs$lang$ctorStr = "cljs.core.async/t10426";
cljs.core.async.t10426.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10426");
});
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10428){var self__ = this;
var _10428__$1 = this;return self__.meta10427;
});
cljs.core.async.t10426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10428,meta10427__$1){var self__ = this;
var _10428__$1 = this;return (new cljs.core.async.t10426(self__.ch,self__.p,self__.filter_GT_,meta10427__$1));
});
cljs.core.async.__GT_t10426 = (function __GT_t10426(ch__$1,p__$1,filter_GT___$1,meta10427){return (new cljs.core.async.t10426(ch__$1,p__$1,filter_GT___$1,meta10427));
});
}
return (new cljs.core.async.t10426(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___10511 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10490){var state_val_10491 = (state_10490[1]);if((state_val_10491 === 1))
{var state_10490__$1 = state_10490;var statearr_10492_10512 = state_10490__$1;(statearr_10492_10512[2] = null);
(statearr_10492_10512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 2))
{var state_10490__$1 = state_10490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10490__$1,4,ch);
} else
{if((state_val_10491 === 3))
{var inst_10488 = (state_10490[2]);var state_10490__$1 = state_10490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10490__$1,inst_10488);
} else
{if((state_val_10491 === 4))
{var inst_10472 = (state_10490[7]);var inst_10472__$1 = (state_10490[2]);var inst_10473 = (inst_10472__$1 == null);var state_10490__$1 = (function (){var statearr_10493 = state_10490;(statearr_10493[7] = inst_10472__$1);
return statearr_10493;
})();if(cljs.core.truth_(inst_10473))
{var statearr_10494_10513 = state_10490__$1;(statearr_10494_10513[1] = 5);
} else
{var statearr_10495_10514 = state_10490__$1;(statearr_10495_10514[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 5))
{var inst_10475 = cljs.core.async.close_BANG_.call(null,out);var state_10490__$1 = state_10490;var statearr_10496_10515 = state_10490__$1;(statearr_10496_10515[2] = inst_10475);
(statearr_10496_10515[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 6))
{var inst_10472 = (state_10490[7]);var inst_10477 = p.call(null,inst_10472);var state_10490__$1 = state_10490;if(cljs.core.truth_(inst_10477))
{var statearr_10497_10516 = state_10490__$1;(statearr_10497_10516[1] = 8);
} else
{var statearr_10498_10517 = state_10490__$1;(statearr_10498_10517[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 7))
{var inst_10486 = (state_10490[2]);var state_10490__$1 = state_10490;var statearr_10499_10518 = state_10490__$1;(statearr_10499_10518[2] = inst_10486);
(statearr_10499_10518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 8))
{var inst_10472 = (state_10490[7]);var state_10490__$1 = state_10490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10490__$1,11,out,inst_10472);
} else
{if((state_val_10491 === 9))
{var state_10490__$1 = state_10490;var statearr_10500_10519 = state_10490__$1;(statearr_10500_10519[2] = null);
(statearr_10500_10519[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 10))
{var inst_10483 = (state_10490[2]);var state_10490__$1 = (function (){var statearr_10501 = state_10490;(statearr_10501[8] = inst_10483);
return statearr_10501;
})();var statearr_10502_10520 = state_10490__$1;(statearr_10502_10520[2] = null);
(statearr_10502_10520[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10491 === 11))
{var inst_10480 = (state_10490[2]);var state_10490__$1 = state_10490;var statearr_10503_10521 = state_10490__$1;(statearr_10503_10521[2] = inst_10480);
(statearr_10503_10521[1] = 10);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_10507 = [null,null,null,null,null,null,null,null,null];(statearr_10507[0] = state_machine__6871__auto__);
(statearr_10507[1] = 1);
return statearr_10507;
});
var state_machine__6871__auto____1 = (function (state_10490){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10490);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10508){if((e10508 instanceof Object))
{var ex__6874__auto__ = e10508;var statearr_10509_10522 = state_10490;(statearr_10509_10522[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10523 = state_10490;
state_10490 = G__10523;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10490){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10510 = f__6886__auto__.call(null);(statearr_10510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10511);
return statearr_10510;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10675){var state_val_10676 = (state_10675[1]);if((state_val_10676 === 1))
{var state_10675__$1 = state_10675;var statearr_10677_10714 = state_10675__$1;(statearr_10677_10714[2] = null);
(statearr_10677_10714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 2))
{var state_10675__$1 = state_10675;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10675__$1,4,in$);
} else
{if((state_val_10676 === 3))
{var inst_10673 = (state_10675[2]);var state_10675__$1 = state_10675;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10675__$1,inst_10673);
} else
{if((state_val_10676 === 4))
{var inst_10621 = (state_10675[7]);var inst_10621__$1 = (state_10675[2]);var inst_10622 = (inst_10621__$1 == null);var state_10675__$1 = (function (){var statearr_10678 = state_10675;(statearr_10678[7] = inst_10621__$1);
return statearr_10678;
})();if(cljs.core.truth_(inst_10622))
{var statearr_10679_10715 = state_10675__$1;(statearr_10679_10715[1] = 5);
} else
{var statearr_10680_10716 = state_10675__$1;(statearr_10680_10716[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 5))
{var inst_10624 = cljs.core.async.close_BANG_.call(null,out);var state_10675__$1 = state_10675;var statearr_10681_10717 = state_10675__$1;(statearr_10681_10717[2] = inst_10624);
(statearr_10681_10717[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 6))
{var inst_10621 = (state_10675[7]);var inst_10626 = f.call(null,inst_10621);var inst_10631 = cljs.core.seq.call(null,inst_10626);var inst_10632 = inst_10631;var inst_10633 = null;var inst_10634 = 0;var inst_10635 = 0;var state_10675__$1 = (function (){var statearr_10682 = state_10675;(statearr_10682[8] = inst_10632);
(statearr_10682[9] = inst_10633);
(statearr_10682[10] = inst_10634);
(statearr_10682[11] = inst_10635);
return statearr_10682;
})();var statearr_10683_10718 = state_10675__$1;(statearr_10683_10718[2] = null);
(statearr_10683_10718[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 7))
{var inst_10671 = (state_10675[2]);var state_10675__$1 = state_10675;var statearr_10684_10719 = state_10675__$1;(statearr_10684_10719[2] = inst_10671);
(statearr_10684_10719[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 8))
{var inst_10634 = (state_10675[10]);var inst_10635 = (state_10675[11]);var inst_10637 = (inst_10635 < inst_10634);var inst_10638 = inst_10637;var state_10675__$1 = state_10675;if(cljs.core.truth_(inst_10638))
{var statearr_10685_10720 = state_10675__$1;(statearr_10685_10720[1] = 10);
} else
{var statearr_10686_10721 = state_10675__$1;(statearr_10686_10721[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 9))
{var inst_10668 = (state_10675[2]);var state_10675__$1 = (function (){var statearr_10687 = state_10675;(statearr_10687[12] = inst_10668);
return statearr_10687;
})();var statearr_10688_10722 = state_10675__$1;(statearr_10688_10722[2] = null);
(statearr_10688_10722[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 10))
{var inst_10633 = (state_10675[9]);var inst_10635 = (state_10675[11]);var inst_10640 = cljs.core._nth.call(null,inst_10633,inst_10635);var state_10675__$1 = state_10675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10675__$1,13,out,inst_10640);
} else
{if((state_val_10676 === 11))
{var inst_10632 = (state_10675[8]);var inst_10646 = (state_10675[13]);var inst_10646__$1 = cljs.core.seq.call(null,inst_10632);var state_10675__$1 = (function (){var statearr_10692 = state_10675;(statearr_10692[13] = inst_10646__$1);
return statearr_10692;
})();if(inst_10646__$1)
{var statearr_10693_10723 = state_10675__$1;(statearr_10693_10723[1] = 14);
} else
{var statearr_10694_10724 = state_10675__$1;(statearr_10694_10724[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 12))
{var inst_10666 = (state_10675[2]);var state_10675__$1 = state_10675;var statearr_10695_10725 = state_10675__$1;(statearr_10695_10725[2] = inst_10666);
(statearr_10695_10725[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 13))
{var inst_10632 = (state_10675[8]);var inst_10633 = (state_10675[9]);var inst_10634 = (state_10675[10]);var inst_10635 = (state_10675[11]);var inst_10642 = (state_10675[2]);var inst_10643 = (inst_10635 + 1);var tmp10689 = inst_10632;var tmp10690 = inst_10633;var tmp10691 = inst_10634;var inst_10632__$1 = tmp10689;var inst_10633__$1 = tmp10690;var inst_10634__$1 = tmp10691;var inst_10635__$1 = inst_10643;var state_10675__$1 = (function (){var statearr_10696 = state_10675;(statearr_10696[14] = inst_10642);
(statearr_10696[8] = inst_10632__$1);
(statearr_10696[9] = inst_10633__$1);
(statearr_10696[10] = inst_10634__$1);
(statearr_10696[11] = inst_10635__$1);
return statearr_10696;
})();var statearr_10697_10726 = state_10675__$1;(statearr_10697_10726[2] = null);
(statearr_10697_10726[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 14))
{var inst_10646 = (state_10675[13]);var inst_10648 = cljs.core.chunked_seq_QMARK_.call(null,inst_10646);var state_10675__$1 = state_10675;if(inst_10648)
{var statearr_10698_10727 = state_10675__$1;(statearr_10698_10727[1] = 17);
} else
{var statearr_10699_10728 = state_10675__$1;(statearr_10699_10728[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 15))
{var state_10675__$1 = state_10675;var statearr_10700_10729 = state_10675__$1;(statearr_10700_10729[2] = null);
(statearr_10700_10729[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 16))
{var inst_10664 = (state_10675[2]);var state_10675__$1 = state_10675;var statearr_10701_10730 = state_10675__$1;(statearr_10701_10730[2] = inst_10664);
(statearr_10701_10730[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 17))
{var inst_10646 = (state_10675[13]);var inst_10650 = cljs.core.chunk_first.call(null,inst_10646);var inst_10651 = cljs.core.chunk_rest.call(null,inst_10646);var inst_10652 = cljs.core.count.call(null,inst_10650);var inst_10632 = inst_10651;var inst_10633 = inst_10650;var inst_10634 = inst_10652;var inst_10635 = 0;var state_10675__$1 = (function (){var statearr_10702 = state_10675;(statearr_10702[8] = inst_10632);
(statearr_10702[9] = inst_10633);
(statearr_10702[10] = inst_10634);
(statearr_10702[11] = inst_10635);
return statearr_10702;
})();var statearr_10703_10731 = state_10675__$1;(statearr_10703_10731[2] = null);
(statearr_10703_10731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 18))
{var inst_10646 = (state_10675[13]);var inst_10655 = cljs.core.first.call(null,inst_10646);var state_10675__$1 = state_10675;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10675__$1,20,out,inst_10655);
} else
{if((state_val_10676 === 19))
{var inst_10661 = (state_10675[2]);var state_10675__$1 = state_10675;var statearr_10704_10732 = state_10675__$1;(statearr_10704_10732[2] = inst_10661);
(statearr_10704_10732[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10676 === 20))
{var inst_10646 = (state_10675[13]);var inst_10657 = (state_10675[2]);var inst_10658 = cljs.core.next.call(null,inst_10646);var inst_10632 = inst_10658;var inst_10633 = null;var inst_10634 = 0;var inst_10635 = 0;var state_10675__$1 = (function (){var statearr_10705 = state_10675;(statearr_10705[15] = inst_10657);
(statearr_10705[8] = inst_10632);
(statearr_10705[9] = inst_10633);
(statearr_10705[10] = inst_10634);
(statearr_10705[11] = inst_10635);
return statearr_10705;
})();var statearr_10706_10733 = state_10675__$1;(statearr_10706_10733[2] = null);
(statearr_10706_10733[1] = 8);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_10710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10710[0] = state_machine__6871__auto__);
(statearr_10710[1] = 1);
return statearr_10710;
});
var state_machine__6871__auto____1 = (function (state_10675){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10675);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10711){if((e10711 instanceof Object))
{var ex__6874__auto__ = e10711;var statearr_10712_10734 = state_10675;(statearr_10712_10734[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10675);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10711;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10735 = state_10675;
state_10675 = G__10735;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10675){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10675);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10713 = f__6886__auto__.call(null);(statearr_10713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_10713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
}));
return c__6885__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6885__auto___10816 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10795){var state_val_10796 = (state_10795[1]);if((state_val_10796 === 1))
{var state_10795__$1 = state_10795;var statearr_10797_10817 = state_10795__$1;(statearr_10797_10817[2] = null);
(statearr_10797_10817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10796 === 2))
{var state_10795__$1 = state_10795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10795__$1,4,from);
} else
{if((state_val_10796 === 3))
{var inst_10793 = (state_10795[2]);var state_10795__$1 = state_10795;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10795__$1,inst_10793);
} else
{if((state_val_10796 === 4))
{var inst_10778 = (state_10795[7]);var inst_10778__$1 = (state_10795[2]);var inst_10779 = (inst_10778__$1 == null);var state_10795__$1 = (function (){var statearr_10798 = state_10795;(statearr_10798[7] = inst_10778__$1);
return statearr_10798;
})();if(cljs.core.truth_(inst_10779))
{var statearr_10799_10818 = state_10795__$1;(statearr_10799_10818[1] = 5);
} else
{var statearr_10800_10819 = state_10795__$1;(statearr_10800_10819[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10796 === 5))
{var state_10795__$1 = state_10795;if(cljs.core.truth_(close_QMARK_))
{var statearr_10801_10820 = state_10795__$1;(statearr_10801_10820[1] = 8);
} else
{var statearr_10802_10821 = state_10795__$1;(statearr_10802_10821[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10796 === 6))
{var inst_10778 = (state_10795[7]);var state_10795__$1 = state_10795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10795__$1,11,to,inst_10778);
} else
{if((state_val_10796 === 7))
{var inst_10791 = (state_10795[2]);var state_10795__$1 = state_10795;var statearr_10803_10822 = state_10795__$1;(statearr_10803_10822[2] = inst_10791);
(statearr_10803_10822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10796 === 8))
{var inst_10782 = cljs.core.async.close_BANG_.call(null,to);var state_10795__$1 = state_10795;var statearr_10804_10823 = state_10795__$1;(statearr_10804_10823[2] = inst_10782);
(statearr_10804_10823[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10796 === 9))
{var state_10795__$1 = state_10795;var statearr_10805_10824 = state_10795__$1;(statearr_10805_10824[2] = null);
(statearr_10805_10824[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10796 === 10))
{var inst_10785 = (state_10795[2]);var state_10795__$1 = state_10795;var statearr_10806_10825 = state_10795__$1;(statearr_10806_10825[2] = inst_10785);
(statearr_10806_10825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10796 === 11))
{var inst_10788 = (state_10795[2]);var state_10795__$1 = (function (){var statearr_10807 = state_10795;(statearr_10807[8] = inst_10788);
return statearr_10807;
})();var statearr_10808_10826 = state_10795__$1;(statearr_10808_10826[2] = null);
(statearr_10808_10826[1] = 2);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_10812 = [null,null,null,null,null,null,null,null,null];(statearr_10812[0] = state_machine__6871__auto__);
(statearr_10812[1] = 1);
return statearr_10812;
});
var state_machine__6871__auto____1 = (function (state_10795){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10795);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10813){if((e10813 instanceof Object))
{var ex__6874__auto__ = e10813;var statearr_10814_10827 = state_10795;(statearr_10814_10827[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10813;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10828 = state_10795;
state_10795 = G__10828;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10795){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10815 = f__6886__auto__.call(null);(statearr_10815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10816);
return statearr_10815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6885__auto___10915 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10893){var state_val_10894 = (state_10893[1]);if((state_val_10894 === 1))
{var state_10893__$1 = state_10893;var statearr_10895_10916 = state_10893__$1;(statearr_10895_10916[2] = null);
(statearr_10895_10916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 2))
{var state_10893__$1 = state_10893;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10893__$1,4,ch);
} else
{if((state_val_10894 === 3))
{var inst_10891 = (state_10893[2]);var state_10893__$1 = state_10893;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10893__$1,inst_10891);
} else
{if((state_val_10894 === 4))
{var inst_10874 = (state_10893[7]);var inst_10874__$1 = (state_10893[2]);var inst_10875 = (inst_10874__$1 == null);var state_10893__$1 = (function (){var statearr_10896 = state_10893;(statearr_10896[7] = inst_10874__$1);
return statearr_10896;
})();if(cljs.core.truth_(inst_10875))
{var statearr_10897_10917 = state_10893__$1;(statearr_10897_10917[1] = 5);
} else
{var statearr_10898_10918 = state_10893__$1;(statearr_10898_10918[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 5))
{var inst_10877 = cljs.core.async.close_BANG_.call(null,tc);var inst_10878 = cljs.core.async.close_BANG_.call(null,fc);var state_10893__$1 = (function (){var statearr_10899 = state_10893;(statearr_10899[8] = inst_10877);
return statearr_10899;
})();var statearr_10900_10919 = state_10893__$1;(statearr_10900_10919[2] = inst_10878);
(statearr_10900_10919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 6))
{var inst_10874 = (state_10893[7]);var inst_10880 = p.call(null,inst_10874);var state_10893__$1 = state_10893;if(cljs.core.truth_(inst_10880))
{var statearr_10901_10920 = state_10893__$1;(statearr_10901_10920[1] = 9);
} else
{var statearr_10902_10921 = state_10893__$1;(statearr_10902_10921[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 7))
{var inst_10889 = (state_10893[2]);var state_10893__$1 = state_10893;var statearr_10903_10922 = state_10893__$1;(statearr_10903_10922[2] = inst_10889);
(statearr_10903_10922[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 8))
{var inst_10886 = (state_10893[2]);var state_10893__$1 = (function (){var statearr_10904 = state_10893;(statearr_10904[9] = inst_10886);
return statearr_10904;
})();var statearr_10905_10923 = state_10893__$1;(statearr_10905_10923[2] = null);
(statearr_10905_10923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 9))
{var state_10893__$1 = state_10893;var statearr_10906_10924 = state_10893__$1;(statearr_10906_10924[2] = tc);
(statearr_10906_10924[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 10))
{var state_10893__$1 = state_10893;var statearr_10907_10925 = state_10893__$1;(statearr_10907_10925[2] = fc);
(statearr_10907_10925[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10894 === 11))
{var inst_10874 = (state_10893[7]);var inst_10884 = (state_10893[2]);var state_10893__$1 = state_10893;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10893__$1,8,inst_10884,inst_10874);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_10911 = [null,null,null,null,null,null,null,null,null,null];(statearr_10911[0] = state_machine__6871__auto__);
(statearr_10911[1] = 1);
return statearr_10911;
});
var state_machine__6871__auto____1 = (function (state_10893){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10893);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10912){if((e10912 instanceof Object))
{var ex__6874__auto__ = e10912;var statearr_10913_10926 = state_10893;(statearr_10913_10926[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10893);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10912;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10927 = state_10893;
state_10893 = G__10927;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10893){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10914 = f__6886__auto__.call(null);(statearr_10914[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10915);
return statearr_10914;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10974){var state_val_10975 = (state_10974[1]);if((state_val_10975 === 7))
{var inst_10970 = (state_10974[2]);var state_10974__$1 = state_10974;var statearr_10976_10992 = state_10974__$1;(statearr_10976_10992[2] = inst_10970);
(statearr_10976_10992[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10975 === 6))
{var inst_10963 = (state_10974[7]);var inst_10960 = (state_10974[8]);var inst_10967 = f.call(null,inst_10960,inst_10963);var inst_10960__$1 = inst_10967;var state_10974__$1 = (function (){var statearr_10977 = state_10974;(statearr_10977[8] = inst_10960__$1);
return statearr_10977;
})();var statearr_10978_10993 = state_10974__$1;(statearr_10978_10993[2] = null);
(statearr_10978_10993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10975 === 5))
{var inst_10960 = (state_10974[8]);var state_10974__$1 = state_10974;var statearr_10979_10994 = state_10974__$1;(statearr_10979_10994[2] = inst_10960);
(statearr_10979_10994[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10975 === 4))
{var inst_10963 = (state_10974[7]);var inst_10963__$1 = (state_10974[2]);var inst_10964 = (inst_10963__$1 == null);var state_10974__$1 = (function (){var statearr_10980 = state_10974;(statearr_10980[7] = inst_10963__$1);
return statearr_10980;
})();if(cljs.core.truth_(inst_10964))
{var statearr_10981_10995 = state_10974__$1;(statearr_10981_10995[1] = 5);
} else
{var statearr_10982_10996 = state_10974__$1;(statearr_10982_10996[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10975 === 3))
{var inst_10972 = (state_10974[2]);var state_10974__$1 = state_10974;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10974__$1,inst_10972);
} else
{if((state_val_10975 === 2))
{var state_10974__$1 = state_10974;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10974__$1,4,ch);
} else
{if((state_val_10975 === 1))
{var inst_10960 = init;var state_10974__$1 = (function (){var statearr_10983 = state_10974;(statearr_10983[8] = inst_10960);
return statearr_10983;
})();var statearr_10984_10997 = state_10974__$1;(statearr_10984_10997[2] = null);
(statearr_10984_10997[1] = 2);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_10988 = [null,null,null,null,null,null,null,null,null];(statearr_10988[0] = state_machine__6871__auto__);
(statearr_10988[1] = 1);
return statearr_10988;
});
var state_machine__6871__auto____1 = (function (state_10974){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10974);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10989){if((e10989 instanceof Object))
{var ex__6874__auto__ = e10989;var statearr_10990_10998 = state_10974;(statearr_10990_10998[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10974);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10989;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10999 = state_10974;
state_10974 = G__10999;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10974){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10991 = f__6886__auto__.call(null);(statearr_10991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_10991;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
}));
return c__6885__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11061){var state_val_11062 = (state_11061[1]);if((state_val_11062 === 1))
{var inst_11041 = cljs.core.seq.call(null,coll);var inst_11042 = inst_11041;var state_11061__$1 = (function (){var statearr_11063 = state_11061;(statearr_11063[7] = inst_11042);
return statearr_11063;
})();var statearr_11064_11082 = state_11061__$1;(statearr_11064_11082[2] = null);
(statearr_11064_11082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11062 === 2))
{var inst_11042 = (state_11061[7]);var state_11061__$1 = state_11061;if(cljs.core.truth_(inst_11042))
{var statearr_11065_11083 = state_11061__$1;(statearr_11065_11083[1] = 4);
} else
{var statearr_11066_11084 = state_11061__$1;(statearr_11066_11084[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11062 === 3))
{var inst_11059 = (state_11061[2]);var state_11061__$1 = state_11061;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11061__$1,inst_11059);
} else
{if((state_val_11062 === 4))
{var inst_11042 = (state_11061[7]);var inst_11045 = cljs.core.first.call(null,inst_11042);var state_11061__$1 = state_11061;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11061__$1,7,ch,inst_11045);
} else
{if((state_val_11062 === 5))
{var state_11061__$1 = state_11061;if(cljs.core.truth_(close_QMARK_))
{var statearr_11067_11085 = state_11061__$1;(statearr_11067_11085[1] = 8);
} else
{var statearr_11068_11086 = state_11061__$1;(statearr_11068_11086[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11062 === 6))
{var inst_11057 = (state_11061[2]);var state_11061__$1 = state_11061;var statearr_11069_11087 = state_11061__$1;(statearr_11069_11087[2] = inst_11057);
(statearr_11069_11087[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11062 === 7))
{var inst_11042 = (state_11061[7]);var inst_11047 = (state_11061[2]);var inst_11048 = cljs.core.next.call(null,inst_11042);var inst_11042__$1 = inst_11048;var state_11061__$1 = (function (){var statearr_11070 = state_11061;(statearr_11070[8] = inst_11047);
(statearr_11070[7] = inst_11042__$1);
return statearr_11070;
})();var statearr_11071_11088 = state_11061__$1;(statearr_11071_11088[2] = null);
(statearr_11071_11088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11062 === 8))
{var inst_11052 = cljs.core.async.close_BANG_.call(null,ch);var state_11061__$1 = state_11061;var statearr_11072_11089 = state_11061__$1;(statearr_11072_11089[2] = inst_11052);
(statearr_11072_11089[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11062 === 9))
{var state_11061__$1 = state_11061;var statearr_11073_11090 = state_11061__$1;(statearr_11073_11090[2] = null);
(statearr_11073_11090[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11062 === 10))
{var inst_11055 = (state_11061[2]);var state_11061__$1 = state_11061;var statearr_11074_11091 = state_11061__$1;(statearr_11074_11091[2] = inst_11055);
(statearr_11074_11091[1] = 6);
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
var state_machine__6871__auto____0 = (function (){var statearr_11078 = [null,null,null,null,null,null,null,null,null];(statearr_11078[0] = state_machine__6871__auto__);
(statearr_11078[1] = 1);
return statearr_11078;
});
var state_machine__6871__auto____1 = (function (state_11061){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11061);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11079){if((e11079 instanceof Object))
{var ex__6874__auto__ = e11079;var statearr_11080_11092 = state_11061;(statearr_11080_11092[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11061);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11093 = state_11061;
state_11061 = G__11093;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11061){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11081 = f__6886__auto__.call(null);(statearr_11081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_11081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
}));
return c__6885__auto__;
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
cljs.core.async.Mux = (function (){var obj11095 = {};return obj11095;
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
cljs.core.async.Mult = (function (){var obj11097 = {};return obj11097;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11321 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11321 = (function (cs,ch,mult,meta11322){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11322 = meta11322;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11321.cljs$lang$type = true;
cljs.core.async.t11321.cljs$lang$ctorStr = "cljs.core.async/t11321";
cljs.core.async.t11321.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11321");
});})(cs))
;
cljs.core.async.t11321.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11321.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11321.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11321.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11321.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11321.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11321.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11323){var self__ = this;
var _11323__$1 = this;return self__.meta11322;
});})(cs))
;
cljs.core.async.t11321.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11323,meta11322__$1){var self__ = this;
var _11323__$1 = this;return (new cljs.core.async.t11321(self__.cs,self__.ch,self__.mult,meta11322__$1));
});})(cs))
;
cljs.core.async.__GT_t11321 = ((function (cs){
return (function __GT_t11321(cs__$1,ch__$1,mult__$1,meta11322){return (new cljs.core.async.t11321(cs__$1,ch__$1,mult__$1,meta11322));
});})(cs))
;
}
return (new cljs.core.async.t11321(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6885__auto___11544 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11458){var state_val_11459 = (state_11458[1]);if((state_val_11459 === 32))
{var inst_11402 = (state_11458[7]);var inst_11326 = (state_11458[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11458,31,Object,null,30);var inst_11409 = cljs.core.async.put_BANG_.call(null,inst_11402,inst_11326,done);var state_11458__$1 = state_11458;var statearr_11460_11545 = state_11458__$1;(statearr_11460_11545[2] = inst_11409);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 1))
{var state_11458__$1 = state_11458;var statearr_11461_11546 = state_11458__$1;(statearr_11461_11546[2] = null);
(statearr_11461_11546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 33))
{var inst_11415 = (state_11458[9]);var inst_11417 = cljs.core.chunked_seq_QMARK_.call(null,inst_11415);var state_11458__$1 = state_11458;if(inst_11417)
{var statearr_11462_11547 = state_11458__$1;(statearr_11462_11547[1] = 36);
} else
{var statearr_11463_11548 = state_11458__$1;(statearr_11463_11548[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 2))
{var state_11458__$1 = state_11458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11458__$1,4,ch);
} else
{if((state_val_11459 === 34))
{var state_11458__$1 = state_11458;var statearr_11464_11549 = state_11458__$1;(statearr_11464_11549[2] = null);
(statearr_11464_11549[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 3))
{var inst_11456 = (state_11458[2]);var state_11458__$1 = state_11458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11458__$1,inst_11456);
} else
{if((state_val_11459 === 35))
{var inst_11440 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11465_11550 = state_11458__$1;(statearr_11465_11550[2] = inst_11440);
(statearr_11465_11550[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 4))
{var inst_11326 = (state_11458[8]);var inst_11326__$1 = (state_11458[2]);var inst_11327 = (inst_11326__$1 == null);var state_11458__$1 = (function (){var statearr_11466 = state_11458;(statearr_11466[8] = inst_11326__$1);
return statearr_11466;
})();if(cljs.core.truth_(inst_11327))
{var statearr_11467_11551 = state_11458__$1;(statearr_11467_11551[1] = 5);
} else
{var statearr_11468_11552 = state_11458__$1;(statearr_11468_11552[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 36))
{var inst_11415 = (state_11458[9]);var inst_11419 = cljs.core.chunk_first.call(null,inst_11415);var inst_11420 = cljs.core.chunk_rest.call(null,inst_11415);var inst_11421 = cljs.core.count.call(null,inst_11419);var inst_11394 = inst_11420;var inst_11395 = inst_11419;var inst_11396 = inst_11421;var inst_11397 = 0;var state_11458__$1 = (function (){var statearr_11469 = state_11458;(statearr_11469[10] = inst_11395);
(statearr_11469[11] = inst_11396);
(statearr_11469[12] = inst_11394);
(statearr_11469[13] = inst_11397);
return statearr_11469;
})();var statearr_11470_11553 = state_11458__$1;(statearr_11470_11553[2] = null);
(statearr_11470_11553[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 5))
{var inst_11333 = cljs.core.deref.call(null,cs);var inst_11334 = cljs.core.seq.call(null,inst_11333);var inst_11335 = inst_11334;var inst_11336 = null;var inst_11337 = 0;var inst_11338 = 0;var state_11458__$1 = (function (){var statearr_11471 = state_11458;(statearr_11471[14] = inst_11335);
(statearr_11471[15] = inst_11336);
(statearr_11471[16] = inst_11337);
(statearr_11471[17] = inst_11338);
return statearr_11471;
})();var statearr_11472_11554 = state_11458__$1;(statearr_11472_11554[2] = null);
(statearr_11472_11554[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 37))
{var inst_11415 = (state_11458[9]);var inst_11424 = cljs.core.first.call(null,inst_11415);var state_11458__$1 = (function (){var statearr_11473 = state_11458;(statearr_11473[18] = inst_11424);
return statearr_11473;
})();var statearr_11474_11555 = state_11458__$1;(statearr_11474_11555[2] = null);
(statearr_11474_11555[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 6))
{var inst_11386 = (state_11458[19]);var inst_11385 = cljs.core.deref.call(null,cs);var inst_11386__$1 = cljs.core.keys.call(null,inst_11385);var inst_11387 = cljs.core.count.call(null,inst_11386__$1);var inst_11388 = cljs.core.reset_BANG_.call(null,dctr,inst_11387);var inst_11393 = cljs.core.seq.call(null,inst_11386__$1);var inst_11394 = inst_11393;var inst_11395 = null;var inst_11396 = 0;var inst_11397 = 0;var state_11458__$1 = (function (){var statearr_11475 = state_11458;(statearr_11475[20] = inst_11388);
(statearr_11475[19] = inst_11386__$1);
(statearr_11475[10] = inst_11395);
(statearr_11475[11] = inst_11396);
(statearr_11475[12] = inst_11394);
(statearr_11475[13] = inst_11397);
return statearr_11475;
})();var statearr_11476_11556 = state_11458__$1;(statearr_11476_11556[2] = null);
(statearr_11476_11556[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 38))
{var inst_11437 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11477_11557 = state_11458__$1;(statearr_11477_11557[2] = inst_11437);
(statearr_11477_11557[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 7))
{var inst_11454 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11478_11558 = state_11458__$1;(statearr_11478_11558[2] = inst_11454);
(statearr_11478_11558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 39))
{var inst_11415 = (state_11458[9]);var inst_11433 = (state_11458[2]);var inst_11434 = cljs.core.next.call(null,inst_11415);var inst_11394 = inst_11434;var inst_11395 = null;var inst_11396 = 0;var inst_11397 = 0;var state_11458__$1 = (function (){var statearr_11479 = state_11458;(statearr_11479[10] = inst_11395);
(statearr_11479[11] = inst_11396);
(statearr_11479[12] = inst_11394);
(statearr_11479[21] = inst_11433);
(statearr_11479[13] = inst_11397);
return statearr_11479;
})();var statearr_11480_11559 = state_11458__$1;(statearr_11480_11559[2] = null);
(statearr_11480_11559[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 8))
{var inst_11337 = (state_11458[16]);var inst_11338 = (state_11458[17]);var inst_11340 = (inst_11338 < inst_11337);var inst_11341 = inst_11340;var state_11458__$1 = state_11458;if(cljs.core.truth_(inst_11341))
{var statearr_11481_11560 = state_11458__$1;(statearr_11481_11560[1] = 10);
} else
{var statearr_11482_11561 = state_11458__$1;(statearr_11482_11561[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 40))
{var inst_11424 = (state_11458[18]);var inst_11425 = (state_11458[2]);var inst_11426 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11427 = cljs.core.async.untap_STAR_.call(null,m,inst_11424);var state_11458__$1 = (function (){var statearr_11483 = state_11458;(statearr_11483[22] = inst_11425);
(statearr_11483[23] = inst_11426);
return statearr_11483;
})();var statearr_11484_11562 = state_11458__$1;(statearr_11484_11562[2] = inst_11427);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 9))
{var inst_11383 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11485_11563 = state_11458__$1;(statearr_11485_11563[2] = inst_11383);
(statearr_11485_11563[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 41))
{var inst_11326 = (state_11458[8]);var inst_11424 = (state_11458[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11458,40,Object,null,39);var inst_11431 = cljs.core.async.put_BANG_.call(null,inst_11424,inst_11326,done);var state_11458__$1 = state_11458;var statearr_11486_11564 = state_11458__$1;(statearr_11486_11564[2] = inst_11431);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 10))
{var inst_11336 = (state_11458[15]);var inst_11338 = (state_11458[17]);var inst_11344 = cljs.core._nth.call(null,inst_11336,inst_11338);var inst_11345 = cljs.core.nth.call(null,inst_11344,0,null);var inst_11346 = cljs.core.nth.call(null,inst_11344,1,null);var state_11458__$1 = (function (){var statearr_11487 = state_11458;(statearr_11487[24] = inst_11345);
return statearr_11487;
})();if(cljs.core.truth_(inst_11346))
{var statearr_11488_11565 = state_11458__$1;(statearr_11488_11565[1] = 13);
} else
{var statearr_11489_11566 = state_11458__$1;(statearr_11489_11566[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 42))
{var state_11458__$1 = state_11458;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11458__$1,45,dchan);
} else
{if((state_val_11459 === 11))
{var inst_11335 = (state_11458[14]);var inst_11355 = (state_11458[25]);var inst_11355__$1 = cljs.core.seq.call(null,inst_11335);var state_11458__$1 = (function (){var statearr_11490 = state_11458;(statearr_11490[25] = inst_11355__$1);
return statearr_11490;
})();if(inst_11355__$1)
{var statearr_11491_11567 = state_11458__$1;(statearr_11491_11567[1] = 16);
} else
{var statearr_11492_11568 = state_11458__$1;(statearr_11492_11568[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 43))
{var state_11458__$1 = state_11458;var statearr_11493_11569 = state_11458__$1;(statearr_11493_11569[2] = null);
(statearr_11493_11569[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 12))
{var inst_11381 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11494_11570 = state_11458__$1;(statearr_11494_11570[2] = inst_11381);
(statearr_11494_11570[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 44))
{var inst_11451 = (state_11458[2]);var state_11458__$1 = (function (){var statearr_11495 = state_11458;(statearr_11495[26] = inst_11451);
return statearr_11495;
})();var statearr_11496_11571 = state_11458__$1;(statearr_11496_11571[2] = null);
(statearr_11496_11571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 13))
{var inst_11345 = (state_11458[24]);var inst_11348 = cljs.core.async.close_BANG_.call(null,inst_11345);var state_11458__$1 = state_11458;var statearr_11497_11572 = state_11458__$1;(statearr_11497_11572[2] = inst_11348);
(statearr_11497_11572[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 45))
{var inst_11448 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11501_11573 = state_11458__$1;(statearr_11501_11573[2] = inst_11448);
(statearr_11501_11573[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 14))
{var state_11458__$1 = state_11458;var statearr_11502_11574 = state_11458__$1;(statearr_11502_11574[2] = null);
(statearr_11502_11574[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 15))
{var inst_11335 = (state_11458[14]);var inst_11336 = (state_11458[15]);var inst_11337 = (state_11458[16]);var inst_11338 = (state_11458[17]);var inst_11351 = (state_11458[2]);var inst_11352 = (inst_11338 + 1);var tmp11498 = inst_11335;var tmp11499 = inst_11336;var tmp11500 = inst_11337;var inst_11335__$1 = tmp11498;var inst_11336__$1 = tmp11499;var inst_11337__$1 = tmp11500;var inst_11338__$1 = inst_11352;var state_11458__$1 = (function (){var statearr_11503 = state_11458;(statearr_11503[14] = inst_11335__$1);
(statearr_11503[15] = inst_11336__$1);
(statearr_11503[16] = inst_11337__$1);
(statearr_11503[17] = inst_11338__$1);
(statearr_11503[27] = inst_11351);
return statearr_11503;
})();var statearr_11504_11575 = state_11458__$1;(statearr_11504_11575[2] = null);
(statearr_11504_11575[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 16))
{var inst_11355 = (state_11458[25]);var inst_11357 = cljs.core.chunked_seq_QMARK_.call(null,inst_11355);var state_11458__$1 = state_11458;if(inst_11357)
{var statearr_11505_11576 = state_11458__$1;(statearr_11505_11576[1] = 19);
} else
{var statearr_11506_11577 = state_11458__$1;(statearr_11506_11577[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 17))
{var state_11458__$1 = state_11458;var statearr_11507_11578 = state_11458__$1;(statearr_11507_11578[2] = null);
(statearr_11507_11578[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 18))
{var inst_11379 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11508_11579 = state_11458__$1;(statearr_11508_11579[2] = inst_11379);
(statearr_11508_11579[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 19))
{var inst_11355 = (state_11458[25]);var inst_11359 = cljs.core.chunk_first.call(null,inst_11355);var inst_11360 = cljs.core.chunk_rest.call(null,inst_11355);var inst_11361 = cljs.core.count.call(null,inst_11359);var inst_11335 = inst_11360;var inst_11336 = inst_11359;var inst_11337 = inst_11361;var inst_11338 = 0;var state_11458__$1 = (function (){var statearr_11509 = state_11458;(statearr_11509[14] = inst_11335);
(statearr_11509[15] = inst_11336);
(statearr_11509[16] = inst_11337);
(statearr_11509[17] = inst_11338);
return statearr_11509;
})();var statearr_11510_11580 = state_11458__$1;(statearr_11510_11580[2] = null);
(statearr_11510_11580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 20))
{var inst_11355 = (state_11458[25]);var inst_11365 = cljs.core.first.call(null,inst_11355);var inst_11366 = cljs.core.nth.call(null,inst_11365,0,null);var inst_11367 = cljs.core.nth.call(null,inst_11365,1,null);var state_11458__$1 = (function (){var statearr_11511 = state_11458;(statearr_11511[28] = inst_11366);
return statearr_11511;
})();if(cljs.core.truth_(inst_11367))
{var statearr_11512_11581 = state_11458__$1;(statearr_11512_11581[1] = 22);
} else
{var statearr_11513_11582 = state_11458__$1;(statearr_11513_11582[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 21))
{var inst_11376 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11514_11583 = state_11458__$1;(statearr_11514_11583[2] = inst_11376);
(statearr_11514_11583[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 22))
{var inst_11366 = (state_11458[28]);var inst_11369 = cljs.core.async.close_BANG_.call(null,inst_11366);var state_11458__$1 = state_11458;var statearr_11515_11584 = state_11458__$1;(statearr_11515_11584[2] = inst_11369);
(statearr_11515_11584[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 23))
{var state_11458__$1 = state_11458;var statearr_11516_11585 = state_11458__$1;(statearr_11516_11585[2] = null);
(statearr_11516_11585[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 24))
{var inst_11355 = (state_11458[25]);var inst_11372 = (state_11458[2]);var inst_11373 = cljs.core.next.call(null,inst_11355);var inst_11335 = inst_11373;var inst_11336 = null;var inst_11337 = 0;var inst_11338 = 0;var state_11458__$1 = (function (){var statearr_11517 = state_11458;(statearr_11517[29] = inst_11372);
(statearr_11517[14] = inst_11335);
(statearr_11517[15] = inst_11336);
(statearr_11517[16] = inst_11337);
(statearr_11517[17] = inst_11338);
return statearr_11517;
})();var statearr_11518_11586 = state_11458__$1;(statearr_11518_11586[2] = null);
(statearr_11518_11586[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 25))
{var inst_11396 = (state_11458[11]);var inst_11397 = (state_11458[13]);var inst_11399 = (inst_11397 < inst_11396);var inst_11400 = inst_11399;var state_11458__$1 = state_11458;if(cljs.core.truth_(inst_11400))
{var statearr_11519_11587 = state_11458__$1;(statearr_11519_11587[1] = 27);
} else
{var statearr_11520_11588 = state_11458__$1;(statearr_11520_11588[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 26))
{var inst_11386 = (state_11458[19]);var inst_11444 = (state_11458[2]);var inst_11445 = cljs.core.seq.call(null,inst_11386);var state_11458__$1 = (function (){var statearr_11521 = state_11458;(statearr_11521[30] = inst_11444);
return statearr_11521;
})();if(inst_11445)
{var statearr_11522_11589 = state_11458__$1;(statearr_11522_11589[1] = 42);
} else
{var statearr_11523_11590 = state_11458__$1;(statearr_11523_11590[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 27))
{var inst_11395 = (state_11458[10]);var inst_11397 = (state_11458[13]);var inst_11402 = cljs.core._nth.call(null,inst_11395,inst_11397);var state_11458__$1 = (function (){var statearr_11524 = state_11458;(statearr_11524[7] = inst_11402);
return statearr_11524;
})();var statearr_11525_11591 = state_11458__$1;(statearr_11525_11591[2] = null);
(statearr_11525_11591[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 28))
{var inst_11415 = (state_11458[9]);var inst_11394 = (state_11458[12]);var inst_11415__$1 = cljs.core.seq.call(null,inst_11394);var state_11458__$1 = (function (){var statearr_11529 = state_11458;(statearr_11529[9] = inst_11415__$1);
return statearr_11529;
})();if(inst_11415__$1)
{var statearr_11530_11592 = state_11458__$1;(statearr_11530_11592[1] = 33);
} else
{var statearr_11531_11593 = state_11458__$1;(statearr_11531_11593[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 29))
{var inst_11442 = (state_11458[2]);var state_11458__$1 = state_11458;var statearr_11532_11594 = state_11458__$1;(statearr_11532_11594[2] = inst_11442);
(statearr_11532_11594[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 30))
{var inst_11395 = (state_11458[10]);var inst_11396 = (state_11458[11]);var inst_11394 = (state_11458[12]);var inst_11397 = (state_11458[13]);var inst_11411 = (state_11458[2]);var inst_11412 = (inst_11397 + 1);var tmp11526 = inst_11395;var tmp11527 = inst_11396;var tmp11528 = inst_11394;var inst_11394__$1 = tmp11528;var inst_11395__$1 = tmp11526;var inst_11396__$1 = tmp11527;var inst_11397__$1 = inst_11412;var state_11458__$1 = (function (){var statearr_11533 = state_11458;(statearr_11533[31] = inst_11411);
(statearr_11533[10] = inst_11395__$1);
(statearr_11533[11] = inst_11396__$1);
(statearr_11533[12] = inst_11394__$1);
(statearr_11533[13] = inst_11397__$1);
return statearr_11533;
})();var statearr_11534_11595 = state_11458__$1;(statearr_11534_11595[2] = null);
(statearr_11534_11595[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11459 === 31))
{var inst_11402 = (state_11458[7]);var inst_11403 = (state_11458[2]);var inst_11404 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11405 = cljs.core.async.untap_STAR_.call(null,m,inst_11402);var state_11458__$1 = (function (){var statearr_11535 = state_11458;(statearr_11535[32] = inst_11403);
(statearr_11535[33] = inst_11404);
return statearr_11535;
})();var statearr_11536_11596 = state_11458__$1;(statearr_11536_11596[2] = inst_11405);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458__$1);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_11540 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11540[0] = state_machine__6871__auto__);
(statearr_11540[1] = 1);
return statearr_11540;
});
var state_machine__6871__auto____1 = (function (state_11458){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11458);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11541){if((e11541 instanceof Object))
{var ex__6874__auto__ = e11541;var statearr_11542_11597 = state_11458;(statearr_11542_11597[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11598 = state_11458;
state_11458 = G__11598;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11458){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11543 = f__6886__auto__.call(null);(statearr_11543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___11544);
return statearr_11543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
cljs.core.async.Mix = (function (){var obj11600 = {};return obj11600;
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
;var m = (function (){if(typeof cljs.core.async.t11710 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11710 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11711){
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
this.meta11711 = meta11711;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11710.cljs$lang$type = true;
cljs.core.async.t11710.cljs$lang$ctorStr = "cljs.core.async/t11710";
cljs.core.async.t11710.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11710");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11710.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11710.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11712){var self__ = this;
var _11712__$1 = this;return self__.meta11711;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11712,meta11711__$1){var self__ = this;
var _11712__$1 = this;return (new cljs.core.async.t11710(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11711__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11710 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11710(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11711){return (new cljs.core.async.t11710(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11711));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11710(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6885__auto___11819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11777){var state_val_11778 = (state_11777[1]);if((state_val_11778 === 1))
{var inst_11716 = (state_11777[7]);var inst_11716__$1 = calc_state.call(null);var inst_11717 = cljs.core.seq_QMARK_.call(null,inst_11716__$1);var state_11777__$1 = (function (){var statearr_11779 = state_11777;(statearr_11779[7] = inst_11716__$1);
return statearr_11779;
})();if(inst_11717)
{var statearr_11780_11820 = state_11777__$1;(statearr_11780_11820[1] = 2);
} else
{var statearr_11781_11821 = state_11777__$1;(statearr_11781_11821[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 2))
{var inst_11716 = (state_11777[7]);var inst_11719 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11716);var state_11777__$1 = state_11777;var statearr_11782_11822 = state_11777__$1;(statearr_11782_11822[2] = inst_11719);
(statearr_11782_11822[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 3))
{var inst_11716 = (state_11777[7]);var state_11777__$1 = state_11777;var statearr_11783_11823 = state_11777__$1;(statearr_11783_11823[2] = inst_11716);
(statearr_11783_11823[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 4))
{var inst_11716 = (state_11777[7]);var inst_11722 = (state_11777[2]);var inst_11723 = cljs.core.get.call(null,inst_11722,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11724 = cljs.core.get.call(null,inst_11722,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11725 = cljs.core.get.call(null,inst_11722,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11726 = inst_11716;var state_11777__$1 = (function (){var statearr_11784 = state_11777;(statearr_11784[8] = inst_11723);
(statearr_11784[9] = inst_11725);
(statearr_11784[10] = inst_11724);
(statearr_11784[11] = inst_11726);
return statearr_11784;
})();var statearr_11785_11824 = state_11777__$1;(statearr_11785_11824[2] = null);
(statearr_11785_11824[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 5))
{var inst_11726 = (state_11777[11]);var inst_11729 = cljs.core.seq_QMARK_.call(null,inst_11726);var state_11777__$1 = state_11777;if(inst_11729)
{var statearr_11786_11825 = state_11777__$1;(statearr_11786_11825[1] = 7);
} else
{var statearr_11787_11826 = state_11777__$1;(statearr_11787_11826[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 6))
{var inst_11775 = (state_11777[2]);var state_11777__$1 = state_11777;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11777__$1,inst_11775);
} else
{if((state_val_11778 === 7))
{var inst_11726 = (state_11777[11]);var inst_11731 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11726);var state_11777__$1 = state_11777;var statearr_11788_11827 = state_11777__$1;(statearr_11788_11827[2] = inst_11731);
(statearr_11788_11827[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 8))
{var inst_11726 = (state_11777[11]);var state_11777__$1 = state_11777;var statearr_11789_11828 = state_11777__$1;(statearr_11789_11828[2] = inst_11726);
(statearr_11789_11828[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 9))
{var inst_11734 = (state_11777[12]);var inst_11734__$1 = (state_11777[2]);var inst_11735 = cljs.core.get.call(null,inst_11734__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11736 = cljs.core.get.call(null,inst_11734__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11737 = cljs.core.get.call(null,inst_11734__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11777__$1 = (function (){var statearr_11790 = state_11777;(statearr_11790[12] = inst_11734__$1);
(statearr_11790[13] = inst_11736);
(statearr_11790[14] = inst_11737);
return statearr_11790;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11777__$1,10,inst_11735);
} else
{if((state_val_11778 === 10))
{var inst_11741 = (state_11777[15]);var inst_11742 = (state_11777[16]);var inst_11740 = (state_11777[2]);var inst_11741__$1 = cljs.core.nth.call(null,inst_11740,0,null);var inst_11742__$1 = cljs.core.nth.call(null,inst_11740,1,null);var inst_11743 = (inst_11741__$1 == null);var inst_11744 = cljs.core._EQ_.call(null,inst_11742__$1,change);var inst_11745 = (inst_11743) || (inst_11744);var state_11777__$1 = (function (){var statearr_11791 = state_11777;(statearr_11791[15] = inst_11741__$1);
(statearr_11791[16] = inst_11742__$1);
return statearr_11791;
})();if(cljs.core.truth_(inst_11745))
{var statearr_11792_11829 = state_11777__$1;(statearr_11792_11829[1] = 11);
} else
{var statearr_11793_11830 = state_11777__$1;(statearr_11793_11830[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 11))
{var inst_11741 = (state_11777[15]);var inst_11747 = (inst_11741 == null);var state_11777__$1 = state_11777;if(cljs.core.truth_(inst_11747))
{var statearr_11794_11831 = state_11777__$1;(statearr_11794_11831[1] = 14);
} else
{var statearr_11795_11832 = state_11777__$1;(statearr_11795_11832[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 12))
{var inst_11756 = (state_11777[17]);var inst_11737 = (state_11777[14]);var inst_11742 = (state_11777[16]);var inst_11756__$1 = inst_11737.call(null,inst_11742);var state_11777__$1 = (function (){var statearr_11796 = state_11777;(statearr_11796[17] = inst_11756__$1);
return statearr_11796;
})();if(cljs.core.truth_(inst_11756__$1))
{var statearr_11797_11833 = state_11777__$1;(statearr_11797_11833[1] = 17);
} else
{var statearr_11798_11834 = state_11777__$1;(statearr_11798_11834[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 13))
{var inst_11773 = (state_11777[2]);var state_11777__$1 = state_11777;var statearr_11799_11835 = state_11777__$1;(statearr_11799_11835[2] = inst_11773);
(statearr_11799_11835[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 14))
{var inst_11742 = (state_11777[16]);var inst_11749 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11742);var state_11777__$1 = state_11777;var statearr_11800_11836 = state_11777__$1;(statearr_11800_11836[2] = inst_11749);
(statearr_11800_11836[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 15))
{var state_11777__$1 = state_11777;var statearr_11801_11837 = state_11777__$1;(statearr_11801_11837[2] = null);
(statearr_11801_11837[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 16))
{var inst_11752 = (state_11777[2]);var inst_11753 = calc_state.call(null);var inst_11726 = inst_11753;var state_11777__$1 = (function (){var statearr_11802 = state_11777;(statearr_11802[11] = inst_11726);
(statearr_11802[18] = inst_11752);
return statearr_11802;
})();var statearr_11803_11838 = state_11777__$1;(statearr_11803_11838[2] = null);
(statearr_11803_11838[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 17))
{var inst_11756 = (state_11777[17]);var state_11777__$1 = state_11777;var statearr_11804_11839 = state_11777__$1;(statearr_11804_11839[2] = inst_11756);
(statearr_11804_11839[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 18))
{var inst_11736 = (state_11777[13]);var inst_11737 = (state_11777[14]);var inst_11742 = (state_11777[16]);var inst_11759 = cljs.core.empty_QMARK_.call(null,inst_11737);var inst_11760 = inst_11736.call(null,inst_11742);var inst_11761 = cljs.core.not.call(null,inst_11760);var inst_11762 = (inst_11759) && (inst_11761);var state_11777__$1 = state_11777;var statearr_11805_11840 = state_11777__$1;(statearr_11805_11840[2] = inst_11762);
(statearr_11805_11840[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 19))
{var inst_11764 = (state_11777[2]);var state_11777__$1 = state_11777;if(cljs.core.truth_(inst_11764))
{var statearr_11806_11841 = state_11777__$1;(statearr_11806_11841[1] = 20);
} else
{var statearr_11807_11842 = state_11777__$1;(statearr_11807_11842[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 20))
{var inst_11741 = (state_11777[15]);var state_11777__$1 = state_11777;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11777__$1,23,out,inst_11741);
} else
{if((state_val_11778 === 21))
{var state_11777__$1 = state_11777;var statearr_11808_11843 = state_11777__$1;(statearr_11808_11843[2] = null);
(statearr_11808_11843[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 22))
{var inst_11734 = (state_11777[12]);var inst_11770 = (state_11777[2]);var inst_11726 = inst_11734;var state_11777__$1 = (function (){var statearr_11809 = state_11777;(statearr_11809[19] = inst_11770);
(statearr_11809[11] = inst_11726);
return statearr_11809;
})();var statearr_11810_11844 = state_11777__$1;(statearr_11810_11844[2] = null);
(statearr_11810_11844[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11778 === 23))
{var inst_11767 = (state_11777[2]);var state_11777__$1 = state_11777;var statearr_11811_11845 = state_11777__$1;(statearr_11811_11845[2] = inst_11767);
(statearr_11811_11845[1] = 22);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_11815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11815[0] = state_machine__6871__auto__);
(statearr_11815[1] = 1);
return statearr_11815;
});
var state_machine__6871__auto____1 = (function (state_11777){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11777);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11816){if((e11816 instanceof Object))
{var ex__6874__auto__ = e11816;var statearr_11817_11846 = state_11777;(statearr_11817_11846[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11777);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11847 = state_11777;
state_11777 = G__11847;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11777){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11818 = f__6886__auto__.call(null);(statearr_11818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___11819);
return statearr_11818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
cljs.core.async.Pub = (function (){var obj11849 = {};return obj11849;
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
return (function (p1__11850_SHARP_){if(cljs.core.truth_(p1__11850_SHARP_.call(null,topic)))
{return p1__11850_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11850_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4071__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11975 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11975 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11976){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11976 = meta11976;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11975.cljs$lang$type = true;
cljs.core.async.t11975.cljs$lang$ctorStr = "cljs.core.async/t11975";
cljs.core.async.t11975.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11975");
});})(mults,ensure_mult))
;
cljs.core.async.t11975.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11975.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11975.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11975.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11975.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11975.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11975.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11977){var self__ = this;
var _11977__$1 = this;return self__.meta11976;
});})(mults,ensure_mult))
;
cljs.core.async.t11975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11977,meta11976__$1){var self__ = this;
var _11977__$1 = this;return (new cljs.core.async.t11975(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11976__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11975 = ((function (mults,ensure_mult){
return (function __GT_t11975(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11976){return (new cljs.core.async.t11975(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11976));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11975(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6885__auto___12099 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12051){var state_val_12052 = (state_12051[1]);if((state_val_12052 === 1))
{var state_12051__$1 = state_12051;var statearr_12053_12100 = state_12051__$1;(statearr_12053_12100[2] = null);
(statearr_12053_12100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 2))
{var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12051__$1,4,ch);
} else
{if((state_val_12052 === 3))
{var inst_12049 = (state_12051[2]);var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12051__$1,inst_12049);
} else
{if((state_val_12052 === 4))
{var inst_11980 = (state_12051[7]);var inst_11980__$1 = (state_12051[2]);var inst_11981 = (inst_11980__$1 == null);var state_12051__$1 = (function (){var statearr_12054 = state_12051;(statearr_12054[7] = inst_11980__$1);
return statearr_12054;
})();if(cljs.core.truth_(inst_11981))
{var statearr_12055_12101 = state_12051__$1;(statearr_12055_12101[1] = 5);
} else
{var statearr_12056_12102 = state_12051__$1;(statearr_12056_12102[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 5))
{var inst_11987 = cljs.core.deref.call(null,mults);var inst_11988 = cljs.core.vals.call(null,inst_11987);var inst_11989 = cljs.core.seq.call(null,inst_11988);var inst_11990 = inst_11989;var inst_11991 = null;var inst_11992 = 0;var inst_11993 = 0;var state_12051__$1 = (function (){var statearr_12057 = state_12051;(statearr_12057[8] = inst_11990);
(statearr_12057[9] = inst_11993);
(statearr_12057[10] = inst_11992);
(statearr_12057[11] = inst_11991);
return statearr_12057;
})();var statearr_12058_12103 = state_12051__$1;(statearr_12058_12103[2] = null);
(statearr_12058_12103[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 6))
{var inst_12028 = (state_12051[12]);var inst_11980 = (state_12051[7]);var inst_12030 = (state_12051[13]);var inst_12028__$1 = topic_fn.call(null,inst_11980);var inst_12029 = cljs.core.deref.call(null,mults);var inst_12030__$1 = cljs.core.get.call(null,inst_12029,inst_12028__$1);var state_12051__$1 = (function (){var statearr_12059 = state_12051;(statearr_12059[12] = inst_12028__$1);
(statearr_12059[13] = inst_12030__$1);
return statearr_12059;
})();if(cljs.core.truth_(inst_12030__$1))
{var statearr_12060_12104 = state_12051__$1;(statearr_12060_12104[1] = 19);
} else
{var statearr_12061_12105 = state_12051__$1;(statearr_12061_12105[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 7))
{var inst_12047 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12062_12106 = state_12051__$1;(statearr_12062_12106[2] = inst_12047);
(statearr_12062_12106[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 8))
{var inst_11993 = (state_12051[9]);var inst_11992 = (state_12051[10]);var inst_11995 = (inst_11993 < inst_11992);var inst_11996 = inst_11995;var state_12051__$1 = state_12051;if(cljs.core.truth_(inst_11996))
{var statearr_12066_12107 = state_12051__$1;(statearr_12066_12107[1] = 10);
} else
{var statearr_12067_12108 = state_12051__$1;(statearr_12067_12108[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 9))
{var inst_12026 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12068_12109 = state_12051__$1;(statearr_12068_12109[2] = inst_12026);
(statearr_12068_12109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 10))
{var inst_11990 = (state_12051[8]);var inst_11993 = (state_12051[9]);var inst_11992 = (state_12051[10]);var inst_11991 = (state_12051[11]);var inst_11998 = cljs.core._nth.call(null,inst_11991,inst_11993);var inst_11999 = cljs.core.async.muxch_STAR_.call(null,inst_11998);var inst_12000 = cljs.core.async.close_BANG_.call(null,inst_11999);var inst_12001 = (inst_11993 + 1);var tmp12063 = inst_11990;var tmp12064 = inst_11992;var tmp12065 = inst_11991;var inst_11990__$1 = tmp12063;var inst_11991__$1 = tmp12065;var inst_11992__$1 = tmp12064;var inst_11993__$1 = inst_12001;var state_12051__$1 = (function (){var statearr_12069 = state_12051;(statearr_12069[14] = inst_12000);
(statearr_12069[8] = inst_11990__$1);
(statearr_12069[9] = inst_11993__$1);
(statearr_12069[10] = inst_11992__$1);
(statearr_12069[11] = inst_11991__$1);
return statearr_12069;
})();var statearr_12070_12110 = state_12051__$1;(statearr_12070_12110[2] = null);
(statearr_12070_12110[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 11))
{var inst_11990 = (state_12051[8]);var inst_12004 = (state_12051[15]);var inst_12004__$1 = cljs.core.seq.call(null,inst_11990);var state_12051__$1 = (function (){var statearr_12071 = state_12051;(statearr_12071[15] = inst_12004__$1);
return statearr_12071;
})();if(inst_12004__$1)
{var statearr_12072_12111 = state_12051__$1;(statearr_12072_12111[1] = 13);
} else
{var statearr_12073_12112 = state_12051__$1;(statearr_12073_12112[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 12))
{var inst_12024 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12074_12113 = state_12051__$1;(statearr_12074_12113[2] = inst_12024);
(statearr_12074_12113[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 13))
{var inst_12004 = (state_12051[15]);var inst_12006 = cljs.core.chunked_seq_QMARK_.call(null,inst_12004);var state_12051__$1 = state_12051;if(inst_12006)
{var statearr_12075_12114 = state_12051__$1;(statearr_12075_12114[1] = 16);
} else
{var statearr_12076_12115 = state_12051__$1;(statearr_12076_12115[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 14))
{var state_12051__$1 = state_12051;var statearr_12077_12116 = state_12051__$1;(statearr_12077_12116[2] = null);
(statearr_12077_12116[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 15))
{var inst_12022 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12078_12117 = state_12051__$1;(statearr_12078_12117[2] = inst_12022);
(statearr_12078_12117[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 16))
{var inst_12004 = (state_12051[15]);var inst_12008 = cljs.core.chunk_first.call(null,inst_12004);var inst_12009 = cljs.core.chunk_rest.call(null,inst_12004);var inst_12010 = cljs.core.count.call(null,inst_12008);var inst_11990 = inst_12009;var inst_11991 = inst_12008;var inst_11992 = inst_12010;var inst_11993 = 0;var state_12051__$1 = (function (){var statearr_12079 = state_12051;(statearr_12079[8] = inst_11990);
(statearr_12079[9] = inst_11993);
(statearr_12079[10] = inst_11992);
(statearr_12079[11] = inst_11991);
return statearr_12079;
})();var statearr_12080_12118 = state_12051__$1;(statearr_12080_12118[2] = null);
(statearr_12080_12118[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 17))
{var inst_12004 = (state_12051[15]);var inst_12013 = cljs.core.first.call(null,inst_12004);var inst_12014 = cljs.core.async.muxch_STAR_.call(null,inst_12013);var inst_12015 = cljs.core.async.close_BANG_.call(null,inst_12014);var inst_12016 = cljs.core.next.call(null,inst_12004);var inst_11990 = inst_12016;var inst_11991 = null;var inst_11992 = 0;var inst_11993 = 0;var state_12051__$1 = (function (){var statearr_12081 = state_12051;(statearr_12081[8] = inst_11990);
(statearr_12081[16] = inst_12015);
(statearr_12081[9] = inst_11993);
(statearr_12081[10] = inst_11992);
(statearr_12081[11] = inst_11991);
return statearr_12081;
})();var statearr_12082_12119 = state_12051__$1;(statearr_12082_12119[2] = null);
(statearr_12082_12119[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 18))
{var inst_12019 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12083_12120 = state_12051__$1;(statearr_12083_12120[2] = inst_12019);
(statearr_12083_12120[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 19))
{var state_12051__$1 = state_12051;var statearr_12084_12121 = state_12051__$1;(statearr_12084_12121[2] = null);
(statearr_12084_12121[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 20))
{var state_12051__$1 = state_12051;var statearr_12085_12122 = state_12051__$1;(statearr_12085_12122[2] = null);
(statearr_12085_12122[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 21))
{var inst_12044 = (state_12051[2]);var state_12051__$1 = (function (){var statearr_12086 = state_12051;(statearr_12086[17] = inst_12044);
return statearr_12086;
})();var statearr_12087_12123 = state_12051__$1;(statearr_12087_12123[2] = null);
(statearr_12087_12123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 22))
{var inst_12041 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12088_12124 = state_12051__$1;(statearr_12088_12124[2] = inst_12041);
(statearr_12088_12124[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 23))
{var inst_12028 = (state_12051[12]);var inst_12032 = (state_12051[2]);var inst_12033 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12028);var state_12051__$1 = (function (){var statearr_12089 = state_12051;(statearr_12089[18] = inst_12032);
return statearr_12089;
})();var statearr_12090_12125 = state_12051__$1;(statearr_12090_12125[2] = inst_12033);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12051__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12052 === 24))
{var inst_11980 = (state_12051[7]);var inst_12030 = (state_12051[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12051,23,Object,null,22);var inst_12037 = cljs.core.async.muxch_STAR_.call(null,inst_12030);var state_12051__$1 = state_12051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12051__$1,25,inst_12037,inst_11980);
} else
{if((state_val_12052 === 25))
{var inst_12039 = (state_12051[2]);var state_12051__$1 = state_12051;var statearr_12091_12126 = state_12051__$1;(statearr_12091_12126[2] = inst_12039);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12051__$1);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_12095 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12095[0] = state_machine__6871__auto__);
(statearr_12095[1] = 1);
return statearr_12095;
});
var state_machine__6871__auto____1 = (function (state_12051){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12051);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12096){if((e12096 instanceof Object))
{var ex__6874__auto__ = e12096;var statearr_12097_12127 = state_12051;(statearr_12097_12127[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12096;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12128 = state_12051;
state_12051 = G__12128;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12051){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12098 = f__6886__auto__.call(null);(statearr_12098[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12099);
return statearr_12098;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
,cljs.core.range.call(null,cnt));var c__6885__auto___12265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12235){var state_val_12236 = (state_12235[1]);if((state_val_12236 === 1))
{var state_12235__$1 = state_12235;var statearr_12237_12266 = state_12235__$1;(statearr_12237_12266[2] = null);
(statearr_12237_12266[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 2))
{var inst_12198 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12199 = 0;var state_12235__$1 = (function (){var statearr_12238 = state_12235;(statearr_12238[7] = inst_12198);
(statearr_12238[8] = inst_12199);
return statearr_12238;
})();var statearr_12239_12267 = state_12235__$1;(statearr_12239_12267[2] = null);
(statearr_12239_12267[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 3))
{var inst_12233 = (state_12235[2]);var state_12235__$1 = state_12235;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12235__$1,inst_12233);
} else
{if((state_val_12236 === 4))
{var inst_12199 = (state_12235[8]);var inst_12201 = (inst_12199 < cnt);var state_12235__$1 = state_12235;if(cljs.core.truth_(inst_12201))
{var statearr_12240_12268 = state_12235__$1;(statearr_12240_12268[1] = 6);
} else
{var statearr_12241_12269 = state_12235__$1;(statearr_12241_12269[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 5))
{var inst_12219 = (state_12235[2]);var state_12235__$1 = (function (){var statearr_12242 = state_12235;(statearr_12242[9] = inst_12219);
return statearr_12242;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12235__$1,12,dchan);
} else
{if((state_val_12236 === 6))
{var state_12235__$1 = state_12235;var statearr_12243_12270 = state_12235__$1;(statearr_12243_12270[2] = null);
(statearr_12243_12270[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 7))
{var state_12235__$1 = state_12235;var statearr_12244_12271 = state_12235__$1;(statearr_12244_12271[2] = null);
(statearr_12244_12271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 8))
{var inst_12217 = (state_12235[2]);var state_12235__$1 = state_12235;var statearr_12245_12272 = state_12235__$1;(statearr_12245_12272[2] = inst_12217);
(statearr_12245_12272[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 9))
{var inst_12199 = (state_12235[8]);var inst_12212 = (state_12235[2]);var inst_12213 = (inst_12199 + 1);var inst_12199__$1 = inst_12213;var state_12235__$1 = (function (){var statearr_12246 = state_12235;(statearr_12246[8] = inst_12199__$1);
(statearr_12246[10] = inst_12212);
return statearr_12246;
})();var statearr_12247_12273 = state_12235__$1;(statearr_12247_12273[2] = null);
(statearr_12247_12273[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 10))
{var inst_12203 = (state_12235[2]);var inst_12204 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12235__$1 = (function (){var statearr_12248 = state_12235;(statearr_12248[11] = inst_12203);
return statearr_12248;
})();var statearr_12249_12274 = state_12235__$1;(statearr_12249_12274[2] = inst_12204);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12235__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 11))
{var inst_12199 = (state_12235[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12235,10,Object,null,9);var inst_12208 = chs__$1.call(null,inst_12199);var inst_12209 = done.call(null,inst_12199);var inst_12210 = cljs.core.async.take_BANG_.call(null,inst_12208,inst_12209);var state_12235__$1 = state_12235;var statearr_12250_12275 = state_12235__$1;(statearr_12250_12275[2] = inst_12210);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12235__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 12))
{var inst_12221 = (state_12235[12]);var inst_12221__$1 = (state_12235[2]);var inst_12222 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12221__$1);var state_12235__$1 = (function (){var statearr_12251 = state_12235;(statearr_12251[12] = inst_12221__$1);
return statearr_12251;
})();if(cljs.core.truth_(inst_12222))
{var statearr_12252_12276 = state_12235__$1;(statearr_12252_12276[1] = 13);
} else
{var statearr_12253_12277 = state_12235__$1;(statearr_12253_12277[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 13))
{var inst_12224 = cljs.core.async.close_BANG_.call(null,out);var state_12235__$1 = state_12235;var statearr_12254_12278 = state_12235__$1;(statearr_12254_12278[2] = inst_12224);
(statearr_12254_12278[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 14))
{var inst_12221 = (state_12235[12]);var inst_12226 = cljs.core.apply.call(null,f,inst_12221);var state_12235__$1 = state_12235;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12235__$1,16,out,inst_12226);
} else
{if((state_val_12236 === 15))
{var inst_12231 = (state_12235[2]);var state_12235__$1 = state_12235;var statearr_12255_12279 = state_12235__$1;(statearr_12255_12279[2] = inst_12231);
(statearr_12255_12279[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12236 === 16))
{var inst_12228 = (state_12235[2]);var state_12235__$1 = (function (){var statearr_12256 = state_12235;(statearr_12256[13] = inst_12228);
return statearr_12256;
})();var statearr_12257_12280 = state_12235__$1;(statearr_12257_12280[2] = null);
(statearr_12257_12280[1] = 2);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_12261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12261[0] = state_machine__6871__auto__);
(statearr_12261[1] = 1);
return statearr_12261;
});
var state_machine__6871__auto____1 = (function (state_12235){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12235);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12262){if((e12262 instanceof Object))
{var ex__6874__auto__ = e12262;var statearr_12263_12281 = state_12235;(statearr_12263_12281[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12235);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12282 = state_12235;
state_12235 = G__12282;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12235){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12235);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12264 = f__6886__auto__.call(null);(statearr_12264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12265);
return statearr_12264;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12390 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12366){var state_val_12367 = (state_12366[1]);if((state_val_12367 === 1))
{var inst_12337 = cljs.core.vec.call(null,chs);var inst_12338 = inst_12337;var state_12366__$1 = (function (){var statearr_12368 = state_12366;(statearr_12368[7] = inst_12338);
return statearr_12368;
})();var statearr_12369_12391 = state_12366__$1;(statearr_12369_12391[2] = null);
(statearr_12369_12391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 2))
{var inst_12338 = (state_12366[7]);var inst_12340 = cljs.core.count.call(null,inst_12338);var inst_12341 = (inst_12340 > 0);var state_12366__$1 = state_12366;if(cljs.core.truth_(inst_12341))
{var statearr_12370_12392 = state_12366__$1;(statearr_12370_12392[1] = 4);
} else
{var statearr_12371_12393 = state_12366__$1;(statearr_12371_12393[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 3))
{var inst_12364 = (state_12366[2]);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12366__$1,inst_12364);
} else
{if((state_val_12367 === 4))
{var inst_12338 = (state_12366[7]);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12366__$1,7,inst_12338);
} else
{if((state_val_12367 === 5))
{var inst_12360 = cljs.core.async.close_BANG_.call(null,out);var state_12366__$1 = state_12366;var statearr_12372_12394 = state_12366__$1;(statearr_12372_12394[2] = inst_12360);
(statearr_12372_12394[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 6))
{var inst_12362 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12373_12395 = state_12366__$1;(statearr_12373_12395[2] = inst_12362);
(statearr_12373_12395[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 7))
{var inst_12346 = (state_12366[8]);var inst_12345 = (state_12366[9]);var inst_12345__$1 = (state_12366[2]);var inst_12346__$1 = cljs.core.nth.call(null,inst_12345__$1,0,null);var inst_12347 = cljs.core.nth.call(null,inst_12345__$1,1,null);var inst_12348 = (inst_12346__$1 == null);var state_12366__$1 = (function (){var statearr_12374 = state_12366;(statearr_12374[10] = inst_12347);
(statearr_12374[8] = inst_12346__$1);
(statearr_12374[9] = inst_12345__$1);
return statearr_12374;
})();if(cljs.core.truth_(inst_12348))
{var statearr_12375_12396 = state_12366__$1;(statearr_12375_12396[1] = 8);
} else
{var statearr_12376_12397 = state_12366__$1;(statearr_12376_12397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 8))
{var inst_12347 = (state_12366[10]);var inst_12346 = (state_12366[8]);var inst_12345 = (state_12366[9]);var inst_12338 = (state_12366[7]);var inst_12350 = (function (){var c = inst_12347;var v = inst_12346;var vec__12343 = inst_12345;var cs = inst_12338;return ((function (c,v,vec__12343,cs,inst_12347,inst_12346,inst_12345,inst_12338,state_val_12367){
return (function (p1__12283_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12283_SHARP_);
});
;})(c,v,vec__12343,cs,inst_12347,inst_12346,inst_12345,inst_12338,state_val_12367))
})();var inst_12351 = cljs.core.filterv.call(null,inst_12350,inst_12338);var inst_12338__$1 = inst_12351;var state_12366__$1 = (function (){var statearr_12377 = state_12366;(statearr_12377[7] = inst_12338__$1);
return statearr_12377;
})();var statearr_12378_12398 = state_12366__$1;(statearr_12378_12398[2] = null);
(statearr_12378_12398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 9))
{var inst_12346 = (state_12366[8]);var state_12366__$1 = state_12366;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12366__$1,11,out,inst_12346);
} else
{if((state_val_12367 === 10))
{var inst_12358 = (state_12366[2]);var state_12366__$1 = state_12366;var statearr_12380_12399 = state_12366__$1;(statearr_12380_12399[2] = inst_12358);
(statearr_12380_12399[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12367 === 11))
{var inst_12338 = (state_12366[7]);var inst_12355 = (state_12366[2]);var tmp12379 = inst_12338;var inst_12338__$1 = tmp12379;var state_12366__$1 = (function (){var statearr_12381 = state_12366;(statearr_12381[11] = inst_12355);
(statearr_12381[7] = inst_12338__$1);
return statearr_12381;
})();var statearr_12382_12400 = state_12366__$1;(statearr_12382_12400[2] = null);
(statearr_12382_12400[1] = 2);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_12386 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12386[0] = state_machine__6871__auto__);
(statearr_12386[1] = 1);
return statearr_12386;
});
var state_machine__6871__auto____1 = (function (state_12366){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12366);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12387){if((e12387 instanceof Object))
{var ex__6874__auto__ = e12387;var statearr_12388_12401 = state_12366;(statearr_12388_12401[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12366);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12402 = state_12366;
state_12366 = G__12402;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12366){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12389 = f__6886__auto__.call(null);(statearr_12389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12390);
return statearr_12389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12495 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12472){var state_val_12473 = (state_12472[1]);if((state_val_12473 === 1))
{var inst_12449 = 0;var state_12472__$1 = (function (){var statearr_12474 = state_12472;(statearr_12474[7] = inst_12449);
return statearr_12474;
})();var statearr_12475_12496 = state_12472__$1;(statearr_12475_12496[2] = null);
(statearr_12475_12496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12473 === 2))
{var inst_12449 = (state_12472[7]);var inst_12451 = (inst_12449 < n);var state_12472__$1 = state_12472;if(cljs.core.truth_(inst_12451))
{var statearr_12476_12497 = state_12472__$1;(statearr_12476_12497[1] = 4);
} else
{var statearr_12477_12498 = state_12472__$1;(statearr_12477_12498[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12473 === 3))
{var inst_12469 = (state_12472[2]);var inst_12470 = cljs.core.async.close_BANG_.call(null,out);var state_12472__$1 = (function (){var statearr_12478 = state_12472;(statearr_12478[8] = inst_12469);
return statearr_12478;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12472__$1,inst_12470);
} else
{if((state_val_12473 === 4))
{var state_12472__$1 = state_12472;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12472__$1,7,ch);
} else
{if((state_val_12473 === 5))
{var state_12472__$1 = state_12472;var statearr_12479_12499 = state_12472__$1;(statearr_12479_12499[2] = null);
(statearr_12479_12499[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12473 === 6))
{var inst_12467 = (state_12472[2]);var state_12472__$1 = state_12472;var statearr_12480_12500 = state_12472__$1;(statearr_12480_12500[2] = inst_12467);
(statearr_12480_12500[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12473 === 7))
{var inst_12454 = (state_12472[9]);var inst_12454__$1 = (state_12472[2]);var inst_12455 = (inst_12454__$1 == null);var inst_12456 = cljs.core.not.call(null,inst_12455);var state_12472__$1 = (function (){var statearr_12481 = state_12472;(statearr_12481[9] = inst_12454__$1);
return statearr_12481;
})();if(inst_12456)
{var statearr_12482_12501 = state_12472__$1;(statearr_12482_12501[1] = 8);
} else
{var statearr_12483_12502 = state_12472__$1;(statearr_12483_12502[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12473 === 8))
{var inst_12454 = (state_12472[9]);var state_12472__$1 = state_12472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12472__$1,11,out,inst_12454);
} else
{if((state_val_12473 === 9))
{var state_12472__$1 = state_12472;var statearr_12484_12503 = state_12472__$1;(statearr_12484_12503[2] = null);
(statearr_12484_12503[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12473 === 10))
{var inst_12464 = (state_12472[2]);var state_12472__$1 = state_12472;var statearr_12485_12504 = state_12472__$1;(statearr_12485_12504[2] = inst_12464);
(statearr_12485_12504[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12473 === 11))
{var inst_12449 = (state_12472[7]);var inst_12459 = (state_12472[2]);var inst_12460 = (inst_12449 + 1);var inst_12449__$1 = inst_12460;var state_12472__$1 = (function (){var statearr_12486 = state_12472;(statearr_12486[10] = inst_12459);
(statearr_12486[7] = inst_12449__$1);
return statearr_12486;
})();var statearr_12487_12505 = state_12472__$1;(statearr_12487_12505[2] = null);
(statearr_12487_12505[1] = 2);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_12491 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12491[0] = state_machine__6871__auto__);
(statearr_12491[1] = 1);
return statearr_12491;
});
var state_machine__6871__auto____1 = (function (state_12472){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12472);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12492){if((e12492 instanceof Object))
{var ex__6874__auto__ = e12492;var statearr_12493_12506 = state_12472;(statearr_12493_12506[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12507 = state_12472;
state_12472 = G__12507;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12472){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12494 = f__6886__auto__.call(null);(statearr_12494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12495);
return statearr_12494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12604 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12579){var state_val_12580 = (state_12579[1]);if((state_val_12580 === 1))
{var inst_12556 = null;var state_12579__$1 = (function (){var statearr_12581 = state_12579;(statearr_12581[7] = inst_12556);
return statearr_12581;
})();var statearr_12582_12605 = state_12579__$1;(statearr_12582_12605[2] = null);
(statearr_12582_12605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12580 === 2))
{var state_12579__$1 = state_12579;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12579__$1,4,ch);
} else
{if((state_val_12580 === 3))
{var inst_12576 = (state_12579[2]);var inst_12577 = cljs.core.async.close_BANG_.call(null,out);var state_12579__$1 = (function (){var statearr_12583 = state_12579;(statearr_12583[8] = inst_12576);
return statearr_12583;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12579__$1,inst_12577);
} else
{if((state_val_12580 === 4))
{var inst_12559 = (state_12579[9]);var inst_12559__$1 = (state_12579[2]);var inst_12560 = (inst_12559__$1 == null);var inst_12561 = cljs.core.not.call(null,inst_12560);var state_12579__$1 = (function (){var statearr_12584 = state_12579;(statearr_12584[9] = inst_12559__$1);
return statearr_12584;
})();if(inst_12561)
{var statearr_12585_12606 = state_12579__$1;(statearr_12585_12606[1] = 5);
} else
{var statearr_12586_12607 = state_12579__$1;(statearr_12586_12607[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12580 === 5))
{var inst_12556 = (state_12579[7]);var inst_12559 = (state_12579[9]);var inst_12563 = cljs.core._EQ_.call(null,inst_12559,inst_12556);var state_12579__$1 = state_12579;if(inst_12563)
{var statearr_12587_12608 = state_12579__$1;(statearr_12587_12608[1] = 8);
} else
{var statearr_12588_12609 = state_12579__$1;(statearr_12588_12609[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12580 === 6))
{var state_12579__$1 = state_12579;var statearr_12590_12610 = state_12579__$1;(statearr_12590_12610[2] = null);
(statearr_12590_12610[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12580 === 7))
{var inst_12574 = (state_12579[2]);var state_12579__$1 = state_12579;var statearr_12591_12611 = state_12579__$1;(statearr_12591_12611[2] = inst_12574);
(statearr_12591_12611[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12580 === 8))
{var inst_12556 = (state_12579[7]);var tmp12589 = inst_12556;var inst_12556__$1 = tmp12589;var state_12579__$1 = (function (){var statearr_12592 = state_12579;(statearr_12592[7] = inst_12556__$1);
return statearr_12592;
})();var statearr_12593_12612 = state_12579__$1;(statearr_12593_12612[2] = null);
(statearr_12593_12612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12580 === 9))
{var inst_12559 = (state_12579[9]);var state_12579__$1 = state_12579;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12579__$1,11,out,inst_12559);
} else
{if((state_val_12580 === 10))
{var inst_12571 = (state_12579[2]);var state_12579__$1 = state_12579;var statearr_12594_12613 = state_12579__$1;(statearr_12594_12613[2] = inst_12571);
(statearr_12594_12613[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12580 === 11))
{var inst_12559 = (state_12579[9]);var inst_12568 = (state_12579[2]);var inst_12556 = inst_12559;var state_12579__$1 = (function (){var statearr_12595 = state_12579;(statearr_12595[10] = inst_12568);
(statearr_12595[7] = inst_12556);
return statearr_12595;
})();var statearr_12596_12614 = state_12579__$1;(statearr_12596_12614[2] = null);
(statearr_12596_12614[1] = 2);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_12600 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12600[0] = state_machine__6871__auto__);
(statearr_12600[1] = 1);
return statearr_12600;
});
var state_machine__6871__auto____1 = (function (state_12579){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12579);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12601){if((e12601 instanceof Object))
{var ex__6874__auto__ = e12601;var statearr_12602_12615 = state_12579;(statearr_12602_12615[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12579);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12616 = state_12579;
state_12579 = G__12616;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12579){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12603 = f__6886__auto__.call(null);(statearr_12603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12604);
return statearr_12603;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12751 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12721){var state_val_12722 = (state_12721[1]);if((state_val_12722 === 1))
{var inst_12684 = (new Array(n));var inst_12685 = inst_12684;var inst_12686 = 0;var state_12721__$1 = (function (){var statearr_12723 = state_12721;(statearr_12723[7] = inst_12686);
(statearr_12723[8] = inst_12685);
return statearr_12723;
})();var statearr_12724_12752 = state_12721__$1;(statearr_12724_12752[2] = null);
(statearr_12724_12752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 2))
{var state_12721__$1 = state_12721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12721__$1,4,ch);
} else
{if((state_val_12722 === 3))
{var inst_12719 = (state_12721[2]);var state_12721__$1 = state_12721;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12721__$1,inst_12719);
} else
{if((state_val_12722 === 4))
{var inst_12689 = (state_12721[9]);var inst_12689__$1 = (state_12721[2]);var inst_12690 = (inst_12689__$1 == null);var inst_12691 = cljs.core.not.call(null,inst_12690);var state_12721__$1 = (function (){var statearr_12725 = state_12721;(statearr_12725[9] = inst_12689__$1);
return statearr_12725;
})();if(inst_12691)
{var statearr_12726_12753 = state_12721__$1;(statearr_12726_12753[1] = 5);
} else
{var statearr_12727_12754 = state_12721__$1;(statearr_12727_12754[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 5))
{var inst_12689 = (state_12721[9]);var inst_12694 = (state_12721[10]);var inst_12686 = (state_12721[7]);var inst_12685 = (state_12721[8]);var inst_12693 = (inst_12685[inst_12686] = inst_12689);var inst_12694__$1 = (inst_12686 + 1);var inst_12695 = (inst_12694__$1 < n);var state_12721__$1 = (function (){var statearr_12728 = state_12721;(statearr_12728[11] = inst_12693);
(statearr_12728[10] = inst_12694__$1);
return statearr_12728;
})();if(cljs.core.truth_(inst_12695))
{var statearr_12729_12755 = state_12721__$1;(statearr_12729_12755[1] = 8);
} else
{var statearr_12730_12756 = state_12721__$1;(statearr_12730_12756[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 6))
{var inst_12686 = (state_12721[7]);var inst_12707 = (inst_12686 > 0);var state_12721__$1 = state_12721;if(cljs.core.truth_(inst_12707))
{var statearr_12732_12757 = state_12721__$1;(statearr_12732_12757[1] = 12);
} else
{var statearr_12733_12758 = state_12721__$1;(statearr_12733_12758[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 7))
{var inst_12717 = (state_12721[2]);var state_12721__$1 = state_12721;var statearr_12734_12759 = state_12721__$1;(statearr_12734_12759[2] = inst_12717);
(statearr_12734_12759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 8))
{var inst_12694 = (state_12721[10]);var inst_12685 = (state_12721[8]);var tmp12731 = inst_12685;var inst_12685__$1 = tmp12731;var inst_12686 = inst_12694;var state_12721__$1 = (function (){var statearr_12735 = state_12721;(statearr_12735[7] = inst_12686);
(statearr_12735[8] = inst_12685__$1);
return statearr_12735;
})();var statearr_12736_12760 = state_12721__$1;(statearr_12736_12760[2] = null);
(statearr_12736_12760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 9))
{var inst_12685 = (state_12721[8]);var inst_12699 = cljs.core.vec.call(null,inst_12685);var state_12721__$1 = state_12721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12721__$1,11,out,inst_12699);
} else
{if((state_val_12722 === 10))
{var inst_12705 = (state_12721[2]);var state_12721__$1 = state_12721;var statearr_12737_12761 = state_12721__$1;(statearr_12737_12761[2] = inst_12705);
(statearr_12737_12761[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 11))
{var inst_12701 = (state_12721[2]);var inst_12702 = (new Array(n));var inst_12685 = inst_12702;var inst_12686 = 0;var state_12721__$1 = (function (){var statearr_12738 = state_12721;(statearr_12738[12] = inst_12701);
(statearr_12738[7] = inst_12686);
(statearr_12738[8] = inst_12685);
return statearr_12738;
})();var statearr_12739_12762 = state_12721__$1;(statearr_12739_12762[2] = null);
(statearr_12739_12762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 12))
{var inst_12685 = (state_12721[8]);var inst_12709 = cljs.core.vec.call(null,inst_12685);var state_12721__$1 = state_12721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12721__$1,15,out,inst_12709);
} else
{if((state_val_12722 === 13))
{var state_12721__$1 = state_12721;var statearr_12740_12763 = state_12721__$1;(statearr_12740_12763[2] = null);
(statearr_12740_12763[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 14))
{var inst_12714 = (state_12721[2]);var inst_12715 = cljs.core.async.close_BANG_.call(null,out);var state_12721__$1 = (function (){var statearr_12741 = state_12721;(statearr_12741[13] = inst_12714);
return statearr_12741;
})();var statearr_12742_12764 = state_12721__$1;(statearr_12742_12764[2] = inst_12715);
(statearr_12742_12764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12722 === 15))
{var inst_12711 = (state_12721[2]);var state_12721__$1 = state_12721;var statearr_12743_12765 = state_12721__$1;(statearr_12743_12765[2] = inst_12711);
(statearr_12743_12765[1] = 14);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_12747 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12747[0] = state_machine__6871__auto__);
(statearr_12747[1] = 1);
return statearr_12747;
});
var state_machine__6871__auto____1 = (function (state_12721){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12721);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12748){if((e12748 instanceof Object))
{var ex__6874__auto__ = e12748;var statearr_12749_12766 = state_12721;(statearr_12749_12766[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12748;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12767 = state_12721;
state_12721 = G__12767;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12721){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12750 = f__6886__auto__.call(null);(statearr_12750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12751);
return statearr_12750;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12910 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12880){var state_val_12881 = (state_12880[1]);if((state_val_12881 === 1))
{var inst_12839 = [];var inst_12840 = inst_12839;var inst_12841 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12880__$1 = (function (){var statearr_12882 = state_12880;(statearr_12882[7] = inst_12841);
(statearr_12882[8] = inst_12840);
return statearr_12882;
})();var statearr_12883_12911 = state_12880__$1;(statearr_12883_12911[2] = null);
(statearr_12883_12911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 2))
{var state_12880__$1 = state_12880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12880__$1,4,ch);
} else
{if((state_val_12881 === 3))
{var inst_12878 = (state_12880[2]);var state_12880__$1 = state_12880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12880__$1,inst_12878);
} else
{if((state_val_12881 === 4))
{var inst_12844 = (state_12880[9]);var inst_12844__$1 = (state_12880[2]);var inst_12845 = (inst_12844__$1 == null);var inst_12846 = cljs.core.not.call(null,inst_12845);var state_12880__$1 = (function (){var statearr_12884 = state_12880;(statearr_12884[9] = inst_12844__$1);
return statearr_12884;
})();if(inst_12846)
{var statearr_12885_12912 = state_12880__$1;(statearr_12885_12912[1] = 5);
} else
{var statearr_12886_12913 = state_12880__$1;(statearr_12886_12913[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 5))
{var inst_12848 = (state_12880[10]);var inst_12844 = (state_12880[9]);var inst_12841 = (state_12880[7]);var inst_12848__$1 = f.call(null,inst_12844);var inst_12849 = cljs.core._EQ_.call(null,inst_12848__$1,inst_12841);var inst_12850 = cljs.core.keyword_identical_QMARK_.call(null,inst_12841,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12851 = (inst_12849) || (inst_12850);var state_12880__$1 = (function (){var statearr_12887 = state_12880;(statearr_12887[10] = inst_12848__$1);
return statearr_12887;
})();if(cljs.core.truth_(inst_12851))
{var statearr_12888_12914 = state_12880__$1;(statearr_12888_12914[1] = 8);
} else
{var statearr_12889_12915 = state_12880__$1;(statearr_12889_12915[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 6))
{var inst_12840 = (state_12880[8]);var inst_12865 = inst_12840.length;var inst_12866 = (inst_12865 > 0);var state_12880__$1 = state_12880;if(cljs.core.truth_(inst_12866))
{var statearr_12891_12916 = state_12880__$1;(statearr_12891_12916[1] = 12);
} else
{var statearr_12892_12917 = state_12880__$1;(statearr_12892_12917[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 7))
{var inst_12876 = (state_12880[2]);var state_12880__$1 = state_12880;var statearr_12893_12918 = state_12880__$1;(statearr_12893_12918[2] = inst_12876);
(statearr_12893_12918[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 8))
{var inst_12848 = (state_12880[10]);var inst_12844 = (state_12880[9]);var inst_12840 = (state_12880[8]);var inst_12853 = inst_12840.push(inst_12844);var tmp12890 = inst_12840;var inst_12840__$1 = tmp12890;var inst_12841 = inst_12848;var state_12880__$1 = (function (){var statearr_12894 = state_12880;(statearr_12894[11] = inst_12853);
(statearr_12894[7] = inst_12841);
(statearr_12894[8] = inst_12840__$1);
return statearr_12894;
})();var statearr_12895_12919 = state_12880__$1;(statearr_12895_12919[2] = null);
(statearr_12895_12919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 9))
{var inst_12840 = (state_12880[8]);var inst_12856 = cljs.core.vec.call(null,inst_12840);var state_12880__$1 = state_12880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12880__$1,11,out,inst_12856);
} else
{if((state_val_12881 === 10))
{var inst_12863 = (state_12880[2]);var state_12880__$1 = state_12880;var statearr_12896_12920 = state_12880__$1;(statearr_12896_12920[2] = inst_12863);
(statearr_12896_12920[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 11))
{var inst_12848 = (state_12880[10]);var inst_12844 = (state_12880[9]);var inst_12858 = (state_12880[2]);var inst_12859 = [];var inst_12860 = inst_12859.push(inst_12844);var inst_12840 = inst_12859;var inst_12841 = inst_12848;var state_12880__$1 = (function (){var statearr_12897 = state_12880;(statearr_12897[12] = inst_12860);
(statearr_12897[13] = inst_12858);
(statearr_12897[7] = inst_12841);
(statearr_12897[8] = inst_12840);
return statearr_12897;
})();var statearr_12898_12921 = state_12880__$1;(statearr_12898_12921[2] = null);
(statearr_12898_12921[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 12))
{var inst_12840 = (state_12880[8]);var inst_12868 = cljs.core.vec.call(null,inst_12840);var state_12880__$1 = state_12880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12880__$1,15,out,inst_12868);
} else
{if((state_val_12881 === 13))
{var state_12880__$1 = state_12880;var statearr_12899_12922 = state_12880__$1;(statearr_12899_12922[2] = null);
(statearr_12899_12922[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 14))
{var inst_12873 = (state_12880[2]);var inst_12874 = cljs.core.async.close_BANG_.call(null,out);var state_12880__$1 = (function (){var statearr_12900 = state_12880;(statearr_12900[14] = inst_12873);
return statearr_12900;
})();var statearr_12901_12923 = state_12880__$1;(statearr_12901_12923[2] = inst_12874);
(statearr_12901_12923[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12881 === 15))
{var inst_12870 = (state_12880[2]);var state_12880__$1 = state_12880;var statearr_12902_12924 = state_12880__$1;(statearr_12902_12924[2] = inst_12870);
(statearr_12902_12924[1] = 14);
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
});return ((function (switch__6870__auto__){
return (function() {
var state_machine__6871__auto__ = null;
var state_machine__6871__auto____0 = (function (){var statearr_12906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12906[0] = state_machine__6871__auto__);
(statearr_12906[1] = 1);
return statearr_12906;
});
var state_machine__6871__auto____1 = (function (state_12880){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12880);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12907){if((e12907 instanceof Object))
{var ex__6874__auto__ = e12907;var statearr_12908_12925 = state_12880;(statearr_12908_12925[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12926 = state_12880;
state_12880 = G__12926;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12880){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12909 = f__6886__auto__.call(null);(statearr_12909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12910);
return statearr_12909;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6887__auto__);
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