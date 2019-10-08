import React from "react";

import wdhbLogo from "../media/WDHB_Logo.svg";

import "../styles/_landing.scss";

const LandingPage = ({ history }) => {
  const acceptTerms = () => {
    localStorage.setItem("tcAccepted", true);
    history.push("/navigate");
  };

  return (
    <main className="landing">
      <header className="landing__header">
        <img
          src={wdhbLogo}
          alt="WDHB Logo"
          className="landing__logo wdhb-logo"
        />
      </header>

      <div className="landing__terms">
        <h3 className="heading-tertiary landing__terms-and-conditions">
          Terms and Conditions
        </h3>

        <div className="landing__content">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          velit, cumque officiis expedita nostrum et harum tempora. Velit
          corporis eligendi voluptates, ipsa, necessitatibus expedita facere
          reiciendis provident cum dolore aut. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Dignissimos velit, cumque officiis
          expedita nostrum et harum tempora. Velit corporis eligendi voluptates,
          ipsa, necessitatibus expedita facere reiciendis provident cum dolore
          aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos velit, cumque officiis expedita nostrum et harum tempora.
          Velit corporis eligendi voluptates, ipsa, necessitatibus expedita
          facere reiciendis provident cum dolore aut. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Dignissimos velit, cumque officiis
          expedita nostrum et harum tempora. Velit corporis eligendi voluptates,
          ipsa, necessitatibus expedita facere reiciendis provident cum dolore
          aut. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos velit, cumque officiis expedita nostrum et harum tempora.
          Velit corporis eligendi voluptates, ipsa, necessitatibus expedita
          facere reiciendis provident cum dolore aut. Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Dignissimos velit, cumque officiis
          expedita nostrum et harum tempora. Velit corporis eligendi voluptates,
          ipsa, necessitatibus expedita facere reiciendis provident cum dolore
          aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          dolor beatae sequi amet quisquam. Mollitia eos praesentium quae quos
          nihil? Corrupti vero aliquid laudantium eligendi est quia alias
          molestias dolorum. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Dignissimos velit, cumque officiis expedita nostrum et harum
          tempora. Velit corporis eligendi voluptates, ipsa, necessitatibus
          expedita facere reiciendis provident cum dolore aut. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Facilis dolor beatae sequi amet
          quisquam. Mollitia eos praesentium quae quos nihil? Corrupti vero
          aliquid laudantium eligendi est quia alias molestias dolorum. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Dignissimos velit,
          cumque officiis expedita nostrum et harum tempora. Velit corporis
          eligendi voluptates, ipsa, necessitatibus expedita facere reiciendis
          provident cum dolore aut. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Facilis dolor beatae sequi amet quisquam. Mollitia
          eos praesentium quae quos nihil? Corrupti vero aliquid laudantium
          eligendi est quia alias molestias dolorum.
        </div>

        <div className="landing__actions">
          <span className="landing__accept" onClick={acceptTerms}>
            Accept
          </span>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
