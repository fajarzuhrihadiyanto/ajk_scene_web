import { Html } from "@react-three/drei"
import React from "react"

import styles from './styles/Picture.module.css'
import scrollbarStyles from './styles/Scrollbar.module.css'

const Picture = ({ lecturer, shown, ...props }) => {


    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (shown) {
                setTimeout(() => {
                    screenRef.current.scale.set(...props.scale)
                }, 0)
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [shown])

    return (
        <group {...props} scale={[0,0,0]} ref={screenRef}>
            <Html
                className={styles.html}
                transform
                style={{
                    transition: 'opacity .2s',
                    opacity: Number(shown)
                }}>
                    <div className={`${styles.container} ${scrollbarStyles.custom_scrollbar}`}>
                        <h1 className={styles.title}>{lecturer.fullname}</h1>
                        <p>{lecturer.is_head_lab && 'Kepala Laboratorium'}</p>
                        <img className={styles.image} src={lecturer.photo_url} alt={lecturer.fullname}/>
                        <p>NIDN : {lecturer.NIDN}</p>
                        <p>Email : {lecturer.email}</p>
                        <p>Pendidikan terakhir : {lecturer.latest_education}</p>
                        <p>Jabatan terakhir</p>
                        <ul>
                            {lecturer.position.map((position, i) => (
                                <li key={i}>{position.name} {position.from_year && `${position.from_year} - ${position.to_year || 'Sekarang'}`}</li>
                            ))}

                            {lecturer.position.length === 0 && '-'}
                        </ul>
                        <div>
                            <h3>Publikasi</h3>
                            <div className={styles.publication}>
                                {lecturer?.publication.scopus_id && <a href={`https://www.scopus.com/authid/detail.uri?authorId=${lecturer?.publication.scopus_id}`} target="_blank" rel="noreferrer">Scopus</a>}
                                {lecturer?.publication.google_scholar_id && <a href={`https://scholar.google.co.id/citations?user=${lecturer?.publication.google_scholar_id}&hl=id`} target="_blank" rel="noreferrer">Google Scholar</a>}
                                {lecturer?.publication.sinta_id && <a href={`https://sinta.kemdikbud.go.id/authors/profile/${lecturer?.publication.sinta_id}`} target="_blank" rel="noreferrer">Sinta</a>}
                            </div>
                        </div>

                    </div>
            </Html>
        </group>
    )
}

export default Picture