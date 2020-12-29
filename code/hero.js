import React from 'react';

const Hero = ({ _body }) => (
  <section class="hero is-align-self-center">
    <div class="hero-body">
      <div class="container">
        { _body }
      </div>
    </div>
  </section>
);

export default Hero;