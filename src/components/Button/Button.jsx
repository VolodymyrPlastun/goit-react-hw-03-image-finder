import s from './Button.module.css';
import {PropTypes} from 'prop-types';

const Button = ({moreImages}) => {
    return (
        <div className={s.container}>
            <button onClick={moreImages} type='button' className={s.button}>Load more</button>
            </div>
    )
}

Button.propTypes = {
    moreImages: PropTypes.func.isRequired,
}

export default Button;