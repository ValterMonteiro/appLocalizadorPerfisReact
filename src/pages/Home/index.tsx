import { Menu, TextField } from '@mui/material';
import { BaseLayout } from '../../Layout/BaseLayout';
import { LocatorCard } from '../../LocatorCard';

export function Home() {
  return (
    <>
      <BaseLayout appBarTitle='Localizador de Perfis'>
        <LocatorCard />
      </BaseLayout>
    </>
  )
}