import { useState } from "react";

import Ex2 from "./component/Ex2";
import Ex1 from "./component/Ex1";
import data from "./data";
import { Eye, EyeOff } from "lucide-react";

function App() {
  const [items, setItems] = useState(data);
  const [show, setShow] = useState(false);

  const handleClick = (i) => {
    setItems(items.map((item, index) => (index === i ? { ...item } : items)));
    setShow(!show);
  };
  return (
    <div className="container">
      <div
        style={{
          margin: "10px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <Ex1 />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2px",
        }}>
        {data.map((x, i) => (
          <div key={i}>
            <div
              style={{
                border: "1px solid black",
                color: "blue",
                width: "90px",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: show && `blue`,
              }}>
              <p
                style={{
                  border: "1px solid blue",

                  padding: "4px",
                }}>
                {x.code}
              </p>

              <p>{x.price} M</p>
            </div>
            {show ? (
              <div onClick={() => handleClick(i)}>
                <EyeOff />
              </div>
            ) : (
              <div onClick={() => handleClick(i)}>
                <Eye />
                <div>
                  <Ex2 status={x.status} price={x.price} />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
