import { Html } from "@react-three/drei"
import useMainStore from "../store/useMainStore"
import React from "react"
import { FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT } from "../constants"

import styles from './styles/ResearchPages.module.css'
import scrollbarStyles from './styles/Scrollbar.module.css'
import { COMMUNITY_SERVICE } from "../data/communityService"

const CommunityServicePages = ({ ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()

    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_COMMUNITY_SERVICE) {
                setTimeout(() => {
                    screenRef.current.scale.set(...props.scale)
                }, 2000)
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
                className={styles.html}
                transform
                style={{
                    opacity: Number(focusTarget === FOCUS_COMMUNITY_SERVICE)
                }}>
                    <div className={`${styles.container} ${scrollbarStyles.custom_scrollbar}`}>
                        
                        <h1 className={styles.title}>Daftar Pengabdian Masyarakat</h1>
                        <ul className={styles.list}>
                            {COMMUNITY_SERVICE.map((data, index) => (
                                <li key={index} className={styles.list_item}>{data.year} - {data.title}</li>
                            ))}
                        </ul>
                    </div>
            </Html>
        </group>
    )
}

export default CommunityServicePages