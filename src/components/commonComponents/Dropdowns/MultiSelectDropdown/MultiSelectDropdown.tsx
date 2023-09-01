import React, { useEffect, useRef, useState } from "react";
import style from "./MultiSelectDropdown.module.less";
import chevron from "../../../../assets/images/chevron.svg";

type Props = {
  dropdownList: {
    id: number;
    name: string;
    isChecked: boolean;
  }[];
  selectedValue: {
    id: number;
    name: string;
    isChecked: boolean;
  }[];
  setSelectedValue: React.Dispatch<React.SetStateAction<any>>;
  isSearch?: boolean;
};

const MultiSelectDropdown = ({
  dropdownList,
  selectedValue,
  setSelectedValue,
  isSearch,
}: Props) => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropDownList, setDropDownList] = useState<
    {
      id: number;
      name: string;
      isChecked: boolean;
    }[]
  >(dropdownList);
  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleSelectedValue = (value: {
    id: number;
    name: string;
    isChecked: boolean;
  }) => {
    const newDropdownList = dropDownList.map((item) => {
      if (item.id === value.id) {
        // Modify the item here, for example, toggle the isChecked property
        return { ...item, isChecked: !item.isChecked };
      }
      return item;
    });
    setDropDownList(newDropdownList);
    const filteredList =
      newDropdownList &&
      newDropdownList.filter((ele) => {
        return ele.isChecked;
      });
    if (filteredList.length) {
      setSelectedValue(filteredList);
    } else {
      setSelectedValue([
        {
          id: 0,
          name: "Select",
          isChecked: false,
        },
      ]);
    }
    // handleDropdown();
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
    <div className={style["dropdown-container"]} ref={dropdownRef}>
      <button className={style["dropdown-button"]} onClick={handleDropdown}>
        {selectedValue && selectedValue.length !== 1 ? (
          <ul className={style["selected-items"]}>
            {selectedValue &&
              selectedValue.length > 1 &&
              selectedValue.map((ele) => (
                <li className={style["item"]} key={ele.id}>
                  <span className={style["button-txt"]}>{ele.name}</span>
                </li>
              ))}
          </ul>
        ) : (
          <span className={style["button-txt"]}>{selectedValue[0].name} </span>
        )}
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
          <div>
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
                  <div
                    key={value.id}
                    className={style["item-container"]}
                    onClick={() => handleSelectedValue(value)}
                  >
                    <input
                      type="checkbox"
                      name={value.name}
                      id={value.name}
                      checked={value.isChecked}
                      onChange={() => handleSelectedValue(value)}
                    />
                    <li className={style["item"]}>{value.name}</li>
                  </div>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
