let landingel = document.querySelector('.landing-page');
let imagesel = ['jpj.1.webp','jpj.2.jpg','jpj.3.jpeg','jpj.4.jpg'];
let settingsboxel = document.querySelector('.settings-box');
let openbtn = document.querySelector('.open-btn');
let settingsicon = document.querySelector('.open-btn i');
let mycolorslist = document.querySelectorAll('.colors-list li');
let mylogo = document.querySelector('.logo img');
let mybtnsel = document.querySelectorAll('.randombackground-option span');
let yesel = document.querySelector('.yes');
let noel = document.querySelector('.No');







let themaincolor = localStorage.getItem('color');
let theindex =JSON.parse(localStorage.getItem('index')) ;



if(themaincolor!==null && theindex!==null){
document.documentElement.style.setProperty('--main-color',themaincolor);
mylogo.src= `./images/download (${theindex + 1}).svg`;
mycolorslist.forEach((element)=>{
    element.classList.remove('active');
})
mycolorslist[theindex].classList.add('active'); 
}


mycolorslist.forEach((el,index)=>{
  
    el.addEventListener('click',(e)=>{
        //set color to root
       document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
       mylogo.src = `./images/download (${index+1}).svg`;
       //set color to local storage
       window.localStorage.setItem('color',e.target.dataset.color);
       //set index to local storage
        window.localStorage.setItem('index',index);
        handleactive(e)
      
    })
})


openbtn.addEventListener('click',()=>{
    settingsicon.classList.toggle('fa-spin');
    settingsboxel.classList.toggle('open');
})

let time ;


let backgroundoption =true;
let btnindex = JSON.parse(localStorage.getItem('btnindex'));

if( backgroundoption!==null && btnindex!==null){;
    backgroundoption=JSON.parse(localStorage.getItem('backrgoundoption'));
    updatebtn(mybtnsel,btnindex);
    
}
    
function randomizeimges(){
if(backgroundoption === true){
       time = setInterval(updatebakground,7000);
}
}
randomizeimges();
function updatebakground(){

    let currentindex = Math.floor(Math.random()*imagesel.length);
     landingel.style.backgroundImage=`url("./images/${imagesel[currentindex]}")`; 

}
//remove active from btns
mybtnsel.forEach((btn,index)=>{
    btn.addEventListener('click',(e)=>{
        handleactive(e);
      
      localStorage.setItem('btnindex',index);
      if(e.target.dataset.background ==='yes'){
        backgroundoption = true;
        
        randomizeimges();
        localStorage.setItem('backrgoundoption',backgroundoption);
      }else{
        backgroundoption = false;
        
        clearInterval(time);
        localStorage.setItem('backrgoundoption',backgroundoption);

      }
        })
     
    })
    
    let skilllssection = document.querySelector('.ourskills-section');
window.addEventListener('scroll',()=>{
if(this.scrollY> skilllssection.offsetTop - 200){
    let allskills = document.querySelectorAll('.skill .progress span');
    console.log(allskills);
      
        allskills.forEach((spn)=>{

            spn.style.width = spn.dataset.progress;
        })

    }
})
let imges= document.querySelectorAll('.ourgallery .images-gallery img');
imges.forEach((img)=>{
    img.addEventListener('click',(e)=>{
        //create overlay
        let overlay =document.createElement('div') ;
        //add class to overlay div
        overlay.className = 'popup-overlay';
        //add overlay to body
        document.body.appendChild(overlay);
        //create the popup-box 
        let popupbox = document.createElement('div');
        //add class to popup
        popupbox.className = 'popup-box';
        //create omage element
        let image =document.createElement('img');
        image.src=e.target.src;
        popupbox.appendChild(image)
        document.body.appendChild(popupbox);
        //add a close btn
        let closebutton = document.createElement('span');
        closebutton.className = 'close-button';
        let btntext = document.createTextNode('X');
        closebutton.appendChild(btntext);
        popupbox.appendChild(closebutton)

        })
    })
    document.addEventListener('click',(e)=>{
        if(e.target.className=='close-button'){
            e.target.parentElement.remove();
            document.querySelector('.popup-overlay').remove();
        }

    });
