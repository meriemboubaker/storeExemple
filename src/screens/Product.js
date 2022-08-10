import React from 'react';
import { useParams } from 'react-router-dom';

const Product = (props) => {
    const params = useParams()
    const productDetails = props.data.find(elm=> elm.id===params.id)
   
    return (
        <div className="h-product">
       
           <main className="d-flex flex-column justify-content-center align-items-center">
          <section className="w-100 d-flex flex-column flex-lg-row mt-2 container p-4">
              <div className="w-100 p-lg-5 position-relative">
                
      <div id="carouselExampleIndicators" className="carousel slide position-unset" data-bs-ride="carousel">
       
        <div className="carousel-inner edge-shadow ">
          <div className="carousel-item active">
            <img src={`/${productDetails.image}`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={`/${productDetails.image}`} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={`/${productDetails.image}`} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <div class="d-none d-lg-flex carousel-product-indicators bottom-unset mx-0 w-100 position-unset flex-nowrap">
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active w-33 pe-1 pt-1 mx-0 border-0 mt-2 bg-transparent" aria-current="true" aria-label="Participer à 10 dt">
    <img src={`/${productDetails.image}`}  className="d-block w-100 h-100  edge-shadow" alt="..."/>
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="w-33 px-1 pt-1 border-0 mx-0 mt-2 bg-transparent" aria-label="Participer à 10 dt">
    <img src={`/${productDetails.image}`}  className="d-block w-100 h-100 edge-shadow " alt="..."/>
  </button>
  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="w-33 ps-1 pt-1 mx-0 border-0 mt-2 bg-transparent" aria-label="Participer à 10 dt">
    <img src={`/${productDetails.image}`} className="d-block w-100 h-100 edge-shadow " alt="..."/>
  </button>
</div> 
      </div>
      
              </div>
              <div className="w-100 d-flex flex-column justify-content-center product-card">
                  <div><h1>{productDetails.productName}</h1></div>
                  
                  <div><p>{productDetails.department}</p></div>
           
                  <div className="product-details-card my-3">
                    <div className="product-table h-100">
                        <div className="row m-0">
                          <div className="d-flex col-6"><p>Product</p></div>
                          <div className="col-6 text-end d-flex align-items-center justify-content-end">{productDetails.product}</div>
                        </div>
                        <div className="row m-0">
                          <div className="d-flex col-6" ><p>Color</p></div>
                          <div className="col-6 text-end d-flex align-items-center justify-content-end">{productDetails.color}</div>
                        </div>
                        
                       
                        <div className="row m-0 col-6">
                          <div className="d-flex col-6"><div className="sprite sprite-icon-badge-garantie-red"></div><p>Adjective</p></div>
                          <p className="col-6 text-end d-flex align-items-center justify-content-end">{productDetails.productAdjective}</p>
                        </div>
                        <div className="row m-0 border-bottom-0">
                          <div className="d-flex col-6"><p>Material</p></div>
                          <div className="col-6 text-end d-flex align-items-center justify-content-end">{productDetails.productMaterial}</div>
                        </div>
            
                      </div>
                  </div>
                  <div className="d-lg-flex align-items-center justify-content-center w-100 d-none "><button className="w-50 ">Acheter à <b>{productDetails.price}</b> dt</button></div>
              </div>
            </section>
         
      </main>
      </div>
    );
};

export default Product;