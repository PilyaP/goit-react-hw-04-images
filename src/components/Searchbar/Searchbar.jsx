import React, { useState } from 'react';
import '../../Styles/styles.css';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmitForm = e => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <header className="Searchbar">
      <form
        className="SearchForm"
        onChange={handleChange}
        onSubmit={handleSubmitForm}
      >
        <button type="submit" className="SearchForm-button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};
