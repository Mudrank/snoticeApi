window.addEventListener('DOMContentLoaded', () => renderNext());



const renderNext = async () => {



  Usercookie = localStorage.getItem('CookieSubmitted');
  ifAuth = document.querySelector('.ifAuth')
  no = document.querySelector('.noAuth')
 
  if(!Usercookie){
    alert('NO auth found!');
    ifAuth.style.display = 'none';
    no.style.display = 'grid';
 }



}

