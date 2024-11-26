import React, { useEffect, useState } from "react";

const Ex1 = () => {
  const [minArea, setMinArea] = useState(0);
  const [maxArea, setMaxArea] = useState(300);
  const [avg, setAvg] = useState(0);
  const [avgPrice, setAvgPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(300);
  useEffect(() => {
    setAvg(Number(minArea) + Number(maxArea) / 2);
  }, [minArea, maxArea]);
  useEffect(() => {
    setAvgPrice(Number(minPrice) + Number(setMaxPrice) / 2);
  }, [minPrice, maxPrice]);
  return (
    <div
      style={{
        padding: "10px",
        backgroundColor: "#333",
        width: "150px",
        borderRadius: "10px",
      }}>
      <div
        style={{
          display: "flex",
          color: "#666",
          justifyContent: "space-between",
          marginBottom: "10px",
          padding: "10px",
        }}>
        <span style={{ color: "#fff" }}>Type</span>
        <span>Available</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}>
        <button
          style={{
            color: "#fff",
            backgroundColor: "green",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px",
          }}>
          Commerical
        </button>
        <button style={{ color: "#fff", backgroundColor: "brown" }}>
          Adminstrative
        </button>
        <button
          style={{
            color: "#fff",
            backgroundColor: "blue",

            borderEndEndRadius: "10px",
            borderBottomLeftRadius: "10px",
          }}>
          clinic
        </button>
      </div>
      <div
        style={{
          marginTop: "10px",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#fff",
            fontSize: "12px",
          }}>
          <span className="text-sm">Area</span>
          <span className="text-sm">
            {minArea}-{maxArea} Sq.m
          </span>
        </div>
        <div
          style={{ display: "flex", position: "relative" }}
          className="slider__range">
          <input
            className="thumb thumb--right"
            value={minArea}
            onChange={(e) => setMinArea(e.target.value)}
            type="range"
            id="volume"
            name="volume"
            min={0}
            max={150}
          />
          <input
            className="thumb thumb--left"
            value={maxArea}
            onChange={(e) => setMaxArea(e.target.value)}
            type="range"
            id="volume"
            name="volume"
            min={150}
            max={300}
          />
        </div>
      </div>
      <div
        style={{
          marginTop: "10px",
        }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            color: "#fff",
            fontSize: "12px",
          }}>
          <span className="text-sm">Price</span>
          <span className="text-sm">
            LE {minPrice}-{maxPrice} M
          </span>
        </div>
        <div
          style={{ display: "flex", position: "relative" }}
          className="slider__range">
          <input
            className="thumb thumb--right"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            type="range"
            id="volume"
            name="volume"
            min={0}
            max={150}
          />
          <input
            className="thumb thumb--left"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            type="range"
            id="volume"
            name="volume"
            min={150}
            max={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Ex1;
