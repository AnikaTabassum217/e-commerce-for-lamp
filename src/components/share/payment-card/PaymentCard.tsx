import React from 'react'

import paymentImage1 from '../../../../public/images/payment-image/image1.png'
import paymentImage2 from '../../../../public/images/payment-image/image2.png'
import paymentImage3 from '../../../../public/images/payment-image/image3.png'
import paymentImage4 from '../../../../public/images/payment-image/image4.png'
import paymentImage5 from '../../../../public/images/payment-image/image5.png'
import paymentImage6 from '../../../../public/images/payment-image/image6.png'

import Image from 'next/image'

const PaymentCard = () => {

    const images=[
        paymentImage1,
        paymentImage2,
        paymentImage3,
        paymentImage4,
        paymentImage5,
        paymentImage6,
    ]
  return (
    <div>
    <div className="flex justify-center items-center mt-10 gap-2 cursor-pointer">
            <div> <p className="font-serif font-semibold text-xl ">Payment:</p></div>
            <div className="flex gap-2">
          {images.map((img, index) => (
            <Image key={index} src={img} alt={`Payment Image ${index + 1}`} width={50} height={50} />
          ))}
        </div>
        
          </div>
</div>
  )
}

export default PaymentCard