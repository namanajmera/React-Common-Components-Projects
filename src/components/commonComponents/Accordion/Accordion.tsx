import React from "react";
import style from "./Accordion.module.less";
import chevron from "../../../assets/images/chevron.svg";

type Props = {};

const Accordion = (props: Props) => {
  return (
    <div className={style["accordion-container"]}>
      <span>This is Accordion</span>
      <img src={chevron} alt="" />
    </div>
  );
};

export default Accordion;
