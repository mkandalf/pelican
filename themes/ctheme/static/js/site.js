$(document).ready(function(){
    sidebar = $('#sidebar');
    fading = false;
    epsilon = 0.00001
    function check_sidebar(e){
        if (!fading){
            dist = $(document).scrollTop();
            opacity = sidebar.css('opacity')
            if (dist > 200 && Math.abs(opacity-1) < epsilon){
                fading = true;
                $('#sidebar').fadeTo(600,0.2,function(){
                    fading = false;
                    $(document).trigger('scroll');
                });
            }
            else if (dist < 200 && Math.abs(opacity-0.2) < epsilon){
                fading = true;
                $('#sidebar').fadeTo(600,1.0,function(){
                    fading = false;
                    $(document).trigger('scroll');
                });
            }
        }
    }
    $(document).on('scroll',check_sidebar);
    $('#sidebar').hover(function(e){
        sidebar.css('opacity', 1);
    }, function(e){
        dist = $(document).scrollTop();
        if (dist > 200){
            sidebar.css('opacity', 0.2);
        }
    });
});
