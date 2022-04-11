
const navbuttons = document.querySelector('.navbuttons');
navbuttons.addEventListener('click',()=>navbuttons.classList.toggle('changes'));

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll',()=>{
  const getscrolly = window.scrollY;
  // console.log(getscrolly);

  if(getscrolly >= 200){
      navbar.classList.add('navmenus');
  }else{
      navbar.classList.remove('navmenus');
  }
});


// START CLOTH SECTION
const gallerylists = document.querySelectorAll('.gallerylists');
const filtersgentlements = document.querySelectorAll('.filters.gentlement');
const filtersladys = document.querySelectorAll('.filters.lady');
const filterskids = document.querySelectorAll('.filters.kid');
const filtersothers= document.querySelectorAll('.filters.other');

gallerylists.forEach((gallerylist)=>{
  // console.log(gallerylist);
  gallerylist.addEventListener('click',(e)=>{
    let datafilter = gallerylist.getAttribute('data-filter');
    removeactiveitems();
    e.target.classList.add('activeitems');
    if(datafilter === 'gentlement'){

      filtersgentlements.forEach(filtersgentlement=>filtersgentlement.style.display="inline-block");
      filtersladys.forEach(filterslady=>filterslady.style.display="none");
      filterskids.forEach(filterskid=>filterskid.style.display="none");
      filtersothers.forEach(filtersother=>filtersother.style.display="none");
    }else if(datafilter === 'lady'){
      filtersgentlements.forEach(filtersgentlement=>filtersgentlement.style.display="none");
      filtersladys.forEach(filterslady=>filterslady.style.display="inline-block");
      filterskids.forEach(filterskidt=>filterskid.style.display="none");
      filtersothers.forEach(filtersother=>filtersother.style.display="none");
    }else if(datafilter === 'kid'){
      filtersgentlements.forEach(filtersgentlement=>filtersgentlement.style.display="none");
      filtersladys.forEach(filterslady=>filterslady.style.display="none");
      filterskids.forEach(filterskid=>filterskid.style.display="inline-block");
      filtersothers.forEach(filtersother=>filtersother.style.display="none");
    }else{
      filtersgentlements.forEach(filtersgentlement=>filtersgentlement.style.display="none");
      filtersladys.forEach(filterslady=>filterslady.style.display="none");
      filterskids.forEach(filterskid=>filterskid.style.display="none");
      filtersothers.forEach(filtersother=>filtersother.style.display="inline-block");
    }
  })
});

function removeactiveitems(){
  gallerylists.forEach(gallerylist=>{
    gallerylist.classList.remove('activeitems');
});
}
// END CLOTH SECTION

// START ACCESSORIES
const textel = document.querySelector('.texts');
let pgh = 'Look at our accessories!...';

let idx = 1;

function autotext(){
  textel.innerText = pgh.slice(0,idx);

  idx++;

  if(idx > pgh.length){
    idx = 1;
  }
  setTimeout(autotext,100);
}

autotext();

const container = document.querySelector('#accessories .container');

const url = 'https://source.unsplash.com/random/';
// console.log(url);
const rows = 10;

for(let i=0; i<rows*3; i++){
  const img = document.createElement('img');
  img.src = `${url}${getrandomsize()}`;

  container.appendChild(img);
}

function getrandomnum(){
  return Math.floor(Math.random() * 10) + 200;
}

function getrandomsize(){
  return `${getrandomnum()}x${getrandomnum()}`;
}


// END ACCESSORIES

// START PRICING SECTION


const cards = document.querySelectorAll('.pricecontainers .card');
cards.forEach(card=>{
  card.addEventListener('mouseenter',()=>{
    // console.log('hay');
    card.classList.add('cards');
  });
  
  card.addEventListener('mouseleave',()=>{
    card.classList.remove('cards');
  })
})
// END PRICING SECTION

// START FOOTER
const getyear = document.getElementById('getyear');
const date = new Date();
const year = date.getFullYear();
getyear.innerText  = year;
// END FOOTER
