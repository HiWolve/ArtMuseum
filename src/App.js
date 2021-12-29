import './App.css';
import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation/index.js'

// console.log(harvardArt)



function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records}/>
      {/* <h1>Hello From App</h1> */}
    </div>
  );
}

export default App;
