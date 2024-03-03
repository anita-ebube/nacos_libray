"use client";
import React, { Component } from "react";
import Slider from "react-slick";

function StudentReviews() {
  const settings = {
    className: "left",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    autoplay:true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <div className="bg-black w-full h-[20vh]">
            <h3>1</h3>
          </div>
        </div>
        <div>
          <div className="bg-orange-400 w-full h-[20vh]">
            <h3>2</h3>
          </div>
        </div>
        <div>
          <div className="bg-teal-400 w-full h-[20vh]">
            <h3>3</h3>
          </div>
        </div>
        <div>
        <div className="bg-pink-400 w-full h-[20vh]">
            <h3>4</h3>
          </div>
        </div>
        <div>
        <div className="bg-yellow-400 w-full h-[20vh]">
            <h3>3</h3>
          </div>
        </div>
        <div>
        <div className="bg-indigo-400 w-full h-[20vh]">
            <h3>3</h3>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default StudentReviews;
// const StudentReviews = () => {
//   return (
//     <>
//     <div className="heading text-center">
//        <h1>Students Review</h1>
//        <p>
//        See what other students have to say about the computer science
//        library
//        </p>
//        <button className="btn">View All</button>
//      </div>
//     <Carousel cols={2} rows={1} gap={10} loop>
//       <Carousel.Item>
//       <div className="bg-[#00000012] p-7 rounded-md">
//         <div className="flex ">
//           <img src="images/latest/prof.png" alt=""/>
//           <p className="text-[1.5rem] pl-3">John Doe</p>
//         </div>
//         <p className=" text-[2rem] py-5">
//           The library has been extremely helpful in my studies. Highly
//           recommended!
//         </p>
//         <div className="flex">
//           <div>
//             <img src="images/reaction/thumbs.png" alt="" />
//           </div>
//           <div>
//             <img src="images/reaction/fire.png" alt="" className="px-5" />
//           </div>
//           <div>
//             <img src="images/reaction/star.png" alt="" />
//           </div>
//         </div>
//       </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className="bg-[#00000012] p-7 rounded-md">
//         <div className="flex ">
//           <img src="images/latest/prof.png" alt=""/>
//           <p className="text-[1.5rem] pl-3">John Doe</p>
//         </div>
//         <p className=" text-[2rem] py-5">
//           The library has been extremely helpful in my studies. Highly
//           recommended!
//         </p>
//         <div className="flex">
//           <div>
//             <img src="images/reaction/thumbs.png" alt="" />
//           </div>
//           <div>
//             <img src="images/reaction/fire.png" alt="" className="px-5" />
//           </div>
//           <div>
//             <img src="images/reaction/star.png" alt="" />
//           </div>
//         </div>
//       </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className="bg-[#00000012] p-7 rounded-md">
//         <div className="flex ">
//           <img src="images/latest/prof.png" alt=""/>
//           <p className="text-[1.5rem] pl-3">John Doe</p>
//         </div>
//         <p className=" text-[2rem] py-5">
//           The library has been extremely helpful in my studies. Highly
//           recommended!
//         </p>
//         <div className="flex">
//           <div>
//             <img src="images/reaction/thumbs.png" alt="" />
//           </div>
//           <div>
//             <img src="images/reaction/fire.png" alt="" className="px-5" />
//           </div>
//           <div>
//             <img src="images/reaction/star.png" alt="" />
//           </div>
//         </div>
//       </div>
//       </Carousel.Item>
//       <Carousel.Item>
//       <div className="bg-[#00000012] p-7 rounded-md">
//         <div className="flex ">
//           <img src="images/latest/prof.png" alt=""/>
//           <p className="text-[1.5rem] pl-3">John Doe</p>
//         </div>
//         <p className=" text-[2rem] py-5">
//           The library has been extremely helpful in my studies. Highly
//           recommended!
//         </p>
//         <div className="flex">
//           <div>
//             <img src="images/reaction/thumbs.png" alt="" />
//           </div>
//           <div>
//             <img src="images/reaction/fire.png" alt="" className="px-5" />
//           </div>
//           <div>
//             <img src="images/reaction/star.png" alt="" />
//           </div>
//         </div>
//       </div>
//       </Carousel.Item>
//       {/* ... */}
//     </Carousel>
//     </>
//   )
// }

// export default StudentReviews;
