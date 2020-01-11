import { createContext } from 'react'

export const handleServerErrors = (error) => {
    //if server validation error
    if (error.response) return { data: null, error: error.response.data };
    //if server error (unhandled Exeption)
    return { data: null, error: error };;
}
export const dateFormater = (date) => new Date(date).toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
export const userContext = createContext({ currentUser: {} }); // Create a context object
