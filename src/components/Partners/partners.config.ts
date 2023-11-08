export interface PartnersConfig {
  [companyName: string]: PartnerData;
}

export interface PartnerData {
  description: string;
  url: string;
  btnText: string;
  imgSrcs: {
    first: string;
    second: string;
    third: string;
  };
  logoSrc: string;
}

export const partnersConfig: PartnersConfig = {
  SoftServe: {
    logoSrc: '/images/company-full-logos/softserve.svg',
    description:
      '<p>Українська ІТ-компанія, що працює у сфері розробки програмного забезпечення та надання консультаційних послуг.</p><br><p>Головні офіси компанії розташовані у Львові й Остіні (штат Техас, США), понад 10000 працівників працюють в офісах компанії в Європі, США, Канаді, Латинській Америці, Сінгапурі і Дубаї. SoftServe є однією з найбільших компаній-розробників програмного забезпечення у Центральній та Східній Європі та є другою найбільшою ІТ-компанією України за кількістю співробітників.</p>',
    url: 'https://jobs.dou.ua/companies/softserve/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/softserve/softserve_1.png',
      second: '/images/company-photos/softserve/softserve_2.png',
      third: '/images/company-photos/softserve/softserve_3.png',
    },
  },
  OKKO: {
    logoSrc: '/images/company-full-logos/okko.jpg',
    description:
      '<strong>ОККО</strong> — флагман холдингу OKKO GROUP. До складу компанії, окрім мережі автозаправних комплексів, входять стаціонарні та мобільні лабораторії контролю якості нафтопродуктів та найбільша в Україні мережа закладів харчування у дорозі, які працюють під брендами A la minute, Pasta Mia та Meiwei. Окрім цього, компанія займається постачанням природного газу та електроенергії.<br><br>Сьогодні ОККО входить у ТОП найкращих роботодавців країни та об\'єднує понад 10 000 працівників. "Для нас важливий твій професійний розвиток та комфорт на роботі і в команді, тож ми докладаємо зусиль, щоб нам разом було добре."',
    url: 'https://jobs.dou.ua/companies/okko-group/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '',
    },
  },
  'AVR Development': {
    logoSrc: '/images/company-full-logos/avr.jpg',
    description: 'Архітектурно-інженерна компанія у Львові. Створюють архітектуру в Україні',
    url: 'https://www.avr-development.com/',
    btnText: 'Перейти на сайт',
    imgSrcs: {
      first: '/images/company-photos/avr/avr_1.jpg',
      second: '/images/company-photos/avr/avr_2.jpg',
      third: '/images/company-photos/avr/avr_3.jpg',
    },
  },
  Infopulse: {
    logoSrc: '/images/company-full-logos/infopulse.png',
    description:
      '<p>Infopulse — одна з найбільших IT-компаній в Україні, заснована в 1991. Наша спільнота налічує понад 2000 спеціалістів в Україні, Польщі, Болгарії, Німеччині, Бразилії.</p><br><p>Маючи більш ніж 30-річний досвід в ІТ галузі, Infopulse співпрацює з 280+ клієнтами з понад 40 країн світу, серед них: BICS, BOSCH, Microsoft, OLX, Vodafone.</p><br><p>Компанія надає IT-сервіси широкого спектру: Software R&D, Application Management, Cloud & IT Operations, and Cybersecurity та інші.</p><br><p>Окрім комерційних проєктів, Infopulse реалізовує багато CSR ініціатив, спрямованих на підтримку здоров’я, освіту, інклюзивність, та часто залучає до таких проєктів студентів та просто ІТ-початківців. Компанія бере участь як у волонтерських ініціативах, так і допомагає нашим захисникам.</p>',
    url: 'https://jobs.dou.ua/companies/infopulse/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/infopulse/infopulse_1.jpg',
      second: '/images/company-photos/infopulse/infopulse_2.jpg',
      third: '/images/company-photos/infopulse/infopulse_3.jpg',
    },
  },
  Binance: {
    logoSrc: '/images/company-full-logos/binance.png',
    description:
      '<strong>Ми Binance</strong>, компанія, що стоїть за провідною світовою біржею криптовалют. За короткий 3 роки існування ми стали однією з найвпливовіших компаній у індустрії блокчейнів, і ми шукаємо нових талантів, які допоможуть нам розвиватися.<br><br>Наша мета полягає в тому, щоб подолати розрив між традиційним і криптовалютним фінансуванням, створюючи продукти та послуги, які збільшують глобальну свободу грошей і відповідають потребам нашої глобальної бази користувачів.',
    url: 'https://jobs.dou.ua/companies/binance/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '',
    },
  },
  ItStep: {
    logoSrc: '/images/company-full-logos/it-step.png',
    description:
      "IT Step Academy - це офлайн та онлайн ІТ-навчання для кожного 💫<br><br>Професійна освіта у двох найбільш затребуваних напрямках: Розробка програмного забезпечення<br><br>Комп'ютерна графіка та дизайн<br><br>Після завершення навчання студенти IT Step отримують міжнародні сертифікати сміливо йти на співбесіду 💼👌<br><br>В Академії IT Step також є вузькопрофільні курси за такими напрямками: Front-End, UI/UX design, Інтернет-маркетинг, 3Ds max, Maya, QA - тестувальник, DevOps, Python, FULL STACK. <br><br>Нова професія «з нуля» - це можливо разом із IT Step! 💫",
    url: 'https://jobs.dou.ua/companies/it-step-academy-lviv/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/itstep/itstep_1.jpg',
      second: '/images/company-photos/itstep/itstep_2.jpg',
      third: '/images/company-photos/itstep/itstep_3.jpg',
    },
  },
  'Keel Solution': {
    logoSrc: '/images/company-full-logos/keel.png',
    description:
      'Keel - це міжнародна консалтингова інженерна компанія, яка надає послуги в сфері управління даними основних засобів та фондів великих промислових підприємств.<br><br>Серед наших послуг:<br><br>- Аналітика технічних даних та інформації промислових підприємств.<br><br>- Розробка технологічних рішень по впровадженню систем автоматизованого обліку та контролю основних засобів та фондів промислових підприємств.<br><br>- Оновлення та перевірка технічної документації на відповідність міжнародним стандартам.<br><br>- Впровадження міжнародних стандартів по управлінню активами та основними засобами промислових підприємств.',
    url: 'https://jobs.dou.ua/companies/keel-solution/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/keel/keel_solution_1.jpg',
      second: '/images/company-photos/keel/keel_solution_2.jpg',
      third: '/images/company-photos/keel/keel_solution_3.jpg',
    },
  },
  Leobit: {
    logoSrc: '/images/company-full-logos/leobit.jpg',
    description:
      'Leobit – львівська IT компанія, що має понад 9 років досвіду у сфері розробки, розвитку і підтримки програмних рішень, які сприяють росту бізнесів клієнтів у США та Європі.<br></br>3 місце у рейтингу роботодавців Львова за версією DOU, 170+ експертів у своїй справі, 150+ реалізованих проєктів — це все Leobit. Компанія спеціалізується на .NET, Angular, React, Ruby, iOS, Android, PHP та інших веб і мобільних технологіях.<br></br>Ми переконані, що навчатись в університеті та одночасно працювати – це реалістично та виправдано, саме тому створили потужну менторську програму, яка триває 3-6 місяців та підлаштована згідно з навчальним графіком студента. Приєднуйтесь в наш телеграм та слідкуйте за вакансіями та новинами компанії там.<br><br><a href="https://t.me/leobitcareer" target="_blank" style="font-weight: 700;">Наш телеграм</a>',
    url: 'https://jobs.dou.ua/companies/leobit/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/leobit/leobit_1.jpg',
      second: '/images/company-photos/leobit/leobit_2.jpg',
      third: '/images/company-photos/leobit/leobit_3.jpg',
    },
  },
  OTAKOYI: {
    logoSrc: '/images/company-full-logos/otakoyi.jpg',
    description:
      "OTAKOYI - це інноваційна технологічна компанія, яка спеціалізується на розробці програмного забезпечення та мобільних додатків. Ми об'єднуємо сучасні технології з креативним підходом відповідно до побажань та запитів наших клієнтів з безліч індустрій: Legal, Retail, Healthcare, Education, Real Estate, E-commerce та Fintech. <br><br>Наша мета - розробка інноваційних рішень, які сприяють росту бізнесу і полегшують життя користувачів. Особливістю та перевагою компанії є те, що ми забезпечуємо виконання усіх етапів розробки продукту: від ідеї, дизайну, UI/UX дизайну до програмного забезпечення та релізу.<br><br>За 12 років існування, ми запустили понад 150 проєктів та співпрацювали з компаніями з понад 30 країн та зросли до 100+ працівників.<br><br>У своєму портфоліо OTAKOYI має такі світові компанії як: KIA, Stripe, Philip Morris, Kraft Heinz, Housing Denmark, Blockchance, Knignt Frank, Emirates Bank, Lenovo та багато інших.",
    url: 'https://jobs.dou.ua/companies/otakoyi/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/otakoyi/otakoyi_1.jpg',
      second: '/images/company-photos/otakoyi/otakoyi_2.jpg',
      third: '/images/company-photos/otakoyi/otakoyi_3.jpg',
    },
  },
  SiTime: {
    logoSrc: '/images/company-full-logos/sitime.png',
    description:
      'SiTime є державною компанією зі штаб-квартирою в Санта-Кларі, Каліфорнія, яка розташована по всьому світу: Нідерланди, Японія, Малайзія, Тайвань, Франція, Німеччина, Фінляндія та Україна.<br><br>Ми є провідним постачальником кремнієвих рішень синхронізації, таких як осцилятори, резонатори та інтегральні схеми тактового генератора («IC»), які використовуються в електронних системах. Наші продукти відрізняються високою продуктивністю та надійністю, можливістю програмування, малими розмірами та низьким енергоспоживанням.<br><br>У SiTime наша команда інноваторів пристрасно та невпинно руйнує 70-річну індустрію кварцових хронометрів. Наша мета зрозуміла – використовувати переваги кремнію та створювати рішення, які забезпечують найвищу цінність для клієнтів.',
    url: 'https://jobs.dou.ua/companies/sitime-corp/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '',
      second: '',
      third: '',
    },
  },
  Sombra: {
    logoSrc: '/images/company-full-logos/sombra.png',
    description:
      "<strong>Що потрібно знати про Sombra?</strong><br><br><strong>Sombra</strong> - це українська сервісна компанія-розробник програмного забезпечення.<br><br><strong>Що робимо:</strong> UI/UX, Innovative Web Application Development, Mobile App Development, DevOps & Cloud, Blockchain, IoT, AI<br><br><strong>Працюємо</strong> з клієнтами з США, Канади та Європи. <br><br><strong>Стек технологій:</strong> Java, Angular,  React, Vue, NodeJS, AQA, DevOps, .NET<br><br><strong>Компанія</strong> поєднує глибоку технологічну експертизу з людськими цінностями, серед яких: проактивність, робити замовника щасливим, зміни, відкриті та чесні взаємовідносини, саморозвиток.<br><br><strong>Вкладаємо</strong> всі свої доступні ресурси у нашу перемогу, бо вважаємо своїм обов'язком забезпечити якісний бізнес-результат, який допоможе працювати економіці України як сьогодні, так і після нашої перемоги і завжди!",
    url: 'https://jobs.dou.ua/companies/sombra/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/sombra/sombra_3.jpg',
      second: '/images/company-photos/sombra/sombra_2.jpg',
      third: '/images/company-photos/sombra/sombra_1.jpg',
    },
  },
  TeamVoy: {
    logoSrc: '/images/company-full-logos/teamvoy.jpg',
    description:
      '<strong>Teamvoy</strong> - це українська компанія, що надає послуги з розробки інноваційних програмних рішень. У нас команда професіоналів, які націлені на надання високоякісного сервісу та створення тривалих стосунків із клієнтами.<br><br>Наш офіс знаходиться у Львові, а клієнти є з усього світу (з Європи та США, Австралії та Гонконгу). Наша експертиза охоплює широкий спектр технологій, включаючи веб- та мобільну розробку, блокчейн, Інтернет речей (ІоТ) та охорону здоров\'я.<br><br>Давайте працювати разом. Наші <a href="https://teamvoy.com/careers/" target="_blank" style="font-weight: 700">вакансії тут</a>, а написати нам: <a href="mailto:contact@teamvoy.com" target="_blank" style="font-weight: 700">contact@teamvoy.com.</a>',
    url: 'https://jobs.dou.ua/companies/teamvoy/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/teamvoy/teamvoy_1.jpg',
      second: '/images/company-photos/teamvoy/teamvoy_2.jpg',
      third: '/images/company-photos/teamvoy/teamvoy_3.jpg',
    },
  },
  Tsukat: {
    logoSrc: '/images/company-full-logos/tsukat.jpg',
    description:
      '<strong>tsukat</strong> — XR та AI студія, що створює імерсивні рішення для бізнесу. За понад 7 років роботи ми об’єднали під своїм дахом крутих та досвідчених спеціалістів, які прагнуть розвиватися, навчати, та створювати незабутні експіріенси. Завдяки динамічному розвитку сфер XR, AI та Metaverse перед розробниками виникають нові завдання та виклики, а також можливість для розвитку та росту.<br><br>В <strong>tsukat</strong> тебе чекають цікаві та неординарні проєкти, класний колектив, професійний менеджмент, техліди з більше як 10 роками досвіду, зручний офіс (з безлімітним запасом кави, печивка, тостів із різними намазками), система заохочень tsukat coins, та тімбілдинги.<br><br>Переходь за посиланнями, щоб дізнатись про нас більше:<br><a href="https://tsukat.com/" target="_blank" style="font-weight: 700">Наш сайт</a><br><a href="https://www.instagram.com/tsukatstudio/" target="_blank" style="font-weight: 700">Інстаграм</a>',
    url: 'https://jobs.dou.ua/companies/tsukat/',
    btnText: 'Перейти на DOU',
    imgSrcs: {
      first: '/images/company-photos/tsukat/tsukat_1.jpg',
      second: '/images/company-photos/tsukat/tsukat_2.jpg',
      third: '/images/company-photos/tsukat/tsukat_3.jpg',
    },
  },
};

export const companyLogosSrc = ['/images/company-mini-logos/softserve.png'];
