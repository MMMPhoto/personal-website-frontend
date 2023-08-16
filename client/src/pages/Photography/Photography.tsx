import Gallery from "react-photo-gallery";
import { PageContainer, PhotoCard } from "./styles";

const imageFilePathPrefix = "../assets/images/portfolio/";

const photos = [
  { src: `${imageFilePathPrefix}BlackMountainPanorama.jpg`, width: 2048, height: 527 },
  { src: `${imageFilePathPrefix}DSCF0787.jpg`, width: 4398, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF0837.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF0882.jpg`, width: 2886, height: 4329 },
  { src: `${imageFilePathPrefix}DSCF1578.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF1206.jpg`, width: 2886, height: 4329 },
  { src: `${imageFilePathPrefix}DSCF1582.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF1264.jpg`, width: 2886, height: 4329 },
  { src: `${imageFilePathPrefix}DSCF1508.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF1748.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF1891.jpg`, width: 2886, height: 4329 },
  { src: `${imageFilePathPrefix}DSCF1963.jpg`, width: 2886, height: 4329 },
  { src: `${imageFilePathPrefix}DSCF2231.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF2329.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF5219.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF6985.jpg`, width: 2886, height: 4329 },
  { src: `${imageFilePathPrefix}DSCF7034.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF7127.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF7130.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF7204.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF7225.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF7363.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF8328.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF9007.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF9420.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF9602.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}DSCF9783.jpg`, width: 4329, height: 2886 },
  { src: `${imageFilePathPrefix}IMG_0034.jpg`, width: 1638, height: 2048 },
];

const Photography = () => {
  return (
    <PageContainer>
      <PhotoCard>
        <Gallery photos={photos} targetRowHeight={500} margin={5} />
      </PhotoCard>
    </PageContainer>
  )
};

export default Photography 
