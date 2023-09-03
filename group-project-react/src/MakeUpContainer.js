import React from "react";
import MakeUpList from "./MakeUpList";
import MakeUpCard from "./MakeUpCard";
import Search from "./Search";

function MakeUpContainer() {
  return (
    <main>
      <MakeUpCard />
      <MakeUpList />
      <Search />
    </main>
  );
}

export default MakeUpContainer;