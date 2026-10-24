export type Locale = "uk" | "en";

export interface TranslationDictionary {
  nav: {
    practices: string;
    schedule: string;
    pricing: string;
    studio: string;
    contacts: string;
    book: string;
    switchLang: string;
    langName: string;
  };
  hero: {
    headline: string;
    sub: string;
    ctaPractice: string;
    ctaSchedule: string;
  };
  about: {
    title: string;
    body1: string;
    body2: string;
    quote: string;
    founder: string;
  };
  practices: {
    title: string;
    subtitle: string;
    learnMore: string;
    viewAll: string;
  };
  benefits: {
    title: string;
    items: Array<{
      title: string;
      body: string;
      icon: string;
    }>;
  };
  teachers: {
    title: string;
    founder: string;
    bio: string;
    credo: string;
  };
  faq: {
    title: string;
    items: Array<{
      q: string;
      a: string;
    }>;
  };
  pricing: {
    title: string;
    subtitle: string;
    askPrice: string;
  };
  schedule: {
    title: string;
    subtitle: string;
  };
  contacts: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    instagram: string;
    telegram: string;
    booking: string;
  };
  booking: {
    title: string;
    subtitle: string;
    name: string;
    contact: string;
    practice: string;
    time: string;
    message: string;
    submit: string;
    success: string;
  };
  journal: {
    title: string;
    subtitle: string;
    readMore: string;
  };
  cta: {
    title: string;
    sub: string;
    book: string;
    instagram: string;
  };
}

