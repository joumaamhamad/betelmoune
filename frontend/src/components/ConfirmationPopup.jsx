import React from 'react';

export default function ConfirmationPopup({ onConfirm, onCancel }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-8 rounded shadow-lg text-center">
          <p className="text-xl font-semibold mb-4">
            Are you sure to register in this course?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={onConfirm}
            >
              Confirm
            </button>
            <button
              className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }