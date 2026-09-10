import { Anchor, Compass, Briefcase, Cog, TrendingUp, LucideIcon } from 'lucide-react';
import { PAGE_SECTIONS } from '../pageSections';

export interface NavItem {
  label: string;
  path: string;
  icon: LucideIcon;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Principal', path: '/', icon: Anchor },
  { label: 'Misión / Visión', path: '/#mision-vision', icon: Compass },
  { label: 'Servicios', path: '/#servicios', icon: Briefcase },
  { label: 'Maquinaria', path: '/#maquinaria', icon: Cog },
  { label: 'Inversión', path: '/#oportunidad-inversion', icon: TrendingUp },
];

// Full section list for the mobile menu — mirrors every section the desktop
// "ship route" side indicator exposes, since mobile has no equivalent dock.
export const MOBILE_NAV_ITEMS: NavItem[] = PAGE_SECTIONS.map((section) => ({
  label: section.label,
  path: section.id === 'inicio' ? '/' : `/#${section.id}`,
  icon: section.icon,
  description: section.description,
}));
