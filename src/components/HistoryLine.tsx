type HistoryProps = {
  heading: string;
  body: string;
  date: number;
  img: string;
};
const HistoryLine = () => {
  const histories: HistoryProps[] = [
    {
      heading: "The beginning",
      body: "Rapheal Safiriyu and brother, James bough “Nexus’s” – a pizza restaurant at Ypsilanti Mich with the price of 500 dollar and changed its name to “RaphNexus , Inc”",
      date: 1960,
      img: "/history_1960.jpg",
    },
    {
      heading: "Bad Luck",
      body: "In 1968, RaphNexus Pizza headquarter burn down by fire. In 1975, Amstar Corp, a sugar supplier name Raph sued RaphNexus's Pizza for the name of RaphNexus.",
      date: 1968,
      img: "/history_1968.jpg",
    },
    {
      heading: "Growing",
      body: "RaphNexus Pizza opened more 954 stores, increased total stores to 2,841 and became the fastest-growing pizza chain in the United States. The first Poco Pizza store opened in the United Kingdom, in Luton The Deep Pan Pizza",
      date: 1970,
      img: "/history_1980.jpg",
    },
    {
      heading: "Online Order",
      body: " RaphNexus Pizza revolutionized the industry by launching its first online ordering system, making it easier than ever for customers to get their favorite pizzas delivered with just a few clicks. This innovation set the foundation for the brand’s rapid growth and dominance in the pizza market.",
      date: 1990,
      img: "/history_1990.jpg",
    },
    {
      heading: "2,000th Store",
      body: "RaphNexus Pizza International opened its 2,000th store outside the United States. RaphNexus's celebrates 40 years of development around the world. At the same time, global sales reach more than $ 3.54 billion.",
      date: 2010,
      img: "/history_2010.jpg",
    },
    {
      heading: " Celebrating 50 Years",
      body: "In 2020, RaphNexus Pizza celebrated 50 years of operating. First store opened in Vietnam on 19 November 2020",
      date: 2020,
      img: "/history_2020.jpg",
    },
  ];
  return (
    <section className="md:py-6 px-7 ">
      <h3 className="font-bold text-center text-3xl md:text-4xl">
        Our History
      </h3>
      <div className="py-10 sm:py-10 md:py-14 flex flex-col ">
        {histories.map((history, index) => (
          <div
            className={`grid md:grid-cols-2 relative  ${
              index % 2 !== 0 ? "direction-rtl md:text-end" : ""
            }`}
          >
            <div className="md:px-9 px-7 md:py-14 py-7">
              <img src={history.img} alt="" className="rounded-xl " />
            </div>
            <div className="flex gap-2 md:items-center px-7 md:px-0 justify-center flex-col md:flex-row">
              <div className="border-l border-l-amber-400 h-full absolute left-0 top-0 md:left-1/2"></div>
              <div className=" text-amber-400 font-bold flex items-center gap-2.5 relative md:px-3">
                <div
                  className={`absolute  bg-amber-400 size-2.5 rounded-full -left-8 md:-left-1 ${
                    index % 2 === 0 ? "" : "md:-right-1"
                  }`}
                ></div>
                <hr className="bg-amber-400 md:w-[30px] lg:w-[50px] md:block hidden" /><h3 className=" text-2xl md:text-3xl">
                {history.date}</h3>
              </div>
              <div className="flex flex-col gap-2 md:gap-3.5 lg:px-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                  {history.heading}
                </h3>
                <p className="">{history.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HistoryLine;

// type HistoryProps = {
//     heading: string;
//     body: string;
//     date: number;
//     img: string;
//   };
//   const HistoryLine = () => {
//     const histories: HistoryProps[] = [
//       {
//         heading: "The beginning",
//         body: "Rapheal Safiriyu and brother, James bough “Nexus’s” – a pizza restaurant at Ypsilanti Mich with the price of 500 dollar and changed its name to “RaphNexus , Inc”",
//         date: 1960,
//         img: "/history_1960.jpg",
//       },
//       {
//         heading: "Bad Luck",
//         body: "In 1968, RaphNexus Pizza headquarter burn down by fire. In 1975, Amstar Corp, a sugar supplier name Raph sued RaphNexus's Pizza for the name of RaphNexus.",
//         date: 1968,
//         img: "/history_1968.jpg",
//       },
//       {
//         heading: "Growing",
//         body: "RaphNexus Pizza opened more 954 stores, increased total stores to 2,841 and became the fastest-growing pizza chain in the United States. The first Poco Pizza store opened in the United Kingdom, in Luton The Deep Pan Pizza",
//         date: 1970,
//         img: "/history_1980.jpg",
//       },
//       {
//         heading: "Online Order",
//         body: " RaphNexus Pizza revolutionized the industry by launching its first online ordering system, making it easier than ever for customers to get their favorite pizzas delivered with just a few clicks. This innovation set the foundation for the brand’s rapid growth and dominance in the pizza market.",
//         date: 1990,
//         img: "/history_1990.jpg",
//       },
//       {
//         heading: "2,000th Store",
//         body: "RaphNexus Pizza International opened its 2,000th store outside the United States. RaphNexus's celebrates 40 years of development around the world. At the same time, global sales reach more than $ 3.54 billion.",
//         date: 2010,
//         img: "/history_2010.jpg",
//       },
//       {
//         heading: "50 Years Celebrating",
//         body: "In 2020, Poco Pizza celebrated 50 years of operating. First store opened in Vietnam on 19 November 2020",
//         date: 2020,
//         img: "/history_2020.jpg",
//       },
//     ];
//     return (
//       <section className="py-6 px-7">
//         <h3 className="font-bold text-center text-4xl">Our History</h3>
//         <div className="py-14 flex flex-col ">
//           {histories.map((history, index) => (
//             <div className={`flex justify-between py-16  ${index%2===0?"flex-row":"flex-row-reverse"}`} key={index}>
//               <div className="w-[50vw] px-7">
//                 <img src={history.img} alt="" className="rounded-xl" />
//               </div>
//               <div className={`flex gap-14 items-center w-[50vw] justify-center ${index%2===0?"flex-row border-l-amber-400 border-l":"flex-row-reverse border-r-amber-400 border-r"}`}>
//                 <div className={`text-3xl text-amber-400 font-bold flex items-center gap-2.5 relative ${index%2===0?"flex-row":"flex-row-reverse"}`}>
//                   <div className={`absolute  bg-amber-400 size-2 rounded-full ${index%2===0?"-left-3":"-right-3"}`}></div>
//                   <hr className="text-amber-400 bg-amber-400 w-[50px]" />
//                   {history.date}
//                 </div>
//                 <div className="flex flex-col gap-3.5">
//                   <h3 className="text-4xl font-bold">{history.heading}</h3>
//                   <p className="">{history.body}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     );
//   };

//   export default HistoryLine;
