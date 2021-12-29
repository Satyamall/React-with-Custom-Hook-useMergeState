import { useState } from "react"


export const useMergeState=(initState)=>{
    const [state,setState]=useState(initState)

    const mergeState = newState => {
        if (typeof newState === 'function') newState = newState(state);
        setState({ ...state, ...newState });
      };
    // setState({...state,...initState});

    return [state,mergeState];
}