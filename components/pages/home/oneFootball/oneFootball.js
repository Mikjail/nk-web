import { Button } from "../../../button/button.js";

export const OneFootball = () => /*html*/ `
<section class="onefootball case-study b-image-cases xl">
  <img class="onefootball_image" src="assets/onefootball.jpg" alt="" class="onefootball__img"/>
  <div class="onefootball__right">
    <h1 class="onefootball__title main-title">OneFootball</h1>
    <h2 class="onefootball__subtitle subtitle">Football Fan Engagement App</h2>
    <p class="onefootball__description">
    A mobile app offering real-time football news, live scores, match streaming, and personalized updates, connecting fans with their favorite teams and competitions worldwide.
    </p>
    <p class="onefootball__tags">Product Design | UI Design | Testing</p>
    ${Button({
      text: "View",
      href: "#onefootball",
      variant: "secondary",
    })}
  </div>
</section>
`;
