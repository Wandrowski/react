import React, { FC } from 'react'
import styled from 'styled-components'

import { Wrapper } from '../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors'
import { useSelector } from 'react-redux'
import { IState } from '../../reducers'
import { IUsersReducer } from '../../reducers/usersReducer'
import { IPhotosReducer } from '../../reducers/photosReducer'
import { IPostsReducer } from '../../reducers/postsReducer'
import { Link } from 'react-router-dom'

const LeftPanel = styled.div`
  height: 500px;
  width: 200px;
  padding-left: 10px;
`

const Box = styled.div`
  height: 200px;
  width: 180px;
  padding-left: 0;
  padding-top: auto;
  box-shadow: 4px 4px 8px 1px #8e8e8e;
  border-radius: 5px;
  margin-top: 20px;
`

const Line = styled.div`
  height: 1px;
  width: 180px;
  margin-top: 15%;
  background-color: grey;
  margin-left: 0;
  padding: 0;
`

const LeftPanelIcons = styled.div`
  width: 190px;
  margin-top: 10px;
`

const PubIcon = styled.div`
  padding-top: 10px;
`
const Zdj = styled.img`
  height: 10%;
  width: 10%;
  margin-right: 5px;
  padding-left: 10px;
`

const Zdj2 = styled.img`
  height: 10%;
  width: 8%;
  margin-left: 5px;
`
const Zdj3 = styled.img`
  height: 10%;
  width: 10%;
  margin-left: 5px;
  padding-left: 20px;
`

const EcoIcon = styled.div`
  padding-top: 10px;
`

const EntityIcon = styled.div`
  padding-top: 10px;
`
const JobTitle = styled.div`
  color: gray;
  text-align: center;
`
const BigImage = styled.img`
  width: 50px;
  border-radius: 50%;
  padding-right: 20%;
  border: 1px solid black;
  margin: 10px;
  padding: 0;
  margin-left: 30%;
`

export const LeftMenu: FC = () => {
  const { usersList, photosList, postsList } = useSelector<
    IState,
    IUsersReducer & IPhotosReducer & IPostsReducer
  >((globalState) => ({
    ...globalState.users,
    ...globalState.photos,
    ...globalState.posts,
  }))

  return (
    <LeftPanel>
      <Box>
        <BigImage src={photosList[5] ? photosList[5].url : ''} alt="" />
        <JobTitle> {usersList?.[7]?.name} </JobTitle>

        <Line></Line>

        <div style={{ paddingTop: '20px' }}>
          <div style={{ paddingBottom: '10px' }}>
            {' '}
            <Zdj src="./media/icons/people.png" />{' '}
            <Link to="/people"> Your network </Link>{' '}
            <Zdj3
              className="borderIcon"
              src="./media/icons/user-plus.png"
              alt=""
            />{' '}
          </div>
          <div>
            {' '}
            <Zdj src="./media/icons/publications.png" alt="" />{' '}
            <Link to="/settings">Your publcations</Link>{' '}
            <Zdj2 src="./media/icons/plus.png" alt="" />{' '}
          </div>
        </div>
      </Box>
      <LeftPanelIcons>
        <PubIcon>
          <img
            src="./media/icons/publications.png"
            style={{ marginLeft: '10px' }}
            alt=""
          />
          <Link style={{ padding: '25px' }} to="/publications">
            {' '}
            Publications
          </Link>
        </PubIcon>
        <EcoIcon>
          <img
            src="./media/icons/ecosystem.png"
            style={{ marginLeft: '10px' }}
            alt=""
          />
          <Link style={{ padding: '25px' }} to="/ecosystem">
            Ecosystem
          </Link>
        </EcoIcon>
        <EntityIcon>
          <img
            src="./media/icons/entities.png"
            style={{ marginLeft: '10px' }}
            alt=""
          />
          <Link style={{ padding: '20px' }} to="/entities">
            Entities
          </Link>
        </EntityIcon>
      </LeftPanelIcons>
    </LeftPanel>
  )
}
