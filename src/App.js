import { v4 as uuidv4 } from 'uuid'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react"
import Header from "./components/Header"
import FeedbackList from "./components/FeedbackList"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"
// import FeedbackData from "./data/FeedbackData"
import AboutPage from './pages/AboutPage'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

const App = () => {
  // const [feedback, setFeedback] = useState(FeedbackData)

  

  
  return (
    <FeedbackProvider>
      <div>
        <BrowserRouter >
          <div className="container">
            <Header />
            <Routes>
              <Route path='/' element={(
                <>
                  <FeedbackForm  />
                  <FeedbackStats />
                  <FeedbackList  />
                </>)}>
              </Route>
              <Route path="/about" element={<AboutPage />} >dasd</Route>
            </Routes>
            <AboutIconLink />
          </div>
        </BrowserRouter>
      </div >
    </FeedbackProvider>
  )
}

export default App