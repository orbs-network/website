import React from "react";
import SectionGrid from "../../shared/SectionGrid";
import SectionTitle from "../../shared/SectionTitle";
function Slider({ title, slider, btns }) {
  return (
    <div className="ton-vote-slider">
      <SectionGrid>
        <SectionTitle title={title} />
        {slider}
        <div className="ton-vote-slider-btns">{btns}</div>
      </SectionGrid>
    </div>
  );
}

export default Slider;
