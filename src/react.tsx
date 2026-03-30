import React from 'react';
import { getColorSVG, getMonoSVG, getWhiteSVG, getWordmarkSVG } from './logos';
import type { LogoVariant } from './logos';

export interface LiquidityLogoProps {
  variant?: LogoVariant;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * React component for the Liquidity icon mark
 *
 * @example
 * ```tsx
 * import { LiquidityLogo } from '@liquidityio/logo/react';
 *
 * <LiquidityLogo size={64} />
 * <LiquidityLogo variant="mono" size={32} />
 * <LiquidityLogo variant="white" className="w-16 h-16" />
 * ```
 */
export const LiquidityLogo: React.FC<LiquidityLogoProps> = ({
  variant = 'color',
  size = 64,
  className,
  style,
}) => {
  let svg = '';
  switch (variant) {
    case 'mono':  svg = getMonoSVG(); break;
    case 'white': svg = getWhiteSVG(); break;
    default:      svg = getColorSVG();
  }

  const sizeStyle = typeof size === 'number'
    ? { width: size, height: size }
    : { width: size, height: size };

  return (
    <div
      className={className}
      style={{ display: 'inline-flex', ...sizeStyle, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

export interface LiquidityWordmarkProps {
  color?: string;
  height?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * React component for the Liquidity wordmark (text-only)
 */
export const LiquidityWordmark: React.FC<LiquidityWordmarkProps> = ({
  color = '#111827',
  height = 40,
  className,
  style,
}) => {
  const svg = getWordmarkSVG(color);
  const h = typeof height === 'number' ? height : height;
  return (
    <div
      className={className}
      style={{ display: 'inline-flex', height: h, ...style }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
};

/**
 * Favicon link tags component — drop in <head>
 *
 * @example
 * ```tsx
 * import { LiquidityFavicon } from '@liquidityio/logo/react';
 * // In <head>:
 * <LiquidityFavicon />
 * ```
 */
export const LiquidityFavicon: React.FC = () => {
  const svg = getColorSVG();
  const dataUrl = `data:image/svg+xml,${encodeURIComponent(svg)}`;
  return (
    <>
      <link rel="icon" type="image/svg+xml" href={dataUrl} />
      <link rel="apple-touch-icon" href={dataUrl} />
    </>
  );
};
