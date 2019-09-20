import React from 'react'
// import from 'https://use.typekit.net/sra3qyg.css'
import styled from "styled-components"
import NavBar from '../components/navRE.js'
import imageList from "../images/imageList"


import "../components/omnes.css"
import "../components/styles.scss"
import "../components/320.scss"
import "../components/340.scss"
import "../components/360.scss"


const ThumbnailTitle = styled.h3`
    font-family: Omnes SemiCond;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    z-index: 144;
    letter-spacing: 0.0120588em;
    color: #FFFFFF;
`
const ThumbNailWrap = styled.a`
    display: flex;
    flex-direction: column;
    position: relative;
`

const DonutImg = styled.img`
    z-index: 145;
`

const ThumbnailShape = styled.div`
    border-radius: 11px;
    z-index: 143;
    
`
const ThumbnailpinkRainbow = props => (
    <ThumbNailWrap id="pink" className="tWrap">
      <DonutImg src={props.donutImage} alt="" className="showDone"/>
      <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
      <ThumbnailShape id="shape" className="show">
      </ThumbnailShape>
    </ThumbNailWrap>
  )

  const ThumbnailredGlazed= props => (
   <ThumbNailWrap id="redGlaze" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const ThumbnailvFats= props => (
   <ThumbNailWrap id="vFs" className="tWrap pbj">
     <DonutImg src={props.donutImage} id="pbj" alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const ThumbnailCFats= props => (
   <ThumbNailWrap id="cFs" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const ThumbnailToast= props => (
   <ThumbNailWrap id="toast" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )

 const Thumbnailcookie = props => (
   <ThumbNailWrap id="pinkCookie" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone"/>
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape" className="show">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const ThumbnailPBJ= props => (
   <ThumbNailWrap id="pbj" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const Thumbnailbutter= props => (
   <ThumbNailWrap id="gooey" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const ThumbnailBacon= props => (
   <ThumbNailWrap id="bacon" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const Thumbnaildong= props => (
   <ThumbNailWrap id="ding" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const ThumbnailBart= props => (
   <ThumbNailWrap id="revenge" className="tWrap pbj">
     <DonutImg src={props.donutImage} id="pbj" alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const ThumbnailMagic = props => (
   <ThumbNailWrap id="pinkMagic" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone"/>
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape" className="show">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 const Thumbnailcocoa= props => (
   <ThumbNailWrap id="cocoa" className="tWrap">
     <DonutImg src={props.donutImage} alt="" className="showDone" />
     <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
     <ThumbnailShape id="shape">
     </ThumbnailShape>
   </ThumbNailWrap>
 )
 
const Home = () => {
   return (
    <div>
    <header>
         <NavBar/>
    </header>

      <div className="body">
        <div id="donuts"> 
            <div className="classics">
               <h3 className="sectionTitle">Classics</h3>
               <div className="donut_sections">
                  <ThumbnailpinkRainbow href = "/rainbowpony"
                     id = "pink"
                     title="Rainbow Pony"
                     donutImage= {imageList.rainbow}
                  />
                  <ThumbnailredGlazed href = "/rainbowpony"
                     title="Glazed"
                     donutImage= {imageList.glazed}
                  />

                  <ThumbnailvFats href = "/rainbowpony"
                     title="Vanilla Fat Steve"
                     donutImage= {imageList.vFatSteve}
                  />
                  <ThumbnailCFats href = "/rainbowpony"
                     title="Chocolate Fat Steve"
                     donutImage= {imageList.cFatSteve}
                  />
                  </div>
            
         </div>
         <div className="classics">
               <h3 className="sectionTitle">Creations</h3>
               <div className="donut_sections">
                  <ThumbnailPBJ href = "/rainbowpony"
                     title="PBJ (Grape)"
                     donutImage= {imageList.pbj}
                  />
                  <ThumbnailToast href = "/rainbowpony"
                     title="French Toast"
                     donutImage= {imageList.frenchToast}
                  />

                  <Thumbnailcookie href = "/rainbowpony"
                     title="Cookie Monster"
                     donutImage= {imageList.cookeMonster}
                  />
                  <Thumbnailbutter href = "/rainbowpony"
                     title="Gooey Butter"
                     donutImage= {imageList.gooeyButter}
                  />
                  <ThumbnailBacon href = "/rainbowpony"
                     title="Maple Bacon"
                     donutImage= {imageList.bacon}
                  />
                  <Thumbnaildong href = "/rainbowpony"
                     title="Ding Dong"
                     donutImage= {imageList.dingDong}
                  />
                  <ThumbnailBart href = "/rainbowpony"
                     title="Bart's Revenge"
                     donutImage= {imageList.bartsRevenge}
                  />
                  <ThumbnailMagic href = "/rainbowpony"
                     title="Majestic Unicorn Cinnamon Roll"
                     donutImage= {imageList.mcr}
                  />
                  <Thumbnailcocoa href = "/rainbowpony"
                     title="Cocoa Peblets"
                     donutImage= {imageList.cocoaP}
                  />
                  </div>
         </div>
      </div>
      <div id ="baked_treats">
      <div className="classics">
               <h3 className="sectionTitle">Rolls</h3>
               <div className="donut_sections">
               <ThumbnailBart href = "/rainbowpony"
                     title="Cinnamon Roll"
                     donutImage= {imageList.cinnamonRoll}
                  />
                  </div>
            
         </div>
            
            
      </div>
    </div>
    </div>  
   )
}
export default Home 