function ActivityItem({ activity, onDelete, onEdit }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm flex justify-between items-start">
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-blue-600 mb-2">
          {activity.title}
        </h3>
        <p className="text-gray-700 mb-4">{activity.description}</p>
        <div className="text-sm text-gray-500 space-x-4">
          <span>{new Date(activity.date).toLocaleDateString()}</span>
          <span>{activity.time}</span>
        </div>
      </div>
      <div className="flex space-x-2 ml-4">
        <button
          onClick={() => onEdit(activity)}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors duration-200"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(activity.id)}
          className="px-4 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors duration-200"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ActivityItem;
