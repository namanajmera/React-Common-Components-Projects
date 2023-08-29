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
  isSearch?: boolean;
};

const Dropdown = ({
  dropdownList,
  selectedValue,
  setSelectedValue,
  isSearch,
}: Props) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropDownList, setDropDownList] = useState<
    {
      id: number;
      name: string;
    }[]
  >(dropdownList);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleSelectedValue = (value: { id: number; name: string }) => {
    setSelectedValue(value);
    handleDropdown();
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
    const searchItem = event.target.value.toLowerCase();
    if (searchItem === "") {
      setDropDownList(dropdownList);
    } else {
      const newDropDownList = dropdownList.filter((item) =>
        item.name.toLowerCase().includes(searchItem)
      );
      setDropDownList(newDropDownList);
    }
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
          <>
            {isSearch && (
              <input
                type="text"
                className={style["dropdown-search"]}
                placeholder="Search..."
                value={searchValue}
                onChange={(event) => handleSearch(event)}
              />
            )}
            <ul className={style["list-container-lists"]}>
              {dropDownList &&
                dropDownList.map((value) => (
                  <li
                    key={value.id}
                    className={style["item"]}
                    onClick={() => handleSelectedValue(value)}
                  >
                    {value.name}
                  </li>
                ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
