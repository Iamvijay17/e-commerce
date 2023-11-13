import React from 'react'
import './UnderMaintanance.css'

const UnderMaintanance = () => {
    return (
        <div>

            <div className='container text-center'>
                <div class="wrapper">
                    <svg>
                        <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                            Site is temporarily unavailable.
                        </text>
                    </svg>
                </div>
                <p>Scheduled maintenance is currently in progress. Please check back soon.</p>
                <p>We apologize for any inconvenience.</p>
                <p id="signature">&mdash; <a href="mailto:[Email]">[Fashion Pass]</a></p>
            </div>
        </div>
    )
}

export default UnderMaintanance
