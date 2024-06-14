import { useLoader } from "@react-three/fiber"
import { TextureLoader } from "three"
import Picture from "../../html/Picture"

const CommandCenterPanelScreen = ({ nodes, materials, lecturer, shown, ...props }) => {

    // load the picture texture
    const colorMap = useLoader(TextureLoader, lecturer.photo_url)
    colorMap.flipY = false

    return (
        <group {...props}>
            <mesh geometry={nodes.Plane005.geometry} material={materials['command center_frame']} />
            <mesh geometry={nodes.Plane005_1.geometry} material={materials['command center_side']} />
            <mesh geometry={nodes.Plane005_2.geometry} material={materials['command center_white screen']}>
                <meshStandardMaterial map={colorMap}/>
            </mesh>
            <Picture lecturer={lecturer} shown={shown} rotation={[-Math.PI / 2,0,0]} scale={[.04,.04,.04]} position={[-.003,-.05,0]}/>
        </group>
    )
}

export const CommandCenterPanelScreenDummy = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh geometry={nodes.Plane005.geometry} material={materials['command center_frame']} />
            <mesh geometry={nodes.Plane005_1.geometry} material={materials['command center_side']} />
            <mesh geometry={nodes.Plane005_2.geometry} material={materials['command center_white screen']}>
                <meshStandardMaterial color="black"/>
            </mesh>
        </group>
    )
}

export default CommandCenterPanelScreen