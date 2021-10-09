import React from 'react'

const Holiday = () => {
    return (
        <>
            <section className="container mb-4 pb-3 pb-sm-0 mb-sm-5">
                <div className="row">
                    <div className="col-md-5">
                        <div className="d-flex flex-column h-100 overflow-hidden rounded-3" style={{ backgroundColor: "#e2e9ef" }}>
                            <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
                                <div>
                                    <h3 className="mb-1">Hoodie day</h3><a className="fs-md" href="shop-grid-ls.html">Shop hoodies<i className="ci-arrow-right fs-xs align-middle ms-1"></i></a>
                                </div>
                                <div className="tns-carousel-controls" id="hoodie-day">
                                    <button type="button"><i className="ci-arrow-left"></i></button>
                                    <button type="button"><i className="ci-arrow-right"></i></button>
                                </div>
                            </div><a className="d-none d-md-block mt-auto" href="shop-grid-ls.html"><img className="d-block w-100" src="img/home/categories/cat-lg04.jpg" alt="For Women" /></a>
                        </div>
                    </div>
                    {/*Product grid (carousel)*/}
                    <div className="col-md-7 pt-4 pt-md-0">
                        <div className="tns-carousel">
                            <div className="tns-carousel-inner" data-carousel-options="{&quot;nav&quot;: false, &quot;controlsContainer&quot;: &quot;#hoodie-day&quot;}">
                                {/*Carousel item*/}
                                <div>
                                    <div className="row mx-n2">
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/20.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/21.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$26.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static"><span className="badge badge-danger badge-shadow">Sale</span>
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/23.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$17.<small>99</small></span>
                                                            <del className="fs-sm text-muted">24.<small>99</small></del>
                                                        </div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/51.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mono Color Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$21.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/24.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/54.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mono Color Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$21.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Carousel item*/}

                                <div>
                                    <div className="row mx-n2">
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                                                    <img src="img/shop/catalog/53.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Mono Color Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$21.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4 d-none d-lg-block">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                                                    <img src="img/shop/catalog/52.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Printed Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$25.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html">
                                                    <img src="img/shop/catalog/22.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/56.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Printed Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$25.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/55.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$24.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-half active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-6 px-0 px-sm-2 mb-sm-4">
                                            <div className="card product-card card-static">
                                                <button className="btn-wishlist btn-sm" type="button" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to wishlist"><i className="ci-heart"></i></button><a className="card-img-top d-block overflow-hidden" href="shop-single-v1.html"><img src="img/shop/catalog/57.jpg" alt="Product" /></a>
                                                <div className="card-body py-2"><a className="product-meta d-block fs-xs pb-1" href="#">Hoodies &amp; Sweatshirts</a>
                                                    <h3 className="product-title fs-sm"><a href="shop-single-v1.html">Block-colored Hooded Top</a></h3>
                                                    <div className="d-flex justify-content-between">
                                                        <div className="product-price"><span className="text-accent">$23.<small>99</small></span></div>
                                                        <div className="star-rating"><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star-filled active"></i><i className="star-rating-icon ci-star"></i><i className="star-rating-icon ci-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Holiday
