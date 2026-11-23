$(document).ready(function(){
    $("#link-about").click(function(){
        location.href = "about.html" ;
    });
    $("#link-review").click(function(){
        location.href = "review.html" ;
    });
     $("#link-price").click(function(){
        location.href = "product.html" ;
    });
     $("#link-media").click(function(){
        location.href = "media.html" ;
    });
     $("#link-home").click(function(){
        location.href = "home.html" ;
    });
     $("#link-contact").click(function(){
        location.href = "contact.html" ;
    });

      $("#about1").click(function(){
        location.href = "about.html" ;
    });
    $("#review1").click(function(){
        location.href = "review.html" ;
    });
     $("#price1").click(function(){
        location.href = "product.html" ;
    });
     $("#media1").click(function(){
        location.href = "media.html" ;
    });
     $("#contact1").click(function(){
        location.href = "contact.html" ;
    });

     $("#submit-form").click(function(){
        var name = $("#name2").val();
        var email = $("#email").val();
        var no = $("#number").val();
        var inquiry = $("#inquiry").val();

         $("#name2").val("");
         $("#email").val("")
         $("#number").val("");
         $("#inquiry").val("") ;

    }); 
});
