import Header from "../../Components/Admin/Header"
import Sidebar from "../../Components/Admin/Sidebar"
import { FaSearch } from 'react-icons/fa'
import { useLocation } from 'react-router-dom'
import '../../styles/sidepanel.css'
import { useEffect, useState } from "react"
import AddBookModal from "../../Helpers/modals/AddBookModal"
import BookCard from "../../Components/Admin/BookCard"
import { useFetchBooksMutation } from "../../utils/Redux/adminApiSlices"
import BookEditModal from "../../Helpers/modals/BookEditModal"
export const Books = () => {
    const [isModal, setIsModal] = useState(false)
    const [fetchBooks] = useFetchBooksMutation()
    const [Books, setBooks] = useState([])


    const onClose = () => {
        setIsModal(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchBooks().unwrap()
            setBooks(data)
        }
        fetchData()
    }, [setBooks,setIsModal])

    return (
        <>
            <Header />
            <div className=" overflow-hidden fixed w-screen shadow-lg ">
                <Sidebar />
                <div className='main'>
                    <div className="overflow-x-auto p-10 bg-white shadow-xl rounded-lg border-2 border-sky-100">
                        <div className="px-8 p-5 flex justify-between items-center">
                            <div className="flex gap-5">
                                <button className="bg-white border-2 border-black font-semibold  w-28 rounded-lg h-8 text-black" onClick={() => setIsModal(true)}>Add book</button>
                            </div>
                            <div className="relative w-72">
                                <input
                                    type="text"
                                    className="w-full h-10 pl-10 pr-4 rounded-3xl shadow focus:outline-none"
                                    placeholder="Search"
                                    onChange={(e) => handleFilter(e.target.value)}
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-black pointer-events-none">
                                    <FaSearch/>
                                </div>
                            </div>
                        </div>
                        <div className=" p-5 border-t border-gray-500 "></div>

                        {Books.length ? (
                            Books.map((Book, index) => (
                                <BookCard book={Book} index={index} key={index} />

                            ))
                        ) : (
                            <p className="text-center font-semibold text-xl text-green-700 ">No books to show !</p>
                        )}
                    </div>
                </div>

                {isModal && <AddBookModal onClose={onClose} />}

            </div>
        </>
    );


}