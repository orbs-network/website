import React from "react";

const Network = ({ first_section, second_section, third_section, _body }) => {
  return (
    <main className="network page">
      <header className="header network-header">{_body}</header>
      <img
        className="network-figure network-figure-left"
        src="/assets/img/network/big-figure-left.png"
      />
      {first_section}
      {second_section}
      {third_section}
    </main>
  );
};

export default Network;
