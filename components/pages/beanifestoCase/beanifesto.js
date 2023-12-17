import { Button } from "../../button/button.js";
export const BeanifestoCase = () => /*html*/ `
<section class="beanifesto-case__main">
<img class="beanifesto-case-name__image" src="assets/beanifesto-name.svg" alt="App Name">
  <h1 class="beanifesto-case__h1"> an Engaging and Sustainable Coffee Product App</h1>
  <img class="beanifesto-case__mockups" src="assets/beanifesto-mockups.svg" alt="Screen Mockups">
  ${Button({
          text: "Prototype",
          href: "/",
          className: "beanifesto-case__btn",
        })}
</section>
, 
<section class="beanifesto-case__intro">
    <h3 class="cases__h3">Introduction</h3>
    <p><strong>Beanifesto</strong> is a coffee product app designed for coffee lovers who seek an effortless way to explore a diverse selection of coffee products while making sustainable and informed purchasing decisions.</p>
<p>This case study goes into the development process of Beanifesto, focusing on the principles of Simplicity, Intuitiveness, and Sustainability, as well as user feedback from usability tests.</p>
        <h3 class="cases__h3">The idea & the Problem</h3>
        <p><strong>Beanifesto</strong> was born from a simple idea: to create a user-friendly coffee products app that simplifies the search for the perfect brew.</p>
<p>Coffee lovers often find themselves lost in a sea of options, seeking an intuitive platform that not only assists in product discovery but also promotes sustainable coffee choices.</p>
</section>
<img class="beans__image" src="assets/beans.jpg" alt="Coffee beans image">
<section>
<h3 class="cases__h3">Process</h3>
    <p>My approach revolved around <strong>3 core pronciples: simplicity, intuitiveness and sustainability</strong>. These principles guided  design and development process to ensure a seamless and responsible coffee shopping experience.</p>
</section>
<section class="beanifesto-case__columns">
    <div class="beanifesto-case__column">
        <h3 class="cases__h3">Role</h3>
        <p><strong>Solo designer:</strong> wireframing, prototyping, micro-interactions, gamification, testing</p>
        <h3 class="cases__h3"></h3>
    </div>
        <div class="beanifesto-case__column">
                <h3 class="cases__h3">Timeline</h3>
                <p>2 weeks</p>
    </section>
    <img class="beanifesto-process__image" src="assets/beanifesto-process.jpg" alt="Case process">
    `;
