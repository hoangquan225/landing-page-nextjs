export const breakpoints = {
    // xs: 370,
    // sm: 576,
    // md: 768,
    // lg: 992,
    // xl: 1200,
    // xxl: 1400,
    xs: 575.98,
    sm: 767.98,
    md: 991.98,
    lg: 1199.98,
    xl: 1200,
} as const

export const mediaQueries = {
    xs: `@media screen and (max-width: ${breakpoints.xs}px)`,
    sm: `@media screen and (min-width: ${breakpoints.xs}px) and (max-width: ${breakpoints.sm}px)`,
    md: `@media screen and (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px)`,
    lg: `@media screen and (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg}px)`,
    xl: `@media screen and (min-width: ${breakpoints.xl}px)`,
}

export type Breakpoint = keyof typeof breakpoints

export const breakpointNames = Object.keys(breakpoints) as Breakpoint[]
