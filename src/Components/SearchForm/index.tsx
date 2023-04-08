import React, { useState } from "react";
import { TextField, Button } from "@mui/material";

type SearchFormProps = {
  onSearch: (query: string) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [query, setQuery] = useState("");

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <>
      <TextField
        label="Search for a GitHub user"
        variant="outlined"
        value={query}
        onChange={handleQueryChange}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
    </>
  );
};