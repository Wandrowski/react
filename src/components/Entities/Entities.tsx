import React, { FC } from 'react'
import styled from 'styled-components'
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducer'
import { IPhotosReducer } from '../../reducers/photosReducer'
import { IPostsReducer } from '../../reducers/postsReducer'
import { useSelector } from 'react-redux'
import { InnerWrapper } from '../../styledHelpers/Components'

const Wrapper = styled.div`
  width: 1200px;
  height: 550px;
  margin-left: 20px;
`
const FirstBox = styled.div`
  height: 550px;
  width: 1200px;
  padding-left: 0;
  padding-top: auto;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`
const NameBox = styled.div`
  width: 1000px;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  margin-left: 30px;
`
const NameBoxes = styled.div`
  width: 750px;
  margin-top: 25px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 5px;
  margin-left: 30px;
`
const FirstABC = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  width: 1100px;
  height: 80px;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`
const SecondABC = styled.div`
  margin-top: 10px;
  margin-left: 30px;
  width: 1100px;
  height: 80px;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
`
const MediumImage = styled.img`
  margin-top: -15px;
  margin-left: 5px;
  height: 70px;
`
const MediumImages = styled.img`
  margin-top: -15px;
  margin-left: 5px;
  height: 70px;
`
const TitleBox = styled.div`
  margin-left: 10px;
`

export const Entities: FC = () => {
  const { usersList, photosList, postsList } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer & IPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
  }))

  return (
    <Wrapper>
      <FirstBox>
        <NameBox>
          <h2
            style={{ marginLeft: '0px', marginTop: '10px', fontSize: '20px' }}
          >
            Entities
          </h2>
          <img
            style={{
              width: '15px',
              height: '15px',
              marginLeft: '10px',
              marginTop: '10px',
            }}
            src="../Media/icons/cog.png"
            alt=""
          />
          <h2
            style={{ marginLeft: '500px', marginTop: '10px', fontSize: '20px' }}
          >
            Mosaic/List
          </h2>
        </NameBox>
        <NameBoxes>all itd</NameBoxes>
        <FirstABC>
          <h4
            style={{
              marginLeft: '90px',
              marginTop: '10px',
              fontSize: '20px',
              color: 'blue',
            }}
          >
            ABC generic company
          </h4>

          <MediumImage src={photosList[2] ? photosList[2].url : ''} alt="" />
          <h4
            style={{
              marginLeft: '90px',
              marginTop: '-25px',
              fontSize: '12px',
              color: 'gray',
            }}
          >
            Carcas 1050, Distrio Capital, Venezuela
          </h4>
        </FirstABC>
        <SecondABC>
          <h4
            style={{
              marginLeft: '86px',
              marginTop: '10px',
              fontSize: '20px',
              color: 'blue',
            }}
          >
            World company SAS
          </h4>
          <MediumImages src={photosList[2] ? photosList[2].url : ''} alt="" />
          <h4
            style={{
              marginLeft: '100px',
              marginTop: '-25px',
              fontSize: '12px',
              color: 'gray',
            }}
          >
            Carcas 1050, Distrio Capital, Venezuela
          </h4>
        </SecondABC>
        <SecondABC>
          <h4
            style={{
              marginLeft: '86px',
              marginTop: '10px',
              fontSize: '20px',
              color: 'blue',
            }}
          >
            World company SAS
          </h4>
          <MediumImages src={photosList[2] ? photosList[2].url : ''} alt="" />
          <h4
            style={{
              marginLeft: '100px',
              marginTop: '-25px',
              fontSize: '12px',
              color: 'gray',
            }}
          >
            Carcas 1050, Distrio Capital, Venezuela
          </h4>
        </SecondABC>
        <SecondABC>
          <h4
            style={{
              marginLeft: '86px',
              marginTop: '10px',
              fontSize: '20px',
              color: 'blue',
            }}
          >
            World company SAS
          </h4>
          <MediumImages src={photosList[2] ? photosList[2].url : ''} alt="" />
          <h4
            style={{
              marginLeft: '100px',
              marginTop: '-25px',
              fontSize: '12px',
              color: 'gray',
            }}
          >
            Carcas 1050, Distrio Capital, Venezuela
          </h4>
        </SecondABC>
        <SecondABC>
          <h4
            style={{
              marginLeft: '86px',
              marginTop: '10px',
              fontSize: '20px',
              color: 'blue',
            }}
          >
            World company SAS
          </h4>
          <MediumImages src={photosList[2] ? photosList[2].url : ''} alt="" />
          <h4
            style={{
              marginLeft: '100px',
              marginTop: '-25px',
              fontSize: '12px',
              color: 'gray',
            }}
          >
            Carcas 1050, Distrio Capital, Venezuela
          </h4>
        </SecondABC>
      </FirstBox>
    </Wrapper>
  )
}
