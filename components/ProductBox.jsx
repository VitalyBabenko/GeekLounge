import { styled } from "styled-components";
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div``;

const WhiteBox = styled(Link)`
  background: white;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 100%;
    max-height: 80px;
  }
`;

const Title = styled(Link)`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 7px 0 10px;
  color: inherit;
  text-decoration: none;
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
`;

export default function ProductBox({ product }) {
  const { addProduct } = useContext(CartContext);
  const { _id, title, price, images } = product;

  return (
    <ProductWrapper>
      <WhiteBox href={`/product/${_id}`}>
        <div>
          <img src={images?.[0]} />
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={`/product/${_id}`}>{title}</Title>

        <PriceRow>
          <Price>${price}</Price>

          <Button onClick={() => addProduct(_id)} primary={1} outline={1}>
            Add to cart
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}
