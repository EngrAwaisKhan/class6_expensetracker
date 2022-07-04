import './App.css';
import Child from './Child';
import {TransactionProvider} from './transContext';

function App() {
  return (
    <TransactionProvider className="">
      <Child/>
    </TransactionProvider>
  );
}

export default App;
