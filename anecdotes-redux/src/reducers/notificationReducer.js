const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            const updatedNotification = action.notification;
            return updatedNotification;
        default:
            return state;
    }
};

export const setNotification = (notification, seconds) => {
    return async (dispatch) => {
        const milliseconds = seconds * 1000;
        dispatch({
            type: 'SET_NOTIFICATION',
            notification,
        });
        // ? do i need to add await? is set TimeOut async?
        await setTimeout(
            () =>
                dispatch({
                    type: 'SET_NOTIFICATION',
                    notification: '',
                }),
            milliseconds
        );
    };
};

export default notificationReducer;
