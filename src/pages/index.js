import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

//Images
import PaperBackground from "../images/paper.jpg"
import ChemBackground from "../images/chem.jpg"
import CameraHover from "../images/camerahover.jpg"
import FilmHover from "../images/filmhover.jpg"
import LensesHover from "../images/lenseshover.jpg"
import GearHover from "../images/gearhover.jpg"
import DarkroomHover from "../images/darkroomhover.jpg"

const Welcome = styled.section`
  width: 100%;
  height: 85vh;
  background-image: url(${PaperBackground});
  background-size: cover;
  background-position: center;
  .blueCard {
    background-color: #6cb1d9;
    position: relative;
    height: 225px;
    width: 400px;
    top: 50%;
    left: 15%;
    z-index: 0;
    .yellowCard {
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-color: #ffdf63;
      position: relative;
      height: 225px;
      width: 400px;
      bottom: 20px;
      right: 20px;
      z-index: 1;
      .descriptionWrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 30px;
        h3 {
          font-size: 36px;
          font-family: "Poller One";
        }
        p {
          font-family: "Lato";
          text-align: center;
          margin: 0;
        }
      }
    }
  }
`
const SeparationBar = styled.section`
  height: 100px;
  width: 100%;
  margin: 50px 0 0 0;
  background-color: #ffdf63;
  .headingWrapper {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    align-items: center;
    h3 {
      padding: 0;
      margin: 0;
      font-family: "Poller One";
      font-size: 36px;
    }
  }
`

const ShopByCategory = styled.section`
  height: 100%;
  width: 100%;
  .categoriesContainer {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 50px 0 50px 0;
    .categoryWrapper {
      margin: 50px;
      .categoriesBlue {
        flex-direction: column;
        justify-content: center;
        background-color: #6cb1d9;
        position: relative;
        height: 300px;
        width: 300px;
        z-index: 0;
        flex-grow: none;
        .filmYellow {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: #ffdf63;
          position: relative;
          height: 300px;
          width: 300px;
          z-index: 1;
          flex-grow: none;
          right: 20px;
          bottom: 20px;
          .headingWrapper {
            padding: 15px;
            h1 {
              font-family: "Poller One";
              font-size: 36px;
              margin: 0;
            }
          }
          &:hover {
            background-image: url(${FilmHover});
            background-size: cover;
            background-position: center;
            .headingWrapper {
              background-color: white;
            }
          }
        }
        .camerasYellow {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: #ffdf63;
          position: relative;
          height: 300px;
          width: 300px;
          z-index: 1;
          flex-grow: none;
          right: 20px;
          bottom: 20px;
          .headingWrapper {
            padding: 15px;
            h1 {
              font-family: "Poller One";
              font-size: 36px;
              margin: 0;
            }
          }
          &:hover {
            background-image: url(${CameraHover});
            background-size: cover;
            background-position: center;
            .headingWrapper {
              background-color: white;
            }
          }
        }
        .lensesYellow {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: #ffdf63;
          position: relative;
          height: 300px;
          width: 300px;
          z-index: 1;
          flex-grow: none;
          right: 20px;
          bottom: 20px;
          .headingWrapper {
            padding: 15px;
            h1 {
              font-family: "Poller One";
              font-size: 36px;
              margin: 0;
            }
          }
          &:hover {
            background-image: url(${LensesHover});
            background-size: cover;
            background-position: center;
            .headingWrapper {
              background-color: white;
            }
          }
        }
        .gearYellow {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: #ffdf63;
          position: relative;
          height: 300px;
          width: 300px;
          z-index: 1;
          flex-grow: none;
          right: 20px;
          bottom: 20px;
          .headingWrapper {
            padding: 15px;
            h1 {
              font-family: "Poller One";
              font-size: 36px;
              margin: 0;
            }
          }
          &:hover {
            background-image: url(${GearHover});
            background-size: cover;
            background-position: center;
            .headingWrapper {
              background-color: white;
            }
          }
        }
        .darkroomYellow {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          background-color: #ffdf63;
          position: relative;
          height: 300px;
          width: 300px;
          z-index: 1;
          flex-grow: none;
          right: 20px;
          bottom: 20px;
          .headingWrapper {
            padding: 15px;
            h1 {
              font-family: "Poller One";
              font-size: 36px;
              margin: 0;
            }
          }
          &:hover {
            background-image: url(${DarkroomHover});
            background-size: cover;
            background-position: center;
            .headingWrapper {
              background-color: white;
            }
          }
        }
      }
    }
  }
`

const About = styled.section`
  width: 100%;
  height: 60vh;
  background-image: url(${ChemBackground});
  background-size: cover;
  background-position: center;
  padding: 30px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .aboutBlue {
    flex-direction: column;
    justify-content: center;
    background-color: #6cb1d9;
    position: relative;
    height: 300px;
    width: 700px;
    z-index: 0;
    flex-grow: none;
    .aboutYellow {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      background-color: #ffdf63;
      position: relative;
      height: 300px;
      width: 700px;
      z-index: 1;
      flex-grow: none;
      right: 20px;
      bottom: 20px;
      .aboutWrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 20px;
        h1 {
          font-family: "Poller One";
          font-size: 36px;
        }
        p {
          font-family: "Lato";
          text-align: center;
          margin: 0;
        }
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Welcome>
      <div className="blueCard">
        <div className="yellowCard">
          <div className="descriptionWrapper">
            <h3>Welcome!</h3>
            <p>A shop for photogrpahers in Sonoma County, CA</p>
          </div>
        </div>
      </div>
    </Welcome>
    <SeparationBar>
      <div className="headingWrapper">
        <h3>Shop Products By Category:</h3>
      </div>
    </SeparationBar>
    <ShopByCategory>
      <div className="categoriesContainer">
        <div className="categoryWrapper">
          <div className="categoriesBlue">
            <div className="filmYellow">
              <div className="headingWrapper">
                <h1>Film</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="categoryWrapper">
          <div className="categoriesBlue">
            <div className="camerasYellow">
              <div className="headingWrapper">
                <h1>Cameras</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="categoryWrapper">
          <div className="categoriesBlue">
            <div className="lensesYellow">
              <div className="headingWrapper">
                <h1>Lenses</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="categoryWrapper">
          <div className="categoriesBlue">
            <div className="gearYellow">
              <div className="headingWrapper">
                <h1>Gear</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="categoryWrapper">
          <div className="categoriesBlue">
            <div className="darkroomYellow">
              <div className="headingWrapper">
                <h1>Darkroom</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShopByCategory>
    <About>
      <div className="aboutBlue">
        <div className="aboutYellow">
          <div className="aboutWrapper">
            <h1>About Us</h1>
            <p>
              Mixtape plaid typewriter church-key, crucifix vexillologist before
              they sold out everyday carry affogato. Wolf bitters wayfarers jean
              shorts banh mi aesthetic. Four loko la croix af pork belly
              portland, pour-over freegan affogato YOLO mlkshk fixie twee
              gentrify man bun. Food truck street art four dollar toast
              cardigan.
            </p>
          </div>
        </div>
      </div>
    </About>
  </Layout>
)

export default IndexPage
