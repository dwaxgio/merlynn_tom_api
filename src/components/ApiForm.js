import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiForm = () => {
  const [responseData, setResponseData] = useState("");
  const [inputValues, setInputValues] = useState({});

  const url = "https://api.up2tom.com/v3/models/";
  const modelId = "58d3bcf97c6b1644db73ad12";
  const apiKey = "9307bfd5fa011428ff198bb37547f979";

  // BASIC STRUCTURE //
  // const getModel = () => {
  //   axios
  //     .get(url + modelId, {
  //       headers: { Authorization: "Bearer " + apiKey },
  //     })
  //     .then((response) => {
  //       setResponseData(response.data);
  //       console.log(response);
  //       console.log(response.data.attributes.name);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // return (
  //   <>
  //     {<button onClick={getModel}>Get model</button>}
  //     <p>Model data</p>
  //     {/* NOTE: In order to visualize the data, first I need to execute the fetch to the api
  //       once I have the data locally, then I can show it in an html element
  //     */}
  //     {/* <p>{JSON.stringify(responseData.data.attributes.name)}</p>       */}
  //     {/* WORKS */}
  //   </>
  // );

  // BASIC STRUCTURE /

  //

  // WITH useEffect

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
    console.log("Form submitted with values: ", inputValues);
  };

  return (
    <>
      <div>
        {responseData && <p>{responseData.data.data.attributes.name}</p>}
      </div>
      {/* <div>
        {responseData && JSON.stringify(responseData.data.data.attributes)}
      </div> */}

      <form onSubmit={handleSubmit}>
        {responseData &&
          responseData.data.data.attributes.metadata.attributes.map(
            (attribute) => {
              <div key={attribute.name}>
                <label>{attribute.question}</label>
                {attribute.type === "Nominal" && (
                  <select name={attribute.name} onChange={handleInputChange}>
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
              </div>;
            }
          )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default ApiForm;
