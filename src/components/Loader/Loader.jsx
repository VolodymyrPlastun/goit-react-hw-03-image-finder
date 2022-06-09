import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from './Loader.module.css';
import { Grid } from 'react-loader-spinner';

const Loader = () => (
    <div className={s.container}>
    <Grid
    height="100"
    width="100"
    color='#303f9f'
    ariaLabel='loading'
        />
        </div>
)

export default Loader;
