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
    return (dispatch) => {
        const milliseconds = seconds * 1000;
        dispatch({
            type: 'SET_NOTIFICATION',
            notification,
        });

        let id = setTimeout(
            () =>
                dispatch({
                    type: 'SET_NOTIFICATION',
                    notification: '',
                }),
            milliseconds
        );
        while (id--) {
            window.clearTimeout(id); // will do nothing if no timeout with id is present
        }
    };
};

export default notificationReducer;
