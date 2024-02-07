import axios from 'axios';
import { useLoaderData } from 'remix';
import pokemonDetails from '../../styles/pokemonDetails.css';

export async function loader({ params }) {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemonName}`);
  return {
    pokemon: data,
  };
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: pokemonDetails,
    },
  ];
}

export default function PostWithId() {
  const data = useLoaderData();

  return (
    <div className='main-wrapper'>
      <h1 className='title'>{data.pokemon.name}</h1>
      <img
        className='main-img'
        src={data.pokemon.sprites.other['official-artwork'].front_default}
        alt={data.pokemon.name}
      />
      <h1 className='power'>
        Power: {data.pokemon.abilities[0]['ability'].name}, {data.pokemon.abilities[1]['ability'].name}
      </h1>
      <h1 className='power'>
        Moves: {data.pokemon.moves[0]['move'].name}, {data.pokemon.moves[1]['move'].name}
      </h1>
      <h1 className='power'>Weight: {data.pokemon.weight}</h1>
    </div>
  );
}
