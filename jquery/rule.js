$(document).ready(function(){
     $('#headshot').click(function(){
          $('#firstLang, #secondLang, #thirdLang, #fourthLang, #fifthLang, #aboutME, #profilePic').fadeOut();
          $("#contacts, #resume").slideDown();
     })
     $('#house').click(function(){
          $('#address').slideDown()
     })
     $("#cellphone").click(function(){
          $('#number').slideDown()
     })
     $('#mail').click(function(){
          $("#email").slideDown()
     })
     $("#githubIcon").click(function(){
          $("#github").slideDown()
     })
     $('#linkedinIcon').click(function(){
          $("#linkedin").slideDown()
     })
     $('#pointer1').click(function(){
          $('#firstLang, #secondLang, #thirdLang,  #fourthLang, #fifthLang').slideDown();
     })
     $("#react").click(function(){
          $('#secondLang, #thirdLang, #fourthLang, #fifthLang').fadeOut();
          $("#storeProject").fadeIn()
     })
     $("#goback").click(function(){
          $("#storeProject").fadeOut();
          $("#firstLang, #secondLang, #thirdLang, #fourthLang, #fifthLang").fadeIn()
     })
     $("#node").click(function(){
          $('#firstLang, #secondLang, #thirdLang, #fourthLang, #fifthLang').fadeOut();
          $("#rentalProject").fadeIn()
     })
     $("#goback2").click(function(){
          $("#rentalProject").fadeOut();
          $("#firstLang, #secondLang, #thirdLang, #fourthLang, #fifthLang").fadeIn()
     })
     $("#java").click(function(){
          $('#secondLang, #thirdLang, #fourthLang, #fifthLang').fadeOut();
          $("#bankProject, #textSouls").fadeIn();
     })
     $("#goback3").click(function(){
          $("#bankProject, #textSouls").fadeOut();
          $('#secondLang, #thirdLang, #fourthLang, #fifthLang').fadeIn();
     })
     $("#htmlcss").click(function(){
          $("#secondLang, #thirdLang, #fourthLang, #fifthLang").fadeOut();
          $("#startUp, #wireFrame, #storeProject").fadeIn();
     })
     $("#goback4").click(function(){
          $("#startUp, #wireFrame, #storeProject").fadeOut();
          $("#secondLang, #thirdLang, #fourthLang, #fifthLang").fadeIn();
     })
     $('#python').click(function(){
          $('#secondLang, #thirdLang, #fourthLang, #fifthLang').fadeOut();
          $("#guiProject").fadeIn();
     })
     $("#goback5").click(function(){
          $("#guiProject").fadeOut();
          $('#secondLang, #thirdLang, #fourthLang, #fifthLang').fadeIn();
     })
     $("#goback5").click(function(){
          $("#contacts, #resume").slideUp();
          $("#aboutME, #profilePic").slideDown();
     })
})