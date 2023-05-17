import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { HiOutlineArrowLeft } from "react-icons/hi";
import blog from "../images/blog-1.jpg";

const Singleblog = () => {
  return (
    <>
      <BreadCrumb title={"Dynamic Blog Name"} />

      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="single-blog-card">
                <Link to="/blogs" className="d-flex align-items-center gap-10">
                  <HiOutlineArrowLeft className="fs-4" />
                  Go back to Blogs
                </Link>
                <h3 className="title">
                  A Beautiful Sunday Morning Renaissance
                </h3>
                <img
                  src={blog}
                  className="img-fluid w-100 my-4"
                  alt="blog"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  earum qui aliquam facilis dolorem eum voluptatem vel, in
                  cumque. Odio quia, distinctio veniam fugit eaque corrupti
                  deserunt veritatis neque, quod facilis deleniti sed sapiente.
                  Voluptates enim sint animi mollitia accusamus asperiores nobis
                  quo! Aperiam reiciendis officia temporibus, quia ipsa fugiat
                  inventore, illo ipsam nemo nisi nesciunt et consequuntur
                  saepe?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
