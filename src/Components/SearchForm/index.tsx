import { TextField } from '@mui/material';

type SearchFormProps = {
  onSearchChange: (value: string) => void;
};

export function SearchForm({ onSearchChange }: SearchFormProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onSearchChange(newValue);
  };

  return (
    <form>
      <TextField
        label="Buscar usuário"
        onChange={handleChange}
      />
    </form>
  );
}
