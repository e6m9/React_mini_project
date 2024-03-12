import './App.css';
import DictionarySelection from './components/DictionarySelection';
import RandomWord from './components/RandomWord';

const [selectedDictionary, setSelectedDictionary] = useState('')

function App() {
  return (
    <div className="">
      <DictionarySelection setSelectedDictionary={setSelectedDictionary}/>
      <RandomWord selectedDictionary={selectedDictionary}/>
    </div>
  );
}

export default App;
