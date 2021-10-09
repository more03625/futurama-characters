import React from 'react'

const PopularCategories = () => {
    return (
        <>
            <section className="container position-relative pt-3 pt-lg-0 pb-5 mt-lg-n10" style={{ zIndex: "10" }}>
                <div className="row">
                    <div className="col-xl-8 col-lg-9">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body px-3 pt-grid-gutter pb-0">
                                <div className="row g-0 ps-1">
                                    <div className="col-sm-4 px-2 mb-grid-gutter"><a className="d-block text-center text-decoration-none me-1" href="shop-grid-ls.html">
                                        <img className="d-block rounded mb-3" src="img/home/categories/cat-sm01.jpg" alt="Men" />
                                        <h3 className="fs-base pt-1 mb-0">Men</h3></a></div>
                                    <div className="col-sm-4 px-2 mb-grid-gutter"><a className="d-block text-center text-decoration-none me-1" href="shop-grid-ls.html">
                                        <img className="d-block rounded mb-3" src="img/home/categories/cat-sm02.jpg" alt="Women" />
                                        <h3 className="fs-base pt-1 mb-0">Women</h3></a></div>
                                    <div className="col-sm-4 px-2 mb-grid-gutter"><a className="d-block text-center text-decoration-none me-1" href="shop-grid-ls.html">
                                        <img className="d-block rounded mb-3" src="img/home/categories/cat-sm03.jpg" alt="Kids" />
                                        <h3 className="fs-base pt-1 mb-0">Kids</h3></a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PopularCategories
