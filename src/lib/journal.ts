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
      ru: "Что такое горячая йога и почему её стоит попробовать",
    },
    excerpt: {
      uk: "Гаряча йога — це усвідомлена практика, яка одночасно звільняє тіло від затисків і заспокоює розум у нагрітому просторі.",
      en: "Hot yoga is a transformative mindful practice that releases muscular stiffness while calming the mind in a warm, nurturing environment.",
      ru: "Горячая йога — это осознанная практика, которая бережно освобождает тело от зажимов и дарит покой уму в согревающем пространстве.",
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

In ambient heat, returning to daily errands or phone notifications feels unnatural. Your full attention narrows directly to each inhalation and exhalation. It functions as a dynamic meditation that washes away accumulated exhaustion.

**Why regularity matters most**

Attending classes two or three times weekly establishes enduring physical lightness, deepens nighttime sleep, and restores peaceful balance to everyday life.`,
      ru: `Когда вы впервые входите в нагретый зал студии Balance, вас окутывает мягкое и бережное тепло. Первая естественная реакция тела — глубокий выдох. Именно в эту секунду начинается настоящее возвращение к себе.

Горячая йога — это выверенная последовательность асан, выполняемых при температуре 38–40°C с контролируемой влажностью. Особый микроклимат создает условия, в которых тело раскрывается без надрыва и сопротивления.

**Что происходит с телом**

Мягкое инфракрасное тепло прогревает мышцы и связки за считанные минуты, позволяя глубже и безопаснее осваивать асаны. Усиливается лимфоток, сердечно-сосудистая система получает комфортную кардиотренировку, а естественное потоотделение способствует очищению организма.

**Что происходит с умом**

В нагретом зале невозможно прокручивать в голове рабочие списки или отвлекаться на телефон. Фокус естественным образом сужается до текущего вдоха и выдоха. Это мощная динамическая медитация, стирающая накопленную усталость и фоновую тревожность.

**Почему регулярность важнее интенсивности**

Два-три занятия в неделю формируют ощущение устойчивой легкости в теле, нормализуют сон и дарят внутренний баланс в суете города.`,
    },
    publishedAt: "2026-10-15",
    readingTime: "4 хв",
    image: getAssetPath("/images/journal-hot-yoga-intro.webp"),
    tags: {
      uk: ["Гаряча йога", "Здоров'я", "Початківцям"],
      en: ["Hot Yoga", "Wellness", "Beginners"],
      ru: ["Горячая йога", "Здоровье", "Новичкам"],
    },
  },
  {
    slug: "first-class-tips",
    title: {
      uk: "Як підготуватися до першого заняття гарячою йогою",
      en: "How to Prepare for Your First Hot Yoga Class",
      ru: "Как подготовиться к первому занятию горячей йогой",
    },
    excerpt: {
      uk: "Прості та дієві поради, які зроблять ваш перший візит до студії комфортним, безпечним та ресурсним.",
      en: "Essential, practical tips to ensure your first hot studio visit is safe, deeply empowering, and memorable.",
      ru: "Простые и понятные рекомендации, которые сделают ваш первый визит комфортным, безопасным и наполняющим.",
    },
    body: {
      uk: `Перше відвідування гарячої йоги — це завжди новий досвід для організму. Тіло потрапляє в незвичне середовище, і щоб адаптація пройшла м'яко, варто дотримуватися кількох перевірених правил.

**1. Водний баланс заздалегідь**

Пийте чисту воду впродовж усього дня до практики, а не лише перед самим входом до залу. Приходьте з гарним запасом гідратації — це основа вашого гарного самопочуття на коврику. Візьміть із собою пляшку з водою в зал.

**2. Легкість у шлунку**

Останній ситний прийом їжі завершіть за 2–3 години до початку класу. Якщо відчуваєте голод, за 40–60 хвилин можна з'їсти половинку банана або випити легкий смузі.

**3. Зручний мінімалістичний одяг**

Обирайте легкий спортивний одяг із тканин, що дихають. Легінси або велосипедки та зручний спортивний топ — ідеальний вибір.

**4. Не поспішайте і слухайте себе**

На першому занятті головне завдання — не повторити кожну позу ідеально, а познайомити тіло з теплом. Якщо відчули запаморочення чи втому — просто сядьте на коврик або ляжте в баласану (позу дитини) і спокійно дихайте.`,
      en: `Your first hot yoga experience is an exciting, unique milestone for your body. Stepping into thermal warmth calls for gentle awareness and simple mindful preparation.

**1. Hydrate throughout the day**

Drink water consistently all day before your class, rather than gulping water right before entering the room. Good cellular hydration is the bedrock of feeling vibrant and energetic. Bring your reusable bottle inside.

**2. Keep digestion light**

Finish your last solid meal 2 to 3 hours prior to class. If you require sustained energy beforehand, a small banana or fresh fruit smoothie an hour prior is ideal.

**3. Wear breathable, fitted apparel**

Select lightweight fabrics tailored for movement and moisture absorption. Fitted leggings or shorts coupled with an active top allow full range of motion.

**4. Honor your pace and rest**

Your primary intention in your first class is to introduce your physiology to warmth, not to execute postures perfectly. Rest in child's pose whenever your breathing requests it.`,
      ru: `Первое занятие горячей йогой — это всегда яркий и новый опыт для организма. Тело оказывается в необычной среде, и чтобы адаптация прошла мягко, полезно помнить о нескольких простых правилах.

**1. Пейте воду заранее**

Насыщайте организм чистой водой в течение всего дня перед тренировкой, а не только перед дверью зала. Хороший водный баланс — основа вашего комфортного самочувствия. Обязательно возьмите бутылочку с водой на коврик.

**2. Легкость в желудке**

Плотный прием пищи лучше завершить за 2–3 часа до начала практики. Если чувствуете голод, за час до класса можно перекусить половинкой банана или выпить легкий смузи.

**3. Удобная форма**

Выбирайте легкую спортивную одежду из дышащих влагоотводящих тканей. Спортивный топ и леггинсы или шорты — оптимальный вариант.

**4. Не соревнуйтесь и слушайте себя**

Главная цель первого занятия — не сделать все асаны идеально, а дать телу привыкнуть к теплу. Если чувствуете усталость, в любой момент опуститесь на коврик в позу ребенка и восстановите дыхание.`,
    },
    publishedAt: "2026-10-20",
    readingTime: "3 хв",
    image: getAssetPath("/images/journal-hot-yoga-tips.webp"),
    tags: {
      uk: ["Поради", "Підготовка", "Перше заняття"],
      en: ["Tips", "Preparation", "First Class"],
      ru: ["Советы", "Подготовка", "Первое занятие"],
    },
  },
];
