window.addEventListener('DOMContentLoaded', () => renderNext());

let nextClass = document.getElementById('className'); 
let container = document.querySelector('.nextClassDiv')

const renderNext = async () => {



  Usercookie = localStorage.getItem('CookieSubmitted');
  ifAuth = document.querySelector('.ifAuth')
  no = document.querySelector('.noAuth')
 
  if(!Usercookie){
    alert('NO auth found!');
    ifAuth.style.display = 'none';
    no.style.display = 'grid';
 }


  let uri = 'http://localhost:3000/classes';

  const res = await fetch(uri);
  const classes = await res.json();
  console.log(classes);


  
  let template = '';
 
  template += `
    <div class="next-class">
      <h2>Next class</h2>
      <h4>Your next class is ${classes[0].className} -- Click <a href="${classes[0].link}" target="_blank">here</a> to join</h4>
      <p>by <span>${classes[0].teacher}</span></p>
    </div>
  `



container.innerHTML = template;
}

