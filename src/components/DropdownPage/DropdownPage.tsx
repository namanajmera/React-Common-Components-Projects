import React, { useState } from "react";
import style from "./DropdownPage.module.less";
import Dropdown from "../commonComponents/Dropdowns/Dropdown/Dropdown";

type Props = {};

const DropdownPage = (props: Props) => {
  const [dropdownList, setDropdownList] = useState([
    { id: 1, name: "Alice Johnson" },
    { id: 2, name: "Bob Smith" },
    { id: 3, name: "Charlie Brown" },
    { id: 4, name: "David Lee" },
    { id: 5, name: "Ella Davis" },
    { id: 6, name: "Frank White" },
    { id: 7, name: "Grace Clark" },
    { id: 8, name: "Henry Adams" },
    { id: 9, name: "Isabella Turner" },
    { id: 10, name: "Jack Harris" },
  ]);
  const [selectedValue1, setSelectedValue1] = useState({
    id: 0,
    name: "Select",
  });
  const [selectedValue2, setSelectedValue2] = useState({
    id: 0,
    name: "Select",
  });
  return (
    <div className={style["dropdown-page-containers"]}>
      <h1>DropdownPage</h1>
      <div>
        <h3>Dropdown</h3>
        <Dropdown
          selectedValue={selectedValue1}
          dropdownList={dropdownList}
          setSelectedValue={setSelectedValue1}
        />
      </div>
      <div>
        <h3>Dropdown With Search</h3>
        <Dropdown
          selectedValue={selectedValue2}
          dropdownList={dropdownList}
          setSelectedValue={setSelectedValue2}
          isSearch={true}
        />
      </div>
    </div>
  );
};

export default DropdownPage;
