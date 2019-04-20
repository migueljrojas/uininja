import styled from 'styled-components';
import imageSet from 'constants/imageSet';
import { getFromTheme } from 'utils/theme-manager';

const ImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 0;

  img {
    opacity: ${getFromTheme('home.imageOpacity')};
    width: 100%;
    height: auto;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    min-height: 100%;
  }
`;

const ImageOverlay = () => {
  const imageSrc = imageSet[Math.floor(Math.random() * imageSet.length)];
  return (
    <ImageWrapper>
      <img
        alt="UI NInja - Web Studio"
        src={imageSrc}
      />
    </ImageWrapper>
  );
};

export default ImageOverlay;
