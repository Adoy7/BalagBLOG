import './index.css'

const Navbar = () => {
    return ( 
        <nav className="navbar flex justify-between h-88 py-auto px-190 border-solid border-b-black border-b border-opacity-25">
            <div className="nav-left flex my-auto">
                <img src={`./assets/BalagBLOG!.svg`} alt="brand-icon" className='w-180 h-8 mr-10 my-auto' />
                <div className="write-blog flex px-5 py-2 bg-white rounded-full ">
                    <img src={`./assets/8bit-me_blackbg.png`} alt="user-icon" className='my-auto size-35 bg-cover rounded-full' />
                    <input type="text" name="write-blog" id="write-blog" placeholder="What's on your mind, Joseph?" className='w-548 my-auto mx-5 py-2 pl-5 bg-eggplant bg-opacity-10 rounded-full'/>
                </div>
            </div>
            <div className="nav-right my-auto">
                <div className="burger-menu"></div>
                <div className="links flex gap-50 place-content-center">
                    <p className='my-auto'>About</p>
                    <img src={`./assets/notif-icon.svg`} alt="notif-icon"className='w-30 h-30 my-auto rounded-full' />
                    <img src={`./assets/8bit-me_blackbg.png`} alt="user-icon"className='w-45 h-45 my-auto rounded-full' />
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar; 