import { createContext, useState } from "react";

export const ProgressContext = createContext()

export function ProgressProvider({ children }) {
    const [progress, setProgress] = useState(0);
    const [total, setTotal] = useState(0);
    const [percentage, setPercentage] = useState(0);
    
    return (
        <ProgressContext.Provider value={{ progress, setProgress, setTotal }}>
            {children}
        </ProgressContext.Provider>
    )
}

export default ProgressContext