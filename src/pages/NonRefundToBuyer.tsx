const NonRefundToBuyer = () => {
    return (
      <div className="h-screen w-screen flex flex-col">
        <div className="pt-20 md:pt-40 px-5 flex flex-col gap-5">
          <h1 className="text-white text-2xl md:text-3xl font-bold font-nueue">Refund to Buyer</h1>
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Left Card */}
            <div className="Card1 p-5  w-full lg:w-1/2 rounded-lg bg-zinc-800 shadow-md shadow-zinc-600 border-[#eee]">
              <img
                className="rounded-lg w-full object-cover"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAMFBMVEXx8/XCy9K/yND09vfw8vTP1tzp7O/i5ure4+fO1dvJ0dfT2d/EzNPt7/Lb4OXo6+4FeM7UAAAFL0lEQVR4nO2c24KrIAxFLdha7///t0dxOlWDSiAKztnrbR4G6SoJBKHZA6zJYncgQeCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ocEKBEwqcUOCEAicUOKHACQVOKHBCgRMKnFDghAInFDihwAkFTihwQoETCpxQ4IQCJxQ4ocAJBU4ot3Oi1KMq64FnWTVq+EueWzlRquqKVn/J+/ezEfdyHydKPYtc62yF1m1Xymq5ixPVdDnx8eslf1eCVu7hRFXFppAfLW39kNJyByeqOTJirGTvRsbKDZyozsHIpKUQsZK8E1Vu55GTrKTuRL0ZRoyVLviZaTtRVctUMuaVOnCoJO1E1WwjxsorbGZO2Qk7br5WuhApKTvpfZWMy5WAoZKuk6b1NhI4VJJ10uRBSsas0ng+OlUnVaARw9NvqCTqRERJpt9eUtJ0IqPEN36SdNIIKRnIPeafFJ0Ep9c5mr+qTdFJ2CRMpLAn5fScqJeokrFWZkoRdaImwtpw2T9iSnnxuiDoRFXda6hK28JzWTA14ryBxKFlTT9iTlT1W57o3Lta96yED8krRieknCw/DDuEP1TnKBlgzMlCTtZDXr+8pIjOwitK5x7JOKFD3mukiE85ix45S5FxYll46prdiv8ekpsU19wv4kS9LV1ouQPlrPzKliIzTuw9YDYiVfgFSxFx8rR+wcyMomSX9HYpTjlFwonqrB3gBc/JyYQjRcRJYe8Ay4l9rMlLcVi8iTjp7Y/nOBHcMjngWEoi4+TUlcmKw9rnxHzCWMqeU/ltkB9JEZl3SusnYmwQn1fm2GgPeiOzZrM9WZfu/3/BNDznYATLOLENffep+JppeMZBMSZUF9N6ljFM7KF3qpTduBZyQj4W53XTiRsEm1L2dr2k9k9W9Rtjq2BrJj9Zyk7pI7bP9lw8kfH+4KIFLGF77Sa3R90Un0POvHNCcYzsLVMk9+2buni1bd9xjMSJHMPmjCz7zov/fidW5GQ7OS/2e8BoRrLtrBfXScTIMVLsk09cJxEjZ8I6+cR1EmG1tsRaDsZ0EjlyDL0leuxOpulD4JTALtfXORRbnqVO1LDOePdtpoclWPsqulL+wt0P0SNnxFKrrp2opmuXl+5OuHA3PSmByDGQ9ezSydYdM+ELd4YUIsdANnoWTva2RSUv3JlnJRE5I2RbY+6kee1+dTrrhC7cPTZeMUdivZnydaIc3tdqqWuI6USOYZlSfp0oxzVlJxNByUSOYZlSPk6cDzqEXy17JDTn/LBMKRlTSRZ4X2giep2zZnEwZHLiGjifFt6BTtKKHMMspUxO2BkvDzoDm1jkGGa7bsaJx0t9XfgrOfuMlhezwsc48RrKufvhyiXXHatg8T2Zkm0eHzluxO8W4pXHKljkXycBt3h9blFdeqyCx2fPOguLbn6qTWsBu+Czxs/CopsdP4kmkx+mcZ8FRrfuWUqSTSYT005keDucW4iXnzRhMg17iYacC6A0VyZzzIQs0pBrUrn22JoXY4Us0pDjaZMzb+dIMX6/Qi0dHSU0XHySz48heqSaOs60vsvlq2mtpzj9OCh/Trgjew7afgLar63d6ec2SmTZm37+UyV7048K+Gmkm7O10A/8aaSbY7sEr8rYvYoNnX4Sr3EuYJVpVc35Ccu/innZbryMJ1n4v9f4N9FZ39XPZ931GYzMGH9VPHYfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADp8Q9+nG9anuOrfAAAAABJRU5ErkJggg=="
                alt="Placeholder"
              />
              <h2 className="text-lg md:text-xl text-white font-semibold mt-4">Token Price:</h2>
              <h2 className="text-lg md:text-xl text-white font-semibold mt-2">Seller: John Doe (SELLER-001)</h2>
            </div>
  
            {/* Right Column */}
            <div className="w-full lg:w-1/2 flex flex-col gap-5">
              {/* Refund Status */}
              <div className="p-5 text-white w-full rounded-lg shadow-md shadow-zinc-600 bg-zinc-800">
                <h2 className="text-xl md:text-2xl font-sans font-semibold">Non-Refund Status</h2>
                <h3 className="mt-3">
                  <i className="ri-error-warning-line text-yellow-500 text-xl md:text-2xl"></i> Pending
                </h3>
                <h3 className="mt-3">
                  <i className="ri-checkbox-blank-circle-line text-[#eee] text-xl md:text-2xl"></i> Transfer to Account
                </h3>
              </div>
  
              {/* Additional Info */}
              <div className="p-5 text-white w-full rounded-lg shadow-md shadow-zinc-600 bg-zinc-800">
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
              Contact Support
            </button>
            <button className="w-full hover:bg-zinc-800 transition ease-in-out duration-150 text-white p-2 rounded-lg bg-zinc-900 border-[1px] border-white font-semibold">
              Back To Cart
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default NonRefundToBuyer;
  