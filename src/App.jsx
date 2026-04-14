import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import SiteHeader from './components/SiteHeader.jsx'
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
    </div>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <ForsidePage /> },
      { path: 'om-os', element: <OmOsPage /> },
      { path: 'tilmeld-som-sponsor', element: <SponsorPage /> },
      { path: 'bornelejren-takker', element: <TakkerPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
