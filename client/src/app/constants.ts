import {environment} from "../environments/environment";

export const APP_CONFIG  = {
    BASE_URL : environment.baseServerURL
}

export const GATEWAYS = {
    
    GET_ALL_TODO: APP_CONFIG.BASE_URL +"/api/todo",
    DELETE_TODO: APP_CONFIG.BASE_URL +"/api/todo/",
    
}