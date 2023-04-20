import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiForm = () => {
  const [responseData, setResponseData] = useState("");
  // const [inputValues, setInputValues] = useState({});
  const [inputs, setInputs] = useState({});

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

  // useEffect(() => {
  //   try {
  //     axios
  //       .get(url + modelId, {
  //         headers: { Authorization: "Bearer " + apiKey },
  //       })
  //       .then((response) => setResponseData(response));
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  // const handleInputChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputValues((prevState) => ({ ...prevState, [name]: value }));
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log("Form submitted with values: ", inputValues);
  // };

  // return (
  //   <>
  //     <div>
  //       {responseData && <p>{responseData.data.data.attributes.name}</p>}
  //     </div>
  //     {/* <div>
  //       {responseData && JSON.stringify(responseData.data.data.attributes)}
  //     </div> */}

  //     <form onSubmit={handleSubmit}>
  //       {responseData &&
  //         responseData.data.data.attributes.metadata.attributes.map(
  //           (attribute) => {
  //             <div key={attribute.name}>
  //               <label>{attribute.question}</label>
  //               {attribute.type === "Nominal" && (
  //                 <select name={attribute.name} onChange={handleInputChange}>
  //                   {attribute.domain.values.map((value) => (
  //                     <option key={value} value={value}>
  //                       {value}
  //                     </option>
  //                   ))}
  //                 </select>
  //               )}
  //               {attribute.type === "Continuous" && (
  //                 <input
  //                   type="number"
  //                   name={attribute.name}
  //                   min={attribute.domain.lower}
  //                   max={attribute.domain.upper}
  //                   step={attribute.domain.interval}
  //                   onChange={handleInputChange}
  //                 />
  //               )}
  //             </div>;
  //           }
  //         )}
  //       <button type="submit">Submit</button>
  //     </form>
  //   </>
  // );

  // WITH useEffect /

  // With form showing data
  useEffect(() => {
    try {
      axios
        .get(url + modelId, {
          headers: { Authorization: "Bearer " + apiKey },
        })
        .then((response) => {
          setResponseData(response.data.data.attributes);
          const inputValues = {};
          response.data.data.attributes.metadata.attributes.forEach((attr) => {
            inputValues[attr.name] = "";
          });
          setInputs(inputValues);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs); // handle form submission here
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <>
      <div>
        {responseData && <h1>Model name: {responseData.name}</h1>}
        <form onSubmit={handleSubmit}>
          {responseData &&
            responseData.metadata.attributes.map((attr) => (
              <div key={attr.name}>
                <label htmlFor={attr.name}>{attr.question}</label>
                {attr.type === "Nominal" ? (
                  <select
                    name={attr.name}
                    id={attr.name}
                    value={inputs[attr.name]}
                    onChange={handleInputChange}
                  >
                    <option value=""></option>
                    {attr.domain.values.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="number"
                    name={attr.name}
                    id={attr.name}
                    value={inputs[attr.name]}
                    onChange={handleInputChange}
                    min={attr.domain.lower}
                    max={attr.domain.upper}
                    step={attr.domain.interval}
                  />
                )}
              </div>
            ))}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ApiForm;
