import React, { useState } from "react";
import data from "../../data";
import "./Accordian.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [multiple, setMultiple] = useState([]);
  const [enableMulti, setEnableMulti] = useState(false);

  const handleTitleClick = (currentId) => {
    if (enableMulti) {
      const tempArray = [...multiple];

      tempArray.includes(currentId)
        ? tempArray.splice(tempArray.indexOf(currentId), 1)
        : tempArray.push(currentId);
      setMultiple(tempArray);
    }
    currentId !== selected ? setSelected(currentId) : setSelected(null);
  };
  return (
    <div className="accordian">
      <button
        className="multiSelect"
        onClick={() => setEnableMulti(!enableMulti)}
      >
        Enable Multi Select
      </button>
      {data && data.length > 0 ? (
        data.map((dataItem) => (
          <div className="item" key={dataItem.ID}>
            <h3 className="title" onClick={() => handleTitleClick(dataItem.ID)}>
              {dataItem.Question}
            </h3>
            <span onClick={() => handleTitleClick(dataItem.ID)}>
              {selected === dataItem.ID ? "-" : "+"}
            </span>
            {enableMulti
              ? multiple.indexOf(dataItem.ID) !== -1 && (
                  <div className="answer">{dataItem.Answer}</div>
                )
              : selected === dataItem.ID && (
                  <div className="answer">{dataItem.Answer}</div>
                )}
            {/* {selected !== dataItem.ID ||
            multiple.indexOf(dataItem.ID) !== -1 ? null : (
              <div className="answer">{dataItem.Answer}</div>
            )} */}
          </div>
        ))
      ) : (
        <div>No data found</div>
      )}
    </div>
  );
};

export default Accordian;
