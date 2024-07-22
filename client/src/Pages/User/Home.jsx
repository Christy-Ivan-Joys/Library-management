import { useLocation } from "react-router-dom"
import Header from "../../Components/User/Header"
import { useBooksMutation } from "../../utils/Redux/userApiSlices"
import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import Bookcard from "../../Components/User/Bookcard"



const Home = () => {
    const [books] = useBooksMutation()
    const location = useLocation()
    const [selectedSection, setSelection] = useState('Books')
    const [data,setData] = useState([])

    const handleFilter = () => {

    }

    useEffect(() => {

        const fetchData = async () => {
            const data = await books().unwrap()
            setData(data)
        }

        fetchData()

    }, [selectedSection])
    return (
        <>
            <Header />
            <div className="overflow-hidden fixed w-screen shadow-lg  px-16 ">
                <div className='p-5 h-screen'>
                    <div className="overflow-x-auto p-10 mt-2 bg-white shadow-xl rounded-lg border-2 border-sky-100 ">
                        <div className="px-8 p-5 flex justify-between items-center">
                            <div className="flex gap-5">
                                <button className={`text-md font-semibold w-32 rounded-md h-8  ${selectedSection === 'Books' ? 'bg-white text-black':'bg-black text-white'} border-2`} onClick={() => setSelection('Books')}>
                                    Books<span className={`${selectedSection === 'Books' ? 'bg-black text-white':'bg-white text-black'} w-8 px-2 rounded-full h-4 ml-3`} >{data.length}</span></button>

                                <button className={`text-md font-semibold w-32 rounded-md h-8  ${selectedSection === 'Borrowed' ? 'bg-white text-black':'bg-black text-white'} border-2`} onClick={()=>setSelection('Borrowed')}>
                                    Borrowed<span className={`${selectedSection === 'Borrowed' ? 'bg-black text-white':'bg-white text-black'} w-8 px-2 ml-3 rounded-full h-4`}>1</span></button>

                                <button className={`text-md font-semibold w-32 rounded-md h-8  bg-black text-white border-2`} onClick={() => setSelection('History')}>
                                    History<span className={`${selectedSection === '' ? 'bg-black text-white':'bg-white text-black'} w-8 px-2 ml-3 rounded-full h-4`}>1</span></button>
                            </div>
                            <div className="relative w-72">
                                <input
                                    type="text"
                                    className="w-full h-10 pl-10 pr-4 rounded-3xl shadow focus:outline-none"
                                    placeholder="Search"
                                    onChange={(e) => handleFilter(e.target.value)}
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-black pointer-events-none">
                                    <FaSearch />
                                </div>
                            </div>
                        </div>
                        <div className="w-screen/2 border-t border-gray-500"></div>
                        {selectedSection === 'Books' && <Bookcard books={data} />}
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Home