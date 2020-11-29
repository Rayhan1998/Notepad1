import React, { useState, useContext } from "react";
import { Context } from "../Context";
import Sidebar from "../components/Sidebar";
import NoteBody from "../components/NoteBody";
export default function NotepadPage() {
  const { data, currentNote } = useContext(Context);

  return (
    <div className="container mx-auto row">
      <Sidebar />
      <NoteBody body={currentNote.body} />
    </div>
  );
}
