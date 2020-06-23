<<<<<<< HEAD
function fac(a)
{var array=[];
 var x=2;
 while(a>1)
    {if (a%x==0)
    {array.push(x);
     a=a/x;
     continue;}
     x++;}
    return array;}
=======
function fac(a)
{var array=[];
 var x=2;
 while(a>1)
    {if (a%x==0)
    {array.push(x);
     a=a/x;
     continue;}
     x++;}
    return array;}
>>>>>>> 26d2840b0916b7d01186de8b8c1c9688d1c0a5fe
console.log(fac(45));