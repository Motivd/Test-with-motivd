'use client'

import { useState } from 'react'
import { Trash2, CheckCircle2, Circle } from 'lucide-react'

interface TodoItemProps {
  id: string
  title: string
  completed: boolean
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({
  id,
  title,
  completed,
  onToggle,
  onDelete,
}: TodoItemProps) {
  const [isDeleting, setIsDeleting] = useState(false)

  const handleDelete = () => {
    setIsDeleting(true)
    setTimeout(() => {
      onDelete(id)
    }, 200)
  }

  return (
    <div
      className={`card p-4 flex items-center gap-3 transition-smooth ${
        isDeleting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      }`}
    >
      <button
        onClick={() => onToggle(id)}
        className="flex-shrink-0 text-slate-400 hover:text-blue-600 transition-smooth"
        aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
      >
        {completed ? (
          <CheckCircle2 className="w-6 h-6 text-green-500" />
        ) : (
          <Circle className="w-6 h-6" />
        )}
      </button>

      <span
        className={`flex-1 text-base transition-smooth ${
          completed
            ? 'line-through text-slate-400'
            : 'text-slate-900 font-medium'
        }`}
      >
        {title}
      </span>

      <button
        onClick={handleDelete}
        className="flex-shrink-0 text-slate-400 hover:text-red-500 transition-smooth"
        aria-label="Delete todo"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  )
}
