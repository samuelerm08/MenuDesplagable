function Desplegar() {

    var userText = document.getElementById("userText");

    if (userText.style.display != "none") {


        var allElements = document.getElementsByClassName("listItem");

        for (let i = 0; i < allElements.length; i++) {

            allElements[i].style.textAlign = "center";
        }

        let all2 = document.getElementsByClassName("menu");
        all2[0].style.width = "100px";

        var menu = document.getElementById("menuTitle");
        menu.style.textAlign = "left";

        userText.style.display = "none";

        let uList = document.getElementsByClassName("list");
        uList[0].style.margin = "0px";

        let adminText = document.getElementById("adminText");
        adminText.style.display = "none";

        let profileImg = document.getElementById("profileImg");
        profileImg.style.display = "none";

        let adminFoto = document.getElementById("admin");
        adminFoto.style.justifyContent = "center";
        adminFoto.style.marginTop = "10px";

        let menuNone = document.getElementById("menuTitle");
        menuNone.style.display = "none";
    }

    else {

        var allAgain = document.getElementsByClassName('listItem');

        for (let i = 0; i < allAgain.length; i++) {

            allAgain[i].style.textAlign = 'left';
            allAgain[i].style.margin = '15px';
        }


        var all2Again = document.getElementsByClassName('menu');
        all2Again[0].style.textAlign = "left";
        all2Again[0].style.width = '270px';

        var usuarioImagenDiv = document.getElementById("profileImg");
        usuarioImagenDiv.style.textAlign = "center";

        userText.style.display = "contents";

        var adminTextAg = document.getElementById("adminText");
        adminTextAg.style.display = "contents";

        var profileImgAg = document.getElementById("profileImg");
        profileImgAg.style.display = "contents";
        profileImgAg.style.display = "block";

        var menuText = document.getElementById("menuTitle");
        menuText.style.display = "contents";
    }
}

function MostrarEnDom(id) {

    var text = document.getElementById("clicRequest");

    switch (id) {

        case 'CA':
            text.innerHTML = "Customer Accounts";            
            break;

        case 'AM':
            text.innerHTML = "Access Media";            
            break;

        case 'ST':
            text.innerHTML = "Statistics";
            break;

        case 'DV':
            text.innerHTML = "Devices";
            break;

        case 'TF':
            text.innerHTML = "Tarification";            
            break;

        case 'AA':
            text.innerHTML = "Agents Account";
            break;
    }
}