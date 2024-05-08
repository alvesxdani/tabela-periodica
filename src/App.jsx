import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';

function App() {

  return (
    <BrowserRouter>
      <Routes>
      <Route Component={Home} path='/tabela-periodica/' exact />
      <Route Component={Quiz} path='/quiz' />
      </Routes>
    </BrowserRouter>
  )
}

export default App
