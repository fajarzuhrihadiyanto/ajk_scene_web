import Server from "./Server"
import ServerPc from "./ServerPc"

const ServerArea = ({ nodes, materials }) => {
    return (
        <>
            <Server nodes={nodes} materials={materials} />
            <Server nodes={nodes} materials={materials} position={[0,0,1.1]} />
            
            <Server nodes={nodes} materials={materials} position={[0,0,-2.2]} />
            <Server nodes={nodes} materials={materials} position={[0,0,-3.3]} />
            <ServerPc nodes={nodes} materials={materials} />
        </>
    )
}

export default ServerArea