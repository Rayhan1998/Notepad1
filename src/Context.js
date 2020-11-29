import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const [joe, setJoe] = useState("sam");

  const data = [
    {
      id: 1,
      title: "one",
      body: "time to go to work"
    },
    {
      id: 2,
      title: "two",
      body: "time to go to work"
    },
    {
      id: 3,
      title: "three",
      body: "time to go to work"
    }
  ];
  return (
    <Context.Provider
      value={{
        joe,
        data
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
