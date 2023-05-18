import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProducts = () => {
  return (
    <>
      <BreadCrumb title="Compare Products" />

      <Container class1="compare-products-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="compare-products-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+5G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100.00</h6>
                <div>
                  <div className="product-details">
                    <h5>Brand: </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-details">
                    <h5>Type: </h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-details">
                    <h5>Availablity: </h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Color: </h5>
                    <Color />
                  </div>
                  <div className="product-details">
                    <h5>Size: </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="compare-products-card position-relative">
              <img
                src="images/cross.svg"
                alt="cross"
                className="position-absolute cross img-fluid"
              />
              <div className="product-card-image">
                <img src="images/watch.jpg" alt="watch" />
              </div>
              <div className="compare-product-details">
                <h5 className="title">
                  Honor T1 7.0 1 GB RAM 8GB ROM 7 Inch With Wi-Fi+5G Tablet
                </h5>
                <h6 className="price mb-3 mt-3">$ 100.00</h6>
                <div>
                  <div className="product-details">
                    <h5>Brand: </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-details">
                    <h5>Type: </h5>
                    <p>Watch</p>
                  </div>
                  <div className="product-details">
                    <h5>Availablity: </h5>
                    <p>In Stock</p>
                  </div>
                  <div className="product-details">
                    <h5>Color: </h5>
                    <Color />
                  </div>
                  <div className="product-details">
                    <h5>Size: </h5>
                    <div className="d-flex gap-10">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CompareProducts;
