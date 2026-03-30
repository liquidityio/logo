/**
 * @liquidityio/logo — Official Liquidity logo package
 *
 * Provides the Liquidity mark in SVG, data URL, and base64 formats.
 * React components available via @liquidityio/logo/react
 *
 * @example
 * ```ts
 * import { getColorSVG, getLogoDataUrl } from '@liquidityio/logo';
 * import { LiquidityLogo, LiquidityFavicon } from '@liquidityio/logo/react';
 * ```
 */

export {
  getColorSVG,
  getMonoSVG,
  getWhiteSVG,
  getWordmarkSVG,
  getLogoSVG,
  getLogoDataUrl,
  getLogoBase64,
} from './logos';

export type { LogoVariant, LogoFormat, LogoOptions } from './logos';
