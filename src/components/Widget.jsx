import React from 'react'
import { useDispatch } from 'react-redux'
import { removeWidget } from '../features/dashboard/dashboardSlice'

export default function Widget({ widget, categoryId }) {
  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }))
  }

  return (
    <div className="relative p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-shadow hover:scale-105">
      <button
        onClick={handleRemove}
        className="absolute top-2 right-2 text-red-500 hover:text-red-400"
      >
        ✕
      </button>
      <h3 className="font-semibold text-lg">{widget.name}</h3>
      <p className="text-gray-300 mt-1">{widget.text}</p>
    </div>
  )
}
