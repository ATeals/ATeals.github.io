import axios from "axios";

const Axios = axios.create({
    baseURL: "https://port-0-nest-api-dcse2blibeqone.sel4.cloudtype.app/",
    headers: {
        "Content-Type": "application/json",
    },
    validateStatus: (status) => status < 500,
});

const OpenGraphicApi = {
    getOg(url: string) {
        return Axios.get(`open-graphic?url=${url}`);
    },
};

export default OpenGraphicApi;
