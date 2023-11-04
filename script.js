var display=false;
function inp(d){

    for(var i=0;i<2;i++){
        document.getElementsByTagName('input')[i].className="";
    }

   
        document.getElementsByTagName('input')[d].className+="inp"
       
 



}



// function noinp(d){
//     document.getElementsByTagName('input')[d].className="0"
// }


for(var i=0;i<2;i++){
    

    document.getElementsByTagName('input')[i].addEventListener('blur',function(){

        for(var i=0;i<2;i++){
        document.getElementsByTagName('input')[i].className="0";
        }
    })
}

