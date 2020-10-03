import React from 'react';
import Header from './components/header';
import Fight from './components/fight';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import './styles/App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Fight />
      <small>Icons made by <a href='https://www.flaticon.es/authors/freepik' title='Freepik'>Freepik</a> from <a href='https://www.flaticon.es/' title='Flaticon'>www.flaticon.local</a></small>
    </div>
  );
}

export default App;
