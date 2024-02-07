import loginStyle from '../styles/login.css';
import { Form, redirect, useTransition, useActionData } from 'remix';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: loginStyle,
    },
  ];
}

// export function meta() {
//   return { title: 'Profile page' };
// }

const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, (timeout = 1000));
  });
};

export async function action({ request }) {
  //put, patch, delete
  switch (request.method) {
    case 'POST': {
      const formData = await request.formData();
      const username = formData.get('username');
      const password = formData.get('password');

      //we can post new data to an api route or save data into DB

      await delay(2000);
      // we can return saved data from DB
      return redirect('/ProfilePage');
      // return {username, password}
    }
    case 'PUT': {
    }
    case 'PATCH': {
    }
    case 'DELETE': {
    }
    default:
      console.log('...');
  }
}

export default function Index() {
  const transition = useTransition();

  // const data = useActionData();
  // console.log(data);

  return (
    <div className='main-wrapper'>
      <div className='form'>
        <Form method='Post'>
          <h1>Login</h1>
          <label htmlFor='title'>Username</label>
          <input type='email' id='username' name='username' />
          <br />
          <label htmlFor='body'>Password</label>
          <input type='password' id='password' name='password' />
          <br />

          <button
            style={{
              padding: '.3rem 1rem',
              width: 'max-content',
              borderRadius: '1rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.1rem',
              fontWeight: 'bold',
              color: 'bisque',
              backgroundColor: 'black',
            }}
          >
            {transition.state !== 'idle' ? transition.state : 'Submit'}
          </button>
        </Form>
      </div>
    </div>
  );
}
