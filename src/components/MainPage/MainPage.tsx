import React from 'react'
import styles from "./MainPage.module.less";
import { aboutPage, reactTitle } from '../../utilities/data';
import projectImage from "../../assets/project.svg";

type Props = {}

const MainPage: React.FC = (props: Props) => {
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
            </div>
        </div>
    )
}

export default MainPage;