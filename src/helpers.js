export const calcTime = time => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;
    return `${hours}h ${mins}m`;
};

export const ConvertTimeToPercent = (totalTime, passedTime) => {
    const estimatedTimeLeft = totalTime - passedTime;
    const convertion = Math.floor((totalTime / estimatedTimeLeft) * 100);
    return convertion;
};


export const isPersistedState = stateName => {
    const sessionState = sessionStorage.getItem(stateName);
    return sessionState && JSON.parse(sessionState);
}


