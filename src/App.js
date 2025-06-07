import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import MedicineSvgComponent from './svg/MedicineSvgComponent';
import CustomButton from './components/CustomButton';
import Images from './components/Images';

function App() {
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

      <div>
        <div>
          <Images src={'/Assets/pill.png'} className='serviceImage'/>
          <p className='serviceText'>Medicine Delivery</p>
          <p className='serviceDescription'>Get your medicines delivered to your doorstep with our fast and reliable service.</p>
        </div>
      </div>
    
    </div>
  );
}

export default App;
