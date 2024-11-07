import './index.css'
import Navbar from './Navbar.js'

function App() {

  return (
    <div className="App">
        <Navbar />
        <div className="blog-contents flex bg-red-500 h-screen w-full py-auto px-190">
          <LeftContent />
        </div>
        
    </div>
  );
}

export default App;
