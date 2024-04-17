const Pc = ({ nodes, materials }) => {
    return (
        <>
            <group position={[1.211, 0.993, 2.414]}>
                <mesh geometry={nodes.Cube028.geometry} material={materials.pc_body_main} />
                <mesh geometry={nodes.Cube028_1.geometry} material={materials.pc_body_rear} />
            </group>
            <mesh geometry={nodes.pc_front.geometry} material={materials.pc_front} position={[1.211, 0.996, 2.27]} />
        </>
    )
}

export default Pc