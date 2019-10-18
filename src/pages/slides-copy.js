import React from 'react'
import slides from "../components/slides.js"
import Quantity from '../components/quantityPicker.js'
import NavBar from '../components/navRE.js'
import classNames from 'classnames/bind';


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



class ProductSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      slides,
      activeSlide: -1, 
      prevSlide: -1, 
      sliderReady: false };
  }

 
  runAutochangeTO() {
    // this.changeTO = setTimeout(() => {
    //   this.changeSlides(1);
    //   this.runAutochangeTO();
    // }, this.AUTOCHANGE_TIME);
  }
 
  componentDidMount() {
    setTimeout(() => {
      this.setState({ activeSlide: 0, sliderReady: true });
    }, 0);
  }
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const  slidelength  = this.state.length;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = slidelength - 1;
    if (activeSlide >= slidelength) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
    render() {
        const { activeSlide, prevSlide, sliderReady, slides} = this.state;
        // console.log(slides.length);
        //console.log(activeSlide);
        return(
            <div className="product-body" >
                <header>
                    <NavBar></NavBar>
                </header>
                <div className={classNames('slider', {'s--ready': sliderReady})}>
                    <div className="slider__slides pages">
                        {slides.map((slide,index) =>(
                            <div
                            className={classNames('slider__slide',  {'s--active':activeSlide===index, 's--prev': prevSlide===index})}
                            key={slide.index} id={slide.className}>
                            <div className='carousel-item ProductItem' >
                              <div className="ImgWrap ImageWrap" id={slide.id}>
                                <img src={slide.img} className="carousel-item-image"></img>
                                <div className="ImgShadow"></div>
                                  </div>  
                                  <div className="ProductInfo carousel-info">
                                    <div className="ProductTop carouself-item-top" id="carouself-info-top">
                                        <h2 className="ProductPrice item_price">
                                        {slide.price}</h2>
                                        <h1 className="ProductTitle item_title">{slide.title}</h1>
                                        <div className="ProductCategoryCalories item-category-info">
                                            <h3 className="ProductCategory item_category">{slide.category}</h3>
                                            <h3 className="ProductCalories item_calories">{slide.calories}</h3>
                                        </div>
                                    </div>
                                    <p className="ProductDescrip item_description">{slide.description}</p>
                                    <div className="bottomProduct">
                                    <div className="ProductQty product-qty">
                                        <h4 className="QtyTitle qty_title">QUANTITY</h4>
                                        <Quantity className="QtyPicker"></Quantity>
                                    </div>
                                    <button className="CheckOutBtn addToBag">
                                        <h2>ADD TO BAG</h2>
                                    </button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="carousel_nav">
                        <a id="moveLeft" className="slider__control" onClick={() => this.changeSlides(-1)}>
                            <svg className="carousel__icon" width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8507 24.0657L2 13.215L12.8507 2.36432" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                        <a id="moveRight" className="slider__control slider__control__right" onClick={() => this.changeSlides(1)}>
                            <svg className="carousel__icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4109 3.00001L24.0779 14.0312L13.0467 24.6983" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div> 
            </div>
        )
    }
}

export default ProductSlider;