import React from "react";

const Main = ({ form, successPopup }) => {
  return (
    <main className="contact flex-center">
      {form}
      {successPopup}
    </main>
  );
};

export default Main;
