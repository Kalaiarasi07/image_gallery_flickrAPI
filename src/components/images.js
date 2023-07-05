import Image from "./image";

const Images = ({images, favorite, setFavorites, isFav}) => {
  return(
    <div className='images'>
      {images.map((image, key) => ( 
        <Image image={image} favorite={favorite} setFavorites={setFavorites} isFav={isFav} key={key}/>
      ))}
    </div>
  )
}
export default Images;