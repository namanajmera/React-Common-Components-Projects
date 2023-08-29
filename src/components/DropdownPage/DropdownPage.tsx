import React, { useState } from "react";
import style from "./DropdownPage.module.less";
import Dropdown from "../commonComponents/Dropdowns/Dropdown/Dropdown";

type Props = {};

const DropdownPage = (props: Props) => {
  const [dropdownList, setDropdownList] = useState([
    { id: 1, name: "Option 1" },
    { id: 2, name: "Option 2" },
    { id: 3, name: "Option 3" },
    { id: 4, name: "Option 4" },
    { id: 5, name: "Option 5" },
  ]);
  const [selectedValue, setSelectedValue] = useState({
    id: 0,
    name: "Select",
  });
  return (
    <div className={style["dropdown-page-containers"]}>
      <h1>DropdownPage</h1>
      <Dropdown
        selectedValue={selectedValue}
        dropdownList={dropdownList}
        setSelectedValue={setSelectedValue}
      />
    </div>
  );
};

export default DropdownPage;
