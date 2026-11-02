export type Locale = "uk" | "en" | "ru";

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
      switchLang: "Мова",
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
      title: "Гаряча йога: основа нашої студії",
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
          body: "Рясне потовиділення очищує шкіру, прискорює обмін речовин і позбавляє організм від накопичених токсинів.",
          icon: "droplet",
        },
        {
          title: "Зниження рівня стресу",
          body: "Концентрація на диханні в умовах тепла допомагає вимкнути безперервний потік думок і перезавантажити нервову систему.",
          icon: "brain",
        },
        {
          title: "М'яка кардіонагрузка",
          body: "Поєднання статичних та динамічних асан у теплі тренує судини і серце без надмірних стрибків пульсу.",
          icon: "heart",
        },
        {
          title: "Поліпшення якості сну",
          body: "Глибока релаксація після заняття нормалізує циркадні ритми та дарує міцний, відновлювальний сон.",
          icon: "moon",
        },
        {
          title: "Відчуття легкості та балансу",
          body: "Після практики зникають м'язові затиски, а в тілі з'являється приємне тепло та легкість на весь день.",
          icon: "feather",
        },
      ],
    },
    teachers: {
      title: "Викладачі",
      founder: "Засновниця та провідний інструктор",
      bio: "Марія практикує йогу понад 7 років, вивчала методики гарячої йоги та анатомії руху. Її мета — показати, що через тепло можна безпечно пізнавати можливості свого тіла.",
      credo: "«Слухайте своє тіло, не поспішайте і дозвольте теплу зробити свою роботу».",
    },
    faq: {
      title: "Часті запитання",
      items: [
        {
          q: "Чи підходить гаряча йога початківцям?",
          a: "Так, абсолютно. Наші викладачі пропонують модифікації для кожного рівня підготовки. Ви завжди можете відпочити на коврику, коли відчуєте потребу.",
        },
        {
          q: "Що потрібно взяти з собою?",
          a: "Зручний легкий одяг (топ/майка, легінси чи шорти), пляшку для води та змінне взуття для пересування студією. Килимки та рушники ми надаємо.",
        },
        {
          q: "Як підготуватися до заняття?",
          a: "Пийте достатньо води впродовж дня. Останній прийом їжі рекомендовано завершити за 2 години до початку практики.",
        },
        {
          q: "Чи є протипоказання?",
          a: "Гострі запальні процеси, підвищена температура, вагітність та тяжкі серцево-судинні захворювання потребують консультації лікаря перед початком занять.",
        },
      ],
    },
    pricing: {
      title: "Абонементи та ціни",
      subtitle:
        "Гнучкі умови для новачків і постійних практиків. Індивідуальні та групові заняття гарячою йогою в Одесі.",
      askPrice: "Записатися на заняття",
    },
    schedule: {
      title: "Розклад практик",
      subtitle: "Ранкові, денні та вечірні класи гарячої йоги в Одесі.",
    },
    contacts: {
      title: "Локація та контакти",
      subtitle: "Одеса, ЖК «Одісей». Теплий і гостинний простір усвідомленої практики.",
      address: "Одеса, Люстдорфська дорога, 55К",
      phone: "Запис через Instagram Direct",
      instagram: "@yoga_balance_odessa",
      telegram: "Balance Hot Yoga",
      booking: "Написати в Direct",
    },
    booking: {
      title: "Запис на практику",
      subtitle: "Залиште свої контакти — адміністратор зв'яжеться з вами та підтвердить місце на коврику в нагрітому залі.",
      name: "Ваше ім'я",
      contact: "Телефон або @instagram / telegram",
      practice: "Формат практики",
      time: "Зручний час",
      message: "Коментар або запитання",
      submit: "Зарезервувати місце",
      success: "Дякуємо! Відкрито діалог зі студією в Instagram.",
    },
    journal: {
      title: "Журнал про гарячу йогу",
      subtitle: "Корисні статті, поради для початківців та знання про цілющий вплив теплової практики на організм.",
      readMore: "Читати статтю",
    },
    cta: {
      title: "Відчуйте силу тепла\nта внутрішнього балансу",
      sub: "Запишіться на своє перше заняття гарячою йогою в Одесі вже сьогодні.",
      book: "Записатися на практику",
      instagram: "Стежити в Instagram",
    },
  },
  en: {
    nav: {
      practices: "Practices",
      schedule: "Schedule",
      pricing: "Pricing",
      studio: "Studio",
      contacts: "Contacts",
      book: "Book Class",
      switchLang: "Language",
      langName: "English",
    },
    hero: {
      headline: "Warmth.\nBreath.\nBalance.",
      sub: "The premier specialized hot yoga studio in Odesa.\nPracticing at 38–40°C for deep somatic opening and peaceful mindfulness.",
      ctaPractice: "Our Classes",
      ctaSchedule: "Class Schedule",
    },
    about: {
      title: "A sanctuary where your body remembers how to breathe deeply",
      body1:
        "Balance Studio is designed for those seeking more than repetitive physical exercise. Within our heated sanctuary, the body becomes pliable and open, deep-seated stiffness dissolves, and the mind sheds daily anxiety.",
      body2:
        "Every session is a gentle internal dialogue, transcending your limitations safely while embracing genuine inner peace alongside like-minded practitioners.",
      quote:
        "“We envisioned Balance not as an ordinary fitness hall, but as a calming refuge from urban noise, where each mat is your personal haven of radiant warmth.”",
      founder: "Maria Mironova, Founder of Balance Studio",
    },
    practices: {
      title: "Hot Yoga: The Heart of Our Sanctuary",
      subtitle:
        "A meticulously sequenced flow designed specifically for a 38–40°C microclimate. Gentle on joints, intensely purifying, and profoundly empowering for physical mobility.",
      learnMore: "Learn More",
      viewAll: "All Practices",
    },
    benefits: {
      title: "Why Practice in Radiant Heat",
      items: [
        {
          title: "Deep, Injury-Free Flexibility",
          body: "Elevated temperature warms muscular tissues in minutes, allowing you to lengthen safely without straining tendons.",
          icon: "flame",
        },
        {
          title: "Full-Body Detoxification",
          body: "Healthy thermal sweat stimulates lymphatic flow, purifies pores, and accelerates cellular metabolism.",
          icon: "droplet",
        },
        {
          title: "Profound Stress Relief",
          body: "Conscious breathwork in soothing heat quiets overactive minds and recalibrates the central nervous system.",
          icon: "brain",
        },
        {
          title: "Gentle Cardiovascular Conditioning",
          body: "Controlled asana flows in warmth condition heart health and vascular elasticity without sudden heart rate spikes.",
          icon: "heart",
        },
        {
          title: "Restorative Sleep Quality",
          body: "Post-practice somatic relaxation resets circadian cycles, ensuring deep and restorative nighttime rest.",
          icon: "moon",
        },
        {
          title: "Lasting Balance and Ease",
          body: "Physical tension lifts completely, leaving a sensation of graceful lightness that accompanies you throughout your day.",
          icon: "feather",
        },
      ],
    },
    teachers: {
      title: "Instructors",
      founder: "Founder & Lead Teacher",
      bio: "Maria has practiced yoga for over 7 years, specializing in hot yoga methodologies and anatomically sound movement. Her mission is to guide students through radiant heat toward true self-awareness.",
      credo: "“Listen attentively to your body, release rushing, and allow radiant heat to do its healing work.”",
    },
    faq: {
      title: "Frequently Asked Questions",
      items: [
        {
          q: "Is hot yoga suitable for absolute beginners?",
          a: "Yes, completely. Our instructors offer personalized variations for all skill levels. You are always welcome to rest in child's pose whenever needed.",
        },
        {
          q: "What should I bring to class?",
          a: "Lightweight, breathable sportswear, a water bottle, and clean slippers for studio corridors. Premium practice mats and plush towels are provided.",
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
      subtitle: "Odesa, Odisey Complex. A welcoming space of mindful warmth.",
      address: "Odesa, 55K Liustdorfska Road",
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
  ru: {
    nav: {
      practices: "Практики",
      schedule: "Расписание",
      pricing: "Цены",
      studio: "О студии",
      contacts: "Контакты",
      book: "Записаться",
      switchLang: "Язык",
      langName: "Русский",
    },
    hero: {
      headline: "Тепло.\nДыхание.\nБаланс.",
      sub: "Единственная специализированная студия горячей йоги в Одессе.\nПрактика при 38–40°C для глубокого раскрытия тела и покоя ума.",
      ctaPractice: "Направления",
      ctaSchedule: "Расписание",
    },
    about: {
      title: "Пространство, где тело вспоминает, как дышать глубоко",
      body1:
        "Студия «Баланс» создана для тех, кто ищет больше, чем просто физические упражнения. В нагретом пространстве тело становится мягким и восприимчивым, зажимы уходят, а ум освобождается от повседневной тревожности.",
      body2:
        "Каждое занятие — это бережный внутренний диалог, преодоление внутреннего сопротивления и возвращение к гармонии в теплой атмосфере единомышленников.",
      quote:
        "«Мы создавали Balance не как обычный зал, а как безопасное убежище от городского шума, где каждый коврик — это личный остров тепла».",
      founder: "Мария Миронова, основательница студии Balance",
    },
    practices: {
      title: "Горячая йога: основа нашей студии",
      subtitle:
        "Специально выстроенная последовательность асан в микроклимате 38–40°C. Безопасно для суставов, эффективно для детокса и раскрытия возможностей тела.",
      learnMore: "Подробнее",
      viewAll: "Все практики",
    },
    benefits: {
      title: "Почему именно горячая йога",
      items: [
        {
          title: "Глубокая и безопасная растяжка",
          body: "В нагретом зале мышцы становятся податливыми за считанные минуты, сводя риск растяжений к минимуму.",
          icon: "flame",
        },
        {
          title: "Интенсивная детоксикация",
          body: "Обильное потоотделение очищает поры, ускоряет обмен веществ и освобождает организм от накопленных токсинов.",
          icon: "droplet",
        },
        {
          title: "Снижение уровня стресса",
          body: "Фокус на дыхании в тепле помогает отключить бесконечный мысленный шум и восстановить баланс нервной системы.",
          icon: "brain",
        },
        {
          title: "Мягкая кардионагрузка",
          body: "Сочетание статики и динамики в тепле тренирует сосуды и сердечную мышцу без резких скачков пульса.",
          icon: "heart",
        },
        {
          title: "Улучшение качества сна",
          body: "Глубокое расслабление после практики выравнивает циркадные ритмы и обеспечивает крепкий восстанавливающий сон.",
          icon: "moon",
        },
        {
          title: "Ощущение легкости и баланса",
          body: "После занятия уходят мышечные спазмы, а в теле сохраняется приятное тепло и легкость на весь день.",
          icon: "feather",
        },
      ],
    },
    teachers: {
      title: "Преподаватели",
      founder: "Основательница и ведущий инструктор",
      bio: "Мария практикует йогу более 7 лет, глубоко изучила методики горячей йоги и анатомию безопасного движения. Её цель — показать, как через тепло безопасно и с любовью раскрывать ресурсы тела.",
      credo: "«Слушайте своё тело, не спешите и позвольте теплу сделать свою работу».",
    },
    faq: {
      title: "Частые вопросы",
      items: [
        {
          q: "Подходит ли горячая йога новичкам?",
          a: "Да, абсолютно. Инструкторы всегда дают адаптации асан под разный уровень подготовки. Вы всегда можете отдохнуть в позе ребенка, когда это нужно.",
        },
        {
          q: "Что взять с собой на занятие?",
          a: "Легкую дышащую одежду (топ/майка, леггинсы или шорты), бутылку для воды и сменную обувь для студии. Коврики и большие полотенца мы предоставляем.",
        },
        {
          q: "Как подготовиться к первому классу?",
          a: "Пейте воду в течение дня. Последний прием пищи рекомендуется завершить за 2 часа до начала практики.",
        },
        {
          q: "Есть ли противопоказания?",
          a: "Острые воспалительные процессы, высокая температура, беременность и тяжелые сердечно-сосудистые заболевания требуют предварительной консультации врача.",
        },
      ],
    },
    pricing: {
      title: "Абонементы и цены",
      subtitle:
        "Прозрачные условия для новичков и регулярных практиков. Индивидуальные и групповые занятия горячей йогой в Одессе.",
      askPrice: "Записаться на занятие",
    },
    schedule: {
      title: "Расписание практик",
      subtitle: "Утренние, дневные и вечерние классы горячей йоги в Одессе.",
    },
    contacts: {
      title: "Локация и контакты",
      subtitle: "Одесса, ЖК «Одиссей». Теплое и заботливое пространство осознанной практики.",
      address: "Одесса, Люстдорфская дорога, 55К",
      phone: "Запись через Instagram Direct",
      instagram: "@yoga_balance_odessa",
      telegram: "Balance Hot Yoga",
      booking: "Написать в Direct",
    },
    booking: {
      title: "Запись на практику",
      subtitle: "Оставьте контактные данные — администратор свяжется с вами и забронирует коврик в нагретом зале.",
      name: "Ваше имя",
      contact: "Телефон или @instagram / telegram",
      practice: "Формат практики",
      time: "Удобное время",
      message: "Комментарий или пожелания",
      submit: "Забронировать место",
      success: "Спасибо! Открыт диалог со студией в Instagram.",
    },
    journal: {
      title: "Журнал о горячей йоге",
      subtitle: "Полезные статьи, рекомендации для новичков и знания о целительном воздействии тепла на организм.",
      readMore: "Читать статью",
    },
    cta: {
      title: "Почувствуйте силу тепла\nи внутреннего баланса",
      sub: "Запишитесь на свое первое занятие горячей йогой в Одессе уже сегодня.",
      book: "Записаться на практику",
      instagram: "Следить в Instagram",
    },
  },
};
