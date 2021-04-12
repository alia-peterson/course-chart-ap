import { createContext, useContext, useState } from 'react';
import mockData from './mock-data';

const AppContext = createContext();

export function AppWrapper({ children }) {

    const [sharedState, setSharedState] = useState(mockData)
    const value = { setSharedState, sharedState }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}