import { translations, type Lang, type TranslationKey } from './translations';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'tr';
}

export function t(key: TranslationKey, lang: Lang): string {
  return translations[lang][key] ?? translations['tr'][key] ?? key;
}

const pathMap: Record<string, string> = {
  '/': '/',
  '/hizmetler': '/services',
  '/lokalizasyon': '/rollout',
  '/referanslar': '/references',
  '/hakkimizda': '/about',
  '/iletisim': '/contact',
  '/sap-refx': '/sap-refx',
  '/sap-opentext': '/sap-opentext',
  '/sap-checkup': '/sap-checkup',
  '/danismanlik': '/consulting',
  '/s4hana': '/s4hana',
  '/sap-trm': '/sap-trm',
  '/sap-cash-management': '/sap-cash-management',
};

function normalizePath(path: string): string {
  // Remove trailing slash except for root
  if (path === '/' || path === '') return '/';
  return path.endsWith('/') ? path.slice(0, -1) : path;
}

export function getLocalePath(path: string, lang: Lang): string {
  const normalized = normalizePath(path);
  if (lang === 'tr') return normalized;
  
  // Find the EN segment from our map
  const enSegment = pathMap[normalized];
  return enSegment ? `/en${enSegment === '/' ? '/' : enSegment}` : `/en${normalized}`;
}

export function getAlternateLangPath(currentPath: string, currentLang: Lang): string {
  const normalized = normalizePath(currentPath);
  
  if (currentLang === 'tr') {
    // TR → EN
    const enSegment = pathMap[normalized];
    return enSegment ? `/en${enSegment === '/' ? '/' : enSegment}` : `/en${normalized}`;
  } else {
    // EN → TR
    // Remove /en prefix
    const pathWithoutEn = normalized.startsWith('/en/') 
      ? normalized.replace('/en/', '/') 
      : normalized === '/en' ? '/' : normalized.replace('/en', '');
    
    const trNormalized = normalizePath(pathWithoutEn);
    
    // Find the TR key by searching the map values
    const trPath = Object.keys(pathMap).find(key => pathMap[key] === trNormalized);
    return trPath || trNormalized;
  }
}
