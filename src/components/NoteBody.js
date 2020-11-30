import React, { useContext, useState, useEffect } from "react";
import SideTabs from "./SideTabs";
import { Context } from "../Context";
export default function NoteBody(props) {
  const { currentNote, notes } = useContext(Context);
  const [text, setText] = useState("");
  // finds index of the note id that is passed as a prop
  const index = notes.findIndex(note => note.id == props.id);

  function textAreaChange(e) {
    setText(e.target.value);
  }

  useEffect(() => {
    if (text.length > 0) {
      notes[index].body = text;
    }
  }, [text]);

  useEffect(() => {
    setText(props.body);
  }, [currentNote]);

  return (
    <textarea
      className="col-md-7"
      style={{ height: "100vh" }}
      name="message"
      rows="10"
      cols="30"
      value={text}
      onChange={textAreaChange}
    ></textarea>
  );
}
