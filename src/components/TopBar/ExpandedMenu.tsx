import React, { FC } from 'react'
import styled from 'styled-components'

import { Wrapper } from '../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors'
import { Link } from 'react-router-dom'

const ExpandedMenuWrapper = styled.div`
  margin-top: 10px;
  margin-left: 120px;
  width: 200px;
  border: 1px solid grey;
  position: fixed;
  background:white;
`

const ExpandedMenuContet = styled.div`
  margin-top: 10px;
  margin-left: 10px;
  font-family: Arial Bold;
  font-size: 15px;
`

const MenuItem = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  padding-left: 5px;
`

const NewSection = styled.p`
  padding-left: 5px;
  color: gray;
  margin-top: 10px;
  margin: 3px;
  margin-top: 5px;
`
const ItemLink = styled.div`
  margin-left: -10px;
  height: 0.5px;
  width: 200px;
  background-color: gray;
  display: flex;
`
const Logout = styled.div`
  text-align: center;
  padding: 10px;
  color: gray;
`

const Scroll = styled.div`
  height: 370px;
  overflow-y: scroll;
  overflow-x: hidden;
  position: relative;
`

const ItemsWrapper = styled.div`
  display: flex;
`

export const ExpandedMenu: FC = () => {
  return (
    <ExpandedMenuWrapper>
      <ExpandedMenuContet>
        <input className="filter" type="text" placeholder="Filter..." />
        <NewSection> Platform </NewSection>
        <Scroll>
          <MenuItem>
            <img
              src="./media/icons/house.png"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <Link to="/e">Home</Link>
          </MenuItem>
          <MenuItem>
            <img
              src="./media/icons/Publications.png"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <Link to="/e">Publications </Link>
          </MenuItem>
          <MenuItem>
            <img
              src="./media/icons/people.png"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <Link to="/e">People </Link>
          </MenuItem>
          <MenuItem>
            <img
              src="./media/icons/entities.png"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <Link to="/e">Entities </Link>
          </MenuItem>
          <MenuItem>
            <img
              src="./media/icons/administration.png"
              style={{ marginRight: '10px' }}
              alt=""
            />
            <Link to="/e">Administration </Link>
            <NewSection> Workspacess </NewSection>
            <MenuItem>
              <img
                src="./media/icons/contract.png"
                style={{ marginRight: '10px' }}
                alt=""
              />
              <Link to="/e">Client contract</Link>
            </MenuItem>
            <MenuItem>
              <img
                src="./media/icons/contract.png"
                style={{ marginRight: '10px' }}
                alt=""
              />
              <Link to="/e">Supplier contract</Link>
            </MenuItem>
            <MenuItem>
              <img
                src="./media/icons/entities2.png"
                style={{ marginRight: '10px' }}
                alt=""
              />
              <Link to="/e">Corporate</Link>
            </MenuItem>
            <MenuItem>
              <img
                src="./media/icons/book.png"
                style={{ marginRight: '10px' }}
                alt=""
              />
              <Link to="/e">Group Norms</Link>
            </MenuItem>
            <MenuItem>
              <img
                src="./media/icons/contract.png"
                style={{ marginRight: '10px' }}
                alt=""
              />
              <Link to="/e">Real estate contract </Link>
            </MenuItem>
            <MenuItem>
              <img
                src="./media/icons/contract.png"
                style={{ marginRight: '10px' }}
                alt=""
              />
              <Link to="/e">Client contract</Link>
            </MenuItem>
            <MenuItem>
              <img
                src="./media/icons/contract.png"
                style={{ marginRight: '10px' }}
                alt=""
              />
              <Link to="/e">Client contract</Link>
            </MenuItem>
          </MenuItem>
        </Scroll>
        <div className="newsection"></div>
        <ItemLink></ItemLink>
        <NewSection>Account</NewSection>
        <MenuItem>
          <Link to="/profile">
            <ItemsWrapper>
              <img
                style={{ width: '20px', height: '25px', marginRight: '10px' }}
                src="./media/icons/czl.png"
                alt=""
              />
              <div>
                <div>Humberta Swift</div>
                <div>See profile</div>
              </div>
            </ItemsWrapper>
          </Link>
        </MenuItem>
        <MenuItem>
          <img
            src="./media/icons/privacy.png"
            style={{ marginRight: '10px' }}
            alt=""
          />
          Privacy
        </MenuItem>
        <MenuItem>
          <img
            src="./media/icons/settings.png"
            style={{ marginRight: '10px' }}
            alt=""
          />
          Settings
        </MenuItem>
        <ItemLink></ItemLink>
        <Logout>
          <img src="./Media/icons/logout.png" alt="" /> Logout
        </Logout>
      </ExpandedMenuContet>
    </ExpandedMenuWrapper>
  )
}
