import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

type RegularMenu = {
  title: string;
  products: string;
  img: string;
};

const Regular = () => {
  const menus: RegularMenu[] = [
    { title: "Pizza", products: "14 products", img: "/pizza.png" },
    { title: "Box Meals", products: "9 products", img: "/box meals.png" },
    { title: "BURGER", products: "9 products", img: "/burger.png" },
    { title: "CHICKEN", products: "9 products", img: "/chicken.png" },
    { title: "SAUCES", products: "9 products", img: "/sauces.png" },
    { title: "DRINKS", products: "20 products", img: "/drinks.png" },
    { title: "COMBO", products: "9 products", img: "/combo.png" },
    { title: "KIDS MENU", products: "9 products", img: "/kids menu.png" },
  ];

  return (
    <section className="px-7 py-20 flex flex-col gap-9">
      <h3 className="md:text-4xl font-bold text-3xl text-center md:text-left">
        Our Regular Menu Pack
      </h3>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={35}
        slidesPerView={2}
        loop={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 5 },
          1024: { slidesPerView: 6 },
        }}
        className="w-full"
      >
        {menus.map((menu, index) => (
          <SwiperSlide key={index} className=" py-7">
            <div className="bg-[#FFF9E9] flex flex-col items-center justify-between py-8  rounded-3xl hover:bg-amber-400 transition-all duration-400 group w-full cursor-pointer">
              <div className="size-30 rounded-full bg-white flex items-end justify-center p-2">
                <img
                  src={menu.img}
                  alt={menu.title}
                  className="group-hover:scale-120 transform transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="font-extrabold text-xl ">{menu.title}</h3>
                <p className="font-light text-gray-600">{menu.products}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Regular;
