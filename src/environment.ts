// production variables goes here
const prodEnv = {
    apiUrl: ""
}


// development variables goes here
const devEnv = {
    apiUrl: "http://localhost:5000"
}


export const environment = (process.env.NODE_ENV === "development") ?  { ...devEnv } : { ...prodEnv }
