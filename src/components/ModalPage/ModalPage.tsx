import React, { useState } from 'react'
import style from "./ModalPage.module.less";
import Modal from '../commonComponents/Modal/Modal';

type Props = {}

const ModalPage: React.FC = (props: Props) => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(!showModal);
    }
    return (
        <>
            <div className={style['modal-page-container']}>
                <button onClick={handleShowModal}>Open Modal</button>
                {showModal && <Modal handleShowModal={handleShowModal}></Modal>}

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br /><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit cumque asperiores ipsam ipsum corporis laudantium rerum repudiandae obcaecati aspernatur veniam impedit excepturi, nihil dolorum blanditiis nesciunt! Nulla a qui provident?</p>
                <br />
                <br />
            </div>

        </>
    )
}

export default ModalPage;