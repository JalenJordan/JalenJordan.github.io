$(document).ready(function(){
     $('#headshot').click(function(){
          $('#firstLang, #secondLang, #thirdLang, #fourthLang, #aboutME, #profilePic').fadeOut();
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
          $('#firstLang, #secondLang, #thirdLang,  #fourthLang').slideDown();
     })
     $("#node").click(function(){
          $('#firstLang, #secondLang, #thirdLang, #fourthLang').fadeOut();
          $("#rentalProject").fadeIn()
     })
     $("#goback").click(function(){
          $("#rentalProject").fadeOut();
          $("#firstLang, #secondLang, #thirdLang, #fourthLang").fadeIn()
     })
     $("#java").click(function(){
          $('#firstLang, #secondLang, #thirdLang, #fourthLang').fadeOut();
          $("#bankProject, #textSouls").fadeIn();
     })
     $("#goback2").click(function(){
          $("#bankProject, #textSouls").fadeOut();
          $('#firstLang, #secondLang, #thirdLang, #fourthLang').fadeIn();
     })
     $("#htmlcss").click(function(){
          $("#firstLang, #secondLang, #thirdLang, #fourthLang").fadeOut();
          $("#startUp, #wireFrame, #storeProject").fadeIn();
     })
     $("#goback3").click(function(){
          $("#startUp, #wireFrame, #storeProject").fadeOut();
          $("#firstLang, #secondLang, #thirdLang, #fourthLang").fadeIn();
     })
     $('#python').click(function(){
          $('#firstLang, #secondLang, #thirdLang, #fourthLang').fadeOut();
          $("#guiProject").fadeIn();
     })
     $("#goback4").click(function(){
          $("#guiProject").fadeOut();
          $('#firstLang, #secondLang, #thirdLang, #fourthLang').fadeIn();
     })
     $("#goback5").click(function(){
          $("#contacts, #resume").slideUp();
          $("#aboutME, #profilePic").slideDown();
     })
})