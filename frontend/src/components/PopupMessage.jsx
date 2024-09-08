import React from 'react';

function PopupMessage({ message, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg">
        <h2 className="text-xl font-semibold mb-4">{message.title}</h2>
        <p className="mb-6">{message.body}</p>
        <button
          onClick={onClose}
          className="py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          {message.buttonText}
        </button>
      </div>
    </div>
  );
}

export default PopupMessage;

