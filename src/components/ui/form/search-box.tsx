import React from 'react';

type Props = { onChange: (value: string) => void };

export const SearchBox = ({ onChange }: Props) => {
  return (
    <div className="flex justify-center top-32">
      <input
        placeholder="Search Characters by name"
        className="border py-2 px-5 my-4 mx-3 w-full max-w-3xl rounded-md  focus:outline-1"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};
