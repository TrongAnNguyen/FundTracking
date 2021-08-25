import { useShallowEqualSelector } from 'state/hooks'

export function useIsDarkMode(): boolean {
  const { userDarkMode, matchesDarkMode } = useShallowEqualSelector(
    ({ user: { userDarkMode, matchesDarkMode } }) => ({
      userDarkMode,
      matchesDarkMode,
    }),
  )

  return userDarkMode === null ? matchesDarkMode : userDarkMode
}
