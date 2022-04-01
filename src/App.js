import logo from './logo.svg';
import './App.css';
import TileBlock from "./components/TileBlock.js"
import MainTile from './components/MainTile';

const cardmedia = {

}

function App() {
  return (
    <div class="container">
      
        {/* <section class="cards"> */}
        <div class="row-edit">
        {/* <section class="cards-col"> */}
        <div class="double-column-edit">
            <MainTile md_url="https://img.rarible.com/feat/video/webm/x3/44177ec1a86d73cfa2a0f1dca7b98fcf/7ddd16d6/spatialgallery5mb.mp4"/>
            
        {/* </section> */}
        </div>
        {/* <div class="col"> */}
        {/* <section class="cards-col"> */}
        <div class="column-edit">
            <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
            <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8ed71316275c4d55e059fd479d00132c/4a40aefd/JD-Samples-Reel_Optimised.mp4" md_title="Never Fear Truth" md_txt="by Johnny Depp" />
        {/* </section> */}
        </div>
        {/* <section class="cards-col"> */}
            {/* <div class="card-deck row"> */}
            <div class="column-edit">
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/6f408bd9e6680486b37a71db6ac82071/eb4247e2/MetaAngels.mp4" md_title="Meta Angels marketplace" md_txt="" />
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
              {/* </section> */}
              </div>
        {/* <section class="cards-col"> */}
        <div class="column-edit">
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
              {/* </section> */}
        {/* <section class="cards-col"> */}
</div>
<div class="column-edit">
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
</div>
<div class="column-edit">
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
</div>
<div class="column-edit">
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
              <TileBlock md_url="https://img.rarible.com/feat/video/webm/x2/8c25669ef5ce94655d9808288766a7ab/ba331eae/PumaXDigital_fashion_princess_Optimised.mp4" md_title="PUMA X ARTISANT" md_txt="Metaverse Fashion Week" />
</div>



              {/* </section> */}
        
      </div>
      {/* </section> */}
    {/* </div> */}
    </div>
    /* </div> */
  );
}

export default App;