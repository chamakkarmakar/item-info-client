import { useEffect, useState } from "react";

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data)
            })
    }, [setItems])
  return [items,setItems]
}

export default useItems
