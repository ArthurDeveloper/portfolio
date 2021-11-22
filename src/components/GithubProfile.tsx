import useGithubProfile from '../hooks/useGithubProfile';
import { Heading, Image } from '@chakra-ui/react';

export default function GithubProfile() {
    
    const { username, profilePicture, repos } = useGithubProfile();
    
    return (
        <div>
            <Heading size="2xl">Github Profile</Heading>

            <h1>{ username }</h1>
            <Image src={profilePicture} borderRadius='50%' />
            <h3>{ repos } repositories</h3>

        </div>
    );
}