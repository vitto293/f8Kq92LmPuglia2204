const files=[...Array(26)].map((_,i)=>`59790207004565220${String(i+3).padStart(2,'0')}.jpg`);
let idx=0;setInterval(()=>{document.getElementById('img').src=files[idx%files.length];idx++;},3000);
function check(){if(pw.value==='2204'){lock.style.display='none';site.style.display='block';}else e.textContent='Password errata';}
const target=new Date('2026-07-25T00:00:00');
setInterval(()=>{let d=target-new Date();let g=Math.floor(d/86400000);let h=Math.floor(d%86400000/3600000);let m=Math.floor(d%3600000/60000);let s=Math.floor(d%60000/1000);cd.textContent=`${g} giorni ${h} ore ${m} min ${s} sec`;},1000);