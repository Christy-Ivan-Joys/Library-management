import React, { useEffect } from 'react'


const Header = () => {
    

    const Logout =()=>{
        
    }

    return (

        <div className="bg-gray-500 p-4 w-full">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-bold px-10">
                    <p  className="text-gray-200">Library Management</p>
                </div>
                <div className="flex items-center">
                    <div className="flex items-center mr-4">
                        <img
                            src="https://via.placeholder.com/40"
                            alt="Avatar"
                            className="rounded-full w-10 h-10 mr-2"
                        />
                        <span className="text-white"></span>
                    </div>
                    <button
                        className="bg-gray-200 text-black font-semibold px-2 py-1 rounded hover:bg-green-700 hover:text-white"
                        onClick={Logout}
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header
