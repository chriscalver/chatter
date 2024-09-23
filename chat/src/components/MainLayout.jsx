import { useState, useEffect } from "react";
import reactLogo2 from "../thatdamhill.png";
// import reactLogo3 from "../caution.png";
import Display from "./Display";
import SupportEngine from "../SupportEngine";
// import data from process.env.PUBLIC_URL + 'data.json';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

var tempDistance = "0";

const json = await fetch("data.json").then((r) => r.json());
const jsonDistance = json[2].name;
// console.log(jsonDistance);
// console.log(json[2].name);

async function myStopFunction() {
  const json2 = await fetch("data.json").then((r) => r.json());
  const jsonDistance2 = json2[2].name;
  tempDistance = jsonDistance2;
  // setJsonData(jsonDistance2);
  //  console.log(tempDistance);  
//  return jsonDistance2;
}

export default function MainLayout() {
  //Center
  const [currentTime, setcurrentTime] = useState(new Date().getTime());
  const [eventMessage, setEventMessage] = useState("Starts in");
  const [eventStart, setEventStart] = useState(false);
  const [jsonData, setJsonData] = useState(jsonDistance);
  // console.log(jsonData);
  // const myTimeout = setTimeout(myStopFunction, 10000); 

  const now = new Date().getTime();
  // const raceDate = new Date("Sep 20, 2024 10:54:00").getTime();

  const raceDate = new Date("Sep 21, 2024 08:00:00").getTime();
  var gap = 0;

  // console.log(eventStart);
  if (now >= raceDate) {
    // console.log("countdown");
    gap = currentTime - raceDate;
    if (eventMessage === "Starts in") {
      setEventMessage("Has Started!!!");
      setEventStart(true);
    }
  } else {
    // console.log("countdown");
    gap = raceDate - currentTime;
  }

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
    setTimeout(myStopFunction, 5000);

     setJsonData(tempDistance);
      //  console.log(jsonDistance2);

    // setTimeout(
    // setTimeout(() => setJsonData(
    //   fetch("data.json").then((r) => r.json())
    // ), 5000);
  }, [currentTime]); // 11:30:55

  return (
    <div>
      <SupportEngine />

      <section className="content_section">
        <div className="container2">
          <div className="item item-1"></div>
          <div className="item item-2">
            <img
              src={reactLogo2}
              alt=""
              className="mainlogo"
              style={{ width: 350 }}
            />
          </div>
          <div className="item item-3"></div>
          <div className="item item-4">
            <h1 className="header">24hr RACE</h1>
            <h1 className="header2">{eventMessage}</h1>

            <center>
              <Display
                days={remainingDays}
                hours={remainingHours}
                minutes={remainingMinutes}
                seconds={remainingSeconds}
              />
            </center>

            <center>
              <h1 className="header3">Distance</h1>
              <div style={{ width: 150, height: 150, marginRight: 0 }}>
                <CircularProgressbar
                  // value={YTDpercentage}
                  value={jsonData}
                  // text={`${YTDpercentage.toFixed()}%`}
                  text={jsonData + "kms"}
                  styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "compvared progress"
                    path: {
                      // Path color

                      stroke: "#B1312A",

                      // stroke: `rgba(62, 152, 199, ${YTDpercentage / 100})`,
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "round",
                      // Customize transition animation
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      // Rotate the path
                      //  transform: 'rotate(0.25turn)',
                      transformOrigin: "center center",
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      // Trail color
                      stroke: "#C5A432",
                      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                      strokeLinecap: "butt",
                      // Rotate the trail
                      transform: "rotate(0.25turn)",
                      transformOrigin: "center center",
                    },
                    // Customize the text
                    text: {
                      // Text color
                      fill: "#B1312A",
                      // Text size
                      fontSize: "14px",
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                      fill: "#3e98c7",
                    },
                  }}
                />
              </div>
              <div>
                {/* <img src={reactLogo4} width="100" style={{ marginRight: 30 }}/> */}
              </div>{" "}
            </center>
          </div>
          <div className="item item-5" id="chart"></div>
        </div>
      </section>
    </div>
  );
}
