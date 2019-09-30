import React from 'react'
import styled from "styled-components"
import NavBar from '../components/navRE.js'
import imageList from "../images/imageList"
import Quantity from '../components/quantityPicker.js'


import "../components/omnes.css"
import "../components/styles.scss"
import "../components/sliderStyle/productPage.scss"
import "../components/320.scss"
import "../components/340.scss"
import "../components/360.scss"
import "../components/400.scss"
import "../components/to389.scss"
import "../components/to768.scss"
import "../components/ipads.scss"

// const DonutsWrap = styled.div`
//     width: 100%;
//     margin: 0px;
// `
const ProductImg = styled.img`
    z-index: 145;
`
const ProductItem = styled.div`
    width: 100%;
    margin: 0px;
    display: flex;
`
const ProductInfo = styled.div`
    width: 100%;
    margin: 0px;
    display: flex;
`
const ProductTop = styled.div`
    display: flex;
`
const ProductPrice = styled.h2`
    font-family: Omnes SemiCond;
    color: white;
`
const ProductTitle = styled.h1`
    font-family: Omnes SemiCond;
    color: white;
`
const ProductCategoryCalories = styled.div`
    font-family: Omnes SemiCond;
    color: white;
    display: flex;
    flex-direction: row;

`
const ProductCategory = styled.h3`
    font-family: Omnes SemiCond;
    color: white;
`

const ProductCalories = styled.h3`
    font-family: Omnes SemiCond;
    color: white;
`
const ProductDescrip = styled.p`
    font-family: Omnes;
    color: white;
` 
const ProductQty = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`
const QtyTitle = styled.h4`
    font-family: Omnes;
`
const CheckOutBtn=styled.button`
    width: 100%;
    background: rgba(0, 0, 0, 0.75);
    border-radius: 37px;

`
const ImgWrap=styled.div`
    width: 100%;
