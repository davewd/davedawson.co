import theme from 'styled-theming'
import blue_theme from "./themes/blue"
import dark_theme from "./themes/dark"
import light_theme from "./themes/light"
import yellow_theme from "./themes/yellow"

export default theme("mode", {
    blue: blue_theme,
    dark: dark_theme,
    light: light_theme,
    yellow: yellow_theme
})