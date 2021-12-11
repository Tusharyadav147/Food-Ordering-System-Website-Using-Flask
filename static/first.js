let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  section.forEach(sec =>{

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links =>{
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
      });
    };

  });

}
document.querySelector('#search-icon').onclick= () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick= () =>{
    document.querySelector('#search-form').classList.remove('active');
}
var swiper = new Swiper(".home-slider", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
  });

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
      0: {
          slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var select = document.getElementById("food-type");
  select.onclick = () =>{
    if (select.options[select.selectedIndex].value == 'pizza'){
      document.getElementById("pizza-type").style.display="block";
      document.getElementById("empty").style.display = "none";
      document.getElementById("sweets-type").style.display = "none";
      document.getElementById("special-type").style.display = "none";
      document.getElementById("juice-type").style.display = "none";
      document.getElementById("soft-drinks-type").style.display = "none";
    }
    else if (select.options[select.selectedIndex].value == 'special'){
      document.getElementById("pizza-type").style.display="none";
      document.getElementById("empty").style.display = "none";
      document.getElementById("sweets-type").style.display = "none";
      document.getElementById("special-type").style.display = "block";
      document.getElementById("juice-type").style.display = "none";
      document.getElementById("soft-drinks-type").style.display = "none";
    }
    else if (select.options[select.selectedIndex].value == 'sweets'){
      document.getElementById("pizza-type").style.display="none";
      document.getElementById("empty").style.display = "none";
      document.getElementById("sweets-type").style.display = "block";
      document.getElementById("special-type").style.display = "none";
      document.getElementById("juice-type").style.display = "none";
      document.getElementById("soft-drinks-type").style.display = "none";
    }
    else if (select.options[select.selectedIndex].value == 'juices'){
      document.getElementById("pizza-type").style.display="none";
      document.getElementById("empty").style.display = "none";
      document.getElementById("sweets-type").style.display = "none";
      document.getElementById("special-type").style.display = "none";
      document.getElementById("juice-type").style.display = "block";
      document.getElementById("soft-drinks-type").style.display = "none";
    }
    else if (select.options[select.selectedIndex].value == 'soft-drinks'){
      document.getElementById("pizza-type").style.display="none";
      document.getElementById("empty").style.display = "none";
      document.getElementById("sweets-type").style.display = "none";
      document.getElementById("special-type").style.display = "none";
      document.getElementById("juice-type").style.display = "none";
      document.getElementById("soft-drinks-type").style.display = "block";
    }
    else if (select.options[select.selectedIndex].value == 'fast-food'){
      document.getElementById("pizza-type").style.display="none";
      document.getElementById("empty").style.display = "block";
      document.getElementById("sweets-type").style.display = "none";
      document.getElementById("special-type").style.display = "none";
      document.getElementById("juice-type").style.display = "none";
      document.getElementById("soft-drinks-type").style.display = "none";
    }
    else if (select.options[select.selectedIndex].value == 'other'){
      document.getElementById("pizza-type").style.display="none";
      document.getElementById("empty").style.display = "block";
      document.getElementById("sweets-type").style.display = "none";
      document.getElementById("special-type").style.display = "none";
      document.getElementById("juice-type").style.display = "none";
      document.getElementById("soft-drinks-type").style.display = "none";
    }
    else if (select.options[select.selectedIndex].value == '#'){
      document.getElementById("pizza-type").style.display="none";
      document.getElementById("empty").style.display = "block";
      document.getElementById("sweets-type").style.display = "none";
      document.getElementById("special-type").style.display = "none";
      document.getElementById("juice-type").style.display = "none";
      document.getElementById("soft-drinks-type").style.display = "none";
    }
  }

document.querySelector('#close-btn').onclick= () =>{
  document.getElementById("alert").remove("show");
  document.getElementById("alert").remove("showAlert");
  document.getElementById("alert").toggle("hide");
}

// give amount
var dict = {
  "#" : 0,
  "hot-pizza" : 149,
  "farm-house-pizza" : 299,
  "max-italian-pizza" : 199,
  "daily-pizza" : 99,
  "matar-masala" : 199,
  "aloo-aratha" : 19,
  "butter-naan" : 39,
  "chole-panner": 119,
  "chole-bhature": 69,
  "dal-fry-marathi" : 89,
  "dal-makhani" : 69,
  "kadai-panner" : 79,
  "kaju-mutter-masala" :89,
  "kofte":39,
  "puri-special" : 19,
  "sahi-panner" : 69,
  "special-thali" : 289,
  "stuffed-naan" : 69,
  "tawa-roti" : 9,
  "gulab-jamun" : 159,
  "rabri" : 129,
  "kheer": 99,
  "laddu" : 569,
  "soan-sohan" : 299,
  "sohan-halwa" : 249,
  "ras-malai" :12,
  "7-up":49,
  "coco-cola": 79,
  "crush-pineapple" : 79,
  "fanta" :49,
  "frooti" : 39,
  "maaza" : 59,
  "pepsi" : 49,
  "mountain-dew" : 89,
  "mirinda" : 49,
  "blue-curacao": 49,
  "blue-lagoon" : 89,
  "raspberry-mojito" : 49,
  "crazy-milkshake" : 59,
  "kiwi-shake" : 99,
  "mint-mojito" : 89,
  "nuts-and-candy-milkshake": 299,
  "pebblesgoza" : 159
}

var select1 = document.getElementById("pizza-type");
var select2 = document.getElementById("special-type");
var select3 = document.getElementById("sweets-type");
var select4 = document.getElementById("soft-drinks-type");
var select5 = document.getElementById("juice-type");
var amount = document.getElementById("amount");
var number = document.getElementById("number");
select1.onclick = () =>{
  number.onclick = () =>{
    num1 = dict[select1.options[select1.selectedIndex].value]
    num2 = number.value
    amount.value = num1 * num2
  }
}
select2.onclick = () =>{
  number.onclick = () =>{
    num1 = dict[select2.options[select2.selectedIndex].value]
    num2 = number.value
    amount.value = num1 * num2
  }
}
select3.onclick = () =>{
  number.onclick = () =>{
    num1 = dict[select3.options[select3.selectedIndex].value]
    num2 = number.value
    amount.value = num1 * num2
  }
}
select4.onclick = () =>{
  number.onclick = () =>{
    num1 = dict[select4.options[select4.selectedIndex].value]
    num2 = number.value
    amount.value = num1 * num2
  }
}
select5.onclick = () =>{
  number.onclick = () =>{
    num1 = dict[select5.options[select5.selectedIndex].value]
    num2 = number.value
    amount.value = num1 * num2
  }
}

// order button working

document.querySelector("#order-nav").onclick= () =>{
  document.getElementById("order").style.display="block";
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("dishes").style.display="none";
  document.getElementById("contact").style.display="none";
  document.getElementById("footer").style.display="none";
}
document.querySelector('#home-nav').onclick= () =>{
  document.getElementById("order").style.display="none";
  document.getElementById("home").style.display="block";
  document.getElementById("about").style.display="block";
  document.getElementById("dishes").style.display="block";
  document.getElementById("contact").style.display="block";
  document.getElementById("footer").style.display="block";
}
document.querySelector('#about-nav').onclick= () =>{
  document.getElementById("order").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="block";
  document.getElementById("dishes").style.display="none";
  document.getElementById("contact").style.display="block";
  document.getElementById("footer").style.display="block";
}
document.querySelector('#dishes-nav').onclick= () =>{
  document.getElementById("order").style.display="none";
  document.getElementById("home").style.display="none";
  document.getElementById("about").style.display="none";
  document.getElementById("dishes").style.display="block";
  document.getElementById("contact").style.display="none";
  document.getElementById("footer").style.display="none";
}


// dishes menu selection button work
document.querySelector('#pizza-btn').onclick= () =>{
  document.getElementById("pizza").style.display="grid";
  document.getElementById("soft-drink").style.display="none";
  document.getElementById("sweets").style.display="none";
  document.getElementById("others").style.display="none";
  document.getElementById("juices").style.display="none";
  document.getElementById("special").style.display="none";

}
document.querySelector('#soft-drink-btn').onclick= () =>{
  document.getElementById("soft-drink").style.display="grid";
  document.getElementById("pizza").style.display="none";
  document.getElementById("sweets").style.display="none";
  document.getElementById("others").style.display="none";
  document.getElementById("juices").style.display="none";
  document.getElementById("special").style.display="none";
}
document.querySelector('#sweets-btn').onclick= () =>{
  document.getElementById("soft-drink").style.display="none";
  document.getElementById("pizza").style.display="none";
  document.getElementById("sweets").style.display="grid";
  document.getElementById("juices").style.display="none";
  document.getElementById("others").style.display="none";
  document.getElementById("special").style.display="none";
}
document.querySelector('#Juices-btn').onclick= () =>{
  document.getElementById("soft-drink").style.display="none";
  document.getElementById("pizza").style.display="none";
  document.getElementById("sweets").style.display="none";
  document.getElementById("juices").style.display="grid";
  document.getElementById("special").style.display="none";
  document.getElementById("others").style.display="none";
}
document.querySelector('#special-btn').onclick= () =>{
  document.getElementById("soft-drink").style.display="none";
  document.getElementById("pizza").style.display="none";
  document.getElementById("sweets").style.display="none";
  document.getElementById("juices").style.display="none";
  document.getElementById("special").style.display="grid";
  document.getElementById("others").style.display="none";
}
document.querySelector('#other-btn').onclick= () =>{
  document.getElementById("soft-drink").style.display="none";
  document.getElementById("pizza").style.display="none";
  document.getElementById("sweets").style.display="none";
  document.getElementById("juices").style.display="none";
  document.getElementById("special").style.display="none";
  document.getElementById("others").style.display="grid";
}


// select option show


