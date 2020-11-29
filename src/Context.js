import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const data = [
    {
      id: 1,
      title: "one",
      body: "time to go to work"
    },
    {
      id: 2,
      title: "two",
      body: "run"
    },
    {
      id: 3,
      title: "three",
      body: "nap"
    }
  ];
  const [currentNote, setCurrentNote] = useState(data[0]);

  function selectedNote(id) {
    const note = data.find(function(note) {
      if (note.id == id) {
        return note;
      }
    });

    setCurrentNote(note);
  }

  return (
    <Context.Provider
      value={{
        data,
        selectedNote,
        currentNote
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
