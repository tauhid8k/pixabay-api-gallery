import Items from './components/Items/Items';
import TopBar from './components/TopBar';

function App() {
  return (
    <>
      <TopBar />
      <div className='container'>
        <Items />
      </div>
    </>
  );
}

export default App;
