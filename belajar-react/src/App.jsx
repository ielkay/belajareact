import './App.css'
import { HelloWorld } from './components/HelloWorld/Helloworld'
import UseComponent from './components/TryUseState/TryUseState'
import { TryProps } from './components/TryProps/TrProps'
import { List } from './components/List/List'
import TestComponent from './components/TestState'
import Pokemon from './components/Pokemon'
import { Box } from './components/Styled.Component/Box'
import { SwitcthLamp } from './components/SwitchLamp/SwitchLamp'
function App() {
  

  return (
    <>
     {/* <HelloWorld /> */}
     {/* <List/> */}
     {/* <UseComponent/> */}
     {/* <TestComponent/> */}
     <SwitcthLamp/>
    </>
  );
}

export default App
