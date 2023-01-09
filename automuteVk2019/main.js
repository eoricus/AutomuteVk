var deletion = function (event) {
    all_divs = div = document.getElementsByClassName("im-mess-stack _im_mess_stack ")

    for (i = 0; i <= all_divs.length; i++){
        div = all_divs[i];
        // alert(div.dataset.peer)
        if (div.dataset.peer == 200546638) { // Тут писать нужный id-шник
            div.remove()
        }  
    }
};

document.addEventListener('DOMContentLoaded', deletion, false);
document.addEventListener('click', deletion, false);