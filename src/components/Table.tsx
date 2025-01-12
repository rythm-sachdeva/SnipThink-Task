import { payments ,PaymentStatus} from "../lib/Interfaces";

const PaymentTable = ({ payments }:{payments:payments[]}) => {
    return (
      <table className="w-full text-white">
        <thead className="bg-zinc-800 border-b-2 border-[#eee]">
          <tr>
            <th className="p-3 font-semibold tracking-wide text-sm text-left">Artwork Title</th>
            <th className="p-3 font-semibold tracking-wide text-sm text-left">Total Price</th>
            <th className="p-3 font-semibold tracking-wide text-sm text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((payment,index) => (
            <tr className={`${index%2===0 ? 'bg-zinc-700' : ''}`} key={payment.id}>
              <td className={`text-sm p-3 font-bold hover:text-blue-500 cursor-pointer`}>{payment.artworkTitle}</td>
              <td className={`text-sm font-bold p-3`}>${payment.totalPrice.toFixed(2)}</td>
              <td className={`text-sm  uppercase tracking-wider  font-medium`}><span className={` p-1.5 ${payment.status===PaymentStatus.Completed? 'text-green-800 bg-green-200 ': payment.status===PaymentStatus.Pending ? 'text-yellow-800 bg-yellow-200' : ' text-red-800 bg-red-200' } bg-opacity-50 rounded-full`}>{payment.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default PaymentTable;