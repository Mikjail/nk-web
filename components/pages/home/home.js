import { MindMe } from "./mindMe/mindMe.js";
import { Beanifesto } from "./beanifesto/beanifesto.js";
import { ITravel } from "./iTravel/iTravel.js";
import { OneFootball } from "./oneFootball/oneFootball.js";

export const Home = () => /*html*/ `
<section class="landing-page">
    <h3>
      I am a <span class="landing-page__strong">Product Designer</span>,
      focused on creating exclusive user experience through research and a deep
      understanding of user needs
    </h3>
    <a class="main-text" href="#case-studies">
      <h4>My case studies</h4>
      <img
        src="assets/arrow-down-bold.svg"
        alt="Arrow down"
        class="arrow"
      />
    </a>
</section>
<section id="case-studies">
  ${OneFootball()}
  ${MindMe()}
  ${Beanifesto()}
  ${ITravel()}
</section>
 `;
