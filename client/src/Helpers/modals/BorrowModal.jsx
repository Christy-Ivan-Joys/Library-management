import React, { useEffect, useState } from 'react'
import { useBooksMutation } from '../../utils/Redux/userApiSlices'
import { useBorrowMutation, useMembersMutation } from '../../utils/Redux/adminApiSlices'


const BorrowModal = ({ onClose, user }) => {


    const [books] = useBooksMutation()
    const [freeBooks, setFreeBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState('')
    const [users, setUsers] = useState([])
    const [members] = useMembersMutation()
    const [borrow] = useBorrowMutation()
    useEffect(() => {
        const fetchData = async () => {
            const data = await books().unwrap()
            const freeBooks = data.filter((book) => {
                return book.borrowed === false
            })

            setFreeBooks(freeBooks)
            setSelectedBook()
            const usersdata = await members().unwrap()
            setUsers(usersdata)

        }

        fetchData()
       
    }, [])

    const handleSubmit =async()=>{
        onClose()
        alert(selectedBook)
        const userId = user._id

        const result = await borrow().unwrap()

    }

    const handleSelectChange = async (event) => {
        alert(event.target.value)
        setSelectedBook(event.target.value)

    }


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-zinc-900 rounded-lg shadow-xl min-w-[600px] p-6">
                <h2 className="text-2xl mb-4 text-white">Enter the book details</h2>
                <div>
                    <label htmlFor="bookDropdown" className='text-white'>Select the book to borrow: </label>
                    <select id="bookDropdown" onChange={handleSelectChange}>
                        {freeBooks.map((book, index) => (
                            <option key={index} value={book.title}>{book.title}</option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-end">
                    <button
                        className="bg-zinc-600 border-2 border-white text-white px-4 py-2 rounded mr-2"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-zinc-600 border-2 border-white text-white px-6  rounded"
                        onClick={handleSubmit}
                    >
                        Borrow
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BorrowModal
