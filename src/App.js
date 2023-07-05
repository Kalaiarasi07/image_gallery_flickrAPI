import logo from './logo.svg';
import './App.css';
import  {useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import {apiArgs, apiUrl} from './settings';
import Images from './components/images'


function App() {

  const [searchKey, setSearchKey] = useState();
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState();
  const [favorite, setFavorite] = useState([]);
  const [isFav, setIsFav] = useState(false);

  const handleSearch = (event) => {
    // event.preventDefault();
    setSearch(searchKey);
    setIsFav(false);
    fetchImages();
  }
  
  const fetchImages = useCallback(async () => {
    try {
      if (search) {
        const { data } = await axios.get(apiUrl, {
          params: {
            ...apiArgs,
            tags: search
          }
        });
        console.log(data);
        setImages(data.photos.photo);
      }
    } catch (error) {
      console.log(error);
    }
  }, [search]);

  const setFavorites = (image_url, favState) => {
    let favs = Array.from(favorite);
    if(favState === 'favorite'){
      favs.push(image_url);
    }
    else{
      favs = favs.filter(item => item !== image_url);
    }
    favs = favs.filter((value, index, array) => array.indexOf(value) === index);;
    setFavorite(favs);
    return favs;
  }
  
  const showFavorites = () => {
    setImages(favorite);
    setIsFav(true);
  }

  return (
    <>
    <div className='container'>
      <h1 className='title'>Image Gallery</h1>
      {!isFav && <div className='search-section'>
        <input type="text" onChange={(event) => setSearchKey(event.target.value)}/>
        <button onClick={handleSearch}>Search</button>
      </div>}
      {isFav && <button className='back' onClick={() =>handleSearch()}>Back</button>}
      <button className='favorites' onClick={() => showFavorites()}>Favorites</button>
    </div>
    <Images images={images} favorite={favorite} setFavorites={setFavorites} isFav={isFav}/>
    </>
  );
}

export default App;
