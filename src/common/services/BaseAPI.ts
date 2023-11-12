import Axios, {AxiosInstance} from "axios";

export abstract class BaseAPI {
    private static hostBaseURL = "https://localhost:7177/api/v1.0/";

    protected axios: AxiosInstance;

    protected constructor(baseURL: string) {
        this.axios = Axios.create(
            {
                baseURL: BaseAPI.hostBaseURL + baseURL,
                headers: {
                    common: {
                        'Content-Type': 'application/json'
                    }
                }
            }
        );
    }
}
