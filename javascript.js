let n=10;container.innerHTML=(d='<div class="')+'grd" style="width:'+n*14+'px">'+[...Array(n*n)].reduce((a,b,i)=>a+d+'cell">'+i.toString(16)+(e='</div>'),'')+e;
