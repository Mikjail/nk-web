import { Button } from "../../../button/button.js";

export const ITravel = () => /*html*/ `
<section class="i-travel case-study">
  <img src="assets/i-travel.svg" alt="" class="i-travel__img"/>
  <div class="i-travel__right">
    <h1 class="i-travel__title main-title">ITravel</h1>
    <h2 class="i-travel__subtitle subtitle">Travel Planner App</h2>
    <p class="i-travel__description">
        A mobile app that helps users plan their trips and activities with seamless
        integration, personalized recommendations, and streamlined itinerary management,
        making it enjoyable and efficient
    </p>
    <p class="i-travel__tags">UX Research | UI Design</p>
    ${Button({
      text: "View",
      href: "/",
      variant: "secondary",
    })}
  </div>
</section>
`;
