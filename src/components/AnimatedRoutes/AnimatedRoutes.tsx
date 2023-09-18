import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from '../../layouts/DefaultLayout'
import { Home } from '../../pages/Home'
import { History } from '../../pages/History'

import { AnimatePresence } from 'framer-motion'

export function AnimatedRoutes() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