export const translations: Record<Locale, TranslationDictionary> = {
  uk: {
    nav: {
      practices: "Практика",
      schedule: "Розклад",
      pricing: "Ціни",
      studio: "Про студію",
      contacts: "Контакти",
      book: "Записатися",
      switchLang: "English",
      langName: "Українська",
    },
    hero: {
      headline: "Тепло.\nДихання.\nБаланс.",
      sub: "Єдина спеціалізована студія гарячої йоги в Одесі.\nПрактика при 38–40°C для глибокого розкриття тіла та спокою розуму.",
      ctaPractice: "Напрямки",
      ctaSchedule: "Розклад",
    },
    about: {
      title: "Простір, де тіло згадує, як дихати глибоко",
      body1:
        "Студія «Баланс» створена для тих, хто шукає більше, ніж просто фізичні вправи. В нагрітому просторі тіло стає м'яким та сприйнятливим, зв'язки розслабляються, а розум позбавляється повсякденної тривожності.",
      body2:
        "Кожне заняття — це внутрішній діалог, безпечне подолання власного опору та повернення до внутрішнього спокою в теплій атмосфері однодумців.",
      quote:
        "«Ми створили Balance не як спортзал, а як безпечний прихисток від міського шуму, де кожен коврик — це особистий острів тепла».",
      founder: "Марія Миронова, засновниця студії Balance",
    },
    practices: {
      title: "Горяча йога: основа нашої студії",
      subtitle:
        "Спеціально розроблений клас, адаптований під температурний режим 38–40°C. Безпечно для суглобів, ефективно для детоксикації та розкриття потенціалу тіла.",
      learnMore: "Докладніше",
      viewAll: "Усі практики",
    },
    benefits: {
      title: "Чому саме гаряча йога",
      items: [
        {
          title: "Глибоке та безпечне розтягнення",
          body: "М'язи в нагрітому залі стають еластичними за лічені хвилини, що зводить ризик травм до мінімуму.",
          icon: "flame",
        },
        {
          title: "Інтенсивна детоксикація",
          body: "Активне потовиділення очищує шкіру, виводить токсини та стимулює лімфатичну систему.",
          icon: "droplet",
        },
        {
          title: "Перезавантаження нервової системи",
          body: "Спека змушує сконцентруватися виключно на подиху, відключаючи потік зайвих думок.",
          icon: "wind",
        },
        {
          title: "Здоров'я серця та суглобів",
          body: "М'яке кардіонавантаження тренує серцево-судинну систему без ударного навантаження на коліна та хребет.",
          icon: "heart",
        },
      ],
    },
    teachers: {
      title: "Викладачі",
      founder: "Засновниця та старший викладач",
      bio: "Марія Миронова — сертифікований викладач йоги, авторка методики м'якої адаптації до практики в нагрітому просторі. Її класи вирізняються увагою до коректного вирівнювання, безпеки та поваги до можливостей власного тіла.",
      credo: "«Спека вчить чесності. На коврику неможливо грати роль — залишається лише твоє справжнє дихання».",
    },
    faq: {
      title: "Часті питання",
      items: [
        {
          q: "Чи підходить гаряча йога для повних новачків?",
          a: "Так, абсолютно. Більшість наших учнів приходять без попереднього досвіду. Ви завжди можете зменшити інтенсивність, відпочити в позі дитини або випити води.",
        },
        {
          q: "Що потрібно взяти з собою на перше заняття?",
          a: "Легкий зручний одяг (топ, шорти або легінси), пляшку негазованої води та змінну білизну для душу після практики. Коврики та рушники для зали ми надаємо.",
        },
        {
          q: "Як підготуватися до практики?",
          a: "Пийте достатньо води протягом дня до заняття. Останній прийом їжі бажано завершити за 2 години до початку практики.",
        },
        {
          q: "Чи є протипоказання?",
          a: "Гострі запальні процеси, висока температура, вагітність та серйозні серцево-судинні захворювання вимагають обов'язкової попередньої консультації лікаря.",
        },
      ],
    },
    pricing: {
      title: "Абонементи та відвідування",
      subtitle:
        "Ми пропонуємо гнучкі формати для новачків і регулярних практиків. Індивідуальні та групові формати в Одесі.",
      askPrice: "Записатися на заняття",
    },
    schedule: {
      title: "Розклад практик",
      subtitle: "Ранкові, денні та вечірні класи гарячої йоги в Одесі.",
    },
    contacts: {
      title: "Контакти та локація",
      subtitle: "Одеса, Україна. Затишний простір тепла та усвідомленості.",
      address: "Одеса, Україна",
      phone: "Запис через Instagram Direct",
      instagram: "@yoga_balance_odessa",
      telegram: "Balance Hot Yoga",
      booking: "Записатися в Direct",
    },
    booking: {
      title: "Запис на заняття",
      subtitle: "Залиште заявку — ми зв'яжемося з вами та забронюємо коврик у нагрітому залі.",
      name: "Ваше ім'я",
      contact: "Телефон або @instagram / telegram",
      practice: "Напрямок практики",
      time: "Зручний час",
      message: "Коментар або побажання",
      submit: "Забронювати місце",
      success: "Дякуємо! Діалог відкрито в Instagram Direct студії.",
    },
    journal: {
      title: "Журнал про гарячу йогу",
      subtitle: "Статті, поради для початківців та знання про силу тепла для здоров'я.",
      readMore: "Читати статтю",
    },
    cta: {
      title: "Відчуйте силу тепла\nта внутрішнього балансу",
      sub: "Запишіться на своє перше заняття гарячою йогою в Одесі вже сьогодні.",
      book: "Записатися на практику",
      instagram: "Наш Instagram",
    },
  },
  en: {
    nav: {
      practices: "Practices",
      schedule: "Schedule",
      pricing: "Pricing",
      studio: "About Studio",
      contacts: "Contacts",
      book: "Book a Class",
      switchLang: "Українська",
      langName: "English",
    },
    hero: {
      headline: "Warmth.\nBreath.\nBalance.",
      sub: "The premier dedicated hot yoga studio in Odesa.\nPractice at 38–40°C for deep body opening and mental calm.",
      ctaPractice: "Explore Classes",
      ctaSchedule: "View Schedule",
    },
    about: {
      title: "A sanctuary where your body remembers how to breathe deeply",
      body1:
        "Balance Studio is designed for those seeking more than conventional fitness. In our heated room, muscles soften, joints regain gentle freedom, and the mind unburdens itself from city stress.",
      body2:
        "Every class is a safe, mindful journey through internal dialogue, releasing tension and rediscovering inner harmony among a supportive community.",
      quote:
        "“We envisioned Balance not as a gym, but as a calming haven where each yoga mat becomes your personal sanctuary of warmth.”",
      founder: "Maria Mironova, Founder of Balance Studio",
    },
    practices: {
      title: "Hot Yoga: The Heart of Balance",
      subtitle:
        "Our signature practice thoughtfully adapted for 38–40°C heat and balanced humidity. Gentle on joints, powerful for detoxification, and revitalizing for body and mind.",
      learnMore: "Learn More",
      viewAll: "All Classes",
    },
    benefits: {
      title: "Why Hot Yoga",
      items: [
        {
          title: "Safe, Deep Flexibility",
          body: "Heated muscles become naturally pliable within minutes, significantly reducing strain and injury risk.",
          icon: "flame",
        },
        {
          title: "Intense Detoxification",
          body: "Purifying sweat unclogs skin pores, flushes toxins, and stimulates your lymphatic system.",
          icon: "droplet",
        },
        {
          title: "Mental Reset & Mindfulness",
          body: "Ambient warmth naturally centers your awareness on breath, quieting digital overload and everyday noise.",
          icon: "wind",
        },
        {
          title: "Joint & Cardiovascular Health",
          body: "Gentle aerobic training strengthens cardiovascular endurance with zero high-impact stress on spine or knees.",
          icon: "heart",
        },
      ],
    },
    teachers: {
      title: "Instructors",
      founder: "Founder & Lead Teacher",
      bio: "Maria Mironova is a certified yoga instructor and creator of our gentle thermal adaptation method. Her classes focus on precise alignment, joint safety, and honoring the authentic signals of your body.",
      credo: "“Heat demands honesty. On the mat, there are no roles to play — only your true, present breath.”",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is hot yoga suitable for absolute beginners?",
          a: "Yes, absolutely. Most of our students join with zero prior experience. You are always welcome to rest in child’s pose, sip water, and take it at your own natural pace.",
        },
        {
          q: "What should I bring to my first class?",
          a: "Light breathable sportswear (shorts, top, or leggings), a refillable water bottle, and fresh clothes for the shower afterwards. Studio mats and props are provided.",
        },
        {
          q: "How should I prepare before coming?",
          a: "Stay well-hydrated throughout the day. We advise enjoying your last meal around 2 hours before class begins.",
        },
        {
          q: "Are there any contraindications?",
          a: "Acute inflammation, fever, pregnancy, or severe cardiovascular conditions require prior medical consultation.",
        },
      ],
    },
    pricing: {
      title: "Memberships & Passes",
      subtitle:
        "Flexible options for newcomers and committed practitioners. Group and private hot yoga sessions in Odesa.",
      askPrice: "Book a Practice",
    },
    schedule: {
      title: "Class Schedule",
      subtitle: "Morning, afternoon, and evening hot yoga classes in Odesa.",
    },
    contacts: {
      title: "Location & Contacts",
      subtitle: "Odesa, Ukraine. A welcoming space of mindful warmth.",
      address: "Odesa, Ukraine",
      phone: "Direct booking via Instagram",
      instagram: "@yoga_balance_odessa",
      telegram: "Balance Hot Yoga",
      booking: "Book via Direct",
    },
    booking: {
      title: "Book a Practice",
      subtitle: "Submit your details — our administrator will confirm your spot on the mat in the heated studio.",
      name: "Your Name",
      contact: "Phone or @instagram / telegram",
      practice: "Class Format",
      time: "Preferred Time",
      message: "Notes or requests",
      submit: "Reserve Your Spot",
      success: "Thank you! Direct message opened in Instagram.",
    },
    journal: {
      title: "Hot Yoga Journal",
      subtitle: "Insights, beginner guides, and wisdom about the healing power of thermal practice.",
      readMore: "Read Article",
    },
    cta: {
      title: "Experience the power of warmth\nand inner balance",
      sub: "Reserve your first hot yoga experience in Odesa today.",
      book: "Book Your Class",
      instagram: "Follow on Instagram",
    },
  },
};
