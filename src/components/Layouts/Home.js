import React from "react";
import Tracks from "../Tracks/Tracks";
import Search from "../Tracks/Search";

const Home = () => {
  return (
    <React.Fragment>
      <Search />

      <Tracks />
    </React.Fragment>
  );
};

export default Home;
