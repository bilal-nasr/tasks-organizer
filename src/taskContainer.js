import React, { useState } from "react";

export default function TaskContainer() {
  const [row, setRow] = useState(0);
  const [column, setColumn] = useState(0);

  const IncrementRow = () => {
    setRow(row+1);
  };

  const IncrementColumn = () => {
    setColumn(column+1);
  };

  return (
    <div className="container">
      {console.log(row)}
      {/* <button onClick={IncrementRow()}>ADD</button> */}
    </div>
  );
}
