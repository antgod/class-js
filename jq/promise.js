function Promise(fn){
    this.callbacks=[];


    var hook=function(){

        return fn.apply(this,)
    };
}

Promise.prototype.then=function(callback){
    this.callbacks.add(callback);
};





var promise=new Promise(function(reslove,reject)=>{
    setTimeout(function(){
        reslove({a:1});
    },1000)
});


promise.then(function(data){

});





