import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Response<T> = [
    T,
    Dispatch<SetStateAction<T>>
]

export default function useSaveState<T>(key: string, initialState: T): Response<T> {
    const [ saveState, setSaveState ] = useState(() => {
        const storeValue = localStorage.getItem(key);

        if(storeValue) {
            return JSON.parse(storeValue);
        } else { 
            return initialState;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(saveState));
    } ,[key, saveState ]);

    return [saveState, setSaveState];
}