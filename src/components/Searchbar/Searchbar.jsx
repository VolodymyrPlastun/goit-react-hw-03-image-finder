import { Component } from 'react';
import s from './Searchbar.module.css';
import { toast } from 'react-toastify';
import {PropTypes} from 'prop-types';


class Searchbar extends Component {
  static propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

  state = {
  imageName: '',
  }
  
handleChange = evt => {
this.setState({imageName: evt.currentTarget.value.toLowerCase()})
  }

handleSubmit = evt => {
    const { imageName } = this.state;
    evt.preventDefault();
    if (imageName.trim() === '') {
      return toast.warning('Enter your request');
}
    this.props.onSubmit(imageName);
this.setState({imageName: ''})
  }

render() {
    return (
        <header className={s.searchbar}>
  <form onSubmit={this.handleSubmit} className={s.searchForm}>
    <button type="submit" className={s.searchFormButton}>
    </button>

    <input
      className={s.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
            placeholder="Search images and photos"
            value={this.state.imageName}
            onChange={this.handleChange}
    />
  </form>
</header>
    )
  }
}

export default Searchbar;