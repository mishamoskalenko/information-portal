import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);
    let newTheme: Theme;
    switch (theme) {
    case Theme.LIGHT:
        newTheme = Theme.DARK;
        break;
    case Theme.DARK:
        newTheme = Theme.ORANGE;
        break;
    case Theme.ORANGE:
        newTheme = Theme.LIGHT;
        break;
    default:
        newTheme = Theme.LIGHT;
    }
    const toggleTheme = () => {
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    document.body.className = newTheme;
    return { theme: theme || Theme.LIGHT, toggleTheme };
}
