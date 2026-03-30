/**
 * Liquidity logo SVG generators
 *
 * The Liquidity mark is a stylized "L" combined with a liquidity wave,
 * using the brand's primary blue (#3B82F6) with a clean, modern design.
 */

export type LogoVariant = 'color' | 'mono' | 'white';
export type LogoFormat = 'svg' | 'dataUrl' | 'base64';

export interface LogoOptions {
  variant?: LogoVariant;
  format?: LogoFormat;
  size?: number;
}

/**
 * Liquidity color logo — full brand blue
 */
export function getColorSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <defs>
    <linearGradient id="lqdtyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#3B82F6"/>
      <stop offset="100%" style="stop-color:#1D4ED8"/>
    </linearGradient>
  </defs>
  <rect width="1024" height="1024" rx="200" fill="url(#lqdtyGrad)"/>
  <path d="M 220 220 L 220 720 L 680 720 L 680 620 L 330 620 L 330 220 Z" fill="white"/>
  <path d="M 400 500 Q 500 420 600 500 Q 700 580 800 500" stroke="rgba(255,255,255,0.4)" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M 400 560 Q 500 480 600 560 Q 700 640 800 560" stroke="rgba(255,255,255,0.25)" stroke-width="8" fill="none" stroke-linecap="round"/>
</svg>`;
}

/**
 * Liquidity mono logo — solid black
 */
export function getMonoSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <rect width="1024" height="1024" rx="200" fill="#111827"/>
  <path d="M 220 220 L 220 720 L 680 720 L 680 620 L 330 620 L 330 220 Z" fill="white"/>
  <path d="M 400 500 Q 500 420 600 500 Q 700 580 800 500" stroke="rgba(255,255,255,0.35)" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M 400 560 Q 500 480 600 560 Q 700 640 800 560" stroke="rgba(255,255,255,0.2)" stroke-width="8" fill="none" stroke-linecap="round"/>
</svg>`;
}

/**
 * Liquidity white logo — transparent bg, white mark
 */
export function getWhiteSVG(): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1024" height="1024" viewBox="0 0 1024 1024">
  <path d="M 220 220 L 220 720 L 680 720 L 680 620 L 330 620 L 330 220 Z" fill="white"/>
  <path d="M 400 500 Q 500 420 600 500 Q 700 580 800 500" stroke="rgba(255,255,255,0.5)" stroke-width="12" fill="none" stroke-linecap="round"/>
  <path d="M 400 560 Q 500 480 600 560 Q 700 640 800 560" stroke="rgba(255,255,255,0.3)" stroke-width="8" fill="none" stroke-linecap="round"/>
</svg>`;
}

/**
 * Liquidity wordmark SVG — horizontal "LIQUIDITY" text mark
 */
export function getWordmarkSVG(color = '#111827'): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="80" viewBox="0 0 400 80">
  <text x="10" y="58" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
    font-size="52" font-weight="700" letter-spacing="-1" fill="${color}">LIQUIDITY</text>
</svg>`;
}

/**
 * Get logo SVG by variant
 */
export function getLogoSVG(variant: LogoVariant = 'color'): string {
  switch (variant) {
    case 'mono': return getMonoSVG();
    case 'white': return getWhiteSVG();
    default: return getColorSVG();
  }
}

/**
 * Get logo as data URL
 */
export function getLogoDataUrl(variant: LogoVariant = 'color'): string {
  return `data:image/svg+xml,${encodeURIComponent(getLogoSVG(variant))}`;
}

/**
 * Get logo as base64
 */
export function getLogoBase64(variant: LogoVariant = 'color'): string {
  return Buffer.from(getLogoSVG(variant)).toString('base64');
}
