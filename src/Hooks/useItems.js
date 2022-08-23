import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-basin-84519.herokuapp.com/items')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })
    }, [setItems])
  return [items,setItems]
}

export default useItems
