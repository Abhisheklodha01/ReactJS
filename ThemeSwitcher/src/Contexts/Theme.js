import { createContext, useContext } from "react";

// another way to create/use context 

export const ThemeContext = createContext({
    // initial value/properties for context
    
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}