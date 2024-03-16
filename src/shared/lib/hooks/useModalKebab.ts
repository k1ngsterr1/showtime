// import React from "react";
// import styles from "./Modal.module.scss";

// interface ModalProps {
//   isOpen: boolean;
//   closeModal: () => void;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, children }) => {
//   const handleBackdropClick = () => {
//     closeModal();
//   };

//   return (
//     <>
//       {isOpen && (
//         <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
//           <div className={styles.modalContent}>
//             {children}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Modal;