let timelinesection = document.querySelector('.timeline') ;
let leftel = document.querySelectorAll('.timeline .timeline-content .left');
let rightel =document.querySelectorAll('.timeline .timeline-content .right');
let yearel = document.querySelectorAll('.timeline .timeline-content .year');
window.addEventListener('scroll',()=>{
    let windowh = window.innerHeight;
    
        leftel.forEach((el)=>{
            if(windowh>el.getBoundingClientRect().top){
            el.classList.add('show');
            }
        })
        rightel.forEach((el)=>{
            if(windowh>el.getBoundingClientRect().top){
                el.classList.add('show');
                }
        })
        yearel.forEach((el)=>{
            if(windowh>el.getBoundingClientRect().top){
                el.classList.add('show');
                }
        })
    
})
let hideoption = document.querySelectorAll('.hide-bullets span');
let navbullet = document.querySelector('.navigation-bullets');
let mybullets = document.querySelectorAll('.navigation-bullets .bullet');
let mylinks =document.querySelectorAll('.links li a');
let navdisply = localStorage.getItem('display');
let spanindex =JSON.parse(localStorage.getItem('spnindex'));
if(navdisply!==null && spanindex!==null){
    navbullet.style.display = navdisply;
    updatebtn(hideoption,spanindex);
    
}

function scroll(elements){
   
elements.forEach((element)=>{
   element.addEventListener('click',(e)=>{
    e.preventDefault();
        document.querySelector(e.target.dataset.scroll).scrollIntoView({
            behavior: "smooth",
        })
    })
})
}
scroll(mybullets);
scroll(mylinks);

function handleactive(ev){
    ev.target.parentElement.querySelectorAll('.active').forEach((elem)=>{
        elem.classList.remove('active');
    })
   
  ev.target.classList.add('active');
}


hideoption.forEach((el,index)=>{
    el.addEventListener('click',(e)=>{
        handleactive(e);
      
        localStorage.setItem('spnindex',index);
        if(e.target.dataset.display ==='yes'){
        
            
            navbullet.style.display = 'block';
            localStorage.setItem('display',navbullet.style.display);
          }else{
            navbullet.style.display='none';
            localStorage.setItem('display',navbullet.style.display);
           
    }

})
})
function updatebtn(er,index){
    er.forEach((elemen)=>{

        elemen.classList.remove('active');
        er[index].classList.add('active');
        
    })
}
let resetbtn = document.querySelector('.settings-box .reset');
resetbtn.addEventListener('click',()=>{
    // localStorage.clear();
    localStorage.removeItem('color');
    localStorage.removeItem('index');
    localStorage.removeItem('backrgoundoption');
    localStorage.removeItem('btnindex');
    localStorage.removeItem('display');
    localStorage.removeItem('spnindex');
    window.location.reload();
});
let openbutton = document.querySelector('.toggle');
let mynewlinks = document.querySelector('.header .links-container .links');
openbutton.addEventListener('click',(e)=>{
    //stop event from span
    e.stopPropagation();
    openbutton.classList.toggle('menu-active');
    mynewlinks.classList.toggle('open');
    
})
document.addEventListener('click',(e)=>{
    if(e.target!==openbutton && e.target!==mynewlinks){
        if(mynewlinks.classList.contains('open')){
            openbutton.classList.toggle('menu-active');
            mynewlinks.classList.toggle('open');

        }
    }
})
mynewlinks.addEventListener('click',(e)=>{
    //stop event from li
    e.stopPropagation();
})
let newdate =new Date();
let footer = document.querySelector('.footer span').innerHTML = newdate.getFullYear();


    
