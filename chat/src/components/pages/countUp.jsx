import { useState, useEffect } from "react";
import reactLogo2 from "../assets/thatdamhill.png";
import reactLogo3 from "../assets/caution.png";
import Display from "./Display";

export default function Center() {
  // const endTime = new Date("Aug 12, 2024 17:00:00").getTime();
  const startTime = new Date("Aug 13, 2024 17:00:00").getTime();


  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const gap = currentTime - startTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => setcurrentTime(new Date().getTime()), 1000);
    // refreshEmployeeList();
  }, [currentTime]); // 11:30:55

  return (
    <div>
      <section className="content_section">
        <div className="container2">
          <div className="item item-1"></div>
          <div className="item item-2">
            <img src={reactLogo2} className="mainlogo" style={{ width: 350 }}/>
          </div>
          <div className="item item-3"></div>
          <div className="item item-4">
            <img src={reactLogo3} className="mainlogo2" />
            <h3>September 21, 2024</h3>
            <h1 className="header">24hr RACE</h1>
            <h1 className="header2">starts in</h1>

            <center>
              <Display
                days={remainingDays}
                hours={remainingHours}
                minutes={remainingMinutes}
                seconds={remainingSeconds}
              />
            </center>
          </div>
          <div className="item item-5" id="chart"></div>
        </div>
      </section>
    </div>
  );
}
