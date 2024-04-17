import { Canvas } from "@react-three/fiber";
import { Bloom, EffectComposer, Outline, Selection } from "@react-three/postprocessing";

import Lab from "./models/Lab";
import { addVector3 } from "./utils";
import ControlContainer from "./context/ControlsContext";
import BackButton from "./components/BackButton";
import { Suspense } from "react";
import Loader from "./models/Loader";


function App() {
  const cameraPosition = [0,2,0]
  const controlsTargetOffset = [-.01,0,0]
  const controlsTarget = addVector3(cameraPosition, controlsTargetOffset)
  return (
    <div className="App" style={{width: '100vw', height: '100vh'}}>
      {/* IMPORTANT : DO NOT SET FRAMELOOP TO DEMAND, SOMETIME IT WILL STOP THE ANIMATION RENDERING */}
      <Canvas camera={{position: cameraPosition}}>
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={2} />
          <ControlContainer target={controlsTarget}>
            <Selection >
              <Lab />
              <EffectComposer autoClear={false}>
                  <Bloom intensity={.1} opacity={.25} luminanceThreshold={1}  luminanceSmoothing={0.9} />
                  <Outline blur visibleEdgeColor="white" hiddenEdgeColor={'white'} edgeStrength={10} width={1000} />
                </EffectComposer>
            </Selection>
          </ControlContainer>
        </Suspense>
      </Canvas>

      <BackButton />
    </div>
  );
}

export default App;
