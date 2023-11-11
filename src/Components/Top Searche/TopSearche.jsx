import React from 'react'
import {
    SweatersFleece, Hoodies,
    SnowJackets,
    Thermals,
    WinterCaps,
    BagsRucksacks,
    WarmWaterProofShoes,
} from './TopSearcheLinks'

const TopSearche = () => {
    return (
        <div className='container-fluid'>
            <p className='fs-3 fw-semibold '>Top Searches In Winter Collection</p>
            <div className="-fluid text-center">
                <div className="row">
                    <div className="col">
                        {SweatersFleece}
                        <p>SweatersFleece</p>
                    </div>
                    <div className="col">
                        {Hoodies}
                        <p>Hoodies</p>
                    </div>
                    <div className="col">
                        {SnowJackets}
                        <p>Snow Jackets</p>
                    </div>
                    <div className="col">
                        {Thermals}
                        <p>Thermals </p>
                    </div>
                    <div className="col">
                        {WinterCaps}
                        <p>WinterCaps</p>
                    </div>
                    <div className="col">
                        {BagsRucksacks}
                        <p> Bags & Rucksacks</p>
                    </div>
                    <div className="col">
                        {WarmWaterProofShoes}
                        <p>Warm & WaterProof Shoes</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopSearche
