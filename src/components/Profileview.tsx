

export const Profileview = () => {
  return (
    <div className="profile-view before:content-[''] before:absolute before:h-[20px] before:w-[20px] before:right-[1.8rem] before:rotate-45 before:bg-zinc-900 before:border-l-[1px] before:border-t-[1px] before:-top-[.65rem] ">
    <ul className="flex flex-col gap-4">
        <li className="hover:bg-zinc-700 w-full p-2 rounded-lg ">Profile</li>
        <li className="hover:bg-zinc-700 w-full p-2 rounded-lg">Bids</li>
        <li className="hover:bg-zinc-700 w-full p-2 rounded-lg ">Past Purchases</li>
    </ul>
    </div>
  )
}
