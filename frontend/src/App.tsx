
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        {/* <Route path="/books" element={<BooksPage />} />
        <Route path="/members" element={<MembersPage />} />
        <Route path="/settings" element={<SettingsPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App