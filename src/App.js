import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/NavBar';
import Index from "./routes/Index";
import Sidebar from './Components/SideBar';

function App() {
  return (
    <div className="App">
      <div className='main-wrap'>
        <div className='main-layout-wrap'>
          <div className='main-layout'>
            <Sidebar/>
            <div className='w-100'>
              <Navbar/>
              <Index />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
