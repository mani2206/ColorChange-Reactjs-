import React from "react";

export default function Box({ item , handleclick}) {
  return (
    <>
      {item && item ? (
        <div className="center">
          <div className={`Box my-2 ${item.isClicked ? "green" : "yellow"}`} onClick={()=>handleclick(item)}>
            {item.id}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
