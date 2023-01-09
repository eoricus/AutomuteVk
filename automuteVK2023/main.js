const blackList = ["531970408", "109701271", "363796582"] // TODO добавить Тему
const mute = (event) => {
    all_divs = div = document.getElementsByClassName("im-mess-stack _im_mess_stack ")

    for (i = 0; i <= all_divs.length; i++){
        div = all_divs[i];
        if (div) {
            console.log(div.getAttribute("data-peer"))
            if (blackList.includes(div.getAttribute("data-peer"))) {
                div.parentNode.removeChild(div);
                console.log("dwdw")
            }  
        }
        // alert(div.getAttribute("data-peer"))
    }
};

document.addEventListener('DOMContentLoaded', mute, false);
document.addEventListener('mouseover', mute, false);
