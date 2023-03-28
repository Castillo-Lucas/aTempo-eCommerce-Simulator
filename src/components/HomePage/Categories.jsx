import React from "react";

const Categories = () => {
  return (
    <div>
      {/*Mobile*/}
      <div className="md:hidden flex justify-center container mx-auto md:px-4 lg:px-44  my-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679750567/aTempo/Assets/homepage/Mobile/categoryMobile1_m0alp9.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679750567/aTempo/Assets/homepage/Mobile/categoryMobile2_vuazn1.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679750567/aTempo/Assets/homepage/Mobile/categoryMobile3_jyxbem.png"
                alt=""
              />
            </a>
          </div>
          <div className="col-span-12 md:col-span-6">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679750567/aTempo/Assets/homepage/Mobile/categoryMobile4_verh5n.png"
                alt=""
              />
            </a>
          </div>

          <div className="col-span-12 md:col-span-6">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679750567/aTempo/Assets/homepage/Mobile/categoryMobile5_tt4l7y.png"
                alt=""
              />
            </a>
          </div>

          <div className="col-span-12 md:col-span-6">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679750567/aTempo/Assets/homepage/Mobile/categoryMobile6_n1nif1.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>

      {/*Desktop*/}
      <div className="hidden md:block lg:container mx-auto md:px-4 lg:px-44  my-8">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-6 overflow-hidden">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679749592/aTempo/Assets/homepage/Desktop/categoryDesktop1_br8m2v.png"
                alt=""
                className="transform transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>
          <div className="col-span-6 overflow-hidden">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679749592/aTempo/Assets/homepage/Desktop/categoryDesktop2_hlumb9.png"
                alt=""
                className="transform transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>
          <div className="col-span-6 overflow-hidden">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679749593/aTempo/Assets/homepage/Desktop/categoryDesktop3_ncnyef.png"
                alt=""
                className="transform transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>
          <div className="col-span-6 overflow-hidden">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679749593/aTempo/Assets/homepage/Desktop/categoryDesktop4_bwcq5d.png"
                alt=""
                className="transform transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>

          <div className="col-span-6 overflow-hidden">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679749593/aTempo/Assets/homepage/Desktop/categoryDesktop5_neesdb.png"
                alt=""
                className="transform transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>

          <div className="col-span-6 overflow-hidden">
            <a href="">
              <img
                src="https://res.cloudinary.com/dthpuldpm/image/upload/v1679749593/aTempo/Assets/homepage/Desktop/categoryDesktop6_qfo7jz.png"
                alt=""
                className="transform transition-all duration-300 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;