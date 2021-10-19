import React from 'react'

const CartProducts = () => {
    return (
        <>
            <section className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center pt-3 pb-4 pb-sm-5 mt-1">
              <h2 className="h6 text-light mb-0">Products</h2><a className="btn btn-outline-primary btn-sm ps-2" href="shop-grid-ls.html"><i className="ci-arrow-left me-2"></i>Continue shopping</a>
            </div>
            <div className="d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom">
              <div className="d-block d-sm-flex align-items-center text-center text-sm-start"><a className="d-inline-block flex-shrink-0 mx-auto me-sm-4" href="shop-single-v1.html"><img src="data:image/jpeg;base64,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" width="160" alt="Product"/></a>
                <div className="pt-2">
                  <h3 className="product-title fs-base mb-2"><a href="shop-single-v1.html">Women Colorblock Sneakers</a></h3>
                  <div className="fs-sm"><span className="text-muted me-2">Size:</span>8.5</div>
                  <div className="fs-sm"><span className="text-muted me-2">Color:</span>White &amp; Blue</div>
                  <div className="fs-lg text-accent pt-2">$154.<small>00</small></div>
                </div>
              </div>
              <div className="pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start" style={{maxWidth: "9rem"}}>
                <label className="form-label" htmlFor="quantity1">Quantity</label>
                <input className="form-control" type="number" id="quantity1" min="1" />
                <button className="btn btn-link px-0 text-danger" type="button"><i className="ci-close-circle me-2"></i><span className="fs-sm">Remove</span></button>
              </div>
            </div>
      
            <button className="btn btn-outline-accent d-block w-100 mt-4" type="button"><i className="ci-loading fs-base me-2"></i>Update cart</button>
          </section>
        </>
    )
}

export default CartProducts