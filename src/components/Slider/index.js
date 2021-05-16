import React   from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames';
import './style.css'

export default class CitiesSlider extends React.Component {
    constructor(props) {
      super(props);
  
      this.IMAGE_PARTS = 4;
  
      this.changeTO = null;
      this.AUTOCHANGE_TIME = 10000;
  
      this.state = { activeSlide: -1, prevSlide: -1, sliderReady: false };
    }
  
    componentWillUnmount() {
      window.clearTimeout(this.changeTO);
    }
  
    componentDidMount() {
      this.runAutochangeTO();
      setTimeout(() => {
        this.setState({ activeSlide: 0, sliderReady: true });
      }, 0);
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
      return /*#__PURE__*/(
        React.createElement("div", { className: classNames('slider', { 's--ready': sliderReady }) }, /*#__PURE__*/
        // React.createElement("p", { className: "slider__top-heading" }, "Travelers"), /*#__PURE__*/
        React.createElement("div", { className: "slider__slides" },
        this.props.slides.map((slide, index) => /*#__PURE__*/
        React.createElement("div", {
          className: classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index }),
          key: slide.city }, /*#__PURE__*/
  
        React.createElement("div", { className: "slider__slide-content container" }, /*#__PURE__*/
        React.createElement("h3", { className: "slider__slide-subheading" }, slide.country || slide.city), /*#__PURE__*/
        React.createElement("h2", { className: "slider__slide-subheading" },
        slide.city.split('').map(l => /*#__PURE__*/React.createElement("span", null, l))), /*#__PURE__*/
  
        React.createElement("button", { className: "slider__slide-readmore btn-mix-noborder" }, "TRY IT NOW")), /*#__PURE__*/
  
        React.createElement("div", { className: "slider__slide-parts" },
        [...Array(this.IMAGE_PARTS).fill()].map((x, i) => /*#__PURE__*/
        React.createElement("div", { className: "slider__slide-part", key: i }, /*#__PURE__*/
        React.createElement("div", { className: "slider__slide-part-inner", style: { backgroundImage: `url(${slide.img})` } }))))))), /*#__PURE__*/
  
  
  
  
  
  
        React.createElement("div", { className: "slider__control", onClick: () => this.changeSlides(-1) }), /*#__PURE__*/
        React.createElement("div", { className: "slider__control slider__control--right", onClick: () => this.changeSlides(1) })));
  
  
    }}
  
  
  const slides = [
  {
    city: 'Experience your favorite artists like never before and from the comfort of your own home',
    country: 'INTERACTIVE CONCERT EXPERIENCE',
    img: 'https://user-images.githubusercontent.com/71358869/118379830-9b089c80-b5ab-11eb-9fb4-8f9ee9aaa123.png' },
  
  {
    city: 'Singapore',
    country: 'INTERACTIVE CONCERT EXPERIENCE',

    img: 'https://user-images.githubusercontent.com/71358869/118379842-ad82d600-b5ab-11eb-8f7a-d24e4c04317f.png' },
  
  {
    city: 'Prague',
    country: 'Czech Republic',
    img: 'https://user-images.githubusercontent.com/71358869/118379849-b83d6b00-b5ab-11eb-9fcf-5a38d47fc949.png' },
  
  
  
//   {
//     city: 'Moscow',
//     country: 'Russia',
//     img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/moscow.jpg'
//  }
];
  
  
  
(window.location.pathname === '/home') &&  ReactDOM.render( /*#__PURE__*/React.createElement(CitiesSlider, { slides: slides }), document.querySelector('#app'));