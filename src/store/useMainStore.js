import create from 'zustand'
import { createSelectorHooks } from 'auto-zustand-selectors-hook'

const useMainStoreBase = create(
  set => ({
    focusTarget: null,
    setFocusTarget: focusTarget => set({ focusTarget }),

    cameraPosition: [0,2,0],
    setCameraPosition: cameraPosition => set({ cameraPosition }),

    controlsTargetOffset: [-.01,0,0],
    setControlsTargetOffset: controlsTargetOffset => set({ controlsTargetOffset }),

    subjectData: null,
    setSubjectData: subjectData => set({ subjectData }),

    back: () => {
      set({ focusTarget: null })
      set({ cameraPosition: [0,2,0] })
      set({ controlsTargetOffset: [-.01,2,0] })
    }
  })
)

const useMainStore = createSelectorHooks(useMainStoreBase)

export default useMainStore