
import { createContext, useState } from 'react'
import './App.css'
import Father from './Body/Father';
import Header from './Header/Header';

export const TestContext = createContext();
export const SonContext = createContext();
export const SisterContext = createContext();

function App() {

  const [state, setState] = useState(6);
  const [son, setSon] = useState(0);
  const [sister, setSister] = useState(0);

  return (
    <SonContext.Provider value={[son, setSon]}>
      <SisterContext.Provider value={[sister, setSister]}>
        <TestContext.Provider value={[state, setState]}>
          <div className='container'>
            <Header></Header>
            <Father></Father>
          </div>
        </TestContext.Provider>
      </SisterContext.Provider>
    </SonContext.Provider>
  )
}

export default App
