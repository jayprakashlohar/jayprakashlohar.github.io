import React from 'react'
import Lottie from 'react-lottie';
import animationData from "../lotties/kiss-of-the-heart.json";

export const LottieAnimation = () => {
      const defaultOptions = {
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
        };
      return (
          <div
              style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
              }}
          >
              <Lottie options={defaultOptions} height={400} width={400} />
          </div>
      );
}
