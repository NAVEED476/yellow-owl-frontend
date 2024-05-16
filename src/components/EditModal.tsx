import React from "react";
import "../pages/style.css"
interface EditModalProps {
    showEditModal: boolean;
    handleCloseModal: () => void;
    handleUpdateStudent: () => void;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    newStudent: {
      _id: string;
      name: string;
      email: string;
      phone: string;
      enrollNumber: string;
      dateOfAdmission: string;
    };
  }
  
  const EditModal: React.FC<EditModalProps>= ({ showEditModal, handleCloseModal, handleUpdateStudent, handleInputChange, newStudent }) => {
  return (
    showEditModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Edit Student</h2>
          {/* Input fields for editing student */}
          <div className="modal-buttons">
            <button className="submit" onClick={handleUpdateStudent}>
              Submit
            </button>
            <button className="cancel" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default EditModal;
