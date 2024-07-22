import { useEffect, useState } from "react";
import Header from "../../Components/Admin/Header";
import Sidebar from "../../Components/Admin/Sidebar";
import { FaSearch } from "react-icons/fa";
import { useMembersMutation } from "../../utils/Redux/adminApiSlices";
import UserCard from "../../Components/User/userCard";

const Users = () => {
    const [members] = useMembersMutation()
    const [users, setUsers] = useState([])

    useEffect(() => {

        const fetchData = async () => {
            const data = await members().unwrap()
            console.log(data, 'usersss')
            setUsers(data)
        }

        fetchData()

    }, [])


    return (
        <>
            <Header />
            <div className=" overflow-hidden fixed w-screen shadow-lg ">
                <Sidebar />
                <div className='main'>
                    <div className="overflow-x-auto p-10 bg-white shadow-xl rounded-lg border-2 border-sky-100">
                        <div className="px-8 p-5 flex justify-between items-center">
                            <div className="flex gap-5">
                                <button className="bg-white border-2 border-black font-semibold  w-28 rounded-lg h-8 text-black" >Add book</button>
                            </div>
                            <div className="relative w-72">
                                <input
                                    type="text"
                                    className="w-full h-10 pl-10 pr-4 rounded-3xl shadow focus:outline-none"
                                    placeholder="Search"
                                // onChange={(e) => handleFilter(e.target.value)}
                                />

                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-black pointer-events-none">
                                    <FaSearch />
                                </div>
                            </div>
                        </div>
                        <div className=" p-5 border-t border-gray-500 "></div>

                        {users.length ? (
                            users.map((user, index) => (
                                <UserCard user={user} index={index} key={index} />
                            ))
                        ) : (
                            <p className="text-center font-semibold text-xl text-green-700 ">No users to show !</p>
                        )}
                    </div>
                </div>

            </div>
        </>
    );
}

export default Users