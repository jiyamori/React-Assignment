import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #888;
`;

const HomePage = () => {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      image: 'produt2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      image: 'product3.jpg',
    },
  ];

  return (
    <Container>
      <Title>Welcome to Our Shop!</Title>
      <ProductList>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price}</ProductPrice>
          </ProductCard>
        ))}
      </ProductList>
    </Container>
  );
};

export default HomePage;
