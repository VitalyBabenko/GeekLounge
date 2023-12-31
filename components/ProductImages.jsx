import { useState } from "react";
import { styled } from "styled-components";

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const BigImage = styled.img`
  max-width: 100%;
  max-height: 400px;
`;

const ImageButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const ImageButton = styled.div`
  display: flex;
  border: 1px solid #aaa;
  border-radius: 5px;
  margin-top: 10px;
  padding: 2px;
  cursor: pointer;
`;

export default function ProductImages({ images }) {
  const [activeImage, setActiveImage] = useState(images?.[0]);
  return (
    <>
      <BigImage src={activeImage} />
      <ImageButtons>
        {images.map((image) => (
          <ImageButton onClick={() => setActiveImage(image)} key={image}>
            <Image src={image} />
          </ImageButton>
        ))}
      </ImageButtons>
    </>
  );
}
