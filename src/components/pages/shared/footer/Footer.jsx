import React from "react";

import Icon from "../../../../assets/Group 9969.png";

const Footer = () => {
  return (
    <div className="bg-slate-900 text-gray-300 p-2">
      <div className="bg-slate-900 text-white grid gap-4 lg:grid-cols-5 md:justify-between p-2 md:px-36 md:gap-8 md:py-16">
        <div className="">
          <h4 className="text-2xl font-bold mb-4">Job Center</h4>
          <p className="text-gray-500 mb-5">
            <small>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
              nihil quia pariatur tempora.
            </small>
          </p>
          <img src={Icon} alt="" />
        </div>
        <div className="text-gray-500 ">
          <h4 className="font-bold text-white mb-4">Company</h4>
          <p>
            <small>
              <a href="#">About Us</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Works</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Latest News</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Careers</a>
            </small>
          </p>
        </div>
        <div className="text-gray-500 ">
          <h4 className="font-bold text-white mb-4">Product</h4>
          <p>
            <small>
              <a href="#">Prototypes</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Plans & Pricing</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Customers</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Integrations</a>
            </small>
          </p>
        </div>
        <div className="text-gray-500">
          <h4 className="font-bold mb-4 text-white">Support</h4>
          <p>
            <small>
              <a href="#">Help Desk</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Sales</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Become a Partner</a>
            </small>
          </p>
          <p>
            <small>
              <a href="#">Developers</a>
            </small>
          </p>
        </div>
        <div className="text-gray-500">
          <h4 className="font-bold mb-4 text-white">Contact</h4>
          <p>Elephant Tower</p>
          <p>Dhaka, Bangladesh</p>
          <p>Phone:+88 0172132451</p>
        </div>
      </div>
      <div className="md:px-36 p-2">
        <hr className="w-full border-gray-800" />
      </div>

      <div className="py-10 p-2 text-gray-500 md:px-36  md:flex  justify-between">
        <p>&copy; 2023 All rights reserved against Job center</p>
        <p>Powered by Job center</p>
      </div>
    </div>
  );
};

export default Footer;
