import { Component } from 'react';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import Searchbar from '../Searchbar';
import Loader from 'components/Loader/Loader';
import Modal from '../Modal';
import ImageGalleryItem from '../ImageGalleryItem';
import { fetchImages } from '../Services/Services';

import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { animateScroll as scroll } from "react-scroll";


class App extends Component {
  state = {
  gallery: [], 
  imageName: '',
  isLoading: false,
    page: 1,
    error: null,
    showModal: false,
    bigImg: '',
  }
  
  componentDidUpdate(prevProps, prevState) {
    const { imageName, page } = this.state;
    if (prevState.imageName !== imageName || prevState.page !== page) {
      this.searchImages();
    }
    if (page !== prevState.page && page !== 1) {
      scroll.scrollToBottom();
    }
    
  }

    formSubmit = imageName => {
      this.setState({ imageName, gallery: [], page: 1 })
      scroll.scrollToTop();
  }

  async searchImages() {
    const { imageName, page } = this.state;
    this.setState({ isLoading: true })

    try {
      const gallery = await fetchImages(imageName, page)
 
      if (gallery.length === 0) {
        toast.error('Images not found');
        this.setState({ isLoading: false });
        return;
      } else {
        this.setState(prevState => ({
          gallery: [...prevState.gallery, ...gallery],
          isLoading: false,
          
        }))
        return 
      }
           } catch (error) {
      this.setState({ error });
    }
    
  }
  
  showMoreImg = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
    // scroll.scrollToBottom();
  }
        
  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }))
  }

  onBigImgClick = (url) => {
this.toggleModal();
    this.setState({ bigImg: url });
    
  }


  render() {
    const { gallery, isLoading, showModal, bigImg, imageName } = this.state;

    return (
      <div className={s.app}
      >
        <Searchbar onSubmit={this.formSubmit} />
        {isLoading && <Loader />}
        {imageName && (
<ImageGallery>
          <ImageGalleryItem onBigImgClick={this.onBigImgClick} gallery={gallery}/>
        </ImageGallery>
        )}
        
        {gallery.length > 0 && <Button moreImages={this.showMoreImg} />}
        {showModal && <Modal onClose={this.toggleModal}>
          <img className={s.bigImage} src={bigImg} alt={imageName} />
        </Modal>}
        <ToastContainer autoClose={3000}/>
      </div> 
    )};
};

export default App;
