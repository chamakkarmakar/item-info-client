import { useEffect, useState } from "react";

const useItemDetails = Id => {
    const [itemDetails, setItemDetails] = useState({});
    useEffect(() => {
        const url = `https://aqueous-basin-84519.herokuapp.com/item/${Id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
              console.log(data.itemName);
              setItemDetails(data)});
    }, [Id])

  return [itemDetails,setItemDetails]
}

export default useItemDetails
