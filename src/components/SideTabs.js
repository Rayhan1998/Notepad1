import React, { useContext } from "react";
import { Context } from "../Context";

export default function SideTabs(props) {
  const { note } = props;
  const { selectedNote, currentNote, notes } = useContext(Context);

  return (
    <h1
      className="border border-secondary"
      onClick={() => selectedNote(note.id)}
    >
      {props.title}
    </h1>
  );
}
