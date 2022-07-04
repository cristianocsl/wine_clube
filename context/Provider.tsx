import React, { ReactElement, useEffect, useState } from "react";
import MyContext from "./MyContext";
import AxiosServices from "../services";
import { WinesType } from "../services/typing";

type Props = { children: ReactElement | ReactElement[] };

const Provider = ({ children }: Props) => {
  const [wines, setWines] = useState<Array<WinesType>>([]);
  const [filteredWines, setFilteredWines] = useState<Array<WinesType>>([]);

  useEffect(() => {
    const get = async () => {
      const data = await AxiosServices.getWines();
      setWines(data.items);
    }

    get();
  }, []);

  function filterByPrice(value: number) {
    console.log('value: ', value);
      if (value === 6) {
        setFilteredWines(wines);
      }
      else if (value === 1) {
        const filtered = wines.filter((wine) => wine.priceMember <= 40);
        
        setFilteredWines(filtered);
      }
      else if (value === 2) {
        const filtered = wines.filter((wine) => wine.priceMember > 40 && wine.priceMember <= 60);
        setFilteredWines(filtered);
      }
      else if (value === 3) {
        const filtered = wines.filter((wine) => wine.priceMember > 60 && wine.priceMember <= 200);
        setFilteredWines(filtered);
      }
      else if (value === 4) {
        const filtered = wines.filter((wine) => wine.priceMember > 200 && wine.priceMember <= 500);
        setFilteredWines(filtered);
      }
      else if (value === 5) {
        const filtered = wines.filter((wine) => wine.priceMember > 500);
        setFilteredWines(filtered);
      }
    };
  

  const context = {
    wines,
    setWines,
    filterByPrice,
    filteredWines,
  };

  return (
    <MyContext.Provider value={context}>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;