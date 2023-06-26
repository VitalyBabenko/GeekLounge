import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import CartIcon from "./icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const Bg = styled.div`
  background: #222;
  color: #fff;
  padding: 50px 0;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 3rem;
`;

const Desc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  img {
    max-width: 100%;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Column = styled.div`
  margin: auto;
`;

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>{product?.title}</Title>
              <Desc>{product?.description}</Desc>
            </div>
            <ButtonsWrapper>
              <ButtonLink
                href={`/products/${product?._id}`}
                outline={1}
                white={1}
              >
                Read more
              </ButtonLink>
              <Button onClick={() => addProduct(product._id)} white={1}>
                <CartIcon />
                Add to cart
              </Button>
            </ButtonsWrapper>
          </Column>

          <div>
            <img src={product?.images[0]} alt="product" />
          </div>
        </ColumnsWrapper>
      </Center>
    </Bg>
  );
}
