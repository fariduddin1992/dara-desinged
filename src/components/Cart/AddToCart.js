import React,{useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import { render } from "react-dom";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";


function AddToCart() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
      });

  return (   
      <>
    <div className="cart-position-section" onClick={() => setState({ isPaneOpen: true })}>
        <div className="productmiddle">
            <div className="productTitle">
            <span><i className="fa fa-cart"></i></span>
            <span>0 item</span>
        </div>
        <div className="cartPrice">
            <span>0 items</span>
        </div>
        </div>  
    </div>
    <SlidingPane
        className="some-custom-class"
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        width="300px"
        title="Hey, it is optional pane title.  I can be React component too."
        subtitle="Optional subtitle."
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <div>And I am pane content. BTW, what rocks?</div>
        <br />
        <img src="img.png" />
      </SlidingPane>
      <SlidingPane
        closeIcon={<div>Some div containing custom close icon.</div>}
        isOpen={state.isPaneOpenLeft}
        title="Hey, it is optional pane title.  I can be React component too."
        from="left"
        width="100px"
        onRequestClose={() => setState({ isPaneOpenLeft: false })}
      >
        <div>And I am pane content on left.</div>
      </SlidingPane>
    </>

    // Modal open

  );
}

export default AddToCart;
