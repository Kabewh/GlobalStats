import React from 'react'

const YoungOrOld = ({demographicData, region, handleToggleRegion, testBool, countryChoice}) => {
  return (
    <div>
        <h3>
    Do you think you belong to the young or old? You are the{" "}
    <span>{demographicData.youngPersonCount.toLocaleString()}</span>{" "}
    person alive on the planet. This means that you are{" "}
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
  </div>
  )
}

export default YoungOrOld