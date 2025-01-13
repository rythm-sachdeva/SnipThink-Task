

export const Profileview = () => {
  return (
    <div className="profile-view  ">
    <ul className="flex flex-col gap-4">
    <li className="hover:bg-zinc-700 w-full p-2 rounded-lg">
    <a href="/refund-to-buyer" className="block w-full">Refund</a>
  </li>
  <li className="hover:bg-zinc-700 w-full p-2 rounded-lg">
    <a href="/nonrefund-to-buyer" className="block w-full">Non Refund</a>
  </li>
  <li className="hover:bg-zinc-700 w-full p-2 rounded-lg">
    <a href="/payment-history" className="block w-full">Payment History</a>
  </li>
    </ul>
    </div>
  )
}
