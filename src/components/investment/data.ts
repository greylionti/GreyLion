import { Ship, Clock, ShieldCheck, Package, Anchor, FileCheck2, Gauge, BarChart3, Users, LucideIcon } from 'lucide-react';

export interface CharterModel {
  num: string;
  title: string;
  subtitle: string;
  desc: string;
  icon: LucideIcon;
}

export const CHARTER_MODELS: CharterModel[] = [
  {
    num: '01',
    title: 'Fletamento por Viaje',
    subtitle: 'Voyage Charter',
    desc: 'Capturamos el mercado de transporte de materias primas a granel y cargas específicas. Asumimos la gestión operativa completa del buque —combustible, tripulación y tasas— para ofrecer tarifas altamente competitivas por tonelada, maximizando el margen de ganancia por trayecto.',
    icon: Ship,
  },
  {
    num: '02',
    title: 'Fletamento por Tiempo',
    subtitle: 'Time Charter',
    desc: 'Arrendamos buques operativos por períodos fijos —meses o años— a clientes corporativos. Entregamos la embarcación lista para navegar, con mantenimiento al día y tripulación calificada, asegurando ingresos recurrentes y predecibles a mediano y largo plazo.',
    icon: Clock,
  },
  {
    num: '03',
    title: 'Fletamento a Casco Desnudo',
    subtitle: 'Bareboat Charter',
    desc: 'La opción más sólida para el financiamiento y optimización de activos marítimos. El fletador asume la gestión náutica y los seguros, permitiéndonos obtener rentabilidad neta con un riesgo operativo mínimo.',
    icon: ShieldCheck,
  },
];

export interface SpecializedLine {
  kicker: string;
  title: string;
  desc: string;
  tags: string[];
  icon: LucideIcon;
  image: string;
}

export const SPECIALIZED_LINES: SpecializedLine[] = [
  {
    kicker: 'Carga Especializada',
    title: 'Transporte de Carga de Proyecto',
    desc: 'Fletamento de buques especializados para mover estructuras sobredimensionadas: componentes eólicos, minería e industria pesada.',
    tags: ['Eólica', 'Minería', 'Infraestructura', 'Industria Pesada'],
    icon: Package,
    image: '/project_cargo_transport.png',
  },
  {
    kicker: 'Soporte Marítimo',
    title: 'Apoyo Costero (Offshore Support)',
    desc: 'Fletamento de embarcaciones menores y de soporte para la logística de la industria del petróleo, gas y energías renovables en alta mar.',
    tags: ['Oil & Gas', 'Renovables', 'Logística', 'Operaciones Costeras'],
    icon: Anchor,
    image: '/coastal_support.png',
  },
];

export interface InvestmentReason {
  num: string;
  title: string;
  desc: string;
  tag: [string, string];
  icon: LucideIcon;
  image: string;
}

export const INVESTMENT_REASONS: InvestmentReason[] = [
  {
    num: '01',
    title: 'Activos Tangibles',
    desc: 'Su inversión está respaldada por la operación y el valor de activos navales reales, en un mercado con demanda histórica sostenida.',
    tag: ['Activos Reales', 'Resultados Concretos'],
    icon: Ship,
    image: '/tangible_assets_investment.png',
  },
  {
    num: '02',
    title: 'Flexibilidad Contractual',
    desc: 'Combinamos contratos a largo plazo que dan estabilidad con fletamentos por viaje que capturan los picos de tarifas altas del mercado spot.',
    tag: ['Estrategia Dual', 'Mayores Oportunidades'],
    icon: FileCheck2,
    image: '/contractual_flexibility_investment.png',
  },
  {
    num: '03',
    title: 'Eficiencia Operativa',
    desc: 'Minimizamos los tiempos muertos de los buques gracias a nuestra red de corretaje y consultoría marítima integrada.',
    tag: ['Mayor Ocupación', 'Mayor Rentabilidad'],
    icon: Gauge,
    image: '/operational_efficiency_investment.png',
  },
];

export interface CtaHighlight {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export const CTA_HIGHLIGHTS: CtaHighlight[] = [
  {
    title: 'Información financiera detallada',
    desc: 'Datos reales, proyecciones claras',
    icon: BarChart3,
  },
  {
    title: 'Asesoría directa con nuestro equipo',
    desc: 'Sin intermediarios',
    icon: Users,
  },
  {
    title: 'Confidencialidad garantizada',
    desc: 'Su información está protegida',
    icon: ShieldCheck,
  },
];
