import { useEffect, useState } from 'react';
import lolImproverUrl from '../config';

export const useGetMatchImage = match => {
    const [playerChamp, setPlayerChamp] = useState({});

    useEffect(() => {
        const test = async () => {
            let response = await fetch(`${lolImproverUrl}/api/static/${match.champion}`);
            response = await response.json();
            setPlayerChamp(response[0]);
        }
        // console.log('it should onlyu run once')
        test();

    }, [match.champion])

    return playerChamp;
};

export default useGetMatchImage;