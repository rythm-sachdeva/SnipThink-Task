import { useRecoilState } from "recoil"
import { ProfilePannelState } from "../recoil/profileatom/ProfileAtom"
import { Profileview } from "./Profileview"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { useRef, useState } from "react"




const Navbar = () => {

  const navlinks = [
    {title:"Home",link:'/'},
    {title:"About",link:'#'},
    {title:"Contact",link:"#"},
    {title:"Register",link:"#"},
    {title:"Cart",link:"#"},
    {title:"Refund",link:"#"},
    {title:"Payment History",link:"/payment-history"}
  ]
  const [profilePanel,setProfilePannel] = useRecoilState(ProfilePannelState)
  const profilepanelRef = useRef<HTMLDivElement>(null)
  const [menuOpen,setMenuOpen] = useState<boolean>(false)
   useGSAP(function(){
        if(profilePanel)
        {
          gsap.to(profilepanelRef.current,{
              opacity:'100%',
              duration:0.5
            })
        }
        else{
          gsap.to(profilepanelRef.current,{
              opacity:'0%',
    
          })
        }
  
      },[profilePanel])

    
  return (
    <div className="bg-zinc-900 pt-4 md:py-5 fixed z-[99] w-screen md:px-20 flex flex-col md:flex-row justify-center md:justify-between items-center md:gap-6 transition-transform duration-300 ease-in-out">
        <div className="logo flex justify-between p-1 items-center">
        <div className="flex absolute left-6  md:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl"
        >
          <i className="ri-menu-line"></i>
        </button>
      </div>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 400 50"
  className="w-[200px]  md:w-[300px]"
>
  <defs>
    <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00e6e6" />
      <stop offset="100%" stop-color="#007bff" />
    </linearGradient>
  </defs>
  <text
    x="50%"
    y="50%"
    text-anchor="middle"
    font-size="36"
    font-family="'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
    fill="url(#textGradient)"
    font-weight="bold"
    dy=".3em"
  >
    ArtBid
  </text>
</svg>

        </div>
        
        <div  className={`nav-links w-full pt-4 md:pt-0 ${menuOpen ? 'flex ': 'hidden'} md:flex md:static md:gap-6    flex gap-3 flex-col md:flex-row md:justify-center font-nueue md:w-auto`}>
         {navlinks.map((val,index)=>(
                <a href={val.link} key={index} className={`text-white text-xl ${index>3? 'md:hidden':''} py-2 md:hover:text-blue-500 hover:transition active:bg-zinc-800 w-full px-7 items-center rounded-lg hover:ease-in-out hover:duration-350 `}>{val.title}</a>
         ))}
        </div>
        <div className="flex gap-7 opacity-0 md:opacity-[100%] ">
          <h2 className="text-white text-2xl hover:-translate-y-1 ease-in-out transition duration-200"><i className="ri-shopping-cart-line"></i></h2>
          <div  >
        <h2 className="text-white text-2xl" onClick={()=>{
            setProfilePannel((state)=>(!state))
          }}><i className="ri-user-fill"></i></h2>
          <div ref={profilepanelRef} className="opacity-0"> 
             <Profileview /> 
             </div>

            </div>
          
        </div>
        

    </div>
  )
}

export default Navbar