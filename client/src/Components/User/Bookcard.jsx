import { useEffect } from "react";


const Bookcard = ({ books }) => {
    useEffect(()=>{

    },[books])

    return (
        <>
            {books.length ? (
                books.map((book,index) => (
                    <div key={index} className="flex bg-white shadow-lg rounded-md  h-16 p-5 mt-2 items-center">
                        <div className="flex w-full justify-between items-center">
                            <div className="flex gap-16">
                                <p className="font-semibold text-zinc-500">{index + 1}</p>
                                <p className="font-semibold text-black">{book.title}</p>
                                <p className="font-semibold text-green-500"><span className="text-black">Author</span> : {book.author}</p>
                            </div>
                            <div className="flex justify-between items-center gap-5">
                            </div>
                        </div>

                    </div>
                ))
            ) : (
                <p className="text-lg font-semibold text-green-700 text-center">No books to show</p>
            )}

        </>

    );
}
export default Bookcard