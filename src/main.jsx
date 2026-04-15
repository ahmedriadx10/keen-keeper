import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router/dom";
import {router} from './routes/router'
import './index.css'
import './App.css'
import TimelineContextWrapper from './contexts/TimelineContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
<TimelineContextWrapper>
  <RouterProvider router={router} />
</TimelineContextWrapper>
  </StrictMode>,
)
