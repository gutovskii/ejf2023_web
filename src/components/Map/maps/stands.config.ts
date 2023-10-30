import { StandProps } from '../Laptop/Map/Stand';
import { timetableConfig } from '../Laptop/Timetable/timetable.config';

interface StandConfig {
  top: string;
  left: string;
  standProps: Omit<StandProps, 'device'>;
}

const isStandActive = (
  companyName: string,
  day: 'firstDay' | 'secondDay',
  floor: 'firstFloor' | 'secondFloor',
) => {
  const now = new Date();
  const companyEvents = timetableConfig[day][floor].filter((e) => e.companyName === companyName);
  const isActive = companyEvents.some((e) => now > e.startDate && now < e.endDate);
  return isActive;
};

export const standsLaptopDay1Floor1Config: StandConfig[] = [
  {
    top: '10%',
    left: '10%',
    standProps: {
      text: 'SoftServe',
      size: 'lg',
      rotate: '0',
      isActive: isStandActive('SoftServe', 'firstDay', 'firstFloor'),
    },
  },
];

export const standsLaptopDay1Floor2Config: StandConfig[] = [
  {
    top: '15%',
    left: '15%',
    standProps: {
      text: 'SoftServe',
      size: 'lg',
      rotate: '0',
      isActive: isStandActive('SoftServe', 'firstDay', 'secondFloor'),
    },
  },
];

export const standsLaptopDay2Floor1Config: StandConfig[] = [
  {
    top: '15%',
    left: '15%',
    standProps: {
      text: 'SoftServe',
      size: 'lg',
      rotate: '0',
      isActive: isStandActive('SoftServe', 'secondDay', 'firstFloor'),
    },
  },
];

export const standsLaptopDay2Floor2Config: StandConfig[] = [
  {
    top: '20%',
    left: '20%',
    standProps: {
      text: 'SoftServe',
      size: 'lg',
      rotate: '0',
      isActive: isStandActive('SoftServe', 'secondDay', 'secondFloor'),
    },
  },
];

export const standsMobileDay1Floor1Config: StandConfig[] = [
  {
    top: '20%',
    left: '20%',
    standProps: {
      text: 'SoftServe',
      size: 'lg',
      rotate: '0',
      isActive: isStandActive('SoftServe', 'firstDay', 'firstFloor'),
    },
  },
];

export const standsMobileDay1Floor2Config: StandConfig[] = [
  {
    top: '15%',
    left: '15%',
    standProps: {
      text: 'Sigma Comp',
      size: 'sm',
      rotate: '-90',
      isActive: isStandActive('Sigma Comp', 'firstDay', 'secondFloor'),
    },
  },
];

export const standsMobileDay2Floor1Config: StandConfig[] = [
  {
    top: '10%',
    left: '10%',
    standProps: {
      text: 'SoftServe',
      size: 'sm',
      rotate: '90',
      isActive: isStandActive('SoftServe', 'secondDay', 'firstFloor'),
    },
  },
];

export const standsMobileDay2Floor2Config: StandConfig[] = [
  {
    top: '5%',
    left: '5%',
    standProps: {
      text: 'Sigma Comp',
      size: 'lg',
      rotate: '0',
      isActive: isStandActive('Sigma Comp', 'secondDay', 'secondFloor'),
    },
  },
];
