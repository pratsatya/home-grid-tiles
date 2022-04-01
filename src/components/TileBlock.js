import React from 'react';
// import './tileblock.css';
import './maintile.css';


function TileBlock(props) {
    return (
                // <div class="col-sm-3 px-2 py-2">
                /* <div class="image-grid"> */
                <div class="card bg-dark text-white card_edit">
                        <video class="card-img card_edit img img-responsive full-width" playsInline autoPlay muted loop src={props.md_url}  />
                        <div class="card-img-overlay ">
                        <h4 class="card-title">{props.md_title}</h4>
                        <p class="card-text">{props.md_txt}</p>
                        </div>   
                        </div>
                    // </div>  
        );
    }



export default TileBlock;

















// class TileBlock extends React.Component {
            // <div class="container">
            //     <div class="card-deck row"> */}
// <div class="col-sm-4 px-2 py-2">
                    // <div class="card bg-dark text-white card_edit">
                    // <div class="image">
                    //     <img class="card-img card_edit img img-responsive full-width" src="https://www.apple.com/v/iphone-13-pro/f/images/overview/camera/intro/camera_system__rp945vhdfsiu_large_2x.png" alt="Card image" />
                    //     </div> <div class="card-img-overlay">
                    //     <h5 class="card-title">Card title 1</h5>
                    //     <p class="card-text">Last updated 3 mins ago</p>
                    //     </div>  
                    //     </div> 
                    // </div>

                    // <div class="col-sm-4 px-2 py-2">
                    // <div class="card bg-dark text-white card_edit">
                    // <div class="image">
                    //     <img class="card-img card_edit img img-responsive full-width" src="https://www.apple.com/v/iphone-13-pro/f/images/overview/design/finishes_1_alpine_green__bxgqurawflau_large_2x.jpg" alt="Card image" />
                    //     </div> <div class="card-img-overlay">
                    //     <h5 class="card-title">Card title 1</h5>
                    //     <p class="card-text">Last updated 3 mins ago</p>
                    //     </div>
                    //     </div>   
                    // </div>

                    // <div class="col-sm-4 px-2 py-2">
                    // <div class="card bg-dark text-white card_edit">
                    //     <video class="card-img card_edit img img-responsive full-width" playsinline autoPlay muted loop src="https://img.rarible.com/feat/video/webm/x2/8ed71316275c4d55e059fd479d00132c/4a40aefd/JD-Samples-Reel_Optimised.mp4"  />
                    //     <div class="card-img-overlay">
                    //     <h5 class="card-title">Card title 1</h5>
                    //     <p class="card-text">Last updated 3 mins ago</p>
                    //     </div>  
                    //     </div>   
                    // </div>

                    // <div class="col-sm-4 px-2 py-2">
                    // <div class="card bg-dark text-white card_edit">
                    //     <video class="card-img card_edit img img-responsive full-width" playsinline autoPlay muted loop src="https://img.rarible.com/feat/video/webm/x2/6f408bd9e6680486b37a71db6ac82071/eb4247e2/MetaAngels.mp4"  />
                    //     <div class="card-img-overlay">
                    //     <h5 class="card-title">Card title 1</h5>
                    //     <p class="card-text">Last updated 3 mins ago</p>
                    //     </div>  
                    //     </div>   
                    // </div>
                    
            //     </div>
            // </div>