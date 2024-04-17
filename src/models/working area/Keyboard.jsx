const Keyboard = ({ nodes, materials }) => {
    return (
        <>
            <mesh geometry={nodes.keyboard_buttons.geometry} material={materials.keyboard_buttons} position={[1.534, 0.82, 2.093]} rotation={[Math.PI, 0, Math.PI]} />
            <mesh geometry={nodes.keyboard_base.geometry} material={materials.keyboard_base} position={[1.707, 0.814, 2.151]} rotation={[Math.PI, 0, Math.PI]} />
        </>
    )
}

export default Keyboard