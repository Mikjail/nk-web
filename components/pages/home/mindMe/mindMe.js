import { Button } from "../../../button/button.js";

export const MindMe = () => /*html*/ `
<section class="mind-me case-study xl">
  <img src="assets/mind-me.svg" alt="" class="mind-me__img"/>
  <div class="mind-me__right">
    <h1 class="mind-me__title main-title">MindMe</h1>
    <h2 class="mind-me__subtitle subtitle">Mental Health Support App</h2>
    <p class="mind-me__description">
      A mobile app designed to provide comprehensive mental health support for
      individuals and help them navigate and overcome different mental health
      issues effectively.
    </p>
    <p class="mind-me__tags">UX Research | UI Design | Testing</p>
    ${Button({
      text: "View",
      href: "#mind-me",
      variant: "secondary",
    })}
  </div>
</section>
`;
