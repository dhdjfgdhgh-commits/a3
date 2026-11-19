(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var vn=$('vg-n');if(vn){var vt=$('vg-t'),vd=$('vg-d');on([vn,vt,vd],function(){var n=Math.max(0,parseInt(vn.value,10)||0),t=parseInt(vt.value,10),d=Math.max(1,parseInt(vd.value,10)||1),left=t-n;
 if(left<=0){$('vg-o').innerHTML='<strong>Target reached</strong><p>Pick a higher target, or focus on using the words you know in speech.</p>';return;}var days=Math.ceil(left/d),end=new Date(Date.now()+days*864e5);
 $('vg-o').innerHTML='<strong>'+days+' days</strong><p>'+left.toLocaleString()+' words to go at '+d+' a day: around '+end.toLocaleDateString(undefined,{month:'long',year:'numeric'})+'.</p><div class="ev-bar"><i style="width:'+Math.round(n/t*100)+'%'+'"></i></div><p>'+(d>20?'That is a lot of daily review; 10&ndash;15 is easier to sustain.':'A steady pace. Review old words before adding new ones.')+'</p>';});}
var pm=$('ps-m');if(pm){var pd=$('ps-d');on([pm,pd],function(){var m=Math.max(5,parseInt(pm.value,10)||5),d=Math.min(7,Math.max(1,parseInt(pd.value,10)||1)),wk=m*d,mo=Math.round(wk*4.35/60*10)/10,yr=Math.round(wk*52/60);
 $('ps-o').innerHTML='<strong>'+yr+' hours a year</strong><p>'+wk+' minutes a week &middot; about '+mo+' hours a month.</p><p>'+(d<4?'Try adding even two 10-minute days: frequency matters more than length.':'Great rhythm. Keep one day a week for speaking.')+'</p>';});}
var ll=$('ll-l');if(ll){var lg=$('ll-g'),lh=$('ll-h');var B={a2:180,b1:380,b2:600,c1:850};on([ll,lg,lh],function(){var h=Math.round(B[lg.value]*parseFloat(ll.value)/10)*10,w=Math.max(1,parseFloat(lh.value)||1),wk=Math.ceil(h/w),mo=Math.round(wk/4.35);
 $('ll-o').innerHTML='<strong>About '+h.toLocaleString()+' hours</strong><p>At '+w+' hours a week, roughly '+(mo>=24?Math.round(mo/12*10)/10+' years':mo+' months')+'.</p><p>A rough guide only: progress varies a lot by method, exposure and prior languages.</p>';});}
})();
