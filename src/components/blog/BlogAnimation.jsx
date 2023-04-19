import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";
import defaultImg from "../../assets/img/blog/default-992x661.jpg";
import image1 from "../../assets/img/blog/blog-1.jpg";
import image2 from "../../assets/img/blog/blog-2.jpg";
import image3 from "../../assets/img/blog/blog-3.jpg";
import image4 from "../../assets/img/blog/blog-4.jpg";
import image5 from "../../assets/img/blog/blog-5.jpg";
import image6 from "../../assets/img/blog/blog-6.jpg";
import image7 from "../../assets/img/blog/blog-7.jpg";
import image8 from "../../assets/img/blog/blog-8.jpg";
import kerwinImg from "../../assets/img/about/kerwin.jpg";
import cancel from "../../assets/img/cancel.svg";
import estoreImg from "../../assets/img/blog/estore.jpg";
import estoreTshirt from "../../assets/img/blog/estoreTshirt.jpg";
import sisAttendance from "../../assets/img/blog/sisAttendance.jpg";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen1, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);
  const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalNetflixClone() {
    setIsOpen(!isOpen1);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalMeme() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalHTMLCSS() {
    setIsOpen4(!isOpen4);
  }
  function toggleModalLinkwi() {
    setIsOpen5(!isOpen5);
  }
  function toggleModalHR() {
    setIsOpen6(!isOpen6);
  }
  function toggleModalCheckin() {
    setIsOpen7(!isOpen7);
  }
  function toggleModalSIS() {
    setIsOpen8(!isOpen8);
  }
  function toggleModalEcom() {
    setIsOpen9(!isOpen9);
  }

  return (
    <>
      <div className="row">
        {/* Start .col for blog-1 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalTwo}>
            <div className="blog-img">
              <img src={image1} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">04/Apr/2023 - by Kerwin THompson</div>
              <h6>
                <a>A Closer Look At My Software Engineering Skill Set</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}

        {/* Start .col for blog-2 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalNetflixClone}>
            <div className="blog-img">
              <img src={image2} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">06/Apr/2023 - by Kerwin THompson</div>
              <h6>
                <a>Netflix UI Clone</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-2 */}

        {/* Start .col for blog-3 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalMeme}>
            <div className="blog-img">
              <img src={image3} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">07/Apr/2023 - by Kerwin THompson</div>
              <h6>
                <a>Meme Sharing App</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-3 */}

        {/* Start .col for blog-4 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalHTMLCSS}>
            <div className="blog-img">
              <img src={image4} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">08/Apr/2023 - by Kerwin THompson</div>
              <h6>
                <a>HTML & CSS</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-5 */}
        {/* Start .col for blog-6 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalLinkwi}>
            <div className="blog-img">
              <img src={image5} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">31/Mar/2023 - by Kerwin THompson</div>
              <h6>
                <a>Linkwi Social Networking App</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-6 */}
        {/* Start .col for blog-7 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalCheckin}>
            <div className="blog-img">
              <img src={image6} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">11/Mar/2023 - by Kerwin THompson</div>
              <h6>
                <a>Checkin TT Taxi App</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-7 */}
        {/* Start .col for blog-8 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalSIS}>
            <div className="blog-img">
              <img src={sisAttendance} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">20/Feb/2023 - by Kerwin THompson</div>
              <h6>
                <a>School Database Management App</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-8 */}
        {/* Start .col for blog-9 */}
        <div
          className="col-md-6 m-15px-tb"
          data-aos="fade-right"
          data-aos-duration="1200"
          data-aos-delay="200"
        >
          <div className="blog-grid" onClick={toggleModalEcom}>
            <div className="blog-img">
              <img src={estoreTshirt} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">10/Jan/2023 - by Kerwin THompson</div>
              <h6>
                <a>Custom T-shirt Clothing Estore</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-9 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-1 */}
      <Modal
        isOpen={isOpen2}
        onRequestClose={toggleModalTwo}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalTwo}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image1} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>My Skillset</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>10 APRIL 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}
                  <div className="blog-img">
                    <img src={estoreImg} alt="blog post"></img>
                  </div>
                  <div className="article-content">
                    <p>
                      I try to be transparent. This blog is available to
                      everyone.
                    </p>
                    <p>
                      The skillset I possess has been tailored to meet the
                      requirements of the tech industry, with a focus on
                      software engineering. The skills and technologies I have
                      acquired are listed below.
                    </p>
                    <h4>CROSS BROWSER COMPOSITION</h4>
                    <blockquote>
                      <p>HTML</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      A range of elements and attributes needed in everyday web
                      development work, up-to-date with industry standards
                    </p>
                    <p className="blockquote-footer">
                      An understanding of fundamental syntax
                    </p>
                    <p className="blockquote-footer">
                      The use of meta tags, favicons, :og tags, and web fonts
                    </p>
                    <p className="blockquote-footer">
                      Experience breaking projects up into smaller tasks and
                      executing them
                    </p>
                    <p className="blockquote-footer">
                      The ability to create reusable components to avoid
                      duplicating code.
                    </p>
                    <blockquote>
                      <p>CSS</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Key concepts and technologies: classes, IDs and elements,
                      positioning, flexbox, grid layout, media queries, work
                      with forms, CSS animations, transformations
                    </p>
                    <p className="blockquote-footer">
                      Experience managing stylesheets according to BEM
                      methodology
                    </p>
                    <p className="blockquote-footer">
                      Knowledge of responsive best practices, creation of
                      cross-browser sites for all popular screen resolutions,
                      use of media queries
                    </p>
                    <p className="blockquote-footer">
                      Key concepts and technologies: classes, IDs and elements,
                      positioning, Flexbox, Grid layout, media queries, work
                      with forms, animations, transformations.
                    </p>
                    <blockquote>
                      <p>JAVASCRIPT</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Deep understanding of the Javascript including the web API
                      and its use in DOM manipulation
                    </p>
                    <p className="blockquote-footer">
                      Familiarity with both ES6+ syntax such as the relationship
                      between constructor functions and class syntax and
                      experience writing production ready programs in
                      Javascript.
                    </p>
                    <blockquote>
                      <p>AND EVEN MORE 😎</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Experience building experiences using variables,
                      conditionals (if statements, ternary operators, etc.),
                      loops and functions
                    </p>
                    <p className="blockquote-footer">
                      Different types and structures of data, the ability to
                      consciously (explicitly and implicitly) work with varying
                      data types
                    </p>
                    <p className="blockquote-footer">
                      Understanding of lexical scope (functional and block),
                      conscious use of closures
                    </p>
                    <p className="blockquote-footer">
                      Knowledge of event listeners and handlers
                    </p>
                    <p className="blockquote-footer">
                      Ability to debug, troubleshoot errors and "catch"
                      exceptions
                    </p>
                    <p className="blockquote-footer">
                      Ways to use “this”, tight binding and context loss
                    </p>
                    <p className="blockquote-footer">
                      OOP paradigm (in JS context: constructor function,
                      prototype, proto ****link, Object.create, .setPrototypeOf,
                      .getPrototypeOf)
                    </p>
                    <p className="blockquote-footer">
                      Writing asynchronous code using callbacks, promises, async
                      / await
                    </p>
                    <p className="blockquote-footer">
                      Single threading, "main thread" and "event loop queue"
                    </p>
                    <p className="blockquote-footer">
                      AJAX, API requests and utilize XMLHttpRequest and using
                      JSON
                    </p>
                    <p className="blockquote-footer">
                      The concept of modules. ES6 modules
                    </p>
                    <blockquote>
                      <p>REACT</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Well rounded understanding of core contemporary web
                      technologies, the difference between traditional static
                      file server websites and single page applications
                    </p>
                    <p className="blockquote-footer">
                      Principles behind this popular framework. Working with
                      React Tools, React Hooks and React Router. Managing React
                      State.
                    </p>
                    <blockquote>
                      <p>GIT INFRASTRUCTURE</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      An understanding of how repositories work: versioning,
                      branches and commits
                    </p>
                    <p className="blockquote-footer"></p>
                    <p className="blockquote-footer">
                      Experience using git in a production environment to
                      collaborate on software features in teams
                    </p>
                    <p className="blockquote-footer">
                      Experience deploying to GitHub pages
                    </p>
                    <p className="blockquote-footer">
                      Interacting with Github through the application and
                      terminal
                    </p>
                    <p className="blockquote-footer">
                      Collaboration with others in project
                    </p>
                    <p className="blockquote-footer">
                      The skill of reading README, creating issues and pull
                      requests.
                    </p>
                    <blockquote>
                      <p>WORKING ENVIRONMENT</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Bash script (create folder, move, modify files)
                    </p>
                    <p className="blockquote-footer">- PowerShell (Windows)</p>
                    <p className="blockquote-footer">
                      How to create a development environment for a new project
                      (npm), and why it's useful
                    </p>
                    <p className="blockquote-footer">
                      Building a project with bundlers like webpack
                    </p>
                    <h3>TOOLS</h3>
                    <blockquote>
                      <p>DESIGN x CODE</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Code with Visual Studio Code
                    </p>
                    <p className="blockquote-footer">
                      Design layouts and visual elements in
                      [Figma.com](http://figma.com/)
                    </p>
                    <p className="blockquote-footer">
                      Working with dev tools inside the browser (Chrome)
                    </p>
                    <p className="blockquote-footer">
                      Working with debugging in the console.
                    </p>
                    <blockquote>
                      <p>BACKEND</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Creating and setting up a server with Node.js
                    </p>
                    <p className="blockquote-footer">
                      Installation and setup of express.js
                    </p>
                    <p className="blockquote-footer">Creating a REST API</p>
                    <p className="blockquote-footer">
                      Setting up JWT Authentication
                    </p>
                    <p className="blockquote-footer">
                      Querying databases (SQL)
                    </p>
                    <p className="blockquote-footer">
                      Web application security configuration
                    </p>
                    <p className="blockquote-footer">Writing automated tests</p>
                    <p className="blockquote-footer">
                      Containerization and deployment of applications with
                      Docker
                    </p>
                    <h3>🚀 PORTFOLIO PROJECTS</h3>
                    <blockquote>
                      <p>LANDING PAGE</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      We’ve analyzed dozens of landing pages and compiled a
                      canonical single page website made of common elements
                    </p>
                    <p className="blockquote-footer">
                      We pay a lot of attention to design. All of our projects
                      have Figma layouts similar to what students will come
                      across in future work
                    </p>
                    <p className="blockquote-footer">
                      While working on this project a student learns concepts of
                      front-end development and interaction with a design layout
                    </p>
                    <blockquote>
                      <p>JAVA-SCRIPT \ REACT APP</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Students build a photo app in Vanilla JavaScript according
                      to a brief
                    </p>
                    <p className="blockquote-footer">
                      They learn to understand the logic behind user interfaces
                      and recreate the app in React
                    </p>
                    <p className="blockquote-footer">
                      This project requires extensive knowledge of JavaScript,
                      React and an ability to connect a website to a server.
                    </p>
                    <blockquote>
                      <p>BACK-END PROJECT</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Students learn Node.js to describe server-side logic and
                      connect it with an interface
                    </p>
                    <p className="blockquote-footer">
                      They render a server to process users’ requests, learn to
                      store user data and make requests to a third-party server.
                    </p>
                    <blockquote>
                      <p>FINAL PROJECT</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Students build a customized project in collaboration with
                      one of our partner companies using the technologies
                      described above.
                    </p>
                    <h3>🤗 SOFT SKILLS</h3>
                    <blockquote>
                      <p>COMMUNICATION</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Formulating a question clearly so that it is answered;
                      <p className="blockquote-footer">
                        Responding correctly to criticism and working on
                        mistakes
                      </p>
                      <p className="blockquote-footer"></p>The ability not only
                      to study, but also to explain what has been learned
                    </p>
                    <blockquote>
                      <p>INDEPENDANCE</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Self-organized, independent and able to problem solve
                    </p>
                    <p className="blockquote-footer">
                      The ability to independently find the answer to a question
                    </p>
                    <p className="blockquote-footer">
                      The ability to ask a question and find the answer (or the
                      right direction to look next)
                    </p>
                    <p className="blockquote-footer">
                      The ability to deconstruct a complex task into a series of
                      simple ones
                    </p>
                    <p className="blockquote-footer">
                      Effective time management and the ability to judge how
                      long a task will take to complete
                    </p>
                    <p className="blockquote-footer">
                      The patience and ability to read through documentation.
                    </p>
                    <blockquote>
                      <p>TEAMWORK</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      The ability to work with someone else's code
                    </p>
                    <p className="blockquote-footer">
                      Work with deadlines and understanding of this concept
                    </p>
                    <p className="blockquote-footer">
                      Accepting client’s feedback and iterating on it with a
                      team
                    </p>
                    <p>
                      The combination of comprehensive training and acquired
                      skills mentioned above has equipped me with a robust and
                      diverse set of hard and soft skills, making me
                      well-prepared for a successful career in the tech
                      industry. With a solid understanding of essential
                      programming languages and frameworks, such as HTML, CSS,
                      JavaScript, React, Git, and Node.js, and experience with
                      tools such as Figma and Docker, I have developed a
                      well-rounded set of technical abilities. Additionally, my
                      expertise in problem-solving, time management,
                      communication, and teamwork demonstrates my capability to
                      thrive in a professional software engineering setting.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">HTML</li>
                    <li href="#">CSS</li>
                    <li href="#">JavaScript</li>
                    <li href="#">React</li>
                    <li href="#">Git</li>
                    <li href="#">Node.js</li>
                    <li href="#">SQL</li>
                    <li href="#">Figma</li>
                    <li href="#">Debugging</li>
                    <li href="#">REST API</li>
                    <li href="#">JWT authentication</li>
                    <li href="#">Automation Testing</li>
                    <li href="#">Docker</li>
                    <li href="#">Frontend</li>
                    <li href="#">Backend</li>
                    <li href="#">Server-Side Logic</li>
                    <li href="#">Problem-Solving</li>
                    <li href="#">Time Management</li>
                    <li href="#">Communication</li>
                    <li href="#">Teamwork.</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-1 */}
      {/* Start Modal for Blog-2 */}
      <Modal
        isOpen={isOpen1}
        onRequestClose={toggleModalNetflixClone}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalNetflixClone}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image2} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2> Netflix UI Clone | </h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>6 APRIL 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>Frontend Development</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Designed and implemented a responsive, user-friendly UI
                      for a Netflix clone app, adapting the layout to various
                      screen resolutions and devices.
                    </p>
                    <p className="blockquote-footer">
                      Developed highly reusable components, adhering to BEM
                      naming conventions and ESlint standards, optimizing code
                      readability and maintainability.
                    </p>
                    <p className="blockquote-footer">
                      Ensured seamless user experience by incorporating
                      efficient error handling and memory management in React
                      components.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">HTML</li>
                    <li href="#">CSS</li>
                    <li href="#">React Libraries</li>
                    <li href="#">Node Package Manager</li>
                    <li href="#">TMDB RESTful API</li>
                    <li href="#">Nginx</li>
                    <li href="#">Certbot</li>
                    <li href="#">Google VM</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-2 */}
      {/* Start Modal for Blog-3 */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalMeme}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalMeme}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image3} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>Meme Sharing App</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>7 APRIL 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>React Full-stack</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Built and maintained a full-stack image sharing
                      application, utilizing Git for version control and
                      ensuring code maintainability with reusable UI components.
                    </p>
                    <p className="blockquote-footer">
                      Created a robust backend server using Node and Express,
                      integrating RESTful API endpoints for seamless data
                      access.
                    </p>
                    <p className="blockquote-footer">
                      Designed a responsive, adaptable UI that catered to
                      various screen resolutions, ensuring optimal user
                      experience across devices.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">HTML</li>
                    <li href="#">CSS</li>
                    <li href="#">React</li>
                    <li href="#">Express</li>
                    <li href="#">NodeJS</li>
                    <li href="#">Restful API</li>
                    <li href="#">MongoDB</li>
                    <li href="#">Node Package Manager</li>
                    <li href="#">Nginx</li>
                    <li href="#">Certbot</li>
                    <li href="#">Google VM</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-3 */}

      {/* Start Modal for Blog-4 */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalHTMLCSS}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalHTMLCSS}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image4} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>HTML & CSS Layouts</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>7 APRIL 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>Frontend Development</p>
                    </blockquote>
                    <p className="blockquote-footer">
                      Developed responsive, visually appealing websites using
                      modern HTML, CSS flexbox, and grid techniques, catering to
                      a variety of screen resolutions.
                    </p>
                    <p className="blockquote-footer">
                      Organized CSS classes into modular, reusable components
                      using the Block Element Modifier (BEM) standard for
                      improved code maintenance.
                    </p>
                    <p className="blockquote-footer">
                      Utilized Webpack to streamline deployment and hosting of
                      websites on GitHub Pages.
                    </p>
                    <a
                      href="https://kerwindows.github.io/web_poject_1_responsive/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Website 1
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://kerwindows.github.io/web_project_3/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Website 2
                    </a>{" "}
                    |{" "}
                    <a
                      href="https://kerwindows.github.io/web_project_2/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Website 2
                    </a>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">HTML</li>
                    <li href="#">CSS flexbox and grid</li>
                    <li href="#">Webpack</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-4 */}

      {/* Start Modal for Blog-5 */}
      <Modal
        isOpen={isOpen5}
        onRequestClose={toggleModalLinkwi}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalLinkwi}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image5} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>LinkWi Social Networking App</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>31 MAR 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>Full-stack Development</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Spearheaded the development and launch of an NFC-enabled
                      web app, overseeing design, functionality, and payment
                      gateway integration.
                    </p>
                    <p className="blockquote-footer">
                      Revamped the tech stack with React and NodeJS, improving
                      authentication and security features for an enhanced user
                      experience.
                    </p>
                    <p className="blockquote-footer">
                      Pioneered the implementation of PHP vCard Library for
                      contact downloads, streamlining the user journey.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">HTML</li>
                    <li href="#">CSS</li>
                    <li href="#">Bootstrap</li>
                    <li href="#">PHP</li>
                    <li href="#">JavaScript</li>
                    <li href="#">MySQL</li>
                    <li href="#">NFC</li>
                    <li href="#">QR Codes</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-5 */}
      {/* Start Modal for Blog-6 */}
      <Modal
        isOpen={isOpen6}
        onRequestClose={toggleModalHR}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalHR}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image6} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>HR Management App</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>26 MAR 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>Full-stack Development</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Collaborated in the design and implementation of an
                      intuitive admin dashboard, including KPI statistics and an
                      agenda boardroom page.
                    </p>
                    <p className="blockquote-footer">
                      Developed a comprehensive shift management system and
                      worked closely with the project manager for a tailored
                      customer experience.
                    </p>
                    <p className="blockquote-footer">
                      Implemented role management, user authentication, and
                      authorization for secure access control.
                    </p>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">HTML</li>
                    <li href="#">CSS</li>
                    <li href="#">Bootstrap</li>
                    <li href="#">PHP</li>
                    <li href="#">JavaScript</li>
                    <li href="#">PostgreSQL</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-6 */}
      {/* Start Modal for Blog-7 */}
      <Modal
        isOpen={isOpen7}
        onRequestClose={toggleModalCheckin}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalCheckin}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image6} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>Checkin TT Management App</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>11 MAR 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>Full-stack Development</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Built a seamless user experience with a Custom built QR
                      code scanner and an intuitive mobile dashboard, utilizing
                      AJAX for asynchronous programming.
                    </p>
                    <p className="blockquote-footer">
                      Implemented email functionality using PHPMailer, ensuring
                      efficient communication within the application.
                    </p>
                    <p className="blockquote-footer">
                      Designed a robust file architecture for seamless user
                      interaction and optimal site performance.
                    </p>
                    <a
                      href="https://projectone.cyversify.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Website
                    </a>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">PHP</li>
                    <li href="#">JavaScript</li>
                    <li href="#">MySQL</li>
                    <li href="#">jQuery</li>
                    <li href="#">QR</li>
                    <li href="#">Apache server</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-7 */}
      {/* Start Modal for Blog-8 */}
      <Modal
        isOpen={isOpen8}
        onRequestClose={toggleModalSIS}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalSIS}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image7} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>School Database Management App</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>20 FEB 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>Full-stack Development</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Developed an innovative, real-time NFC.RFID scanning
                      system for a school database management app, integrating
                      Telegram API for automatic alerts and bulk messaging.
                    </p>
                    <p className="blockquote-footer">
                      Designed and built a user profile information page, event
                      calendar, and school timetable, streamlining user
                      interaction.
                    </p>
                    <p className="blockquote-footer">
                      Spearheaded code refactoring and database optimization for
                      improved site performance and maintainability.
                    </p>
                    <a
                      href="https://scholastica.cyversify.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Website
                    </a>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">PHP</li>
                    <li href="#">JavaScript</li>
                    <li href="#">jQuery</li>
                    <li href="#">AJAX</li>
                    <li href="#">MySQL</li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-8 */}
      {/* Start Modal for Blog-9 */}
      <Modal
        isOpen={isOpen9}
        onRequestClose={toggleModalEcom}
        contentLabel="My dialog"
        className="custom-modal"
        overlayClassName="custom-overlay"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalEcom}>
            <img src={cancel} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src={image8} alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>Ecommerce Clothing Store</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src={kerwinImg} alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>10 Jan 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

                  <div className="article-content">
                    <blockquote>
                      <p>Full-stack Development</p>
                    </blockquote>

                    <p className="blockquote-footer">
                      Integrated PayPal API for realtime online purchases
                    </p>
                    <p className="blockquote-footer">
                      Dynamic filtering and Sorting
                    </p>
                    <p className="blockquote-footer">
                      Built T-shirt cusomization page
                    </p>
                    <a
                      href="http://estore.kerwindows.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Website
                    </a>
                  </div>
                  {/* End article content */}
                  <ul className="nav tag-cloud">
                    <li href="#">PHP</li>
                    <li href="#">JavaScript</li>
                    <li href="#">MySQL</li>
                    <li href="#">Bootstrap</li>
                    <li href="#">PayPal API </li>
                  </ul>
                  {/* End tag */}
                </article>
                {/* End Article */}

                <div className="contact-form article-comment">
                  <h4>Leave a Reply</h4>
                  <Contact />
                </div>
                {/* End .contact Form */}
              </div>
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for Blog-9 */}
    </>
  );
};

export default News;
