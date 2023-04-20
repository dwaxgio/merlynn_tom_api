import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiForm = () => {
  //   const [quote, setQuote] = useState("");
  //   const getQuote = () => {
  //     axios
  //       .get("https://api.quotable.io/random")
  //       .then((response) => {
  //         console.log(response.data.content);
  //         setQuote(response.data.content);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   return (
  //     <>
  //       <button onClick={getQuote}>Get data</button>
  //       {quote}
  //     </>
  //   );
  //

  const [responseData, setResponseData] = useState("");

  const url = "https://api.up2tom.com/v3/models/";
  const modelId = "58d3bcf97c6b1644db73ad12";
  const apiKey = "9307bfd5fa011428ff198bb37547f979";

  // BASIC STRUCTURE //
  const getModel = () => {
    axios
      .get(url + modelId, {
        headers: { Authorization: "Bearer " + apiKey },
      })
      .then((response) => {
        setResponseData(response.data);
        console.log(response);
        console.log(response.data.attributes.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {<button onClick={getModel}>Get model</button>}
      <p>Model data</p>   
      {/* NOTE: In order to visualize the data, first I need to execute the fetch to the api
        once I have the data locally, then I can show it in an html element
      */}
      {/* <p>{JSON.stringify(responseData.data.attributes.name)}</p>       */}
      {/* WORKS */}
    </>
  );

  // BASIC STRUCTURE /

  //

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(url + modelId, {
  //         headers: { Authorization: "Bearer " + apiKey },
  //       });
  //       console.log(response.data);
  //       setResponseData(response.data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   //fetchData(); // Execute at the beginning
  // }, []);

  // return (
  //   <>
  //     {/* <button onClick={getModel}>Get model</button> */}
  //     {/* <h1>Model Name: {responseData.attributes.name}</h1> */}
  //     {/* <p>{setResponseData}</p> */}

  //     <form>
  //       {/* {responseData.map((variable) => (
  //         <div key={variable.name}>
  //           <label htmlFor={variable.name}>{variable.name}</label>
  //           <input
  //             type={variable.data_type}
  //             id={variable.name}
  //             name={variable.name}
  //           />
  //         </div>
  //       ))} */}
  //     </form>
  //     {/* <p>{responseData.attributes}</p> */}
  //     <button onClick={fetchData}>Get model</button>
  //   </>
  // );
};

export default ApiForm;
