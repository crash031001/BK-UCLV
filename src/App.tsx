import { ToastContainer } from 'react-toastify'
import './App.css'
import AppRouter from './AppRouter'
import '@fortawesome/fontawesome-free/css/all.css'
function App() {
  return (
    <>
    <AppRouter />
    <ToastContainer />
    </>
  )
}

export default App
