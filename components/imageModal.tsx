import utilStyles from "../styles/utils.module.css";
import modalStyles from "./modal.module.css";
import Image from "next/image";
import React from "react";
import Modal from "react-modal";

/**
 * Return an image with a modal feature
 * @function
 * @param {string} mainImage - Image Name
 */
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
        contentLabel="Modal"
        className={modalStyles.modal}
        overlayClassName={modalStyles.overlay}
      >
        <figure>
          <Image
            src={`/images/${mainImage}.jpg`}
            alt="Top Image"
            layout="fill"
          />
          <figcaption
            className={`${utilStyles.headingMd} ${utilStyles.colorWhiteSmoke} ${modalStyles.modalBottomLeft}`}
          >
            Image: {mainImage}
          </figcaption>
          <button
            className={`${modalStyles.modalCloseButton} ${modalStyles.modalAboveRight}`}
            onClick={closeModal}
          >
            x
          </button>
        </figure>
      </Modal>
    </>
  );
}
