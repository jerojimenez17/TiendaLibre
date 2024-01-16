import React from "react";

interface props {
  handleChange: (value: string) => void;
}
const SearchInput = ({ handleChange }: props) => {
  return (
    <div className="m-3">
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        className="block ring-2 ring-violet-500 focus:outline-none p-2"
        type="search"
      />
    </div>
  );
};

export default SearchInput;
