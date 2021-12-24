import useGithubProfile from '../hooks/useGithubProfile';
import { useState } from 'react';
import { Box, Flex, Heading, Editable, EditablePreview, EditableInput, Image, Stack, Text } from '@chakra-ui/react';
import GithubProfileInfo from './GithubProfileInfo';
import styled from '@emotion/styled';

type ProfileDataProps = {
    currentAnimation: string,
    isVisible: boolean
};

const ProfileData = styled(Box)`
    animation: ${(props: ProfileDataProps) => props.currentAnimation} 200ms ease;
    opacity: ${(props: ProfileDataProps) => props.isVisible ? 1 : 0};

    @keyframes fade-in {
        from {
            opacity: 0;
        } to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        } to {
            opacity: 0;
        }
    }
`;


export default function GithubProfile() {
    
    const { username, profilePicture, bio, location, updateProfile } = useGithubProfile();
    
    const [currentAnimation, setCurrentAnimation] = useState('fade-in');
    const [isVisible, setIsVisible] = useState(true);

    function handleHeadingChange(value: string) {
        if (value !== username) {
            setCurrentAnimation('fade-out');
            setIsVisible(false);
            
            updateProfile(value);

            setTimeout(() => {
                setCurrentAnimation('fade-in');
                setIsVisible(true);
            }, 1000);
        }
    }

    return (
        <Box mb="3em">
            <Heading
                size="xl" 
                bgGradient="linear(90deg, green, blue)"
                bgClip="text"
                textAlign="center"
            >
                <Editable defaultValue={username} onSubmit={handleHeadingChange}>
                    <EditablePreview />
                    <EditableInput
                        bgGradient="linear(90deg, green, blue)"
                        bgClip="text"
                    />
                </Editable>
            </Heading>

            <ProfileData currentAnimation={currentAnimation} isVisible={isVisible}>
                <Flex justify="center">
                    <Flex mt="2em" justify="space-between" w="70%">
                        <Stack alignSelf="flex-end" mb={20}>
                            <GithubProfileInfo info="repos" />
                            <GithubProfileInfo info="starred" />
                            <GithubProfileInfo info="following" />
                        </Stack>

                        <Stack 
                            bgColor="gray.300"
                            align="center"
                            p={5}
                            borderRadius="0.7em"
                        >
                            <Image 
                                src={profilePicture} 
                                ml="auto"
                                mb="1em"
                                w="20em"
                                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
                                borderRadius="50%"
                            />

                            <Flex>
                                <Text mr={1}>Location: </Text> 
                                <Text 
                                    bgGradient="linear(90deg, green, blue)"
                                    bgClip="text"
                                >
                                    { location ?? 'Unknown' }
                                </Text>
                            </Flex>

                            <Box
                                maxWidth="20em"
                                textAlign="center"
                                bgColor="gray.300"
                                boxShadow="0px 0px 10px rgba(0, 0, 0, 0.5)"
                                p={3}
                                borderRadius="0.7em"
                            >
                                { bio ?? '...' }
                            </Box>
                        </Stack>
                    </Flex>
                </Flex>
            </ProfileData>

        </Box>
    );
} 