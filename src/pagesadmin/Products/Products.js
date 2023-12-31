//css
import styles from "./Products.module.css";
import stylesGlobal from "../GlobalAdmin.module.css";

import React, { useEffect, useRef, useState } from "react";
import * as Images from "../../hooks/useInsertDocuments";
import ProductImage from "../../components/ProductImage/ProductImage";
import defaultImage from "../../images/logo.png";
import Button from "../../components/Button/Button";
import { MdCake, MdFoodBank, MdSoupKitchen } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";

const Products = () => {
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [image, setImage] = useState("");
  const [displayProductName, setDisplayProductName] = useState("");
  const [price, setPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const displayProductNameRef = useRef(null);
  const productDescriptionRef = useRef(null);
  const priceRef = useRef(null);

  useEffect(() => {
    const getImages = async () => {
      setLoading(true);
      setImages(await Images.getAll());

      setLoading(false);
    };
    getImages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get("image");
    const fileName = formData.get("displayProductName");

    if (file && file.size > 0) {
      setUploading(true);
      const result = await Images.insert(file, fileName);
      setUploading(false);
    

      if (result instanceof Error) {
        alert(`${result.name} ${result.message}`);
      } else {
        const newMarmitasList = [...images];
        newMarmitasList.push(result);
        setImages(newMarmitasList);
      }
    }
    const inputArquivo = document.getElementById('image');
    inputArquivo.value = '';
    setDisplayProductName("")
    setPrice("")
    setProductDescription("")
  };

  const preview = () => {
    const img = document.getElementById("image");
    if (img.files.length) {
      const previewUrl = URL.createObjectURL(img.files[0]);
      setImage(previewUrl);
      console.log(image);
    }
  };

  return (
    <div className={stylesGlobal.admin}>
      <div className={styles.titles}>
        <h2 className={styles.titleA}>
          Adicione um produto novo ou Edite um produto
        </h2>
        <h1 className={styles.titleB}>Galeria de Produtos</h1>
      </div>
      <div className={stylesGlobal.body}>
        <form onSubmit={handleSubmit}>
          <div className={styles.upload}>
            <div className={styles.productDetails}>
              <label className={styles.image}>
                <span>Adicione uma imagem</span>
                <input type="file" id="image" name="image" onChange={preview} />
              </label>
              <div className={styles.product}>
                <label>
                  <span> Nome do Produto</span>
                  <input
                    id="displayProductName"
                    type="text"
                    name="displayProductName"
                    ref={displayProductNameRef}
                    placeholder="Qual o nome do produto no cardápio?"
                    value={displayProductName}
                    onChange={(e) => setDisplayProductName(e.target.value)}
                  ></input>
                </label>
                <label>
                  <span>Preço</span>
                  <input
                    type="text"
                    name="price"
                    ref={priceRef}
                    placeholder="Qual o preço do produto no cardápio?"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></input>
                </label>
                <label>
                  <span>Descrição</span>
                  <textarea
                    rows={9}
                    maxLength={200}
                    wrap="hard"
                    name="productDescription"
                    ref={productDescriptionRef}
                    placeholder="Descreva aqui seu produto. Lembre-se de usar no máximo 200 caracteres!"
                    value={productDescription}
                    onChange={(e) => setProductDescription(e.target.value)}
                  ></textarea>
                </label>

                <div>
                  {!uploading && <button>Enviar</button>}
                  {uploading && <button disabled>Enviando...</button>}
                </div>
              </div>
            </div>

            <label>
              <div className={styles.preview}>
                {image ? (
                  <ProductImage disabled
                    url={image}
                    name={displayProductName}
                    price={price}
                    description={productDescription}
                  />
                ) : (
                  <ProductImage url={defaultImage} name="Preview" />
                )}
              </div>
            </label>
            <label>
              <div className={styles.list}>
                <div className={styles.paths}>
                  <Button Icon={MdFoodBank} Text="Marmitas" />
                  <Button Icon={FaCoffee} Text="Coffee-Break" />
                  <Button Icon={MdSoupKitchen} Text="Caldos e Sopas" />
                  <Button Icon={MdCake} Text="Sobremesas" />
                </div>

                {loading && <div className={styles.load}>Carregando...</div>}
                {!loading && images.length > 0 && (
                  <div className={styles.imageList}>
                    {images.map((item, index) => (
                      <ProductImage
                        key={index}
                        url={item.url}
                        name={item.name}
                      />
                    ))}
                  </div>
                )}

                {!loading && images.length === 0 && <div>Não há imagens!</div>}
              </div>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Products;
