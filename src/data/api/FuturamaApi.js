import axios from "axios";
import { Host, Endpoints } from "../../helpers/comman_helpers";

export const getFuturamaCharacterApi = () => {
    let url = Host + Endpoints.characters
    return axios.get(url);
}