import React, { useState } from "react";
import style from "./ModalPage.module.less";
import Modal from "../commonComponents/Modal/Modal";

type Props = {};

const ModalPage: React.FC = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal);
    };
    return (
        <>
            <div className={style["modal-page-container"]}>
                <button onClick={handleShowModal}>Open Modal</button>
                {showModal && (
                    <Modal handleShowModal={handleShowModal} showModal={showModal}>
                        <h1 className={style["header"]}>Using Create Portal</h1>
                        <span className={style["text"]}>
                            <strong>createPortal</strong> lets you render some children into a
                            different part of the DOM.
                        </span>
                        <br />
                        <span className={style["text"]}>
                            A portal only changes the physical placement of the DOM node. In
                            every other way, the JSX you render into a portal acts as a child
                            node of the React component that renders it. For example, the
                            child can access the context provided by the parent tree, and
                            events bubble up from children to parents according to the React
                            tree.
                        </span>
                    </Modal>
                )}

                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque
                    asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati
                    aspernatur veniam impedit excepturi, nihil dolorum blanditiis
                    nesciunt! Nulla a qui provident?
                </p>
                <br />
                <br />
            </div>
        </>
    );
};

export default ModalPage;
