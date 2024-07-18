import { atom } from 'recoil';

export const formState = atom({
  key: 'formState',
  default: {
    company: '',
    jobTitle: '',
    isStudent: null,
    eventSource: null
  }
});