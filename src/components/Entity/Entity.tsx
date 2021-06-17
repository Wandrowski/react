import styled from "styled-components";
import { FC, useState } from "react";
import { SingleEntity } from "../SingleEntity/SingleEntity";
import { IState } from "../../reducers";
import { useSelector } from "react-redux";
import { ISinglePhoto } from "../../entities/photos";

const EntitysWrapper = styled.div``;
const EntityMarginDiv = styled.div`
  margin-left: 100px;
`;
const MainDiv = styled.div`
  margin-left: 120px;
  margin-top: 30px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
const TopDiv = styled.div``;
const TitleLabel = styled.label`
  font-size: 20px;
`;
const MosaicLabel = styled.label`
  font-size: 20px;
  position: absolute;
  right: 75px;
`;
const IconSettings = styled.img`
  position: absolute;
  margin-top: 5px;
  margin-left: 10px;
  height: 15px;
`;
const GridIcon = styled.img`
  position: absolute;
  margin-top: -20px;
  margin-left: 1130px;
  height: 20px;
`;

const AllMenuDiv = styled.div`
  height: 20px;
  width: 40px;
  background-color: white;
  padding:2px;
  font-size:15px;
  box-shadow:4px 4px 8px 1px #8e8e8e;
border-radius:4px;
display: inline-block;
margin-right: 20px;

`;
const ArrowIcon = styled.img`
position: absolute;
margin-top:2px;
margin-left:5px;
`;

const OptionsDiv = styled.div`
display: flex;
  align-items: center;
  margin: 10px 0;
`

const OptionDiv = styled.div`
  display: inline-flex;
  align-items: center;
  margin-right: 20px;
`

export const Entity: FC = () => {
  const photosList = useSelector<IState, ISinglePhoto[]>(
    (state) => state.photos.photosList
  );
  const [isGrid, setIsGrid] = useState<boolean>(false);

  const entity = [];
  for (let i = 0; i < 24; i++) {
    entity.push({
      name: "ABC",
      address: "Caracas 1050 Distro Capital Venezuela ",
      url: photosList[Math.floor(Math.random() * photosList.length)]?.url,
    });
  }
  return (
    <EntitysWrapper>
      <MainDiv>
          <TopDiv>
            <div>
        <TitleLabel>Entities</TitleLabel>
        <IconSettings src="/media/icons/settings2.png" />
        </div>
        <OptionsDiv>
        <AllMenuDiv>
            All
            <ArrowIcon src="/media/icons/arrow-down.png" alt=""></ArrowIcon>
        </AllMenuDiv>
        <OptionDiv>
        <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clip-rule="evenodd" />
</svg>
Sort
          </OptionDiv>
          <OptionDiv>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" />
</svg>
Filter
          </OptionDiv>
          <OptionDiv>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20" fill="currentColor">
  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
</svg>
Share
          </OptionDiv>
          </OptionsDiv>
        </TopDiv>
        <MosaicLabel onClick={() => setIsGrid(!isGrid)}>
            {
                isGrid ? "List" : "Mosaic"
            }
            </MosaicLabel>
        <GridIcon src="/media/icons/grid.png" alt="" />
        
      </MainDiv>
      
      <EntityMarginDiv>
        {entity.map((entity) => (
          <SingleEntity
            name={entity.name}
            address={entity.address}
            url={entity.url}
            list={!isGrid}
          />
        ))}
      </EntityMarginDiv>
    </EntitysWrapper>
  );
};