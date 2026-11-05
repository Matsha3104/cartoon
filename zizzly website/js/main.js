function toggleMenu(){
 const nav=document.getElementById('siteNav');
 const button=document.querySelector('.menu-toggle');
 const open=nav.classList.toggle('open');
 button.setAttribute('aria-expanded',String(open));
}
function showNotice(message){
 const notice=document.getElementById('formNotice');
 if(notice){notice.textContent=message;notice.hidden=false;}
}
document.addEventListener('submit',function(event){
 const form=event.target;
 if(form.matches('[data-demo-form]')){
   event.preventDefault();
   showNotice('Thank you! This demonstration form is working on the page. Connect a backend to store submissions.');
 }
});