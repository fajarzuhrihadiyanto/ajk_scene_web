import { Html } from "@react-three/drei"
import useMainStore from "../store/useMainStore"
import React from "react"
import { FOCUS_SUBJECT, FOCUS_SUBJECT_DETAIL } from "../constants"

import styles from './styles/SubjectDetailPages.module.css'
import scrollbarStyles from './styles/Scrollbar.module.css'

const SubjectDetailPages = ({ data, ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const subjectData = useMainStore.useSubjectData()

    // setting ref for the screen
    const screenRef = React.useRef()
    const divRef = React.useRef()

    const onClick = () => {
        setFocusTarget(FOCUS_SUBJECT)
        
        // NOT NULLIFYING THE SUBJECT DATA HERE
        // INSTEAD, IT IS NULLIFIED IN THE MAIN BACK BUTTON
        // setSubjectData(null)
    }

    React.useEffect(() => {
        if (screenRef.current && divRef.current) {
            if (focusTarget === FOCUS_SUBJECT_DETAIL) {
                setTimeout(() => {
                    screenRef.current.scale.set(...props.scale)
                }, 1000)
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)

                    // Scroll back to top after the screen is hidden
                    divRef.current.scrollTo(0,0)
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
                    opacity: Number(focusTarget === FOCUS_SUBJECT_DETAIL)
                }}>
                    <div className={`${styles.container} ${scrollbarStyles.custom_scrollbar}`} ref={divRef}>
                        
                        <h1 className={styles.title}>{subjectData?.name}</h1>
                        <p className={styles.description}>Mata kuliah {subjectData?.is_compulsory ? 'wajib' : 'pilihan'}</p>
                        <div>
                            <h3 className={styles.subtitle}>Deskripsi Mata kuliah</h3>
                            <p className={styles.description}>{subjectData?.description}</p>
                        </div>
                        <div>
                            <h3 className={styles.subtitle}>Capaian Pembelajaran Mata kuliah</h3>
                            <ul className={styles.list}>
                                {subjectData?.objective.map((item, index) => (
                                    <li key={index} className={styles.list_item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <button className={styles.button} onClick={onClick}>Back</button>

                    </div>
            </Html>
        </group>
    )
}

export default SubjectDetailPages