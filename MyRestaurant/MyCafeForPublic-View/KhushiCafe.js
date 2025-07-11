

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

    //navbar toggle
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



  window.onload = () => {
    const categories = ['coffee', 'chai', 'icecream', 'meal', 'shake', 'fastfood'];
    const shown = {};

    document.querySelectorAll('.box').forEach((box) => {
      for (let cat of categories) {
        if (box.classList.contains(cat)) {
          // Only show the first item from each category
          if (!shown[cat]) {
            shown[cat] = true;
          } else {
            box.style.display = 'none';
          }
        }
      }
    });
  };



  function filterItems(category, clickedBtn) {
    const allItems = document.querySelectorAll('.box');

     const allButtons = document.querySelectorAll('div > button');

  // 1. Remove 'active' from all buttons
  allButtons.forEach(btn => btn.classList.remove('active'));

  // 2. Add 'active' to clicked button
  clickedBtn.classList.add('active');

  
  
  allItems.forEach(item => {

      item.classList.remove('show'); // hide with transition
    
      if (category === 'all') {

          setTimeout(() => {
        item.classList.add('show'); // show with fade + slide
      }, 50);

        item.style.display = 'block'; // show all
      } else {

        
        if (item.classList.contains(category)) {

          setTimeout(() => {
        item.classList.add('show'); // show with fade + slide
      }, 50);

          item.style.display = 'block'; // show matched category
        } else {

            setTimeout(() => {
        item.classList.add('show'); // show with fade + slide
      }, 50);

          item.style.display = 'none'; // hide others
        }
      }
    });
  }



