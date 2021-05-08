import React, { useState } from "react";
import axios from "axios";



const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const submitHandler = async(e) => {
    e.preventDefault();
    console.log(name);
    try {
    
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/",
      { name },
      config
    );

    data && setMessage(data.name)


   
  } catch (error) {console.log(error);}
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button type="submit">submit</button>
      </form>
      <h1>Registered user name:{message}</h1>
    </>
  );
};

export default App;
