import { Html } from "@react-three/drei"
import useMainStore from "../store/useMainStore"
import React from "react"
import { FOCUS_BOOKS } from "../constants"

import styles from './styles/BookPages.module.css'
import scrollbarStyles from './styles/Scrollbar.module.css'
import useDataStore from "../store/dataStore"

const BookPages = ({ ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const books = useDataStore.useBooks()

    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_BOOKS) {
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
                    opacity: Number(focusTarget === FOCUS_BOOKS)
                }}>
                    <div className={`${styles.container} ${scrollbarStyles.custom_scrollbar}`}>
                        
                        <h1 className={styles.title}>Daftar Buku</h1>
                        <ul className={styles.list}>
                            {books.map((book, index) => (
                                <li key={index} className={styles.list_item}>{book.release_year} - {book.title}{book.professor_fullname && `, ${book.professor_fullname}`}</li>
                            ))}
                        </ul>
                    </div>
            </Html>
        </group>
    )
}

export default BookPages