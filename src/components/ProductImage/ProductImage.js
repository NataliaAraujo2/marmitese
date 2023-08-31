import styles from "./ProductImage.module.css";
import React from "react";

const ProductImage = ({ url, name, price, description }) => {
  return (
    <div className={styles.productImage}>
      <div>
        <img src={url} alt={name} />
      </div>

      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
      <div>
        <label className={styles.description}>{description}</label>
      </div>

      <div className={styles.add}>
        <button>+</button>
        <span>0</span>
        <button>-</button>
      </div>
    </div>
  );
};

export default ProductImage;
