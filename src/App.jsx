import React from 'react'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <div className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold">Dynamic Dashboard</h1>
          <p className="text-sm text-gray-600">Add and remove widgets dynamically. (React + Redux Toolkit)</p>
        </header>
        <Dashboard />
      </div>
    </div>
  )
}
