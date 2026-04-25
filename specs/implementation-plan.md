# Implementation Plan - Update Finsoft Logos

The goal is to replace the current missing or placeholder logos with the provided PNG logos: `Finsoft_logo_buyuk.png` and `finsoft-logo-png.png`.

## User Review Required

> [!IMPORTANT]
> The current logo reference in `Header.astro` and `Footer.astro` is `/images/finsoft-logo-full.svg`, which seems to be missing. I will replace it with the PNG versions.
> I will use `finsoft-logo-png.png` for the Header (main navigation) and `Finsoft_logo_buyuk.png` for the Footer.

## Proposed Changes

### Components

#### [MODIFY] [Header.astro](file:///b:/DEV/finsoft/src/components/Header.astro)
- Change `<img src="/images/finsoft-logo-full.svg" ... />` to `<img src="/images/finsoft-logo-png.png" ... />`.

#### [MODIFY] [Footer.astro](file:///b:/DEV/finsoft/src/components/Footer.astro)
- Change `<img src="/images/finsoft-logo-full.svg" ... />` to `<img src="/images/Finsoft_logo_buyuk.png" ... />`.
- Since PNGs don't support CSS `invert` well (unless they are transparent and monochromatic), I will check if they need specific styling.

## Verification Plan

### Automated Tests
- None.

- Use the browser tool to capture a screenshot of the Header and Footer.

## Deployment Plan

1. **Local Build Verification**: Run `npm run build` to ensure the project builds correctly without any TypeScript or Astro errors.
2. **Local Preview**: Run `npm run preview` and check the site locally.
3. **Commit and Push**:
    - Stage all changes including new logo files and deleted SVG files.
    - Commit with a descriptive message: `feat: update company logos and branding`.
    - Push to the `main` branch.
