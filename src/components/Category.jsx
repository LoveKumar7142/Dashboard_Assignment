import React from 'react'
import Widget from './Widget'

export default function Category({ category, onAddWidget }) {
  return (
    <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-semibold">{category.name}</h2>
        <button
          onClick={onAddWidget}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-medium shadow-md transition-colors"
        >
          + Add Widget
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.widgets.map((w) => (
          <Widget key={w.id} widget={w} categoryId={category.id} />
        ))}
        {category.widgets.length === 0 && (
          <p className="text-gray-400 col-span-full">No widgets in this category.</p>
        )}
      </div>
    </section>
  )
}
