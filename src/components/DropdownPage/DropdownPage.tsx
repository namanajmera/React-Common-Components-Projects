import React, { useState } from "react";
import style from "./DropdownPage.module.less";
import Dropdown from "../commonComponents/Dropdowns/Dropdown/Dropdown";
import MultiSelectDropdown from "../commonComponents/Dropdowns/MultiSelectDropdown/MultiSelectDropdown";

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
  const [multiSelectDropdownList, setMultiSelectDropdownList] = useState([
    { id: 1, name: "Alice", isChecked: false },
    { id: 2, name: "Bob", isChecked: false },
    { id: 3, name: "Charlie Brown", isChecked: false },
    { id: 4, name: "David Lee", isChecked: false },
    { id: 5, name: "Ella Davis", isChecked: false },
    { id: 6, name: "Frank White", isChecked: false },
    { id: 7, name: "Grace Clark", isChecked: false },
    { id: 8, name: "Henry Adams", isChecked: false },
    { id: 9, name: "Isabella Turner", isChecked: false },
    { id: 10, name: "Jack Harris", isChecked: false },
  ]);
  const [selectedValue1, setSelectedValue1] = useState({
    id: 0,
    name: "Select",
  });
  const [selectedValue2, setSelectedValue2] = useState({
    id: 0,
    name: "Select",
  });
  const [multiSelectedValue1, setMultiSelectedValue1] = useState([
    {
      id: 0,
      name: "Select",
      isChecked: false,
    },
  ]);
  const [multiSelectedValue2, setMultiSelectedValue2] = useState([
    {
      id: 0,
      name: "Select",
      isChecked: false,
    },
  ]);
  return (
    <div className={style["dropdown-page-containers"]}>
      <h1>DropdownPage</h1>
      <div className={style["dropdown-container"]}>
        <div className={style["dropdown-box"]}>
          <h3>Dropdown</h3>
          <Dropdown
            selectedValue={selectedValue1}
            dropdownList={dropdownList}
            setSelectedValue={setSelectedValue1}
          />
        </div>
        <div className={style["dropdown-box"]}>
          <h3>Dropdown With Search</h3>
          <Dropdown
            selectedValue={selectedValue2}
            dropdownList={dropdownList}
            setSelectedValue={setSelectedValue2}
            isSearch={true}
          />
        </div>
        <div className={style["dropdown-box"]}>
          <h3>Multi Select Dropdown</h3>
          <MultiSelectDropdown
            selectedValue={multiSelectedValue1}
            dropdownList={multiSelectDropdownList}
            setSelectedValue={setMultiSelectedValue1}
          />
        </div>
        <div className={style["dropdown-box"]}>
          <h3>Multi Select Dropdown</h3>
          <MultiSelectDropdown
            selectedValue={multiSelectedValue2}
            dropdownList={multiSelectDropdownList}
            setSelectedValue={setMultiSelectedValue2}
            isSearch={true}
          />
        </div>
      </div>
    </div>
  );
};

export default DropdownPage;
