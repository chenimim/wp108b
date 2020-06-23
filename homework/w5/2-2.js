var j,i;
function neg(A)
{for(i=0;i<A.length;i++)
    {for(j=0;j<A[i].length;j++)
        {A[i][j]= -A[i][j];}
    }
return A;
}
console.log( neg([[1,2],[3,4]]) );