// menu toggle + set active link
document.addEventListener('DOMContentLoaded',()=>{
  const t=document.querySelector('.menu-toggle');
  const m=document.querySelector('.menu');
  if(t)t.addEventListener('click',()=>m.classList.toggle('open'));
  const path=location.pathname.replace(/\/index\.html$/,'/').replace(/\.html$/,'')||'/';
  document.querySelectorAll('.menu a').forEach(a=>{
    const href=a.getAttribute('href').replace(/\.html$/,'').replace(/\/index$/,'/');
    if(href===path||(href!=='/'&&path.startsWith(href)))a.classList.add('active');
  });
});
