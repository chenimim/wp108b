function transport(a)
{let i,j,b=[]
 for(i=0;i<a[0].length;i++)
    {b[i]=[];
     for(j=0;j<a.length;j++)
        {b[i][j]=a[j][i];}
    }
return b;
}
console.log(transport([[1,2,3],[3,2,1]]))