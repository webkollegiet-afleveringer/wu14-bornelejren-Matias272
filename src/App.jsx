import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import SiteHeader from './components/SiteHeader.jsx'
import SiteFooter from './components/SiteFooter.jsx'
import ForsidePage from './pages/Forside.jsx'
import OmOsPage from './pages/OmOs.jsx'
import SponsorPage from './pages/Sponsor.jsx'
import TakkerPage from './pages/Takker.jsx'

function RootLayout() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="site-main">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<ForsidePage />} />
          <Route path="om-os" element={<OmOsPage />} />
          <Route path="tilmeld" element={<SponsorPage />} />
          <Route path="tak" element={<TakkerPage />} />
          <Route path="tilmeld-som-sponsor" element={<Navigate to="/tilmeld" replace />} />
          <Route path="bornelejren-takker" element={<Navigate to="/tak" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
