import axios from "../utils/axios"

const getData = async (tag) => {
  const res = await axios.get(tag)
  return res.data;
}

export default getData;