import React from "react";
import { GithubContext } from "../context/context";
import Wrapper from "./Style-Wrappers/Followers";

const Followers = () => {
  const { followers } = React.useContext(GithubContext);

  return (
    <Wrapper>
      <div className="followers">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article key={index}>
              <img src={img} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Followers;
