import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://wine-back-test.herokuapp.com/products?page=1&limit=10',
  headers: {
    Accept: 'application/json',
  },
});

const getWines = async () => {
  try {
    const { data } = await axiosInstance.get('');
    console.log(data);
    return data;
  } catch (err: unknown) {
    return err;
  }
}

const AxiosServices = {
  getWines,
}

export default AxiosServices;