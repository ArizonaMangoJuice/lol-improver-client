export const createMatchDate = match => {
    const readableTime = new Date(parseInt(match.timestamp, 10));
    const dd = String(readableTime.getDate()).padStart(2, '0');
    const mm = String(readableTime.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = readableTime.getFullYear();

    const gameDate = `${mm}/${dd}/${yyyy}`;

    return gameDate;
}

export default createMatchDate;