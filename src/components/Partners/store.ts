import { Action, createHook, createStore } from 'react-sweet-state';

export type State = {
  currentCompany: string;
  day: number;
};
type Actions = typeof actions;

const initialState: State = {
  currentCompany: 'SoftServe',
  day: 1,
};

const actions = {
  chooseCompany:
    (companyName: string): Action<State> =>
    ({ setState }) => {
      setState({
        currentCompany: companyName,
      });
    },
  changeDay:
    (day: number): Action<State> =>
    ({ setState }) => {
      setState({
        day,
      });
    },
};

const Store = createStore<State, Actions>({
  initialState,
  actions,
});

export const useStore = createHook(Store);
