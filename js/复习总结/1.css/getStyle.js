Object.prototype.getStyle=function(attr){
    if(this.nodeType==1){
        if(this.currentStyle){
            return obj.currentStyle[attr];
        }
        else{
            return getComputedStyle(this, false)[attr];
        }
    }else{
        console.log("不是节点");
        return "";
    }
};