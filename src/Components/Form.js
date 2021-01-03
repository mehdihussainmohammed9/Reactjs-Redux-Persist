import React, { useState } from "react";
import "./form.css";
import { useDispatch, useSelector } from "react-redux";
import { storeUserData, clearData } from "../Redux/actions/userAction";
const Form = () => {
  const { userName } = useSelector((store) => store);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const storeData = () => {
    dispatch(storeUserData(name));
  };
  return (
    <div className="main">
      <div className="div">
        <input
          placeholder="Enter Value"
          type="input"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
      </div>
      <div className="div">
        <button
          onClick={() => {
            storeData();
          }}
        >
          {" "}
          Click to Store in Redux{" "}
        </button>
      </div>
      <div className="div">
        <button
          onClick={() => {
            dispatch(clearData());
            setName('')
          }}
        >
          {" "}
          Clear Redux Data{" "}
        </button>
      </div>

      <div className="div">
        <h3>Redux Value:{" "}
        {userName}</h3>
      </div>
    </div>
  );
};
export default Form;
