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
 const ThumbnailBacon2= props => (
  <ThumbNailWrap id="bacon" className="tWrap">
    <DonutImg src={props.donutImage} alt="" className="showDone" id="pie" />
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
     <DonutImg src={props.donutImage} alt="" className="showDone" />
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
 const Thumbnailchip= props => (
  <ThumbNailWrap id="cocoa" className="tWrap">
    <DonutImg src={props.donutImage} alt="" className="showDone" id="chip"/>
    <ThumbnailTitle id="_ttitle">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape">
    </ThumbnailShape>
  </ThumbNailWrap>
)

const ThumbnaildrinkG= props => (
  <ThumbNailWrap id="revenge" className="tWrap pbj">
    <DonutImg src={props.donutImage} id="coffee" alt="" className="showDone" />
    <ThumbnailTitle id="_ttitle2">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape">
    </ThumbnailShape>
  </ThumbNailWrap>
)
const ThumbnaildrinkGk= props => (
  <ThumbNailWrap id="revenge" className="tWrap pbj">
    <DonutImg src={props.donutImage} id="cM" alt="" className="showDone" />
    <ThumbnailTitle id="_ttitle2">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape">
    </ThumbnailShape>
  </ThumbNailWrap>
)
const ThumbnaildrinkB= props => (
  <ThumbNailWrap id="cocoa" className="tWrap pbj">
    <DonutImg src={props.donutImage} id="coffee" alt="" className="showDone" />
    <ThumbnailTitle id="_ttitle2">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape">
    </ThumbnailShape>
  </ThumbNailWrap>
)
const ThumbnaildrinkBM= props => (
  <ThumbNailWrap id="cocoa" className="tWrap pbj">
    <DonutImg src={props.donutImage} id="milk" alt="" className="showDone" />
    <ThumbnailTitle id="_ttitle2">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape">
    </ThumbnailShape>
  </ThumbNailWrap>
)
const ThumbnaildrinkB2= props => (
  <ThumbNailWrap id="cocoa" className="tWrap pbj">
    <DonutImg src={props.donutImage} id="coffee2" alt="" className="showDone" />
    <ThumbnailTitle id="_ttitle2">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape">
    </ThumbnailShape>
  </ThumbNailWrap>
)
const Thumbnailshots = props => (
  <ThumbNailWrap id="pink" className="tWrap">
    <ThumbnailTitle id="_ttitle2">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape" className="show">
    </ThumbnailShape>
  </ThumbNailWrap>
)
const Thumbnailstraw = props => (
  <ThumbNailWrap id="pink" className="tWrap">
    <DonutImg src={props.donutImage} id="strawbery" alt="" className="showDone"/>
    <ThumbnailTitle id="_ttitle3">{props.title}</ThumbnailTitle>
    <ThumbnailShape id="shape" className="show">
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
         <div className="classics">
               <h3 className="sectionTitle">Handpies</h3>
               <div className="donut_sections">
               <ThumbnailBacon2 href = "/rainbowpony"
                     title="Apple Pie"
                     donutImage= {imageList.handpie}
                  />
                  </div>
            
         </div>
         <div className="classics">
               <h3 className="sectionTitle">Cookies</h3>
               <div className="donut_sections">
               <Thumbnailchip href = "/rainbowpony"
                     title="Chocolate Chip"
                     donutImage= {imageList.cookie}
                  />
                  </div>
            
         </div>
      </div>
      <div id="drinks">
          <div className="classics">
                  <h3 className="sectionTitle">Coffee</h3>
                  <div className="donut_sections">
                    <ThumbnaildrinkG href = "/rainbowpony"
                          title="Drip Coffee"
                          donutImage= {imageList.coffee}
                        />
                    <ThumbnaildrinkB href = "/rainbowpony"
                          title="Latte"
                          donutImage= {imageList.lattes}
                        />
                   <ThumbnaildrinkB2 href = "/rainbowpony"
                          title="Nitrobrew"
                          donutImage= {imageList.brew}
                        />
                    <Thumbnailshots href = "/rainbowpony"
                          title="Shots"
                        />
                   </div>
                
          </div>
          <div className="classics">
                  <h3 className="sectionTitle">Milk</h3>
                  <div className="donut_sections">
                    <ThumbnaildrinkBM href = "/rainbowpony"
                          title="2% percent"
                          donutImage= {imageList.two}
                        />
                   <Thumbnailstraw href = "/rainbowpony"
                          title="Strawberry"
                          donutImage= {imageList.berry}
                        />
                    <ThumbnaildrinkGk href = "/rainbowpony"
                          title="Chocolate Milk"
                          donutImage= {imageList.chocoM}
                        />
                   </div>
            
          </div>
          <div className="classics">
                  <h3 className="sectionTitle">Water</h3>
                  <div className="donut_sections">
                    <ThumbnaildrinkBM href = "/rainbowpony"
                          title="16oz"
                          donutImage= {imageList.water}
                        />
                   </div>
            
          </div>
          
      </div>
    </div>
    </div>  
   )
}
export default Home 