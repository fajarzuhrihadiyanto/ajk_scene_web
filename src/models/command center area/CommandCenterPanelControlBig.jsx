const CommandCenterPanelControlBig = ({ nodes, materials }) => {
    return (
        <group position={[-0.695, 0.743, 2.18]} rotation={[2.618, 0, Math.PI]}>
            <mesh geometry={nodes.Plane012.geometry} material={materials['command center_frame']} />
            <mesh geometry={nodes.Plane012_1.geometry} material={materials['command center_side']} />
            <mesh geometry={nodes.Plane012_2.geometry} material={materials['command center_screen']} />
        </group>
    )
}

export default CommandCenterPanelControlBig