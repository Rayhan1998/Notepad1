import React, { useState, useEffect } from "react";
const Context = React.createContext();

function ContextProvider(props) {
  const data = [
    {
      id: 1,
      title: "note 1",
      body: "time to go to work"
    },
    {
      id: 2,
      title: "note 1",
      body: "note 1"
    },
    {
      id: 3,
      title: "three",
      body: "nap"
    }
  ];

  const [notes, setNotes] = useState(data);
  const [currentNote, setCurrentNote] = useState(notes[0]);

  useEffect(() => {}, []);

  function selectedNote(id) {
    const note = notes.find(function(note) {
      if (note.id == id) {
        return note;
      }
    });

    setCurrentNote(note);
  }

  return (
    <Context.Provider
      value={{
        selectedNote,
        currentNote,

        notes,
        setNotes
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
