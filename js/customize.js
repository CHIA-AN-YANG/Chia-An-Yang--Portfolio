
//nav bar appeare
$(window).mousemove(function(evt){
    if(evt.pageY>=$(window).height()){
        $('nav').addClass('show');
        $('nav').css('top','0px');        
    }
    if(evt.pageY<$(window).height()){
        $('nav').removeClass('show');  
    }
})


// ham menu
$('.frame_ham').click(function(evt){

    if(!$('.frame_ham > ul').hasClass('open')){
            $('.frame_ham > ul').addClass('open');
            }
    })
    $('.close-btn').click(function(evt){
        evt.stopPropagation();
        $('.frame_ham > ul').removeClass('open');
})