import axios from "axios"

export default {
    async getTimezones() {
        let res = await axios.get("http://localhost:8000/");
        return res.data;
    },
}
