import { Locale } from "./translations";
import { getAssetPath } from "./brand";

export interface Practice {
  slug: string;
  name: Record<Locale, string>;
  shortDescription: Record<Locale, string>;
  fullDescription: Record<Locale, string>;
  forWhom: Record<Locale, string>;
  level: Record<Locale, string>;
  duration: string;
  image: string;
  benefits: Record<Locale, string[]>;
}

export const practices: Practice[] = [
  {
    slug: "hot-yoga",
    name: {
      uk: "Гаряча йога",
      en: "Hot Yoga",
    },
    shortDescription: {
      uk: "Класична практика в нагрітому залі при температурі 38–40°C.",
      en: "Signature practice in a room heated to 38–40°C with balanced humidity.",
    },
    fullDescription: {
      uk: "Гаряча йога — це усвідомлена практика асан у спеціально обладнаному залі з температурою 38–40°C та підвищеною вологістю. М'яке тепло допомагає м'язам безпечно розкриватися, оберігає зв'язки та суглоби від травм і активує глибоке очищення тіла через потовиділення. Кожен рух узгоджується з подихом, повертаючи спокій розуму.",
      en: "Hot yoga is a mindful asana practice in a purpose-built chamber at 38–40°C with balanced humidity. Radiant warmth enables muscles to open gently and safely, protects joints, and triggers full-body detoxification through natural perspiration. Every breath anchors you in the present moment.",
    },
    forWhom: {
      uk: "Підходить для початківців та досвідчених практиків. Рекомендуємо пити воду та приходити відпочившими.",
      en: "Perfect for newcomers and experienced practitioners alike. Stay well hydrated and arrive rested.",
    },
    level: {
      uk: "Усі рівні",
      en: "All Levels",
    },
    duration: "60–90 хв",
    image: getAssetPath("/images/hot-yoga-class.jpg"),
    benefits: {
      uk: [
        "Глибока та безпечна гнучкість",
        "Природна детоксикація",
        "Зміцнення глибоких м'язів",
        "Покращення постави та свободи рухів",
        "Зняття стресу та ментального шуму",
        "Стимуляція кровообігу та лімфи",
      ],
      en: [
        "Safe, deep flexibility",
        "Natural thermal detox",
        "Core muscle strengthening",
        "Postural freedom and ease",
        "Mental stress relief",
        "Enhanced blood and lymph circulation",
      ],
    },
  },
];
