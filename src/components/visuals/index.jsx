import React, { useState, useEffect } from "react";
import { VisualCard } from "../visualcard";

const Visuals = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("/metadata.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (Object.keys(data).length > 0) {
    return (
      <section  className="c-grid">
        {Object.entries(data).map(([key, value]) => (
            <VisualCard key={key}  data={value} />
        ))}
      </section>
    );
  }

  return <p>oops</p>;
};

export default Visuals;
