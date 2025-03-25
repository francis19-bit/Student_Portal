import React from 'react';
import { Book, Library, FileText, Video, Globe, Calendar } from 'lucide-react';

const quickLinks = [
  {
    title: 'Library',
    description: 'Access digital library resources and research materials',
    icon: Library,
    url: '#',
    color: 'bg-purple-500',
  },
  {
    title: 'E-Books',
    description: 'Browse and read course textbooks and reference materials',
    icon: Book,
    url: '#',
    color: 'bg-blue-500',
  },
  {
    title: 'Study Materials',
    description: 'Download lecture notes and study guides',
    icon: FileText,
    url: '#',
    color: 'bg-green-500',
  },
  {
    title: 'Video Lectures',
    description: 'Watch recorded lectures and educational videos',
    icon: Video,
    url: '#',
    color: 'bg-red-500',
  },
  {
    title: 'Academic Calendar',
    description: 'View important dates and academic schedule',
    icon: Calendar,
    url: '#',
    color: 'bg-yellow-500',
  },
  {
    title: 'Student Resources',
    description: 'Access additional learning resources and tools',
    icon: Globe,
    url: '#',
    color: 'bg-indigo-500',
  },
];

export default function QuickLinks() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Quick Links</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link) => (
          <a
            key={link.title}
            href={link.url}
            className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <div className="p-6">
              <div className={`inline-block p-3 rounded-lg ${link.color}`}>
                <link.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{link.title}</h3>
              <p className="mt-2 text-gray-600">{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}