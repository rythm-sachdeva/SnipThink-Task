
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Mainlayout from './pages/Mainlayout'
import 'remixicon/fonts/remixicon.css'
import BidTokenMoneyPayment from './pages/BidTokenMoneyPayment'
import RefundToBuyer from './pages/RefundToBuyer'
import NonRefundToBuyer from './pages/NonRefundToBuyer'
import PaymentHistory from './pages/PaymentHistory'


function App() {


  return (
   <Routes>
      <Route  element={<Mainlayout/>} > 
       <Route path="/" element={<LandingPage/>} />
       <Route path='/bid-token-money-payment' element={<BidTokenMoneyPayment/>}/>
       <Route path='/refund-to-buyer' element={<RefundToBuyer/>}/>
       <Route path='/nonrefund-to-buyer' element={<NonRefundToBuyer/>}/>
       <Route path='/payment-history' element ={<PaymentHistory/>}/>
      </Route>
   </Routes>
  )
}

export default App
