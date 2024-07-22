import React, { useState } from 'react'
import { useEditMutation } from '../../utils/Redux/adminApiSlices'
import { ValidateCourse } from '../validateCourse'



const BookEditModal = ({ book, onClose }) => {
    const [title, setTitle] = useState(book.title)
    const [author, setAuthor] = useState(book.author)
    const [edit] = useEditMutation()

    const handleSubmit = async () => {

        const validationErrors = ValidateCourse(title, author)

        console.log(validationErrors)

        if (Object.keys(validationErrors).length === 0) {
            try{
                alert('edit working')
                const data = { title, author, id: book._id }
                const res = await edit(data).unwrap()
                onClose()
            }catch(error){
                console.log(error)
            }
        } else {

            setErrors({ ...validationErrors })

        }
    }


    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-zinc-900 rounded-lg shadow-xl min-w-[600px] p-6">
                <h2 className="text-2xl mb-4 text-white">Edit book details</h2>
                <div className="mb-4">
                    <label className="block text-gray-200 ">Title</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {/* {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>} */}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200">Author</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {/* {errors.author ? <p className="text-red-500 text-sm">{errors.author}</p> : ''} */}
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
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BookEditModal
