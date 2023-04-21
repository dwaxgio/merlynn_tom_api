import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";

const ApiForm = () => {
  const [responseData, setResponseData] = useState("");
  const [inputValues, setInputValues] = useState({}); // Activate when using WITH useEffect
  const [decision, setDecision] = useState("");
  const [loggedOut, setLoggedOut] = useState(false);

  const url = process.env.REACT_APP_API_URL;
  const modelId = "58d3bcf97c6b1644db73ad12";
  const apiKey = process.env.REACT_APP_API_KEY;
  const urlPost = `https://api.up2tom.com/v3/decision/${modelId}`;

  

  // API code

  useEffect(() => {
    try {
      axios
        .get(url + modelId, {
          headers: { Authorization: "Bearer " + apiKey },
        })
        .then((response) => setResponseData(response));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const inputData = [];

    Object.keys(inputValues).forEach((key) => {
      const attribute =
        responseData.data.data.attributes.metadata.attributes.find(
          (attr) => attr.name === key
        );

      const inputValue =
        attribute.type === "Continuous"
          ? // ? parseFloat(inputValues[key]).toFixed(1)
            parseFloat(inputValues[key])
          : inputValues[key];

      inputData.push(inputValue);
    });

    const postData = {
      data: {
        type: "scenario",
        attributes: {
          input: inputData,
        },
      },
    };

    axios
      .post(urlPost, postData, {
        // .post(urlPost, JSON.stringify(postData), {
        headers: {
          Authorization: "Bearer " + apiKey,
          "Content-Type": "application/vnd.api+json",
        },
      })
      .then((response) => {
        // Handle the response from the API
        console.log(
          "API response decision: ",
          response.data.data.attributes.decision
        );
        setDecision(response.data.data.attributes.decision);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Logout handler

  const handleLogout = () => {
    setLoggedOut(true);
  };

  if (loggedOut) {
    return <LoginForm />;
  }

  return (
    <>
      <div>
        {responseData && (
          <h1>Model name: {responseData.data.data.attributes.name}</h1>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        {responseData &&
          responseData.data.data.attributes.metadata.attributes.map(
            (attribute) => (
              <div key={attribute.name}>
                <label>{attribute.question}</label>
                {attribute.type === "Nominal" && (
                  // <select name={attribute.name} onChange={handleInputChange} defaultValue="">
                  <select
                    name={attribute.name}
                    onChange={handleInputChange}
                    value={inputValues[attribute.name] || ""}
                  >
                    <option value=""></option>
                    {attribute.domain.values.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                )}
                {attribute.type === "Continuous" && (
                  <input
                    type="number"
                    name={attribute.name}
                    min={attribute.domain.lower}
                    max={attribute.domain.upper}
                    step={attribute.domain.interval}
                    onChange={handleInputChange}
                  />
                )}
              </div>
            )
          )}
        <button type="submit">Submit</button>
      </form>
      {decision && <h2>Decision: {decision}</h2>}
      <br />
      <button onClick={handleLogout}>Log out</button>
    </>
  );
};

export default ApiForm;
