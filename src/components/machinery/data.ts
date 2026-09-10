export type MachineryIconName = 'excavator' | 'roller' | 'forklift' | 'truck' | 'gear' | 'headset' | 'arrow-right';

export interface MachineryItem {
  name: string;
  desc: string;
  /** Populated once per-equipment photography is available. */
  image?: string;
}

export interface MachineryCategory {
  id: string;
  title: string;
  shortLabel: string;
  icon: MachineryIconName;
  /** Representative photo for this category, used as the card background for every item in it. */
  image: string;
  items: MachineryItem[];
}

export const CATEGORIES: MachineryCategory[] = [
  {
    id: 'excavacion',
    title: 'Excavación y Movimiento de Tierras',
    shortLabel: 'Excavación',
    icon: 'excavator',
    image: '/crawler_excavators.png',
    items: [
      { name: 'Excavadoras de cadenas', desc: 'Máxima potencia para movimiento de volumen masivo en terrenos difíciles.', image: '/crawler_excavators.png' },
      { name: 'Excavadoras de ruedas', desc: 'Versatilidad y movilidad para proyectos urbanos e infraestructura.', image: '/wheeled_excavator.png' },
      { name: 'Excavadoras eléctricas', desc: 'Cero emisiones y bajo ruido para proyectos en espacios confinados.', image: '/electric_excavator.png' },
      { name: 'Palas de cadena', desc: 'Excelente empuje y tracción para excavación pesada y canteras.', image: '/crawler_loader.png' },
      { name: 'Palas de ruedas', desc: 'Carga rápida y transporte eficiente de agregados en plantas y obras.', image: '/wheel_loader.png' },
      { name: 'Retropalas', desc: 'Equipos compactos multifunción para excavación y zanjeo rápido.', image: '/backhoe_loaders.png' },
      { name: 'Dragalinas', desc: 'Excavación a gran escala de largo alcance para minería a cielo abierto.', image: '/draglines.png' },
    ],
  },
  {
    id: 'compactacion',
    title: 'Compactación y Nivelación',
    shortLabel: 'Compactación',
    icon: 'roller',
    image: '/roller_compactors.png',
    items: [
      { name: 'Compactadoras de rodillo', desc: 'Compactación eficiente de suelos y mezclas asfálticas.', image: '/roller_compactors.png' },
      { name: 'Motoniveladoras', desc: 'Nivelación de precisión para bases de carreteras y taludes.', image: '/motor_graders.png' },
      { name: 'Perfiladoras', desc: 'Fresado y perfilado de pavimentos para mantenimiento vial.', image: '/profiling_machines.png' },
      { name: 'Extendedoras de asfalto', desc: 'Colocación homogénea y compacta de capas de rodadura.', image: '/asphalt_pavers.png' },
    ],
  },
  {
    id: 'carga',
    title: 'Carga y Manipulación',
    shortLabel: 'Carga',
    icon: 'forklift',
    image: '/compact_loaders.png',
    items: [
      { name: 'Cargadores forestales', desc: 'Manipulación rápida de troncos con pinzas especializadas.', image: '/forestry_loaders.png' },
      { name: 'Cargadoras compactas', desc: 'Agilidad en espacios reducidos con gran variedad de implementos.', image: '/compact_loaders.png' },
      { name: 'Manipuladoras telescópicas', desc: 'Alcance vertical y capacidad de carga excepcional para elevación.', image: '/telehandlers.png' },
    ],
  },
  {
    id: 'transporte',
    title: 'Transporte de Obra',
    shortLabel: 'Transporte de Obra',
    icon: 'truck',
    image: '/construction_transport_example_category.png',
    items: [
      { name: 'Dumpers articulados', desc: 'Transporte todoterreno en condiciones de suelo extremadamente blandas.' },
      { name: 'Dumpers rígidos', desc: 'Gran capacidad de carga y alta velocidad en minas y canteras.', image: '/rigid_dump_trucks.png' },
      { name: 'Mototraillas', desc: 'Carga, transporte y esparcido de tierras de forma autónoma.', image: '/motor_scrapers.png' },
      { name: 'Tractores de ruedas', desc: 'Arrastre pesado de implementos y tolvas de transporte en obra.', image: '/wheeled_tractors.png' },
    ],
  },
  {
    id: 'especializada',
    title: 'Maquinaria Especializada',
    shortLabel: 'Maquinaria Especializada',
    icon: 'gear',
    image: '/stone-crushing_plants.png',
    items: [
      { name: 'Perforadoras', desc: 'Perforación de cimentaciones, pozos y voladuras de roca.' },
      { name: 'Taladoras apiladoras', desc: 'Corte y apilado rápido de árboles para silvicultura.', image: '/logging_stackers.png' },
      { name: 'Tiendetubos', desc: 'Tendido y colocación de tuberías de gran diámetro en zanjas.', image: '/pipelayer.png' },
      { name: 'Recicladoras de asfalto', desc: 'Rehabilitación sostenible de pavimentos in situ.', image: '/asphalt_recyclers.png' },
      { name: 'Plantas picapiedra', desc: 'Trituración y clasificación móvil de agregados y roca.', image: '/stone-crushing_plants.png' },
    ],
  },
];
