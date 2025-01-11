
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Mainlayout from './pages/Mainlayout'
import 'remixicon/fonts/remixicon.css'
import BidTokenMoneyPayment from './pages/BidTokenMoneyPayment'
import RefundToBuyer from './pages/RefundToBuyer'


function App() {


  return (
   <Routes>
      <Route  element={<Mainlayout/>} > 
       <Route path="/" element={<LandingPage/>} />
       <Route path='/bid-token-money-payment' element={<BidTokenMoneyPayment/>}/>
       <Route path='/refund-to-buyer' element={<RefundToBuyer/>}/>
      </Route>
   </Routes>
  )
}

export default App
