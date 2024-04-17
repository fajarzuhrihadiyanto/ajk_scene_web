const LogoArea = ({ nodes, materials }) => {
    return (
        <>
            {/* LOGO TEXT */}
            <mesh geometry={nodes.logo_text.geometry} material={materials['Material.001']} position={[-3.294, 2.765, 1.221]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />

            {/* LOGO IMAGE */}
            <group position={[-3.294, 2.706, 1.852]} rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
                <mesh geometry={nodes.Cylinder.geometry} material={materials.Logo_base} />
                <mesh geometry={nodes.Cylinder_1.geometry} material={materials.Logo_image} />
            </group>
        </>
    )
}

export default LogoArea