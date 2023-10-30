import React, { useState } from 'react';

export const Searchbar = ({ onSubmit }) => {
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(searchValue);
    }

    return (
        <div>
            <header className="searchbar">
                <form className="form" onSubmit={handleSubmit}>
                    <button type="submit" className="button">
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                </form>
            </header>
        </div>
    );
}