`
const ImgShadow=styled.div`   
background: radial-gradient(56.26% 58.33% at 50% 50%, #010101 0%, #2D6C4E 100%);
opacity: 0.5;
`
const GreenBackground = props => (
    <ProductItem id="carousel-item" className="greenbck">
    <ImgWrap className="imageWrap">
        <ProductImg src={props.itemImage}  className="carousel-item-image"/>
        <ImgShadow/>
      </ImgWrap>
      <ProductInfo className="carousel-info">
          <ProductTop id ="carouself-info-top" class="carouself-info-top">
              <ProductPrice className="item_price">{props.price}</ProductPrice>
              <ProductTitle className="item_title">{props.title}</ProductTitle>
              <ProductCategoryCalories className="item-category-info">
                 <ProductCategory className="item_category">{props.category}</ProductCategory>
                 <ProductCalories className="item_calories">{props.calories}</ProductCalories>
              </ProductCategoryCalories>
          </ProductTop>
          <ProductDescrip className="item_description">{props.description}</ProductDescrip>
          <ProductQty className="product-qty">
              <QtyTitle className="qty_title">QUANTITY</QtyTitle>
              <Quantity className="QtyPicker"></Quantity>
          </ProductQty>
          <CheckOutBtn className="addToBag"><h2>ADD TO BAG</h2></CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
  const BlueBackground = props => (
    <ProductItem id="carousel-item" className="greenbck">
    <ImgWrap className="imageWrap">
        <ProductImg src={props.itemImage}  className="carousel-item-image"/>
        <ImgShadow/>
      </ImgWrap>
      <ProductInfo className="carousel-info">
          <ProductTop id ="carouself-info-top" class="carouself-info-top">
              <ProductPrice className="item_price">{props.price}</ProductPrice>
              <ProductTitle className="item_title">{props.title}</ProductTitle>
              <ProductCategoryCalories className="item-category-info">
                 <ProductCategory className="item_category">{props.category}</ProductCategory>
                 <ProductCalories className="item_calories">{props.calories}</ProductCalories>
              </ProductCategoryCalories>
          </ProductTop>
          <ProductDescrip className="item_description">{props.description}</ProductDescrip>
          <ProductQty className="product-qty">
              <QtyTitle className="qty_title">QUANTITY</QtyTitle>
              <Quantity className="QtyPicker"></Quantity>
          </ProductQty>
          <CheckOutBtn className="addToBag"><h2>ADD TO BAG</h2></CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
  const RedBackground = props => (
    <ProductItem id="carousel-item" className="greenbck">
    <ImgWrap className="imageWrap">
        <ProductImg src={props.itemImage}  className="carousel-item-image"/>
        <ImgShadow/>
      </ImgWrap>
      <ProductInfo className="carousel-info">
          <ProductTop id ="carouself-info-top" class="carouself-info-top">
              <ProductPrice className="item_price">{props.price}</ProductPrice>
              <ProductTitle className="item_title">{props.title}</ProductTitle>
              <ProductCategoryCalories className="item-category-info">
                 <ProductCategory className="item_category">{props.category}</ProductCategory>
                 <ProductCalories className="item_calories">{props.calories}</ProductCalories>
              </ProductCategoryCalories>
          </ProductTop>
          <ProductDescrip className="item_description">{props.description}</ProductDescrip>
          <ProductQty className="product-qty">
              <QtyTitle className="qty_title">QUANTITY</QtyTitle>
              <Quantity className="QtyPicker"></Quantity>
          </ProductQty>
          <CheckOutBtn className="addToBag"><h2>ADD TO BAG</h2></CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
  const PinkBackground = props => (
    <ProductItem id="carousel-item" className="greenbck">
    <ImgWrap className="imageWrap">
        <ProductImg src={props.itemImage}  className="carousel-item-image"/>
        <ImgShadow/>
      </ImgWrap>
      <ProductInfo className="carousel-info">
          <ProductTop id ="carouself-info-top" class="carouself-info-top">
              <ProductPrice className="item_price">{props.price}</ProductPrice>
              <ProductTitle className="item_title">{props.title}</ProductTitle>
              <ProductCategoryCalories className="item-category-info">
                 <ProductCategory className="item_category">{props.category}</ProductCategory>
                 <ProductCalories className="item_calories">{props.calories}</ProductCalories>
              </ProductCategoryCalories>
          </ProductTop>
          <ProductDescrip className="item_description">{props.description}</ProductDescrip>
          <ProductQty className="product-qty">
              <QtyTitle className="qty_title">QUANTITY</QtyTitle>
              <Quantity className="QtyPicker"></Quantity>
          </ProductQty>
          <CheckOutBtn className="addToBag"><h2>ADD TO BAG</h2></CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
  const PinkCookieBackground = props => (
    <ProductItem id="carousel-item" className="pinkbck">
    <ImgWrap className="imageWrap">
        <ProductImg src={props.itemImage}  className="carousel-item-image pink-cookie"/>
        <ImgShadow/>
      </ImgWrap>
      <ProductInfo className="carousel-info">
          <ProductTop id ="carouself-info-top" class="carouself-info-top">
              <ProductPrice className="item_price">{props.price}</ProductPrice>
              <ProductTitle className="item_title">{props.title}</ProductTitle>
              <ProductCategoryCalories className="item-category-info">
                 <ProductCategory className="item_category">{props.category}</ProductCategory>
                 <ProductCalories className="item_calories">{props.calories}</ProductCalories>
              </ProductCategoryCalories>
          </ProductTop>
          <ProductDescrip className="item_description">{props.description}</ProductDescrip>
          <ProductQty className="product-qty">
              <QtyTitle className="qty_title">QUANTITY</QtyTitle>
              <Quantity className="QtyPicker"></Quantity>
          </ProductQty>
          <CheckOutBtn className="addToBag"><h2>ADD TO BAG</h2></CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
class Products extends React.Component {
    

    render (){
    
    return (
        
    <div className="product-body">
            <header>
                <NavBar></NavBar>
            </header>
        <div className="carousel">
        <div className="carousel__nav">
        <span id="moveLeft" className="carousel__arrow" onClick={this.slideLeft}>
        <svg className="carousel__icon" width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.8507 24.0657L2 13.215L12.8507 2.36432" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
            </span>
            <span id="moveRight" className="carousel__arrow" onClick={this.slideRight}>
            <svg className="carousel__icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.4109 3.00001L24.0779 14.0312L13.0467 24.6983" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

            </span>
        </div>
        <div className="pages">
                    <GreenBackground 
                    className="carousel-item--01"
                    id="turdBurgler"
                    itemImage = {imageList.turdBurgler}
                    price="$5.00"
                    title="Turd Burgler"
                    category="stranger"
                    calories="789 calories"
                    description="Two chocolate cake donuts smothered in cookie butter glaze. Oreo chocolate chip cookie dough. With fudge drizzle."
                    />
                    <PinkBackground 
                    className="carousel-item--02"
                    id="rainbowPony"
                    itemImage= {imageList.rainbow}
                    price="$1.25"
                    title="Rainbow Pony"
                    category="classic"
                    calories="419 calories"
                    description="Sprinkles. Blue frosting. What else do you need?"
                    />
                    <RedBackground 
                    className="carousel-item--03"
                    id="glazed"
                    itemImage= {imageList.glazed}
                    price="$1.25"
                    title="Glazed"
                    category="classic"
                    calories="419 calories"
                    description="Just a classic glazed."
                    />
                    <GreenBackground 
                    className="carousel-item--04"
                    id="vanillaFatSteve"
                    itemImage = {imageList.vFatSteve}
                    price="$1.25"
                    title="Vanille Fat Steve"
                    category="classic"
                    calories="375 calories"
                    description="Long John’s long forgotten cousin, Fat Steve."
                    />
                    <BlueBackground 
                    className="carousel-item--05"
                    id="ChocolateFatSteve"
                    itemImage = {imageList.cFatSteve}
                    price="$1.25"
                    title="Chocolate Fat Steve"
                    category="classic"
                    calories="375 calories"
                    description="Long John’s long forgotten cousin, Fat Steve."
                    />
                    {/* creations */}
                     <BlueBackground 
                    className="carousel-item--06"
                    id="PBJ"
                    itemImage = {imageList.pbj}
                    price="$2.25"
                    title="PBJ (Grape)"
                    category="creations"
                    calories="450 calories"
                    description="Start your day with a little bit of Peanut Butter Jelly Time."
                    />
                    <GreenBackground 
                    className="carousel-item--07"
                    id="frenchToast"
                    itemImage = {imageList.frenchToast}
                    price="$2.25"
                    title="French Toast"
                    category="creation"
                    calories="325 calories"
                    description="Delight yourself with a little bit of French Toast."
                    />
                    <PinkCookieBackground 
                    className="carousel-item--08"
                    id="cookieMonster"
                    itemImage= {imageList.cookeMonster}
                    price="$2.25"
                    title="Rainbow Pony"
                    category="creation"
                    calories="400 calories"
                    description="It’ll make you say, “Oh nom nom nom nom nom.” "
                    />
                </div>
                </div>
        </div>
    )
                }
}
export default Products;