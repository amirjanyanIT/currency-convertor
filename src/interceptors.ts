import axios from 'axios'

export const interceptorsInit = (): void => {
    axios.interceptors.request.use((function(config) {
        config.baseURL = process.env.REACT_APP_FAST_FOREX_BASE_URL;
        if(config.params) {
            config.params = {
                ...config.params,
                "api_key": process.env.REACT_APP_FAST_FOREX_KEY
            }
        }
        return config
    }))
}