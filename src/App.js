import logo from './logo.svg';
import './App.css';
import MyProfile from './components/myProfile';
import UseState from './hooks/useState';
import UseEffect from './hooks/useEffect';
import ButtonLogin from './components/ButtonLogin';
import InputLogin from './components/InputLogin';
//import part
function App() {

  return (
    <div>
      <UseEffect />
      <InputLogin />
      <ButtonLogin />
    </div>
  );
}

export default App;
