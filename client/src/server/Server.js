import axios from "axios"

export default {
    async getTimezone() {
        let res = await axios.get("http://localhost:8000/");
        return res.data;
    },
}
