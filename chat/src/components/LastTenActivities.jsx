import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function LastTenActivities(props) {
  const [isOpen, SetIsOpen] = useState(false);
  const [isRun, SetIsRun] = useState(true);

  return (
    <div className="activities">
      <hr></hr>
      <table className="table2">
        <tbody>
          <tr>
            <td className="TD1">{props.type}</td>
            <td className="TD2">
              {props.distance}
              {props.unit}
            </td>
            <td className="TD3">{props.startTime}</td>

            <td className="TD4">
            {/* <Link to="/blog"> */}
              <button
                class="button-12"
                role="button"
                onClick={() => {
                  SetIsOpen(!isOpen)
                  console.log("hi")
              
                }}
              >
                more...
              </button>
              {/* </Link> */}
            </td>
          </tr>
        </tbody>
      </table>

      {isOpen && (
        <table className="table2">
          <tbody>
            <tr>
              <td>
                <h2 className="h2Training">{props.name}</h2>
                {props.type === "Workout" && (
                  <>
                    <h5>
                      {props.unitType}: {props.movingTime}{" "}
                    </h5>
                  </>
                )}

                {props.type === "Run" && (
                  <>
                    <h5>Avg pace {props.pace} /km</h5>
                    <h5>Max Speed {props.MaxSpeed} /km</h5>
                    <h5>Moving Time {props.movingTime}</h5>
                  </>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LastTenActivities;
