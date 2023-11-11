import React from 'react'
import ForYouData from '../Assests/ForYouData'
import DiscountItem from '../Item/DiscountItem'


const ForYou = () => {
    return (
        <div className=''>
            <h4>For You</h4>
            {/* <div>
                {
                    ForYouData.map((item, i) => {
                        return <DiscountItem key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} discount={item.discount} new_price={item.new_price} old_price={item.old_price} />
                    })
                }
            </div> */}

            <div className='container1'>
                <div className='row'>

                    <div className="">
                        {ForYouData.map((item, i) => {
                            return <DiscountItem key={i} id={item.id} brand={item.brand} name={item.name} image={item.image} discount={item.discount} new_price={item.new_price} old_price={item.old_price} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForYou
