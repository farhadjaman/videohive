import axios from "../utils/axios"

const fetchVideos = async (tags, search) => {

  let queryString = "";
  if (tags?.length > 0)
    queryString += '?' + tags.map((tag) => `tags_like=${tag}`).join('&');

  if (search !== "" && search)
    queryString += `&q=${search}`

  const res = await axios.get(`/videos${queryString}`)

  return res.data;
}
export default fetchVideos