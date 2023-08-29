import React, { useEffect } from "react";
import close from "../../../assets/images/close.svg";
import style from "./Modal.module.less";
import ModalPortal from "./ModalPortal";

type Props = {
    children?: React.ReactNode;
    handleShowModal: () => void,
};

const Modal = ({ children, handleShowModal }: Props) => {

    useEffect(() => {
        document.body.style.overflowY = "hidden";

        return () => {
            document.body.style.overflowY = "auto";
        }
    }, [])

    return (
        <ModalPortal>
            <div className={style["modal-overlay"]}>
                <div className={style["modal"]}>
                    <img src={close} alt="" className={style["close"]} onClick={handleShowModal} />
                    {/* {children} */}
                    <h1 className={style["header"]}>Using Create Portal</h1>
                    <span className={style["text"]}>
                        <strong>createPortal</strong> lets you render some children into a
                        different part of the DOM.
                    </span>
                    <br />
                    <span className={style["text"]}>
                        A portal only changes the physical placement of the DOM node. In every
                        other way, the JSX you render into a portal acts as a child node of
                        the React component that renders it. For example, the child can access
                        the context provided by the parent tree, and events bubble up from
                        children to parents according to the React tree.
                    </span>
                </div>
            </div>
        </ModalPortal>
    );
};

export default Modal;
