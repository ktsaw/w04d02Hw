

  let menuLinks = [                                //task 5.0 Update the menuLinksarray in script.js to this:
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
    ]},
    ];
  
  
  let mainEl = document.querySelector('main');              //task 1.0 - 3.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  mainEl.classList.add('flex-ctr');
  
  let topMenuEl = document.getElementById('top-menu');
  
  topMenuEl.style.height = '100%';
  
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  topMenuEl.classList.add('flex-around');
 
  menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });

  let subMenuEl = document.getElementById('sub-menu');   //task 4.0 select and cache the nav id="sub-menu"> element in a variable named subMenuEl

  subMenuEl.style.height = '100%';                       //task 4.1
 
  subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'; //task 4.2

  subMenuEl.classList.add('flex-around');                 //task 4.3

  subMenuEl.style.position = 'absolute';                  //task 4.4

  subMenuEl.style.top = '0';                              //task 4.5

let topMenuLinks = document.querySelectorAll('#top-menu a');  //task 5.1
let showingSubMenu = false;

topMenuEl.addEventListener('click', function(e)  {     //task 5.2
  e.preventDefault();
  let link = e.target;
  if (link.tagName !== 'A')
    return;
    console.log(link.textContent);
  
  if (link.classList.contains('active')) {            //task 5.3
    link.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

topMenuLinks.forEach(function(link) {               //task 5.4
  link.classList.remove('active');
});

link.classList.add('active');                     //task 5.5

let linkData = menuLinks.find(function(linkObj){      //task 5.6
return linkObj.text === link.textContent;
});

showingSubMenu = 'subLinks' in linkData;

if(!showingSubMenu)                                 //task 6.4
mainEl.innerHTML = `<h1>${link.textContent}</h1>`

if (showingSubMenu) {                                 //task 5.7
  buildSubMenu(linkData.subLinks);
  subMenuEl.style.top = '100%';

} else {
subMenuEl.style.top = '0';
}
});

function buildSubMenu(subLinks) {                       //task5.8
  subMenuEl.innerHTML = '';
  subLinks.forEach(function(link) {
    let linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    subMenuEl.appendChild(linkEl);
  });
}

subMenuEl.addEventListener('click', function(e) {    //task6.0
  e.preventDefault();
  let link = e.target;
  if (link.tagName !== 'A')
  return;
  console.log(link.textContent);

showingSubMenu = false;                   //task 6.1
subMenuEl.style.top = '0';

topMenuLinks.forEach(function(link) {       //task 6.2
  link.classList.remove('active');

});

mainEl.innerHTML = `<h1>${link.textContent}</h1>`;      //task 6.3

});

