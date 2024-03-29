import { FC } from 'react'
import styled from 'styled-components'

const ComponentTitle = styled.div`
  margin-top: 20px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: grey;
  font-weight: 700;
  display: inline;
`
const Input = styled.input`
  margin-left: 350px;
  height: 18px;
`

const SearchIcon = styled.img`
  height: 16px;
  margin-left: -20px;
  position: absolute;
  margin-top: 5px;
`
const SignalIcon = styled.img`
  margin-left: 30px;
  margin-top: 1px;
  position: absolute;
`

const FollowLabel = styled.label`
  margin-left: 60px;
  font-size: 15px;
  color: #108190;
  font-weight: 400px;
`

const MainDiv = styled.div`
  width: 890px;
  height: 70px;
  background-color: white;
  margin-top: 10px;
  box-shadow: 2px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`

const Work = styled.div`
  max-height: 100px;
  margin-top: 50px;
`

const TitlleDiv = styled.div``

const Title = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #27279e;
  font-weight: 700;
  margin-left: 20px;
`
const Lorem = styled.label`
  font-size: 13px;
`

const LoremDiv = styled.div`
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
`

const IconDiv = styled.div`
  margin-left: 20px;
`

const IconLabel = styled.label`
  padding-left: 10px;
  padding-right: 10px;
  float: left;
`

const Icon = styled.img`
  float: left;
`

const DateLabel = styled.label`
  margin-left: 30px;
  font-size: 13px;
  font-weight: 2;
  color: grey;
`

type PropsType = {
  heading?: string
}

export const ResumeYourWork: FC<PropsType> = ({
  heading = 'Resume Your Work',
}) => {
  return (
    <Work>
      <ComponentTitle>
        {heading}
        <Input />
        <SearchIcon src="/media/icons/search.png" alt="" />
        <SignalIcon src="/media/icons/signal.png" alt="" />
        <FollowLabel>Followed</FollowLabel>
      </ComponentTitle>
      <MainDiv>
        <TitlleDiv>
          <Title>Work Company SAS</Title>
        </TitlleDiv>
        <LoremDiv>
          <Lorem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Lorem>
        </LoremDiv>
        <IconDiv>
          <Icon src="../media/icons/corporate.png" />

          <IconLabel>Subsid.corp</IconLabel>
          <Icon src="../media/icons/corporate.png" />
          <IconLabel>Corporate</IconLabel>
          <DateLabel>Last update 3 days ago by Adrian </DateLabel>
        </IconDiv>
      </MainDiv>
      <MainDiv>
        <TitlleDiv>
          <Title>Contract #145</Title>
        </TitlleDiv>
        <LoremDiv>
          <Lorem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Lorem>
        </LoremDiv>
        <IconDiv>
          <Icon src="../media/icons/corporate.png" />

          <IconLabel>Subsid.corp</IconLabel>
          <Icon src="../media/icons/corporate.png" />
          <IconLabel>Corporate</IconLabel>
          <DateLabel>Last update 3 days ago by Kuba </DateLabel>
        </IconDiv>
      </MainDiv>

      <MainDiv>
        <TitlleDiv>
          <Title>Contract #145</Title>
        </TitlleDiv>
        <LoremDiv>
          <Lorem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Lorem>
        </LoremDiv>
        <IconDiv>
          <Icon src="../media/icons/corporate.png" />

          <IconLabel>Subsid.corp</IconLabel>
          <Icon src="../media/icons/corporate.png" />
          <IconLabel>Corporate</IconLabel>
          <DateLabel>Last update 3 days ago by Marek</DateLabel>
        </IconDiv>
      </MainDiv>
      <MainDiv>
        <TitlleDiv>
          <Title>Contract #145</Title>
        </TitlleDiv>
        <LoremDiv>
          <Lorem>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Lorem>
        </LoremDiv>
        <IconDiv>
          <Icon src="../media/icons/corporate.png" />

          <IconLabel>Subsid.corp</IconLabel>
          <Icon src="../media/icons/corporate.png" />
          <IconLabel>Corporate</IconLabel>
          <DateLabel>Last update 3 days ago by Wojtek</DateLabel>
        </IconDiv>
      </MainDiv>
    </Work>
  )
}
