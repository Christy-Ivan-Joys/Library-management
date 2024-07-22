
import React, { useState } from 'react'
import { ValidateCourse } from '../validateCourse'
import { ValidateImage } from '../validateImage'
import { useAddMutation } from '../../utils/Redux/adminApiSlices'


const AddBookModal = ({ onClose }) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [errors, setErrors] = useState({});
    const [add] = useAddMutation()

    const handleSubmit = async () => {
        alert('hleoo')
        const validationErrors = ValidateCourse(title, author)
        console.log(validationErrors)
        if (Object.keys(validationErrors).length === 0) {
            
            
            try {
                 alert('requres')
                const res = await add({title,author}).unwrap()
                

            } catch (error) {

            }
        } else {
            alert('error')
            setErrors({ ...validationErrors})
        }
    }

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
            <div className="bg-zinc-900 rounded-lg shadow-xl min-w-[600px] p-6">
                <h2 className="text-2xl mb-4 text-white">Enter the book details</h2>
                <div className="mb-4">
                    <label className="block text-gray-200 ">Title</label>
                    <input
                    
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-200">Author</label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {errors.author ? <p className="text-red-500 text-sm">{errors.author}</p> : ''}
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

export default AddBookModal
