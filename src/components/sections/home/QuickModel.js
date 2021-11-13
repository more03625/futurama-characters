import React from 'react'

const QuickModel = (props) => {
    const { futuramaCharacter } = props
    return (
        <>
            <div className="modal-quick-view modal fade" id="quick-view" tabIndex="-1">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title product-title">
                                <a href="shop-single-v1.html" data-bs-toggle="tooltip" data-bs-placement="right" title="Go to product page">{futuramaCharacter?.name.first + " " + futuramaCharacter?.name.last + " " + futuramaCharacter?.name.middle}, {futuramaCharacter?.gender}{", "}{futuramaCharacter?.age}<i className="ci-arrow-right fs-lg ms-2"></i></a></h4>
                            <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-lg-7 pe-lg-0">
                                    <div className="product-gallery">
                                        <div className="product-gallery-preview order-sm-2">

                                            <img className="image-zoom" src={futuramaCharacter?.images.main} alt={futuramaCharacter?.name.first} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 pt-4 pt-lg-0 image-zoom-pane">
                                    <div className="product-details ms-auto pb-3">
                                        <div className="accordion mb-4" id="productPanels">
                                            <div className="accordion-item">
                                                <h3 className="accordion-header"><a className="accordion-button collapsed" href="#Specifications" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="Specifications"><i className="ci-delivery text-muted lead align-middle mt-n1 me-2"></i>Character Information!</a></h3>
                                                <div className="accordion-collapse collapse show" id="Specifications" data-bs-parent="#productPanels">
                                                    <div className="accordion-body fs-sm">

                                                        <div className="d-flex justify-content-between border-bottom pb-2">
                                                            <div>
                                                                <div className="fw-semibold text-dark">Age</div>
                                                            </div>
                                                            <div>{futuramaCharacter?.age} </div>
                                                        </div>

                                                        <div className="d-flex justify-content-between border-bottom py-2">
                                                            <div>
                                                                <div className="fw-semibold text-dark">Gender</div>
                                                            </div>
                                                            <div>{futuramaCharacter?.gender}</div>
                                                        </div>
                                                        <div className="d-flex justify-content-between border-bottom py-2">
                                                            <div>
                                                                <div className="fw-semibold text-dark">Home</div>
                                                            </div>
                                                            <div>{futuramaCharacter?.homePlanet}</div>
                                                        </div>
                                                        <div className="d-flex justify-content-between border-bottom py-2">
                                                            <div>
                                                                <div className="fw-semibold text-dark">Occupation</div>
                                                            </div>
                                                            <div>{futuramaCharacter?.occupation}</div>
                                                        </div>
                                                        <div className="d-flex justify-content-between border-bottom py-2">
                                                            <div>
                                                                <div className="fw-semibold text-dark">Species</div>
                                                            </div>
                                                            <div>{futuramaCharacter?.species}</div>
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
            </div>
        </>
    )
}

export default QuickModel
