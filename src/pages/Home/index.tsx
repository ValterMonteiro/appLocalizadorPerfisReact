import { BaseLayout } from '../../Layout/BaseLayout';
import { useEffect, useState } from 'react';
import { SearchForm } from '../../Components/SearchForm';
import { UserProfile } from '../../Components/UserProfile';
import { CircularProgress, CssBaseline } from '@mui/material';
import { Theme } from '../../Theme';

export function Home() {
  const [user, setUser] = useState<{
    avatarUrl: string;
    name: string;
    htmlUrl: string;
  } | null>(null);

  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState('');

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

  useEffect(() => {
    if (searchValue.trim() !== '') {
      handleSearch(searchValue);
    } else {
      setUser(null);
    }
  }, [searchValue]);

  return (
    <>

      <BaseLayout appBarTitle="Localizador de Perfis">
        <SearchForm onSearch={handleSearch} onChange={handleSearchChange} />
        {isLoading ? (
          <CircularProgress />
        ) : (
          <>
            {user ? (
              <UserProfile
                name={user.name}
                avatarUrl={user.avatarUrl}
                githubUrl={user.htmlUrl}
              />
            ) : (
              <div>Usuário não encontrado</div>
            )}
          </>
        )}
      </BaseLayout>
    </>
  );
}
