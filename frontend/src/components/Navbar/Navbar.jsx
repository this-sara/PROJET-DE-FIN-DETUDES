import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

function Navbar({ setShowLogin }) {
    const [menu, setMenu] = useState("home");
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    };

    const totalCartAmount = getTotalCartAmount();

    return (
        <div className='navbar' id='home'>
            <Link to='/'><img src={assets.logo} alt="logo" className='logo' /></Link>
            <ul className='navbar-menu'>
                <Link to='/' onMouseEnter={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onMouseEnter={() => setMenu("shop")} className={menu === "shop" ? "active" : ""}>Shop</a>
                <Link to='/story' href='#app-download' onMouseEnter={() => setMenu("our-story")} className={menu === "our-story" ? "active" : ""}>Our Story</Link>
                <Link to='/contact' href='#footer' onMouseEnter={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact us</Link>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="" />
                <div className="navbar-search-icon">
                    <Link to='/card'><img src={assets.basket_icon} alt="" /></Link>
                    <div className={totalCartAmount === 0 ? "" : "dot"}>{totalCartAmount === 0 ? "" : `${totalCartAmount}Dhs`}</div>
                </div>
                {!token ? <button onClick={() => setShowLogin(true)}>sign in</button> :
                    <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate('/myorders')}><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>logout</p></li>
                        </ul>
                    </div>}
            </div>
        </div>
    );
}

export default Navbar;
