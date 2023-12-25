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
