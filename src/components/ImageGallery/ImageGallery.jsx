import s from './ImageGallery.module.css';
// import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {PropTypes} from 'prop-types';

const ImageGallery = ({children}) => {
    return (
        <ul className={s.imageGallery}>
            {children}
            {/* {gallery.map(({ id, webformatURL, tags, largeImageURL }) => (
                <ImageGalleryItem onClick={onBigImgClick} key={id} image={webformatURL} bigImg={largeImageURL} tags={tags}/>
            ))} */}
</ul>
    )
}

// ImageGallery.propTypes = {
//     gallery: PropTypes.array.isRequired,
//     onBigImgClick: PropTypes.func.isRequired,
// }

export default ImageGallery;