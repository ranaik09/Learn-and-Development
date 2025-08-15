import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [currentTheme, setCurrentTheme] = useState(theme);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
            <StyledThemeProvider theme={currentTheme}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);