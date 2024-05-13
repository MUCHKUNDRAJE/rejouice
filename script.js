gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();


const scroll = new LocomotiveScroll({
  el: document.querySelector('#main'),
  smooth: true
});


function cursor(){
    var page2 = document.querySelector("#page2") 
var cursor = document.querySelector("#cursor") 

page2.addEventListener("mousemove",function(dets){
  gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
  })
})

page2.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
     scale:0,
     opacity:0,
    })
  })
  page2.addEventListener("mouseenter",function(dets){
    gsap.to(cursor,{
        scale:1,
        opacity:1,
    })
  })
}
cursor();
page2.addEventListener("dblclick",function(){
    gsap.to("#cursor",{
        scale:1.5,
        opacity:0,
       
    })
  


  })

  var add = document.querySelector("#cursor") 
  var slide = document.querySelector(" #play")
  page2.addEventListener("dblclick",function(){
   
    gsap.to(slide,{
      x:-1,
      duration:1,
      easein:Power2,

     
  })
 
   
})




  var x=document.querySelector("#play #circle ")
  x.addEventListener("click",function(){
   
    gsap.to(slide,{
      x:"-100%",
      duration:1,
      easeout:Power3,

  })


  })





gsap.from("#page3 h1",{
    scrollTrigger:{
      trigger:"#page3",
      start:"top 40%",
      end:"top 47%",
     scrub:2,
    //  markers:true,
     scroller:"#main"
    //  endTrigger:"#paragrah p",
    }, 
    y: 920,
    delay:0.4,
    duration:1,
    ease:Power3,
    opacity:0,
    // rotate:10,
  })

  gsap.to("#line",{
    scrollTrigger:{
      trigger:"#page3",
      start:"top 40%",
      end:"top 70%",
     scrub:2,
    //  markers:true,
     scroller:"#main"
    //  endTrigger:"#paragrah p",
    }, 
    width:"100%",
    delay:0.1,
    duration:1,
    ease:Power3,
    // opacity:0,
    // rotate:10,
  })

  gsap.from("#pagetop h3,#pagetop i",{
    scrollTrigger:{
      trigger:"#page3",
      start:" top 100%",
      end:"  top 110%",
     scrub:2,
    //  markers:true,
     scroller:"#main"
    //  endTrigger:"#paragrah p",
    }, 
    y: 900,
    delay:0.4,
    duration:1,
    ease:Power3,
    // opacity:0,
    // rotate:10,
  })

  
  gsap.from("#page-mid h2",{
    scrollTrigger:{
      
      trigger:"#page3",
      start:" top 100%",
      end:"  top 110%",
     scrub:0.1,
    //  markers:true,
     scroller:"#main"
    //  endTrigger:"#paragrah p",
    }, 
    y: 900,
    delay:0.5,
    duration:1,
    ease:Power3,
    opacity:0,
  })
var tl = gsap.timeline()
  
tl.from("#loder h3",{
  x:20, 
  opacity:0,
  duration:1,
  stagger:0.2,
  })
  tl.to("#loder h3",{
    x:-40, 
    opacity:0,
    duration:1,
    stagger:0.2,
    })
   
   
    tl.to("#loder ",{
       opacity:0,
     
      })

      tl.from("nav",{
        x:100,
       opacity:0,
       stagger:0.1,
       duration:1,
       delay:-0.9
      
       })
      tl.from("#page2 h1 span",{
        y:100,
       opacity:0,
       stagger:0.1,
       duration:0.5,
       delay:-0.5
      
       })
  
      tl.to("#loder ",{
        display:"none",
      
       })

       

  var menu=document.querySelector("#menu");
  var menubutton=document.querySelector("#page2 h4")
  menubutton.addEventListener("click",function(){
    gsap.to("#menu",{
      y:0,
      duration:1,
      // ease:"cubic-bezier(0,-0.01,0,.99)"
    //  opacity:0,
     })

  })
  var closebutton =document.querySelector("#menu nav h3")
  closebutton.addEventListener("click",function(){
    gsap.to("#menu",{
      y:-700,
      duration:1,
      // ease:"cubic-bezier(0,-0.01,0,.99)"
    //  opacity:0,
     })

  })
 
  menubutton.addEventListener("click",function(){
    gsap.from(".text,#border ",{
      y:100,
      opacity:0,
      delay:0.5,
      duration:0.3,
      // ease:"cubic-bezier(.09,.12,0,.99)",
      stagger:0.2,
    
     })

  })
  // var closebutton =document.querySelector("#menu nav h3")

  var menu=document.querySelector("#menu");
  var menubutton=document.querySelector("nav h4")
  menubutton.addEventListener("click",function(){
    gsap.from("#vedio #video1",{
     scale:0,
     delay:0.5,
     duration:0.6,
    //  ease:"cubic-bezier(.09,.12,0,.99)",
    //  opacity:0,
     })

  })
  
  gsap.from("#page5 h1",{
    scrollTrigger:{
      trigger:"#page5",
      start:"top 40%",
      end:"top 47%",
     scrub:2,
    //  markers:true,
     scroller:"#main"
    //  endTrigger:"#paragrah p",
    }, 
    y: 920,
    delay:0.4,
    duration:1,
    ease:Power3,
    opacity:0,
    // rotate:10,
  })
  gsap.from("#page6 #num h1",{
    scrollTrigger:{
      trigger:"#page6",
      start:"top 40%",
      end:"top 47%",
     scrub:3,
    //  markers:true,
     scroller:"#main"
    //  endTrigger:"#paragrah p",
    }, 
    y: 800,
    delay:0.4,
    duration:2,
    ease:Power3,
    // opacity:0,
    // rotate:10,
  })

  gsap.from("#page7 h1",{
    scrollTrigger:{
      trigger:"#page7",
      start:"top 40%",
      end:"top 47%",
     scrub:2,
    //  markers:true,
     scroller:"#main"
    //  endTrigger:"#paragrah p",
    }, 
    y: 920,
    delay:0.4,
    duration:1,
    ease:Power3,
    opacity:0,
    // rotate:10,
  })

 
  var page6 = document.querySelector("#page6") 
var take = document.querySelector("#takeme") 

page6.addEventListener("mousemove",function(dets){
  gsap.to(take,{
    x:dets.x,
    y:dets.y,
  })
 

})


page6.addEventListener("mouseleave",function(dets){
    gsap.to(take,{
     scale:0,
     opacity:0,
    })
  })
  page6.addEventListener("mouseenter",function(dets){
    gsap.to(take,{
        scale:1,
        opacity:1,
    })
  })
  

