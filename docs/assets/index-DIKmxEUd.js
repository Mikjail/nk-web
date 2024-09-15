(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=i(s);fetch(s.href,a)}})();const w=()=>`
    <nav class="navbar">
      <div class="logo">
        <a href="/#">
          <img src="assets/logo.png" alt="Your Logo" />
        </a>
      </div>
      <ul class="middle" id="menu">
        <li>
          <a class="nav-link" href="#">
            Home
          </a>
        </li>
        <li>
          <a class="nav-link" href="#about">
            About
          </a>
        </li>
        <li>
          <a class="nav-link" href="/assets/anastasiia-kiias-cv.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
      <div class="right">
        <button class="custom-btn primary-btn nav-link" id="contact-btn">Contact</button>
      </div>
    </nav>
    <!-- Mobile -->
    <nav class="navbar-xs">
      <div class="logo">
        <a href="/#">
          <img src="assets/logo.png" alt="Your Logo" />
        </a>
      </div>
      <div class="menuToggle">
        <input type="checkbox"/>
        <span></span>
        <span></span>
        <span></span>
        <ul class="menuItem" id="menu">
          <li>
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li>
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a class="nav-link" href="#contact">
              Contact
            </a>
          </li>
          <li>
            <a class="nav-link" href="/assets/anastasiia-kiias-cv.pdf" target="_blank">
              Resume
            </a>
          </li>
      </ul>
    </div>

    </nav>
    
    `,d=()=>`
  <div class="footer-content">
    <p class="footer-text">
      Get in touch with me at <strong>anastasiiakiias@gmail.com</strong>
    </p>
    <div class="footer-icons">
  <a href="https://www.linkedin.com/in/anastasiiakiias/" target="_blank">
    <img src="assets/linkedin.svg" alt="LinkedIn Icon" class="icon" />
  </a>
  <a href="https://www.behance.net/anastasiiakiias" target="_blank">
    <img src="assets/behance.svg" alt="Behance Icon" class="icon" />
  </a>
  <a href="https://www.instagram.com/anastasiiakiias/" target="_blank">
    <img src="assets/instagram.svg" alt="Instagram Icon" class="icon" />
  </a>
</div>
  </div>
`;document.getElementById("footer").innerHTML=d();const h=()=>`
  <div class="contact-form" id="contact">
    <h2>Let's get in touch!</h2>
    <form id="contact-form">
      <div class="input-group">
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="Email address" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$" required />
      </div>
      <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
      <input class="contact-form__button custom-btn secondary form" type="submit" value="Send">
    </form>
  </div>
  `,I=()=>`
    <div class="msge-sent">
        <img src="/assets/okey.svg" alt="">
        <h2 class="msge-sent__great">Great!</h2>
        <p class="msge-sent__msge">Your message was successfully sent.</p>
        <button class="custom-btn secondary msge-sent__btn" id="ok-btn">OK</button>
    </div>
    `,m=()=>`
        <div class="modal-header">
            <span class="modal-header__close" id="close-btn">&times;</span>
        </div>
        <div class="modal-body" id="modal-content">
            ${h()}
        </div>
    `,u=()=>`
       <div class="pop-up__header">
       Case study access
     </div>
     <div class="pop-up__body">
     Apologies, all case studies are only available on <strong>desktop view.</strong> For the best experience, please view them on a desktop.
     </div>
     <div class="pop-up__footer">
        <button id="pop-up__close" class="pop-up__close-btn">Close</button>
     </div>
`;document.getElementById("nav").innerHTML=w();document.getElementById("footer").innerHTML=d();document.getElementById("mobile-dialog").innerHTML=u();window.matchMedia("(max-width: 430px)").matches||(document.getElementById("dialog-form").innerHTML=m());const f=(e,t)=>{e.forEach(function(i){i.getAttribute("href")===t?i.classList.add("active"):i.classList.remove("active")}),(t===""||t==="#contact")&&e[0].classList.add("active")},_=document.querySelectorAll(".nav-link"),k=window.location.hash;f(_,k);window.addEventListener("hashchange",function(){const e=window.location.hash;f(_,e)});window.onload=function(){if(window.matchMedia("(max-width: 430px)")){const e=document.querySelector(".menuToggle input");document.querySelectorAll(".menuToggle a").forEach(i=>{i.addEventListener("click",()=>{e.click()})})}};const c=({text:e,href:t,variant:i,className:n,target:s})=>`
        <a class="custom-btn ${n} ${i}" href="${t}" target="${s||"_self"}">${e}</a>
    `,T=()=>`
<section class="mind-me case-study xl">
  <div class="mind-me__right">
    <h1 class="mind-me__title main-title">MindMe</h1>
    <h2 class="mind-me__subtitle subtitle">Mental Health Support App</h2>
    <p class="mind-me__description">
      A mobile app designed to provide comprehensive mental health support for
      individuals and help them navigate and overcome different mental health
      issues effectively.
    </p>
    <p class="mind-me__tags">UX Research | UI Design | Testing</p>
    ${c({text:"View",href:"#mind-me",variant:"secondary"})}
  </div>
  <img class="image-cases" src="assets/mind-me.svg" alt="" class="mind-me__img"/>
</section>
`,E=()=>`
<section class="beanifesto case-study b-image-cases xl">
    <img class="image-cases beanifesto__img" src="assets/beanifesto.svg" alt="">
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
        ${c({text:"View",href:"/#beanifesto",variant:"secondary"})}
    </div>
</section>`,x=()=>`
<section class="i-travel case-study xl">
  <div class="i-travel__right">
    <h1 class="i-travel__title main-title">ITravel</h1>
    <h2 class="i-travel__subtitle subtitle">Travel Planner App</h2>
    <p class="i-travel__description">
        A mobile app that helps users plan their trips and activities with seamless
        integration, personalized recommendations, and itinerary management,
        making it enjoyable and efficient.
    </p>
    <p class="i-travel__tags">UX Research | UI Design</p>
    ${c({text:"View",href:"#itravel",variant:"secondary"})}
  </div>
  <img class="image-cases" src="assets/i-travel.svg" alt="" class="i-travel__img"/>
</section>
`,A=()=>`
<section class="onefootball case-study xl">
<img class="onefootball_image" src="assets/onefootball.jpg" alt="" class="onefootball__img"/>
  <div class="onefootball__right">
    <h1 class="onefootball__title main-title">OneFootball</h1>
    <h2 class="onefootball__subtitle subtitle">Football Fan Engagement App</h2>
    <p class="onefootball__description">
    A mobile app offering real-time football news, live scores, match streaming, and personalized updates, connecting fans with their favorite teams and competitions worldwide.
    </p>
    <p class="onefootball__tags">Product Design | UI Design | Testing</p>
    ${c({text:"View",href:"#onefootball",variant:"secondary"})}
  </div>
</section>
`,M=()=>`
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
  ${A()}
  ${T()}
  ${E()}
  ${x()}
</section>
 `,S=()=>`
<div>
  <div class="container">
    <div class="image-container">
      <img src="assets/me.jpg" alt="portrait of Anastasiia Kiias" />
    </div>
    <div class="text-container">
      <h3>Hey there!</h3>
      <p class="regular-text">
      I'm Anastasiia,
      a <strong> Product Designer</strong>. My journey into design began with a 
      twist — I used to be a flight attendant! Through my travels and
      interactions, I discovered a love for understanding people's needs and
      making their experiences better.
    </p>
      <p class="regular-text">
        I believe in the power of
        <strong>simplicity and practicality</strong>, and I'm passionate about
        blending these elements to create designs that are both
        <strong>user-focused and visually appealing</strong>. I also believe
        that good design should be <strong>accessible to everyone</strong>, no
        matter their background or preferences.
      </p>
      <p class="regular-text">
        I like to find inspiration in everyday life, whether it's through new
        experiences, trying different cuisines or exploring new destinations.
        I'm excited to be a part of the ever-evolving design world and to bring
        my unique perspective to
        <strong>creating meaningful digital experiences</strong>.
      </p>
    </div>
  </div>
</div>
`,L=()=>`
<div class="resume">
   <h1>Page in construction 🛠️</h1>
</div>
`,R=()=>`
<section class="mind-me-case xl">
    <img class="mind-me-case__img" src="assets/mindMeCase.svg" alt="">
    <div class="mind-me-case__right">
        <h1 class="mind-me-case__title main-title">MindMe</h1>
        <p class="mind-me-case__description">
        MindMe is a mobile app designed to provide comprehensive mental 
        health support for individuals and help them navigate and overcome 
        different mental health issues effectively
        </p>
        ${c({text:"Prototype",href:"https://www.figma.com/proto/flIEX75m8Eqz9XkA74WUrK/Capstone-Project---MindMe---Anastasiia?page-id=121%3A7&type=design&node-id=135-131&viewport=480%2C259%2C0.14&t=PrbqBrkjkxWG4kJn-1&scaling=scale-down&starting-point-node-id=135%3A131&show-proto-sidebar=1&mode=design",variant:"case1-green",className:"mind-me-case__btn",target:"_blank"})}
    </div>
</section>

<section class="cases__sections--margin xl">
  <h4 class="cases__h4">PROBLEM</h4>
    <p><strong>Getting help for your mental health shouldn't be so hard.</strong></p>
    <p>Life can be tough, and many people struggle with things like stress, anxiety, or feeling down. It's great to have apps that can help, but some make it really complicated. You spend a lot of time filling out forms, answering a lot of questions and then before you even get to see who can help you, they ask for money. And it's not just a little money; it can be really expensive. This makes it tough for people to get the help they need when they need it.</p>
  <h4 class="cases__h4">SOLUTION</h4>
    <p><strong>MindMe</strong> simplifies your path to mental well-being with:</p>
    <ol>
      <li><strong>Personalized Onboarding:</strong> Answer key questions to tailor your therapy journey.</li>
      <li><strong>Free First Trial:</strong> Try a session on us, no strings attached.</li>
      <li><strong>Therapist Matching:</strong> Discover therapists matched to your unique needs.</li>
      <li><strong>Easy Appointment Booking:</strong> Schedule therapy sessions with ease and flexibility.</li>
      <li><strong>Video Intros:</strong> Get to know your therapist before starting sessions.</li>
    </ol>
</section>

<img class="xl cases__img1--margin" src="assets/mindme.jpg" alt="Hands image">

<section class="cases__sections xl">
  <h4 class="cases__h4">PROCESS</h4>
    <p>In the project's initial stages, I conducted <strong>comprehensive user research</strong>, identifying pain points in accessing mental health support. I also iteratively <strong>designed and refined the app's user interface</strong>, focusing on a responsive and user-centric design.</p>
</section>

<section class="cases__columns xl">
  <div class="cases__column">
    <h4 class="cases__h4">ROLE</h4>
      <p><strong>Solo designer:</strong> User research, IA, user flow, persona, wireframing, prototyping</p>
    <h4 class="cases__h4"></h4>
  </div>
  <div class="cases__column">
    <h4 class="cases__h4">TIMELINE</h4>
      <p><strong>2 weeks:</strong> 08.2023 - 09.2023</p>
</section>

<img class="cases__img2--margin" src="assets/mindme-structure.jpg" alt="Case process">

<section class="cases__sections xl">
  <h4 class="cases__h4 cases__h4--margin">RESEARCH</h4>
  <h4 class="cases__h4 cases__4--margin">Research Insights from Surveys</h4>
    <p>In the research phase, I collected <strong>26 survey responses</strong>, revealing some significant insights.</p>
    <p>Firstly, I observed that many potential users had limited prior experience with mental health apps. Respondents expressed a clear preference for one-on-one therapy, emphasizing the importance of tailored support.</p>
    <p>Additionally, my findings underscored the significance of cultural background and language access in mental health services, emphasizing the need for inclusivity and diversity in the app's offerings.</p>
  <h4 class="cases__h4">Interview Highlights</h4>
    <p>Through in-depth interviews with <strong>4 participants</strong>, I uncovered several key insights.</p>
    <p>There is a strong and growing need for mental health support, indicating a ripe market for our app's services. While many interviewees initially preferred in-person therapy, they also acknowledged the value of online resources, suggesting a willingness to embrace digital mental health solutions. The importance of cultural alignment and community connection emerged as recurring themes, guiding our approach to therapist selection and user community building.</p>
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">USER PERSONA</h4>
    <img class="cases__img1" src="assets/mindme-userpersona.jpg" alt="User Persona">
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">INFORMATION ARCHITECTURE</h4>
      <p>MindMe's information architecture has been thoughtfully structured to <strong>enhance user experience.</strong> With a clear and intuitive flow, users can easily navigate the app's key sections, such as personalized onboarding, therapist matching, appointment booking, and access to self-help resources. This structure ensures that users can <strong>easily access the support they need,</strong> making their mental health journey as smooth and efficient as possible.</p>
    <img class="cases__img1" src="assets/mindme-ia.jpg" alt="Information Architecture">
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">USER FLOW</h4>
      <p>Starting with personalized onboarding, where essential questions are asked to tailor the experience, users can quickly proceed to a free first trial session with a recommended therapist. The therapist matching process is made simple through video introductions, and once satisfied, users can <strong>effortlessly book appointments.</strong></p>
      <p>This <strong>user-centric flow</strong> ensures that users can access support, explore therapists, and book sessions with ease, reducing barriers and simplifying the path to mental health improvement.</p>
    <img class="cases__img1" src="assets/mindme-userflow.jpg" alt="User Flow">
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">LO-FI WIREFRAMES</h4>
      <p>In the initial stages of the MindMe app's design, low-fidelity wireframes were created as a foundational step. These wireframes provided a basic structural outline for the app's key screens, <strong>focusing on user flow and functionality.</strong></p>
      <p>They also laid the groundwork for the app's <strong>user-friendly interface,</strong> ensuring that users could efficiently find their ideal therapist and access mental health support without unnecessary complexity.</p>
    <img class="cases__img1" src="assets/mindme-lofi.jpg" alt="Low Fidelity Wireframes">
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">HIGH-FI WIREFRAMES</h4>
    <img class="cases__img1" src="assets/mindme-highfi.jpg" alt="High Fidelity Wireframes">
</section>

<section class="cases__sections xl">
  <h4 class="cases__h4 cases__h4--margin">USABILITY TESTING</h4>
  <h4 class="cases__h4">Overview</h4>
    <p>With a focus on real user interactions, this phase provided invaluable insights into the app's design, functionality, and content.</p>
    <p>Usability testing involved <strong>3 participants,</strong> each assigned specific tasks to perform within the app. These tasks encompassed key user interactions, including setting preferences, finding therapists, and booking appointments. Participants were encouraged to provide feedback on their experiences throughout the testing.</p>
    <p>Usability testing results indicate that MindMe offers a <strong>positive user experience.</strong> Users found it valuable for setting preferences, matching with therapists, and booking appointments. By implementing the recommended improvements, the app can further enhance its usability and meet diverse user needs effectively.</p>
    <h4 class="cases__h4">Key Findings:</h4>
    <ol>
      <li><strong>Task Completion:</strong> Participants successfully completed essential tasks, such as setting preferences, finding therapists, and booking appointments.</li>
      <li><strong>Navigation and Information Architecture:</strong> The app's information architecture received positive feedback, with users easily accessing therapist profiles and appointment scheduling.</li>
      <li><strong>Onboarding Process:</strong> The brief and informative onboarding process was well-received for its clarity and effectiveness.</li>
      <li><strong>Appointment Booking:</strong> Users found the appointment booking process straightforward, but a rescheduling feature was suggested for added flexibility.</li>
      <li><strong>Visual Design:</strong> The app's calming color scheme and professional typography contributed to a reassuring and pleasant user experience.</li>
    </ol>
</section>

<section class="cases__sections cases__columns xl">
  <div class="cases__column">
    <h4 class="cases__h4">PROTOTYPE</h4>
      <p>Press <a href="https://www.figma.com/proto/flIEX75m8Eqz9XkA74WUrK/Capstone-Project---MindMe---Anastasiia?page-id=121%3A7&type=design&node-id=135-131&viewport=480%2C259%2C0.14&t=85ycDNYr3KONr6wX-1&scaling=scale-down&starting-point-node-id=135%3A131&show-proto-sidebar=1&mode=design" target="_blank"><u>here</u></a> to access the prototype</p>
    <img class="cases__img2" src="assets/mindme-prototype.jpg" alt="Mindme screens">
  </div>
  <div class="cases__column">
    <h4 class="cases__h4">SCREEN RECORDING</h4>
      <video class="cases__video" controls autoplay muted>
      <source src="assets/mindme-video.mp4" type="video/mp4">
      </video>
</section>

<section class="cases__sections--last xl">
  <h4 class="cases__h4">REFLECTION</h4>
    <p>Throughout the development of the MindMe app, my user-centric approach has guided every decision.</p>
    <p>Surveys, interviews, and usability testing helped me understand user needs. I learned that <strong>simplifying the path to finding the right therapist and fostering a calming user experience are crucial.</strong></p>
  <h4 class="cases__h4">NEXT STEPS</h4>
    <p>To enhance the MindMe app's impact, I'll focus on continuous user feedback, expanding content, adding new features like community, and educating users for an even more supportive mental health ecosystem.</p>
    <p>My journey is ongoing, with a commitment to making mental health support accessible, effective, and user-friendly.</p>
</section>

<section>
<div class="back-to-top xl"
onclick= "window.scrollTo({ top: 0, behavior: 'smooth' });">
<img
        src="assets/arrow-up-bold.svg"
        alt="Arrow up"
        class="arrow1"
      />
      <h4>Back to top</h4>
      
  </div>
</section>
`,C=()=>`

<section class="beanifesto-case__main xl">
<img class="beanifesto-case-name__img" src="assets/beanifesto-name.svg" alt="App Name">
  <h1 class="title__description"> an Engaging and Sustainable Coffee Product App</h1>
  <img class="beanifesto-case__mockups" src="assets/beanifesto-mockups.svg" alt="Screen Mockups">
  ${c({text:"Prototype",href:"https://www.figma.com/proto/gHkpWdf7CzUWwPEWoPEsHQ/Project3_Anastasiia?page-id=4%3A10&type=design&node-id=812-994&viewport=408%2C295%2C0.13&t=eK0ShY4qwXAjKbRZ-1&scaling=scale-down&starting-point-node-id=812%3A994&mode=design",variant:"cases__btn",className:"beanifesto-case__btn",target:"_blank"})}
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
<div class="back-to-top xl"
onclick= "window.scrollTo({ top: 0, behavior: 'smooth' });">
<img
        src="assets/arrow-up-bold.svg"
        alt="Arrow up"
        class="arrow1"
      />
      <h4>Back to top</h4>
      
  </div>
</section>
`,j=()=>`
<section class="itravel__case xl">
    <h1 class="itravel__name">ITravel</h1>
    <h1 class="title__description title__description--itravel">A mobile app that helps users plan their trips and activities</h1>
    <img class="cases__mockups" src="assets/itravel-mockups.jpg" alt="Screen Mockups" />
</section>

<section class="cases__sections xl">
  <h4 class="cases__h4">INTRODUCTION</h4>
    <p>In a collaborative effort our team developed <strong>ITravel</strong>, a mobile app that redefines the travel planning experience. Our journey began with extensive research and analysis, resulting in the creation of an <strong>intuitive and user-centric solution.</strong></p>
  <h4 class="cases__h4">PROBLEM</h4>
    <p>Current travel apps are often confusing, lack personalization, and provide limited real-time info, leaving travelers frustrated.</p>
  <h4 class="cases__h4">SOLUTION</h4>
    <p><strong>ITravel</strong> simplifies travel planning with seamless integration, personalized recommendations, and streamlined itinerary management, making it enjoyable and efficient.</p>
</section>

<img class="xl cases__img1--margin" src="assets/itravel-plane.jpg" alt="Airplane image">

<section class="cases__sections xl">
  <h4 class="cases__h4">PROCESS</h4>
    <p>Our team conducted thorough research, created user personas, and designed user journeys. These insights informed user flows and mid-fi wireframes, resulting in a <strong> user-centric travel planning app -  ITravel.</strong></p>
</section>

<section class="cases__columns xl">
  <div class="cases__column">
    <h4 class="cases__h4">ROLE</h4>
      <p><strong>Team of 4:</strong> Research, Analysis, User flows & journeys, Wireframing</p>
    <h4 class="cases__h4"></h4>
  </div>
  <div class="cases__column">
    <h4 class="cases__h4">TIMELINE</h4>
      <p>2 weeks</p>
</section>

<img class="cases__img2--margin" src="assets/itravel-structure.jpg" alt="Case process">

<section class="cases__sections xl">
    <h4 class="cases__h4">RESEARCH</h4>
        <p>In our research phase, we gathered valuable insights through a combination of surveys and interviews. We received <strong>16 survey responses</strong>, understanding the behaviors and preferences of potential users. Additionally, we conducted <strong>4 in-depth interviews</strong> to dive into the nuances of travel planning.</p>
    <h4 class="cases__h4">Survey takeaways:</h4>
  <ol>
    <li><strong>Usage of travel aps:</strong> A significant 56.3% of respondents use travel apps for trip planning, highlighting the demand for such tools.</li>
    <li><strong>Underuse of itinepary features:</strong> Surprisingly, 75% of the surveyed users have never used the itinerary feature on travel apps, indicating a potential gap in the market for improved itinerary management.</li>
    <li><strong>Time invested in planning:</strong> Approximately 33% of respondents invest around 3-4 hours to plan a one-week trip, highlighting the time-intensive nature of traditional travel planning.</li>
</ol>

<img class="cases__img2--margin" src="assets/itravel-survey.jpg" alt="Survey results"> 
    
    <h4 class="cases__h4">Interview takeaways:</h4>
  <ol>
    <li><strong>Travel planning preferences:</strong> Interviewees expressed common pain points, such as not knowing where to start, difficulty in researching and locating desired travel information, and a strong preference for personalized and detailed itineraries.</li>
    <li><strong>Experience-centric approach:</strong> Travelers shared a desire to escape commercialization and avoid heavily touristy places. They emphasized seeking authentic experiences and frequently relied on locals for recommendations.</li>
    <li><strong>Travel tools and resources:</strong> Interviewees mentioned the challenge of finding the right travel blog or resource for relevant and trustworthy information, highlighting the value of personal recommendations in travel blogs.</li>
</ol>
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">USER PERSONA</h4>
    <img class="cases__img1" src="assets/itravel-userpersona.jpg" alt="User Persona">
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">USER JOURNEY MAP</h4>
        <p>In creating Emily's user journey, we carefully considered her preferences and expectations at each stage. We ensured that the app's onboarding process is intuitive and smooth, meeting her need for simplicity.</p>
        <p>The planning phase offers flexibility and comprehensiveness in itinerary customization. Booking is designed to be secure and transparent. During her travels, the app's reliability and real-time updates provide the adventure she seeks. Post-trip, she can easily share memories and provide feedback, enhancing her overall experience.</p>
        <p>These decisions were made to create a <strong>seamless, enjoyable, and memorable travel journey</strong> for users like Emily.</p>
    <img class="cases__img1" src="assets/itravel-journeymap.jpg" alt="User Journey Map">
</section> 

<img class="xl cases__img1--margin" src="assets/sky.jpg" alt="Sky image">

<section class="cases__sections xl">
    <h4 class="cases__h4">INFORMATION ARCHITECTURE</h4>
        <p>Our information architecture (IA) was created to ensure a <strong>streamlined user experience.</strong> It categorizes content logically, making it easy for users to navigate and find relevant information effortlessly.</p>
        <p>We organized the app's features around core user tasks such as trip planning, booking, travel assistance, and post-trip engagement. This clear and intuitive IA enhances the overall usability of the ITravel app, aligning with our <strong> user-centric approach to travel planning.</strong></p>
    <img class="cases__img1" src="assets/itravel-ia.jpg" alt="Information Architecture">
</section>

<section class="cases__sections xl">
    <h4 class="cases__h4">USER FLOW</h4>
        <p>We developed an <strong>efficient user flow</strong> by analyzing the user journey and information architecture, identifying Emily's main task, and considering her preferences. In the user flow, Emily creates a trip itinerary.</p>
        <p>The goal is to provide a <strong>seamless experience</strong> for her travel planning needs, focusing on <strong>simplicity and real-time information</strong> while addressing potential pain points like complex onboarding.</p>
    <img class="cases__img1" src="assets/itravel-userflow.jpg" alt="User Flow">
    </section>

<section class="cases__sections xl">
    <h4 class="cases__h4">MID-FI WIREFRAMES</h4>
        <p>Our mid-fi wireframes were created to ensure that the app's features are <strong>intuitive and user-friendly.</strong> We focused on <strong>simplicity and clarity</strong> in the design, ensuring that users can easily navigate the app and find relevant information.</p>
        <p>These wireframes were created to provide a <strong>seamless user experience</strong> for Emily, addressing her needs and preferences at each stage of her travel journey.</p>
    <img class="cases__img1" src="assets/itravel-wireframes.jpg" alt="Mid-fi wireframes">
</section> 

<section class="cases__sections--last xl">
  <h4 class="cases__h4">REFLECTION</h4>
    <p>In our journey to create ITravel, we learned the importance of understanding the unique needs and preferences of users.</p>
    <p>The research phase was crucial in shaping our approach, and it's clear that <strong>simplicity, personalization, and real-time information are key to enhancing the travel planning experience.</strong> Our user flow and information architecture were designed with these principles in mind, <strong>prioritizing user-centric design.</strong></p>
  <h4 class="cases__h4">NEXT STEPS</h4>
    <p>I will personally continue working on developing <strong>high-fi wireframes</strong> to translate our user flow into a visually appealing and functional interface. <strong>Usability testing</strong> will be a key focus, ensuring that the app aligns with preferences and needs of the potential users.</p>
    <p><strong>Sustainability and eco-friendliness</strong> will also remain central to the ongoing development efforts.</p>
</section>

<section>
<div class="back-to-top xl"
onclick= "window.scrollTo({ top: 0, behavior: 'smooth' });">
<img
        src="assets/arrow-up-bold.svg"
        alt="Arrow up"
        class="arrow1"
      />
      <h4>Back to top</h4>
      
  </div>
</section>

`,r=document.getElementById("dialog-form"),P=document.getElementById("contact-btn"),v=document.getElementById("close-btn"),l=document.getElementById("mobile-dialog"),y=()=>{const e=document.getElementById("mobile-dialog");e.innerHTML=u(),document.querySelectorAll(".case-study").forEach(i=>{i.addEventListener("click",()=>{e.showModal()})})};y();P.addEventListener("click",async()=>{r.showModal(),document.getElementById("modal-content").innerHTML=h(),document.getElementById("contact-form").addEventListener("submit",p),v.addEventListener("click",()=>{r.close()})});document.addEventListener("click",e=>{const t=document.getElementById("pop-up__close");e.target===r&&r.close(),e.target===l&&l.close(),e.target===v&&r.close(),e.target==t&&l.close()});const O=()=>`
     <div class="pop-up__header">
        Thank you!
     </div>
     <div class="pop-up__body">
        Your message was successfully sent!
     </div>
     <div class="pop-up__footer">
        <button id="pop-up__close" class="pop-up__close-btn">Close</button>
     </div>
`,B="template_1td30hg",N="service_01wo9w7",U="TzZMlShXkbi54loJf",p=e=>{e.preventDefault();const t=e.target,i=new FormData(t),{name:n,email:s,message:a}=Object.fromEntries(i.entries());if(emailjs.send(N,B,{from_name:n,to_name:"Anastasiia",from_email:s,message:a},U).then(function(o){console.log("SUCCESS!",o.status,o.text)},function(o){console.log("FAILED...",o)}),window.matchMedia("(max-width: 430px)").matches){const o=document.getElementById("mobile-dialog");o.innerHTML=O(),o.showModal()}else document.getElementById("modal-content").innerHTML=I(),document.querySelector(".msge-sent__btn").addEventListener("click",function(){r.close()});t.reset()};window.matchMedia("(max-width: 430px)").matches||document.getElementById("contact-form").addEventListener("submit",p);const F=()=>`
<div class="onefootball">
   <h1>Page in construction 🛠️</h1>
</div>
`,g={"/":{template:M(),title:"NK - Home",description:"This is the home page"},about:{template:S(),title:"NK - About",description:"This is the about page"},resume:{template:L(),title:"NK - Resume",description:"This is the resume page"},onefootball:{template:F(),title:"NK - Resume",description:"Onefootball - Case Study"},"mind-me":{template:R(),title:"NK - Resume",description:"MindMe - Case Study"},beanifesto:{template:C(),title:"NK - Beanifesto",description:"This is the beanifesto page"},itravel:{template:j(),title:"NK - iTravel",description:"This is the iTravel page"},contact:{template:`<div id="contact-form-mobile">${m()}</div>`,title:"NK - iTravel",description:"This is the Contact Form page"}},b=async()=>{var e=window.location.hash.replace("#","");e.length==0&&(e="/",window.history.replaceState({},document.title,"."));const t=g[e]||g["/"],i=t.template,n=document.getElementById("content");if(window.matchMedia("(max-width: 430px)").matches)n.innerHTML=i,y();else{n.classList.add("fade"),await new Promise(a=>setTimeout(a,200));const s=document.getElementById("footer");n.innerHTML="",s.innerHTML="",await new Promise(a=>setTimeout(a,100)),n.innerHTML=i,s.innerHTML=d(),n.classList.add("show"),await new Promise(a=>setTimeout(a,200)),n.classList.remove("fade","show")}e==="contact"&&document.getElementById("contact-form").addEventListener("submit",p),document.title=t.title};window.addEventListener("hashchange",b);b();
