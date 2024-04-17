import React from "react"
import gsap from "gsap"
import { Text } from "@react-three/drei"

const Loader = () => {

    const ref = React.useRef()

    React.useEffect(() => {
        if (ref.current) {
            gsap.to(ref.current.rotation, {x: Math.PI*2, y: Math.PI*2, duration: 4, repeat: -1, ease: "none"})
        }
    }, [])

    return (
        <>
            <directionalLight intensity={1} position={[0, 5, 0]} />
            <ambientLight intensity={1} />
            <mesh ref={ref} position={[0, 0, -.5]}>
                <boxGeometry args={[.5, .5, .5]} />
                <meshStandardMaterial color="lightblue" />
            </mesh>
            <Text color={'black'} position={[0, 0, .5]} rotation={[-Math.PI/2,0,0]} fontSize={.25}>
                Loading the models...
            </Text>
        </>
    )
}

export default Loader