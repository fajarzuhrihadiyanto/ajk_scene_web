const CommandCenterPanelControlSmall = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh geometry={nodes.Plane011.geometry} material={materials['command center_frame']} />
            <mesh geometry={nodes.Plane011_1.geometry} material={materials['command center_side']} />
            <mesh geometry={nodes.Plane011_2.geometry} material={materials['command center_screen']} />
        </group>
    )
}

export default CommandCenterPanelControlSmall