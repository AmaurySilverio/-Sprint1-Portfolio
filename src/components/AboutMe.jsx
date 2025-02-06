import "../componentStyling/AboutMe.css";
const AboutMe = () => {
  return (
    <div className="about-me-wrapper" id="about-me">
      <div className="photo-container">
        <img src="/images/Render-headshot2.jpeg" />
      </div>
      <div className="about-me-container">
        <h3 className="about-me-heading">West Philadelphia Born and Raised</h3>
        <div className="about-me-text">
          <p>
            On the playground is where I spent most of my days Chillin' out,
            maxin', relaxin' all cool And all shootin' some b-ball outside of
            the school When a couple of guys who were up to no good Started
            makin' trouble in my neighborhood I got in one little fight and my
            mom got scared And said "You're movin' with your auntie and uncle in
            Bel-Air" I begged and pleaded with her day after day But she packed
            my suitcase and sent me on my way She gave me a kiss and then she
            gave me my ticket I put my Walkman on and said "I might as well kick
            it" First class, yo, this is bad Drinking orange juice out of a
            champagne glass Is this what the people of Bel-Air living like?
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
