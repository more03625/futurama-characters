import React, { useEffect, useState } from 'react'
import QuickModel from '../sections/home/QuickModel';
import { catchError, notify } from '../../helpers/comman_helpers';
import Spinner from '../layouts/Spinner';
import { Link } from 'react-router-dom';
import { getFuturamaCharacterApi } from '../../data/api/FuturamaApi';

const Product = () => {
    const [futuramaCharacters, setFuturamaCharacters] = useState([]);
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(false);

    const openModal = (index) => {
        setCharacter(futuramaCharacters[index]);
    }
    
    const getFuruRamaCharacters = async () => {
        setLoading(true);
        try {
            const response = await getFuturamaCharacterApi()
            setFuturamaCharacters(response.data)
        } catch (err) {
            notify(catchError, 'error')
        }
        setLoading(false);
    }
    useEffect(() => {
        getFuruRamaCharacters()
    }, [])

    return (
        <>
            <section className="container pt-md-3 pb-5 mb-md-3">
                <h2 className="h3 text-center">Futurama Characters 🔥</h2>
                <div className="row pt-4 mx-n2">
                    {loading ? (<Spinner />) : (
                        futuramaCharacters.map((futuramaCharacter, index) => (
                            <div key={futuramaCharacter.id + index} className="col-lg-3 col-md-4 col-sm-6 px-2 mb-4" onClick={() => openModal(index)}>
                                <div className="card product-card">

                                    <Link className="card-img-top d-block overflow-hidden" to="#quick-view" data-bs-toggle="modal" onClick={() => openModal(index)}>
                                        <img src={futuramaCharacter.images.main} alt={futuramaCharacter.name.first} /></Link>
                                    <div className="card-body py-2"><Link className="product-meta d-block fs-xs pb-1" to="#quick-view" data-bs-toggle="modal" onClick={() => openModal(index)}>
                                        Species: {futuramaCharacter.species}
                                    </Link>
                                        <h3 className="product-title fs-sm"><Link to="#quick-view" data-bs-toggle="modal" onClick={() => openModal(index)}>
                                            {futuramaCharacter.name.first + " " + futuramaCharacter.name.last + " " + futuramaCharacter.name.middle}, {futuramaCharacter.gender}{", "}{futuramaCharacter.age}
                                        </Link></h3>
                                    </div>
                                    <div className="card-body card-body-hidden">
                                        <div className="text-center pb-2">
                                            <div className="form-check form-option form-check-inline mb-2">
                                                <p className="d-block text-center">{futuramaCharacter.occupation}</p>
                                            </div>
                                        </div>
                                        <Link to="#quick-view" data-bs-toggle="modal" className="btn btn-primary btn-sm d-block w-100 mb-2">
                                            <i className="ci-eye align-middle me-1"></i>Quick view</Link>
                                    </div>
                                </div>
                                <hr className="d-sm-none" />
                            </div>
                        ))
                    )}
                </div>
                <QuickModel futuramaCharacter={character} />
            </section>
        </>
    )
}

export default Product
