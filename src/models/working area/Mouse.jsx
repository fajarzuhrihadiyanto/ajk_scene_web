const Mouse = ({ nodes, materials }) => {
    return (
        <>
            <mesh geometry={nodes.mouse_body.geometry} material={materials.mouse_body} position={[1.354, 0.815, 2.137]} rotation={[0, Math.PI / 2, 0]} />
            <mesh geometry={nodes.mouse_scroll_button.geometry} material={materials['mouse_scroll button']} position={[1.354, 0.812, 2.16]} rotation={[0, Math.PI / 2, 0]} />
        </>
    )
}

export default Mouse