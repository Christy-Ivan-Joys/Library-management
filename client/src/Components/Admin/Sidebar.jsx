import { Link, useLocation } from 'react-router-dom';
import { FaUser,FaBook } from 'react-icons/fa';
import { useState } from 'react';
import '../../styles/sidepanel.css'

const Sidebar = () => {
     
    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(true);
   
    const toggleSideBar = () => {

        setIsExpanded(!isExpanded);
    };


    return (
        <div className={`panel ${isExpanded ? 'expand' : 'collapsed'}`}>
        
            {isExpanded && <h2 className="panel-title mt-20">Admin</h2>}
            <button onClick={toggleSideBar} className="activate-button">
                {isExpanded ? '☰' : '☰'}
            </button>
            <nav className="panel-nav">
                <Link to="/admin/books" className={`panel-link ${location.pathname === '/admin/books' ? 'active-link' : ''}`}>
                    <FaBook/>
                    {isExpanded && <span >Books</span>}
                </Link>
                <Link
                    to="/admin/users"
                    className={`panel-link ${location.pathname === '/admin/users' ? 'active-link' : ''}`}
                >
                    <FaUser />
                    {isExpanded ? <span className=''>Members</span> : ''}
                </Link>
                <div className="flex-grow"></div>
            </nav>
        </div>
    )
}

export default Sidebar
