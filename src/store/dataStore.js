import create from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'

const useDataStoreBase = create(
  set => ({
    labDescription: "",
    setLabDescription: labDescription => set({ labDescription }),

    facilities: [],
    setFacilities: facilities => set({ facilities }),

    professors: [],
    setProfessors: professors => set({ professors }),

    books: [],
    setBooks: books => set({ books }),

    communityServices: [],
    setCommunityServices: communityServices => set({ communityServices }),

    research: [],
    setResearch: research => set({ research }),

    subjects: [],
    setSubjects: subjects => set({ subjects }),
  })
)

const useDataStore = createSelectorHooks(useDataStoreBase)

export default useDataStore