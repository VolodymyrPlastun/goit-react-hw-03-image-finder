import axios from "axios";
import {PropTypes} from 'prop-types';

const API_KEY = '26678014-2cea77333fe97e3b1fabd9511';

const fetchImages = async (imageName, page) => {
    const response = await axios.get(`https://pixabay.com/api/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
    return response.data.hits;
}

fetchImages.propTypes = {
    imageName: PropTypes.string.isRequired,
    page: PropTypes.number.isRequired,
}

export {
    fetchImages
};