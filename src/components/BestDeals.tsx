
const BestDeals = () => {
  return (
    <section className="py-16 px-7 grid lg:grid-cols-[2fr_1fr_1fr] md:grid-cols-2 lg:grid-rows-[450px] gap-3 text-white sm:grid-cols-1 md:grid-rows-[450px_450px] grid-rows-[450px_450px_450px]">
        <div className=" flex flex-col gap-5 items-center justify-start pt-10 bg-[#33BFC4] rounded-3xl lg:col-auto md:col-span-3 bg-[url('/pizzabg.jpg')] bg-blend-multiply hover:bg-center transform transition-all duration-800 cursor-pointer">
            <p className="fantasy text-amber-400 text-xl">Today's Best Deal</p>
            <div className="text-center">
                <h1 className="text-4xl font-bold">DELICIOUS PIZZA</h1>
                <p>The best options of the day in your town</p>
            </div>

        </div>
        <div className=" flex flex-col gap-5 items-center justify-end pb-10 bg-[#F04E30] rounded-3xl bg-[url('/chickenbg.jpg')] bg-blend-multiply hover:bg-center transform transition-all duration-800 cursor-pointer">
            <div className="text-center flex flex-col gap-1">
            <p className="fantasy text-xl">Spicy Delicious</p>
                <h1 className="text-3xl font-bold">FRIED CHICKEN</h1>
                <p>This weekend only</p>
            </div>
            <button className="bg-amber-400 px-5 py-2 text-black hover:text-white font-bold">SHOP NOW</button>
        </div>
        <div className=" flex flex-col gap-5 items-center justify-start pt-10 bg-[#9B71C1] rounded-3xl bg-[url('/pastabg.jpg')] bg-blend-multiply hover:bg-center transform transition-all duration-500 cursor-pointer">
            <div className="text-center">
                <h1 className="text-3xl font-bold">PASTA MENU</h1>
                <p>Super Delicious</p>
            </div>
            <button className="bg-amber-400 px-5 py-2 text-black hover:text-white font-bold">SHOP NOW</button>
        </div>
    </section>
  )
}

export default BestDeals