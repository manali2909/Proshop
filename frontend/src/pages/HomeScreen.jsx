import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
// import products from "../products";
import axios from "axios";
import Product from "../components/Product";
const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      console.log("get api called");
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    getProducts();
  }, []);
  return (
    <>
      <h1>Latest products</h1>

      <Row>
        {products.map((product) => {
          return (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default HomeScreen;
