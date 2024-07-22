
import { FaTrash } from "react-icons/fa";
import { useState } from "react";
import BookEditModal from "../../Helpers/modals/BookEditModal";
import BorrowModal from "../../Helpers/modals/BorrowModal";

const UserCard = ({ user, index, key }) => {

    const [isBorrowModal, setBorrowModal] = useState(false)

    const handleBorrow = async () => {


    }

    return (

        <div key={key} className="flex bg-white shadow-lg rounded-md  h-16 p-5 mt-2 items-center">
            <div className="flex w-full justify-between items-center">
                <div className="flex gap-16">
                    <p className="font-semibold text-zinc-500">{index + 1}</p>
                    <p className="font-semibold text-black">{user.name}</p>
                    <p className="font-semibold text-green-500"><span className="text-black"></span> {user.email}</p>
                </div>
                <div className="flex justify-between items-center gap-5">
                    <button className="flex justify-center items-center w-20 h-8 bg-zinc-800 rounded-lg text-white" onClick={() => setBorrowModal(true)} >
                        Borrow
                    </button>
                    <button className="flex justify-center items-center w-20 h-8 text-zinc-800 rounded-lg ">
                    </button>
                </div>
            </div>

            {isBorrowModal && < BorrowModal onClose={()=>setBorrowModal(false)} user={user} />}
            
        </div>

    )
};
export default UserCard