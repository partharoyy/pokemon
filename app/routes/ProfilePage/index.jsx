import { Link } from 'remix';
import profileStyle from '../../styles/profile.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: profileStyle,
    },
  ];
}

export default function Index() {
  return (
    <div className='main-container'>
      <Link to='/PokemonHome'>
        <button
          style={{
            padding: '1rem',
            width: '100%',
            borderRadius: '1rem',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            color: 'rgb(240, 240, 173)',
            backgroundColor: 'black',
          }}
        >
          Click here to enter
        </button>
      </Link>
      <h2 style={{ marginTop: '2rem', color: 'red' }}>WARNING: You may get nostalgic</h2>
    </div>
  );
}
