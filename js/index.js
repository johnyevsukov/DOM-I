const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

var a = document.createElement('a');
var linkText = document.createTextNode("iAddedThis");
a.appendChild(linkText);
a.title = "iAddedThis";
a.href = "";

const nav = document.querySelector('nav')
nav.appendChild(a)

const links = document.querySelectorAll('nav a')
links[0].textContent = siteContent.nav["nav-item-1"]
links[1].textContent = siteContent.nav["nav-item-2"]
links[2].textContent = siteContent.nav["nav-item-3"]
links[3].textContent = siteContent.nav["nav-item-4"]
links[4].textContent = siteContent.nav["nav-item-5"]
links[5].textContent = siteContent.nav["nav-item-6"]
links.forEach(item => item.style.color = 'green')

const firstImage = document.querySelector('#logo-img')
firstImage.src = siteContent.nav["img-src"]

const cta = document.querySelector('.cta')
const secondImage = cta.querySelector('#cta-img')
secondImage.src = siteContent.cta["img-src"]

const headerOne = cta.querySelector('h1')
headerOne.textContent = siteContent.cta.h1

const but = cta.querySelector('button')
but.textContent = siteContent.cta.button

const mainContent = document.querySelector('.main-content')
const topContent = mainContent.querySelector('.top-content')
const textContent = topContent.querySelector('.text-content')
const headerFourOne = textContent.querySelector('h4')
const pOne = textContent.querySelector('p')
headerFourOne.textContent = siteContent["main-content"]["features-h4"]
pOne.textContent = siteContent["main-content"]["features-content"]
const headerFourTwo = topContent.querySelector('.text-content:nth-of-type(2) h4')
const pTwo = topContent.querySelector('.text-content:nth-of-type(2) p')
pTwo.textContent = siteContent["main-content"]["about-content"]
headerFourTwo.textContent = siteContent['main-content']['about-h4']
const midImg = document.querySelector('#middle-img')
midImg.src = siteContent["main-content"]["middle-img-src"]

const headerFourThree = document.querySelector('.text-content:nth-of-type(3) h4')
headerFourThree.textContent = siteContent["main-content"]["services-h4"]

const pThree = document.querySelector('.text-content:nth-of-type(3) p')
pThree.textContent = siteContent["main-content"]["services-content"]

const bottomContent = document.querySelector('.bottom-content')


const headerFourFour = bottomContent.querySelector('h4:nth-of-type(1)')
headerFourFour.textContent = siteContent["main-content"]["product-h4"]

const pFour = bottomContent.querySelector('p:nth-of-type(1)')
pFour.textContent = siteContent["main-content"]["product-content"]


const headerFourFive = document.querySelector("body > div > section.main-content > div.bottom-content > div:nth-child(2) h4")
headerFourFive.textContent = siteContent["main-content"]["vision-h4"]

const pFive = document.querySelector('body > div > section.main-content > div.bottom-content > div:nth-child(2) > p')
pFive.textContent = siteContent["main-content"]["vision-content"]

const finalHeader = document.querySelector('.contact h4')
finalHeader.textContent = siteContent.contact["contact-h4"]
const finalP1 = document.querySelector('.contact p:nth-of-type(1)')
const finalP2 = document.querySelector('.contact p:nth-of-type(2)')
const finalP3 = document.querySelector('.contact p:nth-of-type(3)')
finalP1.textContent = siteContent.contact.address
finalP2.textContent = siteContent.contact.phone
finalP3.textContent = siteContent.contact.email

const footer1 = document.querySelector('footer p')
footer1.textContent = siteContent.footer.copyright