import PropTypes from 'prop-types';
import styles from './Product.module.css';

const Product = ({ product }) => {

    return (
        <div className={styles.card}>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <img src={product.url} alt={product.name} />
            <p>{product.description}</p>
        </div>
    )

};

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired
    }).isRequired
};

export default Product;