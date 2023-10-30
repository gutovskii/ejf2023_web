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
    firstFloor: [
      {
        companyName: "SoftServe",
        eventName: "Super Event d1f1",
        eventDescription:
          "Lorem ipsum dolor sit amet asdf asdf  asdf  sdfd fd f df fa sfd asd io vivat",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2003.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d1f1",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "112 Авдиторія",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2003.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d1f1",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2200.13:45"),
      },
    ],
    secondFloor: [
      {
        companyName: "Sigma Comp",
        eventName: "Super Event d1f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "Сцена",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2203.13:45"),
        isOnStage: true,
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d1f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "Сцена",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2203.13:45"),
        isOnStage: true,
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d1f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2200.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d1f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2200.13:45"),
      },
    ],
  },
  secondDay: {
    firstFloor: [
      {
        companyName: "SoftServe",
        eventName: "Super Event d2f1",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2003.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d2f1",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2200.13:45"),
      },
    ],
    secondFloor: [
      {
        companyName: "SoftServe",
        eventName: "Super Event d2f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2003.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d2f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2200.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d2f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2200.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d2f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "SoftServe",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2003.13:45"),
      },
      {
        companyName: "SoftServe",
        eventName: "Super Event d2f2",
        eventDescription: "Lorem ipsum dolor sit amet",
        place: "Сцена",
        startDate: new Date("01.12.2003.13:41"),
        endDate: new Date("02.12.2003.13:45"),
        isOnStage: true,
      },
    ],
  },
};
