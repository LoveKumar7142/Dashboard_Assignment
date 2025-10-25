import React from 'react'

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex items-center w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search widgets..."
        className="w-full px-4 py-2 rounded-xl bg-white/10 text-white border border-white/20 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>
  )
}
