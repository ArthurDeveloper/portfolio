import { Box, Flex } from '@chakra-ui/react';
import { GithubProfileProvider } from './components/GithubProfileContext';
import GithubProfile from './components/GithubProfile';
import Canvas from './components/canvas/Canvas';
import styled from '@emotion/styled';

const Page = styled(Box)`
    width: 100vw;
    height: 100vh;
    border-radius: 0px;
    animation: opening 2s ease;
    overflow-x: hidden;
    overflow-y: auto;

    @keyframes opening {
        0% { width: 0vw; height: 2vh; border-radius: 20px; overflow-y: hidden; }
        80% { width: 20vw; height: 2vh; border-radius: 20px; overflow-y: hidden; }
        100% { height: 100vh;  }
    }
`;

export default function App() {
    return (
        <Flex justify="center" align="center" w="100vw" h="100vh">
            <Page bgColor="#1b1c1c">
                <GithubProfileProvider>
                    <GithubProfile />
                </GithubProfileProvider>

                <Canvas />
            </Page>
        </Flex>
    );    
}