import { useContext } from 'react';
import GithubProfileContext from '../components/GithubProfileContext';

export default function useGithubProfile() {
    const context = useContext(GithubProfileContext);
    
    if (context === undefined) {
        throw new Error(
            'useGithubProfile must be used within a GithubProfileProvider'
        );
    }

    return context;
}