$(document).ready(function(){
    $("#contacto_formulario_form").submit(function(e){
        $.ajax({
            url: $(this).attr("action"),
            type: 'POST',
            data: $(this).serialize()
        })
        .done(function(data){
            $("#contacto_formulario_form").fadeOut();
            $("#enviado").fadeIn();
        });
        e.preventDefault();
    });
});


    function cycleImages(){
          var $active = $('#background .active');
          var $next = ($active.next().length > 0) ? $active.next() : $('#background img:first');
          $next.css('z-index',2);//move the next image up the pile
          $active.fadeOut(1500,function(){//fade out the top image
    	  $active.css('z-index',1).show().removeClass('active');//reset the z-index and unhide the image
              $next.css('z-index',3).addClass('active');//make the next image the top one
          });
          console.log("aaa");
        }

    $(document).ready(function(){
        setInterval('cycleImages()', 3000);
    })


    $("#menu-close").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function(){
            $(document).scroll(function() {
                scroll_pos = $(this).scrollTop();
                top = $("#top").position();
                quienes = $("#quienes").position();
                cafe = $("#cafes").position();
                cultivo = $("#cultivo").position();
                comunidad = $("#comunidad").position();
                talento = $("#talento-humano").position();
                trilladora = $("#trilladora").position();
                contacto = $("#contacto").position();

                if(scroll_pos >= 0 && scroll_pos <= quienes.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=0]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color0").addClass("visible-lg");
                }

                if(scroll_pos >= quienes.top && scroll_pos <= cafe.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=1]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color1").addClass("visible-lg");
                }

                if(scroll_pos >= cafe.top && scroll_pos <= cultivo.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=2]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color2").addClass("visible-lg");
                }

                if(scroll_pos >= cultivo.top && scroll_pos <= comunidad.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=3]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color3").addClass("visible-lg");
                }

                if(scroll_pos >= comunidad.top && scroll_pos <= talento.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=4]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color4").addClass("visible-lg");
                }

                if(scroll_pos >= talento.top && scroll_pos <= trilladora.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=5]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color5").addClass("visible-lg");
                }

                if(scroll_pos >= trilladora.top && scroll_pos <= contacto.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=6]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color6").addClass("visible-lg");
                }

                if(scroll_pos >= contacto.top){
                    $("[class=activo]").removeClass("activo");
                    $("#menu [color=7]").addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color7").addClass("visible-lg");
                }
            });




        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {

                    $("[class=activo]").removeClass("activo");
                    $(this).addClass("activo");
                    $("#menu").removeAttr('class');
                    $("#menu").addClass("menu_color"+$(this).attr("color")).addClass("visible-lg");

                    $('html,body').animate({
                        scrollTop: target.offset().top + 2
                    }, 1000);


                }
            }
        });
    });
