import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import CommandCenterPanelControlBig from "./CommandCenterPanelControlBig"
import CommandCenterPanelControlSmall from "./CommandCenterPanelControlSmall"
import CommandCenterPanelScreen, { CommandCenterPanelScreenDummy } from "./CommandCenterPanelScreen"
import useMainStore from "../../store/useMainStore"
import { FOCUS_LECTURER } from "../../constants"
import Tooltip from "../../components/Tootlip"
import { LECTURERS } from "../../data/lecturers"

const CommandCenterArea = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    // =====| SINGLE PANEL SCREEN AREA |=====
    // State wether the panel screen is hovered or not, and wether the panel screen is clicked or not
    const [hoveredPanelScreenId, setHoveredPanelScreenId] = React.useState(-1)
    const [clickedPanelScreenId, setClickedPanelScreenId] = React.useState(-1)

    // panel screen hover function
    const onPanelScreenOver = React.useCallback((e, id) => {
        // only set hover state while on main view
        if (focusTarget === null) {
            e.stopPropagation()
            setHoveredPanelScreenId(id)
        }
    }, [focusTarget])

    // panel screen unhove function
    const onPanelScreenOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setHoveredPanelScreenId(-1)
        }
    }, [focusTarget])

    // panel screen click function
    const onPanelScreenClick = React.useCallback((e, id) => {
        if (focusTarget === null) {
            e.stopPropagation()
            setClickedPanelScreenId(id)

            setFocusTarget(FOCUS_LECTURER)
            const colIndex = id % 3
            const rowIndex = Math.floor(id / 3)
            setCameraPosition([
                0.307 - colIndex * 1,
                rowIndex === 0 ? 2 : 1.5,
                rowIndex === 0 ? 2.375 - .75 : 2.619 - .75
            ])
            setControlsTargetOffset([0, rowIndex === 0 ? 0.005 : 0, 0.01])

            // reset hovered data center id
            setHoveredPanelScreenId(-1)
        }
    }, [focusTarget])

    // reset clicked panel screen when focus back to main view
    React.useEffect(() => {
        if (focusTarget === null) {
            setClickedPanelScreenId(-1)
        }
    }, [focusTarget])

    // set cursor to pointer if any panel screen is hovered
    useCursor(hoveredPanelScreenId !== -1)
    
    return (
        <>
            {LECTURERS.map((lecturer, i) => {
                const colIndex = i % 3
                const rowIndex = Math.floor(i / 3)

                return (
                    <>
                        <Select enabled={hoveredPanelScreenId === i} key={i}>
                            <CommandCenterPanelScreen
                                onPointerOver={(e) => onPanelScreenOver(e, i)}
                                onPointerOut={onPanelScreenOut}
                                onClick={(e) => onPanelScreenClick(e, i)}
                                shown={clickedPanelScreenId === i}
                                key={i}
                                lecturer={lecturer}
                                nodes={nodes} materials={materials}
                                position={[
                                    0.307 - colIndex * 1,
                                    rowIndex === 0 ? 2.447 : 1.5,
                                    rowIndex === 0 ? 2.375 : 2.619
                                ]}
                                rotation={[
                                    rowIndex === 0 ? Math.PI / 3 : Math.PI / 2,
                                    0,
                                    Math.PI
                                ]} />
                        </Select>
                        <Tooltip position={[
                            0.307 - colIndex * 1,
                            rowIndex === 0 ? 2.447 + .75 : 1.5 + .75,
                            rowIndex === 0 ? 2.375 : 2.619
                        ]} rotation={[0, -Math.PI, 0]} opacity={Number(hoveredPanelScreenId === i)}>
                        <p
                            style={{
                                margin: 0,
                                fontSize: '4pt',
                                textAlign: 'center'
                            }}
                        >
                            {lecturer.name}
                        </p>
                    </Tooltip>
                    </>
                )
            })}

            {Array(6 - LECTURERS.length).fill().map((_, i) => {

                const colIndex = (i + LECTURERS.length) % 3
                const rowIndex = Math.floor((i + LECTURERS.length) / 3)

                return (
                    <CommandCenterPanelScreenDummy
                        key={i}
                        nodes={nodes} materials={materials}
                        position={[
                            0.307 - colIndex * 1,
                            rowIndex === 0 ? 2.447 : 1.5,
                            rowIndex === 0 ? 2.375 : 2.619
                        ]}
                        rotation={[
                            rowIndex === 0 ? Math.PI / 3 : Math.PI / 2,
                            0,
                            Math.PI
                        ]} />
                )
            })}

            <CommandCenterPanelControlSmall nodes={nodes} materials={materials} position={[0.293, 0.743, 2.18]} rotation={[2.618, 0, Math.PI]}/>
            <CommandCenterPanelControlSmall nodes={nodes} materials={materials} position={[0.293 - 1.976, 0.743, 2.18]} rotation={[2.618, 0, Math.PI]}/>
            <CommandCenterPanelControlBig nodes={nodes} materials={materials} />

            <mesh geometry={nodes.command_center_base.geometry} material={materials['command center_base']} position={[-0.693, 0.45, 2.119]} rotation={[Math.PI, 0, Math.PI]}/>
        </>
    )
}

export default CommandCenterArea