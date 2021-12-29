import { Heading, Flex, Grid, Text } from '@chakra-ui/react'
import { 
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiPython,
    SiTypescript,
    SiPostgresql,
    SiPrisma,
    SiChakraui
} from 'react-icons/si'

type SkillProps = {
    skill: string,
    icon: JSX.Element
};

function Skill({ skill, icon }: SkillProps) {
    return (
        <Flex direction="column" align="center" maxWidth="12em" m={3}> 
            <Text>{skill}</Text>
            { icon }
        </Flex>
    );
}

export default function Skills() {
    return (
        <>
            <Heading size="2xl" align="center" mt={5}>
                Skills
            </Heading>

            <Grid 
                templateColumns="1fr 1fr 1fr"
                templateRows="1fr 1fr 1fr"
                placeItems="center"
                mt="2em"
            >
                <Skill skill="HTML" icon={<SiHtml5 color="#ff3c00" size="2xl" />} />
                <Skill skill="CSS" icon={<SiCss3 color="#00aeff" size="2xl" />} />
                <Skill skill="Javascript" icon={<SiJavascript color="#fff700" size="xl" />} />
                <Skill skill="TypeScript" icon={<SiTypescript color="#1073eb" size="xl" />} />
                <Skill skill="React" icon={<SiReact color="#0ee0eb" size="xl" />} />
                <Skill skill="Python" icon={<SiPython color="#0270f5" size="xl" />} />
                <Skill skill="Postgresql" icon={<SiPostgresql color="#0050b0" size="xl" />} />
                <Skill skill="Prisma" icon={<SiPrisma color="#a100e0" size="xl" />} />
                <Skill skill="Chakra UI" icon={<SiChakraui color="#02d9d2" size="xl" />} />
            </Grid>
        </>
    );
}