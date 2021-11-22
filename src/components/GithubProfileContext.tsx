import { createContext } from 'react';

type GithubProfile = {
    username: string,
    profilePicture: string,
    repos: number
}

const GithubProfileContext = createContext<GithubProfile>({
    username: 'ArthurDeveloper',
    profilePicture: 'https://github.com/ArthurDeveloper.png',
    repos: 0
});

type ProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export function GithubProfileProvider({ children }: ProviderProps) {
    return (
        <GithubProfileContext.Provider value={{
            username: 'ArthurDeveloper',
            profilePicture: 'https://api.github.com/ArthurDeveloper.png',
            repos: 0
        }}>
            {children}
        </GithubProfileContext.Provider>
    );
}

export default GithubProfileContext;