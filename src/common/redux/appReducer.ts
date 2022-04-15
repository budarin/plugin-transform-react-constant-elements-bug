import { CLIENT_SET_QUOTA_EXCEEDED, CLIENT_SHOW_UPDATE_SW_DIALOG } from '../utils/consts/msgBus';

export const appReducer =
    (
        initialState: Partial<IAppState>,
    ): ((state: Partial<IAppState> | undefined, action: IAction) => Partial<IAppState>) =>
    (state = initialState, action: IAction): Partial<IAppState> => {
        switch (action.type) {
            case CLIENT_SHOW_UPDATE_SW_DIALOG: {
                return {
                    ...state,
                    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                    showUpdateSwDialog: action.payload.show,
                };
            }

            case CLIENT_SET_QUOTA_EXCEEDED: {
                return {
                    ...state,
                    quotaExceeded: action.payload,
                };
            }

            default:
                return state;
        }
    };
