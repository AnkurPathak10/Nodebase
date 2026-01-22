import { PAGINATION } from "@/config/constants";
import { debounce } from "nuqs";
import { useEffect, useState } from "react";

interface UseEntitySearchProps<T extends {
    search: string; page:number
}>{
    params: T;
    setParams: (params: T) => void;
    debounceMs?: number;
}

/**
 * Manages a local debounced search string synchronized with external `params` and resets pagination when the search changes.
 *
 * @param params - Current params object containing `search` and `page`.
 * @param setParams - Callback to update `params`; when applied, `page` is reset to the default pagination page.
 * @param debounceMs - Delay in milliseconds to debounce applying `search` from local state to `params`. Defaults to 500.
 * @returns An object with `searchValue` (the local search string) and `onSearchChange` (setter to update the local search).
 */
export function useEntitySearch<T extends {
    search: string;
    page: number;
}>({
    params,
    setParams,
    debounceMs =500
}: UseEntitySearchProps<T>){
    const [localSearch, setLocalSearch] = useState(params.search);

    useEffect(() => {
        if(localSearch === "" && params.search !== ""){
            setParams({
                ...params,
                search: "",
                page: PAGINATION.DEFAULT_PAGE,
            });
            return
        }
        const timer = setTimeout(() => {
            if(localSearch !== params.search){
                setParams({
                    ...params,
                    search: localSearch,
                    page: PAGINATION.DEFAULT_PAGE,
                })
            }
        }, debounceMs);

        return () => clearTimeout(timer);
    }, [localSearch, params, setParams, debounceMs]);

    useEffect(() => {
        setLocalSearch(params.search)
    }, [params.search]);

    return {
        searchValue: localSearch,
        onSearchChange: setLocalSearch,
    }
}