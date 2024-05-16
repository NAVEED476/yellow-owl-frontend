import React from "react";
import "../pages/style.css"
interface AddModalProps {
    showAddModal: boolean;
    handleCloseModal: () => void;
    handleSubmit: () => void;
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
  
  const AddModal: React.FC<AddModalProps> = ({ showAddModal, handleCloseModal, handleSubmit, handleInputChange, newStudent }) => {
  return (
    showAddModal && (
      <div className="modal">
        <div className="modal-content">
          <h2>Add New Student</h2>
          {/* Input fields for new student */}
          <div className="modal-buttons">
            <button className="submit" onClick={handleSubmit}>
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

export default AddModal;
