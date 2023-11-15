import React from "react";
import Graph from "./charts/Graph";

const Lifespan = ({ demographicData, countryChoice }) => {
  return (
    <div>
      {" "}
      <div className="lifespan">
        <h1>
          We estimate that you will live until{" "}
          <span>{parseInt(demographicData.worldLifeSpan)}</span> if you were an
          average world citizen. Whereas in <span>{countryChoice}</span> it
          would be until{" "}
          <span>{parseInt(demographicData.countryLifeSpan)}</span> years old.
        </h1>
        <h3>
          <Graph />
        </h3>
      </div>
    </div>
  );
};

export default Lifespan;
