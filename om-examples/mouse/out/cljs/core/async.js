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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10369 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10369 = (function (f,fn_handler,meta10370){
this.f = f;
this.fn_handler = fn_handler;
this.meta10370 = meta10370;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10369.cljs$lang$type = true;
cljs.core.async.t10369.cljs$lang$ctorStr = "cljs.core.async/t10369";
cljs.core.async.t10369.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10369");
});
cljs.core.async.t10369.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10369.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t10369.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10371){var self__ = this;
var _10371__$1 = this;return self__.meta10370;
});
cljs.core.async.t10369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10371,meta10370__$1){var self__ = this;
var _10371__$1 = this;return (new cljs.core.async.t10369(self__.f,self__.fn_handler,meta10370__$1));
});
cljs.core.async.__GT_t10369 = (function __GT_t10369(f__$1,fn_handler__$1,meta10370){return (new cljs.core.async.t10369(f__$1,fn_handler__$1,meta10370));
});
}
return (new cljs.core.async.t10369(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10373 = buff;if(G__10373)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__10373.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10373.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10373);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10373);
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
{var val_10374 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10374);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10374);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4919__auto___10375 = n;var x_10376 = 0;while(true){
if((x_10376 < n__4919__auto___10375))
{(a[x_10376] = 0);
{
var G__10377 = (x_10376 + 1);
x_10376 = G__10377;
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
var G__10378 = (i + 1);
i = G__10378;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10382 = (function (flag,alt_flag,meta10383){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10383 = meta10383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10382.cljs$lang$type = true;
cljs.core.async.t10382.cljs$lang$ctorStr = "cljs.core.async/t10382";
cljs.core.async.t10382.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10382");
});
cljs.core.async.t10382.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10382.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10384){var self__ = this;
var _10384__$1 = this;return self__.meta10383;
});
cljs.core.async.t10382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10384,meta10383__$1){var self__ = this;
var _10384__$1 = this;return (new cljs.core.async.t10382(self__.flag,self__.alt_flag,meta10383__$1));
});
cljs.core.async.__GT_t10382 = (function __GT_t10382(flag__$1,alt_flag__$1,meta10383){return (new cljs.core.async.t10382(flag__$1,alt_flag__$1,meta10383));
});
}
return (new cljs.core.async.t10382(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10388 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10388 = (function (cb,flag,alt_handler,meta10389){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10389 = meta10389;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10388.cljs$lang$type = true;
cljs.core.async.t10388.cljs$lang$ctorStr = "cljs.core.async/t10388";
cljs.core.async.t10388.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10388");
});
cljs.core.async.t10388.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10388.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10388.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10388.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10390){var self__ = this;
var _10390__$1 = this;return self__.meta10389;
});
cljs.core.async.t10388.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10390,meta10389__$1){var self__ = this;
var _10390__$1 = this;return (new cljs.core.async.t10388(self__.cb,self__.flag,self__.alt_handler,meta10389__$1));
});
cljs.core.async.__GT_t10388 = (function __GT_t10388(cb__$1,flag__$1,alt_handler__$1,meta10389){return (new cljs.core.async.t10388(cb__$1,flag__$1,alt_handler__$1,meta10389));
});
}
return (new cljs.core.async.t10388(cb,flag,alt_handler,null));
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
return (function (p1__10391_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10391_SHARP_,port], null));
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
var G__10392 = (i + 1);
i = G__10392;
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
var alts_BANG___delegate = function (ports,p__10393){var map__10395 = p__10393;var map__10395__$1 = ((cljs.core.seq_QMARK_.call(null,map__10395))?cljs.core.apply.call(null,cljs.core.hash_map,map__10395):map__10395);var opts = map__10395__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10393 = null;if (arguments.length > 1) {
  p__10393 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10393);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10396){
var ports = cljs.core.first(arglist__10396);
var p__10393 = cljs.core.rest(arglist__10396);
return alts_BANG___delegate(ports,p__10393);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10404 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10404 = (function (ch,f,map_LT_,meta10405){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10405 = meta10405;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10404.cljs$lang$type = true;
cljs.core.async.t10404.cljs$lang$ctorStr = "cljs.core.async/t10404";
cljs.core.async.t10404.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10404");
});
cljs.core.async.t10404.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10404.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10404.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10404.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10407 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10407 = (function (fn1,_,meta10405,ch,f,map_LT_,meta10408){
this.fn1 = fn1;
this._ = _;
this.meta10405 = meta10405;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10408 = meta10408;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10407.cljs$lang$type = true;
cljs.core.async.t10407.cljs$lang$ctorStr = "cljs.core.async/t10407";
cljs.core.async.t10407.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10407");
});
cljs.core.async.t10407.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10407.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10407.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10407.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10397_SHARP_){return f1.call(null,(((p1__10397_SHARP_ == null))?null:self__.f.call(null,p1__10397_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10407.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10409){var self__ = this;
var _10409__$1 = this;return self__.meta10408;
});
cljs.core.async.t10407.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10409,meta10408__$1){var self__ = this;
var _10409__$1 = this;return (new cljs.core.async.t10407(self__.fn1,self__._,self__.meta10405,self__.ch,self__.f,self__.map_LT_,meta10408__$1));
});
cljs.core.async.__GT_t10407 = (function __GT_t10407(fn1__$1,___$2,meta10405__$1,ch__$2,f__$2,map_LT___$2,meta10408){return (new cljs.core.async.t10407(fn1__$1,___$2,meta10405__$1,ch__$2,f__$2,map_LT___$2,meta10408));
});
}
return (new cljs.core.async.t10407(fn1,___$1,self__.meta10405,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10404.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10404.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10404.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10406){var self__ = this;
var _10406__$1 = this;return self__.meta10405;
});
cljs.core.async.t10404.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10406,meta10405__$1){var self__ = this;
var _10406__$1 = this;return (new cljs.core.async.t10404(self__.ch,self__.f,self__.map_LT_,meta10405__$1));
});
cljs.core.async.__GT_t10404 = (function __GT_t10404(ch__$1,f__$1,map_LT___$1,meta10405){return (new cljs.core.async.t10404(ch__$1,f__$1,map_LT___$1,meta10405));
});
}
return (new cljs.core.async.t10404(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10413 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10413 = (function (ch,f,map_GT_,meta10414){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10414 = meta10414;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10413.cljs$lang$type = true;
cljs.core.async.t10413.cljs$lang$ctorStr = "cljs.core.async/t10413";
cljs.core.async.t10413.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10413");
});
cljs.core.async.t10413.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10413.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10413.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10413.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10413.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10413.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10415){var self__ = this;
var _10415__$1 = this;return self__.meta10414;
});
cljs.core.async.t10413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10415,meta10414__$1){var self__ = this;
var _10415__$1 = this;return (new cljs.core.async.t10413(self__.ch,self__.f,self__.map_GT_,meta10414__$1));
});
cljs.core.async.__GT_t10413 = (function __GT_t10413(ch__$1,f__$1,map_GT___$1,meta10414){return (new cljs.core.async.t10413(ch__$1,f__$1,map_GT___$1,meta10414));
});
}
return (new cljs.core.async.t10413(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10419 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10419 = (function (ch,p,filter_GT_,meta10420){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10420 = meta10420;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10419.cljs$lang$type = true;
cljs.core.async.t10419.cljs$lang$ctorStr = "cljs.core.async/t10419";
cljs.core.async.t10419.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10419");
});
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10419.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10421){var self__ = this;
var _10421__$1 = this;return self__.meta10420;
});
cljs.core.async.t10419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10421,meta10420__$1){var self__ = this;
var _10421__$1 = this;return (new cljs.core.async.t10419(self__.ch,self__.p,self__.filter_GT_,meta10420__$1));
});
cljs.core.async.__GT_t10419 = (function __GT_t10419(ch__$1,p__$1,filter_GT___$1,meta10420){return (new cljs.core.async.t10419(ch__$1,p__$1,filter_GT___$1,meta10420));
});
}
return (new cljs.core.async.t10419(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___10504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10483){var state_val_10484 = (state_10483[1]);if((state_val_10484 === 1))
{var state_10483__$1 = state_10483;var statearr_10485_10505 = state_10483__$1;(statearr_10485_10505[2] = null);
(statearr_10485_10505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10484 === 2))
{var state_10483__$1 = state_10483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10483__$1,4,ch);
} else
{if((state_val_10484 === 3))
{var inst_10481 = (state_10483[2]);var state_10483__$1 = state_10483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10483__$1,inst_10481);
} else
{if((state_val_10484 === 4))
{var inst_10465 = (state_10483[7]);var inst_10465__$1 = (state_10483[2]);var inst_10466 = (inst_10465__$1 == null);var state_10483__$1 = (function (){var statearr_10486 = state_10483;(statearr_10486[7] = inst_10465__$1);
return statearr_10486;
})();if(cljs.core.truth_(inst_10466))
{var statearr_10487_10506 = state_10483__$1;(statearr_10487_10506[1] = 5);
} else
{var statearr_10488_10507 = state_10483__$1;(statearr_10488_10507[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10484 === 5))
{var inst_10468 = cljs.core.async.close_BANG_.call(null,out);var state_10483__$1 = state_10483;var statearr_10489_10508 = state_10483__$1;(statearr_10489_10508[2] = inst_10468);
(statearr_10489_10508[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10484 === 6))
{var inst_10465 = (state_10483[7]);var inst_10470 = p.call(null,inst_10465);var state_10483__$1 = state_10483;if(cljs.core.truth_(inst_10470))
{var statearr_10490_10509 = state_10483__$1;(statearr_10490_10509[1] = 8);
} else
{var statearr_10491_10510 = state_10483__$1;(statearr_10491_10510[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10484 === 7))
{var inst_10479 = (state_10483[2]);var state_10483__$1 = state_10483;var statearr_10492_10511 = state_10483__$1;(statearr_10492_10511[2] = inst_10479);
(statearr_10492_10511[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10484 === 8))
{var inst_10465 = (state_10483[7]);var state_10483__$1 = state_10483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10483__$1,11,out,inst_10465);
} else
{if((state_val_10484 === 9))
{var state_10483__$1 = state_10483;var statearr_10493_10512 = state_10483__$1;(statearr_10493_10512[2] = null);
(statearr_10493_10512[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10484 === 10))
{var inst_10476 = (state_10483[2]);var state_10483__$1 = (function (){var statearr_10494 = state_10483;(statearr_10494[8] = inst_10476);
return statearr_10494;
})();var statearr_10495_10513 = state_10483__$1;(statearr_10495_10513[2] = null);
(statearr_10495_10513[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10484 === 11))
{var inst_10473 = (state_10483[2]);var state_10483__$1 = state_10483;var statearr_10496_10514 = state_10483__$1;(statearr_10496_10514[2] = inst_10473);
(statearr_10496_10514[1] = 10);
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
var state_machine__6871__auto____0 = (function (){var statearr_10500 = [null,null,null,null,null,null,null,null,null];(statearr_10500[0] = state_machine__6871__auto__);
(statearr_10500[1] = 1);
return statearr_10500;
});
var state_machine__6871__auto____1 = (function (state_10483){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10483);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10501){if((e10501 instanceof Object))
{var ex__6874__auto__ = e10501;var statearr_10502_10515 = state_10483;(statearr_10502_10515[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10516 = state_10483;
state_10483 = G__10516;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10483){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10503 = f__6886__auto__.call(null);(statearr_10503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10504);
return statearr_10503;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10668){var state_val_10669 = (state_10668[1]);if((state_val_10669 === 1))
{var state_10668__$1 = state_10668;var statearr_10670_10707 = state_10668__$1;(statearr_10670_10707[2] = null);
(statearr_10670_10707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 2))
{var state_10668__$1 = state_10668;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10668__$1,4,in$);
} else
{if((state_val_10669 === 3))
{var inst_10666 = (state_10668[2]);var state_10668__$1 = state_10668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10668__$1,inst_10666);
} else
{if((state_val_10669 === 4))
{var inst_10614 = (state_10668[7]);var inst_10614__$1 = (state_10668[2]);var inst_10615 = (inst_10614__$1 == null);var state_10668__$1 = (function (){var statearr_10671 = state_10668;(statearr_10671[7] = inst_10614__$1);
return statearr_10671;
})();if(cljs.core.truth_(inst_10615))
{var statearr_10672_10708 = state_10668__$1;(statearr_10672_10708[1] = 5);
} else
{var statearr_10673_10709 = state_10668__$1;(statearr_10673_10709[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 5))
{var inst_10617 = cljs.core.async.close_BANG_.call(null,out);var state_10668__$1 = state_10668;var statearr_10674_10710 = state_10668__$1;(statearr_10674_10710[2] = inst_10617);
(statearr_10674_10710[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 6))
{var inst_10614 = (state_10668[7]);var inst_10619 = f.call(null,inst_10614);var inst_10624 = cljs.core.seq.call(null,inst_10619);var inst_10625 = inst_10624;var inst_10626 = null;var inst_10627 = 0;var inst_10628 = 0;var state_10668__$1 = (function (){var statearr_10675 = state_10668;(statearr_10675[8] = inst_10625);
(statearr_10675[9] = inst_10627);
(statearr_10675[10] = inst_10626);
(statearr_10675[11] = inst_10628);
return statearr_10675;
})();var statearr_10676_10711 = state_10668__$1;(statearr_10676_10711[2] = null);
(statearr_10676_10711[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 7))
{var inst_10664 = (state_10668[2]);var state_10668__$1 = state_10668;var statearr_10677_10712 = state_10668__$1;(statearr_10677_10712[2] = inst_10664);
(statearr_10677_10712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 8))
{var inst_10627 = (state_10668[9]);var inst_10628 = (state_10668[11]);var inst_10630 = (inst_10628 < inst_10627);var inst_10631 = inst_10630;var state_10668__$1 = state_10668;if(cljs.core.truth_(inst_10631))
{var statearr_10678_10713 = state_10668__$1;(statearr_10678_10713[1] = 10);
} else
{var statearr_10679_10714 = state_10668__$1;(statearr_10679_10714[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 9))
{var inst_10661 = (state_10668[2]);var state_10668__$1 = (function (){var statearr_10680 = state_10668;(statearr_10680[12] = inst_10661);
return statearr_10680;
})();var statearr_10681_10715 = state_10668__$1;(statearr_10681_10715[2] = null);
(statearr_10681_10715[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 10))
{var inst_10626 = (state_10668[10]);var inst_10628 = (state_10668[11]);var inst_10633 = cljs.core._nth.call(null,inst_10626,inst_10628);var state_10668__$1 = state_10668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10668__$1,13,out,inst_10633);
} else
{if((state_val_10669 === 11))
{var inst_10625 = (state_10668[8]);var inst_10639 = (state_10668[13]);var inst_10639__$1 = cljs.core.seq.call(null,inst_10625);var state_10668__$1 = (function (){var statearr_10685 = state_10668;(statearr_10685[13] = inst_10639__$1);
return statearr_10685;
})();if(inst_10639__$1)
{var statearr_10686_10716 = state_10668__$1;(statearr_10686_10716[1] = 14);
} else
{var statearr_10687_10717 = state_10668__$1;(statearr_10687_10717[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 12))
{var inst_10659 = (state_10668[2]);var state_10668__$1 = state_10668;var statearr_10688_10718 = state_10668__$1;(statearr_10688_10718[2] = inst_10659);
(statearr_10688_10718[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 13))
{var inst_10625 = (state_10668[8]);var inst_10627 = (state_10668[9]);var inst_10626 = (state_10668[10]);var inst_10628 = (state_10668[11]);var inst_10635 = (state_10668[2]);var inst_10636 = (inst_10628 + 1);var tmp10682 = inst_10625;var tmp10683 = inst_10627;var tmp10684 = inst_10626;var inst_10625__$1 = tmp10682;var inst_10626__$1 = tmp10684;var inst_10627__$1 = tmp10683;var inst_10628__$1 = inst_10636;var state_10668__$1 = (function (){var statearr_10689 = state_10668;(statearr_10689[8] = inst_10625__$1);
(statearr_10689[9] = inst_10627__$1);
(statearr_10689[10] = inst_10626__$1);
(statearr_10689[11] = inst_10628__$1);
(statearr_10689[14] = inst_10635);
return statearr_10689;
})();var statearr_10690_10719 = state_10668__$1;(statearr_10690_10719[2] = null);
(statearr_10690_10719[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 14))
{var inst_10639 = (state_10668[13]);var inst_10641 = cljs.core.chunked_seq_QMARK_.call(null,inst_10639);var state_10668__$1 = state_10668;if(inst_10641)
{var statearr_10691_10720 = state_10668__$1;(statearr_10691_10720[1] = 17);
} else
{var statearr_10692_10721 = state_10668__$1;(statearr_10692_10721[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 15))
{var state_10668__$1 = state_10668;var statearr_10693_10722 = state_10668__$1;(statearr_10693_10722[2] = null);
(statearr_10693_10722[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 16))
{var inst_10657 = (state_10668[2]);var state_10668__$1 = state_10668;var statearr_10694_10723 = state_10668__$1;(statearr_10694_10723[2] = inst_10657);
(statearr_10694_10723[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 17))
{var inst_10639 = (state_10668[13]);var inst_10643 = cljs.core.chunk_first.call(null,inst_10639);var inst_10644 = cljs.core.chunk_rest.call(null,inst_10639);var inst_10645 = cljs.core.count.call(null,inst_10643);var inst_10625 = inst_10644;var inst_10626 = inst_10643;var inst_10627 = inst_10645;var inst_10628 = 0;var state_10668__$1 = (function (){var statearr_10695 = state_10668;(statearr_10695[8] = inst_10625);
(statearr_10695[9] = inst_10627);
(statearr_10695[10] = inst_10626);
(statearr_10695[11] = inst_10628);
return statearr_10695;
})();var statearr_10696_10724 = state_10668__$1;(statearr_10696_10724[2] = null);
(statearr_10696_10724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 18))
{var inst_10639 = (state_10668[13]);var inst_10648 = cljs.core.first.call(null,inst_10639);var state_10668__$1 = state_10668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10668__$1,20,out,inst_10648);
} else
{if((state_val_10669 === 19))
{var inst_10654 = (state_10668[2]);var state_10668__$1 = state_10668;var statearr_10697_10725 = state_10668__$1;(statearr_10697_10725[2] = inst_10654);
(statearr_10697_10725[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10669 === 20))
{var inst_10639 = (state_10668[13]);var inst_10650 = (state_10668[2]);var inst_10651 = cljs.core.next.call(null,inst_10639);var inst_10625 = inst_10651;var inst_10626 = null;var inst_10627 = 0;var inst_10628 = 0;var state_10668__$1 = (function (){var statearr_10698 = state_10668;(statearr_10698[15] = inst_10650);
(statearr_10698[8] = inst_10625);
(statearr_10698[9] = inst_10627);
(statearr_10698[10] = inst_10626);
(statearr_10698[11] = inst_10628);
return statearr_10698;
})();var statearr_10699_10726 = state_10668__$1;(statearr_10699_10726[2] = null);
(statearr_10699_10726[1] = 8);
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
var state_machine__6871__auto____0 = (function (){var statearr_10703 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10703[0] = state_machine__6871__auto__);
(statearr_10703[1] = 1);
return statearr_10703;
});
var state_machine__6871__auto____1 = (function (state_10668){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10668);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10704){if((e10704 instanceof Object))
{var ex__6874__auto__ = e10704;var statearr_10705_10727 = state_10668;(statearr_10705_10727[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10704;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10728 = state_10668;
state_10668 = G__10728;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10668){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10706 = f__6886__auto__.call(null);(statearr_10706[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_10706;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6885__auto___10809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10788){var state_val_10789 = (state_10788[1]);if((state_val_10789 === 1))
{var state_10788__$1 = state_10788;var statearr_10790_10810 = state_10788__$1;(statearr_10790_10810[2] = null);
(statearr_10790_10810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10789 === 2))
{var state_10788__$1 = state_10788;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10788__$1,4,from);
} else
{if((state_val_10789 === 3))
{var inst_10786 = (state_10788[2]);var state_10788__$1 = state_10788;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10788__$1,inst_10786);
} else
{if((state_val_10789 === 4))
{var inst_10771 = (state_10788[7]);var inst_10771__$1 = (state_10788[2]);var inst_10772 = (inst_10771__$1 == null);var state_10788__$1 = (function (){var statearr_10791 = state_10788;(statearr_10791[7] = inst_10771__$1);
return statearr_10791;
})();if(cljs.core.truth_(inst_10772))
{var statearr_10792_10811 = state_10788__$1;(statearr_10792_10811[1] = 5);
} else
{var statearr_10793_10812 = state_10788__$1;(statearr_10793_10812[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10789 === 5))
{var state_10788__$1 = state_10788;if(cljs.core.truth_(close_QMARK_))
{var statearr_10794_10813 = state_10788__$1;(statearr_10794_10813[1] = 8);
} else
{var statearr_10795_10814 = state_10788__$1;(statearr_10795_10814[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10789 === 6))
{var inst_10771 = (state_10788[7]);var state_10788__$1 = state_10788;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10788__$1,11,to,inst_10771);
} else
{if((state_val_10789 === 7))
{var inst_10784 = (state_10788[2]);var state_10788__$1 = state_10788;var statearr_10796_10815 = state_10788__$1;(statearr_10796_10815[2] = inst_10784);
(statearr_10796_10815[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10789 === 8))
{var inst_10775 = cljs.core.async.close_BANG_.call(null,to);var state_10788__$1 = state_10788;var statearr_10797_10816 = state_10788__$1;(statearr_10797_10816[2] = inst_10775);
(statearr_10797_10816[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10789 === 9))
{var state_10788__$1 = state_10788;var statearr_10798_10817 = state_10788__$1;(statearr_10798_10817[2] = null);
(statearr_10798_10817[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10789 === 10))
{var inst_10778 = (state_10788[2]);var state_10788__$1 = state_10788;var statearr_10799_10818 = state_10788__$1;(statearr_10799_10818[2] = inst_10778);
(statearr_10799_10818[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10789 === 11))
{var inst_10781 = (state_10788[2]);var state_10788__$1 = (function (){var statearr_10800 = state_10788;(statearr_10800[8] = inst_10781);
return statearr_10800;
})();var statearr_10801_10819 = state_10788__$1;(statearr_10801_10819[2] = null);
(statearr_10801_10819[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_10805 = [null,null,null,null,null,null,null,null,null];(statearr_10805[0] = state_machine__6871__auto__);
(statearr_10805[1] = 1);
return statearr_10805;
});
var state_machine__6871__auto____1 = (function (state_10788){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10788);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10806){if((e10806 instanceof Object))
{var ex__6874__auto__ = e10806;var statearr_10807_10820 = state_10788;(statearr_10807_10820[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10788);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10821 = state_10788;
state_10788 = G__10821;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10788){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10808 = f__6886__auto__.call(null);(statearr_10808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10809);
return statearr_10808;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6885__auto___10908 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10886){var state_val_10887 = (state_10886[1]);if((state_val_10887 === 1))
{var state_10886__$1 = state_10886;var statearr_10888_10909 = state_10886__$1;(statearr_10888_10909[2] = null);
(statearr_10888_10909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 2))
{var state_10886__$1 = state_10886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10886__$1,4,ch);
} else
{if((state_val_10887 === 3))
{var inst_10884 = (state_10886[2]);var state_10886__$1 = state_10886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10886__$1,inst_10884);
} else
{if((state_val_10887 === 4))
{var inst_10867 = (state_10886[7]);var inst_10867__$1 = (state_10886[2]);var inst_10868 = (inst_10867__$1 == null);var state_10886__$1 = (function (){var statearr_10889 = state_10886;(statearr_10889[7] = inst_10867__$1);
return statearr_10889;
})();if(cljs.core.truth_(inst_10868))
{var statearr_10890_10910 = state_10886__$1;(statearr_10890_10910[1] = 5);
} else
{var statearr_10891_10911 = state_10886__$1;(statearr_10891_10911[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 5))
{var inst_10870 = cljs.core.async.close_BANG_.call(null,tc);var inst_10871 = cljs.core.async.close_BANG_.call(null,fc);var state_10886__$1 = (function (){var statearr_10892 = state_10886;(statearr_10892[8] = inst_10870);
return statearr_10892;
})();var statearr_10893_10912 = state_10886__$1;(statearr_10893_10912[2] = inst_10871);
(statearr_10893_10912[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 6))
{var inst_10867 = (state_10886[7]);var inst_10873 = p.call(null,inst_10867);var state_10886__$1 = state_10886;if(cljs.core.truth_(inst_10873))
{var statearr_10894_10913 = state_10886__$1;(statearr_10894_10913[1] = 9);
} else
{var statearr_10895_10914 = state_10886__$1;(statearr_10895_10914[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 7))
{var inst_10882 = (state_10886[2]);var state_10886__$1 = state_10886;var statearr_10896_10915 = state_10886__$1;(statearr_10896_10915[2] = inst_10882);
(statearr_10896_10915[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 8))
{var inst_10879 = (state_10886[2]);var state_10886__$1 = (function (){var statearr_10897 = state_10886;(statearr_10897[9] = inst_10879);
return statearr_10897;
})();var statearr_10898_10916 = state_10886__$1;(statearr_10898_10916[2] = null);
(statearr_10898_10916[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 9))
{var state_10886__$1 = state_10886;var statearr_10899_10917 = state_10886__$1;(statearr_10899_10917[2] = tc);
(statearr_10899_10917[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 10))
{var state_10886__$1 = state_10886;var statearr_10900_10918 = state_10886__$1;(statearr_10900_10918[2] = fc);
(statearr_10900_10918[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10887 === 11))
{var inst_10867 = (state_10886[7]);var inst_10877 = (state_10886[2]);var state_10886__$1 = state_10886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10886__$1,8,inst_10877,inst_10867);
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
var state_machine__6871__auto____0 = (function (){var statearr_10904 = [null,null,null,null,null,null,null,null,null,null];(statearr_10904[0] = state_machine__6871__auto__);
(statearr_10904[1] = 1);
return statearr_10904;
});
var state_machine__6871__auto____1 = (function (state_10886){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10886);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10905){if((e10905 instanceof Object))
{var ex__6874__auto__ = e10905;var statearr_10906_10919 = state_10886;(statearr_10906_10919[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10905;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10920 = state_10886;
state_10886 = G__10920;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10886){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10907 = f__6886__auto__.call(null);(statearr_10907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10908);
return statearr_10907;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10967){var state_val_10968 = (state_10967[1]);if((state_val_10968 === 7))
{var inst_10963 = (state_10967[2]);var state_10967__$1 = state_10967;var statearr_10969_10985 = state_10967__$1;(statearr_10969_10985[2] = inst_10963);
(statearr_10969_10985[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 6))
{var inst_10953 = (state_10967[7]);var inst_10956 = (state_10967[8]);var inst_10960 = f.call(null,inst_10953,inst_10956);var inst_10953__$1 = inst_10960;var state_10967__$1 = (function (){var statearr_10970 = state_10967;(statearr_10970[7] = inst_10953__$1);
return statearr_10970;
})();var statearr_10971_10986 = state_10967__$1;(statearr_10971_10986[2] = null);
(statearr_10971_10986[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 5))
{var inst_10953 = (state_10967[7]);var state_10967__$1 = state_10967;var statearr_10972_10987 = state_10967__$1;(statearr_10972_10987[2] = inst_10953);
(statearr_10972_10987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 4))
{var inst_10956 = (state_10967[8]);var inst_10956__$1 = (state_10967[2]);var inst_10957 = (inst_10956__$1 == null);var state_10967__$1 = (function (){var statearr_10973 = state_10967;(statearr_10973[8] = inst_10956__$1);
return statearr_10973;
})();if(cljs.core.truth_(inst_10957))
{var statearr_10974_10988 = state_10967__$1;(statearr_10974_10988[1] = 5);
} else
{var statearr_10975_10989 = state_10967__$1;(statearr_10975_10989[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10968 === 3))
{var inst_10965 = (state_10967[2]);var state_10967__$1 = state_10967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10967__$1,inst_10965);
} else
{if((state_val_10968 === 2))
{var state_10967__$1 = state_10967;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10967__$1,4,ch);
} else
{if((state_val_10968 === 1))
{var inst_10953 = init;var state_10967__$1 = (function (){var statearr_10976 = state_10967;(statearr_10976[7] = inst_10953);
return statearr_10976;
})();var statearr_10977_10990 = state_10967__$1;(statearr_10977_10990[2] = null);
(statearr_10977_10990[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_10981 = [null,null,null,null,null,null,null,null,null];(statearr_10981[0] = state_machine__6871__auto__);
(statearr_10981[1] = 1);
return statearr_10981;
});
var state_machine__6871__auto____1 = (function (state_10967){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10967);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10982){if((e10982 instanceof Object))
{var ex__6874__auto__ = e10982;var statearr_10983_10991 = state_10967;(statearr_10983_10991[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10982;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10992 = state_10967;
state_10967 = G__10992;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10967){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10984 = f__6886__auto__.call(null);(statearr_10984[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_10984;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11054){var state_val_11055 = (state_11054[1]);if((state_val_11055 === 1))
{var inst_11034 = cljs.core.seq.call(null,coll);var inst_11035 = inst_11034;var state_11054__$1 = (function (){var statearr_11056 = state_11054;(statearr_11056[7] = inst_11035);
return statearr_11056;
})();var statearr_11057_11075 = state_11054__$1;(statearr_11057_11075[2] = null);
(statearr_11057_11075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11055 === 2))
{var inst_11035 = (state_11054[7]);var state_11054__$1 = state_11054;if(cljs.core.truth_(inst_11035))
{var statearr_11058_11076 = state_11054__$1;(statearr_11058_11076[1] = 4);
} else
{var statearr_11059_11077 = state_11054__$1;(statearr_11059_11077[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11055 === 3))
{var inst_11052 = (state_11054[2]);var state_11054__$1 = state_11054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11054__$1,inst_11052);
} else
{if((state_val_11055 === 4))
{var inst_11035 = (state_11054[7]);var inst_11038 = cljs.core.first.call(null,inst_11035);var state_11054__$1 = state_11054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11054__$1,7,ch,inst_11038);
} else
{if((state_val_11055 === 5))
{var state_11054__$1 = state_11054;if(cljs.core.truth_(close_QMARK_))
{var statearr_11060_11078 = state_11054__$1;(statearr_11060_11078[1] = 8);
} else
{var statearr_11061_11079 = state_11054__$1;(statearr_11061_11079[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11055 === 6))
{var inst_11050 = (state_11054[2]);var state_11054__$1 = state_11054;var statearr_11062_11080 = state_11054__$1;(statearr_11062_11080[2] = inst_11050);
(statearr_11062_11080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11055 === 7))
{var inst_11035 = (state_11054[7]);var inst_11040 = (state_11054[2]);var inst_11041 = cljs.core.next.call(null,inst_11035);var inst_11035__$1 = inst_11041;var state_11054__$1 = (function (){var statearr_11063 = state_11054;(statearr_11063[8] = inst_11040);
(statearr_11063[7] = inst_11035__$1);
return statearr_11063;
})();var statearr_11064_11081 = state_11054__$1;(statearr_11064_11081[2] = null);
(statearr_11064_11081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11055 === 8))
{var inst_11045 = cljs.core.async.close_BANG_.call(null,ch);var state_11054__$1 = state_11054;var statearr_11065_11082 = state_11054__$1;(statearr_11065_11082[2] = inst_11045);
(statearr_11065_11082[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11055 === 9))
{var state_11054__$1 = state_11054;var statearr_11066_11083 = state_11054__$1;(statearr_11066_11083[2] = null);
(statearr_11066_11083[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11055 === 10))
{var inst_11048 = (state_11054[2]);var state_11054__$1 = state_11054;var statearr_11067_11084 = state_11054__$1;(statearr_11067_11084[2] = inst_11048);
(statearr_11067_11084[1] = 6);
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
var state_machine__6871__auto____0 = (function (){var statearr_11071 = [null,null,null,null,null,null,null,null,null];(statearr_11071[0] = state_machine__6871__auto__);
(statearr_11071[1] = 1);
return statearr_11071;
});
var state_machine__6871__auto____1 = (function (state_11054){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11072){if((e11072 instanceof Object))
{var ex__6874__auto__ = e11072;var statearr_11073_11085 = state_11054;(statearr_11073_11085[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11054);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11072;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11086 = state_11054;
state_11054 = G__11086;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11054){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11074 = f__6886__auto__.call(null);(statearr_11074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_11074;
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
cljs.core.async.Mux = (function (){var obj11088 = {};return obj11088;
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
cljs.core.async.Mult = (function (){var obj11090 = {};return obj11090;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11314 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11314 = (function (cs,ch,mult,meta11315){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11315 = meta11315;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11314.cljs$lang$type = true;
cljs.core.async.t11314.cljs$lang$ctorStr = "cljs.core.async/t11314";
cljs.core.async.t11314.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11314");
});})(cs))
;
cljs.core.async.t11314.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11314.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11314.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11314.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11314.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11314.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11316){var self__ = this;
var _11316__$1 = this;return self__.meta11315;
});})(cs))
;
cljs.core.async.t11314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11316,meta11315__$1){var self__ = this;
var _11316__$1 = this;return (new cljs.core.async.t11314(self__.cs,self__.ch,self__.mult,meta11315__$1));
});})(cs))
;
cljs.core.async.__GT_t11314 = ((function (cs){
return (function __GT_t11314(cs__$1,ch__$1,mult__$1,meta11315){return (new cljs.core.async.t11314(cs__$1,ch__$1,mult__$1,meta11315));
});})(cs))
;
}
return (new cljs.core.async.t11314(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6885__auto___11537 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11451){var state_val_11452 = (state_11451[1]);if((state_val_11452 === 32))
{var inst_11319 = (state_11451[7]);var inst_11395 = (state_11451[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11451,31,Object,null,30);var inst_11402 = cljs.core.async.put_BANG_.call(null,inst_11395,inst_11319,done);var state_11451__$1 = state_11451;var statearr_11453_11538 = state_11451__$1;(statearr_11453_11538[2] = inst_11402);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11451__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 1))
{var state_11451__$1 = state_11451;var statearr_11454_11539 = state_11451__$1;(statearr_11454_11539[2] = null);
(statearr_11454_11539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 33))
{var inst_11408 = (state_11451[9]);var inst_11410 = cljs.core.chunked_seq_QMARK_.call(null,inst_11408);var state_11451__$1 = state_11451;if(inst_11410)
{var statearr_11455_11540 = state_11451__$1;(statearr_11455_11540[1] = 36);
} else
{var statearr_11456_11541 = state_11451__$1;(statearr_11456_11541[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 2))
{var state_11451__$1 = state_11451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11451__$1,4,ch);
} else
{if((state_val_11452 === 34))
{var state_11451__$1 = state_11451;var statearr_11457_11542 = state_11451__$1;(statearr_11457_11542[2] = null);
(statearr_11457_11542[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 3))
{var inst_11449 = (state_11451[2]);var state_11451__$1 = state_11451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11451__$1,inst_11449);
} else
{if((state_val_11452 === 35))
{var inst_11433 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11458_11543 = state_11451__$1;(statearr_11458_11543[2] = inst_11433);
(statearr_11458_11543[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 4))
{var inst_11319 = (state_11451[7]);var inst_11319__$1 = (state_11451[2]);var inst_11320 = (inst_11319__$1 == null);var state_11451__$1 = (function (){var statearr_11459 = state_11451;(statearr_11459[7] = inst_11319__$1);
return statearr_11459;
})();if(cljs.core.truth_(inst_11320))
{var statearr_11460_11544 = state_11451__$1;(statearr_11460_11544[1] = 5);
} else
{var statearr_11461_11545 = state_11451__$1;(statearr_11461_11545[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 36))
{var inst_11408 = (state_11451[9]);var inst_11412 = cljs.core.chunk_first.call(null,inst_11408);var inst_11413 = cljs.core.chunk_rest.call(null,inst_11408);var inst_11414 = cljs.core.count.call(null,inst_11412);var inst_11387 = inst_11413;var inst_11388 = inst_11412;var inst_11389 = inst_11414;var inst_11390 = 0;var state_11451__$1 = (function (){var statearr_11462 = state_11451;(statearr_11462[10] = inst_11389);
(statearr_11462[11] = inst_11388);
(statearr_11462[12] = inst_11387);
(statearr_11462[13] = inst_11390);
return statearr_11462;
})();var statearr_11463_11546 = state_11451__$1;(statearr_11463_11546[2] = null);
(statearr_11463_11546[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 5))
{var inst_11326 = cljs.core.deref.call(null,cs);var inst_11327 = cljs.core.seq.call(null,inst_11326);var inst_11328 = inst_11327;var inst_11329 = null;var inst_11330 = 0;var inst_11331 = 0;var state_11451__$1 = (function (){var statearr_11464 = state_11451;(statearr_11464[14] = inst_11330);
(statearr_11464[15] = inst_11331);
(statearr_11464[16] = inst_11329);
(statearr_11464[17] = inst_11328);
return statearr_11464;
})();var statearr_11465_11547 = state_11451__$1;(statearr_11465_11547[2] = null);
(statearr_11465_11547[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 37))
{var inst_11408 = (state_11451[9]);var inst_11417 = cljs.core.first.call(null,inst_11408);var state_11451__$1 = (function (){var statearr_11466 = state_11451;(statearr_11466[18] = inst_11417);
return statearr_11466;
})();var statearr_11467_11548 = state_11451__$1;(statearr_11467_11548[2] = null);
(statearr_11467_11548[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 6))
{var inst_11379 = (state_11451[19]);var inst_11378 = cljs.core.deref.call(null,cs);var inst_11379__$1 = cljs.core.keys.call(null,inst_11378);var inst_11380 = cljs.core.count.call(null,inst_11379__$1);var inst_11381 = cljs.core.reset_BANG_.call(null,dctr,inst_11380);var inst_11386 = cljs.core.seq.call(null,inst_11379__$1);var inst_11387 = inst_11386;var inst_11388 = null;var inst_11389 = 0;var inst_11390 = 0;var state_11451__$1 = (function (){var statearr_11468 = state_11451;(statearr_11468[19] = inst_11379__$1);
(statearr_11468[10] = inst_11389);
(statearr_11468[11] = inst_11388);
(statearr_11468[12] = inst_11387);
(statearr_11468[20] = inst_11381);
(statearr_11468[13] = inst_11390);
return statearr_11468;
})();var statearr_11469_11549 = state_11451__$1;(statearr_11469_11549[2] = null);
(statearr_11469_11549[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 38))
{var inst_11430 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11470_11550 = state_11451__$1;(statearr_11470_11550[2] = inst_11430);
(statearr_11470_11550[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 7))
{var inst_11447 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11471_11551 = state_11451__$1;(statearr_11471_11551[2] = inst_11447);
(statearr_11471_11551[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 39))
{var inst_11408 = (state_11451[9]);var inst_11426 = (state_11451[2]);var inst_11427 = cljs.core.next.call(null,inst_11408);var inst_11387 = inst_11427;var inst_11388 = null;var inst_11389 = 0;var inst_11390 = 0;var state_11451__$1 = (function (){var statearr_11472 = state_11451;(statearr_11472[10] = inst_11389);
(statearr_11472[11] = inst_11388);
(statearr_11472[12] = inst_11387);
(statearr_11472[13] = inst_11390);
(statearr_11472[21] = inst_11426);
return statearr_11472;
})();var statearr_11473_11552 = state_11451__$1;(statearr_11473_11552[2] = null);
(statearr_11473_11552[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 8))
{var inst_11330 = (state_11451[14]);var inst_11331 = (state_11451[15]);var inst_11333 = (inst_11331 < inst_11330);var inst_11334 = inst_11333;var state_11451__$1 = state_11451;if(cljs.core.truth_(inst_11334))
{var statearr_11474_11553 = state_11451__$1;(statearr_11474_11553[1] = 10);
} else
{var statearr_11475_11554 = state_11451__$1;(statearr_11475_11554[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 40))
{var inst_11417 = (state_11451[18]);var inst_11418 = (state_11451[2]);var inst_11419 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11420 = cljs.core.async.untap_STAR_.call(null,m,inst_11417);var state_11451__$1 = (function (){var statearr_11476 = state_11451;(statearr_11476[22] = inst_11419);
(statearr_11476[23] = inst_11418);
return statearr_11476;
})();var statearr_11477_11555 = state_11451__$1;(statearr_11477_11555[2] = inst_11420);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11451__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 9))
{var inst_11376 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11478_11556 = state_11451__$1;(statearr_11478_11556[2] = inst_11376);
(statearr_11478_11556[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 41))
{var inst_11319 = (state_11451[7]);var inst_11417 = (state_11451[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11451,40,Object,null,39);var inst_11424 = cljs.core.async.put_BANG_.call(null,inst_11417,inst_11319,done);var state_11451__$1 = state_11451;var statearr_11479_11557 = state_11451__$1;(statearr_11479_11557[2] = inst_11424);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11451__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 10))
{var inst_11331 = (state_11451[15]);var inst_11329 = (state_11451[16]);var inst_11337 = cljs.core._nth.call(null,inst_11329,inst_11331);var inst_11338 = cljs.core.nth.call(null,inst_11337,0,null);var inst_11339 = cljs.core.nth.call(null,inst_11337,1,null);var state_11451__$1 = (function (){var statearr_11480 = state_11451;(statearr_11480[24] = inst_11338);
return statearr_11480;
})();if(cljs.core.truth_(inst_11339))
{var statearr_11481_11558 = state_11451__$1;(statearr_11481_11558[1] = 13);
} else
{var statearr_11482_11559 = state_11451__$1;(statearr_11482_11559[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 42))
{var state_11451__$1 = state_11451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11451__$1,45,dchan);
} else
{if((state_val_11452 === 11))
{var inst_11328 = (state_11451[17]);var inst_11348 = (state_11451[25]);var inst_11348__$1 = cljs.core.seq.call(null,inst_11328);var state_11451__$1 = (function (){var statearr_11483 = state_11451;(statearr_11483[25] = inst_11348__$1);
return statearr_11483;
})();if(inst_11348__$1)
{var statearr_11484_11560 = state_11451__$1;(statearr_11484_11560[1] = 16);
} else
{var statearr_11485_11561 = state_11451__$1;(statearr_11485_11561[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 43))
{var state_11451__$1 = state_11451;var statearr_11486_11562 = state_11451__$1;(statearr_11486_11562[2] = null);
(statearr_11486_11562[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 12))
{var inst_11374 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11487_11563 = state_11451__$1;(statearr_11487_11563[2] = inst_11374);
(statearr_11487_11563[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 44))
{var inst_11444 = (state_11451[2]);var state_11451__$1 = (function (){var statearr_11488 = state_11451;(statearr_11488[26] = inst_11444);
return statearr_11488;
})();var statearr_11489_11564 = state_11451__$1;(statearr_11489_11564[2] = null);
(statearr_11489_11564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 13))
{var inst_11338 = (state_11451[24]);var inst_11341 = cljs.core.async.close_BANG_.call(null,inst_11338);var state_11451__$1 = state_11451;var statearr_11490_11565 = state_11451__$1;(statearr_11490_11565[2] = inst_11341);
(statearr_11490_11565[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 45))
{var inst_11441 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11494_11566 = state_11451__$1;(statearr_11494_11566[2] = inst_11441);
(statearr_11494_11566[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 14))
{var state_11451__$1 = state_11451;var statearr_11495_11567 = state_11451__$1;(statearr_11495_11567[2] = null);
(statearr_11495_11567[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 15))
{var inst_11330 = (state_11451[14]);var inst_11331 = (state_11451[15]);var inst_11329 = (state_11451[16]);var inst_11328 = (state_11451[17]);var inst_11344 = (state_11451[2]);var inst_11345 = (inst_11331 + 1);var tmp11491 = inst_11330;var tmp11492 = inst_11329;var tmp11493 = inst_11328;var inst_11328__$1 = tmp11493;var inst_11329__$1 = tmp11492;var inst_11330__$1 = tmp11491;var inst_11331__$1 = inst_11345;var state_11451__$1 = (function (){var statearr_11496 = state_11451;(statearr_11496[14] = inst_11330__$1);
(statearr_11496[27] = inst_11344);
(statearr_11496[15] = inst_11331__$1);
(statearr_11496[16] = inst_11329__$1);
(statearr_11496[17] = inst_11328__$1);
return statearr_11496;
})();var statearr_11497_11568 = state_11451__$1;(statearr_11497_11568[2] = null);
(statearr_11497_11568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 16))
{var inst_11348 = (state_11451[25]);var inst_11350 = cljs.core.chunked_seq_QMARK_.call(null,inst_11348);var state_11451__$1 = state_11451;if(inst_11350)
{var statearr_11498_11569 = state_11451__$1;(statearr_11498_11569[1] = 19);
} else
{var statearr_11499_11570 = state_11451__$1;(statearr_11499_11570[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 17))
{var state_11451__$1 = state_11451;var statearr_11500_11571 = state_11451__$1;(statearr_11500_11571[2] = null);
(statearr_11500_11571[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 18))
{var inst_11372 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11501_11572 = state_11451__$1;(statearr_11501_11572[2] = inst_11372);
(statearr_11501_11572[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 19))
{var inst_11348 = (state_11451[25]);var inst_11352 = cljs.core.chunk_first.call(null,inst_11348);var inst_11353 = cljs.core.chunk_rest.call(null,inst_11348);var inst_11354 = cljs.core.count.call(null,inst_11352);var inst_11328 = inst_11353;var inst_11329 = inst_11352;var inst_11330 = inst_11354;var inst_11331 = 0;var state_11451__$1 = (function (){var statearr_11502 = state_11451;(statearr_11502[14] = inst_11330);
(statearr_11502[15] = inst_11331);
(statearr_11502[16] = inst_11329);
(statearr_11502[17] = inst_11328);
return statearr_11502;
})();var statearr_11503_11573 = state_11451__$1;(statearr_11503_11573[2] = null);
(statearr_11503_11573[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 20))
{var inst_11348 = (state_11451[25]);var inst_11358 = cljs.core.first.call(null,inst_11348);var inst_11359 = cljs.core.nth.call(null,inst_11358,0,null);var inst_11360 = cljs.core.nth.call(null,inst_11358,1,null);var state_11451__$1 = (function (){var statearr_11504 = state_11451;(statearr_11504[28] = inst_11359);
return statearr_11504;
})();if(cljs.core.truth_(inst_11360))
{var statearr_11505_11574 = state_11451__$1;(statearr_11505_11574[1] = 22);
} else
{var statearr_11506_11575 = state_11451__$1;(statearr_11506_11575[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 21))
{var inst_11369 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11507_11576 = state_11451__$1;(statearr_11507_11576[2] = inst_11369);
(statearr_11507_11576[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 22))
{var inst_11359 = (state_11451[28]);var inst_11362 = cljs.core.async.close_BANG_.call(null,inst_11359);var state_11451__$1 = state_11451;var statearr_11508_11577 = state_11451__$1;(statearr_11508_11577[2] = inst_11362);
(statearr_11508_11577[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 23))
{var state_11451__$1 = state_11451;var statearr_11509_11578 = state_11451__$1;(statearr_11509_11578[2] = null);
(statearr_11509_11578[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 24))
{var inst_11348 = (state_11451[25]);var inst_11365 = (state_11451[2]);var inst_11366 = cljs.core.next.call(null,inst_11348);var inst_11328 = inst_11366;var inst_11329 = null;var inst_11330 = 0;var inst_11331 = 0;var state_11451__$1 = (function (){var statearr_11510 = state_11451;(statearr_11510[14] = inst_11330);
(statearr_11510[15] = inst_11331);
(statearr_11510[16] = inst_11329);
(statearr_11510[17] = inst_11328);
(statearr_11510[29] = inst_11365);
return statearr_11510;
})();var statearr_11511_11579 = state_11451__$1;(statearr_11511_11579[2] = null);
(statearr_11511_11579[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 25))
{var inst_11389 = (state_11451[10]);var inst_11390 = (state_11451[13]);var inst_11392 = (inst_11390 < inst_11389);var inst_11393 = inst_11392;var state_11451__$1 = state_11451;if(cljs.core.truth_(inst_11393))
{var statearr_11512_11580 = state_11451__$1;(statearr_11512_11580[1] = 27);
} else
{var statearr_11513_11581 = state_11451__$1;(statearr_11513_11581[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 26))
{var inst_11379 = (state_11451[19]);var inst_11437 = (state_11451[2]);var inst_11438 = cljs.core.seq.call(null,inst_11379);var state_11451__$1 = (function (){var statearr_11514 = state_11451;(statearr_11514[30] = inst_11437);
return statearr_11514;
})();if(inst_11438)
{var statearr_11515_11582 = state_11451__$1;(statearr_11515_11582[1] = 42);
} else
{var statearr_11516_11583 = state_11451__$1;(statearr_11516_11583[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 27))
{var inst_11388 = (state_11451[11]);var inst_11390 = (state_11451[13]);var inst_11395 = cljs.core._nth.call(null,inst_11388,inst_11390);var state_11451__$1 = (function (){var statearr_11517 = state_11451;(statearr_11517[8] = inst_11395);
return statearr_11517;
})();var statearr_11518_11584 = state_11451__$1;(statearr_11518_11584[2] = null);
(statearr_11518_11584[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 28))
{var inst_11387 = (state_11451[12]);var inst_11408 = (state_11451[9]);var inst_11408__$1 = cljs.core.seq.call(null,inst_11387);var state_11451__$1 = (function (){var statearr_11522 = state_11451;(statearr_11522[9] = inst_11408__$1);
return statearr_11522;
})();if(inst_11408__$1)
{var statearr_11523_11585 = state_11451__$1;(statearr_11523_11585[1] = 33);
} else
{var statearr_11524_11586 = state_11451__$1;(statearr_11524_11586[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 29))
{var inst_11435 = (state_11451[2]);var state_11451__$1 = state_11451;var statearr_11525_11587 = state_11451__$1;(statearr_11525_11587[2] = inst_11435);
(statearr_11525_11587[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 30))
{var inst_11389 = (state_11451[10]);var inst_11388 = (state_11451[11]);var inst_11387 = (state_11451[12]);var inst_11390 = (state_11451[13]);var inst_11404 = (state_11451[2]);var inst_11405 = (inst_11390 + 1);var tmp11519 = inst_11389;var tmp11520 = inst_11388;var tmp11521 = inst_11387;var inst_11387__$1 = tmp11521;var inst_11388__$1 = tmp11520;var inst_11389__$1 = tmp11519;var inst_11390__$1 = inst_11405;var state_11451__$1 = (function (){var statearr_11526 = state_11451;(statearr_11526[10] = inst_11389__$1);
(statearr_11526[11] = inst_11388__$1);
(statearr_11526[12] = inst_11387__$1);
(statearr_11526[31] = inst_11404);
(statearr_11526[13] = inst_11390__$1);
return statearr_11526;
})();var statearr_11527_11588 = state_11451__$1;(statearr_11527_11588[2] = null);
(statearr_11527_11588[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11452 === 31))
{var inst_11395 = (state_11451[8]);var inst_11396 = (state_11451[2]);var inst_11397 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11398 = cljs.core.async.untap_STAR_.call(null,m,inst_11395);var state_11451__$1 = (function (){var statearr_11528 = state_11451;(statearr_11528[32] = inst_11396);
(statearr_11528[33] = inst_11397);
return statearr_11528;
})();var statearr_11529_11589 = state_11451__$1;(statearr_11529_11589[2] = inst_11398);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11451__$1);
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
var state_machine__6871__auto____0 = (function (){var statearr_11533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11533[0] = state_machine__6871__auto__);
(statearr_11533[1] = 1);
return statearr_11533;
});
var state_machine__6871__auto____1 = (function (state_11451){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11451);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11534){if((e11534 instanceof Object))
{var ex__6874__auto__ = e11534;var statearr_11535_11590 = state_11451;(statearr_11535_11590[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11591 = state_11451;
state_11451 = G__11591;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11451){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11536 = f__6886__auto__.call(null);(statearr_11536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___11537);
return statearr_11536;
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
cljs.core.async.Mix = (function (){var obj11593 = {};return obj11593;
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
;var m = (function (){if(typeof cljs.core.async.t11703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11703 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11704){
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
this.meta11704 = meta11704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11703.cljs$lang$type = true;
cljs.core.async.t11703.cljs$lang$ctorStr = "cljs.core.async/t11703";
cljs.core.async.t11703.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11703");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11705){var self__ = this;
var _11705__$1 = this;return self__.meta11704;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11705,meta11704__$1){var self__ = this;
var _11705__$1 = this;return (new cljs.core.async.t11703(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11704__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11703 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11703(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11704){return (new cljs.core.async.t11703(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11704));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11703(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6885__auto___11812 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11770){var state_val_11771 = (state_11770[1]);if((state_val_11771 === 1))
{var inst_11709 = (state_11770[7]);var inst_11709__$1 = calc_state.call(null);var inst_11710 = cljs.core.seq_QMARK_.call(null,inst_11709__$1);var state_11770__$1 = (function (){var statearr_11772 = state_11770;(statearr_11772[7] = inst_11709__$1);
return statearr_11772;
})();if(inst_11710)
{var statearr_11773_11813 = state_11770__$1;(statearr_11773_11813[1] = 2);
} else
{var statearr_11774_11814 = state_11770__$1;(statearr_11774_11814[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 2))
{var inst_11709 = (state_11770[7]);var inst_11712 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11709);var state_11770__$1 = state_11770;var statearr_11775_11815 = state_11770__$1;(statearr_11775_11815[2] = inst_11712);
(statearr_11775_11815[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 3))
{var inst_11709 = (state_11770[7]);var state_11770__$1 = state_11770;var statearr_11776_11816 = state_11770__$1;(statearr_11776_11816[2] = inst_11709);
(statearr_11776_11816[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 4))
{var inst_11709 = (state_11770[7]);var inst_11715 = (state_11770[2]);var inst_11716 = cljs.core.get.call(null,inst_11715,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11717 = cljs.core.get.call(null,inst_11715,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11718 = cljs.core.get.call(null,inst_11715,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11719 = inst_11709;var state_11770__$1 = (function (){var statearr_11777 = state_11770;(statearr_11777[8] = inst_11716);
(statearr_11777[9] = inst_11719);
(statearr_11777[10] = inst_11717);
(statearr_11777[11] = inst_11718);
return statearr_11777;
})();var statearr_11778_11817 = state_11770__$1;(statearr_11778_11817[2] = null);
(statearr_11778_11817[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 5))
{var inst_11719 = (state_11770[9]);var inst_11722 = cljs.core.seq_QMARK_.call(null,inst_11719);var state_11770__$1 = state_11770;if(inst_11722)
{var statearr_11779_11818 = state_11770__$1;(statearr_11779_11818[1] = 7);
} else
{var statearr_11780_11819 = state_11770__$1;(statearr_11780_11819[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 6))
{var inst_11768 = (state_11770[2]);var state_11770__$1 = state_11770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11770__$1,inst_11768);
} else
{if((state_val_11771 === 7))
{var inst_11719 = (state_11770[9]);var inst_11724 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11719);var state_11770__$1 = state_11770;var statearr_11781_11820 = state_11770__$1;(statearr_11781_11820[2] = inst_11724);
(statearr_11781_11820[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 8))
{var inst_11719 = (state_11770[9]);var state_11770__$1 = state_11770;var statearr_11782_11821 = state_11770__$1;(statearr_11782_11821[2] = inst_11719);
(statearr_11782_11821[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 9))
{var inst_11727 = (state_11770[12]);var inst_11727__$1 = (state_11770[2]);var inst_11728 = cljs.core.get.call(null,inst_11727__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11729 = cljs.core.get.call(null,inst_11727__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11730 = cljs.core.get.call(null,inst_11727__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11770__$1 = (function (){var statearr_11783 = state_11770;(statearr_11783[13] = inst_11730);
(statearr_11783[12] = inst_11727__$1);
(statearr_11783[14] = inst_11729);
return statearr_11783;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11770__$1,10,inst_11728);
} else
{if((state_val_11771 === 10))
{var inst_11734 = (state_11770[15]);var inst_11735 = (state_11770[16]);var inst_11733 = (state_11770[2]);var inst_11734__$1 = cljs.core.nth.call(null,inst_11733,0,null);var inst_11735__$1 = cljs.core.nth.call(null,inst_11733,1,null);var inst_11736 = (inst_11734__$1 == null);var inst_11737 = cljs.core._EQ_.call(null,inst_11735__$1,change);var inst_11738 = (inst_11736) || (inst_11737);var state_11770__$1 = (function (){var statearr_11784 = state_11770;(statearr_11784[15] = inst_11734__$1);
(statearr_11784[16] = inst_11735__$1);
return statearr_11784;
})();if(cljs.core.truth_(inst_11738))
{var statearr_11785_11822 = state_11770__$1;(statearr_11785_11822[1] = 11);
} else
{var statearr_11786_11823 = state_11770__$1;(statearr_11786_11823[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 11))
{var inst_11734 = (state_11770[15]);var inst_11740 = (inst_11734 == null);var state_11770__$1 = state_11770;if(cljs.core.truth_(inst_11740))
{var statearr_11787_11824 = state_11770__$1;(statearr_11787_11824[1] = 14);
} else
{var statearr_11788_11825 = state_11770__$1;(statearr_11788_11825[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 12))
{var inst_11749 = (state_11770[17]);var inst_11730 = (state_11770[13]);var inst_11735 = (state_11770[16]);var inst_11749__$1 = inst_11730.call(null,inst_11735);var state_11770__$1 = (function (){var statearr_11789 = state_11770;(statearr_11789[17] = inst_11749__$1);
return statearr_11789;
})();if(cljs.core.truth_(inst_11749__$1))
{var statearr_11790_11826 = state_11770__$1;(statearr_11790_11826[1] = 17);
} else
{var statearr_11791_11827 = state_11770__$1;(statearr_11791_11827[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 13))
{var inst_11766 = (state_11770[2]);var state_11770__$1 = state_11770;var statearr_11792_11828 = state_11770__$1;(statearr_11792_11828[2] = inst_11766);
(statearr_11792_11828[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 14))
{var inst_11735 = (state_11770[16]);var inst_11742 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11735);var state_11770__$1 = state_11770;var statearr_11793_11829 = state_11770__$1;(statearr_11793_11829[2] = inst_11742);
(statearr_11793_11829[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 15))
{var state_11770__$1 = state_11770;var statearr_11794_11830 = state_11770__$1;(statearr_11794_11830[2] = null);
(statearr_11794_11830[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 16))
{var inst_11745 = (state_11770[2]);var inst_11746 = calc_state.call(null);var inst_11719 = inst_11746;var state_11770__$1 = (function (){var statearr_11795 = state_11770;(statearr_11795[9] = inst_11719);
(statearr_11795[18] = inst_11745);
return statearr_11795;
})();var statearr_11796_11831 = state_11770__$1;(statearr_11796_11831[2] = null);
(statearr_11796_11831[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 17))
{var inst_11749 = (state_11770[17]);var state_11770__$1 = state_11770;var statearr_11797_11832 = state_11770__$1;(statearr_11797_11832[2] = inst_11749);
(statearr_11797_11832[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 18))
{var inst_11730 = (state_11770[13]);var inst_11729 = (state_11770[14]);var inst_11735 = (state_11770[16]);var inst_11752 = cljs.core.empty_QMARK_.call(null,inst_11730);var inst_11753 = inst_11729.call(null,inst_11735);var inst_11754 = cljs.core.not.call(null,inst_11753);var inst_11755 = (inst_11752) && (inst_11754);var state_11770__$1 = state_11770;var statearr_11798_11833 = state_11770__$1;(statearr_11798_11833[2] = inst_11755);
(statearr_11798_11833[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 19))
{var inst_11757 = (state_11770[2]);var state_11770__$1 = state_11770;if(cljs.core.truth_(inst_11757))
{var statearr_11799_11834 = state_11770__$1;(statearr_11799_11834[1] = 20);
} else
{var statearr_11800_11835 = state_11770__$1;(statearr_11800_11835[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 20))
{var inst_11734 = (state_11770[15]);var state_11770__$1 = state_11770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11770__$1,23,out,inst_11734);
} else
{if((state_val_11771 === 21))
{var state_11770__$1 = state_11770;var statearr_11801_11836 = state_11770__$1;(statearr_11801_11836[2] = null);
(statearr_11801_11836[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 22))
{var inst_11727 = (state_11770[12]);var inst_11763 = (state_11770[2]);var inst_11719 = inst_11727;var state_11770__$1 = (function (){var statearr_11802 = state_11770;(statearr_11802[9] = inst_11719);
(statearr_11802[19] = inst_11763);
return statearr_11802;
})();var statearr_11803_11837 = state_11770__$1;(statearr_11803_11837[2] = null);
(statearr_11803_11837[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11771 === 23))
{var inst_11760 = (state_11770[2]);var state_11770__$1 = state_11770;var statearr_11804_11838 = state_11770__$1;(statearr_11804_11838[2] = inst_11760);
(statearr_11804_11838[1] = 22);
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
var state_machine__6871__auto____0 = (function (){var statearr_11808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11808[0] = state_machine__6871__auto__);
(statearr_11808[1] = 1);
return statearr_11808;
});
var state_machine__6871__auto____1 = (function (state_11770){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11770);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11809){if((e11809 instanceof Object))
{var ex__6874__auto__ = e11809;var statearr_11810_11839 = state_11770;(statearr_11810_11839[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11840 = state_11770;
state_11770 = G__11840;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11770){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11811 = f__6886__auto__.call(null);(statearr_11811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___11812);
return statearr_11811;
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
cljs.core.async.Pub = (function (){var obj11842 = {};return obj11842;
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
return (function (p1__11843_SHARP_){if(cljs.core.truth_(p1__11843_SHARP_.call(null,topic)))
{return p1__11843_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11843_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4071__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11968 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11968 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11969){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11969 = meta11969;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11968.cljs$lang$type = true;
cljs.core.async.t11968.cljs$lang$ctorStr = "cljs.core.async/t11968";
cljs.core.async.t11968.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11968");
});})(mults,ensure_mult))
;
cljs.core.async.t11968.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11968.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11968.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11968.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11968.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11968.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11968.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11968.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11970){var self__ = this;
var _11970__$1 = this;return self__.meta11969;
});})(mults,ensure_mult))
;
cljs.core.async.t11968.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11970,meta11969__$1){var self__ = this;
var _11970__$1 = this;return (new cljs.core.async.t11968(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11969__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11968 = ((function (mults,ensure_mult){
return (function __GT_t11968(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11969){return (new cljs.core.async.t11968(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11969));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11968(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6885__auto___12092 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12044){var state_val_12045 = (state_12044[1]);if((state_val_12045 === 1))
{var state_12044__$1 = state_12044;var statearr_12046_12093 = state_12044__$1;(statearr_12046_12093[2] = null);
(statearr_12046_12093[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 2))
{var state_12044__$1 = state_12044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12044__$1,4,ch);
} else
{if((state_val_12045 === 3))
{var inst_12042 = (state_12044[2]);var state_12044__$1 = state_12044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12044__$1,inst_12042);
} else
{if((state_val_12045 === 4))
{var inst_11973 = (state_12044[7]);var inst_11973__$1 = (state_12044[2]);var inst_11974 = (inst_11973__$1 == null);var state_12044__$1 = (function (){var statearr_12047 = state_12044;(statearr_12047[7] = inst_11973__$1);
return statearr_12047;
})();if(cljs.core.truth_(inst_11974))
{var statearr_12048_12094 = state_12044__$1;(statearr_12048_12094[1] = 5);
} else
{var statearr_12049_12095 = state_12044__$1;(statearr_12049_12095[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 5))
{var inst_11980 = cljs.core.deref.call(null,mults);var inst_11981 = cljs.core.vals.call(null,inst_11980);var inst_11982 = cljs.core.seq.call(null,inst_11981);var inst_11983 = inst_11982;var inst_11984 = null;var inst_11985 = 0;var inst_11986 = 0;var state_12044__$1 = (function (){var statearr_12050 = state_12044;(statearr_12050[8] = inst_11983);
(statearr_12050[9] = inst_11984);
(statearr_12050[10] = inst_11985);
(statearr_12050[11] = inst_11986);
return statearr_12050;
})();var statearr_12051_12096 = state_12044__$1;(statearr_12051_12096[2] = null);
(statearr_12051_12096[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 6))
{var inst_12023 = (state_12044[12]);var inst_12021 = (state_12044[13]);var inst_11973 = (state_12044[7]);var inst_12021__$1 = topic_fn.call(null,inst_11973);var inst_12022 = cljs.core.deref.call(null,mults);var inst_12023__$1 = cljs.core.get.call(null,inst_12022,inst_12021__$1);var state_12044__$1 = (function (){var statearr_12052 = state_12044;(statearr_12052[12] = inst_12023__$1);
(statearr_12052[13] = inst_12021__$1);
return statearr_12052;
})();if(cljs.core.truth_(inst_12023__$1))
{var statearr_12053_12097 = state_12044__$1;(statearr_12053_12097[1] = 19);
} else
{var statearr_12054_12098 = state_12044__$1;(statearr_12054_12098[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 7))
{var inst_12040 = (state_12044[2]);var state_12044__$1 = state_12044;var statearr_12055_12099 = state_12044__$1;(statearr_12055_12099[2] = inst_12040);
(statearr_12055_12099[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 8))
{var inst_11985 = (state_12044[10]);var inst_11986 = (state_12044[11]);var inst_11988 = (inst_11986 < inst_11985);var inst_11989 = inst_11988;var state_12044__$1 = state_12044;if(cljs.core.truth_(inst_11989))
{var statearr_12059_12100 = state_12044__$1;(statearr_12059_12100[1] = 10);
} else
{var statearr_12060_12101 = state_12044__$1;(statearr_12060_12101[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 9))
{var inst_12019 = (state_12044[2]);var state_12044__$1 = state_12044;var statearr_12061_12102 = state_12044__$1;(statearr_12061_12102[2] = inst_12019);
(statearr_12061_12102[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 10))
{var inst_11983 = (state_12044[8]);var inst_11984 = (state_12044[9]);var inst_11985 = (state_12044[10]);var inst_11986 = (state_12044[11]);var inst_11991 = cljs.core._nth.call(null,inst_11984,inst_11986);var inst_11992 = cljs.core.async.muxch_STAR_.call(null,inst_11991);var inst_11993 = cljs.core.async.close_BANG_.call(null,inst_11992);var inst_11994 = (inst_11986 + 1);var tmp12056 = inst_11983;var tmp12057 = inst_11984;var tmp12058 = inst_11985;var inst_11983__$1 = tmp12056;var inst_11984__$1 = tmp12057;var inst_11985__$1 = tmp12058;var inst_11986__$1 = inst_11994;var state_12044__$1 = (function (){var statearr_12062 = state_12044;(statearr_12062[8] = inst_11983__$1);
(statearr_12062[9] = inst_11984__$1);
(statearr_12062[10] = inst_11985__$1);
(statearr_12062[14] = inst_11993);
(statearr_12062[11] = inst_11986__$1);
return statearr_12062;
})();var statearr_12063_12103 = state_12044__$1;(statearr_12063_12103[2] = null);
(statearr_12063_12103[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 11))
{var inst_11983 = (state_12044[8]);var inst_11997 = (state_12044[15]);var inst_11997__$1 = cljs.core.seq.call(null,inst_11983);var state_12044__$1 = (function (){var statearr_12064 = state_12044;(statearr_12064[15] = inst_11997__$1);
return statearr_12064;
})();if(inst_11997__$1)
{var statearr_12065_12104 = state_12044__$1;(statearr_12065_12104[1] = 13);
} else
{var statearr_12066_12105 = state_12044__$1;(statearr_12066_12105[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 12))
{var inst_12017 = (state_12044[2]);var state_12044__$1 = state_12044;var statearr_12067_12106 = state_12044__$1;(statearr_12067_12106[2] = inst_12017);
(statearr_12067_12106[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 13))
{var inst_11997 = (state_12044[15]);var inst_11999 = cljs.core.chunked_seq_QMARK_.call(null,inst_11997);var state_12044__$1 = state_12044;if(inst_11999)
{var statearr_12068_12107 = state_12044__$1;(statearr_12068_12107[1] = 16);
} else
{var statearr_12069_12108 = state_12044__$1;(statearr_12069_12108[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 14))
{var state_12044__$1 = state_12044;var statearr_12070_12109 = state_12044__$1;(statearr_12070_12109[2] = null);
(statearr_12070_12109[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 15))
{var inst_12015 = (state_12044[2]);var state_12044__$1 = state_12044;var statearr_12071_12110 = state_12044__$1;(statearr_12071_12110[2] = inst_12015);
(statearr_12071_12110[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 16))
{var inst_11997 = (state_12044[15]);var inst_12001 = cljs.core.chunk_first.call(null,inst_11997);var inst_12002 = cljs.core.chunk_rest.call(null,inst_11997);var inst_12003 = cljs.core.count.call(null,inst_12001);var inst_11983 = inst_12002;var inst_11984 = inst_12001;var inst_11985 = inst_12003;var inst_11986 = 0;var state_12044__$1 = (function (){var statearr_12072 = state_12044;(statearr_12072[8] = inst_11983);
(statearr_12072[9] = inst_11984);
(statearr_12072[10] = inst_11985);
(statearr_12072[11] = inst_11986);
return statearr_12072;
})();var statearr_12073_12111 = state_12044__$1;(statearr_12073_12111[2] = null);
(statearr_12073_12111[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 17))
{var inst_11997 = (state_12044[15]);var inst_12006 = cljs.core.first.call(null,inst_11997);var inst_12007 = cljs.core.async.muxch_STAR_.call(null,inst_12006);var inst_12008 = cljs.core.async.close_BANG_.call(null,inst_12007);var inst_12009 = cljs.core.next.call(null,inst_11997);var inst_11983 = inst_12009;var inst_11984 = null;var inst_11985 = 0;var inst_11986 = 0;var state_12044__$1 = (function (){var statearr_12074 = state_12044;(statearr_12074[8] = inst_11983);
(statearr_12074[16] = inst_12008);
(statearr_12074[9] = inst_11984);
(statearr_12074[10] = inst_11985);
(statearr_12074[11] = inst_11986);
return statearr_12074;
})();var statearr_12075_12112 = state_12044__$1;(statearr_12075_12112[2] = null);
(statearr_12075_12112[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 18))
{var inst_12012 = (state_12044[2]);var state_12044__$1 = state_12044;var statearr_12076_12113 = state_12044__$1;(statearr_12076_12113[2] = inst_12012);
(statearr_12076_12113[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 19))
{var state_12044__$1 = state_12044;var statearr_12077_12114 = state_12044__$1;(statearr_12077_12114[2] = null);
(statearr_12077_12114[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 20))
{var state_12044__$1 = state_12044;var statearr_12078_12115 = state_12044__$1;(statearr_12078_12115[2] = null);
(statearr_12078_12115[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 21))
{var inst_12037 = (state_12044[2]);var state_12044__$1 = (function (){var statearr_12079 = state_12044;(statearr_12079[17] = inst_12037);
return statearr_12079;
})();var statearr_12080_12116 = state_12044__$1;(statearr_12080_12116[2] = null);
(statearr_12080_12116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 22))
{var inst_12034 = (state_12044[2]);var state_12044__$1 = state_12044;var statearr_12081_12117 = state_12044__$1;(statearr_12081_12117[2] = inst_12034);
(statearr_12081_12117[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 23))
{var inst_12021 = (state_12044[13]);var inst_12025 = (state_12044[2]);var inst_12026 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12021);var state_12044__$1 = (function (){var statearr_12082 = state_12044;(statearr_12082[18] = inst_12025);
return statearr_12082;
})();var statearr_12083_12118 = state_12044__$1;(statearr_12083_12118[2] = inst_12026);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12044__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12045 === 24))
{var inst_12023 = (state_12044[12]);var inst_11973 = (state_12044[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12044,23,Object,null,22);var inst_12030 = cljs.core.async.muxch_STAR_.call(null,inst_12023);var state_12044__$1 = state_12044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12044__$1,25,inst_12030,inst_11973);
} else
{if((state_val_12045 === 25))
{var inst_12032 = (state_12044[2]);var state_12044__$1 = state_12044;var statearr_12084_12119 = state_12044__$1;(statearr_12084_12119[2] = inst_12032);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12044__$1);
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
var state_machine__6871__auto____0 = (function (){var statearr_12088 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12088[0] = state_machine__6871__auto__);
(statearr_12088[1] = 1);
return statearr_12088;
});
var state_machine__6871__auto____1 = (function (state_12044){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12044);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12089){if((e12089 instanceof Object))
{var ex__6874__auto__ = e12089;var statearr_12090_12120 = state_12044;(statearr_12090_12120[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12044);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12121 = state_12044;
state_12044 = G__12121;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12044){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12091 = f__6886__auto__.call(null);(statearr_12091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12092);
return statearr_12091;
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
,cljs.core.range.call(null,cnt));var c__6885__auto___12258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12228){var state_val_12229 = (state_12228[1]);if((state_val_12229 === 1))
{var state_12228__$1 = state_12228;var statearr_12230_12259 = state_12228__$1;(statearr_12230_12259[2] = null);
(statearr_12230_12259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 2))
{var inst_12191 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12192 = 0;var state_12228__$1 = (function (){var statearr_12231 = state_12228;(statearr_12231[7] = inst_12192);
(statearr_12231[8] = inst_12191);
return statearr_12231;
})();var statearr_12232_12260 = state_12228__$1;(statearr_12232_12260[2] = null);
(statearr_12232_12260[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 3))
{var inst_12226 = (state_12228[2]);var state_12228__$1 = state_12228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12228__$1,inst_12226);
} else
{if((state_val_12229 === 4))
{var inst_12192 = (state_12228[7]);var inst_12194 = (inst_12192 < cnt);var state_12228__$1 = state_12228;if(cljs.core.truth_(inst_12194))
{var statearr_12233_12261 = state_12228__$1;(statearr_12233_12261[1] = 6);
} else
{var statearr_12234_12262 = state_12228__$1;(statearr_12234_12262[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 5))
{var inst_12212 = (state_12228[2]);var state_12228__$1 = (function (){var statearr_12235 = state_12228;(statearr_12235[9] = inst_12212);
return statearr_12235;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12228__$1,12,dchan);
} else
{if((state_val_12229 === 6))
{var state_12228__$1 = state_12228;var statearr_12236_12263 = state_12228__$1;(statearr_12236_12263[2] = null);
(statearr_12236_12263[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 7))
{var state_12228__$1 = state_12228;var statearr_12237_12264 = state_12228__$1;(statearr_12237_12264[2] = null);
(statearr_12237_12264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 8))
{var inst_12210 = (state_12228[2]);var state_12228__$1 = state_12228;var statearr_12238_12265 = state_12228__$1;(statearr_12238_12265[2] = inst_12210);
(statearr_12238_12265[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 9))
{var inst_12192 = (state_12228[7]);var inst_12205 = (state_12228[2]);var inst_12206 = (inst_12192 + 1);var inst_12192__$1 = inst_12206;var state_12228__$1 = (function (){var statearr_12239 = state_12228;(statearr_12239[7] = inst_12192__$1);
(statearr_12239[10] = inst_12205);
return statearr_12239;
})();var statearr_12240_12266 = state_12228__$1;(statearr_12240_12266[2] = null);
(statearr_12240_12266[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 10))
{var inst_12196 = (state_12228[2]);var inst_12197 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12228__$1 = (function (){var statearr_12241 = state_12228;(statearr_12241[11] = inst_12196);
return statearr_12241;
})();var statearr_12242_12267 = state_12228__$1;(statearr_12242_12267[2] = inst_12197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 11))
{var inst_12192 = (state_12228[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12228,10,Object,null,9);var inst_12201 = chs__$1.call(null,inst_12192);var inst_12202 = done.call(null,inst_12192);var inst_12203 = cljs.core.async.take_BANG_.call(null,inst_12201,inst_12202);var state_12228__$1 = state_12228;var statearr_12243_12268 = state_12228__$1;(statearr_12243_12268[2] = inst_12203);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 12))
{var inst_12214 = (state_12228[12]);var inst_12214__$1 = (state_12228[2]);var inst_12215 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12214__$1);var state_12228__$1 = (function (){var statearr_12244 = state_12228;(statearr_12244[12] = inst_12214__$1);
return statearr_12244;
})();if(cljs.core.truth_(inst_12215))
{var statearr_12245_12269 = state_12228__$1;(statearr_12245_12269[1] = 13);
} else
{var statearr_12246_12270 = state_12228__$1;(statearr_12246_12270[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 13))
{var inst_12217 = cljs.core.async.close_BANG_.call(null,out);var state_12228__$1 = state_12228;var statearr_12247_12271 = state_12228__$1;(statearr_12247_12271[2] = inst_12217);
(statearr_12247_12271[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 14))
{var inst_12214 = (state_12228[12]);var inst_12219 = cljs.core.apply.call(null,f,inst_12214);var state_12228__$1 = state_12228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12228__$1,16,out,inst_12219);
} else
{if((state_val_12229 === 15))
{var inst_12224 = (state_12228[2]);var state_12228__$1 = state_12228;var statearr_12248_12272 = state_12228__$1;(statearr_12248_12272[2] = inst_12224);
(statearr_12248_12272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12229 === 16))
{var inst_12221 = (state_12228[2]);var state_12228__$1 = (function (){var statearr_12249 = state_12228;(statearr_12249[13] = inst_12221);
return statearr_12249;
})();var statearr_12250_12273 = state_12228__$1;(statearr_12250_12273[2] = null);
(statearr_12250_12273[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12254[0] = state_machine__6871__auto__);
(statearr_12254[1] = 1);
return statearr_12254;
});
var state_machine__6871__auto____1 = (function (state_12228){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12228);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12255){if((e12255 instanceof Object))
{var ex__6874__auto__ = e12255;var statearr_12256_12274 = state_12228;(statearr_12256_12274[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12275 = state_12228;
state_12228 = G__12275;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12228){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12257 = f__6886__auto__.call(null);(statearr_12257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12258);
return statearr_12257;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12383 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12359){var state_val_12360 = (state_12359[1]);if((state_val_12360 === 1))
{var inst_12330 = cljs.core.vec.call(null,chs);var inst_12331 = inst_12330;var state_12359__$1 = (function (){var statearr_12361 = state_12359;(statearr_12361[7] = inst_12331);
return statearr_12361;
})();var statearr_12362_12384 = state_12359__$1;(statearr_12362_12384[2] = null);
(statearr_12362_12384[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12360 === 2))
{var inst_12331 = (state_12359[7]);var inst_12333 = cljs.core.count.call(null,inst_12331);var inst_12334 = (inst_12333 > 0);var state_12359__$1 = state_12359;if(cljs.core.truth_(inst_12334))
{var statearr_12363_12385 = state_12359__$1;(statearr_12363_12385[1] = 4);
} else
{var statearr_12364_12386 = state_12359__$1;(statearr_12364_12386[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12360 === 3))
{var inst_12357 = (state_12359[2]);var state_12359__$1 = state_12359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12359__$1,inst_12357);
} else
{if((state_val_12360 === 4))
{var inst_12331 = (state_12359[7]);var state_12359__$1 = state_12359;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12359__$1,7,inst_12331);
} else
{if((state_val_12360 === 5))
{var inst_12353 = cljs.core.async.close_BANG_.call(null,out);var state_12359__$1 = state_12359;var statearr_12365_12387 = state_12359__$1;(statearr_12365_12387[2] = inst_12353);
(statearr_12365_12387[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12360 === 6))
{var inst_12355 = (state_12359[2]);var state_12359__$1 = state_12359;var statearr_12366_12388 = state_12359__$1;(statearr_12366_12388[2] = inst_12355);
(statearr_12366_12388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12360 === 7))
{var inst_12338 = (state_12359[8]);var inst_12339 = (state_12359[9]);var inst_12338__$1 = (state_12359[2]);var inst_12339__$1 = cljs.core.nth.call(null,inst_12338__$1,0,null);var inst_12340 = cljs.core.nth.call(null,inst_12338__$1,1,null);var inst_12341 = (inst_12339__$1 == null);var state_12359__$1 = (function (){var statearr_12367 = state_12359;(statearr_12367[10] = inst_12340);
(statearr_12367[8] = inst_12338__$1);
(statearr_12367[9] = inst_12339__$1);
return statearr_12367;
})();if(cljs.core.truth_(inst_12341))
{var statearr_12368_12389 = state_12359__$1;(statearr_12368_12389[1] = 8);
} else
{var statearr_12369_12390 = state_12359__$1;(statearr_12369_12390[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12360 === 8))
{var inst_12340 = (state_12359[10]);var inst_12338 = (state_12359[8]);var inst_12339 = (state_12359[9]);var inst_12331 = (state_12359[7]);var inst_12343 = (function (){var c = inst_12340;var v = inst_12339;var vec__12336 = inst_12338;var cs = inst_12331;return ((function (c,v,vec__12336,cs,inst_12340,inst_12338,inst_12339,inst_12331,state_val_12360){
return (function (p1__12276_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12276_SHARP_);
});
;})(c,v,vec__12336,cs,inst_12340,inst_12338,inst_12339,inst_12331,state_val_12360))
})();var inst_12344 = cljs.core.filterv.call(null,inst_12343,inst_12331);var inst_12331__$1 = inst_12344;var state_12359__$1 = (function (){var statearr_12370 = state_12359;(statearr_12370[7] = inst_12331__$1);
return statearr_12370;
})();var statearr_12371_12391 = state_12359__$1;(statearr_12371_12391[2] = null);
(statearr_12371_12391[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12360 === 9))
{var inst_12339 = (state_12359[9]);var state_12359__$1 = state_12359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12359__$1,11,out,inst_12339);
} else
{if((state_val_12360 === 10))
{var inst_12351 = (state_12359[2]);var state_12359__$1 = state_12359;var statearr_12373_12392 = state_12359__$1;(statearr_12373_12392[2] = inst_12351);
(statearr_12373_12392[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12360 === 11))
{var inst_12331 = (state_12359[7]);var inst_12348 = (state_12359[2]);var tmp12372 = inst_12331;var inst_12331__$1 = tmp12372;var state_12359__$1 = (function (){var statearr_12374 = state_12359;(statearr_12374[11] = inst_12348);
(statearr_12374[7] = inst_12331__$1);
return statearr_12374;
})();var statearr_12375_12393 = state_12359__$1;(statearr_12375_12393[2] = null);
(statearr_12375_12393[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12379 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12379[0] = state_machine__6871__auto__);
(statearr_12379[1] = 1);
return statearr_12379;
});
var state_machine__6871__auto____1 = (function (state_12359){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12359);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12380){if((e12380 instanceof Object))
{var ex__6874__auto__ = e12380;var statearr_12381_12394 = state_12359;(statearr_12381_12394[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12395 = state_12359;
state_12359 = G__12395;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12359){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12382 = f__6886__auto__.call(null);(statearr_12382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12383);
return statearr_12382;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12488 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12465){var state_val_12466 = (state_12465[1]);if((state_val_12466 === 1))
{var inst_12442 = 0;var state_12465__$1 = (function (){var statearr_12467 = state_12465;(statearr_12467[7] = inst_12442);
return statearr_12467;
})();var statearr_12468_12489 = state_12465__$1;(statearr_12468_12489[2] = null);
(statearr_12468_12489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12466 === 2))
{var inst_12442 = (state_12465[7]);var inst_12444 = (inst_12442 < n);var state_12465__$1 = state_12465;if(cljs.core.truth_(inst_12444))
{var statearr_12469_12490 = state_12465__$1;(statearr_12469_12490[1] = 4);
} else
{var statearr_12470_12491 = state_12465__$1;(statearr_12470_12491[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12466 === 3))
{var inst_12462 = (state_12465[2]);var inst_12463 = cljs.core.async.close_BANG_.call(null,out);var state_12465__$1 = (function (){var statearr_12471 = state_12465;(statearr_12471[8] = inst_12462);
return statearr_12471;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12465__$1,inst_12463);
} else
{if((state_val_12466 === 4))
{var state_12465__$1 = state_12465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12465__$1,7,ch);
} else
{if((state_val_12466 === 5))
{var state_12465__$1 = state_12465;var statearr_12472_12492 = state_12465__$1;(statearr_12472_12492[2] = null);
(statearr_12472_12492[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12466 === 6))
{var inst_12460 = (state_12465[2]);var state_12465__$1 = state_12465;var statearr_12473_12493 = state_12465__$1;(statearr_12473_12493[2] = inst_12460);
(statearr_12473_12493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12466 === 7))
{var inst_12447 = (state_12465[9]);var inst_12447__$1 = (state_12465[2]);var inst_12448 = (inst_12447__$1 == null);var inst_12449 = cljs.core.not.call(null,inst_12448);var state_12465__$1 = (function (){var statearr_12474 = state_12465;(statearr_12474[9] = inst_12447__$1);
return statearr_12474;
})();if(inst_12449)
{var statearr_12475_12494 = state_12465__$1;(statearr_12475_12494[1] = 8);
} else
{var statearr_12476_12495 = state_12465__$1;(statearr_12476_12495[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12466 === 8))
{var inst_12447 = (state_12465[9]);var state_12465__$1 = state_12465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12465__$1,11,out,inst_12447);
} else
{if((state_val_12466 === 9))
{var state_12465__$1 = state_12465;var statearr_12477_12496 = state_12465__$1;(statearr_12477_12496[2] = null);
(statearr_12477_12496[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12466 === 10))
{var inst_12457 = (state_12465[2]);var state_12465__$1 = state_12465;var statearr_12478_12497 = state_12465__$1;(statearr_12478_12497[2] = inst_12457);
(statearr_12478_12497[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12466 === 11))
{var inst_12442 = (state_12465[7]);var inst_12452 = (state_12465[2]);var inst_12453 = (inst_12442 + 1);var inst_12442__$1 = inst_12453;var state_12465__$1 = (function (){var statearr_12479 = state_12465;(statearr_12479[10] = inst_12452);
(statearr_12479[7] = inst_12442__$1);
return statearr_12479;
})();var statearr_12480_12498 = state_12465__$1;(statearr_12480_12498[2] = null);
(statearr_12480_12498[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12484 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12484[0] = state_machine__6871__auto__);
(statearr_12484[1] = 1);
return statearr_12484;
});
var state_machine__6871__auto____1 = (function (state_12465){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12465);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12485){if((e12485 instanceof Object))
{var ex__6874__auto__ = e12485;var statearr_12486_12499 = state_12465;(statearr_12486_12499[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12465);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12500 = state_12465;
state_12465 = G__12500;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12465){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12487 = f__6886__auto__.call(null);(statearr_12487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12488);
return statearr_12487;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12597 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12572){var state_val_12573 = (state_12572[1]);if((state_val_12573 === 1))
{var inst_12549 = null;var state_12572__$1 = (function (){var statearr_12574 = state_12572;(statearr_12574[7] = inst_12549);
return statearr_12574;
})();var statearr_12575_12598 = state_12572__$1;(statearr_12575_12598[2] = null);
(statearr_12575_12598[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12573 === 2))
{var state_12572__$1 = state_12572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12572__$1,4,ch);
} else
{if((state_val_12573 === 3))
{var inst_12569 = (state_12572[2]);var inst_12570 = cljs.core.async.close_BANG_.call(null,out);var state_12572__$1 = (function (){var statearr_12576 = state_12572;(statearr_12576[8] = inst_12569);
return statearr_12576;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12572__$1,inst_12570);
} else
{if((state_val_12573 === 4))
{var inst_12552 = (state_12572[9]);var inst_12552__$1 = (state_12572[2]);var inst_12553 = (inst_12552__$1 == null);var inst_12554 = cljs.core.not.call(null,inst_12553);var state_12572__$1 = (function (){var statearr_12577 = state_12572;(statearr_12577[9] = inst_12552__$1);
return statearr_12577;
})();if(inst_12554)
{var statearr_12578_12599 = state_12572__$1;(statearr_12578_12599[1] = 5);
} else
{var statearr_12579_12600 = state_12572__$1;(statearr_12579_12600[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12573 === 5))
{var inst_12552 = (state_12572[9]);var inst_12549 = (state_12572[7]);var inst_12556 = cljs.core._EQ_.call(null,inst_12552,inst_12549);var state_12572__$1 = state_12572;if(inst_12556)
{var statearr_12580_12601 = state_12572__$1;(statearr_12580_12601[1] = 8);
} else
{var statearr_12581_12602 = state_12572__$1;(statearr_12581_12602[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12573 === 6))
{var state_12572__$1 = state_12572;var statearr_12583_12603 = state_12572__$1;(statearr_12583_12603[2] = null);
(statearr_12583_12603[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12573 === 7))
{var inst_12567 = (state_12572[2]);var state_12572__$1 = state_12572;var statearr_12584_12604 = state_12572__$1;(statearr_12584_12604[2] = inst_12567);
(statearr_12584_12604[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12573 === 8))
{var inst_12549 = (state_12572[7]);var tmp12582 = inst_12549;var inst_12549__$1 = tmp12582;var state_12572__$1 = (function (){var statearr_12585 = state_12572;(statearr_12585[7] = inst_12549__$1);
return statearr_12585;
})();var statearr_12586_12605 = state_12572__$1;(statearr_12586_12605[2] = null);
(statearr_12586_12605[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12573 === 9))
{var inst_12552 = (state_12572[9]);var state_12572__$1 = state_12572;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12572__$1,11,out,inst_12552);
} else
{if((state_val_12573 === 10))
{var inst_12564 = (state_12572[2]);var state_12572__$1 = state_12572;var statearr_12587_12606 = state_12572__$1;(statearr_12587_12606[2] = inst_12564);
(statearr_12587_12606[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12573 === 11))
{var inst_12552 = (state_12572[9]);var inst_12561 = (state_12572[2]);var inst_12549 = inst_12552;var state_12572__$1 = (function (){var statearr_12588 = state_12572;(statearr_12588[10] = inst_12561);
(statearr_12588[7] = inst_12549);
return statearr_12588;
})();var statearr_12589_12607 = state_12572__$1;(statearr_12589_12607[2] = null);
(statearr_12589_12607[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12593 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12593[0] = state_machine__6871__auto__);
(statearr_12593[1] = 1);
return statearr_12593;
});
var state_machine__6871__auto____1 = (function (state_12572){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12572);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12594){if((e12594 instanceof Object))
{var ex__6874__auto__ = e12594;var statearr_12595_12608 = state_12572;(statearr_12595_12608[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12572);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12609 = state_12572;
state_12572 = G__12609;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12572){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12596 = f__6886__auto__.call(null);(statearr_12596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12597);
return statearr_12596;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12714){var state_val_12715 = (state_12714[1]);if((state_val_12715 === 1))
{var inst_12677 = (new Array(n));var inst_12678 = inst_12677;var inst_12679 = 0;var state_12714__$1 = (function (){var statearr_12716 = state_12714;(statearr_12716[7] = inst_12678);
(statearr_12716[8] = inst_12679);
return statearr_12716;
})();var statearr_12717_12745 = state_12714__$1;(statearr_12717_12745[2] = null);
(statearr_12717_12745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 2))
{var state_12714__$1 = state_12714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12714__$1,4,ch);
} else
{if((state_val_12715 === 3))
{var inst_12712 = (state_12714[2]);var state_12714__$1 = state_12714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12714__$1,inst_12712);
} else
{if((state_val_12715 === 4))
{var inst_12682 = (state_12714[9]);var inst_12682__$1 = (state_12714[2]);var inst_12683 = (inst_12682__$1 == null);var inst_12684 = cljs.core.not.call(null,inst_12683);var state_12714__$1 = (function (){var statearr_12718 = state_12714;(statearr_12718[9] = inst_12682__$1);
return statearr_12718;
})();if(inst_12684)
{var statearr_12719_12746 = state_12714__$1;(statearr_12719_12746[1] = 5);
} else
{var statearr_12720_12747 = state_12714__$1;(statearr_12720_12747[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 5))
{var inst_12682 = (state_12714[9]);var inst_12687 = (state_12714[10]);var inst_12678 = (state_12714[7]);var inst_12679 = (state_12714[8]);var inst_12686 = (inst_12678[inst_12679] = inst_12682);var inst_12687__$1 = (inst_12679 + 1);var inst_12688 = (inst_12687__$1 < n);var state_12714__$1 = (function (){var statearr_12721 = state_12714;(statearr_12721[10] = inst_12687__$1);
(statearr_12721[11] = inst_12686);
return statearr_12721;
})();if(cljs.core.truth_(inst_12688))
{var statearr_12722_12748 = state_12714__$1;(statearr_12722_12748[1] = 8);
} else
{var statearr_12723_12749 = state_12714__$1;(statearr_12723_12749[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 6))
{var inst_12679 = (state_12714[8]);var inst_12700 = (inst_12679 > 0);var state_12714__$1 = state_12714;if(cljs.core.truth_(inst_12700))
{var statearr_12725_12750 = state_12714__$1;(statearr_12725_12750[1] = 12);
} else
{var statearr_12726_12751 = state_12714__$1;(statearr_12726_12751[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 7))
{var inst_12710 = (state_12714[2]);var state_12714__$1 = state_12714;var statearr_12727_12752 = state_12714__$1;(statearr_12727_12752[2] = inst_12710);
(statearr_12727_12752[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 8))
{var inst_12687 = (state_12714[10]);var inst_12678 = (state_12714[7]);var tmp12724 = inst_12678;var inst_12678__$1 = tmp12724;var inst_12679 = inst_12687;var state_12714__$1 = (function (){var statearr_12728 = state_12714;(statearr_12728[7] = inst_12678__$1);
(statearr_12728[8] = inst_12679);
return statearr_12728;
})();var statearr_12729_12753 = state_12714__$1;(statearr_12729_12753[2] = null);
(statearr_12729_12753[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 9))
{var inst_12678 = (state_12714[7]);var inst_12692 = cljs.core.vec.call(null,inst_12678);var state_12714__$1 = state_12714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12714__$1,11,out,inst_12692);
} else
{if((state_val_12715 === 10))
{var inst_12698 = (state_12714[2]);var state_12714__$1 = state_12714;var statearr_12730_12754 = state_12714__$1;(statearr_12730_12754[2] = inst_12698);
(statearr_12730_12754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 11))
{var inst_12694 = (state_12714[2]);var inst_12695 = (new Array(n));var inst_12678 = inst_12695;var inst_12679 = 0;var state_12714__$1 = (function (){var statearr_12731 = state_12714;(statearr_12731[12] = inst_12694);
(statearr_12731[7] = inst_12678);
(statearr_12731[8] = inst_12679);
return statearr_12731;
})();var statearr_12732_12755 = state_12714__$1;(statearr_12732_12755[2] = null);
(statearr_12732_12755[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 12))
{var inst_12678 = (state_12714[7]);var inst_12702 = cljs.core.vec.call(null,inst_12678);var state_12714__$1 = state_12714;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12714__$1,15,out,inst_12702);
} else
{if((state_val_12715 === 13))
{var state_12714__$1 = state_12714;var statearr_12733_12756 = state_12714__$1;(statearr_12733_12756[2] = null);
(statearr_12733_12756[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 14))
{var inst_12707 = (state_12714[2]);var inst_12708 = cljs.core.async.close_BANG_.call(null,out);var state_12714__$1 = (function (){var statearr_12734 = state_12714;(statearr_12734[13] = inst_12707);
return statearr_12734;
})();var statearr_12735_12757 = state_12714__$1;(statearr_12735_12757[2] = inst_12708);
(statearr_12735_12757[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12715 === 15))
{var inst_12704 = (state_12714[2]);var state_12714__$1 = state_12714;var statearr_12736_12758 = state_12714__$1;(statearr_12736_12758[2] = inst_12704);
(statearr_12736_12758[1] = 14);
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
var state_machine__6871__auto____0 = (function (){var statearr_12740 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12740[0] = state_machine__6871__auto__);
(statearr_12740[1] = 1);
return statearr_12740;
});
var state_machine__6871__auto____1 = (function (state_12714){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12714);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12741){if((e12741 instanceof Object))
{var ex__6874__auto__ = e12741;var statearr_12742_12759 = state_12714;(statearr_12742_12759[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12760 = state_12714;
state_12714 = G__12760;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12714){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12743 = f__6886__auto__.call(null);(statearr_12743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12744);
return statearr_12743;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12873){var state_val_12874 = (state_12873[1]);if((state_val_12874 === 1))
{var inst_12832 = [];var inst_12833 = inst_12832;var inst_12834 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12873__$1 = (function (){var statearr_12875 = state_12873;(statearr_12875[7] = inst_12833);
(statearr_12875[8] = inst_12834);
return statearr_12875;
})();var statearr_12876_12904 = state_12873__$1;(statearr_12876_12904[2] = null);
(statearr_12876_12904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 2))
{var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12873__$1,4,ch);
} else
{if((state_val_12874 === 3))
{var inst_12871 = (state_12873[2]);var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12873__$1,inst_12871);
} else
{if((state_val_12874 === 4))
{var inst_12837 = (state_12873[9]);var inst_12837__$1 = (state_12873[2]);var inst_12838 = (inst_12837__$1 == null);var inst_12839 = cljs.core.not.call(null,inst_12838);var state_12873__$1 = (function (){var statearr_12877 = state_12873;(statearr_12877[9] = inst_12837__$1);
return statearr_12877;
})();if(inst_12839)
{var statearr_12878_12905 = state_12873__$1;(statearr_12878_12905[1] = 5);
} else
{var statearr_12879_12906 = state_12873__$1;(statearr_12879_12906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 5))
{var inst_12837 = (state_12873[9]);var inst_12841 = (state_12873[10]);var inst_12834 = (state_12873[8]);var inst_12841__$1 = f.call(null,inst_12837);var inst_12842 = cljs.core._EQ_.call(null,inst_12841__$1,inst_12834);var inst_12843 = cljs.core.keyword_identical_QMARK_.call(null,inst_12834,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12844 = (inst_12842) || (inst_12843);var state_12873__$1 = (function (){var statearr_12880 = state_12873;(statearr_12880[10] = inst_12841__$1);
return statearr_12880;
})();if(cljs.core.truth_(inst_12844))
{var statearr_12881_12907 = state_12873__$1;(statearr_12881_12907[1] = 8);
} else
{var statearr_12882_12908 = state_12873__$1;(statearr_12882_12908[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 6))
{var inst_12833 = (state_12873[7]);var inst_12858 = inst_12833.length;var inst_12859 = (inst_12858 > 0);var state_12873__$1 = state_12873;if(cljs.core.truth_(inst_12859))
{var statearr_12884_12909 = state_12873__$1;(statearr_12884_12909[1] = 12);
} else
{var statearr_12885_12910 = state_12873__$1;(statearr_12885_12910[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 7))
{var inst_12869 = (state_12873[2]);var state_12873__$1 = state_12873;var statearr_12886_12911 = state_12873__$1;(statearr_12886_12911[2] = inst_12869);
(statearr_12886_12911[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 8))
{var inst_12837 = (state_12873[9]);var inst_12841 = (state_12873[10]);var inst_12833 = (state_12873[7]);var inst_12846 = inst_12833.push(inst_12837);var tmp12883 = inst_12833;var inst_12833__$1 = tmp12883;var inst_12834 = inst_12841;var state_12873__$1 = (function (){var statearr_12887 = state_12873;(statearr_12887[11] = inst_12846);
(statearr_12887[7] = inst_12833__$1);
(statearr_12887[8] = inst_12834);
return statearr_12887;
})();var statearr_12888_12912 = state_12873__$1;(statearr_12888_12912[2] = null);
(statearr_12888_12912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 9))
{var inst_12833 = (state_12873[7]);var inst_12849 = cljs.core.vec.call(null,inst_12833);var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12873__$1,11,out,inst_12849);
} else
{if((state_val_12874 === 10))
{var inst_12856 = (state_12873[2]);var state_12873__$1 = state_12873;var statearr_12889_12913 = state_12873__$1;(statearr_12889_12913[2] = inst_12856);
(statearr_12889_12913[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 11))
{var inst_12837 = (state_12873[9]);var inst_12841 = (state_12873[10]);var inst_12851 = (state_12873[2]);var inst_12852 = [];var inst_12853 = inst_12852.push(inst_12837);var inst_12833 = inst_12852;var inst_12834 = inst_12841;var state_12873__$1 = (function (){var statearr_12890 = state_12873;(statearr_12890[12] = inst_12853);
(statearr_12890[13] = inst_12851);
(statearr_12890[7] = inst_12833);
(statearr_12890[8] = inst_12834);
return statearr_12890;
})();var statearr_12891_12914 = state_12873__$1;(statearr_12891_12914[2] = null);
(statearr_12891_12914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 12))
{var inst_12833 = (state_12873[7]);var inst_12861 = cljs.core.vec.call(null,inst_12833);var state_12873__$1 = state_12873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12873__$1,15,out,inst_12861);
} else
{if((state_val_12874 === 13))
{var state_12873__$1 = state_12873;var statearr_12892_12915 = state_12873__$1;(statearr_12892_12915[2] = null);
(statearr_12892_12915[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 14))
{var inst_12866 = (state_12873[2]);var inst_12867 = cljs.core.async.close_BANG_.call(null,out);var state_12873__$1 = (function (){var statearr_12893 = state_12873;(statearr_12893[14] = inst_12866);
return statearr_12893;
})();var statearr_12894_12916 = state_12873__$1;(statearr_12894_12916[2] = inst_12867);
(statearr_12894_12916[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12874 === 15))
{var inst_12863 = (state_12873[2]);var state_12873__$1 = state_12873;var statearr_12895_12917 = state_12873__$1;(statearr_12895_12917[2] = inst_12863);
(statearr_12895_12917[1] = 14);
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
var state_machine__6871__auto____0 = (function (){var statearr_12899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12899[0] = state_machine__6871__auto__);
(statearr_12899[1] = 1);
return statearr_12899;
});
var state_machine__6871__auto____1 = (function (state_12873){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12873);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12900){if((e12900 instanceof Object))
{var ex__6874__auto__ = e12900;var statearr_12901_12918 = state_12873;(statearr_12901_12918[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12919 = state_12873;
state_12873 = G__12919;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12873){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12902 = f__6886__auto__.call(null);(statearr_12902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12903);
return statearr_12902;
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