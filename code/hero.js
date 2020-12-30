import React from 'react';

const Hero = ({ _body }) => (
  <section className="hero is-align-self-center">
    <div className="hero-body">
      <div className="container">
        { _body }
      </div>
    </div>
  </section>
);

export default Hero;