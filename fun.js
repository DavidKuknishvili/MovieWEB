let scroller = document.querySelectorAll('.new_releases_cards')
let p_video = document.getElementById('p_video')
let nav_ul = document.querySelector('.nav_ul')
let header_li_ = document.querySelectorAll('.header_li_')

let full_content = document.getElementById('full-content')




let header_more = document.getElementById('header_more')

let header_nav_div = document.getElementById('header_nav_div')

header_more.addEventListener('click', ()=>{
    if(nav_ul.className == 'nav_ul active_nav'){
        nav_ul.classList.remove('active_nav')
        header_li_[0].classList.remove('deactive')
        header_li_[1].classList.remove('deactive')
        header_nav_div.classList.remove('active_header')


    }
    else{
        nav_ul.classList.add('active_nav')
        header_li_[0].classList.add('deactive')
        header_li_[1].classList.add('deactive')
        header_nav_div.classList.add('active_header')

    }
})


let scroll_ind = 0
let scroll_ind_0 = 0
let scroll_ind_1= 0


function scroll_cards(x, evt){
    card_w_index = scroller[x.id].getElementsByClassName('new_card')[0].clientWidth

    if(x.id == 0){
        scroll_ind_0 = evt.target.scrollLeft

    }
    else if(x.id == 1){
        scroll_ind_1 = evt.target.scrollLeft

    }
    scroll_ind = evt.target.scrollLeft

    left = x.getElementsByClassName("left")[0]
    right = x.getElementsByClassName("right")[0]


    if (scroll_ind >= card_w_index){
        left.classList.add('active_contorler')

    }

    else if(scroll_ind==0){
        left.classList.remove('active_contorler')

    }

    if(scroll_ind >= x.scrollWidth - x.clientWidth-1 ){
        right.classList.remove('active_contorler')

    }
    else{
        right.classList.add('active_contorler')

    }
    let a = x.scrollLeft;
    let b = x.scrollWidth - x.clientWidth
}

var click = 0

function r_click(x){

    card_w_index = scroller[x.id].getElementsByClassName('new_card')[0].clientWidth
    if (x.id == 0){
        card_w_index = card_w_index + 16
        scroll_ind = scroll_ind_0
    }
    else if(x.id == 1){
        scroll_ind = scroll_ind_1

    }


    scroller[x.id].scrollTo(scroll_ind+card_w_index, 0)
    console.log(click, card_w_index)



}
function l_click(x){

    card_w_index = scroller[x.id].getElementsByClassName('new_card')[0].clientWidth
    if (x.id == 0){
        card_w_index = card_w_index + 16
        scroll_ind = scroll_ind_0
    }
    else if(x.id == 1){
        scroll_ind = scroll_ind_1

    }


    scroller[x.id].scrollTo(scroll_ind-card_w_index, 0)

}



function p_card_hover(x){

    if (x.id == 'p1'){
        p_video.src = '/MovieWEB//video/p_v_1.mp4'
    }
    else if(x.id == 'p2'){
        p_video.src = '/MovieWEB//video/p_v_2.mp4'
    }
    else if(x.id == 'p3'){
        p_video.src = '/MovieWEB//video/p_v_3.mp4'
    }
    else if(x.id == 'p4'){
        p_video.src = '/MovieWEB//video/p_v_4.mp4'
    }
    else if(x.id == 'p5'){
        p_video.src = '/MovieWEB//video/p_v_5.mp4'
    }


}


