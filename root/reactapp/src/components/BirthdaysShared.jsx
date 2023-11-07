import React from "react";

const BirthdaysShared = (props) => {
  return (
    <div>
      <div className="milestones">
        <h1>
          Did you know that you share a birthday with about
          <span>
            {" "}
            {parseInt(
              props.demographicData.estimatedBirths
            ).toLocaleString()}{" "}
          </span>
          people around the world and that approximately
          <span> {props.demographicData.birthsPerHour}</span> people were born
          in the same hour?
        </h1>
      </div>
    </div>
  );
};

export default BirthdaysShared;
