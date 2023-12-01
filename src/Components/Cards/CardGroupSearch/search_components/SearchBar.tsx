import React from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.scss";

export default function SearchBar({ setResults }) {
  const handleChange = (value) => {
    if (value != "" || undefined) {
      setResults(value);
    } else {
      setResults("none");
    }
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search Memo.."
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
