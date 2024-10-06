import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./NexusGame.css";

export default function NexusGame() {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
    loaderUrl: "Game/Nexus.loader.js",
    dataUrl: "Game/Nexus.data",
    frameworkUrl: "Game/Nexus.framework.js",
    codeUrl: "Game/Nexus.wasm",
  });

  return (
    <div>
      {!isLoaded && (
        <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
      )}
      <Unity
        unityProvider={unityProvider}
        style={{
          visibility: isLoaded ? "visible" : "hidden",
          height: "100vh",
          width: "100vw",
        }}
      />
    </div>
  );
}
