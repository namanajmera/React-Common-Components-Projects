import React, { useEffect } from "react";
import close from "../../../assets/images/close.svg";
import style from "./Modal.module.less";
import ModalPortal from "./ModalPortal";

type Props = {
    children?: React.ReactNode;
    handleShowModal: () => void,
    showModal: boolean
};

const Modal = ({ children, handleShowModal, showModal }: Props) => {

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
                    {children}

                </div>
            </div>
        </ModalPortal>
    );
};

export default Modal;
