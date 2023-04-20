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

  const [inputVariables, setInputVariables] = useState([]);

  //   const url = "https://api.up2tom.com/models/58d3bcf97c6b1644db73ad12"; // General data
  const url = "https://docs.up2tom.com/v3/models/58d3bcf97c6b1644db73ad12"; // CORS error

  const getModel = () => {
    axios
      //   .get("https://api.up2tom.com/models/58d3bcf97c6b1644db73ad12", {
      .get(url, {
        headers: { Authorization: "Bearer 9307bfd5fa011428ff198bb37547f979" },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={getModel}>Get model</button>
    </>
  );
};

export default ApiForm;
