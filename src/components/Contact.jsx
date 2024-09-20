import "./Contact.css";

function Contact() {
  return (
    <div className="baground">
      <div className="container">
        <h1 className="letsWork">
          Lets <br />
          Work <br />
          Together!
        </h1>
        <h1 className="coma">❞</h1>
        <h5 className="h5Description">
          One of my favorite things about developing web applications is the
          variety in projects. So if you want to collaborate or have some work
          for me , get in touch and tell me what you have in mind. — I can’t
          wait to hear all about it!
        </h5>
        <br />
        <br />
        <div className="contactDetails">
          <div className="icons2">
            <a target="_blank" href="https://github.com/akdon1198">
              <img
                className="icon2"
                src="https://icones.pro/wp-content/uploads/2021/06/icone-github-verte.png"
                alt="gitHub"
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/akash-gupta-81781a27a/"
            >
              <img
                className="icon2"
                src="https://icones.pro/wp-content/uploads/2021/03/icone-linkedin-ronde-vert.png"
                alt="linkedIn"
              />
            </a>
          </div>
        </div>
        <div className="phoneAndEmail">
          <div className="iconWithText">
            <img className="icon2" src="./icons/phone.png" alt="gitHub" />
            <p className="phoneEmail"> 8570906112</p>
          </div>
          <div className="iconWithText">
            <img className="icon2" src="./icons/email.png" alt="gitHub" />
            <p className="phoneEmail"> akashgupta85709@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
