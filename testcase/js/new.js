// alert("hello world");

// switch(new Date().getDate())
// {
//     case 0:
//         greeting="hi how are you";
//         break;
//     case 1:
//         greeting="jello";
//         break;
//     case 2:
//             greeting="jel2lo";
//             break;
//     case 3:
//                 greeting="3jello";
//                 break;
//     case 4:
//                     greeting="j4ello";
//                     break;
//     case 5:
//                         greeting="je5llo";
//                         break;
//     case 6:
//                             greeting="jel6lo";
//                             break;
                                                                
// }//object in js
// var harley={firstname: "hello",
// secondname:"Hi",
// fullname: function(){
//     return this.firstname +" hjhgjf    "+ this.secondname;
// }
// }

// function showdate()
// {
//     document.getElementById("test").innerHTML=Date();
// }
// function error()
// {
//     var msg,x;
//     msg= document.getElementById("message");
//     msg.innerHTML="";
    
//     x=document.getElementById("some").value;
//     try{

//         if(x=="") throw "wrong write something";
//         if(isNaN(x)) throw "only numbers are allowed";
        
//     }catch(err)
//     {
//     msg.innerHTML="error Is "+ err;
//     }finally{
//         document.getElementById("some").value="";
//     }
    
// }

// var hi= function  (currentscore){
//     var high=2*currentscore;
//     return high;
// }

// var harley={
//  name : "Street750",
//  cc :"black",
//  getBudget : function (arr){
//     return("you need to " + console.log(this.name))
//  }


// }
// harley.getBudget(8000);

// var walk= function()
// {
//     return("hr is able to walk");
// }

// var SuperHero = function(){
//     var power,villian;
// }
// SuperHero.prototype.walk=walk;
// carry = new SuperHero;
// carry.power="hello";
// carry.villian="myself";
// console.log(carry.walk());

// var dosomethig = function(work)
// {
//         console.log(work);
//         console.log(this.benchpress);
// }
// dosomethig("pushUps")
// var gym={ benchpress:"4 sets",squats:"2 sets"}
// dosomethig.call(gym,gym.benchpress);
// dosomethig.apply(gym,['crunches']);

// var extra= (
//     function(){
//         var hello=0;
//         return function(){return hello+=1}
//     }

// )();
// console.log(extra())

// var newlist= document.createElement("li");
// newlist.innerHTML="I was added by js";
// document.getElementById("test").appendChild(newlist);

function myFunction()
{
    var nam=document.forms["myform"];
    var text="";
    var i=0;
    for(;i<nam.length;i++)
    {text+=nam.elements[i].value
    +"<br>"}
    document.getElementById("getvalue").innerHTML=text;
}

// document.getElementById("test").innerHTML=hi(20);














