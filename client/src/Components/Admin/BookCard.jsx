import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import BookEditModal from "../../Helpers/modals/BookEditModal";

const BookCard = ({ book, index, key }) => {

    const [editModal, setEditModal] = useState(false)
    

    const handleBorrow =async()=>{

     

    }

    return (
        <div key={key} className="flex bg-white shadow-lg rounded-md  h-16 p-5 mt-2 items-center">
            <div className="flex w-full justify-between items-center">
                <div className="flex gap-16">
                    <p className="font-semibold text-zinc-500">{index + 1}</p>
                    <p className="font-semibold text-black">{book.title}</p>
                    <p className="font-semibold text-green-500"><span className="text-black">Author</span> : {book.author}</p>
                </div>
                <div className="flex justify-between items-center gap-5">
                   
                    <button className="flex justify-center items-center w-20 h-8 bg-zinc-800 rounded-lg text-white" onClick={()=>setEditModal(true)}>
                        Edit
                    </button>
                    <button className="flex justify-center items-center w-20 h-8 text-zinc-800 rounded-lg ">
                        <FaTrash />
                    </button>
                </div>
            </div>
           
            {editModal && <BookEditModal book={book} onClose={() => setEditModal(false)} />}
        </div>
    );
};
export default BookCard