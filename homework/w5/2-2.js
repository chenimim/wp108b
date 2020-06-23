<<<<<<< HEAD
var j,i;
function neg(A)
{for(i=0;i<A.length;i++)
    {for(j=0;j<A[i].length;j++)
        {A[i][j]= -A[i][j];}
    }
return A;
}
=======
  
var j,i;
function neg(A)
{for(i=0;i<A.length;i++)
    {for(j=0;j<A[i].length;j++)
        {A[i][j]= -A[i][j];}
    }
return A;
}
>>>>>>> 26d2840b0916b7d01186de8b8c1c9688d1c0a5fe
console.log( neg([[1,2],[3,4]]) );