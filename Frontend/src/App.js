import { useState } from 'react';
import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routes/AppRoutes';

function App() {
  const[user, setUser] = useState()
  
  return (
    <div className="App">
      <AppNav user={user} setUser={setUser}/>
      <AppRoutes setUser={setUser}/>
    </div>
  );
}

export default App;
