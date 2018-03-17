import React from 'react';
import FaEllipsisH from 'react-icons/lib/fa/ellipsis-h';

import '../../styles/SearchBar.css';

const SearchBar = () => {
    return (
        <div className="searchBar">
            <div className="searchBar__logo">
                logo here
            </div>
            <form className="searchBar__form">
                <input />
            </form>
            <div className="searchBar__user">
                <div>
                    avatar
                </div>
                <span>User name</span>
            </div>
            <FaEllipsisH size={35} color="gray" />
        </div>
    );
};

export default SearchBar;