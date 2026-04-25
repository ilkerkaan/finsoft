# Implementation Plan - Footer Logo Tweaks

Resize the company logo in the footer to be smaller and change its color to white.

## Proposed Changes

### [Footer Component]

#### [MODIFY] [src/components/Footer.astro](file:///b:/DEV/finsoft/src/components/Footer.astro)
- Update the logo `<img>` tag:
    - Current height: `h-24 md:h-28 lg:h-36`
    - New height: `h-14 md:h-18 lg:h-22`
    - Add color filter: `brightness-0 invert` (Tailwind)

## Verification Plan

- Capture screenshot of the footer.
- Compare with header logo to ensure only footer is changed.
