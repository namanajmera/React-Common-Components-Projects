import React, { useState } from 'react'
import style from "./NavBar.module.less";
import vite from "../../assets/images/vite.svg";
import hamburger from "../../assets/images/hamburger.svg";
import { LiaTimesSolid } from "react-icons/lia";

type Props = {}

const NavBar: React.FC = (props: Props) => {

    const [isToggle, setIsToggle] = useState(false);

    const handleToggle = () => {
        setIsToggle(!isToggle);
    }
    return (
        <nav className={style['nav-bar']}>
            <div className={style['title-logo-container']}>
                <div className={style["title"]}>
                    <span className={style['text-1']}>Coding</span>
                    <span className={style['text-2']}>Addict</span>
                </div>
                <div className={style["vertical-line"]}></div>
                <div className={style["logo"]}>
                    <img className={style['image']} src={vite} alt="" />
                </div>
            </div>
            <div className={style['actions-container']}>
                <ul className={`${style["actions-list"]} ${isToggle && style["nav-bar-open"]}`}>
                    <li className={style["action"]}>
                        <a href='/nav-bar'>
                            Home
                        </a>
                    </li>
                    <li className={style["action"]}>
                        <a href='/nav-bar'>
                            About Us
                        </a>
                    </li>
                    <li className={style["action"]}>
                        <a href='/nav-bar'>
                            Portfolio
                        </a>
                    </li>
                    <li className={style["action"]}>
                        <a href='/nav-bar'>
                            Contact Us
                        </a>
                    </li>
                </ul>
                {
                    isToggle ?
                        <LiaTimesSolid className={style['nav-toggle']} onClick={handleToggle} /> :
                        <img className={style['nav-toggle']} src={hamburger} alt="" onClick={handleToggle} />
                }
            </div>
        </nav>
    )
}

export default NavBar;
