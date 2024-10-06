import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import "./NexusGame.css";

export default function NexusGame() {
  const { unityProvider, isLoaded } = useUnityContext({
    loaderUrl: "Game/Nexus.loader.js",
    dataUrl: "Game/Nexus.data",
    frameworkUrl: "Game/Nexus.framework.js",
    codeUrl: "Game/Nexus.wasm",
    companyName: "Nexus Event",
    productName: "Nexus Retro",
    productVersion: "1.0",
  });

  return (
    <div>
      {!isLoaded && (
        <div className="loading-wrapper">
          <div className="loading-content">
            <div className="loading-text">Loading...</div>
          </div>
        </div>
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
