

import { useState } from 'react';
import { TextField } from '@mui/material';


type SearchFormProps = {
  onSearch: (name: string) => void;
  onChange?: (value: string) => void;
};

export function SearchForm({ onSearch, onChange }: SearchFormProps) {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Buscar usuário"
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
}

