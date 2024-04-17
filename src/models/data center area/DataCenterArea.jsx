import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"

import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT } from "../../constants"
import DataCenter from "./DataCenter"
import useMainStore from "../../store/useMainStore"
import Tooltip from "../../components/Tootlip"
import SubjectPages from "../../html/SubjectPages"
import ResearchPages from "../../html/ResearchPages"
import CommunityServicePages from "../../html/CommunityServicePages"
import BookPages from "../../html/BookPages"

const DataCenterArea = ({ nodes, materials }) => {
    
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()

    const data = [
        {
            title: 'Mata Kuliah',
            focusTarget: FOCUS_SUBJECT,
            cameraPosition: [-2.2 + 0*1.101, 1.325, -2],
            controlsTargetOffset: [0.01, 0, 0],
            children: <SubjectPages scale={[.04, .04, .04]} rotation={[-Math.PI / 2,0, 0]} position={[0,0.001,-0.0]} />
        },
        {
            title: 'Penelitian',
            focusTarget: FOCUS_RESEARCH,
            cameraPosition: [-2.2 + 1*1.101, 1.325, -2],
            controlsTargetOffset: [0.01, 0, 0],
            children: <ResearchPages scale={[.04, .04, .04]} rotation={[-Math.PI / 2,0, 0]} position={[0,0.001,0]} />
        },
        {
            title: 'Pengabdian Masyarakat',
            focusTarget: FOCUS_COMMUNITY_SERVICE,
            cameraPosition: [-2.2 + 2*1.101, 1.325, -2],
            controlsTargetOffset: [0.01, 0, 0],
            children: <CommunityServicePages scale={[.04, .04, .04]} rotation={[-Math.PI / 2,0, 0]} position={[0,0.001,0]} />
        },
        {
            title: 'Buku',
            focusTarget: FOCUS_BOOKS,
            cameraPosition: [-2.2 + 3*1.101, 1.325, -2],
            controlsTargetOffset: [0.01, 0, 0],
            children: <BookPages scale={[.04, .04, .04]} rotation={[-Math.PI / 2,0, 0]} position={[0,0.001,0]} />
        }
    ]

    // =====| SINGLE DATA CENTER AREA |=====
    // State wether the data center is hovered or not
    const [hoveredDataCenterId, setHoveredDataCenterId] = React.useState(-1)

    // data center hover function
    const onDataCenterOver = React.useCallback((e, id) => {
        // only set hover state while on main view
        if (focusTarget === null) {
            e.stopPropagation()
            setHoveredDataCenterId(id)
        }
    }, [focusTarget])

    // data center unhove function
    const onDataCenterOut = React.useCallback(() => {
        // only set hover state while on main view
        if (focusTarget === null) {
            setHoveredDataCenterId(-1)
        }
    }, [focusTarget])

    // data center click function
    const onDataCenterClick = React.useCallback((e, id) => {
        if (focusTarget === null) {
            e.stopPropagation()

            setFocusTarget(data[id].focusTarget)
            setCameraPosition(data[id].cameraPosition)
            setControlsTargetOffset(data[id].controlsTargetOffset)

            // reset hovered data center id
            setHoveredDataCenterId(-1)
        }
    }, [focusTarget])

    // set cursor to pointer if either any or all subject books are hovered, and not focused on book detail
    useCursor(hoveredDataCenterId !== -1)

    return (
        <>
            {/* <MonitorData nodes={nodes} materials={materials} isShow={hoveredDataCenterId === 0} /> */}

            {Array(4).fill().map((_, i) => (
                <>
                    <Select enabled={hoveredDataCenterId === i} key={i}>
                        <DataCenter
                            nodes={nodes} materials={materials}
                            data={data[i]}
                            position={[i*1.101, 0, 0]}
                            onPointerOver={(e) => {onDataCenterOver(e, i)}}
                            onPointerOut={onDataCenterOut}
                            onClick={e => {onDataCenterClick(e, i)}}>
                            {data[i].children}
                        </DataCenter>
                    </Select>
                    <Tooltip position={[-1.632 + i*1.01, 2.5, -2.452]} opacity={Number(hoveredDataCenterId === i)}>
                        <p
                            style={{
                                margin: 0,
                                fontSize: '6pt',
                                textAlign: 'center'
                            }}
                        >
                            {data[i].title}
                        </p>
                    </Tooltip>
                </>
            ))}
        </>
    )
}

export default DataCenterArea