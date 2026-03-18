'use client'

import { useState } from 'react'
import { Plus, Loader2 } from 'lucide-react'

interface TodoFormProps {
  onAdd: (title: string) => Promise<void>
}

export default function TodoForm({ onAdd }: TodoFormProps) {
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setIsLoading(true)
    try {
      await onAdd(input.trim())
      setInput('')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task..."
        className="input-field flex-1"
        disabled={isLoading}
        maxLength={100}
      />
      <button
        type="submit"
        disabled={isLoading || !input.trim()}
        className="btn-primary flex items-center gap-2 whitespace-nowrap"
      >
        {isLoading ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Plus className="w-5 h-5" />
        )}
        <span className="hidden sm:inline">Add</span>
      </button>
    </form>
  )
}
