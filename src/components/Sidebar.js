import React, { useContext } from "react";
import SideTabs from "./SideTabs";
import { Context } from "../Context";
export default function Sidebar() {
  const { setNotes, notes } = useContext(Context);

  function noteCreator() {
    let title = prompt("what is the name of your new note");
    let id = notes[notes.length - 1].id + 1;
    setNotes(prevState => [...prevState, { id: id, title: title, body: "" }]);
  }

  return (
    <div className="col-md-3 border border-primary" style={{ height: "100vh" }}>
      <h1>Sidebar</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          noteCreator();
        }}
      >
        +
      </button>
      <div>
        {notes.map(function(note) {
          return <SideTabs key={note.id} title={note.title} note={note} />;
        })}
      </div>
    </div>
  );
}
