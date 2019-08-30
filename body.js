const body = function(){


  const render = function(){
    return  `<div class="first-page" id="firstpage">
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
        <a href="#bio" class="scroll-reminder"><h4>SCROLL DOWN</h4></a>
          
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
                  deserunt mollit anim id est laborum. 
                  Eleifend mi in nulla posuere. Eros in cursus turpis massa. Porttitor lacus luctus accumsan tortor posuere ac.
                  Lorem ipsum dolor sit amet consectetur. Cras ornare arcu dui vivamus arcu felis bibendum ut. 
                  Consectetur libero id faucibus nisl tincidunt eget nullam non nisi. Velit scelerisque in dictum non consectetur. 
                  Tristique nulla aliquet enim tortor at auctor urna. Egestas purus viverra accumsan in nisl nisi. 
                  Pellentesque dignissim enim sit amet venenatis urna cursus. Gravida arcu ac tortor dignissim convallis aenean et. 
                  Viverra vitae congue eu consequat. Enim nulla aliquet porttitor lacus luctus accumsan. 
                  Commodo elit at imperdiet dui accumsan sit amet nulla. Nisi scelerisque eu ultrices vitae auctor. 
                  Dictumst quisque sagittis purus sit. Ullamcorper morbi tincidunt ornare massa eget egestas.

                  Arcu cursus euismod quis viverra nibh cras. Ultrices dui sapien eget mi proin sed libero. Ut enim blandit volutpat maecenas volutpat blandit. 
                  Ac odio tempor orci dapibus ultrices in iaculis nunc. Sit amet purus gravida quis blandit turpis. 
                  Semper feugiat nibh sed pulvinar proin. Vitae semper quis lectus nulla at volutpat diam. 
                  Tincidunt arcu non sodales neque sodales ut. Varius sit amet mattis vulputate enim. 
                  Faucibus purus in massa tempor nec feugiat nisl pretium. 
                  Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Sed sed risus pretium quam.
                  </p>
              </section>
            </div>
                  
        </section>
        <section class="body-section" id="portfolio">
            <h1>PORTFOLIO</h1>
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
                <h5><a href="https://thinkful-ei-gecko.github.io/kevin-joey-quiz-app/">click here to view repo</a></h5>
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
              <h5><a href="#firstpage">scroll up</a></h5>
            </div>  
        </section>

        
</div> 
`;
  };
  const appendBody = function(){
    $('body').append(render());
  };
  return {
    render,
    appendBody
  };
}();