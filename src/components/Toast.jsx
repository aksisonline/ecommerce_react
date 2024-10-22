export default Toast = ({ message, onClose }) => (
  <div className="fixed top-4 right-4 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm w-full">
    <div className="flex items-start">
      <div className="flex-shrink-0">
        {message.image && (
          <img
            src={message.image}
            alt={message.title}
            className="h-10 w-10 rounded-full"
          />
        )}
      </div>
      <div className="ml-3 w-0 flex-1 pt-0.5">
        <p className="text-sm font-medium text-gray-900">{message.title}</p>
        <p className="mt-1 text-sm text-gray-500">{message.content}</p>
        {message.price && (
          <p className="mt-1 text-sm font-semibold text-gray-900">
            ${message.price.toFixed(2)}
          </p>
        )}
      </div>
      <div className="ml-4 flex-shrink-0 flex">
        <button
          className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={onClose}
        >
          <span className="sr-only">Close</span>
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  </div>
);