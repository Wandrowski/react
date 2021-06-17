import { FC } from 'react'
import styled from 'styled-components'

const MainDiv = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`
const CorporateDiv = styled.div`
  margin-left: 15px;
  height: 200px;
  width: 860px;
  background-color: white;
  box-shadow: 2px 2px 4px 2px #a3a3a381;
  border-radius: 5px;
`
const CorporateImage = styled.img``
const SettingsIcon = styled.img`
  float: right;
  margin-top: 9px;
  height: 20px;
  width: auto;
  padding-right: 25px;
`
const CorporateLabel = styled.label`
  float: left;
  padding-top: 10px;
  padding-left: 100px;
  font-size: 20px;
`
const EntityIcon1 = styled.img`
  height: 50px;
  margin-top: -15px;
  margin-left: 28px;
`
const MidDiv = styled.div`
  height: 30px;
  background-color: white;
`

const Label = styled.div`
  position: relative;
  margin-left: 100px;
  margin-top: -33px;
`
const SliderDiv = styled.div`
  background-color: #eeebeb;
  width: 890px;
  height: 240px;
  margin-top: 20px;
  display: flex;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
  position: relative;
`

const SliderTitle = styled.label`
  position: absolute;
  font-size: 20px;
  color: grey;
  margin-left: 50px;
  margin-top: 15px;
`
const Box = styled.div`
  height: 170px;
  width: 250px;
  background-color: white;
  margin-top: 50px;
  margin-left: 35px;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`
const Icon = styled.img`
  height: 40px;
  margin-top: 20px;
  margin-left: 10px;
`
const TitleDiv = styled.div`
  margin-top: 15px;
  margin-left: 10px;
  font-size: 20px;
`
const LabelDiv = styled.div`
  margin-top: 15px;
  margin-left: 10px;
`

export const Workspaces: FC = () => {
  return (
    <MainDiv>
      <CorporateDiv>
        <CorporateImage src="/media/icons/office.jpg" />
        <CorporateLabel> Corporate Holdings </CorporateLabel>
        <MidDiv>
          <SettingsIcon src="/media/icons/settings2.png" />
        </MidDiv>
        <EntityIcon1 src="/media/icons/entities2.png" />
        <Label>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Label>
      </CorporateDiv>
      <SliderDiv>
        <SliderTitle>Start Working on corporate matters</SliderTitle>
        <Box>
          <Icon src="/media/icons/entities.png" />
          <TitleDiv>Explore Your Entities</TitleDiv>
          <LabelDiv>
            Take a few minutes to look at the most important elements and
            specificities of your entities
          </LabelDiv>
        </Box>
        <Box>
          <Icon src="/media/icons/entities.png" />
          <TitleDiv>Explore Your Entities</TitleDiv>
          <LabelDiv>
            Take a few minutes to look at the most important elements and
            specificities of your entities
          </LabelDiv>
        </Box>
        <Box>
          <Icon src="/media/icons/entities.png" />
          <TitleDiv>Explore Your Entities</TitleDiv>
          <LabelDiv>
            Take a few minutes to look at the most important elements and
            specificities of your entities
          </LabelDiv>
        </Box>
      </SliderDiv>
    </MainDiv>
  )
}
