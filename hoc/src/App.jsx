import './App.css';
import React from 'react';
import LikePost from './components/LikePost';
import LikeImage from './components/LikeImage';
import HigherOrderComponent from './components/HigherOrderComponent/HigherOrderComponent';
import LikeImageHoc from './components/HigherOrderComponent/LikeimageHOC';
import LikePostHoc from './components/HigherOrderComponent/LikePostHOC';
import RenderPropsComponent from './components/RenderProps/RenderPropsComponent';
import LikeImageRender from './components/RenderProps/LikeImageRender';
import LikePostRender from './components/RenderProps/LikePostRender';


const LikeImageH = HigherOrderComponent(LikeImageHoc)
const LikePostH = HigherOrderComponent(LikePostHoc)


function App() {
  return (
    <div className='container'>
      <div className='simple'>
      <h3>Some Blog</h3>
        <LikePost />
        <LikeImage />
      </div>

      <div className="hoc">
        <h3>Higher HigherOrderComponent</h3>
        <LikeImageH />
        <LikePostH />
      </div>

      
      <div className="render">
        <h3>Render props</h3>
        <RenderPropsComponent render={(count, increaseCount)=>(
          <LikeImageRender count={count} increaseCount={increaseCount}/>
        )} />
         <RenderPropsComponent render={(count, increaseCount)=>(
          <LikePostRender count={count} increaseCount={increaseCount} />
        )} />
      </div>



    </div>
  );
}

export default App;
