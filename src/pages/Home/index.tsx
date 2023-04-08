import { BaseLayout } from '../../Layout/BaseLayout';
import { useState } from 'react';
import { SearchForm } from '../../Components/SearchForm'; '../../Components/SearchForm';
import { UserProfile } from '../../Components/UserProfile';

export function Home() {

  const [user, setUser] = useState<{
    avatarUrl: string;
    name: string;
    htmlUrl: string;
  } | null>(null);


  const handleSearch = async (name: string) => {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const data = await response.json();

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

  return (
    <>
      <BaseLayout appBarTitle='Localizador de Perfis'>
        <SearchForm onSearch={handleSearch} />
        {user && (
          <UserProfile
            name={user.name}
            avatarUrl={user.avatarUrl}
            githubUrl={user.htmlUrl}
          />
        )}
        {!user && (
          <div>Usuário não encontrado</div>
        )}
      </BaseLayout>
    </>
  )
}