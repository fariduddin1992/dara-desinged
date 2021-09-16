

function TopHeader() {
  return (

    <div className="topheader">
        <div className="link-bar">
            <div className="link-section">
                <div className="link-item">
                    <a href="#">Save More On App</a>
                </div>
                <div className="link-item">
                    <a href="#">SELL ON DARAZ</a>
                </div>
                <div className="link-item">
                    <a href="#">CUSTOMER CARE</a>
                </div>
                <div className="link-item">
                    <a href="#">TRACK MY ORDER</a>
                </div>
                <div className="link-item">
                    <a href="#">SIGNUP / LOGIN</a>
                </div>
                <div className="link-item">
                    <a href="#">DARAZ AFFILIATE PROGRAM</a>
                </div>
                <div className="link-item">
                    <a href="#">ভাষা</a>
                </div>
            </div>
        </div>
        <div className='logo-bar'>
            <div className="container">
                <div className="logo-content">
                    <a href>
                        <img 
                        src="//laz-img-cdn.alicdn.com/images/ims-web/TB1HOIkg3ZC2uNjSZFnXXaxZpXa.png"/></a>
                </div>
                <div className="logo-content-seearchbar">
                    <form action="" autoComplete="off" method="post">
                        <div className="searchbox-content">
                            <div className="searchbox-bar">
                            <input type="search"  placeholder="Search in Daraz" className="searchbar-input"  />
                            </div>
                        </div>
                        <div className="searchbar-button">
                            <button>Search</button>
                        </div>
                    </form>
                </div>
                <div className="logo-content-cart">
                    <a href="#">
                        <span className="cartIcon">
                        <i className="fa fa-shopping-cart"></i>
                        </span>
                    </a>
                </div>
                <div className="logo-content-offter">
                    <a href="">
                        <img src="//icms-image.slatic.net/images/ims-web/f794195c-0213-47b1-aa0f-fd2a08a9a2cf.png" alt="Voucher"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
}

export default TopHeader;