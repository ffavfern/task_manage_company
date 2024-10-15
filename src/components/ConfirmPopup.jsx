import React from 'react';

const ConfirmPopup = ({ message, onConfirm, onCancel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80">
        <h3 className="text-xl font-semibold text-dark mb-4">Confirmation</h3>
        <p className="text-dark mb-6">{message}</p>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="bg-gray-300 text-dark p-2 rounded-md font-semibold hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white p-2 rounded-md font-semibold hover:bg-red-400"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
