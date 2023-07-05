import { styled } from "styled-components";
import cameraDollyRocksHawaii from "../../assets/images/Camera-Dolly-Rocks-Hawaii.jpeg";


export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
`;

export const BannerContainer = styled.div`
  background-image: url(${cameraDollyRocksHawaii});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 95vw;
  height: 80vw;
`;
