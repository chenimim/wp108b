a=[[1,2],[3,4]];
b=[[1,1],[1,1]];
c=[[0,0],[0,0]];
for (var i=0; i<a.length; i++) 
{
  for (var j=0; j<a[i].length; j++) 
  {c[i][j] =b[i][j]+ a[i][j];}
}
 console.log(c);