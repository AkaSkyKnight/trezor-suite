import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { SUITE, ROUTER, STORAGE } from '@suite-actions/constants';
import routerReducer from '@suite-reducers/routerReducer';
import suiteReducer from '@suite-reducers/suiteReducer';
import modalReducer from '@suite-reducers/modalReducer';
import analyticsReducer from '@suite-reducers/analyticsReducer';
import * as routerActions from '@suite-actions/routerActions';
import suiteMiddleware from '@suite-middlewares/suiteMiddleware';

import { Action } from '@suite-types';

jest.mock('next/router', () => {
    return {
        __esModule: true, // this property makes it work
        default: {
            push: () => {},
            pathname: '/',
        },
    };
});

type SuiteState = ReturnType<typeof suiteReducer>;
type RouterState = ReturnType<typeof routerReducer>;

export const getInitialState = (router?: RouterState, suite?: Partial<SuiteState>) => {
    return {
        router: {
            ...routerReducer(undefined, { type: 'foo' } as any),
            ...router,
        },
        suite: {
            ...suiteReducer(undefined, { type: 'foo' } as any),
            ...suite,
        },
        modal: modalReducer(undefined, { type: 'foo' } as any),
        analytics: analyticsReducer(undefined, { type: 'foo' } as any),
    };
};

type State = ReturnType<typeof getInitialState>;

const initStore = (state: State) => {
    const mockStore = configureStore<State, Action>([thunk, suiteMiddleware]);
    const store = mockStore(state);
    store.subscribe(() => {
        const action = store.getActions().pop();
        const { suite, router } = store.getState();
        store.getState().suite = suiteReducer(suite, action);
        store.getState().router = routerReducer(router, action);

        // add action back to stack
        store.getActions().push(action);
    });
    return store;
};

describe('suite middleware', () => {
    describe('dispatch SUITE.APP_CHANGE action', () => {
        it('dispatch if prevApp !== nextApp', () => {
            const store = initStore(
                getInitialState({
                    url: '/',
                    pathname: '/',
                    hash: undefined,
                    app: 'unknown',
                    params: undefined,
                    route: undefined,
                }),
            );
            store.dispatch({
                type: ROUTER.LOCATION_CHANGE,
                url: '/',
            });
            expect(store.getActions()).toEqual([
                { type: SUITE.APP_CHANGED, payload: 'root' },
                { type: ROUTER.LOCATION_CHANGE, url: '/' },
            ]);
        });

        it('do not dispatch if prevApp === nextApp', () => {
            const store = initStore(
                getInitialState({
                    url: '/onboarding',
                    pathname: '/',
                    hash: undefined,
                    app: 'onboarding',
                    params: undefined,
                    route: {
                        name: 'onboarding-index',
                        pattern: '/onboarding',
                        app: 'onboarding',
                        isModal: true,
                        params: ['cancelable'],
                    },
                }),
            );
            store.dispatch({
                type: ROUTER.LOCATION_CHANGE,
                url: '/onboarding',
            });
            expect(store.getActions()).toEqual([
                { type: ROUTER.LOCATION_CHANGE, url: '/onboarding' },
            ]);
        });
    });

    describe('redirection on initial run', () => {
        it('if initialRun is true, should redirect to welcome screen after STORAGE.LOADED action', () => {
            const goto = jest.spyOn(routerActions, 'goto');
            // eslint-disable-next-line global-require
            require('next/router').default.pathname = '/wallet';

            const store = initStore(getInitialState());

            store.dispatch({
                type: STORAGE.LOADED,
                payload: {
                    suite: {
                        settings: {
                            language: 'cs',
                        },
                        flags: {
                            initialRun: true,
                        },
                    },
                },
            });
            expect(goto).toHaveBeenNthCalledWith(1, 'suite-welcome');

            goto.mockClear();
        });

        it('if route is modal window, should not redirect and show modal directly', () => {
            const goto = jest.spyOn(routerActions, 'goto');
            // eslint-disable-next-line global-require
            require('next/router').default.pathname = '/version';

            const store = initStore(getInitialState());

            store.dispatch({
                type: STORAGE.LOADED,
                payload: {
                    suite: {
                        settings: {
                            language: 'cs',
                        },
                        flags: {
                            initialRun: true,
                        },
                    },
                },
            });
            expect(goto).toHaveBeenCalledTimes(1);
            expect(goto).toHaveBeenCalledWith('suite-version');

            goto.mockClear();
        });

        it('if route is 404, should not redirect and show modal directly', () => {
            const goto = jest.spyOn(routerActions, 'goto');
            // eslint-disable-next-line global-require
            require('next/router').default.pathname = '/foo-bar';

            const store = initStore(getInitialState());

            store.dispatch({
                type: STORAGE.LOADED,
                payload: {
                    suite: {
                        settings: {
                            language: 'cs',
                        },
                        flags: {
                            initialRun: true,
                        },
                    },
                },
            });
            expect(goto).toHaveBeenCalledTimes(0);

            goto.mockClear();
        });

        it('if initialRun is false should NOT redirect to onboarding after STORAGE.LOADED action', () => {
            const goto = jest.spyOn(routerActions, 'goto');
            // eslint-disable-next-line global-require
            require('next/router').default.pathname = '/';

            const store = initStore(getInitialState());
            store.dispatch({
                type: STORAGE.LOADED,
                payload: {
                    suite: {
                        settings: {
                            language: 'cs',
                        },
                        flags: {
                            initialRun: false,
                        },
                    },
                },
            });
            expect(goto).toHaveBeenCalledTimes(0);
            goto.mockClear();
        });
    });
});
