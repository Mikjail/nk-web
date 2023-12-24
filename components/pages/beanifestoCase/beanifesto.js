import { Button } from "../../button/button.js";
export const BeanifestoCase = () => /*html*/ `

<section class="beanifesto-case__main xl">
<img class="beanifesto-case-name__img" src="assets/beanifesto-name.svg" alt="App Name">
  <h1 class="title__description"> an Engaging and Sustainable Coffee Product App</h1>
  <img class="beanifesto-case__mockups" src="assets/beanifesto-mockups.svg" alt="Screen Mockups">
  ${Button({
          text: "Prototype",
          href: "https://www.figma.com/proto/gHkpWdf7CzUWwPEWoPEsHQ/Project3_Anastasiia?page-id=4%3A10&type=design&node-id=812-994&viewport=408%2C295%2C0.13&t=eK0ShY4qwXAjKbRZ-1&scaling=scale-down&starting-point-node-id=812%3A994&mode=design",
          variant: "cases__btn",
          className: "beanifesto-case__btn",
          target: "_blank",
        })}
</section>

<section class="cases__sections xl">
  <h4 class="cases__h4">INTRODUCTION</h4>
    <p><strong>Beanifesto</strong> is a coffee product app designed for coffee lovers who seek an effortless way to explore a diverse selection of coffee products while making sustainable and informed purchasing decisions.</p>
    <p>This case study goes into the development process of Beanifesto, focusing on the principles of Simplicity, Intuitiveness, and Sustainability, as well as user feedback from usability tests.</p>
  <h4 class="cases__h4">THE IDEA & THE PROBLEM</h4>
    <p><strong>Beanifesto</strong> was born from a simple idea: to create a user-friendly coffee products app that simplifies the search for the perfect brew.</p>
    <p>Coffee lovers often find themselves lost in a sea of options, seeking an intuitive platform that not only assists in product discovery but also promotes sustainable coffee choices.</p>
</section>

<img class="xl cases__img1--margin" src="assets/beans.jpg" alt="Coffee beans image">

<section class="cases__sections xl">
  <h4 class="cases__h4">PROCESS</h4>
    <p>My approach revolved around <strong>3 core pronciples: simplicity, intuitiveness and sustainability</strong>. These principles guided  design and development process to ensure a seamless and responsible coffee shopping experience.</p>
</section>

<section class="cases__columns xl">
  <div class="cases__column">
    <h4 class="cases__h4">ROLE</h4>
      <p><strong>Solo designer:</strong> wireframing, prototyping, micro-interactions, gamification, testing</p>
    <h4 class="cases__h4"></h4>
  </div>
  <div class="cases__column">
    <h4 class="cases__h4">TIMELINE</h4>
      <p>2 weeks</p>
</section>

<img class="cases__img2--margin" src="assets/beanifesto-process.jpg" alt="Case process">

<section class="cases__sections xl">
  <h4 class="cases__h4">VISUAL DESIGN</h4>
    <p>For Beanifesto's visual identity, I picked a warm, inviting brown as primary color reminiscent of roasted coffee beans, while the vibrant accent green color adds an engaging touch. I used <strong>"Abril Fatface"</strong> for headings to impart elegance and <strong>"Lato"</strong> for the body for readability, creating a balanced, user-friendly experience that mirrors the richness of coffee.</p>
  <img class="cases__img1" src="assets/beanifesto-colors.jpg" alt="Colors and Font">
</section>

<section class="cases__sections xl">
  <h4 class="cases__h4">INITIAL WIREFRAMES</h4> 
    <p>In the high-fidelity wireframes, I transformed the conceptual into the tangible. The careful integration of color palettes, typography, and user interface components ensured that the user journey was not only smooth but also visually interesting, immersing coffee lovers in <strong>welcoming and engaging digital coffee marketplace.</strong></p>
  <img class="cases__img2--margin" src="assets/beanifesto-wireframes.jpg" alt="Mobile screens with design">
</section>

<section class="beanifesto-case__columns1 beanifesto-case__sections xl">
  <div class="cases__column">
    <h4 class="cases__h4">GAMIFICATION</h4>
      <p>In my quest to make Beanifesto an engaging and addictive platform for coffee lovers, I've introduced <strong>a Coffee Lovers Loyalty Program.</strong> This gamified approach aims to not only incentivize users but also enhance their overall experience. Here's how it works:</p>
  <ul class="beanifesto-case__column li">
    <li><strong>Coffee Points:</strong>With every purchase, users have the opportunity to earn Coffee Points, turning their coffee exploration into a rewarding journey.</li>
    <li><strong>Redeem for Discounts & Freebies:</strong>Users can redeem their accumulated Coffee Points for exciting discounts and freebies on our wide range of coffee products, ensuring that their loyalty translates into tangible benefits.</li>
  </ul>
      <p>This encourages users to not only enjoy their coffee but also stay engaged with Beanifesto, fostering a sense of loyalty and excitement with every cup they brew.</p>
  </div>
  <div class="cases__column">
    <img class="cases__img1" src="assets/beanifesto-game.jpg" alt="Gamification screens"> </div>
</section>

<section class="cases__sections xl">
  <h4 class="cases__h4">USABILITY TESTS & ITERATIONS</h4>
    <p>To ensure that Beanifesto truly met the needs and desires of coffee lovers, I conducted a series of usability tests. In these tests, I enlisted the help of both <strong>onsite</strong> and <strong>remote</strong> users to interact with the app and provide feedback on their experiences.</p>
</section>

<section class="cases__sections beanifesto-case__columns1 xl">
  <div class="cases__column">
    <img class="cases__img1" src="assets/beanifesto-iteration1.jpg" alt="Iteration screens 1"> </div>
  <div class="cases__column">
    <h4 class="cases__h4">Categories section, search bar, cart icon</h4>
  <ol class="beanifesto-cases__column li">
    <li>Users were <strong>confused by scrolling categories along with the content</strong> and found it challenging to access them, <strong>impacting usability.</strong> To enhance navigation and user-friendliness, I made several key changes. First, I fixed the categories in place on the page, ensuring they remained visible while users scrolled. Additionally, to optimize space at the top, I replaced the top search bar with a discreet search icon in the right top corner, allowing for a cleaner and more streamlined interface while still providing easy access to search functionality.</li>
    <li>Placing the cart icon in the Bottom nav bar caused <strong>difficulty and confusion for users</strong> accustomed to its typical location in the Top bar. To enhance user experience, I moved the cart icon to the Top bar for easier access to shopping carts. In addition to this change, I removed the burger menu and introduced a profile icon in the Bottom nav bar, simplifying navigation and providing users with a more intuitive way to access their profiles and account settings.</li>
  </ol>
  </div>
</section>

<section class="cases__sections beanifesto-case__columns1 xl">
  <div class="cases__column">
    <h4 class="cases__h4">Full description on product item</h4>
  <ol class="beanifesto-case__column li">
    <li>Users were discouraged by the need to click for "More Details," creating an extra step and <strong>obstructing quick access to information.</strong> To enhance accessibility and improve user satisfaction, I displayed the complete "More Details" section without requiring an extra click..</li>
    <li>Also along with the major changes, <strong>several minor UI adjustments were made to improve readability and the hierarchy of text.</strong> These subtle modifications were aimed at creating a more visually pleasing and user-friendly experience, ensuring that users could easily navigate and find information within the app. These refinements collectively contribute to a smoother and more intuitive interaction with the Beanifesto app.</li>
  </ol>
  </div>
  <div class="cases__column">
    <img class="cases__img1" src="assets/beanifesto-iteration2.jpg" alt="Iteration screens 2"> </div>
</section>

<section class="cases__sections cases__columns xl">
  <div class="cases__column">
    <h4 class="cases__h4">PROTOTYPE</h4>
      <p>Press <a href="https://www.figma.com/proto/gHkpWdf7CzUWwPEWoPEsHQ/Project3_Anastasiia?page-id=4%3A10&type=design&node-id=812-994&viewport=408%2C295%2C0.13&t=NIF5Dbb1Q1rPzB2Q-1&scaling=scale-down&starting-point-node-id=812%3A994&mode=design" target="_blank"><u>here</u></a> to access the prototype</p>
    <img class="cases__img2" src="assets/beanifesto-prototype.jpg" alt="Beanifesto screens">
  </div>
  <div class="cases__column">
    <h4 class="cases__h4">SCREEN RECORDING</h4>
      <video class="cases__video" controls autoplay muted>
      <source src="assets/beanifesto-video.mp4" type="video/mp4">
      </video>
</section>

<section class="cases__sections--last xl">
  <h4 class="cases__h4">REFLECTION</h4>
    <p>Reflecting on this course project, I've come a long way in designing Beanifesto to meet the needs of coffee enthusiasts. I've also <strong>learned the importance of user feedback and iterative design in creating a user-friendly and engaging app.</strong> It's clear that simplicity, intuitiveness, and sustainability are vital principles that drive successful user experiences.</p>
  <h4 class="cases__h4">NEXT STEPS</h4>
    <p>As I move forward, the next steps involve applying the knowledge gained from this project to real-world scenarios. Exploring how to integrate sustainability into coffee product information, optimizing user engagement through gamification, and refining the app based on ongoing feedback will be essential.</p>
</section>

<section>
<div class="back-to-top xl">
<img
        src="assets/arrow-up-bold.svg"
        alt="Arrow up"
        class="arrow1"
      />
      <h4>Back to top</h4>
      
  </div>
</section>
`;
