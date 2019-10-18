import React from "react"
import NavBar from '../../../components/navRE.js'
import imageList from "../../../images/imageList"
import { Link } from 'gatsby';
import Quantity from '../../../components/quantityPicker.js'


import "../../../components/omnes.css"
import "../../../components/styles.scss"
import "../../../components/sliderStyle/productPage.scss"
import "../../../components/320.scss"
import "../../../components/340.scss"
import "../../../components/360.scss"
import "../../../components/400.scss"
import "../../../components/to389.scss"
import "../../../components/to768.scss"
import "../../../components/ipads.scss"


class ProductPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        id: 'cookieMonster',
        background: 'pink',
        className: 'pinkbck',
        img: imageList.cookeMonster,
        price: '$2.25',
        title: 'Cookie Monster',
        category: 'creation',
        calories: '400 calories',
        description: 'It’ll make you say, “Oh nom nom nom nom nom.” '};
    }

    render() {
        return(
            <main className="product-body cookieM">
                <header>
                    <NavBar></NavBar>
                </header>
                <article class="ProductItem pinkbck">
                     <section className="ImgWrap ImageWrap unicorn" id="cookie">
                                <img src={imageList.cookeMonster} className="carousel-item-image" id="pink-cookie"></img>
                                <span className="ImgShadow darkPink" id="helgaShadow"></span>
                                  </section>  
                                  <section className="ProductInfo carousel-info">
                                    <section className="ProductTop carouself-item-top" id="carouself-info-top">
                                        <h2 className="ProductPrice item_price">
                                            $2.25
                                        </h2>
                                        <h1 className="ProductTitle item_title">
                                            Cookie Monster
                                        </h1>
                                        <section className="ProductCategoryCalories item-category-info">
                                            <h3 className="ProductCategory item_category">
                                            creation
                                            </h3>
                                            <h3 className="ProductCalories item_calories">
                                            400 calories
                                            </h3>
                                        </section>
                                    </section>
                                    <p className="ProductDescrip item_description">It’ll make you say, “Oh nom nom nom nom nom.” </p>
                                    <section className="bottomProduct">
                                    <section className="ProductQty product-qty">
                                        <h4 className="QtyTitle qty_title">QUANTITY</h4>
                                        <Quantity className="QtyPicker"></Quantity>
                                    </section>
                                    <button className="CheckOutBtn addToBag">
                                        <h2>ADD TO BAG</h2>
                                    </button>
                                    </section>
                                  </section>
                                  <section className="carousel_nav">
                        <Link id="moveLeft" className="slider__control" to="/menu/donuts/frenchToast">
                            <svg className="carousel__icon" width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8507 24.0657L2 13.215L12.8507 2.36432" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                        <Link id="moveRight" className="slider__control slider__control__right" to ="/menu/donuts/gooeyButter">
                            <svg className="carousel__icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4109 3.00001L24.0779 14.0312L13.0467 24.6983" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </Link>
                    </section>
                </article>
        </main>
        )
    }
}
export default ProductPage;