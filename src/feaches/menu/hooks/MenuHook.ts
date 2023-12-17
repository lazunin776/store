import {useState} from "react";

export function useMenu() {
    const [collapsed, setCollapsed] = useState<boolean>(true)
    const toggleCollapsed = () => {
        setCollapsed(prev => !prev)
    }

    return{
        collapsed, toggleCollapsed
    }
}