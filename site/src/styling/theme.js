import theme from 'styled-theming'

export const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222',
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
  dark: '#eee'
});

export const buttonTextColor = theme('mode', {
  light: '#eee',
  dark: '#222'
});