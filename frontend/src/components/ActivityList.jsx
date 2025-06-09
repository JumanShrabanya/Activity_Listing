import ActivityItem from "./ActivityItem";

function ActivityList({ activities, onDelete, onEdit }) {
  if (activities.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm text-center">
        <p className="text-gray-600">
          No activities yet. Add your first activity!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {activities.map((activity) => (
        <ActivityItem
          key={activity.id}
          activity={activity}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default ActivityList;
