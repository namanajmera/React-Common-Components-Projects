import React, { useState } from "react";
import style from "./Accordion.module.less";
import chevron from "../../../assets/images/chevron.svg";

type Props = {
  accordion: {
    heading: String;
    description: String;
  };
};

const Accordion = ({ accordion }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={style["accordion-container"]} onClick={handleAccordion}>
      <div className={style["accordion"]}>
        <span>{accordion?.heading}</span>
        <img
          src={chevron}
          alt=""
          className={`${isOpen && style["opened-accordion"]}`}
        />
      </div>
      {isOpen && (
        <div className={style["accordion-content"]}>
          <span className={style["content"]}>{accordion?.description}</span>
        </div>
      )}
    </div>
  );
};

export default Accordion;
