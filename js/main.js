import { Nav } from "../components/topBar/nav.js";
import { Footer } from "../components/footer/footer.js";
import { Modal } from "../components/modal/modal.js";
import { PopUp } from "../components/pop-up/popUp.js";

document.getElementById("nav").innerHTML = Nav();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("mobile-dialog").innerHTML = PopUp();
if(window.matchMedia("(max-width: 430px)").matches) {
    document.getElementById("contact-form-mobile").innerHTML = Modal();
} else {
    document.getElementById("dialog-form").innerHTML = Modal();
}

