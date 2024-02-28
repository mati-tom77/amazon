import React from 'react'
import './heder.css'
// import SearchIcon from '@material-ui/icons/Search';
import SearchIcon from '@mui/icons-material/Search';
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from 'react-router-dom';
import {useStateValue} from './StateProvider'
import { auth } from './firebase';
function Heder() {
  const [{ basket,user }] = useStateValue();
  const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

    // console.log(basket)
  return (
    <div className="header">
      <Link to ="/">
      <img
      className="header__logo"
      src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to ={!user && '/login'} className="header__clearLink">
        <div  onClick={handleAuthentication} className="header__option">
          <span className="header__optionLineOne">
             Hello {!user ? 'Guest' : user.email}
          </span>
          <span className="header__optionLineTwo">
            {user ? 'Sign Out': 'Sign In'}
            </span>
        </div>
        </Link>
        <Link to ="/orders" className="header__clearLink">
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">$Orders</span>
        </div>
        </Link>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <Link to ="/checkout" className="header__clearLink">
        <div className="header__optionBasket">
          <ShoppingBasketIcon/>
          <span className="header__optionLineTwo header__basketCount">
            { basket.length }
          </span>
        </div>
        </Link>
      </div>
    </div>
  );
}
export default Heder;