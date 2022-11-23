$(function(){

    // jQuery methods go here...
    console.log($("main"));
  });


  document.querySelector("span");
  document.getElementById("divById");
  document.getElementsByClassName("divByClass");


  $("span");
  $("#divById");
  $(".divByClass");

  const p = document.querySelector("p");
  const strong = document.createElement("strong");
  strong.innerText = "Hello";
  p.appendChild(strong);


  $( "p" ).append( "<strong>Hello</strong>" );


  const elements = document.getElementsByClassName("goodbye"); 
  elements.forEach(element => {
    element.className = element.className + " selected"; 
  });


    $(".goodbye").addClass("selected");


    $.ajax({
        type: "post", url: "url_de_demo",
        success: function (data, text) {
            //...
        },
        error: function (request, status, error) {
            alert(request.responseText);
        }
    });


    const button = document.querySelector("button");
    button.addEventListener('click', () => {
        // ...
    });

    $("button").on('click', () => {
        // ...
    });

    