import React from 'react'

function Main({ nav, hero, how, prizes, what, rules, challengeFooter }) {
  return (
    <div className="challenge page">
      {nav}
      {hero}
      {how}
      {prizes}
      {what}
      {rules}
      {challengeFooter}
    </div>
  );
}

export default Main
