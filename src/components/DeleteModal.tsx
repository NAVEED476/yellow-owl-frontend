import React from "react";
import "../pages/style.css"


interface DeleteModalProps {
    showDeleteModal: boolean;
    handleConfirmDelete: () => void;
    handleCancelDelete: () => void;
  }
  
  const DeleteModal: React.FC<DeleteModalProps> = ({ showDeleteModal, handleConfirmDelete, handleCancelDelete }) => {
  return (
    showDeleteModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Are you sure to delete this student?</h2>
          <div className="modal-buttons">
            <button className="submit" onClick={handleConfirmDelete}>
              Yes
            </button>
            <button className="cancel" onClick={handleCancelDelete}>
              No
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default DeleteModal;
