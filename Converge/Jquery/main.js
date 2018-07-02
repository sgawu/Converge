/*
The purpose of jQuery is to make it much easier to use JavaScript on your website.

jQuery takes a lot of common tasks that require many lines of JavaScript code to accomplish, and wraps them into methods that you can call with a single line of code.

jQuery also simplifies a lot of the complicated things from JavaScript, like AJAX calls and DOM manipulation.
*/

$(document).ready(function(){

   // jQuery methods go here...
    console.log("Hello world!");
    
    // Better to set the display property of the element in the CSS sheet initially to none; also make sure to set the position property of the navigation bar to fixed, and set the top position to 0. This will remove the navbar from the normal flow of the document. You can ensure it doesnt overlap with the content by setting the padding-top property of the body to the height px value of the bar. 
    $("nav").css("display", "none");
    
    // Example FadeIn Method Applied to Navs
    $("nav").fadeIn(5000);
    
});