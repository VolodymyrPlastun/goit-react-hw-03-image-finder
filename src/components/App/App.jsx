import { Component } from 'react';
import Button from '../Button';
import ImageGallery from '../ImageGallery';
import Searchbar from '../Searchbar';
import { fetchImages } from '../Services/Services';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from './App.module.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'components/Loader/Loader';
import Modal from '../Modal';

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
  
  componentDidUpdate( prevState) {
    const { imageName, page } = this.state;
    if (prevState.imageName !== imageName || prevState.page !== page) {
      
      this.searchImages();
    }
  }

    formSubmit = imageName => {
this.setState({imageName, gallery: [], page: 1})
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
  
  showMoreImg =() => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  // scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.body.clientHeight,
  //     behavior: "smooth"
  //   });
  // };
  

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }))
  }

  onBigImgClick = (largeImageURL) => {
this.toggleModal();
    this.setState({ bigImg: largeImageURL });
  }


  render() {
    const { gallery, isLoading, showModal, bigImg } = this.state;

    return (
      <div className={s.app}
      >
        <Searchbar onSubmit={this.formSubmit} />
        {isLoading && <Loader />}
        <ImageGallery onBigImgClick={this.onBigImgClick} gallery={gallery} />
        {gallery.length > 0 && <Button moreImages={this.showMoreImg} />}
        {showModal && <Modal onClose={this.toggleModal}>
          <img src={bigImg} alt="" />
        </Modal>}
        <ToastContainer />
      </div> 
    )};
};

export default App;
