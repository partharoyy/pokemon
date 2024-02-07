import axios from 'axios';

export async function loader() {
  const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon');
  return {
    posts: data.results.map((item) => item),
  };
}
