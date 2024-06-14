import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/Facility.module.css'
import useMainStore from "../store/useMainStore"
import { FOCUS_FACILITIES } from "../constants"
import useDataStore from "../store/dataStore"

const FacilitiesPage = ({ ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const facilities = useDataStore.useFacilities()

    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_FACILITIES) {
                screenRef.current.scale.set(...props.scale)
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [focusTarget])


    return (
        <group scale={[0, 0, 0]} {...props} ref={screenRef}>
            <Html
                transform occlude
                className={styles.html}
                style={{
                    transition: 'opacity 0.3s',
                    transitionDelay: '1s',
                    opacity: Number(focusTarget === FOCUS_FACILITIES)
                }}
                >
                <div className={styles.container}>
                    <h1 className={styles.title}>Fasilitas</h1>
                    <ul className={styles.list}>
                        {facilities.map((facility, index) => <li key={index}>{facility.name}</li>)}
                    </ul>
                </div>
            </Html>
        </group>
    )
}

export default FacilitiesPage