import React, { useContext } from "react";
import SideTabs from "./SideTabs";
import { Context } from "../Context";
export default function Sidebar() {
  const { data } = useContext(Context);

  return (
    <div className="col-md-3 border border-primary">
      <h1>Sidebar</h1>
      <div>
        {data.map(function(note) {
          return <SideTabs key={note.id} title={note.title} />;
        })}
      </div>
    </div>
  );
}
