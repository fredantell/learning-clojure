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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t10382 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10382 = (function (f,fn_handler,meta10383){
this.f = f;
this.fn_handler = fn_handler;
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
var ___$1 = this;return true;
});
cljs.core.async.t10382.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t10382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10384){var self__ = this;
var _10384__$1 = this;return self__.meta10383;
});
cljs.core.async.t10382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10384,meta10383__$1){var self__ = this;
var _10384__$1 = this;return (new cljs.core.async.t10382(self__.f,self__.fn_handler,meta10383__$1));
});
cljs.core.async.__GT_t10382 = (function __GT_t10382(f__$1,fn_handler__$1,meta10383){return (new cljs.core.async.t10382(f__$1,fn_handler__$1,meta10383));
});
}
return (new cljs.core.async.t10382(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10386 = buff;if(G__10386)
{var bit__4721__auto__ = null;if(cljs.core.truth_((function (){var or__4071__auto__ = bit__4721__auto__;if(cljs.core.truth_(or__4071__auto__))
{return or__4071__auto__;
} else
{return G__10386.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10386.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10386);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10386);
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
{var val_10387 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10387);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10387);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4919__auto___10388 = n;var x_10389 = 0;while(true){
if((x_10389 < n__4919__auto___10388))
{(a[x_10389] = 0);
{
var G__10390 = (x_10389 + 1);
x_10389 = G__10390;
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
var G__10391 = (i + 1);
i = G__10391;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10395 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10395 = (function (flag,alt_flag,meta10396){
this.flag = flag;
this.alt_flag = alt_flag;
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
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10395.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10397){var self__ = this;
var _10397__$1 = this;return self__.meta10396;
});
cljs.core.async.t10395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10397,meta10396__$1){var self__ = this;
var _10397__$1 = this;return (new cljs.core.async.t10395(self__.flag,self__.alt_flag,meta10396__$1));
});
cljs.core.async.__GT_t10395 = (function __GT_t10395(flag__$1,alt_flag__$1,meta10396){return (new cljs.core.async.t10395(flag__$1,alt_flag__$1,meta10396));
});
}
return (new cljs.core.async.t10395(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10401 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10401 = (function (cb,flag,alt_handler,meta10402){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10402 = meta10402;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10401.cljs$lang$type = true;
cljs.core.async.t10401.cljs$lang$ctorStr = "cljs.core.async/t10401";
cljs.core.async.t10401.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10401");
});
cljs.core.async.t10401.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10401.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10401.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10401.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10403){var self__ = this;
var _10403__$1 = this;return self__.meta10402;
});
cljs.core.async.t10401.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10403,meta10402__$1){var self__ = this;
var _10403__$1 = this;return (new cljs.core.async.t10401(self__.cb,self__.flag,self__.alt_handler,meta10402__$1));
});
cljs.core.async.__GT_t10401 = (function __GT_t10401(cb__$1,flag__$1,alt_handler__$1,meta10402){return (new cljs.core.async.t10401(cb__$1,flag__$1,alt_handler__$1,meta10402));
});
}
return (new cljs.core.async.t10401(cb,flag,alt_handler,null));
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
return (function (p1__10404_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10404_SHARP_,port], null));
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
var G__10405 = (i + 1);
i = G__10405;
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
var alts_BANG___delegate = function (ports,p__10406){var map__10408 = p__10406;var map__10408__$1 = ((cljs.core.seq_QMARK_.call(null,map__10408))?cljs.core.apply.call(null,cljs.core.hash_map,map__10408):map__10408);var opts = map__10408__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10406 = null;if (arguments.length > 1) {
  p__10406 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10406);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10409){
var ports = cljs.core.first(arglist__10409);
var p__10406 = cljs.core.rest(arglist__10409);
return alts_BANG___delegate(ports,p__10406);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10417 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10417 = (function (ch,f,map_LT_,meta10418){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10418 = meta10418;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10417.cljs$lang$type = true;
cljs.core.async.t10417.cljs$lang$ctorStr = "cljs.core.async/t10417";
cljs.core.async.t10417.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10417");
});
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10420 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10420 = (function (fn1,_,meta10418,ch,f,map_LT_,meta10421){
this.fn1 = fn1;
this._ = _;
this.meta10418 = meta10418;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10421 = meta10421;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10420.cljs$lang$type = true;
cljs.core.async.t10420.cljs$lang$ctorStr = "cljs.core.async/t10420";
cljs.core.async.t10420.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10420");
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10420.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10410_SHARP_){return f1.call(null,(((p1__10410_SHARP_ == null))?null:self__.f.call(null,p1__10410_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10420.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10422){var self__ = this;
var _10422__$1 = this;return self__.meta10421;
});
cljs.core.async.t10420.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10422,meta10421__$1){var self__ = this;
var _10422__$1 = this;return (new cljs.core.async.t10420(self__.fn1,self__._,self__.meta10418,self__.ch,self__.f,self__.map_LT_,meta10421__$1));
});
cljs.core.async.__GT_t10420 = (function __GT_t10420(fn1__$1,___$2,meta10418__$1,ch__$2,f__$2,map_LT___$2,meta10421){return (new cljs.core.async.t10420(fn1__$1,___$2,meta10418__$1,ch__$2,f__$2,map_LT___$2,meta10421));
});
}
return (new cljs.core.async.t10420(fn1,___$1,self__.meta10418,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10417.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10417.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10419){var self__ = this;
var _10419__$1 = this;return self__.meta10418;
});
cljs.core.async.t10417.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10419,meta10418__$1){var self__ = this;
var _10419__$1 = this;return (new cljs.core.async.t10417(self__.ch,self__.f,self__.map_LT_,meta10418__$1));
});
cljs.core.async.__GT_t10417 = (function __GT_t10417(ch__$1,f__$1,map_LT___$1,meta10418){return (new cljs.core.async.t10417(ch__$1,f__$1,map_LT___$1,meta10418));
});
}
return (new cljs.core.async.t10417(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10426 = (function (ch,f,map_GT_,meta10427){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
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
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
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
var _10428__$1 = this;return (new cljs.core.async.t10426(self__.ch,self__.f,self__.map_GT_,meta10427__$1));
});
cljs.core.async.__GT_t10426 = (function __GT_t10426(ch__$1,f__$1,map_GT___$1,meta10427){return (new cljs.core.async.t10426(ch__$1,f__$1,map_GT___$1,meta10427));
});
}
return (new cljs.core.async.t10426(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10432 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10432 = (function (ch,p,filter_GT_,meta10433){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10433 = meta10433;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10432.cljs$lang$type = true;
cljs.core.async.t10432.cljs$lang$ctorStr = "cljs.core.async/t10432";
cljs.core.async.t10432.cljs$lang$ctorPrWriter = (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t10432");
});
cljs.core.async.t10432.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10432.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10432.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10432.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10432.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10432.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10432.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10434){var self__ = this;
var _10434__$1 = this;return self__.meta10433;
});
cljs.core.async.t10432.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10434,meta10433__$1){var self__ = this;
var _10434__$1 = this;return (new cljs.core.async.t10432(self__.ch,self__.p,self__.filter_GT_,meta10433__$1));
});
cljs.core.async.__GT_t10432 = (function __GT_t10432(ch__$1,p__$1,filter_GT___$1,meta10433){return (new cljs.core.async.t10432(ch__$1,p__$1,filter_GT___$1,meta10433));
});
}
return (new cljs.core.async.t10432(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___10517 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10496){var state_val_10497 = (state_10496[1]);if((state_val_10497 === 1))
{var state_10496__$1 = state_10496;var statearr_10498_10518 = state_10496__$1;(statearr_10498_10518[2] = null);
(statearr_10498_10518[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 2))
{var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10496__$1,4,ch);
} else
{if((state_val_10497 === 3))
{var inst_10494 = (state_10496[2]);var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10496__$1,inst_10494);
} else
{if((state_val_10497 === 4))
{var inst_10478 = (state_10496[7]);var inst_10478__$1 = (state_10496[2]);var inst_10479 = (inst_10478__$1 == null);var state_10496__$1 = (function (){var statearr_10499 = state_10496;(statearr_10499[7] = inst_10478__$1);
return statearr_10499;
})();if(cljs.core.truth_(inst_10479))
{var statearr_10500_10519 = state_10496__$1;(statearr_10500_10519[1] = 5);
} else
{var statearr_10501_10520 = state_10496__$1;(statearr_10501_10520[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 5))
{var inst_10481 = cljs.core.async.close_BANG_.call(null,out);var state_10496__$1 = state_10496;var statearr_10502_10521 = state_10496__$1;(statearr_10502_10521[2] = inst_10481);
(statearr_10502_10521[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 6))
{var inst_10478 = (state_10496[7]);var inst_10483 = p.call(null,inst_10478);var state_10496__$1 = state_10496;if(cljs.core.truth_(inst_10483))
{var statearr_10503_10522 = state_10496__$1;(statearr_10503_10522[1] = 8);
} else
{var statearr_10504_10523 = state_10496__$1;(statearr_10504_10523[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 7))
{var inst_10492 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10505_10524 = state_10496__$1;(statearr_10505_10524[2] = inst_10492);
(statearr_10505_10524[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 8))
{var inst_10478 = (state_10496[7]);var state_10496__$1 = state_10496;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10496__$1,11,out,inst_10478);
} else
{if((state_val_10497 === 9))
{var state_10496__$1 = state_10496;var statearr_10506_10525 = state_10496__$1;(statearr_10506_10525[2] = null);
(statearr_10506_10525[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 10))
{var inst_10489 = (state_10496[2]);var state_10496__$1 = (function (){var statearr_10507 = state_10496;(statearr_10507[8] = inst_10489);
return statearr_10507;
})();var statearr_10508_10526 = state_10496__$1;(statearr_10508_10526[2] = null);
(statearr_10508_10526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10497 === 11))
{var inst_10486 = (state_10496[2]);var state_10496__$1 = state_10496;var statearr_10509_10527 = state_10496__$1;(statearr_10509_10527[2] = inst_10486);
(statearr_10509_10527[1] = 10);
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
var state_machine__6871__auto____0 = (function (){var statearr_10513 = [null,null,null,null,null,null,null,null,null];(statearr_10513[0] = state_machine__6871__auto__);
(statearr_10513[1] = 1);
return statearr_10513;
});
var state_machine__6871__auto____1 = (function (state_10496){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10496);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10514){if((e10514 instanceof Object))
{var ex__6874__auto__ = e10514;var statearr_10515_10528 = state_10496;(statearr_10515_10528[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10496);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10529 = state_10496;
state_10496 = G__10529;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10496){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10516 = f__6886__auto__.call(null);(statearr_10516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10517);
return statearr_10516;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10681){var state_val_10682 = (state_10681[1]);if((state_val_10682 === 1))
{var state_10681__$1 = state_10681;var statearr_10683_10720 = state_10681__$1;(statearr_10683_10720[2] = null);
(statearr_10683_10720[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 2))
{var state_10681__$1 = state_10681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10681__$1,4,in$);
} else
{if((state_val_10682 === 3))
{var inst_10679 = (state_10681[2]);var state_10681__$1 = state_10681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10681__$1,inst_10679);
} else
{if((state_val_10682 === 4))
{var inst_10627 = (state_10681[7]);var inst_10627__$1 = (state_10681[2]);var inst_10628 = (inst_10627__$1 == null);var state_10681__$1 = (function (){var statearr_10684 = state_10681;(statearr_10684[7] = inst_10627__$1);
return statearr_10684;
})();if(cljs.core.truth_(inst_10628))
{var statearr_10685_10721 = state_10681__$1;(statearr_10685_10721[1] = 5);
} else
{var statearr_10686_10722 = state_10681__$1;(statearr_10686_10722[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 5))
{var inst_10630 = cljs.core.async.close_BANG_.call(null,out);var state_10681__$1 = state_10681;var statearr_10687_10723 = state_10681__$1;(statearr_10687_10723[2] = inst_10630);
(statearr_10687_10723[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 6))
{var inst_10627 = (state_10681[7]);var inst_10632 = f.call(null,inst_10627);var inst_10637 = cljs.core.seq.call(null,inst_10632);var inst_10638 = inst_10637;var inst_10639 = null;var inst_10640 = 0;var inst_10641 = 0;var state_10681__$1 = (function (){var statearr_10688 = state_10681;(statearr_10688[8] = inst_10641);
(statearr_10688[9] = inst_10640);
(statearr_10688[10] = inst_10638);
(statearr_10688[11] = inst_10639);
return statearr_10688;
})();var statearr_10689_10724 = state_10681__$1;(statearr_10689_10724[2] = null);
(statearr_10689_10724[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 7))
{var inst_10677 = (state_10681[2]);var state_10681__$1 = state_10681;var statearr_10690_10725 = state_10681__$1;(statearr_10690_10725[2] = inst_10677);
(statearr_10690_10725[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 8))
{var inst_10641 = (state_10681[8]);var inst_10640 = (state_10681[9]);var inst_10643 = (inst_10641 < inst_10640);var inst_10644 = inst_10643;var state_10681__$1 = state_10681;if(cljs.core.truth_(inst_10644))
{var statearr_10691_10726 = state_10681__$1;(statearr_10691_10726[1] = 10);
} else
{var statearr_10692_10727 = state_10681__$1;(statearr_10692_10727[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 9))
{var inst_10674 = (state_10681[2]);var state_10681__$1 = (function (){var statearr_10693 = state_10681;(statearr_10693[12] = inst_10674);
return statearr_10693;
})();var statearr_10694_10728 = state_10681__$1;(statearr_10694_10728[2] = null);
(statearr_10694_10728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 10))
{var inst_10641 = (state_10681[8]);var inst_10639 = (state_10681[11]);var inst_10646 = cljs.core._nth.call(null,inst_10639,inst_10641);var state_10681__$1 = state_10681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10681__$1,13,out,inst_10646);
} else
{if((state_val_10682 === 11))
{var inst_10652 = (state_10681[13]);var inst_10638 = (state_10681[10]);var inst_10652__$1 = cljs.core.seq.call(null,inst_10638);var state_10681__$1 = (function (){var statearr_10698 = state_10681;(statearr_10698[13] = inst_10652__$1);
return statearr_10698;
})();if(inst_10652__$1)
{var statearr_10699_10729 = state_10681__$1;(statearr_10699_10729[1] = 14);
} else
{var statearr_10700_10730 = state_10681__$1;(statearr_10700_10730[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 12))
{var inst_10672 = (state_10681[2]);var state_10681__$1 = state_10681;var statearr_10701_10731 = state_10681__$1;(statearr_10701_10731[2] = inst_10672);
(statearr_10701_10731[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 13))
{var inst_10641 = (state_10681[8]);var inst_10640 = (state_10681[9]);var inst_10638 = (state_10681[10]);var inst_10639 = (state_10681[11]);var inst_10648 = (state_10681[2]);var inst_10649 = (inst_10641 + 1);var tmp10695 = inst_10640;var tmp10696 = inst_10638;var tmp10697 = inst_10639;var inst_10638__$1 = tmp10696;var inst_10639__$1 = tmp10697;var inst_10640__$1 = tmp10695;var inst_10641__$1 = inst_10649;var state_10681__$1 = (function (){var statearr_10702 = state_10681;(statearr_10702[8] = inst_10641__$1);
(statearr_10702[9] = inst_10640__$1);
(statearr_10702[10] = inst_10638__$1);
(statearr_10702[11] = inst_10639__$1);
(statearr_10702[14] = inst_10648);
return statearr_10702;
})();var statearr_10703_10732 = state_10681__$1;(statearr_10703_10732[2] = null);
(statearr_10703_10732[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 14))
{var inst_10652 = (state_10681[13]);var inst_10654 = cljs.core.chunked_seq_QMARK_.call(null,inst_10652);var state_10681__$1 = state_10681;if(inst_10654)
{var statearr_10704_10733 = state_10681__$1;(statearr_10704_10733[1] = 17);
} else
{var statearr_10705_10734 = state_10681__$1;(statearr_10705_10734[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 15))
{var state_10681__$1 = state_10681;var statearr_10706_10735 = state_10681__$1;(statearr_10706_10735[2] = null);
(statearr_10706_10735[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 16))
{var inst_10670 = (state_10681[2]);var state_10681__$1 = state_10681;var statearr_10707_10736 = state_10681__$1;(statearr_10707_10736[2] = inst_10670);
(statearr_10707_10736[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 17))
{var inst_10652 = (state_10681[13]);var inst_10656 = cljs.core.chunk_first.call(null,inst_10652);var inst_10657 = cljs.core.chunk_rest.call(null,inst_10652);var inst_10658 = cljs.core.count.call(null,inst_10656);var inst_10638 = inst_10657;var inst_10639 = inst_10656;var inst_10640 = inst_10658;var inst_10641 = 0;var state_10681__$1 = (function (){var statearr_10708 = state_10681;(statearr_10708[8] = inst_10641);
(statearr_10708[9] = inst_10640);
(statearr_10708[10] = inst_10638);
(statearr_10708[11] = inst_10639);
return statearr_10708;
})();var statearr_10709_10737 = state_10681__$1;(statearr_10709_10737[2] = null);
(statearr_10709_10737[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 18))
{var inst_10652 = (state_10681[13]);var inst_10661 = cljs.core.first.call(null,inst_10652);var state_10681__$1 = state_10681;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10681__$1,20,out,inst_10661);
} else
{if((state_val_10682 === 19))
{var inst_10667 = (state_10681[2]);var state_10681__$1 = state_10681;var statearr_10710_10738 = state_10681__$1;(statearr_10710_10738[2] = inst_10667);
(statearr_10710_10738[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10682 === 20))
{var inst_10652 = (state_10681[13]);var inst_10663 = (state_10681[2]);var inst_10664 = cljs.core.next.call(null,inst_10652);var inst_10638 = inst_10664;var inst_10639 = null;var inst_10640 = 0;var inst_10641 = 0;var state_10681__$1 = (function (){var statearr_10711 = state_10681;(statearr_10711[8] = inst_10641);
(statearr_10711[9] = inst_10640);
(statearr_10711[10] = inst_10638);
(statearr_10711[11] = inst_10639);
(statearr_10711[15] = inst_10663);
return statearr_10711;
})();var statearr_10712_10739 = state_10681__$1;(statearr_10712_10739[2] = null);
(statearr_10712_10739[1] = 8);
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
var state_machine__6871__auto____0 = (function (){var statearr_10716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10716[0] = state_machine__6871__auto__);
(statearr_10716[1] = 1);
return statearr_10716;
});
var state_machine__6871__auto____1 = (function (state_10681){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10681);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10717){if((e10717 instanceof Object))
{var ex__6874__auto__ = e10717;var statearr_10718_10740 = state_10681;(statearr_10718_10740[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10717;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10741 = state_10681;
state_10681 = G__10741;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10681){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10719 = f__6886__auto__.call(null);(statearr_10719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_10719;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6885__auto___10822 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10801){var state_val_10802 = (state_10801[1]);if((state_val_10802 === 1))
{var state_10801__$1 = state_10801;var statearr_10803_10823 = state_10801__$1;(statearr_10803_10823[2] = null);
(statearr_10803_10823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 2))
{var state_10801__$1 = state_10801;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10801__$1,4,from);
} else
{if((state_val_10802 === 3))
{var inst_10799 = (state_10801[2]);var state_10801__$1 = state_10801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10801__$1,inst_10799);
} else
{if((state_val_10802 === 4))
{var inst_10784 = (state_10801[7]);var inst_10784__$1 = (state_10801[2]);var inst_10785 = (inst_10784__$1 == null);var state_10801__$1 = (function (){var statearr_10804 = state_10801;(statearr_10804[7] = inst_10784__$1);
return statearr_10804;
})();if(cljs.core.truth_(inst_10785))
{var statearr_10805_10824 = state_10801__$1;(statearr_10805_10824[1] = 5);
} else
{var statearr_10806_10825 = state_10801__$1;(statearr_10806_10825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 5))
{var state_10801__$1 = state_10801;if(cljs.core.truth_(close_QMARK_))
{var statearr_10807_10826 = state_10801__$1;(statearr_10807_10826[1] = 8);
} else
{var statearr_10808_10827 = state_10801__$1;(statearr_10808_10827[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 6))
{var inst_10784 = (state_10801[7]);var state_10801__$1 = state_10801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10801__$1,11,to,inst_10784);
} else
{if((state_val_10802 === 7))
{var inst_10797 = (state_10801[2]);var state_10801__$1 = state_10801;var statearr_10809_10828 = state_10801__$1;(statearr_10809_10828[2] = inst_10797);
(statearr_10809_10828[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 8))
{var inst_10788 = cljs.core.async.close_BANG_.call(null,to);var state_10801__$1 = state_10801;var statearr_10810_10829 = state_10801__$1;(statearr_10810_10829[2] = inst_10788);
(statearr_10810_10829[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 9))
{var state_10801__$1 = state_10801;var statearr_10811_10830 = state_10801__$1;(statearr_10811_10830[2] = null);
(statearr_10811_10830[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 10))
{var inst_10791 = (state_10801[2]);var state_10801__$1 = state_10801;var statearr_10812_10831 = state_10801__$1;(statearr_10812_10831[2] = inst_10791);
(statearr_10812_10831[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10802 === 11))
{var inst_10794 = (state_10801[2]);var state_10801__$1 = (function (){var statearr_10813 = state_10801;(statearr_10813[8] = inst_10794);
return statearr_10813;
})();var statearr_10814_10832 = state_10801__$1;(statearr_10814_10832[2] = null);
(statearr_10814_10832[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_10818 = [null,null,null,null,null,null,null,null,null];(statearr_10818[0] = state_machine__6871__auto__);
(statearr_10818[1] = 1);
return statearr_10818;
});
var state_machine__6871__auto____1 = (function (state_10801){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10801);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10819){if((e10819 instanceof Object))
{var ex__6874__auto__ = e10819;var statearr_10820_10833 = state_10801;(statearr_10820_10833[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10834 = state_10801;
state_10801 = G__10834;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10801){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10821 = f__6886__auto__.call(null);(statearr_10821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10822);
return statearr_10821;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6885__auto___10921 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10899){var state_val_10900 = (state_10899[1]);if((state_val_10900 === 1))
{var state_10899__$1 = state_10899;var statearr_10901_10922 = state_10899__$1;(statearr_10901_10922[2] = null);
(statearr_10901_10922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 2))
{var state_10899__$1 = state_10899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10899__$1,4,ch);
} else
{if((state_val_10900 === 3))
{var inst_10897 = (state_10899[2]);var state_10899__$1 = state_10899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10899__$1,inst_10897);
} else
{if((state_val_10900 === 4))
{var inst_10880 = (state_10899[7]);var inst_10880__$1 = (state_10899[2]);var inst_10881 = (inst_10880__$1 == null);var state_10899__$1 = (function (){var statearr_10902 = state_10899;(statearr_10902[7] = inst_10880__$1);
return statearr_10902;
})();if(cljs.core.truth_(inst_10881))
{var statearr_10903_10923 = state_10899__$1;(statearr_10903_10923[1] = 5);
} else
{var statearr_10904_10924 = state_10899__$1;(statearr_10904_10924[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 5))
{var inst_10883 = cljs.core.async.close_BANG_.call(null,tc);var inst_10884 = cljs.core.async.close_BANG_.call(null,fc);var state_10899__$1 = (function (){var statearr_10905 = state_10899;(statearr_10905[8] = inst_10883);
return statearr_10905;
})();var statearr_10906_10925 = state_10899__$1;(statearr_10906_10925[2] = inst_10884);
(statearr_10906_10925[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 6))
{var inst_10880 = (state_10899[7]);var inst_10886 = p.call(null,inst_10880);var state_10899__$1 = state_10899;if(cljs.core.truth_(inst_10886))
{var statearr_10907_10926 = state_10899__$1;(statearr_10907_10926[1] = 9);
} else
{var statearr_10908_10927 = state_10899__$1;(statearr_10908_10927[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 7))
{var inst_10895 = (state_10899[2]);var state_10899__$1 = state_10899;var statearr_10909_10928 = state_10899__$1;(statearr_10909_10928[2] = inst_10895);
(statearr_10909_10928[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 8))
{var inst_10892 = (state_10899[2]);var state_10899__$1 = (function (){var statearr_10910 = state_10899;(statearr_10910[9] = inst_10892);
return statearr_10910;
})();var statearr_10911_10929 = state_10899__$1;(statearr_10911_10929[2] = null);
(statearr_10911_10929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 9))
{var state_10899__$1 = state_10899;var statearr_10912_10930 = state_10899__$1;(statearr_10912_10930[2] = tc);
(statearr_10912_10930[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 10))
{var state_10899__$1 = state_10899;var statearr_10913_10931 = state_10899__$1;(statearr_10913_10931[2] = fc);
(statearr_10913_10931[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10900 === 11))
{var inst_10880 = (state_10899[7]);var inst_10890 = (state_10899[2]);var state_10899__$1 = state_10899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10899__$1,8,inst_10890,inst_10880);
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
var state_machine__6871__auto____0 = (function (){var statearr_10917 = [null,null,null,null,null,null,null,null,null,null];(statearr_10917[0] = state_machine__6871__auto__);
(statearr_10917[1] = 1);
return statearr_10917;
});
var state_machine__6871__auto____1 = (function (state_10899){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10899);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10918){if((e10918 instanceof Object))
{var ex__6874__auto__ = e10918;var statearr_10919_10932 = state_10899;(statearr_10919_10932[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10918;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10933 = state_10899;
state_10899 = G__10933;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10899){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10920 = f__6886__auto__.call(null);(statearr_10920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___10921);
return statearr_10920;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_10980){var state_val_10981 = (state_10980[1]);if((state_val_10981 === 7))
{var inst_10976 = (state_10980[2]);var state_10980__$1 = state_10980;var statearr_10982_10998 = state_10980__$1;(statearr_10982_10998[2] = inst_10976);
(statearr_10982_10998[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 6))
{var inst_10966 = (state_10980[7]);var inst_10969 = (state_10980[8]);var inst_10973 = f.call(null,inst_10966,inst_10969);var inst_10966__$1 = inst_10973;var state_10980__$1 = (function (){var statearr_10983 = state_10980;(statearr_10983[7] = inst_10966__$1);
return statearr_10983;
})();var statearr_10984_10999 = state_10980__$1;(statearr_10984_10999[2] = null);
(statearr_10984_10999[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 5))
{var inst_10966 = (state_10980[7]);var state_10980__$1 = state_10980;var statearr_10985_11000 = state_10980__$1;(statearr_10985_11000[2] = inst_10966);
(statearr_10985_11000[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 4))
{var inst_10969 = (state_10980[8]);var inst_10969__$1 = (state_10980[2]);var inst_10970 = (inst_10969__$1 == null);var state_10980__$1 = (function (){var statearr_10986 = state_10980;(statearr_10986[8] = inst_10969__$1);
return statearr_10986;
})();if(cljs.core.truth_(inst_10970))
{var statearr_10987_11001 = state_10980__$1;(statearr_10987_11001[1] = 5);
} else
{var statearr_10988_11002 = state_10980__$1;(statearr_10988_11002[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10981 === 3))
{var inst_10978 = (state_10980[2]);var state_10980__$1 = state_10980;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10980__$1,inst_10978);
} else
{if((state_val_10981 === 2))
{var state_10980__$1 = state_10980;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10980__$1,4,ch);
} else
{if((state_val_10981 === 1))
{var inst_10966 = init;var state_10980__$1 = (function (){var statearr_10989 = state_10980;(statearr_10989[7] = inst_10966);
return statearr_10989;
})();var statearr_10990_11003 = state_10980__$1;(statearr_10990_11003[2] = null);
(statearr_10990_11003[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_10994 = [null,null,null,null,null,null,null,null,null];(statearr_10994[0] = state_machine__6871__auto__);
(statearr_10994[1] = 1);
return statearr_10994;
});
var state_machine__6871__auto____1 = (function (state_10980){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_10980);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e10995){if((e10995 instanceof Object))
{var ex__6874__auto__ = e10995;var statearr_10996_11004 = state_10980;(statearr_10996_11004[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10980);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10995;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11005 = state_10980;
state_10980 = G__11005;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_10980){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_10980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_10997 = f__6886__auto__.call(null);(statearr_10997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_10997;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6885__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11067){var state_val_11068 = (state_11067[1]);if((state_val_11068 === 1))
{var inst_11047 = cljs.core.seq.call(null,coll);var inst_11048 = inst_11047;var state_11067__$1 = (function (){var statearr_11069 = state_11067;(statearr_11069[7] = inst_11048);
return statearr_11069;
})();var statearr_11070_11088 = state_11067__$1;(statearr_11070_11088[2] = null);
(statearr_11070_11088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 2))
{var inst_11048 = (state_11067[7]);var state_11067__$1 = state_11067;if(cljs.core.truth_(inst_11048))
{var statearr_11071_11089 = state_11067__$1;(statearr_11071_11089[1] = 4);
} else
{var statearr_11072_11090 = state_11067__$1;(statearr_11072_11090[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 3))
{var inst_11065 = (state_11067[2]);var state_11067__$1 = state_11067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11067__$1,inst_11065);
} else
{if((state_val_11068 === 4))
{var inst_11048 = (state_11067[7]);var inst_11051 = cljs.core.first.call(null,inst_11048);var state_11067__$1 = state_11067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11067__$1,7,ch,inst_11051);
} else
{if((state_val_11068 === 5))
{var state_11067__$1 = state_11067;if(cljs.core.truth_(close_QMARK_))
{var statearr_11073_11091 = state_11067__$1;(statearr_11073_11091[1] = 8);
} else
{var statearr_11074_11092 = state_11067__$1;(statearr_11074_11092[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 6))
{var inst_11063 = (state_11067[2]);var state_11067__$1 = state_11067;var statearr_11075_11093 = state_11067__$1;(statearr_11075_11093[2] = inst_11063);
(statearr_11075_11093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 7))
{var inst_11048 = (state_11067[7]);var inst_11053 = (state_11067[2]);var inst_11054 = cljs.core.next.call(null,inst_11048);var inst_11048__$1 = inst_11054;var state_11067__$1 = (function (){var statearr_11076 = state_11067;(statearr_11076[8] = inst_11053);
(statearr_11076[7] = inst_11048__$1);
return statearr_11076;
})();var statearr_11077_11094 = state_11067__$1;(statearr_11077_11094[2] = null);
(statearr_11077_11094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 8))
{var inst_11058 = cljs.core.async.close_BANG_.call(null,ch);var state_11067__$1 = state_11067;var statearr_11078_11095 = state_11067__$1;(statearr_11078_11095[2] = inst_11058);
(statearr_11078_11095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 9))
{var state_11067__$1 = state_11067;var statearr_11079_11096 = state_11067__$1;(statearr_11079_11096[2] = null);
(statearr_11079_11096[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11068 === 10))
{var inst_11061 = (state_11067[2]);var state_11067__$1 = state_11067;var statearr_11080_11097 = state_11067__$1;(statearr_11080_11097[2] = inst_11061);
(statearr_11080_11097[1] = 6);
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
var state_machine__6871__auto____0 = (function (){var statearr_11084 = [null,null,null,null,null,null,null,null,null];(statearr_11084[0] = state_machine__6871__auto__);
(statearr_11084[1] = 1);
return statearr_11084;
});
var state_machine__6871__auto____1 = (function (state_11067){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11085){if((e11085 instanceof Object))
{var ex__6874__auto__ = e11085;var statearr_11086_11098 = state_11067;(statearr_11086_11098[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11099 = state_11067;
state_11067 = G__11099;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11067){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11087 = f__6886__auto__.call(null);(statearr_11087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto__);
return statearr_11087;
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
cljs.core.async.Mux = (function (){var obj11101 = {};return obj11101;
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
cljs.core.async.Mult = (function (){var obj11103 = {};return obj11103;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t11327 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11327 = (function (cs,ch,mult,meta11328){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta11328 = meta11328;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11327.cljs$lang$type = true;
cljs.core.async.t11327.cljs$lang$ctorStr = "cljs.core.async/t11327";
cljs.core.async.t11327.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11327");
});})(cs))
;
cljs.core.async.t11327.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t11327.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t11327.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t11327.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t11327.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11327.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t11327.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_11329){var self__ = this;
var _11329__$1 = this;return self__.meta11328;
});})(cs))
;
cljs.core.async.t11327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_11329,meta11328__$1){var self__ = this;
var _11329__$1 = this;return (new cljs.core.async.t11327(self__.cs,self__.ch,self__.mult,meta11328__$1));
});})(cs))
;
cljs.core.async.__GT_t11327 = ((function (cs){
return (function __GT_t11327(cs__$1,ch__$1,mult__$1,meta11328){return (new cljs.core.async.t11327(cs__$1,ch__$1,mult__$1,meta11328));
});})(cs))
;
}
return (new cljs.core.async.t11327(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6885__auto___11550 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11464){var state_val_11465 = (state_11464[1]);if((state_val_11465 === 32))
{var inst_11332 = (state_11464[7]);var inst_11408 = (state_11464[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11464,31,Object,null,30);var inst_11415 = cljs.core.async.put_BANG_.call(null,inst_11408,inst_11332,done);var state_11464__$1 = state_11464;var statearr_11466_11551 = state_11464__$1;(statearr_11466_11551[2] = inst_11415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11464__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 1))
{var state_11464__$1 = state_11464;var statearr_11467_11552 = state_11464__$1;(statearr_11467_11552[2] = null);
(statearr_11467_11552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 33))
{var inst_11421 = (state_11464[9]);var inst_11423 = cljs.core.chunked_seq_QMARK_.call(null,inst_11421);var state_11464__$1 = state_11464;if(inst_11423)
{var statearr_11468_11553 = state_11464__$1;(statearr_11468_11553[1] = 36);
} else
{var statearr_11469_11554 = state_11464__$1;(statearr_11469_11554[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 2))
{var state_11464__$1 = state_11464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11464__$1,4,ch);
} else
{if((state_val_11465 === 34))
{var state_11464__$1 = state_11464;var statearr_11470_11555 = state_11464__$1;(statearr_11470_11555[2] = null);
(statearr_11470_11555[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 3))
{var inst_11462 = (state_11464[2]);var state_11464__$1 = state_11464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11464__$1,inst_11462);
} else
{if((state_val_11465 === 35))
{var inst_11446 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11471_11556 = state_11464__$1;(statearr_11471_11556[2] = inst_11446);
(statearr_11471_11556[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 4))
{var inst_11332 = (state_11464[7]);var inst_11332__$1 = (state_11464[2]);var inst_11333 = (inst_11332__$1 == null);var state_11464__$1 = (function (){var statearr_11472 = state_11464;(statearr_11472[7] = inst_11332__$1);
return statearr_11472;
})();if(cljs.core.truth_(inst_11333))
{var statearr_11473_11557 = state_11464__$1;(statearr_11473_11557[1] = 5);
} else
{var statearr_11474_11558 = state_11464__$1;(statearr_11474_11558[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 36))
{var inst_11421 = (state_11464[9]);var inst_11425 = cljs.core.chunk_first.call(null,inst_11421);var inst_11426 = cljs.core.chunk_rest.call(null,inst_11421);var inst_11427 = cljs.core.count.call(null,inst_11425);var inst_11400 = inst_11426;var inst_11401 = inst_11425;var inst_11402 = inst_11427;var inst_11403 = 0;var state_11464__$1 = (function (){var statearr_11475 = state_11464;(statearr_11475[10] = inst_11401);
(statearr_11475[11] = inst_11402);
(statearr_11475[12] = inst_11403);
(statearr_11475[13] = inst_11400);
return statearr_11475;
})();var statearr_11476_11559 = state_11464__$1;(statearr_11476_11559[2] = null);
(statearr_11476_11559[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 5))
{var inst_11339 = cljs.core.deref.call(null,cs);var inst_11340 = cljs.core.seq.call(null,inst_11339);var inst_11341 = inst_11340;var inst_11342 = null;var inst_11343 = 0;var inst_11344 = 0;var state_11464__$1 = (function (){var statearr_11477 = state_11464;(statearr_11477[14] = inst_11344);
(statearr_11477[15] = inst_11343);
(statearr_11477[16] = inst_11342);
(statearr_11477[17] = inst_11341);
return statearr_11477;
})();var statearr_11478_11560 = state_11464__$1;(statearr_11478_11560[2] = null);
(statearr_11478_11560[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 37))
{var inst_11421 = (state_11464[9]);var inst_11430 = cljs.core.first.call(null,inst_11421);var state_11464__$1 = (function (){var statearr_11479 = state_11464;(statearr_11479[18] = inst_11430);
return statearr_11479;
})();var statearr_11480_11561 = state_11464__$1;(statearr_11480_11561[2] = null);
(statearr_11480_11561[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 6))
{var inst_11392 = (state_11464[19]);var inst_11391 = cljs.core.deref.call(null,cs);var inst_11392__$1 = cljs.core.keys.call(null,inst_11391);var inst_11393 = cljs.core.count.call(null,inst_11392__$1);var inst_11394 = cljs.core.reset_BANG_.call(null,dctr,inst_11393);var inst_11399 = cljs.core.seq.call(null,inst_11392__$1);var inst_11400 = inst_11399;var inst_11401 = null;var inst_11402 = 0;var inst_11403 = 0;var state_11464__$1 = (function (){var statearr_11481 = state_11464;(statearr_11481[10] = inst_11401);
(statearr_11481[11] = inst_11402);
(statearr_11481[12] = inst_11403);
(statearr_11481[20] = inst_11394);
(statearr_11481[13] = inst_11400);
(statearr_11481[19] = inst_11392__$1);
return statearr_11481;
})();var statearr_11482_11562 = state_11464__$1;(statearr_11482_11562[2] = null);
(statearr_11482_11562[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 38))
{var inst_11443 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11483_11563 = state_11464__$1;(statearr_11483_11563[2] = inst_11443);
(statearr_11483_11563[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 7))
{var inst_11460 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11484_11564 = state_11464__$1;(statearr_11484_11564[2] = inst_11460);
(statearr_11484_11564[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 39))
{var inst_11421 = (state_11464[9]);var inst_11439 = (state_11464[2]);var inst_11440 = cljs.core.next.call(null,inst_11421);var inst_11400 = inst_11440;var inst_11401 = null;var inst_11402 = 0;var inst_11403 = 0;var state_11464__$1 = (function (){var statearr_11485 = state_11464;(statearr_11485[21] = inst_11439);
(statearr_11485[10] = inst_11401);
(statearr_11485[11] = inst_11402);
(statearr_11485[12] = inst_11403);
(statearr_11485[13] = inst_11400);
return statearr_11485;
})();var statearr_11486_11565 = state_11464__$1;(statearr_11486_11565[2] = null);
(statearr_11486_11565[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 8))
{var inst_11344 = (state_11464[14]);var inst_11343 = (state_11464[15]);var inst_11346 = (inst_11344 < inst_11343);var inst_11347 = inst_11346;var state_11464__$1 = state_11464;if(cljs.core.truth_(inst_11347))
{var statearr_11487_11566 = state_11464__$1;(statearr_11487_11566[1] = 10);
} else
{var statearr_11488_11567 = state_11464__$1;(statearr_11488_11567[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 40))
{var inst_11430 = (state_11464[18]);var inst_11431 = (state_11464[2]);var inst_11432 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11433 = cljs.core.async.untap_STAR_.call(null,m,inst_11430);var state_11464__$1 = (function (){var statearr_11489 = state_11464;(statearr_11489[22] = inst_11432);
(statearr_11489[23] = inst_11431);
return statearr_11489;
})();var statearr_11490_11568 = state_11464__$1;(statearr_11490_11568[2] = inst_11433);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11464__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 9))
{var inst_11389 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11491_11569 = state_11464__$1;(statearr_11491_11569[2] = inst_11389);
(statearr_11491_11569[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 41))
{var inst_11332 = (state_11464[7]);var inst_11430 = (state_11464[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11464,40,Object,null,39);var inst_11437 = cljs.core.async.put_BANG_.call(null,inst_11430,inst_11332,done);var state_11464__$1 = state_11464;var statearr_11492_11570 = state_11464__$1;(statearr_11492_11570[2] = inst_11437);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11464__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 10))
{var inst_11344 = (state_11464[14]);var inst_11342 = (state_11464[16]);var inst_11350 = cljs.core._nth.call(null,inst_11342,inst_11344);var inst_11351 = cljs.core.nth.call(null,inst_11350,0,null);var inst_11352 = cljs.core.nth.call(null,inst_11350,1,null);var state_11464__$1 = (function (){var statearr_11493 = state_11464;(statearr_11493[24] = inst_11351);
return statearr_11493;
})();if(cljs.core.truth_(inst_11352))
{var statearr_11494_11571 = state_11464__$1;(statearr_11494_11571[1] = 13);
} else
{var statearr_11495_11572 = state_11464__$1;(statearr_11495_11572[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 42))
{var state_11464__$1 = state_11464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11464__$1,45,dchan);
} else
{if((state_val_11465 === 11))
{var inst_11341 = (state_11464[17]);var inst_11361 = (state_11464[25]);var inst_11361__$1 = cljs.core.seq.call(null,inst_11341);var state_11464__$1 = (function (){var statearr_11496 = state_11464;(statearr_11496[25] = inst_11361__$1);
return statearr_11496;
})();if(inst_11361__$1)
{var statearr_11497_11573 = state_11464__$1;(statearr_11497_11573[1] = 16);
} else
{var statearr_11498_11574 = state_11464__$1;(statearr_11498_11574[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 43))
{var state_11464__$1 = state_11464;var statearr_11499_11575 = state_11464__$1;(statearr_11499_11575[2] = null);
(statearr_11499_11575[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 12))
{var inst_11387 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11500_11576 = state_11464__$1;(statearr_11500_11576[2] = inst_11387);
(statearr_11500_11576[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 44))
{var inst_11457 = (state_11464[2]);var state_11464__$1 = (function (){var statearr_11501 = state_11464;(statearr_11501[26] = inst_11457);
return statearr_11501;
})();var statearr_11502_11577 = state_11464__$1;(statearr_11502_11577[2] = null);
(statearr_11502_11577[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 13))
{var inst_11351 = (state_11464[24]);var inst_11354 = cljs.core.async.close_BANG_.call(null,inst_11351);var state_11464__$1 = state_11464;var statearr_11503_11578 = state_11464__$1;(statearr_11503_11578[2] = inst_11354);
(statearr_11503_11578[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 45))
{var inst_11454 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11507_11579 = state_11464__$1;(statearr_11507_11579[2] = inst_11454);
(statearr_11507_11579[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 14))
{var state_11464__$1 = state_11464;var statearr_11508_11580 = state_11464__$1;(statearr_11508_11580[2] = null);
(statearr_11508_11580[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 15))
{var inst_11344 = (state_11464[14]);var inst_11343 = (state_11464[15]);var inst_11342 = (state_11464[16]);var inst_11341 = (state_11464[17]);var inst_11357 = (state_11464[2]);var inst_11358 = (inst_11344 + 1);var tmp11504 = inst_11343;var tmp11505 = inst_11342;var tmp11506 = inst_11341;var inst_11341__$1 = tmp11506;var inst_11342__$1 = tmp11505;var inst_11343__$1 = tmp11504;var inst_11344__$1 = inst_11358;var state_11464__$1 = (function (){var statearr_11509 = state_11464;(statearr_11509[14] = inst_11344__$1);
(statearr_11509[15] = inst_11343__$1);
(statearr_11509[16] = inst_11342__$1);
(statearr_11509[17] = inst_11341__$1);
(statearr_11509[27] = inst_11357);
return statearr_11509;
})();var statearr_11510_11581 = state_11464__$1;(statearr_11510_11581[2] = null);
(statearr_11510_11581[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 16))
{var inst_11361 = (state_11464[25]);var inst_11363 = cljs.core.chunked_seq_QMARK_.call(null,inst_11361);var state_11464__$1 = state_11464;if(inst_11363)
{var statearr_11511_11582 = state_11464__$1;(statearr_11511_11582[1] = 19);
} else
{var statearr_11512_11583 = state_11464__$1;(statearr_11512_11583[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 17))
{var state_11464__$1 = state_11464;var statearr_11513_11584 = state_11464__$1;(statearr_11513_11584[2] = null);
(statearr_11513_11584[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 18))
{var inst_11385 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11514_11585 = state_11464__$1;(statearr_11514_11585[2] = inst_11385);
(statearr_11514_11585[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 19))
{var inst_11361 = (state_11464[25]);var inst_11365 = cljs.core.chunk_first.call(null,inst_11361);var inst_11366 = cljs.core.chunk_rest.call(null,inst_11361);var inst_11367 = cljs.core.count.call(null,inst_11365);var inst_11341 = inst_11366;var inst_11342 = inst_11365;var inst_11343 = inst_11367;var inst_11344 = 0;var state_11464__$1 = (function (){var statearr_11515 = state_11464;(statearr_11515[14] = inst_11344);
(statearr_11515[15] = inst_11343);
(statearr_11515[16] = inst_11342);
(statearr_11515[17] = inst_11341);
return statearr_11515;
})();var statearr_11516_11586 = state_11464__$1;(statearr_11516_11586[2] = null);
(statearr_11516_11586[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 20))
{var inst_11361 = (state_11464[25]);var inst_11371 = cljs.core.first.call(null,inst_11361);var inst_11372 = cljs.core.nth.call(null,inst_11371,0,null);var inst_11373 = cljs.core.nth.call(null,inst_11371,1,null);var state_11464__$1 = (function (){var statearr_11517 = state_11464;(statearr_11517[28] = inst_11372);
return statearr_11517;
})();if(cljs.core.truth_(inst_11373))
{var statearr_11518_11587 = state_11464__$1;(statearr_11518_11587[1] = 22);
} else
{var statearr_11519_11588 = state_11464__$1;(statearr_11519_11588[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 21))
{var inst_11382 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11520_11589 = state_11464__$1;(statearr_11520_11589[2] = inst_11382);
(statearr_11520_11589[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 22))
{var inst_11372 = (state_11464[28]);var inst_11375 = cljs.core.async.close_BANG_.call(null,inst_11372);var state_11464__$1 = state_11464;var statearr_11521_11590 = state_11464__$1;(statearr_11521_11590[2] = inst_11375);
(statearr_11521_11590[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 23))
{var state_11464__$1 = state_11464;var statearr_11522_11591 = state_11464__$1;(statearr_11522_11591[2] = null);
(statearr_11522_11591[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 24))
{var inst_11361 = (state_11464[25]);var inst_11378 = (state_11464[2]);var inst_11379 = cljs.core.next.call(null,inst_11361);var inst_11341 = inst_11379;var inst_11342 = null;var inst_11343 = 0;var inst_11344 = 0;var state_11464__$1 = (function (){var statearr_11523 = state_11464;(statearr_11523[14] = inst_11344);
(statearr_11523[15] = inst_11343);
(statearr_11523[16] = inst_11342);
(statearr_11523[17] = inst_11341);
(statearr_11523[29] = inst_11378);
return statearr_11523;
})();var statearr_11524_11592 = state_11464__$1;(statearr_11524_11592[2] = null);
(statearr_11524_11592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 25))
{var inst_11402 = (state_11464[11]);var inst_11403 = (state_11464[12]);var inst_11405 = (inst_11403 < inst_11402);var inst_11406 = inst_11405;var state_11464__$1 = state_11464;if(cljs.core.truth_(inst_11406))
{var statearr_11525_11593 = state_11464__$1;(statearr_11525_11593[1] = 27);
} else
{var statearr_11526_11594 = state_11464__$1;(statearr_11526_11594[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 26))
{var inst_11392 = (state_11464[19]);var inst_11450 = (state_11464[2]);var inst_11451 = cljs.core.seq.call(null,inst_11392);var state_11464__$1 = (function (){var statearr_11527 = state_11464;(statearr_11527[30] = inst_11450);
return statearr_11527;
})();if(inst_11451)
{var statearr_11528_11595 = state_11464__$1;(statearr_11528_11595[1] = 42);
} else
{var statearr_11529_11596 = state_11464__$1;(statearr_11529_11596[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 27))
{var inst_11401 = (state_11464[10]);var inst_11403 = (state_11464[12]);var inst_11408 = cljs.core._nth.call(null,inst_11401,inst_11403);var state_11464__$1 = (function (){var statearr_11530 = state_11464;(statearr_11530[8] = inst_11408);
return statearr_11530;
})();var statearr_11531_11597 = state_11464__$1;(statearr_11531_11597[2] = null);
(statearr_11531_11597[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 28))
{var inst_11421 = (state_11464[9]);var inst_11400 = (state_11464[13]);var inst_11421__$1 = cljs.core.seq.call(null,inst_11400);var state_11464__$1 = (function (){var statearr_11535 = state_11464;(statearr_11535[9] = inst_11421__$1);
return statearr_11535;
})();if(inst_11421__$1)
{var statearr_11536_11598 = state_11464__$1;(statearr_11536_11598[1] = 33);
} else
{var statearr_11537_11599 = state_11464__$1;(statearr_11537_11599[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 29))
{var inst_11448 = (state_11464[2]);var state_11464__$1 = state_11464;var statearr_11538_11600 = state_11464__$1;(statearr_11538_11600[2] = inst_11448);
(statearr_11538_11600[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 30))
{var inst_11401 = (state_11464[10]);var inst_11402 = (state_11464[11]);var inst_11403 = (state_11464[12]);var inst_11400 = (state_11464[13]);var inst_11417 = (state_11464[2]);var inst_11418 = (inst_11403 + 1);var tmp11532 = inst_11401;var tmp11533 = inst_11402;var tmp11534 = inst_11400;var inst_11400__$1 = tmp11534;var inst_11401__$1 = tmp11532;var inst_11402__$1 = tmp11533;var inst_11403__$1 = inst_11418;var state_11464__$1 = (function (){var statearr_11539 = state_11464;(statearr_11539[10] = inst_11401__$1);
(statearr_11539[11] = inst_11402__$1);
(statearr_11539[12] = inst_11403__$1);
(statearr_11539[13] = inst_11400__$1);
(statearr_11539[31] = inst_11417);
return statearr_11539;
})();var statearr_11540_11601 = state_11464__$1;(statearr_11540_11601[2] = null);
(statearr_11540_11601[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11465 === 31))
{var inst_11408 = (state_11464[8]);var inst_11409 = (state_11464[2]);var inst_11410 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11411 = cljs.core.async.untap_STAR_.call(null,m,inst_11408);var state_11464__$1 = (function (){var statearr_11541 = state_11464;(statearr_11541[32] = inst_11410);
(statearr_11541[33] = inst_11409);
return statearr_11541;
})();var statearr_11542_11602 = state_11464__$1;(statearr_11542_11602[2] = inst_11411);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11464__$1);
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
var state_machine__6871__auto____0 = (function (){var statearr_11546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11546[0] = state_machine__6871__auto__);
(statearr_11546[1] = 1);
return statearr_11546;
});
var state_machine__6871__auto____1 = (function (state_11464){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11464);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11547){if((e11547 instanceof Object))
{var ex__6874__auto__ = e11547;var statearr_11548_11603 = state_11464;(statearr_11548_11603[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11464);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11547;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11604 = state_11464;
state_11464 = G__11604;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11464){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11549 = f__6886__auto__.call(null);(statearr_11549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___11550);
return statearr_11549;
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
cljs.core.async.Mix = (function (){var obj11606 = {};return obj11606;
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
;var m = (function (){if(typeof cljs.core.async.t11716 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11716 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11717){
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
this.meta11717 = meta11717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11716.cljs$lang$type = true;
cljs.core.async.t11716.cljs$lang$ctorStr = "cljs.core.async/t11716";
cljs.core.async.t11716.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11716");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11716.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11718){var self__ = this;
var _11718__$1 = this;return self__.meta11717;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11718,meta11717__$1){var self__ = this;
var _11718__$1 = this;return (new cljs.core.async.t11716(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11717__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11716 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11716(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11717){return (new cljs.core.async.t11716(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11717));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11716(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6885__auto___11825 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_11783){var state_val_11784 = (state_11783[1]);if((state_val_11784 === 1))
{var inst_11722 = (state_11783[7]);var inst_11722__$1 = calc_state.call(null);var inst_11723 = cljs.core.seq_QMARK_.call(null,inst_11722__$1);var state_11783__$1 = (function (){var statearr_11785 = state_11783;(statearr_11785[7] = inst_11722__$1);
return statearr_11785;
})();if(inst_11723)
{var statearr_11786_11826 = state_11783__$1;(statearr_11786_11826[1] = 2);
} else
{var statearr_11787_11827 = state_11783__$1;(statearr_11787_11827[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 2))
{var inst_11722 = (state_11783[7]);var inst_11725 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11722);var state_11783__$1 = state_11783;var statearr_11788_11828 = state_11783__$1;(statearr_11788_11828[2] = inst_11725);
(statearr_11788_11828[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 3))
{var inst_11722 = (state_11783[7]);var state_11783__$1 = state_11783;var statearr_11789_11829 = state_11783__$1;(statearr_11789_11829[2] = inst_11722);
(statearr_11789_11829[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 4))
{var inst_11722 = (state_11783[7]);var inst_11728 = (state_11783[2]);var inst_11729 = cljs.core.get.call(null,inst_11728,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11730 = cljs.core.get.call(null,inst_11728,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11731 = cljs.core.get.call(null,inst_11728,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11732 = inst_11722;var state_11783__$1 = (function (){var statearr_11790 = state_11783;(statearr_11790[8] = inst_11731);
(statearr_11790[9] = inst_11732);
(statearr_11790[10] = inst_11730);
(statearr_11790[11] = inst_11729);
return statearr_11790;
})();var statearr_11791_11830 = state_11783__$1;(statearr_11791_11830[2] = null);
(statearr_11791_11830[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 5))
{var inst_11732 = (state_11783[9]);var inst_11735 = cljs.core.seq_QMARK_.call(null,inst_11732);var state_11783__$1 = state_11783;if(inst_11735)
{var statearr_11792_11831 = state_11783__$1;(statearr_11792_11831[1] = 7);
} else
{var statearr_11793_11832 = state_11783__$1;(statearr_11793_11832[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 6))
{var inst_11781 = (state_11783[2]);var state_11783__$1 = state_11783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11783__$1,inst_11781);
} else
{if((state_val_11784 === 7))
{var inst_11732 = (state_11783[9]);var inst_11737 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11732);var state_11783__$1 = state_11783;var statearr_11794_11833 = state_11783__$1;(statearr_11794_11833[2] = inst_11737);
(statearr_11794_11833[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 8))
{var inst_11732 = (state_11783[9]);var state_11783__$1 = state_11783;var statearr_11795_11834 = state_11783__$1;(statearr_11795_11834[2] = inst_11732);
(statearr_11795_11834[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 9))
{var inst_11740 = (state_11783[12]);var inst_11740__$1 = (state_11783[2]);var inst_11741 = cljs.core.get.call(null,inst_11740__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11742 = cljs.core.get.call(null,inst_11740__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11743 = cljs.core.get.call(null,inst_11740__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11783__$1 = (function (){var statearr_11796 = state_11783;(statearr_11796[12] = inst_11740__$1);
(statearr_11796[13] = inst_11742);
(statearr_11796[14] = inst_11743);
return statearr_11796;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11783__$1,10,inst_11741);
} else
{if((state_val_11784 === 10))
{var inst_11747 = (state_11783[15]);var inst_11748 = (state_11783[16]);var inst_11746 = (state_11783[2]);var inst_11747__$1 = cljs.core.nth.call(null,inst_11746,0,null);var inst_11748__$1 = cljs.core.nth.call(null,inst_11746,1,null);var inst_11749 = (inst_11747__$1 == null);var inst_11750 = cljs.core._EQ_.call(null,inst_11748__$1,change);var inst_11751 = (inst_11749) || (inst_11750);var state_11783__$1 = (function (){var statearr_11797 = state_11783;(statearr_11797[15] = inst_11747__$1);
(statearr_11797[16] = inst_11748__$1);
return statearr_11797;
})();if(cljs.core.truth_(inst_11751))
{var statearr_11798_11835 = state_11783__$1;(statearr_11798_11835[1] = 11);
} else
{var statearr_11799_11836 = state_11783__$1;(statearr_11799_11836[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 11))
{var inst_11747 = (state_11783[15]);var inst_11753 = (inst_11747 == null);var state_11783__$1 = state_11783;if(cljs.core.truth_(inst_11753))
{var statearr_11800_11837 = state_11783__$1;(statearr_11800_11837[1] = 14);
} else
{var statearr_11801_11838 = state_11783__$1;(statearr_11801_11838[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 12))
{var inst_11748 = (state_11783[16]);var inst_11762 = (state_11783[17]);var inst_11743 = (state_11783[14]);var inst_11762__$1 = inst_11743.call(null,inst_11748);var state_11783__$1 = (function (){var statearr_11802 = state_11783;(statearr_11802[17] = inst_11762__$1);
return statearr_11802;
})();if(cljs.core.truth_(inst_11762__$1))
{var statearr_11803_11839 = state_11783__$1;(statearr_11803_11839[1] = 17);
} else
{var statearr_11804_11840 = state_11783__$1;(statearr_11804_11840[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 13))
{var inst_11779 = (state_11783[2]);var state_11783__$1 = state_11783;var statearr_11805_11841 = state_11783__$1;(statearr_11805_11841[2] = inst_11779);
(statearr_11805_11841[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 14))
{var inst_11748 = (state_11783[16]);var inst_11755 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11748);var state_11783__$1 = state_11783;var statearr_11806_11842 = state_11783__$1;(statearr_11806_11842[2] = inst_11755);
(statearr_11806_11842[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 15))
{var state_11783__$1 = state_11783;var statearr_11807_11843 = state_11783__$1;(statearr_11807_11843[2] = null);
(statearr_11807_11843[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 16))
{var inst_11758 = (state_11783[2]);var inst_11759 = calc_state.call(null);var inst_11732 = inst_11759;var state_11783__$1 = (function (){var statearr_11808 = state_11783;(statearr_11808[9] = inst_11732);
(statearr_11808[18] = inst_11758);
return statearr_11808;
})();var statearr_11809_11844 = state_11783__$1;(statearr_11809_11844[2] = null);
(statearr_11809_11844[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 17))
{var inst_11762 = (state_11783[17]);var state_11783__$1 = state_11783;var statearr_11810_11845 = state_11783__$1;(statearr_11810_11845[2] = inst_11762);
(statearr_11810_11845[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 18))
{var inst_11748 = (state_11783[16]);var inst_11742 = (state_11783[13]);var inst_11743 = (state_11783[14]);var inst_11765 = cljs.core.empty_QMARK_.call(null,inst_11743);var inst_11766 = inst_11742.call(null,inst_11748);var inst_11767 = cljs.core.not.call(null,inst_11766);var inst_11768 = (inst_11765) && (inst_11767);var state_11783__$1 = state_11783;var statearr_11811_11846 = state_11783__$1;(statearr_11811_11846[2] = inst_11768);
(statearr_11811_11846[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 19))
{var inst_11770 = (state_11783[2]);var state_11783__$1 = state_11783;if(cljs.core.truth_(inst_11770))
{var statearr_11812_11847 = state_11783__$1;(statearr_11812_11847[1] = 20);
} else
{var statearr_11813_11848 = state_11783__$1;(statearr_11813_11848[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 20))
{var inst_11747 = (state_11783[15]);var state_11783__$1 = state_11783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11783__$1,23,out,inst_11747);
} else
{if((state_val_11784 === 21))
{var state_11783__$1 = state_11783;var statearr_11814_11849 = state_11783__$1;(statearr_11814_11849[2] = null);
(statearr_11814_11849[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 22))
{var inst_11740 = (state_11783[12]);var inst_11776 = (state_11783[2]);var inst_11732 = inst_11740;var state_11783__$1 = (function (){var statearr_11815 = state_11783;(statearr_11815[19] = inst_11776);
(statearr_11815[9] = inst_11732);
return statearr_11815;
})();var statearr_11816_11850 = state_11783__$1;(statearr_11816_11850[2] = null);
(statearr_11816_11850[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11784 === 23))
{var inst_11773 = (state_11783[2]);var state_11783__$1 = state_11783;var statearr_11817_11851 = state_11783__$1;(statearr_11817_11851[2] = inst_11773);
(statearr_11817_11851[1] = 22);
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
var state_machine__6871__auto____0 = (function (){var statearr_11821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11821[0] = state_machine__6871__auto__);
(statearr_11821[1] = 1);
return statearr_11821;
});
var state_machine__6871__auto____1 = (function (state_11783){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_11783);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e11822){if((e11822 instanceof Object))
{var ex__6874__auto__ = e11822;var statearr_11823_11852 = state_11783;(statearr_11823_11852[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11822;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11853 = state_11783;
state_11783 = G__11853;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_11783){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_11783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_11824 = f__6886__auto__.call(null);(statearr_11824[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___11825);
return statearr_11824;
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
cljs.core.async.Pub = (function (){var obj11855 = {};return obj11855;
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
return (function (p1__11856_SHARP_){if(cljs.core.truth_(p1__11856_SHARP_.call(null,topic)))
{return p1__11856_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11856_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4071__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11981 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11981 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11982){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11982 = meta11982;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11981.cljs$lang$type = true;
cljs.core.async.t11981.cljs$lang$ctorStr = "cljs.core.async/t11981";
cljs.core.async.t11981.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4638__auto__,writer__4639__auto__,opt__4640__auto__){return cljs.core._write.call(null,writer__4639__auto__,"cljs.core.async/t11981");
});})(mults,ensure_mult))
;
cljs.core.async.t11981.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11981.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11981.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11981.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11981.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11981.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11981.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11983){var self__ = this;
var _11983__$1 = this;return self__.meta11982;
});})(mults,ensure_mult))
;
cljs.core.async.t11981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11983,meta11982__$1){var self__ = this;
var _11983__$1 = this;return (new cljs.core.async.t11981(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11982__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11981 = ((function (mults,ensure_mult){
return (function __GT_t11981(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11982){return (new cljs.core.async.t11981(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11982));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11981(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6885__auto___12105 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12057){var state_val_12058 = (state_12057[1]);if((state_val_12058 === 1))
{var state_12057__$1 = state_12057;var statearr_12059_12106 = state_12057__$1;(statearr_12059_12106[2] = null);
(statearr_12059_12106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 2))
{var state_12057__$1 = state_12057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12057__$1,4,ch);
} else
{if((state_val_12058 === 3))
{var inst_12055 = (state_12057[2]);var state_12057__$1 = state_12057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12057__$1,inst_12055);
} else
{if((state_val_12058 === 4))
{var inst_11986 = (state_12057[7]);var inst_11986__$1 = (state_12057[2]);var inst_11987 = (inst_11986__$1 == null);var state_12057__$1 = (function (){var statearr_12060 = state_12057;(statearr_12060[7] = inst_11986__$1);
return statearr_12060;
})();if(cljs.core.truth_(inst_11987))
{var statearr_12061_12107 = state_12057__$1;(statearr_12061_12107[1] = 5);
} else
{var statearr_12062_12108 = state_12057__$1;(statearr_12062_12108[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 5))
{var inst_11993 = cljs.core.deref.call(null,mults);var inst_11994 = cljs.core.vals.call(null,inst_11993);var inst_11995 = cljs.core.seq.call(null,inst_11994);var inst_11996 = inst_11995;var inst_11997 = null;var inst_11998 = 0;var inst_11999 = 0;var state_12057__$1 = (function (){var statearr_12063 = state_12057;(statearr_12063[8] = inst_11999);
(statearr_12063[9] = inst_11996);
(statearr_12063[10] = inst_11997);
(statearr_12063[11] = inst_11998);
return statearr_12063;
})();var statearr_12064_12109 = state_12057__$1;(statearr_12064_12109[2] = null);
(statearr_12064_12109[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 6))
{var inst_12036 = (state_12057[12]);var inst_12034 = (state_12057[13]);var inst_11986 = (state_12057[7]);var inst_12034__$1 = topic_fn.call(null,inst_11986);var inst_12035 = cljs.core.deref.call(null,mults);var inst_12036__$1 = cljs.core.get.call(null,inst_12035,inst_12034__$1);var state_12057__$1 = (function (){var statearr_12065 = state_12057;(statearr_12065[12] = inst_12036__$1);
(statearr_12065[13] = inst_12034__$1);
return statearr_12065;
})();if(cljs.core.truth_(inst_12036__$1))
{var statearr_12066_12110 = state_12057__$1;(statearr_12066_12110[1] = 19);
} else
{var statearr_12067_12111 = state_12057__$1;(statearr_12067_12111[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 7))
{var inst_12053 = (state_12057[2]);var state_12057__$1 = state_12057;var statearr_12068_12112 = state_12057__$1;(statearr_12068_12112[2] = inst_12053);
(statearr_12068_12112[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 8))
{var inst_11999 = (state_12057[8]);var inst_11998 = (state_12057[11]);var inst_12001 = (inst_11999 < inst_11998);var inst_12002 = inst_12001;var state_12057__$1 = state_12057;if(cljs.core.truth_(inst_12002))
{var statearr_12072_12113 = state_12057__$1;(statearr_12072_12113[1] = 10);
} else
{var statearr_12073_12114 = state_12057__$1;(statearr_12073_12114[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 9))
{var inst_12032 = (state_12057[2]);var state_12057__$1 = state_12057;var statearr_12074_12115 = state_12057__$1;(statearr_12074_12115[2] = inst_12032);
(statearr_12074_12115[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 10))
{var inst_11999 = (state_12057[8]);var inst_11996 = (state_12057[9]);var inst_11997 = (state_12057[10]);var inst_11998 = (state_12057[11]);var inst_12004 = cljs.core._nth.call(null,inst_11997,inst_11999);var inst_12005 = cljs.core.async.muxch_STAR_.call(null,inst_12004);var inst_12006 = cljs.core.async.close_BANG_.call(null,inst_12005);var inst_12007 = (inst_11999 + 1);var tmp12069 = inst_11996;var tmp12070 = inst_11997;var tmp12071 = inst_11998;var inst_11996__$1 = tmp12069;var inst_11997__$1 = tmp12070;var inst_11998__$1 = tmp12071;var inst_11999__$1 = inst_12007;var state_12057__$1 = (function (){var statearr_12075 = state_12057;(statearr_12075[8] = inst_11999__$1);
(statearr_12075[14] = inst_12006);
(statearr_12075[9] = inst_11996__$1);
(statearr_12075[10] = inst_11997__$1);
(statearr_12075[11] = inst_11998__$1);
return statearr_12075;
})();var statearr_12076_12116 = state_12057__$1;(statearr_12076_12116[2] = null);
(statearr_12076_12116[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 11))
{var inst_11996 = (state_12057[9]);var inst_12010 = (state_12057[15]);var inst_12010__$1 = cljs.core.seq.call(null,inst_11996);var state_12057__$1 = (function (){var statearr_12077 = state_12057;(statearr_12077[15] = inst_12010__$1);
return statearr_12077;
})();if(inst_12010__$1)
{var statearr_12078_12117 = state_12057__$1;(statearr_12078_12117[1] = 13);
} else
{var statearr_12079_12118 = state_12057__$1;(statearr_12079_12118[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 12))
{var inst_12030 = (state_12057[2]);var state_12057__$1 = state_12057;var statearr_12080_12119 = state_12057__$1;(statearr_12080_12119[2] = inst_12030);
(statearr_12080_12119[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 13))
{var inst_12010 = (state_12057[15]);var inst_12012 = cljs.core.chunked_seq_QMARK_.call(null,inst_12010);var state_12057__$1 = state_12057;if(inst_12012)
{var statearr_12081_12120 = state_12057__$1;(statearr_12081_12120[1] = 16);
} else
{var statearr_12082_12121 = state_12057__$1;(statearr_12082_12121[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 14))
{var state_12057__$1 = state_12057;var statearr_12083_12122 = state_12057__$1;(statearr_12083_12122[2] = null);
(statearr_12083_12122[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 15))
{var inst_12028 = (state_12057[2]);var state_12057__$1 = state_12057;var statearr_12084_12123 = state_12057__$1;(statearr_12084_12123[2] = inst_12028);
(statearr_12084_12123[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 16))
{var inst_12010 = (state_12057[15]);var inst_12014 = cljs.core.chunk_first.call(null,inst_12010);var inst_12015 = cljs.core.chunk_rest.call(null,inst_12010);var inst_12016 = cljs.core.count.call(null,inst_12014);var inst_11996 = inst_12015;var inst_11997 = inst_12014;var inst_11998 = inst_12016;var inst_11999 = 0;var state_12057__$1 = (function (){var statearr_12085 = state_12057;(statearr_12085[8] = inst_11999);
(statearr_12085[9] = inst_11996);
(statearr_12085[10] = inst_11997);
(statearr_12085[11] = inst_11998);
return statearr_12085;
})();var statearr_12086_12124 = state_12057__$1;(statearr_12086_12124[2] = null);
(statearr_12086_12124[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 17))
{var inst_12010 = (state_12057[15]);var inst_12019 = cljs.core.first.call(null,inst_12010);var inst_12020 = cljs.core.async.muxch_STAR_.call(null,inst_12019);var inst_12021 = cljs.core.async.close_BANG_.call(null,inst_12020);var inst_12022 = cljs.core.next.call(null,inst_12010);var inst_11996 = inst_12022;var inst_11997 = null;var inst_11998 = 0;var inst_11999 = 0;var state_12057__$1 = (function (){var statearr_12087 = state_12057;(statearr_12087[16] = inst_12021);
(statearr_12087[8] = inst_11999);
(statearr_12087[9] = inst_11996);
(statearr_12087[10] = inst_11997);
(statearr_12087[11] = inst_11998);
return statearr_12087;
})();var statearr_12088_12125 = state_12057__$1;(statearr_12088_12125[2] = null);
(statearr_12088_12125[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 18))
{var inst_12025 = (state_12057[2]);var state_12057__$1 = state_12057;var statearr_12089_12126 = state_12057__$1;(statearr_12089_12126[2] = inst_12025);
(statearr_12089_12126[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 19))
{var state_12057__$1 = state_12057;var statearr_12090_12127 = state_12057__$1;(statearr_12090_12127[2] = null);
(statearr_12090_12127[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 20))
{var state_12057__$1 = state_12057;var statearr_12091_12128 = state_12057__$1;(statearr_12091_12128[2] = null);
(statearr_12091_12128[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 21))
{var inst_12050 = (state_12057[2]);var state_12057__$1 = (function (){var statearr_12092 = state_12057;(statearr_12092[17] = inst_12050);
return statearr_12092;
})();var statearr_12093_12129 = state_12057__$1;(statearr_12093_12129[2] = null);
(statearr_12093_12129[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 22))
{var inst_12047 = (state_12057[2]);var state_12057__$1 = state_12057;var statearr_12094_12130 = state_12057__$1;(statearr_12094_12130[2] = inst_12047);
(statearr_12094_12130[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 23))
{var inst_12034 = (state_12057[13]);var inst_12038 = (state_12057[2]);var inst_12039 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_12034);var state_12057__$1 = (function (){var statearr_12095 = state_12057;(statearr_12095[18] = inst_12038);
return statearr_12095;
})();var statearr_12096_12131 = state_12057__$1;(statearr_12096_12131[2] = inst_12039);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12057__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12058 === 24))
{var inst_12036 = (state_12057[12]);var inst_11986 = (state_12057[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12057,23,Object,null,22);var inst_12043 = cljs.core.async.muxch_STAR_.call(null,inst_12036);var state_12057__$1 = state_12057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12057__$1,25,inst_12043,inst_11986);
} else
{if((state_val_12058 === 25))
{var inst_12045 = (state_12057[2]);var state_12057__$1 = state_12057;var statearr_12097_12132 = state_12057__$1;(statearr_12097_12132[2] = inst_12045);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12057__$1);
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
var state_machine__6871__auto____0 = (function (){var statearr_12101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12101[0] = state_machine__6871__auto__);
(statearr_12101[1] = 1);
return statearr_12101;
});
var state_machine__6871__auto____1 = (function (state_12057){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12057);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12102){if((e12102 instanceof Object))
{var ex__6874__auto__ = e12102;var statearr_12103_12133 = state_12057;(statearr_12103_12133[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12134 = state_12057;
state_12057 = G__12134;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12057){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12104 = f__6886__auto__.call(null);(statearr_12104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12105);
return statearr_12104;
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
,cljs.core.range.call(null,cnt));var c__6885__auto___12271 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12241){var state_val_12242 = (state_12241[1]);if((state_val_12242 === 1))
{var state_12241__$1 = state_12241;var statearr_12243_12272 = state_12241__$1;(statearr_12243_12272[2] = null);
(statearr_12243_12272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 2))
{var inst_12204 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_12205 = 0;var state_12241__$1 = (function (){var statearr_12244 = state_12241;(statearr_12244[7] = inst_12204);
(statearr_12244[8] = inst_12205);
return statearr_12244;
})();var statearr_12245_12273 = state_12241__$1;(statearr_12245_12273[2] = null);
(statearr_12245_12273[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 3))
{var inst_12239 = (state_12241[2]);var state_12241__$1 = state_12241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12241__$1,inst_12239);
} else
{if((state_val_12242 === 4))
{var inst_12205 = (state_12241[8]);var inst_12207 = (inst_12205 < cnt);var state_12241__$1 = state_12241;if(cljs.core.truth_(inst_12207))
{var statearr_12246_12274 = state_12241__$1;(statearr_12246_12274[1] = 6);
} else
{var statearr_12247_12275 = state_12241__$1;(statearr_12247_12275[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 5))
{var inst_12225 = (state_12241[2]);var state_12241__$1 = (function (){var statearr_12248 = state_12241;(statearr_12248[9] = inst_12225);
return statearr_12248;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12241__$1,12,dchan);
} else
{if((state_val_12242 === 6))
{var state_12241__$1 = state_12241;var statearr_12249_12276 = state_12241__$1;(statearr_12249_12276[2] = null);
(statearr_12249_12276[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 7))
{var state_12241__$1 = state_12241;var statearr_12250_12277 = state_12241__$1;(statearr_12250_12277[2] = null);
(statearr_12250_12277[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 8))
{var inst_12223 = (state_12241[2]);var state_12241__$1 = state_12241;var statearr_12251_12278 = state_12241__$1;(statearr_12251_12278[2] = inst_12223);
(statearr_12251_12278[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 9))
{var inst_12205 = (state_12241[8]);var inst_12218 = (state_12241[2]);var inst_12219 = (inst_12205 + 1);var inst_12205__$1 = inst_12219;var state_12241__$1 = (function (){var statearr_12252 = state_12241;(statearr_12252[10] = inst_12218);
(statearr_12252[8] = inst_12205__$1);
return statearr_12252;
})();var statearr_12253_12279 = state_12241__$1;(statearr_12253_12279[2] = null);
(statearr_12253_12279[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 10))
{var inst_12209 = (state_12241[2]);var inst_12210 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_12241__$1 = (function (){var statearr_12254 = state_12241;(statearr_12254[11] = inst_12209);
return statearr_12254;
})();var statearr_12255_12280 = state_12241__$1;(statearr_12255_12280[2] = inst_12210);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12241__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 11))
{var inst_12205 = (state_12241[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12241,10,Object,null,9);var inst_12214 = chs__$1.call(null,inst_12205);var inst_12215 = done.call(null,inst_12205);var inst_12216 = cljs.core.async.take_BANG_.call(null,inst_12214,inst_12215);var state_12241__$1 = state_12241;var statearr_12256_12281 = state_12241__$1;(statearr_12256_12281[2] = inst_12216);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12241__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 12))
{var inst_12227 = (state_12241[12]);var inst_12227__$1 = (state_12241[2]);var inst_12228 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_12227__$1);var state_12241__$1 = (function (){var statearr_12257 = state_12241;(statearr_12257[12] = inst_12227__$1);
return statearr_12257;
})();if(cljs.core.truth_(inst_12228))
{var statearr_12258_12282 = state_12241__$1;(statearr_12258_12282[1] = 13);
} else
{var statearr_12259_12283 = state_12241__$1;(statearr_12259_12283[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 13))
{var inst_12230 = cljs.core.async.close_BANG_.call(null,out);var state_12241__$1 = state_12241;var statearr_12260_12284 = state_12241__$1;(statearr_12260_12284[2] = inst_12230);
(statearr_12260_12284[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 14))
{var inst_12227 = (state_12241[12]);var inst_12232 = cljs.core.apply.call(null,f,inst_12227);var state_12241__$1 = state_12241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12241__$1,16,out,inst_12232);
} else
{if((state_val_12242 === 15))
{var inst_12237 = (state_12241[2]);var state_12241__$1 = state_12241;var statearr_12261_12285 = state_12241__$1;(statearr_12261_12285[2] = inst_12237);
(statearr_12261_12285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12242 === 16))
{var inst_12234 = (state_12241[2]);var state_12241__$1 = (function (){var statearr_12262 = state_12241;(statearr_12262[13] = inst_12234);
return statearr_12262;
})();var statearr_12263_12286 = state_12241__$1;(statearr_12263_12286[2] = null);
(statearr_12263_12286[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12267[0] = state_machine__6871__auto__);
(statearr_12267[1] = 1);
return statearr_12267;
});
var state_machine__6871__auto____1 = (function (state_12241){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12241);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12268){if((e12268 instanceof Object))
{var ex__6874__auto__ = e12268;var statearr_12269_12287 = state_12241;(statearr_12269_12287[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12241);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12288 = state_12241;
state_12241 = G__12288;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12241){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12270 = f__6886__auto__.call(null);(statearr_12270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12271);
return statearr_12270;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12372){var state_val_12373 = (state_12372[1]);if((state_val_12373 === 1))
{var inst_12343 = cljs.core.vec.call(null,chs);var inst_12344 = inst_12343;var state_12372__$1 = (function (){var statearr_12374 = state_12372;(statearr_12374[7] = inst_12344);
return statearr_12374;
})();var statearr_12375_12397 = state_12372__$1;(statearr_12375_12397[2] = null);
(statearr_12375_12397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 2))
{var inst_12344 = (state_12372[7]);var inst_12346 = cljs.core.count.call(null,inst_12344);var inst_12347 = (inst_12346 > 0);var state_12372__$1 = state_12372;if(cljs.core.truth_(inst_12347))
{var statearr_12376_12398 = state_12372__$1;(statearr_12376_12398[1] = 4);
} else
{var statearr_12377_12399 = state_12372__$1;(statearr_12377_12399[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 3))
{var inst_12370 = (state_12372[2]);var state_12372__$1 = state_12372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12372__$1,inst_12370);
} else
{if((state_val_12373 === 4))
{var inst_12344 = (state_12372[7]);var state_12372__$1 = state_12372;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12372__$1,7,inst_12344);
} else
{if((state_val_12373 === 5))
{var inst_12366 = cljs.core.async.close_BANG_.call(null,out);var state_12372__$1 = state_12372;var statearr_12378_12400 = state_12372__$1;(statearr_12378_12400[2] = inst_12366);
(statearr_12378_12400[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 6))
{var inst_12368 = (state_12372[2]);var state_12372__$1 = state_12372;var statearr_12379_12401 = state_12372__$1;(statearr_12379_12401[2] = inst_12368);
(statearr_12379_12401[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 7))
{var inst_12352 = (state_12372[8]);var inst_12351 = (state_12372[9]);var inst_12351__$1 = (state_12372[2]);var inst_12352__$1 = cljs.core.nth.call(null,inst_12351__$1,0,null);var inst_12353 = cljs.core.nth.call(null,inst_12351__$1,1,null);var inst_12354 = (inst_12352__$1 == null);var state_12372__$1 = (function (){var statearr_12380 = state_12372;(statearr_12380[8] = inst_12352__$1);
(statearr_12380[10] = inst_12353);
(statearr_12380[9] = inst_12351__$1);
return statearr_12380;
})();if(cljs.core.truth_(inst_12354))
{var statearr_12381_12402 = state_12372__$1;(statearr_12381_12402[1] = 8);
} else
{var statearr_12382_12403 = state_12372__$1;(statearr_12382_12403[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 8))
{var inst_12352 = (state_12372[8]);var inst_12353 = (state_12372[10]);var inst_12351 = (state_12372[9]);var inst_12344 = (state_12372[7]);var inst_12356 = (function (){var c = inst_12353;var v = inst_12352;var vec__12349 = inst_12351;var cs = inst_12344;return ((function (c,v,vec__12349,cs,inst_12352,inst_12353,inst_12351,inst_12344,state_val_12373){
return (function (p1__12289_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__12289_SHARP_);
});
;})(c,v,vec__12349,cs,inst_12352,inst_12353,inst_12351,inst_12344,state_val_12373))
})();var inst_12357 = cljs.core.filterv.call(null,inst_12356,inst_12344);var inst_12344__$1 = inst_12357;var state_12372__$1 = (function (){var statearr_12383 = state_12372;(statearr_12383[7] = inst_12344__$1);
return statearr_12383;
})();var statearr_12384_12404 = state_12372__$1;(statearr_12384_12404[2] = null);
(statearr_12384_12404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 9))
{var inst_12352 = (state_12372[8]);var state_12372__$1 = state_12372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12372__$1,11,out,inst_12352);
} else
{if((state_val_12373 === 10))
{var inst_12364 = (state_12372[2]);var state_12372__$1 = state_12372;var statearr_12386_12405 = state_12372__$1;(statearr_12386_12405[2] = inst_12364);
(statearr_12386_12405[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12373 === 11))
{var inst_12344 = (state_12372[7]);var inst_12361 = (state_12372[2]);var tmp12385 = inst_12344;var inst_12344__$1 = tmp12385;var state_12372__$1 = (function (){var statearr_12387 = state_12372;(statearr_12387[7] = inst_12344__$1);
(statearr_12387[11] = inst_12361);
return statearr_12387;
})();var statearr_12388_12406 = state_12372__$1;(statearr_12388_12406[2] = null);
(statearr_12388_12406[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12392 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12392[0] = state_machine__6871__auto__);
(statearr_12392[1] = 1);
return statearr_12392;
});
var state_machine__6871__auto____1 = (function (state_12372){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12372);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12393){if((e12393 instanceof Object))
{var ex__6874__auto__ = e12393;var statearr_12394_12407 = state_12372;(statearr_12394_12407[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12408 = state_12372;
state_12372 = G__12408;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12372){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12395 = f__6886__auto__.call(null);(statearr_12395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12396);
return statearr_12395;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12501 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12478){var state_val_12479 = (state_12478[1]);if((state_val_12479 === 1))
{var inst_12455 = 0;var state_12478__$1 = (function (){var statearr_12480 = state_12478;(statearr_12480[7] = inst_12455);
return statearr_12480;
})();var statearr_12481_12502 = state_12478__$1;(statearr_12481_12502[2] = null);
(statearr_12481_12502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 2))
{var inst_12455 = (state_12478[7]);var inst_12457 = (inst_12455 < n);var state_12478__$1 = state_12478;if(cljs.core.truth_(inst_12457))
{var statearr_12482_12503 = state_12478__$1;(statearr_12482_12503[1] = 4);
} else
{var statearr_12483_12504 = state_12478__$1;(statearr_12483_12504[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 3))
{var inst_12475 = (state_12478[2]);var inst_12476 = cljs.core.async.close_BANG_.call(null,out);var state_12478__$1 = (function (){var statearr_12484 = state_12478;(statearr_12484[8] = inst_12475);
return statearr_12484;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12478__$1,inst_12476);
} else
{if((state_val_12479 === 4))
{var state_12478__$1 = state_12478;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12478__$1,7,ch);
} else
{if((state_val_12479 === 5))
{var state_12478__$1 = state_12478;var statearr_12485_12505 = state_12478__$1;(statearr_12485_12505[2] = null);
(statearr_12485_12505[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 6))
{var inst_12473 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12486_12506 = state_12478__$1;(statearr_12486_12506[2] = inst_12473);
(statearr_12486_12506[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 7))
{var inst_12460 = (state_12478[9]);var inst_12460__$1 = (state_12478[2]);var inst_12461 = (inst_12460__$1 == null);var inst_12462 = cljs.core.not.call(null,inst_12461);var state_12478__$1 = (function (){var statearr_12487 = state_12478;(statearr_12487[9] = inst_12460__$1);
return statearr_12487;
})();if(inst_12462)
{var statearr_12488_12507 = state_12478__$1;(statearr_12488_12507[1] = 8);
} else
{var statearr_12489_12508 = state_12478__$1;(statearr_12489_12508[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 8))
{var inst_12460 = (state_12478[9]);var state_12478__$1 = state_12478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12478__$1,11,out,inst_12460);
} else
{if((state_val_12479 === 9))
{var state_12478__$1 = state_12478;var statearr_12490_12509 = state_12478__$1;(statearr_12490_12509[2] = null);
(statearr_12490_12509[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 10))
{var inst_12470 = (state_12478[2]);var state_12478__$1 = state_12478;var statearr_12491_12510 = state_12478__$1;(statearr_12491_12510[2] = inst_12470);
(statearr_12491_12510[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12479 === 11))
{var inst_12455 = (state_12478[7]);var inst_12465 = (state_12478[2]);var inst_12466 = (inst_12455 + 1);var inst_12455__$1 = inst_12466;var state_12478__$1 = (function (){var statearr_12492 = state_12478;(statearr_12492[10] = inst_12465);
(statearr_12492[7] = inst_12455__$1);
return statearr_12492;
})();var statearr_12493_12511 = state_12478__$1;(statearr_12493_12511[2] = null);
(statearr_12493_12511[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12497 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12497[0] = state_machine__6871__auto__);
(statearr_12497[1] = 1);
return statearr_12497;
});
var state_machine__6871__auto____1 = (function (state_12478){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12478);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12498){if((e12498 instanceof Object))
{var ex__6874__auto__ = e12498;var statearr_12499_12512 = state_12478;(statearr_12499_12512[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12513 = state_12478;
state_12478 = G__12513;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12478){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12500 = f__6886__auto__.call(null);(statearr_12500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12501);
return statearr_12500;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12610 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12585){var state_val_12586 = (state_12585[1]);if((state_val_12586 === 1))
{var inst_12562 = null;var state_12585__$1 = (function (){var statearr_12587 = state_12585;(statearr_12587[7] = inst_12562);
return statearr_12587;
})();var statearr_12588_12611 = state_12585__$1;(statearr_12588_12611[2] = null);
(statearr_12588_12611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12586 === 2))
{var state_12585__$1 = state_12585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12585__$1,4,ch);
} else
{if((state_val_12586 === 3))
{var inst_12582 = (state_12585[2]);var inst_12583 = cljs.core.async.close_BANG_.call(null,out);var state_12585__$1 = (function (){var statearr_12589 = state_12585;(statearr_12589[8] = inst_12582);
return statearr_12589;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12585__$1,inst_12583);
} else
{if((state_val_12586 === 4))
{var inst_12565 = (state_12585[9]);var inst_12565__$1 = (state_12585[2]);var inst_12566 = (inst_12565__$1 == null);var inst_12567 = cljs.core.not.call(null,inst_12566);var state_12585__$1 = (function (){var statearr_12590 = state_12585;(statearr_12590[9] = inst_12565__$1);
return statearr_12590;
})();if(inst_12567)
{var statearr_12591_12612 = state_12585__$1;(statearr_12591_12612[1] = 5);
} else
{var statearr_12592_12613 = state_12585__$1;(statearr_12592_12613[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12586 === 5))
{var inst_12562 = (state_12585[7]);var inst_12565 = (state_12585[9]);var inst_12569 = cljs.core._EQ_.call(null,inst_12565,inst_12562);var state_12585__$1 = state_12585;if(inst_12569)
{var statearr_12593_12614 = state_12585__$1;(statearr_12593_12614[1] = 8);
} else
{var statearr_12594_12615 = state_12585__$1;(statearr_12594_12615[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12586 === 6))
{var state_12585__$1 = state_12585;var statearr_12596_12616 = state_12585__$1;(statearr_12596_12616[2] = null);
(statearr_12596_12616[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12586 === 7))
{var inst_12580 = (state_12585[2]);var state_12585__$1 = state_12585;var statearr_12597_12617 = state_12585__$1;(statearr_12597_12617[2] = inst_12580);
(statearr_12597_12617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12586 === 8))
{var inst_12562 = (state_12585[7]);var tmp12595 = inst_12562;var inst_12562__$1 = tmp12595;var state_12585__$1 = (function (){var statearr_12598 = state_12585;(statearr_12598[7] = inst_12562__$1);
return statearr_12598;
})();var statearr_12599_12618 = state_12585__$1;(statearr_12599_12618[2] = null);
(statearr_12599_12618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12586 === 9))
{var inst_12565 = (state_12585[9]);var state_12585__$1 = state_12585;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12585__$1,11,out,inst_12565);
} else
{if((state_val_12586 === 10))
{var inst_12577 = (state_12585[2]);var state_12585__$1 = state_12585;var statearr_12600_12619 = state_12585__$1;(statearr_12600_12619[2] = inst_12577);
(statearr_12600_12619[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12586 === 11))
{var inst_12565 = (state_12585[9]);var inst_12574 = (state_12585[2]);var inst_12562 = inst_12565;var state_12585__$1 = (function (){var statearr_12601 = state_12585;(statearr_12601[7] = inst_12562);
(statearr_12601[10] = inst_12574);
return statearr_12601;
})();var statearr_12602_12620 = state_12585__$1;(statearr_12602_12620[2] = null);
(statearr_12602_12620[1] = 2);
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
var state_machine__6871__auto____0 = (function (){var statearr_12606 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12606[0] = state_machine__6871__auto__);
(statearr_12606[1] = 1);
return statearr_12606;
});
var state_machine__6871__auto____1 = (function (state_12585){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12585);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12607){if((e12607 instanceof Object))
{var ex__6874__auto__ = e12607;var statearr_12608_12621 = state_12585;(statearr_12608_12621[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12585);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12622 = state_12585;
state_12585 = G__12622;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12585){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12609 = f__6886__auto__.call(null);(statearr_12609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12610);
return statearr_12609;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12757 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12727){var state_val_12728 = (state_12727[1]);if((state_val_12728 === 1))
{var inst_12690 = (new Array(n));var inst_12691 = inst_12690;var inst_12692 = 0;var state_12727__$1 = (function (){var statearr_12729 = state_12727;(statearr_12729[7] = inst_12691);
(statearr_12729[8] = inst_12692);
return statearr_12729;
})();var statearr_12730_12758 = state_12727__$1;(statearr_12730_12758[2] = null);
(statearr_12730_12758[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 2))
{var state_12727__$1 = state_12727;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12727__$1,4,ch);
} else
{if((state_val_12728 === 3))
{var inst_12725 = (state_12727[2]);var state_12727__$1 = state_12727;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12727__$1,inst_12725);
} else
{if((state_val_12728 === 4))
{var inst_12695 = (state_12727[9]);var inst_12695__$1 = (state_12727[2]);var inst_12696 = (inst_12695__$1 == null);var inst_12697 = cljs.core.not.call(null,inst_12696);var state_12727__$1 = (function (){var statearr_12731 = state_12727;(statearr_12731[9] = inst_12695__$1);
return statearr_12731;
})();if(inst_12697)
{var statearr_12732_12759 = state_12727__$1;(statearr_12732_12759[1] = 5);
} else
{var statearr_12733_12760 = state_12727__$1;(statearr_12733_12760[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 5))
{var inst_12700 = (state_12727[10]);var inst_12695 = (state_12727[9]);var inst_12691 = (state_12727[7]);var inst_12692 = (state_12727[8]);var inst_12699 = (inst_12691[inst_12692] = inst_12695);var inst_12700__$1 = (inst_12692 + 1);var inst_12701 = (inst_12700__$1 < n);var state_12727__$1 = (function (){var statearr_12734 = state_12727;(statearr_12734[10] = inst_12700__$1);
(statearr_12734[11] = inst_12699);
return statearr_12734;
})();if(cljs.core.truth_(inst_12701))
{var statearr_12735_12761 = state_12727__$1;(statearr_12735_12761[1] = 8);
} else
{var statearr_12736_12762 = state_12727__$1;(statearr_12736_12762[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 6))
{var inst_12692 = (state_12727[8]);var inst_12713 = (inst_12692 > 0);var state_12727__$1 = state_12727;if(cljs.core.truth_(inst_12713))
{var statearr_12738_12763 = state_12727__$1;(statearr_12738_12763[1] = 12);
} else
{var statearr_12739_12764 = state_12727__$1;(statearr_12739_12764[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 7))
{var inst_12723 = (state_12727[2]);var state_12727__$1 = state_12727;var statearr_12740_12765 = state_12727__$1;(statearr_12740_12765[2] = inst_12723);
(statearr_12740_12765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 8))
{var inst_12700 = (state_12727[10]);var inst_12691 = (state_12727[7]);var tmp12737 = inst_12691;var inst_12691__$1 = tmp12737;var inst_12692 = inst_12700;var state_12727__$1 = (function (){var statearr_12741 = state_12727;(statearr_12741[7] = inst_12691__$1);
(statearr_12741[8] = inst_12692);
return statearr_12741;
})();var statearr_12742_12766 = state_12727__$1;(statearr_12742_12766[2] = null);
(statearr_12742_12766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 9))
{var inst_12691 = (state_12727[7]);var inst_12705 = cljs.core.vec.call(null,inst_12691);var state_12727__$1 = state_12727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12727__$1,11,out,inst_12705);
} else
{if((state_val_12728 === 10))
{var inst_12711 = (state_12727[2]);var state_12727__$1 = state_12727;var statearr_12743_12767 = state_12727__$1;(statearr_12743_12767[2] = inst_12711);
(statearr_12743_12767[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 11))
{var inst_12707 = (state_12727[2]);var inst_12708 = (new Array(n));var inst_12691 = inst_12708;var inst_12692 = 0;var state_12727__$1 = (function (){var statearr_12744 = state_12727;(statearr_12744[7] = inst_12691);
(statearr_12744[8] = inst_12692);
(statearr_12744[12] = inst_12707);
return statearr_12744;
})();var statearr_12745_12768 = state_12727__$1;(statearr_12745_12768[2] = null);
(statearr_12745_12768[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 12))
{var inst_12691 = (state_12727[7]);var inst_12715 = cljs.core.vec.call(null,inst_12691);var state_12727__$1 = state_12727;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12727__$1,15,out,inst_12715);
} else
{if((state_val_12728 === 13))
{var state_12727__$1 = state_12727;var statearr_12746_12769 = state_12727__$1;(statearr_12746_12769[2] = null);
(statearr_12746_12769[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 14))
{var inst_12720 = (state_12727[2]);var inst_12721 = cljs.core.async.close_BANG_.call(null,out);var state_12727__$1 = (function (){var statearr_12747 = state_12727;(statearr_12747[13] = inst_12720);
return statearr_12747;
})();var statearr_12748_12770 = state_12727__$1;(statearr_12748_12770[2] = inst_12721);
(statearr_12748_12770[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12728 === 15))
{var inst_12717 = (state_12727[2]);var state_12727__$1 = state_12727;var statearr_12749_12771 = state_12727__$1;(statearr_12749_12771[2] = inst_12717);
(statearr_12749_12771[1] = 14);
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
var state_machine__6871__auto____0 = (function (){var statearr_12753 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12753[0] = state_machine__6871__auto__);
(statearr_12753[1] = 1);
return statearr_12753;
});
var state_machine__6871__auto____1 = (function (state_12727){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12727);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12754){if((e12754 instanceof Object))
{var ex__6874__auto__ = e12754;var statearr_12755_12772 = state_12727;(statearr_12755_12772[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12727);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12754;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12773 = state_12727;
state_12727 = G__12773;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12727){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12756 = f__6886__auto__.call(null);(statearr_12756[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12757);
return statearr_12756;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6885__auto___12916 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6886__auto__ = (function (){var switch__6870__auto__ = (function (state_12886){var state_val_12887 = (state_12886[1]);if((state_val_12887 === 1))
{var inst_12845 = [];var inst_12846 = inst_12845;var inst_12847 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12886__$1 = (function (){var statearr_12888 = state_12886;(statearr_12888[7] = inst_12847);
(statearr_12888[8] = inst_12846);
return statearr_12888;
})();var statearr_12889_12917 = state_12886__$1;(statearr_12889_12917[2] = null);
(statearr_12889_12917[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 2))
{var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12886__$1,4,ch);
} else
{if((state_val_12887 === 3))
{var inst_12884 = (state_12886[2]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12886__$1,inst_12884);
} else
{if((state_val_12887 === 4))
{var inst_12850 = (state_12886[9]);var inst_12850__$1 = (state_12886[2]);var inst_12851 = (inst_12850__$1 == null);var inst_12852 = cljs.core.not.call(null,inst_12851);var state_12886__$1 = (function (){var statearr_12890 = state_12886;(statearr_12890[9] = inst_12850__$1);
return statearr_12890;
})();if(inst_12852)
{var statearr_12891_12918 = state_12886__$1;(statearr_12891_12918[1] = 5);
} else
{var statearr_12892_12919 = state_12886__$1;(statearr_12892_12919[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 5))
{var inst_12847 = (state_12886[7]);var inst_12854 = (state_12886[10]);var inst_12850 = (state_12886[9]);var inst_12854__$1 = f.call(null,inst_12850);var inst_12855 = cljs.core._EQ_.call(null,inst_12854__$1,inst_12847);var inst_12856 = cljs.core.keyword_identical_QMARK_.call(null,inst_12847,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12857 = (inst_12855) || (inst_12856);var state_12886__$1 = (function (){var statearr_12893 = state_12886;(statearr_12893[10] = inst_12854__$1);
return statearr_12893;
})();if(cljs.core.truth_(inst_12857))
{var statearr_12894_12920 = state_12886__$1;(statearr_12894_12920[1] = 8);
} else
{var statearr_12895_12921 = state_12886__$1;(statearr_12895_12921[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 6))
{var inst_12846 = (state_12886[8]);var inst_12871 = inst_12846.length;var inst_12872 = (inst_12871 > 0);var state_12886__$1 = state_12886;if(cljs.core.truth_(inst_12872))
{var statearr_12897_12922 = state_12886__$1;(statearr_12897_12922[1] = 12);
} else
{var statearr_12898_12923 = state_12886__$1;(statearr_12898_12923[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 7))
{var inst_12882 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12899_12924 = state_12886__$1;(statearr_12899_12924[2] = inst_12882);
(statearr_12899_12924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 8))
{var inst_12846 = (state_12886[8]);var inst_12854 = (state_12886[10]);var inst_12850 = (state_12886[9]);var inst_12859 = inst_12846.push(inst_12850);var tmp12896 = inst_12846;var inst_12846__$1 = tmp12896;var inst_12847 = inst_12854;var state_12886__$1 = (function (){var statearr_12900 = state_12886;(statearr_12900[7] = inst_12847);
(statearr_12900[8] = inst_12846__$1);
(statearr_12900[11] = inst_12859);
return statearr_12900;
})();var statearr_12901_12925 = state_12886__$1;(statearr_12901_12925[2] = null);
(statearr_12901_12925[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 9))
{var inst_12846 = (state_12886[8]);var inst_12862 = cljs.core.vec.call(null,inst_12846);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12886__$1,11,out,inst_12862);
} else
{if((state_val_12887 === 10))
{var inst_12869 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12902_12926 = state_12886__$1;(statearr_12902_12926[2] = inst_12869);
(statearr_12902_12926[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 11))
{var inst_12854 = (state_12886[10]);var inst_12850 = (state_12886[9]);var inst_12864 = (state_12886[2]);var inst_12865 = [];var inst_12866 = inst_12865.push(inst_12850);var inst_12846 = inst_12865;var inst_12847 = inst_12854;var state_12886__$1 = (function (){var statearr_12903 = state_12886;(statearr_12903[12] = inst_12864);
(statearr_12903[13] = inst_12866);
(statearr_12903[7] = inst_12847);
(statearr_12903[8] = inst_12846);
return statearr_12903;
})();var statearr_12904_12927 = state_12886__$1;(statearr_12904_12927[2] = null);
(statearr_12904_12927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 12))
{var inst_12846 = (state_12886[8]);var inst_12874 = cljs.core.vec.call(null,inst_12846);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12886__$1,15,out,inst_12874);
} else
{if((state_val_12887 === 13))
{var state_12886__$1 = state_12886;var statearr_12905_12928 = state_12886__$1;(statearr_12905_12928[2] = null);
(statearr_12905_12928[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 14))
{var inst_12879 = (state_12886[2]);var inst_12880 = cljs.core.async.close_BANG_.call(null,out);var state_12886__$1 = (function (){var statearr_12906 = state_12886;(statearr_12906[14] = inst_12879);
return statearr_12906;
})();var statearr_12907_12929 = state_12886__$1;(statearr_12907_12929[2] = inst_12880);
(statearr_12907_12929[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 15))
{var inst_12876 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12908_12930 = state_12886__$1;(statearr_12908_12930[2] = inst_12876);
(statearr_12908_12930[1] = 14);
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
var state_machine__6871__auto____0 = (function (){var statearr_12912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12912[0] = state_machine__6871__auto__);
(statearr_12912[1] = 1);
return statearr_12912;
});
var state_machine__6871__auto____1 = (function (state_12886){while(true){
var ret_value__6872__auto__ = (function (){try{while(true){
var result__6873__auto__ = switch__6870__auto__.call(null,state_12886);if(cljs.core.keyword_identical_QMARK_.call(null,result__6873__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6873__auto__;
}
break;
}
}catch (e12913){if((e12913 instanceof Object))
{var ex__6874__auto__ = e12913;var statearr_12914_12931 = state_12886;(statearr_12914_12931[5] = ex__6874__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6872__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12932 = state_12886;
state_12886 = G__12932;
continue;
}
} else
{return ret_value__6872__auto__;
}
break;
}
});
state_machine__6871__auto__ = function(state_12886){
switch(arguments.length){
case 0:
return state_machine__6871__auto____0.call(this);
case 1:
return state_machine__6871__auto____1.call(this,state_12886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6871__auto____0;
state_machine__6871__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6871__auto____1;
return state_machine__6871__auto__;
})()
;})(switch__6870__auto__))
})();var state__6887__auto__ = (function (){var statearr_12915 = f__6886__auto__.call(null);(statearr_12915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6885__auto___12916);
return statearr_12915;
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