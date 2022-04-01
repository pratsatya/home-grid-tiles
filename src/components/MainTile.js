import React from 'react';
import './maintile.css';




function MainTile(props) {
    return (
                // <div class="col-sm-6 px-2 py-2">
                /* <div class="image-grid-col-2 image-grid-row-2"> */
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


export default MainTile;