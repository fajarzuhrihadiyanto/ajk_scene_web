import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import useMainStore from "../../store/useMainStore"
import Keyboard from "./Keyboard"
import LabChair from "./LabChair"
import LabDesk from "./LabDesk"
import Monitor from "./Monitor"
import Mouse from "./Mouse"
import Pc from "./Pc"
import { FOCUS_FACILITIES } from "../../constants"
import Tooltip from "../../components/Tootlip"

const WorkingArea = ({ nodes, materials }) => {
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // state wether the area is hovered or not
    const [isHovered, setIsHovered] = React.useState(false)

    // lounge area hover function
    const onPointerOver = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(true)
        }
    }, [focusTarget])

    // lounge area unhove function
    const onPointerOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setIsHovered(false)
        }
    }, [focusTarget])

    // lounge area click function
    const onClick = React.useCallback(() => {
        if (focusTarget === null) {
            setIsHovered(false)
            setFocusTarget(FOCUS_FACILITIES)
            setCameraPosition([1.722, 1.012, 2])
            setControlsTargetOffset([0,0,0.01])
        }
    }, [focusTarget])

    // set cursor to pointer if the area is hovered and the focus target is not the lounge area
    useCursor(isHovered && focusTarget !== FOCUS_FACILITIES)

    return (
        <>
            <Select enabled={isHovered}>
                <group onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <LabDesk nodes={nodes} materials={materials} />
                    <LabChair nodes={nodes} materials={materials} />
                    <Monitor nodes={nodes} materials={materials} />
                    <Pc nodes={nodes} materials={materials} />
                    <Keyboard nodes={nodes} materials={materials} />
                    <Mouse nodes={nodes} materials={materials} />
                </group>
            </Select>
            <Tooltip position={[1.722, 1.5, 2.528]} rotation={[0,-Math.PI,0]} opacity={Number(isHovered)} scale={Number(isHovered)}>
                <p style={{
                    fontSize: '6pt',
                    margin: 0
                }}>Fasilitas</p>
            </Tooltip>
        </>
    )
}

export default WorkingArea