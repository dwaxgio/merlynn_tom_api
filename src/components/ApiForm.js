import React, { useState, useEffect } from "react";
import axios from "axios";
import LoginForm from "./LoginForm";

const ApiForm = () => {
  const [responseData, setResponseData] = useState("");
  const [inputValues, setInputValues] = useState({});
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
    <div>
      <div>
        {responseData && (
          <h1 className="text-4xl font-bold text-blue-700">Model name: {responseData.data.data.attributes.name}</h1>
        )}
      </div>
      <br/>
      <form onSubmit={handleSubmit}>
        {responseData &&
          responseData.data.data.attributes.metadata.attributes.map(
            (attribute) => (
              <div key={attribute.name}>
                <label>{attribute.question}</label>
                {attribute.type === "Nominal" && (
                  // <select name={attribute.name} onChange={handleInputChange} defaultValue="">
                  <select
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
                    class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
        <br />
        <button
          type="submit"
          class="px-4 py-1 text-sm text-blue-600 font-semibold rounded-full border border-blue-200 hover:text-white hover:bg-blue-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 "
        >
          Submit
        </button>
      </form>
      <br />
      {decision && <h2 className="text-3xl font-bold text-blue-500">Decision: {decision}</h2>}
      <br />
      <button
        onClick={handleLogout}
        class="px-4 py-1 text-sm text-red-600 font-semibold rounded-full border border-red-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-offset-2 "
      >
        Log out
      </button>
    </div>
  );
};

export default ApiForm;
