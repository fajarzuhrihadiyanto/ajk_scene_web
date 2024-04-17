const LabChair = ({ nodes, materials }) => {
    return (
        <>
            <mesh geometry={nodes.lab_chair_structure.geometry} material={materials['lab chair_structure']} position={[1.659, 0, 1.458]} rotation={[0, -Math.PI / 2, 0]} />
            <mesh geometry={nodes.lab_chair_seat_pillow.geometry} material={materials['lab chair_pillow']} position={[1.659, 0.403, 1.661]} rotation={[0, -Math.PI / 2, 0]}/>
            <mesh geometry={nodes.lab_chair_seat_base.geometry} material={materials['lab chair_base']} position={[1.659, 0.399, 1.661]} rotation={[0, -Math.PI / 2, 0]}/>
            <mesh geometry={nodes.lab_chair_backrest_pillow.geometry} material={materials['lab chair_pillow']} position={[1.659, 0.65, 1.453]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}/>
            <mesh geometry={nodes.lab_chair_backrest_base.geometry} material={materials['lab chair_base']} position={[1.659, 0.65, 1.449]} rotation={[Math.PI / 2, -Math.PI / 2, 0]}/>
        </>
    )
}

export default LabChair