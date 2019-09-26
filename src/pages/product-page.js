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
    <ProductItem className="carousel-item bluebck">
      <ProductImg src={props.itemImage} className="carousel-item-image"/>
      <ProductInfo className="carousel-info">
          <ProductTop class="carouself-info-top">
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
          <CheckOutBtn className="addToBag">ADD TO BAG</CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
  const RedBackground = props => (
    <ProductItem className="carousel-item redbck">
      <ProductImg src={props.itemImage}  className="carousel-item-image"/>
      <ProductInfo className="carousel-info">
          <ProductTop class="carouself-info-top">
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
          <CheckOutBtn className="addToBag">ADD TO BAG</CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
  const PinkBackground = props => (
    <ProductItem className="carousel-item pinkbck">
      <ProductImg src={props.itemImage} className="carousel-item-image"/>
      <ProductInfo className="carousel-info">
          <ProductTop class="carouself-info-top">
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
          <CheckOutBtn className="addToBag">ADD TO BAG</CheckOutBtn>
      </ProductInfo>
    </ProductItem>
  )
const Products = () => {
    
    return (
<div class="product-body">
    <header>
        <NavBar></NavBar>
    </header>
<div class="carousel">
  <div class="carousel__nav">
   <span id="moveLeft" class="carousel__arrow">
        <svg class="carousel__icon" width="24" height="24" viewBox="0 0 24 24">
    <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
</svg>
    </span>
    <span id="moveRight" class="carousel__arrow" >
      <svg class="carousel__icon"  width="24" height="24" viewBox="0 0 24 24">
  <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path>
</svg>    
    </span>
  </div>
  <div className="pages">
            <GreenBackground 
            className="carousel-item--01"
            id="greenbck"
            itemImage = {imageList.turdBurgler}
            price="$5.00"
            title="Turd Burgler"
            category="stranger"
            calories="789 calories"
            description="Two chocolate cake donuts smothered in cookie butter glaze. Oreo chocolate chip cookie dough. With fudge drizzle."
            />
             {/* <PinkBackground 
            className="carousel-item--02"
            itemImage= {imageList.rainbow}
            price="$1.25"
            title="Rainbow Pony"
            category="classic"
            calories="419 calories"
            description="Sprinkles. Blue frosting. What else do you need?"
            />
              <RedBackground 
            className="carousel-item--03"
            itemImage= {imageList.glazed}
            price="$1.25"
            title="Glazed"
            category="classic"
            calories="419 calories"
            description="Just a classic glazed."
            />
             <GreenBackground 
            className="carousel-item--04"
            itemImage = {imageList.vFatSteve}
            price="$1.25"
            title="Vanille Fat Steve"
            category="classic"
            calories="375 calories"
            description="Long John’s long forgotten cousin, Fat Steve."
            />
             <BlueBackground 
            className="carousel-item--05"
            itemImage = {imageList.cFatSteve}
            price="$1.25"
            title="Chocolate Fat Steve"
            category="classic"
            calories="375 calories"
            description="Long John’s long forgotten cousin, Fat Steve."
            /> */}
        </div>
        </div>
        </div>
    )
}
export default Products