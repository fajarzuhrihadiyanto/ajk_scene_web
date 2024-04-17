import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import ServerBody from "./ServerBody"
import useMainStore from "../../store/useMainStore"
import { FOCUS_GENERAL_INFORMATION } from "../../constants"
import Tooltip from "../../components/Tootlip"
import GeneralInformation from "../../html/GeneralInformation"

const ServerPc = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // state wether the area is hovered or not
    const [isHovered, setIsHovered] = React.useState(false)

    // server pc area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // server pc area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // server pc area click function
    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_GENERAL_INFORMATION)
            setCameraPosition([-2.55, 1.1, 0])
            setControlsTargetOffset([-.01, 0, 0])
        }
    }, [focusTarget])

    // set cursor to pointer if the area is hovered and the focus target is not the lounge area
    useCursor(isHovered && focusTarget !== FOCUS_GENERAL_INFORMATION)

    return (
        <>
            <Select enabled={isHovered}>
                <group position={[-3.069, 1, 0]} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <mesh geometry={nodes.Cube.geometry} material={materials.server_pc_body} />
                    <mesh geometry={nodes.Cube_1.geometry} material={materials.server_pc_screen}>
                        <meshStandardMaterial color="black" />
                    </mesh>
                    <GeneralInformation scale={[.02, .02, .02]} position={[0.01, 0.101, 0]} rotation={[0, Math.PI / 2, 0]} />
                    <mesh geometry={nodes.Cube_2.geometry} material={materials.server_pc_keyboard} />
                    <mesh geometry={nodes.Cube_3.geometry} material={materials.server_frame_glass} />
                    <mesh geometry={nodes.Cube_4.geometry} material={materials.server_pc_touchpad} />
                    <mesh geometry={nodes.Cube_5.geometry} material={materials.server_pc_front} />

                    {Array(7).fill(0).map((_, i) => (
                        <ServerBody nodes={nodes} materials={materials} position={[0, -0.95 + i * 0.1, 0]} key={i} />
                    ))}
                    {Array(7).fill(0).map((_, i) => (
                        <ServerBody nodes={nodes} materials={materials} position={[0, -0.95 + i * 0.1, 0]} scale={[1,1,-1]} key={i} />
                    ))}


                    {Array(5).fill(0).map((_, i) => (
                        <ServerBody nodes={nodes} materials={materials} position={[0, 0.5 + i * 0.1, 0]} key={i} />
                    ))}
                    {Array(5).fill(0).map((_, i) => (
                        <ServerBody nodes={nodes} materials={materials} position={[0, 0.5 + i * 0.1, 0]} scale={[1,1,-1]} key={i} />
                    ))}
                </group>
            </Select>
            <Tooltip position={[-3.069, 2.5, 0]} rotation={[0, Math.PI / 2,0]} opacity={Number(isHovered)}>
                <p style={{
                    fontSize: '6pt',
                    margin: 0
                }}>Informasi Umum</p>
            </Tooltip>
        </>
    )
}

export default ServerPc