import React from 'react'

const Timeline = ({dayChoice, abbrMonth, yearChoice, countryChoice, billionMilestones, eighteenthBirthday, demographicData}) => {
  return (
    <div>
        <h3>Timeline (Projections)</h3>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">
                    {dayChoice + "/" + abbrMonth + "/" + yearChoice}
                  </h2>
                </div>
                <div className="message-date">
                  <h2>Your birth!</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[0]}</h2>
                </div>
                <div className="message-date">
                  <h2>1 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[1]}</h2>
                </div>
                <div className="message-date">
                  <h2>2 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">
                    {dayChoice +
                      "/" +
                      abbrMonth +
                      "/" +
                      eighteenthBirthday.toString()}
                  </h2>
                </div>
                <div className="message-date">
                  <h2>Your 18th birthday!</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[2]}</h2>
                </div>
                <div className="message-date">
                  <h2>3 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[3]}</h2>
                </div>
                <div className="message-date">
                  <h2>4 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[4]}</h2>
                </div>
                <div className="message-date">
                  <h2>5 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[5]}</h2>
                </div>
                <div className="message-date">
                  <h2>6 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[6]}</h2>
                </div>
                <div className="message-date">
                  <h2>7 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[7]}</h2>
                </div>
                <div className="message-date">
                  <h2>8 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">
                    {demographicData.worldLifeSpanDate}
                  </h2>
                </div>
                <div className="message-date">
                  <h2>Your projected life expectancy in World</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[8]}</h2>
                </div>
                <div className="message-date">
                  <h2>9 billionth person</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">
                    {demographicData.countryLifeSpanDate}
                  </h2>
                </div>
                <div className="message-date">
                  <h2>Your projected life expectancy in {countryChoice}</h2>
                </div>
              </li>
              <li className="projection">
                <div className="check-line"></div>
                <div className="date">
                  <h2 className="day-date">{billionMilestones.date[9]}</h2>
                </div>
                <div className="message-date">
                  <h2>10 billionth person</h2>
                </div>
              </li>
    </div>
  )
}

export default Timeline