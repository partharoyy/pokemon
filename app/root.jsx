import { Links, redirect, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';

export function meta() {
  return { title: 'Pokemon' };
}

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  return (
    <div className='main-wrapper'>
      <h1
        style={{
          textAlign: 'center',
          color: 'red',
          marginTop: '10rem',
          fontFamily: 'sans-serif',
          fontWeight: 'normal',
        }}
      >
        Sorry! We don't know this pokemon!
      </h1>
    </div>
  );
}
