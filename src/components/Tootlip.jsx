import { Html } from "@react-three/drei";
import React from "react";

const Tooltip = ({position=[0,0,0], rotation=[0,0,0], opacity, htmlProps = {}, containerProps = {}, children}) => { 
    return (
        <Html transform
            position={position}
            rotation={rotation}
            style={{
                transition: 'all 0.2s',
                opacity,  
            }}
            scale={opacity === 1 ? (htmlProps.scale || [1,1,1]) : [0,0,0]}
            {...htmlProps}
        >
            <div 
                style={{
                    backgroundColor: 'white',
                    borderRadius: '2px',
                    padding: '2px',
                    maxWidth: '100px',
                }}
                {...containerProps}
            >
                {children}
            </div>
        </Html>
    )
}

export default Tooltip