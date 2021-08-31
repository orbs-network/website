import React from "react";

const Main = ({ form, socialsChannels }) => {
  return (
    <main className="contact  page-padding-top">
      {socialsChannels}
      {form}
    </main>
  );
};

export default Main;
