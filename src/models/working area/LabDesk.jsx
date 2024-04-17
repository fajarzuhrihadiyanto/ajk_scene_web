const LabDesk = ({ nodes, materials }) => {
    return (
        <>
            <mesh geometry={nodes.lab_desk_bottom.geometry} material={materials['lab desk_bottom']} position={[1.697, 0.8, 2.322]} rotation={[0, Math.PI / 2, 0]} />
            <mesh geometry={nodes.lab_desk_top.geometry} material={materials['lab desk_top']} position={[1.697, 0.8, 2.322]} rotation={[0, Math.PI / 2, 0]} />
        </>
    )
}

export default LabDesk