import { useEffect, useState, useRef } from 'react';

export const useFetch = (url) => {
    const [state, setstate] = useState({ data: null, loading: true, error: null });
    let isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
            console.log('Desmontado');
        }
    }, []);

    useEffect(() => {
        setstate({ data: null, loading: true, error: null })
        fetch(url).then(res => res.json()).then(data => {
            setTimeout(() => {
                if ( isMounted.current ) {
                    setstate({ loading: false, error: null, data });
                } else {
                    console.log('Componente desmontado');
                }
            }, 2000);
        }).catch(err => {
            setstate({ data: null, loading: false, error: err })
        });
    }, [url]);

    return state;
}