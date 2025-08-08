import Lottie from "lottie-react";
import firstAnimationData from "/public/first-animation.json";

function FirstAnimation() {
  return (
    <div className="flex items-center justify-center ">
      <Lottie
        animationData={firstAnimationData}
        loop={true}
        className="w-full max-w-2xl "
      />      
    </div>
  );
}

export default FirstAnimation;
