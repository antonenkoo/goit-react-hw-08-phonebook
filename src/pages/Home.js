import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks/useAuth';

const styles = {
  greeting: {
    display: 'flex',
    padding: '50px',
    alignItems: 'center',
    flexDirection: 'column',
  },
  title: {
    margin: '20px',
  },
  description: {
    margin: '30px',
    letterSpacing: '.2rem',
  },
};

export default function Home() {
  const { isLoggedIn, user } = useAuth();

  return (
    <div style={styles.greeting}>
      <Helmet>
        <title>Home</title>
      </Helmet>
      {isLoggedIn ? (
        <>
          <h1 style={styles.title}>Welcome, {user.name} !</h1>
        </>
      ) : (
        <>
          <h1 style={styles.title}>Welcome !</h1>
          <h4 style={styles.description}>Login or register please</h4>
        </>
      )}
    </div>
  );
}
