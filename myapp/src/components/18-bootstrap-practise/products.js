import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "./product";
import data from "../../assets/data/products.json";

const Products = () => {
  return (
    <Container>
      <Row>
        {data.map((item) => {
          const { id, image, title, desc, price } = item;

          return (
            <Col md={3} key={id}>
              <Product
                title={title}
                price={price}
                desc={desc}
                image={image}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products;