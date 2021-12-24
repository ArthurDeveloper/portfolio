import { Stack, Text, Box } from '@chakra-ui/react';
import useGithubProfile from '../hooks/useGithubProfile';

type GithubProfileInfoProps = {
    info: 'repos' | 'starred' | 'following';
}

export default function GithubProfileInfo({ info }: GithubProfileInfoProps) {
    const profile = useGithubProfile();
    
    function capitalize(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <Stack mb={15}>
            <Text>{capitalize(info)}</Text>

            <Box
                bgColor="gray.300" 
                w={51}
                p={3} 
                rounded={5}
            >
                { profile[info] }
            </Box>
        </Stack>
    );
}