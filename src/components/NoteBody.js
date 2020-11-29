import React, { useContext, useState, useEffect } from "react";
import SideTabs from "./SideTabs";
import { Context } from "../Context";
export default function NoteBody(props) {
  const { currentNote } = useContext(Context);
  const [text, setText] = useState("");
  function textAreaChange(e) {
    setText(e.target.value);
  }
  useEffect(() => {
    setText(props.body);
  }, [currentNote]);

  return (
    <div className="col-md-7 border border-primary" style={{ height: "100vh" }}>
      <textarea
        name="message"
        rows="10"
        cols="30"
        value={text}
        onChange={textAreaChange}
      ></textarea>
    </div>
  );
}
