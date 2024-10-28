
import './App.css';
import Header from './component/header/Header';
import Main from './component/main/Main';
import Sidebar from './component/sidebar/Sidebar';
import Usercontext from './store/Usercontext';

function App() {
  return (
    <Usercontext>
    <div className="App">
     <Header/>
     <div className='section'>
     <Sidebar/>
      <Main/>
     </div>
    </div>
    </Usercontext>
  );
}

export default App;
