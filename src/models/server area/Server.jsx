import ServerBody from "./ServerBody"

const Server = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            {Array(19).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[-3.069, 0.05 + i * 0.1, 1.086]} key={i} />
            ))}
            {Array(19).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[-3.069, 0.05 + i * 0.1, 1.086]} scale={[1,1,-1]} key={i} />
            ))}
            <group position={[-3.069, 1, 1.092]}>
                <mesh geometry={nodes.Cube005.geometry} material={materials.server_frame_main} />
                <mesh geometry={nodes.Cube005_1.geometry} material={materials.server_frame_glass} />
            </group>
        </group>
    )
}

export default Server