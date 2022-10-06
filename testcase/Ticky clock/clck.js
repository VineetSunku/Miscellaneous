var d,s,h,m,clocck,clr;
function time(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
s=d.getSeconds();
if(h<=9)
{
    h='0'+h;
}
if(m<=9)
{
    m='0'+m;
}
if(s<=9)
{
    s='0'+s;
}
clocck= h+":"+m+":"+s;
clr="#"+h+m+s;
document.getElementById("clock").innerHTML=clocck;
document.body.style.background=clr;
setTimeout(time,1000);

}
time();