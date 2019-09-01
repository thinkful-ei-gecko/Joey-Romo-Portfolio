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
                <div class= "about-me-essay">
                  <p> Currently I am a 23 year old Full-Stack web development student at Thinkful from Washington DC. As a developer in training, I love learning different code everyday and eventually putting it together to make projects. I have an inescapable attention to detail, which sometimes means spending more time than I should adjusting pixels in CSS. I enjoy building and designing things, which brought me to Thinkful and programming in general. </p>
                  <p> Before I started my dive into programming I was a business administration student at Flagler College, but realized business administration wasn’t for me. Besides being a student, I’ve been a dairy farmer in New Zealand, tradie in Australia, and a valet in DC. </p>
                  <p> Other than programming, I enjoy hiking, photography, binging Twin Peaks on Netflix, watching the Washington Wizards disappoint me every year,  and cheap beer.
                  </p>
                </div>
              </section>
            </div>
                  
        </section>
        <section class="body-section" id="portfolio">
            <h1>PORTFOLIO</h1>
          
            <h3>Here's my Projects so far</h3>

            <div class="portfolio-body">
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
                <h5><a href="https://github.com/thinkful-ei-gecko/kevin-joey-quiz-app">click here to view repo</a></h5>
               </div>
            </section>


            <section class="bookmark-app-main"> 
              <h4>Bookmark App</h4>
              <div class="bookmark-app-body">
               <p>
                 Here's the first solo web app I've ever worked on. This project is a bookmark app created to save websites and rate them all on one page. This app uses HTML, CSS, jQuery, and Thinkful's bookmark API in order to run. The point of this project was to get used to using API's.                  
                </p>
               <iframe id="bookmark-app-iframe"
                   title="bookmark app"
                   src="https://thinkful-ei-gecko.github.io/Joey-Bookmark-App/">
               </iframe>
               <h5><a href="https://thinkful-ei-gecko.github.io/Joey-Bookmark-App/">click here to view project</a></h5>
               <h5><a href="https://github.com/thinkful-ei-gecko/Joey-Bookmark-App">click here to view repo</a></h5>
              </div>
           </section>
          </div>
          </section>
        
        <section class="body-section" id="contact">
            <h1>CONTACT INFO</h1>
            <div class="contact-body">
              <p>If you leave me a message or email I'll get back to you within 24-48 hours</p>
              <ul id="contact-info-list">
                <li >EMAIL: <a HREF="mailto:joeyjr95@gmail.com">  joeyjr95@gmail.com</a></li>
                <li>MOBILE: <a href="tel:+17036080673">  703-608-0673</a></li>
              </ul>
              <h5><a href="#firstpage">SCROLL UP</a></h5>
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