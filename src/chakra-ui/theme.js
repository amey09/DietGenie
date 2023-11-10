import { extendTheme } from '@chakra-ui/react'
import '@fontsource/poppins'
import '@fontsource/nunito-sans'
import '@fontsource/arimo'
import '@fontsource/inter'

const theme = extendTheme({
    fonts: {
        nav_item: `Poppins`,
        heading: 'Arial Black',
        paragraph: 'Inter',
        hero: 'Nunito Sans',
    },
})

export default theme