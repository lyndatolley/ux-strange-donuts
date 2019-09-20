import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import imageList from "../images/imageList"

import "../components/omnes.css"
import "../components/styles.scss"

const sectionTitle = styled.h2`
    font-family: Omnes SemiCond;
    font-style: normal;
    font-weight: 600;
`

const thumbnailTitle = styled.h3`
    font-family: Omnes SemiCond;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: 0.0120588em;
    color: #FFFFFF;
`
const thumbNailWrap = styled.div`
    display: block;
`

const donutImg = styled.img`
    position: relative;
    z-index: 145;
`

const thumbnailShape = styled.div`
    border-radius: 11px;
    position: relative;
    z-index: 143;
    
`
const thumbnail = props => (
    <thumbNailWrap>
      <donutImg src={props.donutImage} alt="" />
      <thumbnailShape>
        <thumbnailTitle id="_ttitle">{props.title}</thumbnailTitle>
      </thumbnailShape>
    </thumbNailWrap>
  )

  export default () => (
    <div className="classics">
      <thumbNailWrap
        title="Rainbow Pony"
        avatar= {imageList.rainbow}
      />
    </div>
  )