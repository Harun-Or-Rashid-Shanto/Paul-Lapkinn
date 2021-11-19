//navbar
function openNav(){
    document.getElementById("navId").style.width="100%";
}
function closeNav(){
    document.getElementById("navId").style.width="0%";
}


//AOS
AOS.init();

// waypoint nav
$(document).ready(function(){
    $(".waypoint-nav").waypoint(function(direction){
        if(direction=="down"){
            $("nav").addClass("sticky");
        }
        else{
            $("nav").removeClass("sticky")
        }
    })
})
//magnify
$('.work-grid').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image'
    // other options
  });

  //mixitup
  var mixer = mixitup('.work-grid')