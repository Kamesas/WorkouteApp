import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import dayJS from "dayjs";

const App: React.FC = () => {
  const [day, setDay] = useState<any>(dayJS());
  const [visibilityDatePicker, setVisibilityDatePicker] = useState(false);

  const renderMonth = (m: any) => {
    const mondayOfNowWeek = m
      .clone()
      .startOf("month")
      .day(1);

    const lastDayOfWeekInNowMonth = m
      .clone()
      .endOf("month")
      .day(7)
      .format("DD MM YYYY");

    let week = [];

    let i = 0;
    do {
      week.push(mondayOfNowWeek.clone().add(i, "day"));
      i++;
    } while (
      week[week.length - 1].format("DD MM YYYY") !== lastDayOfWeekInNowMonth
    );

    return week.map((day, i) => {
      return (
        <div
          className="day"
          key={day.format("DD MM YYYY")}
          onClick={() => console.log(day.format("DD-MM-YYYY"))}
        >
          {day.date()}
        </div>
      );
    });
  };

  return (
    <div className="App">
      <input type="text" onFocus={() => setVisibilityDatePicker(true)} />

      {visibilityDatePicker && (
        <div
          className="datePicker"
          tabIndex={0}
          onBlur={() => setVisibilityDatePicker(false)}
        >
          <button onClick={() => setDay(day.subtract(1, "month"))}>
            minus
          </button>
          <div>{day.format("MMMM")}</div>
          <button onClick={() => setDay(day.add(1, "month"))}>add</button>
          <div className="month">{renderMonth(day)}</div>
        </div>
      )}
    </div>
  );
};

export default App;
