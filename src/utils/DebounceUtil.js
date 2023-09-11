export default (a)=>{
    let timer=null;


    return function(callbackFN,id){
        if(timer){
            clearTimeout(timer);
            timer = null;
        }

        timer = setTimeout(()=>{
            //callbackFN(id);
            callbackFN.call(null,id);
        },a);
    }
}