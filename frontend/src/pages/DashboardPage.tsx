import React from 'react'
import Sidebar from '../components/layout/Sidebar'
import Dashboard from '../components/layout/Dashboard'

const DashboardPage = () => {
  return (
    <div className='flex h-screen'>
        <Sidebar />
        <Dashboard />
    </div>
  )
}

export default DashboardPage