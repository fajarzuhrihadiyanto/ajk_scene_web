import { OrbitControls } from "@react-three/drei";
import React from "react";

export const ControlsContext = React.createContext()

const ControlContainer = ({ target=[0,0,0], children }) => {
    const controls = React.useRef()

    return (
        <ControlsContext.Provider value={{ controls }}>
            <OrbitControls
                ref={controls}
                enableRotate={true}
                enablePan={false}
                enableZoom={false}
                target={target}
                maxPolarAngle={3*Math.PI/4}
                minPolarAngle={Math.PI/4}

                // inverse the rotate direction
                rotateSpeed={-.5}
            />
            {children}
        </ControlsContext.Provider>
    )
}


export default ControlContainer