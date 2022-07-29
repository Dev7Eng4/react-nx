// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import Landing from './pages/Landing';

export function App() {
  return (
    <>
      <NxWelcome title="performance" />
      <div />
      <Landing />
    </>
  );
}

export default App;
