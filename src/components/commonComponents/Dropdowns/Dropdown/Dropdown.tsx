import React, { useState } from "react";
import style from "./Dropdown.module.less";
import chevron from "../../../../assets/images/chevron.svg";

type Props = {
  dropdownList: {
    id: number;
    name: string;
  }[];
  selectedValue: {
    id: number;
    name: string;
  };
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
};

const Dropdown = ({ dropdownList, selectedValue, setSelectedValue }: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectedValue = (value: { id: number; name: string }) => {
    setSelectedValue(value);
    handleDropdown();
  };
  return (
    <div className={style["dropdown-container"]}>
      <button className={style["dropdown-button"]} onClick={handleDropdown}>
        <span className={style["button-txt"]}>{selectedValue.name} </span>
        <img
          src={chevron}
          alt=""
          className={`${showDropdown && style["rotate"]} ${style["chevron"]}`}
        />
      </button>
      <div
        className={`${style["list-container"]} ${
          showDropdown ? style["open"] : style["close"]
        }`}
      >
        {showDropdown && (
          <ul className={style["list-container-lists"]}>
            {dropdownList &&
              dropdownList.map((value) => (
                <li
                  key={value.id}
                  className={style["item"]}
                  onClick={() => handleSelectedValue(value)}
                >
                  {value.name}
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
