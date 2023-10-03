import { Box, Typography } from "@mui/material"
import Link from "next/link"

const FooterComponent = () => {
    return (
        <Box sx={{ maxWidth: '1680px', margin: '0 auto' }}>
            <Box sx={{ width: '100%', height: '525px', }}>
                <Link href="/"><Typography variant="h3">Contact Information:</Typography></Link>
                <Link href="/"><Typography variant="h3">Back to Top Button:</Typography></Link>
                <Link href="/"><Typography variant="h3">Copyright Information:</Typography></Link>
                <Link href="/"><Typography variant="h3">Newsletter Signup:</Typography></Link>
                <Link href="/"><Typography variant="h3">Social Media Links:</Typography></Link>
                <Link href="/"><Typography variant="h3">Navigation Links:</Typography></Link>
                <Link href="/"><Typography variant="h3"> Terms of Service:</Typography></Link>
            </Box>
        </Box>
    )
}
export default FooterComponent