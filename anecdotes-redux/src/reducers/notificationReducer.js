const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            const updatedNotification = action.notification;
            return updatedNotification;
        case 'REMOVE_NOTIFICATION':
            return '';
        default:
            return state;
    }
};

export const notificationChange = (notification) => {
    return {
        type: 'SET_NOTIFICATION',
        notification,
    };
};

export const notificationRemoval = () => {
    return {
        type: 'REMOVE_NOTIFICATION',
    };
};

export default notificationReducer;
