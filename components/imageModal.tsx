import utilStyles from "../styles/utils.module.css";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

export default function ImageModal({
  mainImage,
}: {
  mainImage: string;
}): JSX.Element {
  Modal.setAppElement("#root");
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <Image
        src={`/images/${mainImage}.jpg`}
        alt="Top Image"
        className={utilStyles.clickableImage}
        width={600}
        height={400}
        onClick={openModal}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className={utilStyles.modal}
        overlayClassName={utilStyles.overlay}
      >
        <figure>
          <Image
            src={`/images/${mainImage}.jpg`}
            alt="Top Image"
            className={utilStyles.modalImage}
            width={600}
            height={400}
          />
          <figcaption>Image: {mainImage}</figcaption>
          <button className={utilStyles.button} onClick={closeModal}>
            close
          </button>
        </figure>
      </Modal>
    </>
  );
}
