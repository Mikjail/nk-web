import { Nav } from "../components/topBar/nav.js";
import { Footer } from "../components/footer/footer.js";
import { Modal } from "../components/modal/modal.js";
import { PopUpCase } from "../components/pop-up/popUpCase.js";


document.getElementById("nav").innerHTML = Nav();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("mobile-dialog").innerHTML = PopUpCase();
if(!window.matchMedia("(max-width: 430px)").matches) {
    document.getElementById("dialog-form").innerHTML = Modal();
}

