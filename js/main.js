window.onload = function(){
    // 상단의 마이페이지리스트 기능
    const iconArrow = document.getElementById("arrow")
    const mp_list = document.getElementById("mp_list") 
    iconArrow.onclick = function(){
        mp_list.classList.toggle("showmp_list")
    }
}