import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectAllWidgets } from '../features/dashboard/dashboardSelectors'
import Category from './Category'
import AddWidgetModal from './AddWidgetModal'
import SearchBar from './SearchBar'

export default function Dashboard() {
  const categories = useSelector((state) => state.dashboard.categories)
  const allWidgets = selectAllWidgets({ dashboard: { categories } })
  const [showModal, setShowModal] = useState(false)
  const [targetCategory, setTargetCategory] = useState(null)
  const [query, setQuery] = useState('')

  const openAddModal = (categoryId) => {
    setTargetCategory(categoryId)
    setShowModal(true)
  }

  const filteredWidgets = query
    ? allWidgets.filter((w) =>
        (w.name + ' ' + w.text + ' ' + w.categoryName)
          .toLowerCase()
          .includes(query.toLowerCase())
      )
    : null

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <h1 className="text-3xl font-bold text-white w-[100%]">Search Wigit</h1>
        <SearchBar value={query} onChange={setQuery} />
      </div>

      {query ? (
        <div>
          <h2 className="text-xl font-semibold mb-4 text-gray-300">Search results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWidgets.map((w) => (
              <div
                key={w.id}
                className="p-5 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-lg hover:scale-105 transition-transform"
              >
                <h3 className="font-bold text-lg">{w.name}</h3>
                <p className="text-gray-300 mt-2">{w.text}</p>
                <p className="text-sm text-gray-400 mt-3">Category: {w.categoryName}</p>
              </div>
            ))}
            {filteredWidgets.length === 0 && <p className="text-gray-400">No widgets found.</p>}
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          {categories.map((cat) => (
            <Category key={cat.id} category={cat} onAddWidget={() => openAddModal(cat.id)} />
          ))}
        </div>
      )}

      {showModal && <AddWidgetModal categoryId={targetCategory} onClose={() => setShowModal(false)} />}
    </div>
  )
}
