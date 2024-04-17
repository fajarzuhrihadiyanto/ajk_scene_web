const ServerBody = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh geometry={nodes.Cube001.geometry} material={materials.server_body_base} />
            <mesh geometry={nodes.Cube001_1.geometry} material={materials.server_body_indicator_red} />
            <mesh geometry={nodes.Cube001_2.geometry} material={materials.server_body_indicator_cyan} />
            <mesh geometry={nodes.Cube001_3.geometry} material={materials.server_body_button} />
        </group>
    )
}

export default ServerBody