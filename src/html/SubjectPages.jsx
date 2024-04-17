import { Html } from "@react-three/drei"
import useMainStore from "../store/useMainStore"
import React from "react"
import { FOCUS_SUBJECT, FOCUS_SUBJECT_DETAIL } from "../constants"

import styles from './styles/SubjectPages.module.css'
import { SUBJECT } from "../data/subject"

const SubjectPages = ({ ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const subjectData = useMainStore.useSubjectData()
    const setSubjectData = useMainStore.useSetSubjectData()

    // setting ref for the screen
    const screenRef = React.useRef()

    const onClick = (id) => {
        setFocusTarget(FOCUS_SUBJECT_DETAIL)
        setSubjectData(SUBJECT[id])
    }

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_SUBJECT) {
                setTimeout(() => {
                    screenRef.current.scale.set(...props.scale)
                }, 1000 + 1000 * Number(subjectData === null))
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
                    opacity: Number(focusTarget === FOCUS_SUBJECT)
                }}>
                    <div className={styles.container}>
                        
                        <h1 className={styles.title}>Daftar Mata Kuliah</h1>
                        <div className={styles.listContainer}>
                            {SUBJECT.map((subject, index) => (
                                <button
                                    className={styles.button}
                                    key={index}
                                    onClick={() => {onClick(index)}}
                                    >
                                        {subject.title}
                                </button>
                            ))}
                        </div>
                    </div>
            </Html>
        </group>
    )
}

export default SubjectPages