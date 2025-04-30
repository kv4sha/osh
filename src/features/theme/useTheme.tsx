import { createContext, useCallback, useContext, useMemo } from 'react';
import { useLocalStorage, useMedia } from 'react-use';

type DarkTheme = 'off' | 'on' | 'system';

type Props = {
  children: React.ReactNode;
};

type ThemeContext = {
  darkTheme: DarkTheme;
  isDarkModeOn: boolean;
  darkModeOff: () => void;
  darkModeOn: () => void;
  darkModeSystem: () => void;
};

const Theme = createContext<ThemeContext>({
  darkTheme: 'off',
  isDarkModeOn: false,
  darkModeOff: () => {},
  darkModeOn: () => {},
  darkModeSystem: () => {},
});

export function ThemeProvider({ children }: Props) {
  const [darkTheme = 'system', setDarkTheme] = useLocalStorage<DarkTheme>(
    'chat-dark-mode',
    'off',
  );

  const isSystemDarkModeTurnOn = useMedia('(prefers-color-scheme: dark)');

  const darkModeOff = useCallback(() => {
    setDarkTheme('off');
  }, [setDarkTheme]);

  const darkModeOn = useCallback(() => {
    setDarkTheme('on');
  }, [setDarkTheme]);

  const darkModeSystem = useCallback(() => {
    setDarkTheme('system');
  }, [setDarkTheme]);

  const value = useMemo(() => {
    const isDarkModeOn =
      darkTheme === 'system' ? isSystemDarkModeTurnOn : darkTheme === 'on';

    return { isDarkModeOn, darkModeOff, darkModeOn, darkModeSystem, darkTheme };
  }, [darkModeOff, darkModeOn, darkModeSystem, darkTheme, isSystemDarkModeTurnOn]);

  return <Theme.Provider value={value}>{children}</Theme.Provider>;
}

export const useTheme = () => useContext<ThemeContext>(Theme);
