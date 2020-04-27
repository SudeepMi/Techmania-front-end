
    document.getElementById("nav-toggler").addEventListener("click",function(){ 
        document.getElementById('nav').classList.toggle("block");
        var ele = document.getElementById('video');
        if(typeof(ele) != 'undefined' && ele != null){
           ele.classList.toggle("focus");
        }
        console.clear()
    });

document.getElementById("back-top").addEventListener("click",function(){
    document.body.scrollTop(0);
});
