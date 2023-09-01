import { createSlice } from "@reduxjs/toolkit";
import { dietPlanSchema } from "../../Schemas/dietSchema";

const initialState = {
    dietPlan: dietPlanSchema
}

export const dietPlanSlice = createSlice({
    name: 'dietPlanStore',
    initialState,
    reducers: {
        setDietPlan: (state, action) => {
            return action.payload;
        }
    }
})

export const { setDietPlan } = dietPlanSlice.actions
export default dietPlanSlice.reducer;