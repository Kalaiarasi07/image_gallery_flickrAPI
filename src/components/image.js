import { useState } from "react";
import {imgSize} from '../settings';

const Image = ({image, favorite, setFavorites, isFav, key}) => {

  let url;
  if(typeof(image) == 'string'){
    url = image;
  }
  else{
    url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_${imgSize}.jpg`;
  }

  const [favState, setFavState] = useState(favorite.includes(url) ? 'unfavorite' : 'favorite');

  function handleClick(event){
    let favs = setFavorites(event.target.name, favState);
    setFavState(favs.includes(url) ? 'unfavorite' : 'favorite');
  }

  return(
    <>
      <div className="image_container" key={key}>
        <div className="image">
          <img 
            src={url}
            alt=''
          />
        </div>
        {!isFav && <button className="" name={url} onClick={handleClick}>{favorite.includes(url) ? 'unfavorite' : 'favorite'}</button>}
      </div>  
    </>
  )
}
export default Image;