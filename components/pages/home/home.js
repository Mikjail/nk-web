import { MindMe } from "./mindMe/mindMe.js";
import { Beanifesto } from "./beanifesto/beanifesto.js";
import { ITravel } from "./iTravel/iTravel.js";
import { Form } from "../../modal/form/form.js";

export const Home = () => /*html*/ `
<section class="landing-page">
    <h3>
      I am <span class="landing-page__strong">Berlin-based UX/UI designer</span>,
      focused on creating exclusive user experience through research and a deep
      understanding of user needs
    </h3>
    <div class="main-text">
      <h4>My case studies</h4>
      <img
        src="assets/arrow-down-bold.svg"
        alt="Arrow down"
        class="arrow"
      />
  </div>
  </section>
  ${MindMe()}
  ${Beanifesto()}
  ${ITravel()}
 `;
