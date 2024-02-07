import { Link, Outlet } from 'remix';
import pokemonHomeStyle from '../styles/pokemonHome.css';
import homeIcon from '../assets/home.png';
import listIcon from '../assets/list.png';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: pokemonHomeStyle,
    },
  ];
}

export default function PokemonHome() {
  return (
    <div>
      <ul className='nav'>
        <li>
          <Link to='/ProfilePage'>
            <img src={homeIcon} alt='profile-page' />
          </Link>
        </li>
        <li>
          <Link to='/PokemonHome'>
            <img src={listIcon} alt='pokemon-home' />
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
