import axios from 'axios';
import { useLoaderData, Link } from 'remix';
import pokemonHomeStyle from '../../styles/pokemonHome.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: pokemonHomeStyle,
    },
  ];
}

export async function loader() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');

  return {
    pokemonList: data.results,
  };
}

export default function PokemonHome() {
  const data = useLoaderData();

  return (
    <div className='pokemonHomeContainer'>
      <h1>Welcome to Pokemon Home !!</h1>
      <div className='pokemon'>
        <ul>
          {data.pokemonList.map(({ name, url }) => (
            <li className='pokemonItem' key={name}>
              <Link to={`/pokemonHome/${name}`}>{name.toUpperCase()}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
