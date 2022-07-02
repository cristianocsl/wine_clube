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

  const context = {
    wines,
    setWines,
  };

  return (
    <MyContext.Provider value={context}>
      { children }
    </MyContext.Provider>
  );
}

export default Provider;