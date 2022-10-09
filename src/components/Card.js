import React from "react";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import Wrapper from "./Style-Wrappers/Card";

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "john_doe"}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location || "Area 51"}
        </p>
        <a href={`https://${blog}`}>
          <MdLink /> {blog}
        </a>
      </div>
    </Wrapper>
  );
};

export default Card;
