import "../componentStyling/AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about-me-wrapper" id="about-me">
      <div className="photo-container">
        <img src="/images/Render-headshot2.jpeg" />
      </div>
      <div className="about-me-container">
        <h1 className="about-me-heading">Amaury Silverio</h1>
        <div className="about-me-text">
          <p>
            Hello World! Before entering the tech industry, I served as a social
            worker in the Greater Boston area, helping adults with developmental
            disabilities find and retain employment. My work included
            collaborating with teams to strategize, organize, implement, and
            troubleshoot issues for our clients in a time-sensitive manner. My
            approach to this role prioritized inclusivity and accessibility,
            which I aim to bring to my new role as a software engineer. I'm
            eager to bring my background and expertise to your company, building
            products that make a positive impact in people's lives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
