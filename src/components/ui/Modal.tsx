import { useEffect, useState } from "react";
import { Button } from "./buttons";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

      {isOpen && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl animate-in fade-in zoom-in-95"
          >
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 text-2xl text-gray-400 transition hover:text-black"
            >
              &times;
            </button>

            <h2 className="mb-4 text-2xl font-semibold text-gray-800">
              Modal Title
            </h2>

            <p className="leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, consequatur.
            </p>

            <div className="mt-6 flex justify-end gap-3">
              <Button onClick={closeModal}>Cancel</Button>

              <Button>Confirm</Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
