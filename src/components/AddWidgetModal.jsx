import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWidget } from '../features/dashboard/dashboardSlice'

export default function AddWidgetModal({ categoryId, onClose }) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) return
    dispatch(addWidget(categoryId, name, text || 'Random text'))
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 w-full max-w-md shadow-xl">
        <h2 className="text-2xl font-bold mb-5 text-white">Add Widget</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white font-medium mb-1">Widget Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-white/30 rounded-xl px-3 py-2 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-white font-medium mb-1">Widget Text</label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border border-white/30 rounded-xl px-3 py-2 bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-white/30 rounded-xl text-white hover:bg-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-semibold"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
