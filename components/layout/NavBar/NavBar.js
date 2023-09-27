import { AppBar, Toolbar, Container, Box, Button, Typography } from "@mui/material"
import Link from "next/link"

const NavBar = () => {
    return (
        <Box sx={{ maxWidth: '1620px', margin: '0 auto' }}>

            <Container sx={{ maxWidth: '100%' }}>
                <Box>
                    <AppBar>
                        <Toolbar>
                            <Link href='asd' >
                                <Typography sx={{
                                    '&:hover': {
                                        color: 'rgba(0,0,0,.4)',
                                        opacity: [0.9, 0.8, 0.7],
                                    },
                                }}>
                                    asd
                                </Typography>
                            </Link>
                            <Box display={'flex'}
                                gap={2}
                                sx={{
                                    marginLeft: 'auto'
                                }}>
                                <Link href='asd' >
                                    <Typography>
                                        asd
                                    </Typography>
                                </Link>
                                <Link href='asd' >
                                    <Typography>
                                        asd
                                    </Typography>
                                </Link>
                            </Box>
                        </Toolbar>
                    </AppBar>
                </Box>
            </Container>
        </Box>
    )
}

export default NavBar