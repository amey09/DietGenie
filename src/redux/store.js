import { configureStore } from '@reduxjs/toolkit'
import dietPlanReducer from './slices/dietPlanSlice'

export const store = configureStore({
    reducer: {
        dietPlanStore: dietPlanReducer
    }
})