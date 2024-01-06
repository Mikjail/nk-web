import { Nav } from "../components/topBar/nav.js";
import { Footer } from "../components/footer/footer.js";
import { Modal } from "../components/modal/modal.js";

document.getElementById("nav").innerHTML = Nav();
document.getElementById("footer").innerHTML = Footer();
document.getElementById("dialog-form").innerHTML = Modal();
