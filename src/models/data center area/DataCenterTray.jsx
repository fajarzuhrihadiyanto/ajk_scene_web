import React from "react"

const DataCenterTray = React.forwardRef(({ nodes, materials, children, ...props }, ref) => {
    return (
        <group {...props} ref={ref}>
            <mesh geometry={nodes.data_center_tray.geometry} material={materials['data center_tray']} position={[-1.547, 1.863, -2.567]} rotation={[0, -Math.PI / 2, 0]} />
            <group position={[-1.547, 1.314, -2.424]} rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                <mesh geometry={nodes.Plane001.geometry} material={materials['data center_panel_frame']} />
                <mesh geometry={nodes.Plane001_1.geometry} material={materials['data center_panel_screen']}>
                    <meshStandardMaterial color={'black'} />
                </mesh>
                {children}
            </group>
        </group>
    )
})


export default DataCenterTray