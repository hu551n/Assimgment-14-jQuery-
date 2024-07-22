<reference types="../@types/jquery"/>


$(".openNav").on('click',function(){
    $("#aside").animate({ width:'250px',},0,);
   $("#home-content").animate({marginLeft :'250px'},0);
   $(".openNav").animate({left :'250px'},0);


}) 

$(".closebtn").on('click',function(){
    $("#aside").animate({ width:'0px'},0);
   $("#home-content").animate({marginLeft :'0px'},0, function () {
    $(".openNav").animate({left :'0px'},0);

   });
 
})

$("#aside a").on('click',function(e){
    
    let sectionLink= $(e.target).attr("href");
    let scrollToSeection = $(sectionLink).offset().top;
    
    $("html").animate({scrollTop:scrollToSeection},2000);
    
})

$('#Duration .test').on('click', function(e){
    $(".inner").not($(e.target).next()).slideUp(1000);

   $(e.target).next().slideToggle(1000);
});

window.onload = function() {
   
    countDownToTime("10 october 2021 9:56:00");
  }

  function countDownToTime(countTo) {
  
        let futureDate = new Date(countTo);
    futureDate = (futureDate.getTime()/1000);

    let now = new Date();
    now = (now.getTime()/1000);

   let timeDifference = (futureDate- now);
        
   let days = Math.floor( timeDifference / (24*60*60));
   let hours = Math.floor((timeDifference - (days * (24*60*60))) / 3600);
   let mins = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600 )) / 60);
   let secs = Math.floor((timeDifference - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))


    $(".days").html(`${days} D`);
    $(".hours").html(`${hours} h`);
    $(".minutes").html(`${ mins } m`);
    $('.seconds').html(`${ secs} s`)

  
    setInterval(function() {  countDownToTime(countTo); }, 1000);
  }

$('textarea').on('keyup',function(e) {
  let count = 100;

  let length = $(e.target).val().length;

  let AmountLeft = count-length;
  if(AmountLeft<=0)
            {
                 $("#Characyer").text("your available character finished");
            }

        else {
        
        $("#Characyer").text(AmountLeft);     
        
        }
});





