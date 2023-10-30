import { Manrope, Unbounded } from 'next/font/google';

export const unbounded = Unbounded({
  subsets: ['cyrillic', 'latin'],
  weight: ['900', '700', '400'],
  variable: '--font-unbounded',
});

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  variable: '--font-manrope',
});
