import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.js'
import { QuizProvider } from './context/quiz.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <QuizProvider>
      <App />
    </QuizProvider>
  </React.StrictMode>,
)
