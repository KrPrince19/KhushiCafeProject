

const hours = new Date().getHours();

    //greet id

    greet =document.getElementById("greet")

    if(hours >= 6 && hours < 12){
      greet.textContent="Good Morning.."
    }
    else if(hours  >= 12 && hours < 18){
      greet.textContent="Good Afternoon.."
    }
    else{
      greet.textContent="Good Evening.."

    }

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('HighlightBox1').style.display = 'none';
    }, 3000); // hide after 3 seconds
  });

  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
      document.getElementById('HighlightBox2').style.display = 'none';
    }, 3000); // hide after 3 seconds
  });

let menuItem = document.querySelector('#menu-icon');

let navbar = document.querySelector('.navbar');
let sections =document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header nav a');

window.onscroll = ()=>{
    sections.forEach(sec => {
        let top=window.scrollY;
        let offset =sec.offsetTop - 150;
        let height =sec.offsetHeight;
        let id=sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuItem.onclick = () => {
 menuItem.classList.toggle('bx-x');
 navbar.classList.toggle('active');
}