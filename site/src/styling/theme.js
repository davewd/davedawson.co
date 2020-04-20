import theme from 'styled-theming'

export const boxBackgroundColor = theme('mode', {
  light: '#ffffff',
  dark: '#222',
  yellow: '#fbff00',
  blue: '#0077ff'
});

export const boxShadowColor = theme('mode', {
  light: '#777',
  dark: '#222',
  yellow: '#fbff00',
  blue: '#0077ff'
});

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#000000',
  yellow: '#fbff00',
  blue: '#0077ff'
});

export const textColor = theme('mode', {
  light: '#000',
  dark: '#fff',
  yellow: '#0077ff',
  blue: '#fbff00'
});

export const buttonBackgroundColor = theme('mode', {
  light: '#222',
  dark: '#eee',
  yellow: '#0077ff',
  blue: '#fbff00'
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222',
  yellow: '#0077ff',
  blue: '#fbff00'
});

export const linkHoverColor = theme('mode', {
  light: '#0077ff',
  dark: '#fbff00',
  yellow: '#777',
  blue: '#fff'
});