import search from '../../assets/images/logo/search-logo-white.png';
import cart from '../../assets/images/logo/cart-logo-white.png';

function contactHeader(){

    return(
        <div className="contactHeader">
            <div className="container-fluid main-content">
                <label className="call-section">
                    <span>Call 833.262.8899</span>
                </label>
                <label className="search-section">
                    <span>Search</span>
                    <img src={search} alt="..."/>
                </label>
                <label className="cart-section">
                    <span>Cart</span>
                    <img src={cart} alt="..."/>
                </label>
            </div>
        </div>
    )
}

export default contactHeader;