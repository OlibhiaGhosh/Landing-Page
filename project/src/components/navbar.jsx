import logo from '../assets/logo.png'

function Navbar(){
    return(
        <>
         <div className="w-full bg-gradient-to-r from-black from-10% via-blue-950 via-50% to-black to-99% text-white flex justify-around items-center p-3">
            <div>
                <img src={logo} alt="logo" width={60} />
            </div>
            <div className="sm:flex gap-x-5 hidden sm:visible">
                <div>About</div>
                <div>Services</div>
                <div>Process</div>
                <div>Work</div>
                <div>Pricing</div>
                <div>FAQs</div>
            </div>
            <div>
                <button className="border-2 border-blue-500 rounded-lg p-3">Book a call</button>
            </div>
         </div>
        </>
    )
}

export default Navbar