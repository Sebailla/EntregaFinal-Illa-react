import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/navbar/Navbar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <>
        <Navbar />
        <ItemListContainer greeting="Esta es un Nuevo proyecto de React"></ItemListContainer>
        <Container sx={{ mt: 5 }}></Container>
      </>

    </div>
  );
}

export default App;
