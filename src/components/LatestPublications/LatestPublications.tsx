import React, { FC } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducer'
import { IPhotosReducer } from '../../reducers/photosReducer'
import { IPostsReducer } from '../../reducers/postsReducer'
import { Link } from 'react-router-dom'
import { Colors } from '../../styledHelpers/Colors'
import {
  Wrapper,
  InnerWrapper,
  Title,
  Text,
} from '../../styledHelpers/Components'

const StyledWrapper = styled(Wrapper)`
  height: 350px;
  width: 1200px;
  background: ${Colors.white};
  border: 5px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 5px;
  padding: 0;
  border: 1px solid ${Colors.verylightgray};
`

const BigImageContainer = styled.div`
  width: 33.3%;
`

const MiniatureImage = styled.img`
  width: 20px;
  border-radius: 50%;
  margin-right: 10px;
  border: 1px solid black;
  margin: 10px;
  padding: 0;
`

const MediumImage = styled.img`
  padding: 5px;
  height: 70px;
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
`
const BigImage = styled.img`
  height: 350px;
  border-radius: 5px;
  margin: 0;
  padding: 0;
`
const OverflowingTextFeild = styled.p`
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 17px;
  height: 36px;
  white-space: no-wrap;
  font-weight: 500;
  margin-left: 10px;
`

const AbsoluteContainer = styled.div`
  margin-top: 60px;
  width: 300px;
  position: absolute;
  padding-left: 20px;
  color: ${Colors.white};
  top: 320px;
  z-index: 1000;
  display: block;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
const BlockContainer = styled.div`
  display: block;
  margin-left: 40px;
`
const ImageContainer = styled.img`
  margin: 0px;
  padding: 0px;
`
export const LatestPublications: FC = () => {
  const { usersList, photosList, postsList } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer & IPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
  }))

  return (
    <StyledWrapper>
      <BigImageContainer>
        <BigImage src={photosList[5] ? photosList[5].url : ''} alt="" />
        <AbsoluteContainer>
          <OverflowingTextFeild>
            {postsList[3] ? postsList[3].body : ''}
          </OverflowingTextFeild>
          <InnerWrapper>
            <h4>7 jan. 2020</h4>
            <MiniatureImage
              src={photosList[4] ? photosList[4].url : ''}
              alt=""
            />
            <h4>{usersList?.[7]?.name}</h4>
          </InnerWrapper>
        </AbsoluteContainer>
      </BigImageContainer>
      <BlockContainer>
        <Title>Latest publications</Title>
        <Wrapper>
          <MediumImage src={photosList[2] ? photosList[2].url : ''} alt="" />
          <BlockContainer>
            <OverflowingTextFeild>
              {postsList[3] ? postsList[3].body : ''}
            </OverflowingTextFeild>
            <InnerWrapper>
              <h4>7 jan. 2020</h4>
              <MiniatureImage
                src={photosList[4] ? photosList[4].url : ''}
                alt=""
              />
              <h4>{usersList?.[0]?.name}</h4>
            </InnerWrapper>
          </BlockContainer>
        </Wrapper>
        <Wrapper>
          <MediumImage src={photosList[3] ? photosList[3].url : ''} alt="" />
          <BlockContainer>
            <OverflowingTextFeild>
              {postsList[1] ? postsList[1].body : ''}
            </OverflowingTextFeild>
            <InnerWrapper>
              <h4>7 jan. 2020</h4>
              <MiniatureImage
                src={photosList[5] ? photosList[5].url : ''}
                alt=""
              />
              <h4>{usersList?.[3]?.name}</h4>
            </InnerWrapper>
          </BlockContainer>
        </Wrapper>
        <Wrapper>
          <MediumImage src={photosList[9] ? photosList[9].url : ''} alt="" />
          <BlockContainer>
            <OverflowingTextFeild>
              {postsList[8] ? postsList[8].body : ''}
            </OverflowingTextFeild>
            <InnerWrapper>
              <h4>7 jan. 2020</h4>
              <MiniatureImage
                src={photosList[2] ? photosList[2].url : ''}
                alt=""
              />
              <h4>{usersList?.[2]?.name}</h4>
            </InnerWrapper>
          </BlockContainer>
        </Wrapper>
        <StyledLink to="/test-site">
          <Text>See more publications</Text>
        </StyledLink>
      </BlockContainer>
    </StyledWrapper>
  )
}
