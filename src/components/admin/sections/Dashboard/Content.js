import React from 'react'
import Stats from '../Dashboard/Stats';
import Sidebar from '../../layouts/Sidebar';
const Content = () => {
   return (
      <>
         <div class="container mb-5 pb-3">
            <div class="bg-light shadow-lg rounded-3 overflow-hidden">
               <div class="row">
                  <Sidebar />
                  <Stats />
               </div>
            </div>
         </div>
      </>
   )
}
export default Content