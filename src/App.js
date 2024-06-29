import logo from './logo.svg';
import './App.css';
import { Jscrip } from './component/Jscript';
import Netflix from './component/Netflix';
import Profile from './component/Profile';
import SyntheticBaseEvent from './component/SyntheticBaseEvent';
import Propsevent from './component/Propsevent';
import Eventpropagation from './component/Eventpropagation';
import State from './component/hooks/State';
import Derivedstate from './component/Derivedstate';
import { createContext } from 'react';
import ChildA from './component/ChildA';
import HookUseEffect from './component/HookUseEffect';

const FirstName = createContext()

function App() {

  
  return (

    <div className="App">
      {/* <img src='https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvam9iNjgwLTE2Ni1wLWwxZGJ1cTN2LnBuZw.png' width='400px' height='300px' />
      <h1>Heading</h1>
      <p>The baseline binaries are built for older CPUs which may not support AVX2 instructions. If you run into an "Illegal Instruction" error when running Bun, try using the baseline binaries instead. Bun's install scripts automatically choose the correct binary for your system which helps avoid this issue. Baseline builds are slower than regular builds, so use them only if necessary.</p> */}
     {/* <Jscrip/> */}
     {/* <Netflix/> */}
     {/* <Profile/> */}
     {/* <SyntheticBaseEvent/> */}
     {/* <Propsevent/> */}
     {/* <Eventpropagation/> */}
     {/* <State/> */}
     {/* <Derivedstate/> */}
     {/* <FirstName.Provider value={'contextAPI'}>
      <ChildA/>
     </FirstName.Provider>
      <FirstName.Provider value={'useContext Hook'}>
        <ChildA />
      </FirstName.Provider> */}
<HookUseEffect/>
    </div>
  );
}

export default App;
export { FirstName };