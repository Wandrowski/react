import React, { FC, useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { TopBar } from '../TopBar/TopBar'
import { LeftMenu } from '../LeftMenu/LeftMenu'
import { ResumeYourWork } from '../ResumeYourWork/ResumeYourWork'
import { WorkspacesSlider } from '../WorkSpaces/WorkspacesSlider'
import { Profile } from '../Profile/Profile'
import { Entities } from '../Entities/Entities'
import {Entity} from "../Entity/Entity"
import { Workspaces } from '../WorkSpaces/Workspaces'

import { LatestPublications } from '../LatestPublications/LatestPublications'
import { ClientContract } from '../WorkSpaces/Work/ClientContract'
import { Corporate } from '../WorkSpaces/Work/Corporate'
import { GroupNorms } from '../WorkSpaces/Work/GroupNorms'
import { RealEstateContracts } from '../WorkSpaces/Work/RealEstateContracts'
import { SupplierContract } from '../WorkSpaces/Work/SupplierContract'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { getUsers } from '../../actions/actionTypes/usersActions'
import { getPhotos } from '../../actions/actionTypes/photosActions'
import { getComments } from '../../actions/actionTypes/commentsActions'
import { getPosts } from '../../actions/actionTypes/postsActions'

type GetUsers = ReturnType<typeof getUsers>
type GetPhotos = ReturnType<typeof getPhotos>
type GetComments = ReturnType<typeof getComments>
type GetPosts = ReturnType<typeof getPosts>

const Wrapper = styled.div`
  max-width: 100vw;
`

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
`

const Content2 = styled.div`
  padding-top: -30px;
  margin-left: 120px;
  display: flex;
  flex: 1;
  max-width: 80%;
  flex-direction: column;
`
const Content3 = styled.div`
  max-width: 1200px;
  align-items: center;
  display: flex;
`

const PublicationsWrapper = styled.div`
  flex-grow: 0;
  max-width: 100%;
  display: flex;
`

const MainPage: FC = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch<GetUsers>(getUsers())
    dispatch<GetPhotos>(getPhotos())
    dispatch<GetComments>(getComments())
    dispatch<GetPosts>(getPosts())
  }, [])
  return (
    <Router>
      <Wrapper>
        <TopBar />

        <Content>
          <LeftMenu />

          <Switch>
            <Route path="/people">your network component</Route>
            <Route path="/workspace">
              <Content2>
                <Workspaces />
                <ResumeYourWork heading="Latest updates" />
              </Content2>
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/entities">
              {/* <Entities /> */}
              <Entity />
            </Route>
            <Route path="/publications"></Route>
            <Route path="/e">e</Route>
            <Route path="/">
              <Content2>
                <PublicationsWrapper>
                  <LatestPublications />
                </PublicationsWrapper>
                <WorkspacesSlider />
                <div>
                  <ResumeYourWork />
                </div>
              </Content2>
            </Route>
          </Switch>

          <Content3></Content3>
        </Content>
      </Wrapper>
    </Router>
  )
}
export default MainPage
