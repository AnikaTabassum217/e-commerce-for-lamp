import React from 'react'
import footerBanner from '../../../../public/images/footer-banner.avif'
import Image from 'next/image'
import ShopNow from '../buttons/shop-now/ShopNow'

const FooterBanner = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 rounded-lg mt-10 p-6">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between">
        <div className="text-center lg:text-left lg:w-1/2 ">
          <div> <p className="flex justify-center text-lg font-semibold font-serif">Deal of the Week</p></div>
          <div><p className="flex justify-center text:xl md:text-2xl lg:text-4xl  font-bold font-serif mt-4">Curved Collection for Your</p></div>
          <p className="flex justify-center text:xl md:text-2xl lg:text-4xl  font-bold mt-2 font-serif">Bedroom Get 25% Off</p>
          <p className="flex justify-center text-gray-500 mt-4 font-serif">
            Subscribe to our Newsletter and get all the latest information and offers
          </p>
          <div className='flex justify-center items-center mt-2'><ShopNow /></div>
        </div>
        <div className="mt-6 lg:mt-0 lg:w-1/2 flex justify-center lg:justify-end">
          <Image src={footerBanner} alt="Logo" className="w-full h-auto max-w-sm lg:max-w-full" />
        </div>
      </div>
    </div>

  )
}

export default FooterBanner