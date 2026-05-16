import { CalendarDays, MapPin, Milk } from "lucide-react";

export const infoBlocks = [
  { icon: Milk, label: "Latte", value: "100% sardo" },
  { icon: MapPin, label: "Zona di provenienza", value: "Marrubiu (OR)" },
  { icon: CalendarDays, label: "Data di produzione", value: "19/05/26" },
];

export const recipes = [
  {
    title: "Insalata di pere Monteterno",
    description: "Abbinamento dolce e salato con noci caramellate",
    time: "15 m",
    image: "/recipe-insalata-pere.jpg",
  },
  {
    title: "Culurgiones con Monteterno",
    description: "Pasta fresca ripiena con patate e Monteterno",
    time: "25 m",
    image: "/recipe-culurgiones.jpg",
  },
  {
    title: "Pane frattau con Monteterno",
    description:
      "Pane carasau ammorbidito in brodo, uovo in camicia e generosa grattugiata di Monteterno",
    time: "45 m",
    image: "/recipe-pane-frattau.webp",
  },
];
