import React from 'react';
import { Bell, Info, AlertCircle } from 'lucide-react';

const notifications = [
  {
    id: 1,
    title: 'New Course Material Available',
    message: 'New materials for Computer Science 101 have been uploaded.',
    type: 'info',
    date: '2024-03-10T10:00:00',
  },
  {
    id: 2,
    title: 'Upcoming Exam',
    message: 'Advanced Mathematics exam scheduled for next week.',
    type: 'alert',
    date: '2024-03-09T15:30:00',
  },
  // Add more notifications as needed
];

export default function Notifications() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Notifications</h1>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="bg-white rounded-lg shadow-md p-6 flex items-start"
          >
            <div className="flex-shrink-0">
              {notification.type === 'info' ? (
                <Info className="h-6 w-6 text-blue-500" />
              ) : (
                <AlertCircle className="h-6 w-6 text-yellow-500" />
              )}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="text-lg font-semibold">{notification.title}</h3>
              <p className="text-gray-600 mt-1">{notification.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                {new Date(notification.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}