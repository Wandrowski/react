import React, { Component } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styled from 'styled-components'

import { Colors } from '../../styledHelpers/Colors'

const WorkspacesWrapper = styled.div`
  max-width: 1050px;
  height: 300px;
`

const WorkName = styled.div`
  text-align: left;
  color: grey;
  padding-left: 15px;
  margin-bottom: 0px;
`
const InnerWorkspaces = styled.div`
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`
const WorkspacesBox = styled.div`
  height: 270px;
  background-color: white;
  border: 1px solid ${Colors.verylightgray};
  margin-right: 10px;
  max-width: 300px;
`
const BoxIcon = styled.img`
  position: absolute;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  height: 60px;
  margin-top: -45px;
  margin-left: 10px;
  box-shadow: 0 0 3px grey;
  z-index: 7;
`
const WolnyBox = styled.div`
  height: 300px;
  width: 100px;
`
const BoxTitle = styled.h3`
  margin: -30px;
  margin-top: 20px;
  margin-left: 150px;
  color: ${Colors.black};
`
const ImgBox = styled.div`
  padding-top: 60px;
  width: 250px;
  justify-content: space-between;
  display: flex;
  margin-left: 20px;
  margin-top: 10px;
`
const BoxLastUpdate = styled.p`
  margin-left: 10px;
  padding-top: 20px;
`

export class WorkspacesSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    }
    return (
      <WorkspacesWrapper>
        <h4> Workspaces</h4>
        <Slider {...settings}>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Client contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Supplier contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 2 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Client contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Supplier contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Client contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Client contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Client contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Client contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
          <WorkspacesBox>
            <img
              src="./media/icons/pies.png"
              style={{ width: '300px', height: '120px' }}
              alt=""
            />
            <BoxIcon src="../Media/icons/contract.png" />
            <BoxTitle>Client contract</BoxTitle>
            <div>
              <ImgBox>
                <img src="../Media/icons/contract.png" alt="" />
                Contract
                <img
                  src="../Media/icons/circle-solid.svg"
                  style={{ width: '8px', height: '8px', marginTop: '8px' }}
                  alt=""
                />
                <img src="../Media/icons/people.svg" alt="" />
                25 users
              </ImgBox>
              <BoxLastUpdate>Last update 3 days ago</BoxLastUpdate>
            </div>
          </WorkspacesBox>
        </Slider>
      </WorkspacesWrapper>
    )
  }
}
