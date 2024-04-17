import FacilitiesPage from "../../html/FacilitiesPage"

const Monitor = ({ nodes, materials }) => {
    return (
        <>
            <mesh geometry={nodes.monitor_base.geometry} material={materials.monitor_base} position={[1.722, 0.8, 2.528]} rotation={[0, Math.PI / 2, 0]} />
            <mesh geometry={nodes.monitor_pole.geometry} material={materials.monitor_base} position={[1.722, 0.88, 2.561]} rotation={[0, Math.PI / 2, 0]} />
            <group position={[1.722, 1.012, 2.528]} rotation={[0, Math.PI / 2, 0]}>
                <mesh geometry={nodes.Plane023.geometry} material={materials.monitor_base} />
                <mesh geometry={nodes.Plane023_1.geometry} material={materials.monitor_light}>
                    <meshStandardMaterial color={'black'} />
                </mesh>
            </group>
            <FacilitiesPage position={[1.722, 1.01, 2.52]} rotation={[0, Math.PI, 0]} scale={[.1, .1, .1]}/>
        </>
    )
}

export default Monitor