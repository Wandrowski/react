import React, { FC } from 'react'
import styled from 'styled-components'

import { Wrapper } from '../../styledHelpers/Components'
import { Colors } from '../../styledHelpers/Colors'
import { ExpandedMenu } from '../TopBar/ExpandedMenu'
import useDropdown from 'react-dropdown-hook'

const InnerWrapper = styled.div`
  width: 100%;
  background: ${Colors.white};
`

const RightIcons = styled.div`
  float: right;
  text-align: 10px;
  display: flex;
`

const SearchBar = styled.div`
  text-align: center;
  justify-content: space-between;
  margin-top: 10px;

  /*
*/
`
const LeftIcon = styled.div`
  display: flex;
  justify-content: space-between;
  float: left;
  margin: 0px;
  margin-left: 30px;
`

const InputWrapper = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
`

// const HomeBar = styled.div`
// padding:15px;
// font-size: 20px;
// padding-top:0;
// `;

export const TopBar: FC = () => {
  const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] =
    useDropdown()

  return (
    <Wrapper>
      <InnerWrapper>
        <InputWrapper>
          <LeftIcon>
            <img
              style={{ width: '30px', height: '30px' }}
              src="./media/icons/logo.png"
              alt=""
            ></img>
            <img
              style={{ marginLeft: '30px' }}
              src="./media/icons/house2.png"
              alt=""
            ></img>

            {/*<SearchBar>
                         <div>
                        <input type="szukaj" ></input>
                         <img src ="./media/icons/search.png"  alt="" ></img>
                         </div>
                        </SearchBar> */}
            <div ref={wrapperRef}>
              <div onClick={toggleDropdown}>
                <img
                  style={{ marginLeft: '200px' }}
                  src="./media/icons/arrow-down.png"
                  alt=""
                />
              </div>
              {dropdownOpen && (
                <>
                  <ExpandedMenu></ExpandedMenu>
                </>
              )}
            </div>
            <div onClick={closeDropdown}></div>
          </LeftIcon>

          <SearchBar>
            <div>
              <input
                style={{ width: '400px' }}
                type="text"
                placeholder="Research"
              ></input>
              <img src="./media/icons/search.png" alt="" />
            </div>
          </SearchBar>

          <RightIcons>
            <img
              src="./media/icons/house.png"
              style={{ padding: '10px' }}
              alt=""
            ></img>{' '}
            <div className="iconNumber">5</div>
            <img
              src="./media/icons/comments.png"
              style={{ padding: '10px' }}
              alt=""
            ></img>{' '}
            <div className="iconNumber">3</div>
            <img
              src="./media/icons/bell.png"
              style={{ padding: '10px' }}
              alt=""
            ></img>
          </RightIcons>
        </InputWrapper>
      </InnerWrapper>
    </Wrapper>
  )
}
