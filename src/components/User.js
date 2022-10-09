import React from "react";
import Card from "./Card";
import Followers from "./Followers";
import Wrapper from "./Style-Wrappers/User";

const User = () => {
  return (
    <section className="section">
      <Wrapper className="section-center">
        <Card />
        <Followers />
      </Wrapper>
    </section>
  );
};

export default User;
