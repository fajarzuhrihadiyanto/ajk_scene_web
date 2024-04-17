import React from "react"
import useMainStore from "../../store/useMainStore"
import ServerBody from "../server area/ServerBody"
import gsap from "gsap"
import { FOCUS_SUBJECT, FOCUS_SUBJECT_DETAIL } from "../../constants"
import DataCenterTray from "./DataCenterTray"
import SubjectDetailPages from "../../html/SubjectDetailPages"

const DataCenter = ({ nodes, materials, data, children, ...props }) => {
    
    const focusTarget = useMainStore.useFocusTarget()
    const subjectData = useMainStore.useSubjectData()

    const ref = React.useRef()
    const detailRef = React.useRef()

    React.useEffect(() => {
        if (ref.current) {
            if (focusTarget === FOCUS_SUBJECT_DETAIL) {
                detailRef.current && gsap.to(detailRef.current.position, {duration: 1, x: .2, y: 0, z: .5})
                gsap.to(ref.current.position, {duration: 1, x: 0, y: 0, z: 0})
            } else {
                if (focusTarget === data.focusTarget) {
                    console.log(focusTarget, data.focusTarget)
                    gsap.to(ref.current.position, {duration: 1, delay: Number(subjectData === null), x: 0, y: 0, z: .5})
                } else {
                    gsap.to(ref.current.position, {duration: 1, x: 0, y: 0, z: 0})
                }
                detailRef.current && gsap.to(detailRef.current.position, {duration: 1, x: .2, y: 0, z: 0})
            }
        }
    }, [focusTarget, data.focusTarget])

    
    return (
        <group {...props}>
            {Array(19).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[-1.627, 0.05 + i*.1, -2.424]} rotation={[0,-Math.PI / 2,0]} key={i} />
            ))}
            {Array(7).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[-1.627, 0.05 + i*.1, -2.424]} scale={[1,1,-1]} rotation={[0,-Math.PI / 2,0]} key={i} />
            ))}
            <mesh geometry={nodes.data_center_frame.geometry} material={materials.server_frame_main} position={[-1.632, 1, -2.452]} rotation={[0, -Math.PI / 2, 0]} />
            
            <DataCenterTray nodes={nodes} materials={materials} ref={ref}>
                {children}
            </DataCenterTray>

            {data.focusTarget === FOCUS_SUBJECT && 
                <DataCenterTray nodes={nodes} materials={materials} position={[.2,0,0]} ref={detailRef}>
                    <SubjectDetailPages scale={[.04, .04, .04]} rotation={[-Math.PI / 2,0, 0]} position={[0,0.001,-0.0]} />
                </DataCenterTray>
            }
        </group>
    )
}

export default DataCenter