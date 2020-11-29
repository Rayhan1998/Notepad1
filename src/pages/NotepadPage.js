import React, { useState, useContext } from "react";
import { Context } from "../Context";
import Sidebar from "../components/Sidebar";
export default function NotepadPage() {
  const { joe, data } = useContext(Context);
  console.log(data);
  return (
    <div className="container">
      <Sidebar />
    </div>
  );
}
