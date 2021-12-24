import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

type GithubProfile = {
    username: string,
    profilePicture: string,
    repos: number,
    bio: string,
    starred: number,
    following: number,
    location: string,
    updateProfile: (user: string) => void
}

const GithubProfileContext = createContext<GithubProfile>({
    username: 'ArthurDeveloper',
    profilePicture: 'https://github.com/ArthurDeveloper.png',
    repos: 0,
    bio: '...',
    starred: 0,
    following: 0,
    location: '...',
    updateProfile: () => {}
});

type ProviderProps = {
    children: JSX.Element | JSX.Element[]
}

export function GithubProfileProvider({ children }: ProviderProps) {
    const [username, setUsername] = useState('ArthurDeveloper');
    const [profilePicture, setProfilePicture] = useState<string>('https://github.com/ArthurDeveloper.png');
    const [repos, setRepos] = useState<number>(0);
    const [bio, setBio] = useState<string>('');
    const [location, setLocation] = useState<string>('');
    const [starred, setStarred] = useState<number>(0);
    const [following, setFollowing] = useState<number>(0);
    
    function updateProfile(user: string) {
        setUsername(user);
        setProfilePicture(`https://github.com/${user}.png`);

        axios.get(`https://api.github.com/users/${user}`)
            .then(({ data }) => {
                setBio(data.bio);
                setLocation(data.location);
                setFollowing(data.following);
            });

        axios.get(`https://api.github.com/users/${user}/repos`)
            .then(({ data }) => {
                setRepos(data.length);
            });

        axios.get(`https://api.github.com/users/${user}/starred`)
            .then(({ data }) => {
                setStarred(data.length);
            });
    }

    useEffect(() => {
        updateProfile('ArthurDeveloper');
    }, []);

    useEffect(() => {
        document.querySelector('link[rel="icon"]')?.setAttribute('href', profilePicture);
    }, [profilePicture]);

    return (
        <GithubProfileContext.Provider value={{
            username,
            profilePicture,
            repos,
            bio,
            starred,
            following,
            location,
            updateProfile
        }}>
            {children}
        </GithubProfileContext.Provider>
    );
}

export default GithubProfileContext;