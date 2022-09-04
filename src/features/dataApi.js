import axios from "../utils/axios"

const fetchData = async (tag) => {
  const res = await axios.get(tag)
  // console.log(res)
  return res.data;
}
export default fetchData