import React, { useState } from "react";
import "./App.css";
import { Plant } from "./mockData";
import CustomCard from "./components/customCard";

function App() {
  const [factVisible, setFactVisible] = useState(false);
  const [godVisible, setGodVisible] = useState(false);

  return (
    <React.Fragment>
      {Plant.map((item) => (
        <div>
          <div onClick={() => setFactVisible(!factVisible)}>
            <CustomCard
              name={item.name}
              total={item.total_sales}
              target={item.target_sales}
            />
          </div>
          {item.factory.map((data) => (
            <div onClick={() => setGodVisible(!godVisible)}>
              {factVisible ? (
                <CustomCard
                  name={data.name}
                  total={data.total_sales}
                  target={data.target_sales}
                />
              ) : null}
              {data.godown.map((res) =>
                godVisible ? (
                  <CustomCard
                    name={res.name}
                    total={res.total_sales}
                    target={res.target_sales}
                  />
                ) : null
              )}
            </div>
          ))}
        </div>
      ))}
    </React.Fragment>
  );
}

export default App;
