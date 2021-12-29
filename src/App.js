import './App.css';
import harvardArt from './data/harvardArt.js'
import GalleryNavigation from './components/GalleryNavigation/index.js'
import GalleryView from './components/GalleryView/index.js'
import {Route} from "react-router-dom";

// console.log(harvardArt)



function App() {
  return (
    <div>
      <GalleryNavigation galleries={harvardArt.records}/>
      <Route>
        <GalleryView/>
      </Route>
    </div>
  );
}

export default App;
