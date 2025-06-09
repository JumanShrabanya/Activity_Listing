import { useState } from "react";

import ActivityList from "../components/ActivityList";
import ActivityForm from "../components/ActivityForm";

function Homepage() {
  const [activities, setActivities] = useState([]);
  const [editingActivity, setEditingActivity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addActivity = (activity) => {
    if (editingActivity) {
      setActivities(
        activities.map((a) =>
          a.id === editingActivity.id ? { ...activity, id: a.id } : a
        )
      );
      setEditingActivity(null);
    } else {
      setActivities([...activities, { ...activity, id: Date.now() }]);
    }
    setIsModalOpen(false);
  };

  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => activity.id !== id));
  };

  const editActivity = (activity) => {
    setEditingActivity(activity);
    setIsModalOpen(true);
  };

  const openModal = () => {
    setEditingActivity(null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingActivity(null);
  };

  return (
    <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <header className="mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold text-blue-600">Activity Listing</h1>
          <button
            onClick={openModal}
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            List Activity
          </button>
        </div>
      </header>
      <main>
        <ActivityList
          activities={activities}
          onDelete={deleteActivity}
          onEdit={editActivity}
        />
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-4 transform transition-all">
            <div className="flex justify-between items-center p-6 border-b">
              <h2 className="text-2xl font-semibold text-gray-800">
                {editingActivity ? "Edit Activity" : "Add New Activity"}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="p-6">
              <ActivityForm
                onSubmit={addActivity}
                editingActivity={editingActivity}
                onCancel={closeModal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
