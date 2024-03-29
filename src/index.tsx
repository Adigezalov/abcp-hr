import React from 'react'
import { createRoot } from 'react-dom/client'

import { App } from '@/pages/App'

const rootElement = document.getElementById('app')

if (!rootElement) throw new Error('Failed to find the root element')

createRoot(rootElement).render(<App />)
