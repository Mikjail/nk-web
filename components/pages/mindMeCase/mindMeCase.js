import { Button } from "../../button/button.js";

export const mindMeCase = () => /*html*/ `
<section class="mind-me-case xl">
    <img class="mind-me-case__img" src="assets/mindMeCase.svg" alt="">
    <div class="mind-me-case__right">
        <h1 class="mind-me-case__title main-title">MindMe</h1>
        <p class="mind-me-case__description">
        MindMe is a mobile app designed to provide comprehensive mental 
        health support for individuals and help them navigate and overcome 
        different mental health issues effectively
        </p>
        ${Button({
          text: "Prototype",
          href: "/",
          variant: "case1-green",
          className: "mind-me-case__btn",
        })}
    </div>
</section>
<section class="mind-me-case__section2 xl">
    <div class="mind-me-case__process">
      <h1>PROCESS</h1>
      <p>
        In the project's initial stages, I conducted comprehensive user research, 
        identifying pain points in accessing mental health support. I also iteratively 
        designed and refined the app's user interface, focusing on a responsive and 
        user-centric design.
      </p>
    </div>
    <div class="mind-me-case__role-timeline">
      <div class="mind-me-case__role">
        <h1>ROLE</h1>
        <p>Solo designer: User research, IA, user flow, persona, wireframing, prototyping</p>
      </div>
      <div class="mind-me-case__timeline">
        <h1>Timeline</h1>
        <p><strong>4 weeks</strong></p>
        <p>August 2023 to September 2023</p>
      </div>
    </div>
    <div class="mind-me-case__problem">
        <h1>PROBLEM</h1>
        <h4> Getting help for your mental health shouldn't be so hard.</h4>
        <p>
       
Life can be tough, and many people struggle with things like stress, anxiety, or feeling down. It's great to have apps that can help, but some make it really complicated. You spend a lot of time filling out forms, answering a lot of questions and then before you even get to see who can help you, they ask for money. And it's not just a little money; it can be really expensive. This makes it tough for people to get the help they need when they need it. 
        </p>
    </div>
    <div class="mind-me-case__solution">

    </div>
  <div>

  
</section>
`;
