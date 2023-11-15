export type TimetableItemConfig = {
  companyName: string;
  eventName: string;
  eventDescription: string;
  place: string;
  startDate: Date;
  endDate: Date;
  isOnStage?: boolean;
};

export const timetableConfig: {
  firstDay: {
    firstFloor: TimetableItemConfig[];
    secondFloor: TimetableItemConfig[];
  };
  secondDay: {
    firstFloor: TimetableItemConfig[];
    secondFloor: TimetableItemConfig[];
  };
} = {
  firstDay: {
    firstFloor: [],
    secondFloor: [
      {
        companyName: 'BEST Lviv',
        eventName: 'Відкриття',
        eventDescription: "Початок Інженерного Ярмарку Кар'єри",
        place: '4 корпус НУЛП',
        startDate: new Date('11.15.2023.10:00'),
        endDate: new Date('11.15.2023.10:30'),
      },
      {
        companyName: 'AVR Development',
        eventName: 'Виступ на сцені AVR Development',
        eventDescription: '',
        place: 'Сцена',
        startDate: new Date('11.15.2023.10:30'),
        endDate: new Date('11.15.2023.11:00'),
        isOnStage: true,
      },
      {
        companyName: 'ОККО',
        eventName: 'Воркшоп ОККО',
        eventDescription: 'Як розвивати критичне мислення у турбулентні часи?',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.15.2023.11:00'),
        endDate: new Date('11.15.2023.11:45'),
      },
      {
        companyName: 'Sombra',
        eventName: 'Виступ на сцені Sombra',
        eventDescription: 'Можливості перед вами: Де шукати і як використовувати їх',
        place: 'Сцена',
        startDate: new Date('11.15.2023.11:45'),
        endDate: new Date('11.15.2023.12:15'),
        isOnStage: true,
      },
      {
        companyName: 'OKKO, AVR Development',
        eventName: 'Тестові співбесіди від OKKO та AVR Development',
        eventDescription: '',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.15.2023.12:15'),
        endDate: new Date('11.15.2023.12:45'),
      },
      {
        companyName: 'BEST Lviv',
        eventName: 'Обід',
        eventDescription: 'Перерва',
        place: '4 Корпус НУЛП',
        startDate: new Date('11.15.2023.12:45'),
        endDate: new Date('11.15.2023.13:30'),
      },
      {
        companyName: 'Binance',
        eventName: 'Воркшоп Binance',
        eventDescription: 'WEB3 та Блокчейн або світ повний можливостей для студентів',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.15.2023.13:30'),
        endDate: new Date('11.15.2023.14:15'),
      },
      {
        companyName: 'Спікер',
        eventName: 'Лекція: Сергій Харитонов',
        eventDescription: 'ІТ ринок України 2024: чого очікувати?',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.15.2023.14:30'),
        endDate: new Date('11.15.2023.15:30'),
      },
      {
        companyName: 'Спікер',
        eventName: 'Лекція: Володимир Салига',
        eventDescription: 'Цінність навичок проектного менеджменту в щоденному житті',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.15.2023.15:45'),
        endDate: new Date('11.15.2023.16:45'),
      },
      {
        companyName: 'BEST Lviv',
        eventName: 'Закриття',
        eventDescription: 'Кінець першого дня',
        place: '4 корпус НУЛП',
        startDate: new Date('11.15.2023.17:00'),
        endDate: new Date('11.15.2023.17:00'),
      },
    ],
  },
  secondDay: {
    firstFloor: [],
    secondFloor: [
      {
        companyName: 'BEST Lviv',
        eventName: 'Відкриття',
        eventDescription: 'Початок другого дня',
        place: '4 корпус НУЛП',
        startDate: new Date('11.16.2023.10:00'),
        endDate: new Date('11.16.2023.10:30'),
      },
      {
        companyName: 'AVR Development',
        eventName: 'Воркшоп AVR Development',
        eventDescription: '',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.16.2023.11:00'),
        endDate: new Date('11.16.2023.11:45'),
      },
      {
        companyName: 'Спікер',
        eventName: 'Лекція: Віолетта Хариш',
        eventDescription: 'Як шукати роботу в ІТ та аналізувати ринок в умовах війни',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.16.2023.11:45'),
        endDate: new Date('11.16.2023.12:45'),
      },
      {
        companyName: 'BEST Lviv',
        eventName: 'Обід',
        eventDescription: 'Перерва',
        place: '4 корпус НУЛП',
        startDate: new Date('11.16.2023.12:45'),
        endDate: new Date('11.16.2023.13:30'),
      },
      {
        companyName: 'OKKO',
        eventName: 'Виступ на сцені ОККО',
        eventDescription: 'Сучасні технології та прогресивні рішення',
        place: 'Сцена',
        startDate: new Date('11.16.2023.13:30'),
        endDate: new Date('11.16.2023.13:45'),
        isOnStage: true,
      },
      {
        companyName: 'BEST Lviv',
        eventName: 'Квест Case Study',
        eventDescription: '',
        place: '2ий поверх 4ого корпусу НУЛП',
        startDate: new Date('11.16.2023.14:00'),
        endDate: new Date('11.16.2023.16:20'),
      },
      {
        companyName: 'OKKO, AVR Development',
        eventName: 'Тестові співбесіди',
        eventDescription: 'Співбесіди від OKKO та AVR Development',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.16.2023.16:20'),
        endDate: new Date('11.16.2023.17:00'),
      },
      {
        companyName: 'BEST Lviv',
        eventName: 'Офіційне закриття',
        eventDescription: 'Закриття + результати збору-розіграшу',
        place: '209 авдиторія 4 н.к.',
        startDate: new Date('11.16.2023.17:00'),
        endDate: new Date('11.16.2023.17:00'),
      },
    ],
  },
};
