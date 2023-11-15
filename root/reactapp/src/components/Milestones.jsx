import React from "react";
import Timeline from "./Timeline";

const Milestones = (props) => {
  return (
    <>
      <div className="milestones">
        <h1>What are the big milestones to expect in your life?</h1>
        <h1>
          Your next milestone is <span>{props.billionMilestones.date[3]}</span>{" "}
          when you'll be the <span>{props.billionMilestone}</span> person to be
          alive in the world.
        </h1>
      </div>
      <ul className="projections">
        <Timeline
          dayChoice={props.dayChoice}
          abbrMonth={props.abbrMonth}
          yearChoice={props.yearChoice}
          countryChoice={props.countryChoice}
          billionMilestones={props.billionMilestones}
          eighteenthBirthday={props.eighteenthBirthday}
          demographicData={props.demographicData}
        />
      </ul>
    </>
  );
};

export default Milestones;
