import { useEffect, useRef } from 'react';
import styles from '../assets/css/Modal.module.css';

function Modal({ setModalOpen, flag, id, title, content, writer }) {
    // 모달 끄기
    const closeModal = () => {
        setModalOpen(false);
    };

    console.log(flag);

    const modalRef = useRef(null);

    useEffect(() => {
        // 이벤트 핸들러 함수
        const handler = (event) => {
            event.stopPropagation();
            // mousedown 이벤트가 발생한 영역이 모달창이 아닐 때, 모달창 제거 처리
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        };

        // 이벤트 핸들러 등록
        //document.addEventListener('mousedown', handler);
        document.addEventListener('touchstart', handler); // 모바일 대응

        return () => {
            // 이벤트 핸들러 해제
            // document.removeEventListener('mousedown', handler);
            document.removeEventListener('touchstart', handler); // 모바일 대응
        };
    });

    return (
        <div>
            <div className={styles.shadow}></div>
            <div ref={modalRef} className={styles.container}>
                <button className={styles.close} onClick={closeModal}>
                    X
                </button>
                <p>모달창입니다.</p>
            </div>
        </div>
    );
}
export default Modal;