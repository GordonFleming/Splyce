(function() {
    // Variables
    var $curve = document.getElementById("curve");
    var last_known_scroll_position = 0;
    var defaultCurveValue = 400;
    var curveRate = 3.5;
    var ticking = false;
    var curveValue;
  
    // Handle the functionality
    function scrollEvent(scrollPos) {
      if (scrollPos >= 0 && scrollPos < defaultCurveValue) {
        curveValue = defaultCurveValue - parseFloat(scrollPos / curveRate);
        $curve.setAttribute(
          "d",
          "M 800 300 Q 400 " + curveValue + " 0 300 L 0 0 L 800 0 L 800 300 Z"
        );
      }
    }
  
    // Scroll Listener
    window.addEventListener("scroll", function(e) {
      last_known_scroll_position = window.scrollY;
  
      if (!ticking) {
        window.requestAnimationFrame(function() {
          scrollEvent(last_known_scroll_position);
          ticking = false;
        });
      }
  
      ticking = true;
    });
})();
//click to scroll into view functionality
var topTo = document.getElementById('top');
topTo.addEventListener("click",function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
     });
})
var middleTo = document.getElementById('middle')
middleTo.addEventListener("click",function(){
    document.getElementById('scrollOne').scrollIntoView({ behavior: 'smooth', block: 'center' });
})
var bottomTo = document.getElementById('bottom')
bottomTo.addEventListener("click",function(){
    document.getElementById('scrollTwo').scrollIntoView({ behavior: 'smooth', block: 'center' });
})
//Toggle scroll and click to learn more text
var scrollToLearn = document.querySelector('h5');
scrollToLearn.addEventListener("mouseenter",function change(){
    scrollToLearn.textContent = "Or click the circles!";
})
scrollToLearn.addEventListener("mouseout",function change(){
    scrollToLearn.textContent = "Scroll to learn more!";
})
// Scroll Listener nav bar changer thing
var topCir = document.getElementById("top")
var midCir = document.getElementById("middle")
var botCir = document.getElementById("bottom")
var scroll_position = 0;
window.addEventListener("scroll",function(ezz){
    scroll_position = window.scrollY;
    if(scroll_position>=0 && scroll_position<700){
        topCir.style.color = "white"
        midCir.style.color = "grey"
    }else if(scroll_position>=700 && scroll_position<1600){
        topCir.style.color = "grey"
        midCir.style.color = "white"
        botCir.style.color = "grey"
    }else if(scroll_position>=1600){
        botCir.style.color = "white"
        midCir.style.color = "grey"
    }
});