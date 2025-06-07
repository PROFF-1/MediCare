import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MedicineSvgComponent from './svg/MedicineSvgComponent';
import CustomButton from './components/CustomButton';
import Images from './components/Images';
import React, { useRef, useEffect, useState, use } from 'react';



function useSlideInOnScroll() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [useRef]);

  return [ref, visible];
}


function App() {

  const [card1Ref, card1Visible] = useSlideInOnScroll();
  const [card2Ref, card2Visible] = useSlideInOnScroll();
  const [card3Ref, card3Visible] = useSlideInOnScroll();
  const [card4Ref, card4Visible] = useSlideInOnScroll();


  return (
    <div className="App">
      <Navbar/>
      <div className='firstPageContainer'>
        <div>
          <p className='text1'>Your Health, Our Priority</p>
          <p className='text2'>24/7 Profeesional Care & Online Pharmacy Services</p>
          <div>
            <CustomButton title={'Shop Medicines'} className={'btn-1'}/>
            <CustomButton title={'Book Consultation'} className={'btn-2'}/>
          </div>
        </div>
          <MedicineSvgComponent className='Medicine'/>
      </div>

      <p className='title1'>Our Services</p>
      <div className='serviceContainer'>
        <div
          ref={card1Ref}
          className={`serviceCard slide-in${card1Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/pill.png'} className='serviceImage'/>
          <p className='serviceText'>Online Prescription</p>
          <p className='serviceDescription'>Easy prescription refills and transfers.</p>
        </div>
        <div
          ref={card2Ref}
          className={`serviceCard slide-in${card2Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/delivery.png'} className='serviceImage'/>
          <p className='serviceText'>Medicine Delivery</p>
          <p className='serviceDescription'>Get your medicines delivered to your doorstep with our fast and reliable service.</p>
        </div>
        <div
          ref={card3Ref}
          className={`serviceCard slide-in${card3Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/stetoscope.png'} className='serviceImage'/>
          <p className='serviceText'>Health Consultation</p>
          <p className='serviceDescription'>Professional healthcare advice online.</p>
        </div>
        <div
          ref={card4Ref}
          className={`serviceCard slide-in${card4Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/products.png'} className='serviceImage'/>
          <p className='serviceText'>Health Products</p>
          <p className='serviceDescription'>Wide range of healthcare products.</p>
        </div>
      </div>
      <p className='title1'>Popular Products</p>
      <div className='popularProductsContainer'>
        <div className='popularProductCard'>
          <Images src={'/Assets/product1.png'} className='popularProductImage'/>
          <p className='popularProductText'>Vitamin C Complex</p>
          <div className='popularProductDetails'>
            <p className='popularProductPrice'>$24.99</p>
            <Images src={'/Assets/star.png'} className='starImage'/>
          </div>
          <CustomButton title={'Add to Cart'} className={'btn-3'}/>
        </div>
        <div className='popularProductCard'>
          <Images src={'/Assets/product2.png'} className='popularProductImage'/>
          <p className='popularProductText'>Vitamin C Complex</p>
          <div className='popularProductDetails'>
            <p className='popularProductPrice'>$19.99</p>
            <Images src={'/Assets/star.png'} className='starImage'/>
          </div>
          <CustomButton title={'Add to Cart'} className={'btn-3'}/>
        </div>
        <div className='popularProductCard'>
          <Images src={'/Assets/product3.png'} className='popularProductImage'/>
          <p className='popularProductText'>Vitamin C Complex</p>
          <div className='popularProductDetails'>
            <p className='popularProductPrice'>$19.99</p>
            <Images src={'/Assets/star.png'} className='starImage'/>
          </div>
          <CustomButton title={'Add to Cart'} className={'btn-3'}/>
        </div>
        <div className='popularProductCard'>
          <Images src={'/Assets/product4.png'} className='popularProductImage'/>
          <p className='popularProductText'>Vitamin C Complex</p>
          <div className='popularProductDetails'>
            <p className='popularProductPrice'>$34.99</p>
            <Images src={'/Assets/star.png'} className='starImage'/>
          </div>
          <CustomButton title={'Add to Cart'} className={'btn-3'}/>
        </div>
      </div>



    
    </div>
  );
}

export default App;
