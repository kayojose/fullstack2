import { Header, Logo, NavbarContent, NavbarList, NavbarItem } from './styles';

const Navbar = () => {
  return (
    <Header>
      <Logo src='https://teddydigital.io/wp-content/uploads/2022/10/branco-novo.svg'/>
      <NavbarContent>
        <NavbarList>
          <NavbarItem>Parceiros</NavbarItem>
          <NavbarItem>Clientes</NavbarItem>
          <NavbarItem>Projetos</NavbarItem>
          <NavbarItem>Sair</NavbarItem>
        </NavbarList>
      </NavbarContent>
    </Header>
  )
}

export default Navbar;