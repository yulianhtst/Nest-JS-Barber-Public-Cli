import { API_URL } from "@/constants"

export const makeBooking = async (bodyContent) => {
    const options = {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(bodyContent)
    }

    try {
        const response = await fetch(API_URL, options)
        const responseJSON = await response.json()
        return responseJSON
    } catch (error) {
        console.error(error)
    }
}