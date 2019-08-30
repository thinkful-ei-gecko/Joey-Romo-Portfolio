const body = function(){


  const render = function(){
    return  `<div class="first-page">
    <nav>
      <ul>
        <li><a href="#bio" class="bio">BIO</a></li>
        <li><a href="#portfolio" class="portfolio">PORTFOLIO</a></li>
        <li><a href="#contact" class="contact">CONTACT</a></li>
        <li><a href="https://github.com/joeyjr95">GITHUB</a></li>
      </ul>
    </nav> 
      <div class="homepage-info">
        <h1> Joey Romo </h1>
        <h2>{ Web Developer }</h2>
        <h3>...In Training</h3>
        <div class="scroll-reminder"><h4>SCROLL DOWN</h4></div>
          
  </div>
      </div>

    
  </div>
        <section class="body-section"id="bio">
            <h1>BIO</h1>
            <div class=bio-body>
              <section class="about-me">
                <h3>About Me</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                  ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                  in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
                  sint occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.</p>
              </section>
            </div>
                  
        </section>
        <section class="body-section" id="portfolio">
            <h1>Portfolio</h1>
          <div class="portfolio-body">
              <h3>Here's my Projects so far</h3>
             <section class="quiz-app-main"> 
               <h4>Quiz App</h4>
               <div class="quiz-app-body">
                <p>
                  Here's the first web app I've ever worked on. It was a joint project with Kevin Wei. This project uses HTML, CSS, Javascript, and Jquery to build a quiz based on Dungeons & Dragons to test the user on their D&D knowledge. Try it out below or click the link to open it!
                </p>
                <iframe id="quiz-app-iframe"
                    title="quiz app"
                    src="https://thinkful-ei-gecko.github.io/kevin-joey-quiz-app/">
                </iframe>
                <h5><a href="https://thinkful-ei-gecko.github.io/kevin-joey-quiz-app/">click here to view project</a></h5>
               </div>

            
            </section>
          </div>
        
        <section class="body-section" id="contact">
            <h1>CONTACT INFO</h1>
            <div class="contact-body">
              <p>If you leave me a message or email I'll get back to you within 24-48 hours</p>
              <ul id="contact-info-list">
                <li >EMAIL: <a HREF="mailto:joeyjr95@gmail.com">  joeyjr95@gmail.com</a></li>
                <li>MOBILE: <a href="tel:+17036080673">  703-608-0673</a></li>
              </ul>
            </div>  
        </section>

        
</div> `;
  };
  const appendBody = function(){
    $('body').append(render());
  };
  return {
    render,
    appendBody
  };
}();