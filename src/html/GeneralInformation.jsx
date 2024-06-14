import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/GeneralInformation.module.css'
import useMainStore from "../store/useMainStore"
import { FOCUS_GENERAL_INFORMATION } from "../constants"
import useDataStore from "../store/dataStore"

const GeneralInformation = ({ ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const labDescription = useDataStore.useLabDescription()

    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_GENERAL_INFORMATION) {
                screenRef.current.scale.set(...props.scale || [1, 1, 1])
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [focusTarget])

    return (
        <group {...props} scale={[0,0,0]} ref={screenRef}>
            <Html
                transform occlude
                className={styles.html}
                style={{
                    opacity: Number(focusTarget === FOCUS_GENERAL_INFORMATION)
                }}
            >
                <div
                    className={styles.container}
                >
                    <h1 className={styles.title}>Selamat Datang di halaman Laboratorium Teknologi Jaringan dan Keamanan Siber Cerdas.</h1>
                    <p className={styles.description}>{labDescription}</p>
                </div>
            </Html>
        </group>
    )
}

export default GeneralInformation