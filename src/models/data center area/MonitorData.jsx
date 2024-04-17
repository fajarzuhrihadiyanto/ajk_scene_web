import React from "react"
import useMainStore from "../../store/useMainStore"
import { FOCUS_SUBJECT } from "../../constants"
import gsap from "gsap"

const MonitorData = ({ nodes, materials, isShow }) => {
    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()

    const ref = React.useRef()

    React.useEffect(() => {
        if (ref.current) {
            if (isShow || focusTarget === FOCUS_SUBJECT) {
                gsap.to(ref.current.position, {duration: 1, x: 0, y: -2, z: 0})
            } else {
                gsap.to(ref.current.position, {duration: 1, x: 0, y: 0, z: 0})
            }    
        }
    }, [isShow, focusTarget])

    
    return (
        <>
            <mesh geometry={nodes.monitor_data_base.geometry} material={materials['monitor_base.001']} position={[-2.046, 3.126, -1.839]} rotation={[0, -Math.PI / 2, 0]}/>
            <group ref={ref}>
                <mesh geometry={nodes.monitor_data_pole.geometry} material={materials['monitor_base.001']} position={[-2.046, 3.949, -1.836]} rotation={[0, -Math.PI / 2, 0]}/>
                <group position={[-2.046, 2.861, -1.619]} rotation={[-Math.PI / 4, -Math.PI / 2, 0]}>
                    <mesh geometry={nodes.Plane028.geometry} material={materials['monitor_base.001']} />
                    <mesh geometry={nodes.Plane028_1.geometry} material={materials['monitor_light.001']} />
                </group>
            </group>
        </>
    )
}

export default MonitorData