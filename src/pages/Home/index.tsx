import { BaseLayout } from '../../Layout/BaseLayout';
import { useState } from 'react';
import { SearchForm } from '../../Components/SearchForm';
import { UserProfile } from '../../Components/UserProfile';
import { Button, CircularProgress } from '@mui/material';

export function Home() {
  const [user, setUser] = useState<{
    avatarUrl: string;
    name: string;
    htmlUrl: string;
  } | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleSearch = async (name: string) => {
    setIsLoading(true);
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();
    setIsLoading(false);

    if (response.ok) {
      setUser({
        avatarUrl: data.avatar_url,
        name: data.name,
        htmlUrl: data.html_url,
      });
    } else {
      setUser(null);
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleButtonClick = () => {
    setIsButtonClicked(true);
    if (searchValue.trim() !== '') {
      handleSearch(searchValue);
    } else {
      setUser(null);
    }
  };

  return (
    <>
      <BaseLayout appBarTitle="Localizador de Perfis">
        <SearchForm onSearchChange={handleSearchChange} />
        <Button variant="contained" onClick={handleButtonClick}
          sx={{
            width: '20%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginTop: 2,
          }}
        >Buscar</Button>
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {user && isButtonClicked ? (
              <UserProfile
                name={user.name}
                avatarUrl={user.avatarUrl}
                githubUrl={user.htmlUrl}
              />
            ) : (
              isButtonClicked && <div>Usuário não encontrado</div>
            )}
          </>
        )}
      </BaseLayout>
    </>
  );
}
