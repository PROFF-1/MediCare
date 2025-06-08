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
  }, []);

  return [ref, visible];
}


function App() {

  // For service cards
const [serviceCard1Ref, serviceCard1Visible] = useSlideInOnScroll();
const [serviceCard2Ref, serviceCard2Visible] = useSlideInOnScroll();
const [serviceCard3Ref, serviceCard3Visible] = useSlideInOnScroll();
const [serviceCard4Ref, serviceCard4Visible] = useSlideInOnScroll();

// For reason cards
const [reasonCard1Ref, reasonCard1Visible] = useSlideInOnScroll();
const [reasonCard2Ref, reasonCard2Visible] = useSlideInOnScroll();
const [reasonCard3Ref, reasonCard3Visible] = useSlideInOnScroll();


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
          <img src={'/Assets/medicinecover.png'} className="medicinecover" alt="logo" />
      </div>

      <p className='title1'>Our Services</p>
      <div className='serviceContainer'>
        <div
          ref={serviceCard1Ref}
          className={`serviceCard slide-in${serviceCard1Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/pill.png'} className='serviceImage'/>
          <p className='serviceText'>Online Prescription</p>
          <p className='serviceDescription'>Easy prescription refills and transfers.</p>
        </div>
        <div
          ref={serviceCard2Ref}
          className={`serviceCard slide-in${serviceCard2Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/delivery.png'} className='serviceImage'/>
          <p className='serviceText'>Medicine Delivery</p>
          <p className='serviceDescription'>Get your medicines delivered to your doorstep with our fast and reliable service.</p>
        </div>
        <div
          ref={serviceCard3Ref}
          className={`serviceCard slide-in${serviceCard3Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/stetoscope.png'} className='serviceImage'/>
          <p className='serviceText'>Health Consultation</p>
          <p className='serviceDescription'>Professional healthcare advice online.</p>
        </div>
        <div
          ref={serviceCard4Ref}
          className={`serviceCard slide-in${serviceCard4Visible ? ' visible' : ''}`}
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


        <p className='title1'>Why Choose Us?</p>
       <div className='reasonsContainer'>
        
        <div
          ref={reasonCard1Ref}
          className={`reasonCard slide-in${reasonCard1Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/certified.png'} className='serviceImage'/>
          <p className='serviceText'>Certified Professionals</p>
          <p className='serviceDescription'>Our team consists of licensed pharmacists and healthcare experts.</p>
          <p className='serviceSubDescription'>100% Guarantee</p>
        </div>
        <div
          ref={reasonCard2Ref}
          className={`reasonCard slide-in${reasonCard2Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/car.png'} className='serviceImage'/>
          <p className='serviceText'>Fast Delivery</p>
          <p className='serviceDescription'>Same-day delivery available for your medical needs.</p>
          <p className='serviceSubDescription'>100% Guarantee</p>
        </div>
        <div
          ref={reasonCard3Ref}
          className={`reasonCard slide-in${reasonCard3Visible ? ' visible' : ''}`}
        >
          <Images src={'/Assets/bestprice.png'} className='serviceImage'/>
          <p className='serviceText'>Best Price Guarantee</p>
          <p className='serviceDescription'>We offer competitive prices on all our products.</p>
          <p className='serviceSubDescription'>100% Guarantee</p>
        </div>

      </div>
      <footer className='footer'>
        <div className='footerContainer'>
        <div className='footerLogo'>
          <p className='head'>MediCare+</p>
          <p className='tag'>Your trusted healthcare partner, providing quality medical services and products.</p>
          <div className='footerSocialIcons'>
            <Images src={'/Assets/facebook.png'} className='socialIcon'/>
            <Images src={'/Assets/twitter.png'} className='socialIcon'/>
            <Images src={'/Assets/instagram.png'} className='socialIcon'/>
            <Images src={'/Assets/linkedin.png'} className='socialIcon'/>
          </div>
        </div>
        <div className='footerLinksContainer'>
          <p className='head'>Quick Links</p>
          <ul className='footerLinks'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>

        </div>
        <div className='footerLinksContainer'>
          <p className='head'>Services</p>
           <ul className='footerLinks'>
            <li><a href="#">Online Consultation</a></li>
            <li><a href="#">Medicine Delivery</a></li>
            <li><a href="#">Health Products</a></li>
            <li><a href="#">Prescription Refill</a></li>
            <li><a href="#"> Health Tips</a></li>
          </ul>
        </div>
        <div className='footerLinksContainer'>
          <p className='head'>Contact Us</p>
          <p className='contactInfo'><img src={'/Assets/phone.png'}/> +1(555) 123-4567</p>
          <p className='contactInfo'><img src={'/Assets/email.png'}/> support@medicare.com</p>
          <p className='contactInfo'><img src={'/Assets/location.png'}/> <div className='location'> 123 Health Street, Medical City, MC12345</div></p>
        </div>
        </div>
        <img src={'./Assets/Line.png'} className="footerLine" alt="logo" />
        <p className='footerText'>© 2023 MediCare+. All rights reserved. | Privacy Policy | Terms of Service</p>
      </footer>
    
    </div>
  );
}

export default App;
