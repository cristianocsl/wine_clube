import React, { ReactElement, useEffect, useState } from "react";
import MyContext from "./MyContext";
import AxiosServices from "../services";
import { WinesType } from "../services/typing";

type Props = { children: ReactElement | ReactElement[] };

const Provider = ({ children }: Props) => {
  const [wines, setWines] = useState<Array<WinesType>>([]);

  useEffect(() => {
    const get = async () => {
      const data = await AxiosServices.getWines();
      setWines(data.items);
    }

    get();
  }, []);

  function filterByPrice(value: number) {
    return wines.filter((wine) => {
      if (value === 1) {
        return wine.priceMember <= 40;
      }
      else if (value === 2) {
        return wine.priceMember <= 60;
      }
      else if (value === 3) {
        return wine.priceMember <= 200;
      }
      else if (value === 4) {
        return wine.priceMember <= 500;
      }
      else if (value === 5) {
        return wine.priceMember > 500;
      }
    });
  }

  const context = {
    wines,
    setWines,
    filterByPrice,
  };

  return (
    <MyContext.Provider value={context}>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;