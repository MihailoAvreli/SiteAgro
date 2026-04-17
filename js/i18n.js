/**
 * РАЗЪЁМАГРО — Internationalization
 * Переключение языков RU/EN
 */

const i18n = {
    // Russian translations
    ru: {
        logo: 'РазъёмАгро',
        nav: {
            problem: 'Проблема',
            solution: 'Решение',
            howItWorks: 'Как работает',
            advantages: 'Преимущества',
            production: 'Производство',
            commercialization: 'Рынок',
            team: 'Команда',
            contacts: 'Контакты'
        },
        hero: {
            title: 'Разъёмное соединение, которое меняет сельхозмашиностроение',
            subtitle: 'Надёжнее. Дешевле в производстве. Быстрее в сборке.',
            btnProduct: 'Смотреть продукт',
            btnQuote: 'Получить КП',
            scroll: 'Листайте вниз'
        },
        problem: {
            label: 'Проблема',
            title: 'Почему существующие соединения не работают',
            card1: {
                title: 'Ломаются в поле',
                desc: 'Традиционные соединения выходят из строя при вибрациях и нагрузках сельхозмашин'
            },
            card2: {
                title: 'Требуют фрезеровки',
                desc: 'Сложные фрезерные операции увеличивают стоимость и время производства'
            },
            card3: {
                title: 'Точная подгонка',
                desc: 'Необходимость точной центровки оси усложняет сборку и требует квалификации'
            },
            card4: {
                title: 'Малая площадь контакта',
                desc: 'Ограниченная площадь сопряжения снижает надёжность и ресурс'
            }
        },
        solution: {
            label: 'Наше решение',
            title: 'Эксцентричная кольцевая канавка + оседержатель',
            text: 'Инновационная конструкция разъёмного соединения на основе оси с эксцентричной кольцевой канавкой и специального оседержателя позволяет быстро и надёжно фиксировать детали без точной центровки и сложной фрезерной обработки.',
            stat1: 'больше площадь контакта',
            stat2: 'экономия производства'
        },
        howItWorks: {
            label: 'Принцип работы',
            title: 'Простая сборка за 4 шага',
            step1: {
                title: 'Установка оси',
                desc: 'Ось с эксцентричной канавкой вставляется в отверстие без точной центровки'
            },
            step2: {
                title: 'Кольцевая канавка',
                desc: 'Эксцентричная канавка создаёт дополнительную площадь контакта'
            },
            step3: {
                title: 'Оседержатель',
                desc: 'Специальный оседержатель обеспечивает надёжную фиксацию'
            },
            step4: {
                title: 'Фиксация',
                desc: 'Готовое соединение готово к эксплуатации в полевых условиях'
            }
        },
        advantages: {
            label: 'Преимущества',
            title: 'Почему наше решение лучше',
            card1: {
                title: 'Увеличенная площадь контакта',
                desc: 'В 3,5 раза больше площади сопряжения по сравнению с традиционными соединениями — это значительно повышает надёжность и ресурс'
            },
            card2: {
                title: 'Без точной установки оси',
                desc: 'Эксцентричная канавка компенсирует отклонения — не нужна сложная центровка при сборке'
            },
            card3: {
                title: 'Исключение фрезеровки',
                desc: 'Только токарная обработка — снижение себестоимости и трудозатрат на 15–20%'
            }
        },
        production: {
            label: 'Производство',
            title: 'Мы упростили производство',
            text: 'Токарная обработка вместо сложной фрезеровки. Это сокращает время изготовления, снижает требования к оборудованию и квалификации оператора, а главное — уменьшает себестоимость детали на 15–20%.',
            badge: 'Только токарные операции'
        },
        liveModel: {
            label: 'Опытный образец',
            title: 'Опытный образец в живую',
            subtitle: 'Посмотрите как выглядит готовое разъёмное соединение в реальности'
        },
        productAction: {
            label: 'Применение',
            title: 'Работает в реальных условиях',
            text: 'Разъёмное соединение проектируется для эксплуатации в тяжёлых полевых условиях: пыль, вибрации, высокие нагрузки. Конструкция обеспечивает надёжную работу комбайнов, тракторов и почвообрабатывающей техники.'
        },
        commercialization: {
            label: 'Рынок',
            title: 'Коммерциализация',
            applications: {
                title: 'Области применения',
                1: 'Сельхозмашиностроение — комбайны, тракторы, почвообрабатывающая техника',
                2: 'Строительная и дорожная техника',
                3: 'Автомобильная промышленность',
                4: 'Промышленное оборудование'
            },
            clients: {
                title: 'Потенциальные клиенты',
                1: 'Производители сельхозмашин (Ростсельмаш, КАМАЗ, МТЗ)',
                2: 'Заводы строительной техники',
                3: 'Автокомпонентные предприятия',
                4: 'Сервисные центры и дилеры'
            },
            stat1: 'снижение себестоимости',
            stat2: 'надёжнее',
            stat3: 'экономия трудозатрат'
        },
        team: {
            label: 'О проекте',
            title: 'Команда',
            name: 'Иванов Михаил Сергеевич',
            role: 'Генеральный директор',
            bio: 'Студент 3 курса направления «Агроинженерия», Ставропольский ГАУ.',
            status: 'Статус: разработка MVP, подготовка к испытаниям'
        },
        cta: {
            title: 'Интересует сотрудничество?',
            text: 'Свяжитесь для получения коммерческого предложения, технической документации или обсуждения пилотного внедрения.',
            btnPrimary: 'Получить КП в Telegram'
        },
        contacts: {
            telegram: 'Telegram',
            whatsapp: 'WhatsApp',
            email: 'Email',
            max: 'MAX'
        },
        partners: {
            label: 'Поддержка',
            title: 'Наши партнёры',
            support: 'Проект создан при поддержке Федерального государственного бюджетного учреждения «Фонд содействия развитию малых форм предприятий в научно-технической сфере» в рамках программы «Студенческий стартап» федерального проекта «Платформа университетского технологического предпринимательства»'
        },
        footer: {
            copy: '© 2025 РазъёмАгро. Все права защищены.',
            status: 'Патентные заявки поданы'
        }
    },

    // English translations
    en: {
        logo: 'RazemAgro',
        nav: {
            problem: 'Problem',
            solution: 'Solution',
            howItWorks: 'How It Works',
            advantages: 'Advantages',
            production: 'Production',
            commercialization: 'Market',
            team: 'Team',
            contacts: 'Contacts'
        },
        hero: {
            title: 'Detachable Connection That Transforms Agricultural Machinery',
            subtitle: 'More reliable. Cheaper to produce. Faster to assemble.',
            btnProduct: 'View Product',
            btnQuote: 'Get Quote',
            scroll: 'Scroll down'
        },
        problem: {
            label: 'The Problem',
            title: 'Why Existing Connections Fail',
            card1: {
                title: 'Break in the Field',
                desc: 'Traditional connections fail under vibrations and loads of agricultural machinery'
            },
            card2: {
                title: 'Require Milling',
                desc: 'Complex milling operations increase production cost and time'
            },
            card3: {
                title: 'Precise Alignment',
                desc: 'Need for precise shaft alignment complicates assembly and requires expertise'
            },
            card4: {
                title: 'Small Contact Area',
                desc: 'Limited mating area reduces reliability and service life'
            }
        },
        solution: {
            label: 'Our Solution',
            title: 'Eccentric Annular Groove + Shaft Holder',
            text: 'Innovative detachable connection design based on a shaft with eccentric annular groove and special shaft holder allows quick and reliable fixation of parts without precise alignment and complex milling.',
            stat1: 'more contact area',
            stat2: 'production savings'
        },
        howItWorks: {
            label: 'How It Works',
            title: 'Simple Assembly in 4 Steps',
            step1: {
                title: 'Install Shaft',
                desc: 'Shaft with eccentric groove inserts into the hole without precise alignment'
            },
            step2: {
                title: 'Annular Groove',
                desc: 'Eccentric groove creates additional contact area'
            },
            step3: {
                title: 'Shaft Holder',
                desc: 'Special shaft holder ensures reliable fixation'
            },
            step4: {
                title: 'Fixation',
                desc: 'Ready connection for operation in field conditions'
            }
        },
        advantages: {
            label: 'Advantages',
            title: 'Why Our Solution Is Better',
            card1: {
                title: 'Increased Contact Area',
                desc: '3.5 times more mating area compared to traditional connections — significantly improves reliability and service life'
            },
            card2: {
                title: 'No Precise Alignment',
                desc: 'Eccentric groove compensates for deviations — no complex alignment needed during assembly'
            },
            card3: {
                title: 'No Milling Required',
                desc: 'Only turning operations — reduces production cost and labor by 15-20%'
            }
        },
        production: {
            label: 'Production',
            title: 'We Simplified Manufacturing',
            text: 'Turning instead of complex milling. This reduces manufacturing time, lowers equipment requirements and operator qualification, and most importantly — reduces part cost by 15-20%.',
            badge: 'Turning operations only'
        },
        liveModel: {
            label: 'Prototype',
            title: 'Live Prototype Model',
            subtitle: 'See what the finished detachable connection looks like in reality'
        },
        productAction: {
            label: 'Application',
            title: 'Works in Real Conditions',
            text: 'The detachable connection is designed for operation in harsh field conditions: dust, vibrations, high loads. The design ensures reliable operation of combines, tractors and tillage equipment.'
        },
        commercialization: {
            label: 'Market',
            title: 'Commercialization',
            applications: {
                title: 'Application Areas',
                1: 'Agricultural machinery — combines, tractors, tillage equipment',
                2: 'Construction and road machinery',
                3: 'Automotive industry',
                4: 'Industrial equipment'
            },
            clients: {
                title: 'Potential Clients',
                1: 'Agricultural machinery manufacturers (Rostselmash, KAMAZ, MTZ)',
                2: 'Construction equipment factories',
                3: 'Auto component enterprises',
                4: 'Service centers and dealers'
            },
            stat1: 'cost reduction',
            stat2: 'more reliable',
            stat3: 'labor savings'
        },
        team: {
            label: 'About Project',
            title: 'Team',
            name: 'Mikhail Ivanov',
            role: 'General Director',
            bio: '3rd year student in Agricultural Engineering, Stavropol State Agrarian University.',
            status: 'Status: MVP development, preparing for trials'
        },
        cta: {
            title: 'Interested in Collaboration?',
            text: 'Contact us for a commercial proposal, technical documentation or to discuss pilot implementation.',
            btnPrimary: 'Get Quote on Telegram'
        },
        contacts: {
            telegram: 'Telegram',
            whatsapp: 'WhatsApp',
            email: 'Email',
            max: 'MAX'
        },
        partners: {
            label: 'Support',
            title: 'Our Partners',
            support: 'The project was created with the support of the Federal State Budgetary Institution "Fund for the Promotion of the Development of Small Enterprises in the Scientific and Technical Sphere" within the framework of the "Student Startup" program of the federal project "University Technological Entrepreneurship Platform"'
        },
        footer: {
            copy: '© 2025 RazemAgro. All rights reserved.',
            status: 'Patent applications filed'
        }
    }
};

// Current language
let currentLang = 'ru';

/**
 * Set language and update all translations
 */
function setLanguage(lang) {
    currentLang = lang;
    
    // Update active state in switcher
    document.querySelectorAll('.lang-option').forEach(el => {
        el.classList.toggle('active', el.dataset.lang === lang);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        const translation = getTranslation(key);
        if (translation) {
            // Handle different element types
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
    
    // Store preference
    localStorage.setItem('razemagro-lang', lang);
}

/**
 * Get translation by key path (e.g., "hero.title")
 */
function getTranslation(key) {
    const keys = key.split('.');
    let value = i18n[currentLang];
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return null;
        }
    }
    
    return value;
}

/**
 * Initialize i18n
 */
function initI18n() {
    // Load saved preference or default to Russian
    const savedLang = localStorage.getItem('razemagro-lang');
    if (savedLang && (savedLang === 'ru' || savedLang === 'en')) {
        currentLang = savedLang;
    }
    
    // Apply initial translations
    setLanguage(currentLang);
    
    // Setup language switcher
    document.querySelectorAll('.lang-option').forEach(el => {
        el.addEventListener('click', () => {
            const lang = el.dataset.lang;
            if (lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initI18n);
