import React from "react";
import useDataStore from "../store/dataStore";

const DataDownloader = () => {

    const setLabDescription = useDataStore.useSetLabDescription()
    const setFacilities = useDataStore.useSetFacilities()
    const setProfessors = useDataStore.useSetProfessors()
    const setBooks = useDataStore.useSetBooks()
    const setCommunityServices = useDataStore.useSetCommunityServices()
    const setResearch = useDataStore.useSetResearch()
    const setSubjects = useDataStore.useSetSubjects()

    React.useEffect(() => {
        const fetchData = async () => {
            try {
                const responses = await Promise.all([
                    fetch(`${process.env.REACT_APP_API_URL}/lab/${process.env.REACT_APP_LAB_ID}`),
                    fetch(`${process.env.REACT_APP_API_URL}/facilities?lab_id=${process.env.REACT_APP_LAB_ID}`),
                    fetch(`${process.env.REACT_APP_API_URL}/professors?lab_id=${process.env.REACT_APP_LAB_ID}`),
                    fetch(`${process.env.REACT_APP_API_URL}/books?lab_id=${process.env.REACT_APP_LAB_ID}`),
                    fetch(`${process.env.REACT_APP_API_URL}/community_services?lab_id=${process.env.REACT_APP_LAB_ID}`),
                    fetch(`${process.env.REACT_APP_API_URL}/research?lab_id=${process.env.REACT_APP_LAB_ID}`),
                    fetch(`${process.env.REACT_APP_API_URL}/subjects?lab_id=${process.env.REACT_APP_LAB_ID}`)
                ])

                const data = await Promise.all(responses.map(response => response.json()))

                setLabDescription(data[0].data.lab.general_information)
                setFacilities(data[1].data.facilities)
                setProfessors(data[2].data.professors)
                setBooks(data[3].data.books)
                setCommunityServices(data[4].data.community_services)
                setResearch(data[5].data.research)
                setSubjects(data[6].data.subjects)
            } catch (error) {
                console.log(error)
            }
        }

        fetchData()

    }, [])

    return <></>
}

export default DataDownloader;