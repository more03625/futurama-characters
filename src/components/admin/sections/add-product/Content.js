import React from 'react'
import Sidebar from '../../layouts/Sidebar';
import AddproductsForm from '../add-product/AddproductForm';

const Content = () => {
    return (
        <>
            <div class="container mb-5 pb-3">
                <div class="bg-light shadow-lg rounded-3 overflow-hidden">
                    <div class="row">
                        <Sidebar />
                        <AddproductsForm />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content
