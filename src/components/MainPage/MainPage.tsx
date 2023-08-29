import React from 'react'
import styles from "./MainPage.module.less";
import { aboutPage, reactTitle } from '../../utilities/data';
import projectImage from "../../assets/images/project.svg";
import { useNavigate } from "react-router-dom";

type Props = {}

const MainPage: React.FC = (props: Props) => {
    const navigate = useNavigate();
    return (
        <div className={styles['main-page-container']}>
            <div className={styles["headline"]}>
                <div className={styles["left"]}>
                    <h1 className={styles['header']}>{reactTitle}</h1>
                    <p className={styles['about-text']} dangerouslySetInnerHTML={{ __html: aboutPage }}></p>
                    <button className={styles['action']}>
                        <span>
                            Explore Me
                        </span>
                    </button>
                </div>
                <div className={styles["right"]}>
                    <img className={styles['project-image']} src={projectImage} alt="" />
                </div>
            </div>
            <div className={styles["common-components"]}>
                <h1 className={styles['heading']}>Common Components Pages</h1>
                <button onClick={() => navigate('/nav-bar')}>NavBar</button>
                <br />
                <button onClick={() => navigate('/modal')}>Modal Page</button>
                <br />
                <button onClick={() => navigate('/dropdown')}>Dropdown Page</button>
            </div>
        </div>
    )
}

export default MainPage;