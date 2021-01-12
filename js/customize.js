
//nav bar appeare
$(window).scroll(function(){
    const pageY = $(window).scrollTop()
    if(pageY>=100){
        $('.nav-btm').hide();
        $('.nav-top').fadeIn(500);
        $('.nav-top').css('top','0px'); 
        $('nav').css('background-color','#FFF')
    }else{
        $('.nav-top').hide();
        $('.nav-btm').fadeIn(500);
        $('nav').css('background-color','transparent')}
})

//hover
$('ul.nav-btm a').each(function(idx,el){
    $(el).on('mouseenter',()=>{
        $(el).parent().css('height','45px')
    });
    $(el).on('mouseleave',()=>{
        $(el).parent().css('height','60px')
    })

}

)
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

//show effect
const in1 = $('.intro-1>.container>.row')
const in2 = $('.intro-2')
showUp(in1);
showUp(in2);
function showUp(el){
    el.hide();
    $(window).scroll(function(){
        const secY = el.offset().top;
        const pageY = $(window).scrollTop();
        if(pageY>secY){
            el.slideDown(2000).delay(1500).fadeIn(500);
        }
    })
}
