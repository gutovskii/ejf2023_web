export interface SpeakerData {
  name: string;
  position: string;
  characteristics: string[];
  imgSrc: string;
}

export const speakersConfig: SpeakerData[] = [
  {
    name: 'Сергій Харитонов',
    position: 'CEO',
    characteristics: [
      'Засновник та CEO аутсорсингової компанії JetSoftPro',
      'Понад 30 років досвіду в IT індустрії',
    ],
    imgSrc: '/images/speakers/Kharytonov.png',
  },
  {
    name: 'Володимир Салига',
    position: 'Project Manager',
    characteristics: [
      'Senior Project Manager у SoftServe',
      '6 років досвіду в проєктному менеджменті',
    ],
    imgSrc: '/images/speakers/Salyha.png',
  },
  {
    name: 'Віолетта Хариш',
    position: 'Talent Delivery Specialist',
    characteristics: [
      'Senior Talent Delivery Specialist в Intellias',
      '6 років досвіду в IT рекрутингу',
    ],
    imgSrc: '/images/speakers/Kharysh.png',
  },
];
