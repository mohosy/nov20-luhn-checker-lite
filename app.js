const ui=document.getElementById('ui');const out=document.getElementById('out');
ui.innerHTML='<input id="num" value="4539578763621486" style="min-width:320px" /><button id="check">Check Luhn</button>';
function luhn(s){const d=s.replace(/\D/g,'').split('').reverse().map(Number);let sum=0;for(let i=0;i<d.length;i++){let x=d[i];if(i%2===1){x*=2;if(x>9)x-=9;}sum+=x;}return sum%10===0;}
function run(){const s=document.getElementById('num').value;out.textContent=`Number: ${s}\nValid Luhn: ${luhn(s)}`;}
ui.onclick=e=>{if(e.target.id==='check')run()};run();
