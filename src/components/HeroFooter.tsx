
const HeroFooter = () => {
  return (
    <section className="flex px-7 py-9 md:py-16 items-center md:justify-between xl:max-w-[90vw] h-full lg:gap-3 lg:flex-row flex-col gap-10 justify-center">
      <div className="flex md:justify-between xl:gap-26 lg:gap-14 md:gap-10 lg:w-fit w-full md:pr-46 justify-center md:flex-row flex-col items-center lg:pr-0 text-center md:text-start">
      <div className="flex flex-col gap-4">
        <h1  className="text-green-600 font-extrabold whitespace-nowrap text-2xl">RaphNeus</h1>
            <p className="text-gray-600">We believe it has the power to do <br /> amazing things</p>
        <div>
            <div><h3 className="text-amber-400 text-xl">+234 80-000-000</h3>
            <p ><a href="mailto:toniaroyce@gmail.com" className="text-gray-600">customer_support@example.com</a></p></div>
        </div>
      </div>
      <div className="md:self-end">
       
          <div className="flex flex-col gap-4">
            <p className="text-gray-600"> <strong className="text-black">Address: </strong>570 8th Ejigbo, <br /> Lagos 10001 Nigeria</p>
            <p className="text-gray-600"> <strong className="text-black">Hours: </strong><span>9.30am-6.30pm</span> <br /> Monday to Friday</p>
          </div>
        
      </div>
      </div>
      <div className="flex md:gap-16 lg:w-fit justify-between w-full lg:px-0 px-12 md:flex-row flex-col items-center text-center md:text-start gap-5">
        <div className="flex flex-col items-center gap-3">
          <h3 className="font-bold">USEFUL LINKS</h3>
          <ul className="text-gray-600">
            <li>New Products</li>
            <li>Best Sellers</li>
            <li>Bundle & Save</li>
            <li>Online Gift Card</li>
            <li>Discount</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold">MY ACCOUNT</h3>
          <ul className="text-gray-600">
            <li>My Profile</li>
            <li>My Order History</li>
            <li>My Wish List</li>
            <li>Order Tracking</li>
            <li>Shopping Cart</li>
          </ul>
        </div>
        <div className="flex flex-col  gap-3">
          <h3 className="font-bold">INFORMATION</h3>
          <ul className="text-gray-600">
            <li>Privacy policy</li>
            <li>Refund policy</li>
            <li>Shipping & Return</li>
            <li>Term of Use</li>
            <li>Advertise</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default HeroFooter
