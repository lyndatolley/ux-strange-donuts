import React from 'react'
import imageList from "../images/imageList"
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
    this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
  }
 
  runAutochangeTO() {
    this.changeTO = setTimeout(() => {
      this.changeSlides(1);
      this.runAutochangeTO();
    }, this.AUTOCHANGE_TIME);
  }
 
  changeSlides(change) {
    window.clearTimeout(this.changeTO);
    const { length } = this.props.slides;
    const prevSlide = this.state.activeSlide;
    let activeSlide = prevSlide + change;
    if (activeSlide < 0) activeSlide = length - 1;
    if (activeSlide >= length) activeSlide = 0;
    this.setState({ activeSlide, prevSlide });
  }
    render() {
        const { activeSlide, prevSlide, sliderReady } = this.state;
        // console.log(slides.length);
        return(
            <div className="product-body">
                <header>
                    <NavBar></NavBar>
                </header>
                <div className={classNames('slider', {'s--ready': sliderReady})}>
                    <div className="carousel_nav">
                        <span id="moveLeft" className="slider__control" onClick={() => this.changeSlides(-1)}>
                            <svg className="carousel__icon" width="15" height="26" viewBox="0 0 15 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8507 24.0657L2 13.215L12.8507 2.36432" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                        <span id="moveRight" className="slider__control slider__control__right" onClick={() => this.changeSlides(1)}>
                            <svg className="carousel__icon" width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4109 3.00001L24.0779 14.0312L13.0467 24.6983" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </span>
                    </div>
                    <div className="slider__slides pages">
                        {slides.map((slide,index) =>(
                            <div
                            className={classNames('slider__slide', {'s--active':activeSlide===index, 's--prev': prevSlide===index})}
                            key={slide.index}>
                            <div className='carousel-item ProductItem' id={slide.className}>
                              <div className="ImgWrap ImageWrap">
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
                </div>
            </div>
        )
    }
}
const slides = [
    { index: 0,
      background: 'green',
      className: 'greenbck',
      img: imageList.turdBurgler, 
      price: '$5.00',
      title: 'Turd Burgler',
      category: 'stranger',
      calories: '789 calories',
      description: 'Two chocolate cake donuts smothered in cookie butter glaze. Oreo chocolate chip cookie dough. With fudge drizzle.'
    },
    { index: 1,
        background: 'pink',
        className: 'pinkbck',
        img: imageList.rainbow, 
        price: '$1.25',
        title: 'Rainbow Pony',
        category: 'classic',
        calories: '419 calories',
        description: 'Sprinkles. Blue frosting. What else do you need?'
      },
      { index: 2,
        background: 'red',
        className: 'redbck',
        img: imageList.glazed, 
        price: '$1.25',
        title: 'Glazed Donut',
        category: 'classic',
        calories: '350 calories',
        description: 'Just a glazed done.'
      },
      { index: 3,
        background: 'green',
        className: 'greenbck',
        img: imageList.vFatSteve, 
        price: '$1.25',
        title: 'Vanilla Fat Steve',
        category: 'classic',
        calories: '375 calories',
        description: 'Long John’s long forgotten cousin, Fat Steve.'
      },
      { index: 4,
        background: 'blue',
        className: 'bluebck',
        img: imageList.cFatSteve, 
        price: '$1.25',
        title: 'Chocolate Fat Steve',
        category: 'classic',
        calories: '375 calories',
        description: 'Long John’s long forgotten cousin, Fat Steve.'
      },
      { index: 5,
        background: 'blue',
        className: 'bluebck',
        img: imageList.pbj, 
        price: '$2.25',
        title: 'PBJ (Grape)',
        category: 'creation',
        calories: '450 calories',
        description: 'Start your day with a little bit of Peanut Butter Jelly Time.'
      },
      { index: 6,
        background: 'green',
        className:'greenbck',
        img: imageList.frenchToast, 
        price: '$2.25',
        title: 'French Toast',
        category: 'creation',
        calories: '325 calories',
        description: 'Delight yourself with a little bit of French Toast.'
      },
      {
        index: 7,
        background: 'pink',
        className: 'pinkbck',
        img: imageList.cookeMonster,
        price: '$2.25',
        title: 'Cookie Monster',
        category: 'creation',
        calories: '400 calories',
        description: 'It’ll make you say, “Oh nom nom nom nom nom.” '
      },
      {
        index: 8,
        background: 'blue',
        className: 'bluebck',
        img: imageList.gooeyButter,
        price: '$2.25',
        title: 'Gooey Butter',
        category: 'creation',
        calories: '450 calories',
        description: 'Can’t stay in St. Louis without this classic treat.'
      },
      {
        index: 9,
        background: 'red',
        className: 'redbck',
        img: imageList.bacon,
        price: '$2.25',
        title: 'Maple Bacon',
        category: 'creation',
        calories: '425 calories',
        description: 'Because bacon is life. '
      },
      {
        index: 10,
        background: 'blue',
        className: 'bluebck',
        img: imageList.dingDong,
        price: '$2.25',
        title: 'Ding Dong',
        category: 'creation',
        calories: '415 calories',
        description: 'Indulge your inner child and grab an adult sized Ding Dong. '
      },
      {
        index: 11,
        background: 'green',
        className: 'greenbck',
        img: imageList.bartsRevenge,
        price: '$2.25',
        title: "Bart's Revenge",
        category: 'creation',
        calories: '390 calories',
        description: 'Chocolate donut sprinkled with Butterfingers. Bart would be proud. '
      },
      {
        index: 12,
        background: 'pink',
        className: 'pinkbck',
        img: imageList.mcr,
        price: '$2.25',
        title: "Majestic Unicorn Cinnamon Roll",
        category: 'creation',
        calories: '425 calories',
        description: 'Unicorns are paid tribute in this classic cinnamon roll sprinkled with fruity pebbles. '
      },
      {
        index: 13,
        background: 'blue',
        className: 'bluebck',
        img: imageList.cocoaP,
        price: '$2.25',
        title: "Cocoa Peblits",
        category: 'creation',
        calories: '390 calories',
        description: 'Cocoa pebbles aren’t just a cereal treat.'
      },
      {
        index: 14,
        background: 'red',
        className: 'redbck',
        img: imageList.handpie,
        price: '$3.00',
        title: "Apple Pie",
        category: 'handpie',
        calories: '270 calories',
        description: 'You’re the apple of my eye, my little handpie.'
      },
      {
        index: 15,
        background: 'green',
        className: 'greenbck',
        img: imageList.cinnamonRoll,
        price: '$3.00',
        title: "Cinnamon Roll",
        category: 'roll',
        calories: '210 calories',
        description: 'Classic cinnamon. It’s beautiful and simple.'
      },
      {
        index: 16,
        background: 'blue',
        className: 'bluebck',
        img: imageList.cookie,
        price: '$1.50',
        title: "Chocolate Chip",
        category: 'dookie',
        calories: '210 calories',
        description: 'Chocolate Chip. There’s nothing else greater.'
      },
      {
        index: 17,
        background: 'green',
        className: 'greenbck',
        img: imageList.dripCoffee,
        price: '$3.00',
        title: "Drip Coffee",
        category: 'coffee',
        calories: '10 calories',
      },      
      {
        index: 18,
        background: 'blue',
        className: 'bluebck',
        img: imageList.latte,
        price: '$4.00',
        title: "Latte",
        category: 'coffee',
        calories: '125 calories',
      },
      {
        index: 19,
        background: 'blue',
        className: 'bluebck',
        img: imageList.nitro,
        price: '$4.00',
        title: "Nitrobrew",
        category: 'coffee',
        calories: '10 calories',
      },
      {
        index: 20,
        background: 'pink',
        className: 'pinkbck',
        price: '$4.00',
        title: "Shots",
        category: 'coffee',
        calories: '10 calories',
      },

];
export default ProductSlider;