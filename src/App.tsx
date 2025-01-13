
import './App.css'
import { Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Mainlayout from './pages/Mainlayout'
import 'remixicon/fonts/remixicon.css'
import BidTokenMoneyPayment from './pages/BidTokenMoneyPayment'
import RefundToBuyer from './pages/RefundToBuyer'
import NonRefundToBuyer from './pages/NonRefundToBuyer'
import PaymentHistory from './pages/PaymentHistory'
import NotFound from './pages/NotFound'


function App() {


  return (
   <Routes>
      <Route  element={<Mainlayout/>} > 
       <Route path="/" element={<LandingPage/>} />
       <Route path='/bid-token-money-payment' element={<BidTokenMoneyPayment title='Bid Token Money Payment' />}/>
       <Route path='/bid-balance-money-payment' element={<BidTokenMoneyPayment title='Bid Balance Money Payment'/>}/>
       <Route path='/refund-to-buyer' element={<RefundToBuyer/>}/>
       <Route path='/nonrefund-to-buyer' element={<NonRefundToBuyer/>}/>
       <Route path='/payment-history' element ={<PaymentHistory/>}/>
       <Route path='*' element={<NotFound/>}/>
      </Route>
   </Routes>
  )
}

export default App
