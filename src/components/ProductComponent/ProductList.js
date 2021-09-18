import React from 'react'
import $ from 'jquery';


function ProductList() {


    const addToCart=()=>{

        $('#addtocart').on('click',function(){
    
            var button = $(this);
            var cart = $('#cart');
            var cartTotal = cart.attr('data-totalitems');
            var newCartTotal = parseInt(cartTotal) + 1;
            
            button.addClass('sendtocart');
            setTimeout(function(){
              button.removeClass('sendtocart');
              cart.addClass('shake').attr('data-totalitems', newCartTotal);
              setTimeout(function(){
                cart.removeClass('shake');
              },500)
            },1000)
          })
          
    }
    
  return (   
    <div className="product-container">
      <div className="container">
          <div className="row">
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn asdf sdfgh asdfgh asdfgh sdfgh</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                  </div>
              </div>
              <div className="col-md-3 nopadding">
                  <div className="product-section card">
                      <div className="offer-section">
                          <div className="offervalue">
                          <span class="offerbadge">9%</span>
                          </div>
                         
                      </div>
                      <div className="single-product-image-section">
                        <div className="single-image">
                            <a href="">
                                <img src="https://deshi.programmingshikhi.com/_next/image?url=https%3A%2F%2Fapi-ecom.programmingshikhi.com%2Fpublic%2Fimages%2Fproducts%2Fproduct-short-resolution-163-1631523526.png&w=640&q=75" alt="image name"/>
                            </a>
                        </div>
                      </div>
                      <div className="priceSection">
                          <span>320000</span>
                          <del>$2.00</del>
                      </div>
                      <div className="product-title">
                          <p>Sweet Corn</p>
                      </div>
                      <div className="addToCart">
                          <p>Add To Cart</p>
                      </div>
                     
                  </div>
              </div>
              
          </div>
      </div>
    </div>
  );
}

export default ProductList;
