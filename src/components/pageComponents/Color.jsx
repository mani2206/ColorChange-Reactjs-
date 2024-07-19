import React from "react";
import { useState } from "react";
import Box from "./Box";
import { useEffect } from "react";

function Color() {
  const [queue, setQueue] = useState([]);
  const [grid, setGrid] = useState([
    {
      id: 1,
      isClicked: false,
    },
    {
      id: 2,
      isClicked: false,
    },
    {
      id: 3,
      isClicked: false,
    },
  ]);

  useEffect(() => {
    if (queue.length === 3) {
      let copyQueue = [...queue];
      const timeOut = [];
      copyQueue.forEach((item, index) => {
        const setTimes = setTimeout(() => {
          setGrid((prevGrid) => {
            prevGrid.map((gridItem) => {
              gridItem.id === item.id
                ? { ...gridItem, isClicked: true }
                : gridItem;
            });
          });
          if (index === copyQueue.length - 1) {
            setQueue([]);
          }
        }, index * 1000);
        timeOut.push(setTimes);
      });

      return () => {
        timeOut.forEach((setTimes) => clearTimeout(setTimes));
      };
    }
  }, [queue]);

  const handleClick = (item) => {
    if (!queue.some((queueId) => queueId.id === item.id)) {
      setQueue((prevItem) => [...prevItem, item]);
    }

    setGrid(
      grid.map((gridItem) =>
        gridItem.id === item.id ? { ...gridItem, isClicked: true } : gridItem
      )
    );
  };
  return (
    <>
      {grid.map((item, id) => {
        return <Box item={item} key={item.id} handleclick={handleClick} />;
      })}
    </>
  );
}

export default Color;
