import React, { useEffect, useState } from "react";
import faq from "../API/faq.json";
import FAQ from "./FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);
  const [active, setactive] = useState(false);
  const handleClick = (id) => {
    setactive((prevId)=>(prevId === id ? false : id));
  };

  useEffect(() => {
    setData(faq);
  }, []);
  console.log(data);


  return (
    <div>
      <h1>Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          return (
            <FAQ
              key={curElem.id}
              curData={curElem}
              isActive={active === curElem.id}
              onToggle={()=>handleClick(curElem.id)}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Accordion;
