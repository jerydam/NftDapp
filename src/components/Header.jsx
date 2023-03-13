import ethlogo from '../assets/ethlogo.png'
import { connectWallet } from '../Adulam'
import { truncate, useGlobalState } from '../store'

const Header = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <nav className="w-full bg-[#360241] top-0 position-sticky flex md:justify-center justify-between items-center py-4 mx-auto">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={ethlogo} alt="Adulam Logo" />
        <span className="text-white hover:text-blue-700 text-2xl font-extrabold ml-2">Certifier</span>
      </div>

      <ul
        className="md:flex-[0.5] text-white 
        md:flex hidden list-none flex-row 
        justify-between items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>
      

      {connectedAccount ? (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#3f7fc7] hover:bg-[#0c08e6] md:text-xs p-2
        rounded-full cursor-pointer"
        >
          {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : (
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#3f7fc7] hover:bg-[#0c08e6] md:text-xs p-2
        rounded-full cursor-pointer"
          onClick={connectWallet}
        >
        Connect Button
        </button>
      )}
    </nav>
  )
}

export default Header
