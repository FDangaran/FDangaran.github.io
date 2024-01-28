import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import grab_generic from './IMAGES/grab_generic.png';
import pizza from './IMAGES/pizza.png';
import burger from './IMAGES/burger.png';
import bbq from './IMAGES/bbq.png';
import sushi from './IMAGES/sushi.png';
import vegan from './IMAGES/vegan.png';
import desserts from './IMAGES/desserts.png';
import BurgerKing from './IMAGES/BurgerKing.png';
import SnR from './IMAGES/S&R.png';
import SushiRoll from './IMAGES/SushiRoll.png';

export default class Body extends Component{
render() {
return(
<div className="promotion_parent">
  <div className="deals">
    <img className="deals" src={grab_generic} />
    <h5>Deals up to</h5>
    <h2 style={{color: '#00B14F'}}>30% OFF</h2>
  </div>
  <div className="exclusive">
    <img className="exclusive" src={grab_generic} />
    <h5>GrabFood</h5>
    <h2 style={{color: 'var(--secondary-default, #FD6D22)'}}>Exclusive</h2>
  </div>
  <div className="bgcategory pizza">
    <img src={pizza} />
    <p>Pizza</p> 
  </div>
  <div className="bgcategory burger">
    <img src={burger} />
    <p>Burger</p> 
  </div>
  <div className="bgcategory bbq">
    <img src={bbq} />
    <p>BBQ</p> 
  </div>
  <div className="bgcategory sushi">
    <img src={sushi} />
    <p>Sushi</p> 
  </div>
  <div className="bgcategory vegan">
    <img src={vegan} />
    <p>Vegan</p> 
  </div>
  <div className="bgcategory desserts">
    <img src={desserts} />
    <p>Desserts</p> 
  </div>
  <div className="restaurants">
    <h5>Nearby Restaurants</h5>
  </div>
  <div className="fdcategory">
    <div className="Burgerking resto"> {/*gawa ng div class na iba para doon na lang yung same attributes ng bawat food DIBA DIBA*/}
      <a href="https://food.grab.com/ph/en/restaurant/burger-king-welcome-rotonda-delivery/AWhefkWqR-bAtZoKZM96?">
        <img src={BurgerKing} />
        <h6>Burger King - UN Avenue Roxas</h6>
        <i className="fa fa-clock-o" />
        <p className="small-2">30-40 min ⋅ P79 min-sum</p>
        <div className="burger_icon">
          <img src={burger} />
          <p>Burger</p>
        </div>
      </a></div><a href="https://food.grab.com/ph/en/restaurant/burger-king-welcome-rotonda-delivery/AWhefkWqR-bAtZoKZM96?">
    </a>
    <div className="snr resto"> {/*div class="fdcategory (food)"*/}
      <a href="https://food.grab.com/ph/en/restaurant/s-r-new-york-style-pizza-lucky-chinatown-mall-available-for-long-distance-delivery-delivery/PHGFSTI000001d0?">
        <img src={SnR} />
        <h6>S&amp;R New York Style Pizza - SM</h6>
        <i className="fa fa-clock-o" />
        <p className="small-2">40-60 min ⋅ P626 min-sum</p>
        <div className="burger_icon">
          <img src={burger} />
          <p>Burger</p>
        </div>
        <div className="pizza_icon">
          <img src={pizza} />
          <p>Pizza</p>
        </div>
      </a></div><a href="https://food.grab.com/ph/en/restaurant/s-r-new-york-style-pizza-lucky-chinatown-mall-available-for-long-distance-delivery-delivery/PHGFSTI000001d0?">
    </a>
    <div className="SushiRoll resto"> {/*gawa ng div class na iba para doon na lang yung same attributes ng bawat food DIBA DIBA*/}
      <a href="https://food.grab.com/ph/en/restaurant/kanzen-sushi-roll-p-noval-street-available-for-long-distance-delivery-delivery/2-CZLJRYNXTP4EPA?">
        <img src={SushiRoll} />
        <h6>Kanzen Sushi Roll - P Noval Strt</h6>
        <FontAwesomeIcon icon="faClock" />
        <p className="small-2">20-40 min ⋅ P595 min-sum</p>
        <div className="burger_icon">
          <img src={sushi} />
          <p>Sushi</p>
        </div>
      </a></div><a href="https://food.grab.com/ph/en/restaurant/kanzen-sushi-roll-p-noval-street-available-for-long-distance-delivery-delivery/2-CZLJRYNXTP4EPA?">
    </a>
  </div>
</div>
) 
}
}