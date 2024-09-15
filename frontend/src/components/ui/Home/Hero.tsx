import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import bgImage from "../../../assets/image/herobg.png";

export default function Hero() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  console.log(datas);
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
      }}
      className="w-full bg-cover  flex items-end justify-center  lg:min-h-[700px]"
    >
      <Swiper autoplay={true} modules={[]} className="mySwiper py-20">
        {datas.map((i) => (
          <SwiperSlide className="px-20 py-10">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-5xl font-bold text-white">{i.brand}</h1>
                <h1 className="text-5xl font-bold text-white">{i.name}</h1>
              </div>
              <div className="relative">
                <img
                  className="w-72 h-72"
                  src={i.imageUrl}
                  alt="batmintonImage"
                />
                <p
                  style={{ boxShadow: "-2px -2px 8px white" }}
                  className="absolute left-0 -top-3 p-3 rounded-3xl bg-green-500 text-red-500 shadow-2xl"
                >
                  Discount {i.discountPercentage}%
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
