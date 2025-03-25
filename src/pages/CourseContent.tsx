import React, { useState } from 'react';
import { Book, Clock, PlayCircle, Calendar, MessageSquare } from 'lucide-react';

const courses = [
  {
    id: 1,
    code: 'CS101',
    title: 'Introduction to Computer Science',
    description: 'Learn the fundamentals of computer science and programming',
    instructor: 'Dr. John Smith',
    schedule: 'Mon, Wed 10:00 AM - 11:30 AM',
    credits: 3,
    outline: [
      'Introduction to Programming',
      'Data Types and Variables',
      'Control Structures',
      'Functions and Methods',
      'Object-Oriented Programming',
    ],
    enrolled: true,
  },
  {
    id: 2,
    code: 'MATH201',
    title: 'Advanced Mathematics',
    description: 'Complex mathematical concepts and problem-solving techniques',
    instructor: 'Dr. Sarah Johnson',
    schedule: 'Tue, Thu 2:00 PM - 3:30 PM',
    credits: 3,
    outline: [
      'Linear Algebra',
      'Calculus',
      'Differential Equations',
      'Numerical Methods',
      'Mathematical Modeling',
    ],
    enrolled: false,
  },
];

const importantDates = [
  {
    date: '2024-03-20',
    event: 'Mid-term Examinations Begin',
  },
  {
    date: '2024-04-15',
    event: 'Course Registration Deadline',
  },
  {
    date: '2024-05-10',
    event: 'Final Examinations Begin',
  },
];

export default function CourseContent() {
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [activeTab, setActiveTab] = useState('list');

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-primary">Course Management</h1>
      
      <div className="flex space-x-4 border-b border-gray-200">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'list'
              ? 'text-secondary border-b-2 border-secondary'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('list')}
        >
          Course List
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'calendar'
              ? 'text-secondary border-b-2 border-secondary'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('calendar')}
        >
          Calendar
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'forum'
              ? 'text-secondary border-b-2 border-secondary'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('forum')}
        >
          Discussion Forum
        </button>
      </div>

      {activeTab === 'list' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-4">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedCourse.id === course.id
                    ? 'bg-primary text-white'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setSelectedCourse(course)}
              >
                <h3 className="text-lg font-bold">{course.code}</h3>
                <p className={selectedCourse.id === course.id ? 'text-gray-200' : 'text-gray-600'}>
                  {course.title}
                </p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-2">{selectedCourse.title}</h2>
                <p className="text-gray-600">{selectedCourse.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold text-gray-700">Instructor</h3>
                  <p>{selectedCourse.instructor}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Schedule</h3>
                  <p>{selectedCourse.schedule}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Credits</h3>
                  <p>{selectedCourse.credits}</p>
                </div>
                <div>
                  <h3 className="font-bold text-gray-700">Status</h3>
                  <p>{selectedCourse.enrolled ? 'Enrolled' : 'Not Enrolled'}</p>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-gray-700 mb-2">Course Outline</h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedCourse.outline.map((topic, index) => (
                    <li key={index} className="text-gray-600">{topic}</li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full py-2 px-4 rounded-md ${
                  selectedCourse.enrolled
                    ? 'bg-red-500 hover:bg-red-600'
                    : 'bg-secondary hover:bg-opacity-90'
                } text-white`}
              >
                {selectedCourse.enrolled ? 'Drop Course' : 'Enroll in Course'}
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'calendar' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Important Dates</h2>
          <div className="space-y-4">
            {importantDates.map((event, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 border rounded-lg">
                <Calendar className="text-secondary" />
                <div>
                  <p className="font-bold">{event.event}</p>
                  <p className="text-gray-600">{new Date(event.date).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'forum' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-primary mb-6">Discussion Forum</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MessageSquare className="text-secondary" />
              <input
                type="text"
                placeholder="Start a new discussion..."
                className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <button className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-90">
                Post
              </button>
            </div>
            <p className="text-gray-600 text-center py-8">No discussions yet. Be the first to start one!</p>
          </div>
        </div>
      )}
    </div>
  );
}