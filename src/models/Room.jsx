const Room = ({nodes, materials}) => {
    return (
        <>
            {/* WALL FLOOR */}
            <group>
                <mesh geometry={nodes.Plane_1.geometry} material={materials.room} />
                <mesh geometry={nodes.Plane_2.geometry} material={materials.room_floor} />
            </group>

            {/* DOOR */}
            <mesh geometry={nodes.door_left_body.geometry} material={materials['Material.002']} position={[3.397, 0, 1.018]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}/>
            <group position={[3.452, 1.138, 0.168]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.Cylinder001.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder001_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder001_2.geometry} material={materials['Material.003']} />
            </group>
            <mesh geometry={nodes.door_right_body.geometry} material={materials['Material.002']} position={[3.397, 0, -0.982]} rotation={[Math.PI / 2, 0, Math.PI / 2]}/>
            <group position={[3.452, 1.138, -0.132]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.Cylinder002.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder002_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder002_2.geometry} material={materials['Material.003']} />
            </group>
            <mesh geometry={nodes.door_frame.geometry} material={materials['Material.004']} position={[3.422, 2.325, 0.018]} rotation={[0, Math.PI / 2, 0]}/>
            <group position={[3.392, 1.138, 0.168]} rotation={[0, -1.571, 0]}>
                <mesh geometry={nodes.Cylinder003.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder003_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder003_2.geometry} material={materials['Material.003']} />
            </group>
            <group position={[3.392, 1.138, -0.132]} rotation={[0, -1.571, 0]}>
                <mesh geometry={nodes.Cylinder004.geometry} material={materials.door_handle_base} />
                <mesh geometry={nodes.Cylinder004_1.geometry} material={materials.door_handle_light} />
                <mesh geometry={nodes.Cylinder004_2.geometry} material={materials['Material.003']} />
            </group>

            {/* CEILING LIGHT */}
            <mesh geometry={nodes.ceiling_light_pattern.geometry} material={materials['ceiling light_pattern']} position={[0, 3.279, 0]} />
            <mesh geometry={nodes.ceiling_light_center.geometry} material={materials['ceiling light_center']} position={[0, 3.214, 0]} />
        </>
    );
}

export default Room