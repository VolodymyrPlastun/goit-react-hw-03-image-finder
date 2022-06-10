import {PropTypes} from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ onBigImgClick, gallery }) => (
  <>
  {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
       <li key={id} onClick={() => onBigImgClick(largeImageURL)}  className={s.imageGalleryItem}>
  <img className={s.imageGalleryItemImage} src={webformatURL} alt={tags} />
</li>
  ))}   
    </>
)

// const ImageGalleryItem = ({image, tags, onClick, bigImg, key}) => (
//    <li key={key} onClick={() => onClick(bigImg)}  className={s.imageGalleryItem}>
//   <img className={s.imageGalleryItemImage} src={image} alt={tags} />
// </li>
         
// )

// ImageGalleryItem.propTypes = {
//   image: PropTypes.string.isRequired,
//   tags: PropTypes.string.isRequired,
//   onClick: PropTypes.func.isRequired,
//   bigImg: PropTypes.string.isRequired
// }

export default ImageGalleryItem;