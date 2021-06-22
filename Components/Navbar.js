import { Switch, Flex, Spacer } from "@chakra-ui/react"

const Navbar = ({ toggleTheme, currentTheme }) => {
    return (
        <div className="navbar" style={{backgroundColor: currentTheme.secondary}}>
            <Flex>
                <h2>Asavari Ambavane</h2>
                <Spacer />
                <Flex>
                    <div style={{padding: '0 1rem'}}>
                        <h2>Home</h2>
                    </div>
                    <div style={{padding: '0 1rem'}}>
                        <h2>About</h2>
                    </div>
                    <div style={{padding: '0 1rem'}}>
                        <h2>Work</h2>
                    </div>
                    <div style={{padding: '0 1rem'}}>
                        <h2>Contact</h2>
                    </div>
                </Flex>
                <Spacer />
                <Switch id="dark-mode" colorScheme="purple" size="lg" onChange={() => toggleTheme()} />
            </Flex>
        </div>
    )
}

export default Navbar
