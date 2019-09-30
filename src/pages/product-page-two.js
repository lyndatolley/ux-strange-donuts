import React from 'react'
import styled from "styled-components"
// import NavBar from '../components/navRE.js'
import imageList from "../images/imageList"
import Quantity from '../components/quantityPicker.js'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


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
  const PinkBackground = props => (
    <ProductItem id="carousel-item" className="pinkbck">
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

const slider = () => {
    return (
    <AwesomeSlider>
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
         <PinkBackground 
                    className="carousel-item--02"
                    itemImage= {imageList.rainbow}
                    price="$1.25"
                    title="Rainbow Pony"
                    category="classic"
                    calories="419 calories"
                    description="Sprinkles. Blue frosting. What else do you need?"
                    />
    </AwesomeSlider>
    )
}
export default slider 
