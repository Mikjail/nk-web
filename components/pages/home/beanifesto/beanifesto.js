import { Button } from "../../../button/button.js";

export const Beanifesto = () => /*html*/ `
<section class="beanifesto case-study b-image-cases xl">
    <div class="beanifesto__left">
        <h1 class="beanifesto__title main-title">Beanifesto</h1>
        <h2 class="beanifesto__subtitle subtitle">E - Commerce App</h2>
        <p class="beanifesto__description">
            A coffee product app designed for coffee lovers who 
            seek an effortless way to explore a diverse selection of coffee
            products while making sustainable and informed purchasing decisions.
        </p>
        <p class="beanifesto__tags">
            UX Research | UI Design
        </p>
        ${Button({
          text: "View",
          href: "/#beanifesto",
          variant: "secondary",
        })}
    </div>
    <img class="image-cases beanifesto__img" src="assets/beanifesto.svg" alt="">
</section>`;
