import React from "react";

const YoungOrOld = ({
  demographicData,
  region,
  handleToggleRegion,
  testBool,
  countryChoice,
  selected,
}) => {
  return (
    <div className="youngOld">
      <h3>
        Do you think you belong to the young or old? You are the{" "}
        <span>{demographicData.youngPersonCount.toLocaleString()}</span> person
        alive on the planet. This means that you are{" "}
        <span>
          older than {demographicData.olderPercentageWorld.toFixed(2)}%
        </span>{" "}
        of the world's population and{" "}
        <span>
          older than {demographicData.youngerRomania.toLocaleString()}
        </span>{" "}
        people in Romania.
      </h3>
      <div className="toggleRegion">
        <button
          type="button"
          id="option1Btn"
          className={region === "World" ? "selected" : "notSelected"}
          onClick={() => handleToggleRegion("World")}
        >
          World
        </button>
        <button
          type="button"
          className={testBool === true ? "selected" : "notSelected"}
          onClick={() => handleToggleRegion({ region })}
        >
          {countryChoice}
        </button>
      </div>
      <div className="younger-older-you">
        <div className="younger-you">
          <div className="younger-num">
            {testBool === true
              ? demographicData.youngerRomania.toLocaleString()
              : demographicData.youngPersonCount.toLocaleString()}
          </div>
          <p>
            People younger than you (
            {testBool === true
              ? demographicData.olderPercentageRomania.toFixed(2)
              : demographicData.olderPercentageWorld.toFixed(2)}
            %)
          </p>
        </div>
        <div className="citizen">
          <div className="citizen-icon">
            {selected === "male" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5em"
                viewBox="0 0 320 512"
              >
                <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="5em"
                viewBox="0 0 320 512"
              >
                <path d="M160 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM88 384H70.2c-10.9 0-18.6-10.7-15.2-21.1L93.3 248.1 59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l53.6-89.2c20.3-33.7 56.7-54.3 96-54.3h11.6c39.3 0 75.7 20.6 96 54.3l53.6 89.2c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9l-33.9-56.3L265 362.9c3.5 10.4-4.3 21.1-15.2 21.1H232v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H152v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z" />
              </svg>
            )}
          </div>
          You as a citizen of {testBool === true ? countryChoice : "World"}
        </div>
        <div className="older-you">
          <div className="older-num">
            {testBool === true
              ? demographicData.olderRomania.toLocaleString()
              : demographicData.oldPersonCount.toLocaleString()}
          </div>
          <p>
            People older than you (
            {testBool === true
              ? demographicData.youngerPercentageRomania.toFixed(2)
              : demographicData.youngerPercentageWorld.toFixed(2)}
            %)
          </p>
        </div>
      </div>
    </div>
  );
};

export default YoungOrOld;
