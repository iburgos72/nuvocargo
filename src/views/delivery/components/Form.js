// vendor
import React, { useState } from 'react';

// components
import Title from 'GeneralComponents/Title';
import SelectInput from 'GeneralComponents/SelectInput';

const Form = (props) => {
  const platforms = ["Alpha", "Beta", "Gamma"]
  const drones = ["DJI-001Q", "DJI-002Q", "DJI-003Q", "DJI-004Q"]

  const [id, setId] = useState("");
  const [errId, setErrId] = useState("");
  const [technician, setTechnician] = useState("");
  const [errTechnician, setErrTechnician] = useState("");
  const [platform, setPlatform] = useState(platforms[0]);
  const [drone, setDrone] = useState(drones[0]);

  const validateData = () => {
    let errors = false;

    if (id === "") {
      errors = true;
      setErrId("Empty value")
    } else {
      setErrId("")
    }

    if (technician === "") {
      errors = true;
      setErrTechnician("Empty value")
    } else {
      setErrTechnician("")
    }

    if(errors) return;

    props.doneFunc({
        id,
        technician,
        platform,
        drone,
    })
    props.cancelFunc()
  }

  return (
    <div className="flex column">
      <div className="margin-vertical-30">
        <div className="flex row justify-content-around">
          <div className="flex column margin-vertical-10">
            <div className="flex row justify-content-between">
              <span className="input-description">
                Order ID
              </span>
              {
                errId !== "" &&
                <span className="input-error">
                  {errId}
                </span>
              }
            </div>
            <input
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>
          <div className="flex column margin-vertical-10">
            <div className="flex row justify-content-between">
              <span className="input-description">
                Technician
              </span>
              {
                errTechnician !== "" &&
                <span className="input-error">
                  {errTechnician}
                </span>
              }
            </div>
            <input
              name="technician"
              value={technician}
              onChange={(e) => setTechnician(e.target.value)}
            />
          </div>
        </div>
        <div className="flex row justify-content-around">
          <SelectInput
            name={"platform"}
            label={"Platform"}
            stateFunction={setPlatform}
            options={platforms}
          />
          <SelectInput
            name={"drone"}
            label={"Drone"}
            stateFunction={setDrone}
            options={drones}
          />
        </div>
      </div>
      <div className="flex row justify-content-end">
        <button
          onClick={props.cancelFunc}
          className="margin-horizontal-10"
        >
          Cancel
        </button>
        <button
          onClick={validateData}
          className="margin-horizontal-10 green-button"
        >
          Create new delivery
        </button>
      </div>
    </div>
  );
}

export default Form;
