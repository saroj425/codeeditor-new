import React from 'react'

function Navbar() {
    return (
        <div
            className='main lg:flex md:flex flex-wrap justify-between items-center px-4 bg-[#2f3640] py-4'>
            <div className="left">
                <div className="logo font-bold text-2xl text-white text-center" style={{display:"flex", alignItems:"center", gap:"10px", color:"#ffc400"}}>
                    <img className=' w-44' src="img/codepen.png" alt="" />
                    <h1>HTML CSS JAVASCRIPT</h1>
                </div>
            </div>
        </div>
    )
}

export default Navbar