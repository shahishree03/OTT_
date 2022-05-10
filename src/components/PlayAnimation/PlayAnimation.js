import "./playAnimation.css"
import VideoPlayer from "react-video-js-player";
import video from './video.mp4';

const PlayAnimation =() => {
	const src =video;
    const poster ="https://cdn.jsdelivr.net/gh/chrizeone/movies@master/radhekrishna.png";

	return (
		<div className="App">
         
		  <VideoPlayer src={src} poster ={poster} width="720" height="420" playbackRates= {[0.5, 1, 3.85, 16]}/>

		   </div>
	);
};
export default PlayAnimation
