import React, { useState } from "react";
import Modal from "react-modal";
import Contact from "../contact/Contact";

Modal.setAppElement("#root");

const News = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
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
              <img src={`img/blog/blog-2.jpg`} alt="blog post"></img>
            </div>
            <div className="blog-info">
              <div className="meta">04/Apr/2023 - by Kewin THompson</div>
              <h6>
                <a>A Closer Look At My Software Engineering Skill Set</a>
              </h6>
            </div>
          </div>
        </div>
        {/* End .col for blog-1 */}
      </div>
      {/* End .row */}

      {/* Start Modal for Blog-2 */}
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
            <img src="/img/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="scrollable">
              <div className="blog-grid">
                <div className="blog-img">
                  <img src="img/blog/blog-2.jpg" alt="blog post"></img>
                </div>
                {/* End blog-img */}
                <article className="article">
                  <div className="article-title">
                    <h2>My Skillset</h2>
                    <div className="media">
                      <div className="avatar">
                        <img src="img/testimonial/team-2.jpg" alt="thumbnail" />
                      </div>
                      <div className="media-body">
                        <label>BY KERWIN THOMPSON</label>
                        <span>10 APRIL 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* End .article-title */}

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
      {/* End  Modal for Blog-2 */}
    </>
  );
};

export default News;
