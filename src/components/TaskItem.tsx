'use client';

import { Task } from '@/lib/types';
import { taskAPI } from '@/lib/api';
import { useState } from 'react';

interface TaskItemProps {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onUpdate, onDelete }: TaskItemProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    setIsLoading(true);
    const result = await taskAPI.toggleTask(task.id);
    if (result.success && result.data) {
      onUpdate(result.data);
    }
    setIsLoading(false);
  };

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this task?')) {
      setIsLoading(true);
      const result = await taskAPI.deleteTask(task.id);
      if (result.success) {
        onDelete(task.id);
      }
      setIsLoading(false);
    }
  };

  const priorityColors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <div className={`p-4 border rounded-lg transition-all ${
      task.completed ? 'bg-gray-50 border-gray-200' : 'bg-white border-gray-300'
    }`}>
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggle}
          disabled={isLoading}
          className="mt-1 w-5 h-5 cursor-pointer"
        />
        <div className="flex-1">
          <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </h3>
          {task.description && (
            <p className="text-sm text-gray-600 mt-1">{task.description}</p>
          )}
          <div className="flex gap-2 mt-2">
            <span className={`text-xs px-2 py-1 rounded ${priorityColors[task.priority]}`}>
              {task.priority}
            </span>
            {task.category && (
              <span className="text-xs px-2 py-1 rounded bg-purple-100 text-purple-800">
                {task.category}
              </span>
            )}
            {task.dueDate && (
              <span className="text-xs text-gray-500">
                Due: {new Date(task.dueDate).toLocaleDateString()}
              </span>
            )}
          </div>
        </div>
        <button
          onClick={handleDelete}
          disabled={isLoading}
          className="text-red-500 hover:text-red-700 disabled:opacity-50"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
