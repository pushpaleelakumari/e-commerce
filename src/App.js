import './App.css';
import Navigation from './components/Navigation';
import InviteOffers from './components/InviteOffers';
import PageSlides from './components/PageSlides';
import CardR1 from './components/CardR1';
import Hedding from './components/Hedding';
import Minicards from './components/Minicards';
import Footer from './components/Footer';
import Madeby from './components/Madeby';

function App() {
  return (
    <div className='container'>
      <div className="navigation-bar"><Navigation /></div>
      <div className="pageslides">
        <PageSlides srcss1="./Slide1.PNG"
          srcss2="./Slide2.PNG"
          srcss3="./Slide3.PNG"
          srcss4="./Slide4.PNG"
          srcss5="./Slide5.PNG"
          srcss6="./Slide6.PNG"
          srcss7="./Slide7.PNG"
          srcss8="./Slide8.PNG"
          srcss9="./Slide9.PNG"
          srcss10="./Slide10.PNG" />
      </div><hr />
      <div className="invite-offers"> <InviteOffers /> </div>
      <hr />
      <div className="Hedding"><Hedding hedding="EXPLORE OUR NEW BRANDS" /></div><br />
      <div className="hedding1"><h1>Western Wear</h1></div>
      <div className="cardrow1">
        <CardR1
          srce1="./Row1img1.PNG" Title1="Best Western Tops and T-shirts" content1="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce2="./Row1img2.PNG" Title2="Best Sports Dresses" content2="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce3="./Row1img3.PNG" Title3="Best Night Wears" content3="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce4="./Row1img4.PNG" Title4="Best Long Tops and Dresses" content4="perfect throw-on style with best combinations and best prices for more designs explore more" />
      </div><br />
      <div className="hedding1"><h1>Ethnic Wear</h1></div>
      <div className="cardrow1">
        <CardR1
          srce1="./Row2img1.PNG" Title1="Best Kurta Kurtis in All Sizes" content1="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce2="./Row2img2.PNG" Title2="Epic Sarees With Best Designs" content2="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce3="./Row2img3.PNG" Title3="Best Ethnic Sets" content3="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce4="./Row2img4.PNG" Title4="Salwar & Churidaar in All Sizes" content4="perfect throw-on style with best combinations and best prices for more designs explore more"
        />
      </div><br />
      <div className="hedding1">
        <h1>Jewellers</h1>
      </div>
      <div className="mimicards">
        <Minicards
          srce11="./Jule1.jpg" cont1="Ear Rings"
          srce12="./Jule2.PNG" cont2="Necklace"
          srce13="./Jule3.PNG" cont3="Gold Metal Mangalsutra"
          srce14="./Jule4.PNG" cont4="Stylish Chains"
          srce15="./Jule5.PNG" cont5="Stylish Bracelets"
          srce16="./Jule6.PNG" cont6="Silver Bangles"
          srce17="./Jule7.PNG" cont7="Golden Hand Ring"
          srce18="./Jule8.PNG" cont8="Brass Bangles" />
      </div><br />
      <div className='buttons'>
        <button className="exploreouts">Explore More Jewellers</button>
      </div>
      <hr />
      <div className="hedding1">
        <h1>Men's Wear</h1>
      </div>
      <div className="cardrow1">
        <CardR1
          srce1="./Row3img1.PNG" Title1="Best T-Shirts All Sizes" content1="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce2="./Row3img2.PNG" Title2="Casual Shirts With Best Designs" content2="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce3="./Row3img3.PNG" Title3="Formal Shirts" content3="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce4="./Row3img4.PNG" Title4="Functional Wear Jackets" content4="perfect throw-on style with best combinations and best prices for more designs explore more"
        />
      </div><br />
      <div className="hedding1">
        <h1>Formal Wear</h1>
      </div>
      <div className="cardrow1">
        <CardR1
          srce1="./Row4img1.PNG" Title1="Best Suits & Blazers" content1="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce2="./Row4img2.PNG" Title2="Jackets With Best Designs" content2="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce3="./Row4img3.PNG" Title3="Jeans With All Designs" content3="perfect throw-on style with best combinations and best prices for more designs explore more"
          srce4="./Row4img4.PNG" Title4="Formal Trousers" content4="perfect throw-on style with best combinations and best prices for more designs explore more"
        />
      </div><br />
      <div className="hedding1">
        <h1>Accessories</h1>
      </div>
      <div className="mimicards">
        <Minicards
          srce11="./Out1.PNG" cont1="Foot Wear"
          srce12="./Out2.PNG" cont2="Lapel Pins & Brooch"
          srce13="./Out3.PNG" cont3="Bracelets"
          srce14="./Out4.PNG" cont4="Caps And Hats"
          srce15="./Out5.PNG" cont5="Office Bags"
          srce16="./Out6.PNG" cont6="Belts"
          srce17="./Out7.PNG" cont7="Wallets"
          srce18="./Out8.PNG" cont8="Bags" />
      </div><br />
      <div className='buttons'>
        <button className="exploreouts">Explore More Accessories</button>
      </div>
      <hr /><br />
      <div className="hedding1">
        <h1 style={{ color: "orange" }}>Special Offers</h1>
      </div>
      <div className="offer11">
        <img src="./Offer01.PNG" alt="" />
        <img src="./Offer02.PNG" alt="" />
        <img src="./Offer03.PNG" alt="" />
        <img src="./Offer04.PNG" alt="" />
      </div>
      <div className="offerslides">
        <PageSlides srcss1="./Offer1.PNG"
          srcss2="./Offer2.PNG"
          srcss4="./Offer3.PNG"
          srcss3="./Offer4.PNG"
          srcss5="./Offer5.PNG"
          srcss6="./Offer6.PNG"
          srcss7="./Offer7.PNG"
          srcss8="./Offer8.PNG"
          srcss9="./Offer9.PNG"
          srcss10="./Offer10.PNG" className="Offers" />
        <div className='buttons'><br />
          <button className="exploreouts">Explore More Offers</button>
        </div>
      </div>
      <hr />
      <div className="footer">
        <Footer />
      </div>
      <div className="madeby">
        <Madeby />
      </div>
    </div>
  );
}

export default App;
