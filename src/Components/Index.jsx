import React, { useState } from "react";
import data from "./Data.js";

const Index = () => {
  const [cheakId, setCheakId] = useState(null);
  const [enableMultiSel, setEnableMultiSel] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleClick = (dataId) => {
    setCheakId(cheakId ? null : dataId);
  };

  const handleMultiClick = (dataId) => {
    const copyArr = [...multiple];
    const findCurrentIdx = copyArr.indexOf(dataId);
    if (findCurrentIdx === -1) copyArr.push(dataId);
    else copyArr.splice(findCurrentIdx, 1);
    setMultiple(copyArr);
  };
  console.log(cheakId, multiple);

  return (
    <div className="container">
      <button onClick={() => setEnableMultiSel(!enableMultiSel)}>
        Enable Multi Selection
      </button>
      <div className="main">
        {data.map((item) => (
          <div className="items" id={item.id}>
            <div className="box">
              <div
                onClick={
                  enableMultiSel
                    ? () => handleMultiClick(item.id)
                    : () => handleClick(item.id)
                }>
                <h3>Q. {item.question}</h3>
              </div>
              <div>
                {enableMultiSel
                  ? multiple.indexOf(item.id) !== -1 && (
                      <h4>A. {item.answer}</h4>
                    )
                  : cheakId === item.id && <h4>A. {item.answer}</h4>}
                {/* {cheakId === item.id && <h4>A. {item.answer}</h4>} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
