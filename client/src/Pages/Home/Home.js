import React from 'react';
import potreroVideo from './assets/HighlandHome.mp4'

const Home = () => {
    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <video className='videoTag' autoplay muted>
                    {/* <video className='videoTag' autoPlay loop muted> */}
                        <source src={potreroVideo} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Home
