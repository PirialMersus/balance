import { Locale } from "./translations";
import { getAssetPath } from "./brand";

export interface JournalArticle {
  slug: string;
  title: Record<Locale, string>;
  excerpt: Record<Locale, string>;
  body: Record<Locale, string>;
  publishedAt: string;
  readingTime: string;
  image: string;
  tags: Record<Locale, string[]>;
}

export const journalArticles: JournalArticle[] = [
  {
    slug: "what-is-hot-yoga",
    title: {
      uk: "Що таке гаряча йога і чому її варто спробувати",
      en: "What is Hot Yoga and Why You Should Experience It",
    },
    excerpt: {
      uk: "Гаряча йога — це усвідомлена практика, яка одночасно звільняє тіло від затисків і заспокоює розум у нагрітому просторі.",
      en: "Hot yoga is a transformative mindful practice that releases muscular stiffness while calming the mind in a warm, nurturing environment.",
    },
    body: {
      uk: `Коли ви вперше входите до нагрітої зали студії Balance, вас огортає м'яке та обволікаюче тепло. Перша реакція тіла — глибокий видих. Саме в цей момент починається справжнє повернення до себе.

Гаряча йога — це вивірена послідовність асан, що виконуються при температурі 38–40°C з контрольованою вологістю. Спеціальний мікроклімат створює умови, в яких тіло розкривається без зайвого опору.

**Що відбувається з тілом**

Інфрачервоне тепло м'яко зігріває м'язи та фасції, дозволяючи занурюватися в асани глибше та повністю безпечно для хребта й суглобів. Активується лімфоток, серцево-судинна система отримує м'яке тренування, а через природне потовиділення виводяться шлаки й токсини.

**Що відбувається з розумом**

У теплі практично неможливо повертатися до щоденних турбот або думати про телефон. Усе сприйняття звужується до єдиного подиху. Це природна динамічна медитація, яка знімає накопичену втому та хронічний стрес.

**Чому регулярність важливіша за інтенсивність**

Два-три відвідування на тиждень створюють стійке відчуття легкості в тілі, покращують сон і дарують впевнений баланс у повсякденному житті.`,
      en: `When stepping into the heated chamber of Balance Studio for the first time, you are welcomed by an embracing, gentle warmth. Your initial response is a long, grounding exhale. This is precisely where your practice begins.

Hot yoga combines classical asanas performed in a carefully regulated microclimate of 38–40°C with balanced humidity. This ambient environment enables your body to open safely without force.

**How your body responds**

Thermal warmth gently loosens muscular connective tissues, facilitating deeper, safer stretches without strain on joints or spine. Blood circulation accelerates, your lymphatic system purifies, and healthy sweat flushes toxins from the skin.

**How your mind quiets down**

In the warmth, mental distractions naturally fade. Your attention naturally anchors into every conscious inhale and exhale. It is effortless dynamic meditation that resets an overworked nervous system.

**Consistency over intensity**

Practicing two to three sessions each week builds lasting vitality, enhances deep sleep, and cultivates grounded serenity in your daily life.`,
    },
    publishedAt: "2026-10-20",
    readingTime: "5 min",
    image: getAssetPath("/images/journal-hot-yoga-intro.jpg"),
    tags: {
      uk: ["гаряча йога", "початківцям", "практика"],
      en: ["hot yoga", "beginners", "practice"],
    },
  },
  {
    slug: "first-class-tips",
    title: {
      uk: "Перше заняття гарячою йогою: як підготуватися",
      en: "Your First Hot Yoga Class: Preparation & Essentials",
    },
    excerpt: {
      uk: "Прості та перевірені рекомендації, які допоможуть почуватися впевнено й комфортно з першої хвилини на коврику.",
      en: "Practical recommendations to ensure your inaugural hot yoga experience is calm, comfortable, and deeply rewarding.",
    },
    body: {
      uk: `Якщо ви збираєтеся на своє перше заняття в Balance, хвилювання — це цілком природно. Гаряча йога доступна кожному, незалежно від віку чи рівня гнучкості.

**Підготовка протягом дня**

Пийте достатньо чистої негазованої води протягом усього дня перед практикою. Не варто приходити на повний шлунок: останній прийом їжі завершіть за 2 години до початку заняття.

**Що взяти з собою**

1. Зручний легкий одяг із дихаючих тканин (топ, шорти або легінси).
2. Пляшку з питною водою.
3. Змінну білизну для освіжаючого душу після заняття.
Коврики та рушники для практики ми з радістю надаємо в студії.

**Під час заняття**

Слухайте вказівки викладача і насамперед власне тіло. Якщо ви відчули потребу зупинитися — будь-якої миті опустіться в позу дитини на коврик, зробіть кілька ковтків води та повертайтеся до потоку, коли будете готові.`,
      en: `If you are preparing for your first visit to Balance, feeling curious or a little nervous is entirely natural. Hot yoga is accessible to anyone, regardless of prior flexibility or fitness level.

**Preparation throughout the day**

Hydrate consistently with clean water throughout your day. Avoid heavy meals close to class; your last nourishing meal should ideally be finished two hours prior.

**What to pack**

1. Lightweight, breathable sportswear (shorts, sports top, or leggings).
2. A personal refillable water bottle.
3. Fresh change of clothes for our post-practice showers.
Studio mats and towels are provided for your comfort.

**During the class**

Listen to the teacher's gentle cues and respect your body's rhythm. Whenever you need a pause, simply rest in child's pose on your mat, take a sip of water, and rejoin the flow when you feel ready.`,
    },
    publishedAt: "2026-10-15",
    readingTime: "4 min",
    image: getAssetPath("/images/journal-first-class.jpg"),
    tags: {
      uk: ["початківцям", "поради", "перше заняття"],
      en: ["beginners", "tips", "first class"],
    },
  },
];
