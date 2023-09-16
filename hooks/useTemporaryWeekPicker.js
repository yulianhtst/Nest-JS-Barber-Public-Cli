import { useState, useEffect } from "react"

function useTemporaryWeekPicker() {
    const [week, setWeek] = useState([]);

    useEffect(() => {
        let curr = new Date

        for (let i = 1; i <= 7; i++) {
            let first = curr.getDate() - curr.getDay() + i
            let day = new Date(curr.setDate(first)).toISOString().slice(5, 10)
            setWeek(week => [...week, day])
        }
    }, [])


    return week
}

export default useTemporaryWeekPicker