import { payments,PaymentStatus } from "../lib/Interfaces";
import PaymentTable from "../components/Table";

const PaymentHistory = () => {
    const payments : payments[] = [
        { id: 1, artworkTitle: 'Sunset Boulevard', totalPrice: 1200, status: PaymentStatus.Completed },
        { id: 2, artworkTitle: 'Abstract Dreams', totalPrice: 800, status: PaymentStatus.Pending},
        { id: 3, artworkTitle: 'City Lights', totalPrice: 1500, status: PaymentStatus.Failed },
      ]


    return (
      <div className="h-screen w-screen flex flex-col">
        <div className="pt-20 md:pt-40 px-5 flex flex-col gap-5">
          <h1 className="text-white text-2xl md:text-3xl font-bold font-nueue">Payment History</h1>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Left Card */}
            <div className="Card1 p-5  w-full lg:w-1/2 rounded-lg bg-zinc-800 shadow-md shadow-zinc-600 border-[#eee]">
              <PaymentTable payments={payments}/>
            </div>
  
            {/* Right Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
  
              {/* Additional Info */}
              <div className="p-5 text-white w-full h-full md:text-center rounded-lg shadow-md shadow-zinc-600 bg-zinc-800">
                <h2 className="text-xl md:text-2xl font-sans font-semibold">Additional Info</h2>
                <div className="mt-3">
                  <div className="flex flex-col md:flex-row justify-between gap-3 uppercase font-semibold text-gray-400">
                    <h3>
                      Invoice Id: <span className="text-white">INV-001</span>
                    </h3>
                    <h3>
                      Bid Id: <span className="text-white">BID-001</span>
                    </h3>
                  </div>
                  <div className="flex flex-col md:flex-row justify-between gap-3 mt-3 uppercase font-semibold text-gray-400">
                    <h3>
                      Buyer Id: <span className="text-white">Buyer-001</span>
                    </h3>
                    <h3>
                      Seller Id: <span className="text-white">Seller-001</span>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          {/* Buttons */}
          <div className="py-3 pr-2 flex flex-col gap-3">
            <button className="w-full text-black p-2 rounded-lg hover:bg-zinc-300 transition ease-in-out duration-150 bg-zinc-200 font-semibold">
            <span><i className="ri-download-2-line"></i></span>  Download Invoice
            </button>
            <button className="w-full hover:bg-zinc-800 transition ease-in-out duration-150 text-white p-2 rounded-lg bg-zinc-900 border-[1px] border-white font-semibold">
              Back To Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default PaymentHistory;
  