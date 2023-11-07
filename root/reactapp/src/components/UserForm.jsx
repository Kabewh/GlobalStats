import React from "react";

const UserForm = (props) => {
  return (
    <>
      <div className="question">
        <h1>What's my place in the world population? How long will I live?</h1>
        <p>
          The journey of your life in numbers and dates! <br />
          Please enter your date of birth, country of birth and sex at birth:
        </p>
        <form onSubmit={props.handleSubmit}>
          <input
            className="day"
            required
            value={props.dayChoice}
            onChange={props.handleDay}
            type="text"
            name="name"
            placeholder="Day"
          />
          <select
            className="month"
            required
            value={props.monthChoice}
            onChange={props.handleMonth}
          >
            {props.months.map((month, index) => (
              <option key={index} value={index + 1}>
                {month}
              </option>
            ))}
          </select>
          <input
            className="year"
            required
            value={props.yearChoice}
            onChange={props.handleYear}
            type="text"
            name="name"
            placeholder="Year"
          />
          <select
            className="country"
            required
            value={props.countryChoice}
            onChange={props.handleCountry}
          >
            {Array.isArray(props.demographicData.countries) ? (
              props.demographicData.countries.map((country, countrykey) => (
                <option key={countrykey} value={country}>
                  {country}
                </option>
              ))
            ) : (
              <option> Error</option>
            )}
          </select>
          <div className="toggle">
            <button
              type="button"
              id="option1Btn"
              className={props.selected === "male" ? "selected" : "notSelected"}
              onClick={() => props.handleToggleGender("male")}
            >
              Male
            </button>
            <button
              type="button"
              className={
                props.selected === "female" ? "selected" : "notSelected"
              }
              onClick={() => props.handleToggleGender("female")}
            >
              Female
            </button>
          </div>
          <button className="goBtn" type="submit">
            go
          </button>
        </form>
      </div>
    </>
  );
};

export default UserForm;
