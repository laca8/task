import React from "react";
import { Eye, EyeOff } from "lucide-react";
const Ex2 = ({ price, status }) => {
  return (
    <div
      style={{
        backgroundColor: "#333",
        borderRadius: "10px",
        padding: "10px",
        color: "#fff",
        boxShadow: "1px 1px #fff",
        width: "200px",
      }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px",
        }}>
        <span style={{ padding: "2px" }}>Unit 104</span>
        <button
          style={{
            backgroundColor: "green",
            padding: "4px",
            borderRadius: "4px",
            color: "#fff",
            outline: "none",
          }}>
          {status}
        </button>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px",
        }}>
        <span style={{ color: "#666" }}>Unit Type</span>
        <span>Commerical</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px",
        }}>
        <span style={{ color: "#666" }}>Total Area</span>
        <span>53 M²</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "4px",
        }}>
        <span style={{ color: "#666" }}>Price</span>
        <span>{price} EGP</span>
      </div>
      <div>
        <button
          style={{
            color: "#333",
            backgroundColor: "#fff",
            borderRadius: "4px",
            width: "100%",
          }}>
          Callback
        </button>
      </div>
    </div>
  );
};

export default Ex2;
