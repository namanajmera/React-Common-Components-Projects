import React, { useState } from "react";
import style from "./AccordionPage.module.less";
import Accordion from "../commonComponents/Accordion/Accordion";

type Props = {};

const AccordionPage: React.FC = (props: Props) => {
  const [accordion1] = useState({
    heading: "Accordion 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia impedit excepturi eius atque, consequuntur a optio tempora. Iste rerum libero, minus voluptatum ipsa atque soluta, exercitationem, error accusantium nihil fugit.",
  });
  const [accordion2] = useState({
    heading: "Accordion 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia impedit excepturi eius atque, consequuntur a optio tempora. Iste rerum libero, minus voluptatum ipsa atque soluta, exercitationem, error accusantium nihil fugit.",
  });
  const [accordion3] = useState({
    heading: "Accordion 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia impedit excepturi eius atque, consequuntur a optio tempora. Iste rerum libero, minus voluptatum ipsa atque soluta, exercitationem, error accusantium nihil fugit.",
  });
  return (
    <div className={style["accordions-container"]}>
      <Accordion accordion={accordion1} />
      <br />
      <Accordion accordion={accordion2} />
      <br />
      <Accordion accordion={accordion3} />
      <br />
    </div>
  );
};

export default AccordionPage;
