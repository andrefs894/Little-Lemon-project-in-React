function BookingSlots({ availableTimes }) {
    const hours = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
    //const hours = availableTimes.find(obj => obj.date === date);

    return (
        <>
            {
                availableTimes.length > 0
                ?
                    availableTimes.map((time,index) => {
                        return time.isFree
                            ? <option key={index}>{time.hour}</option>
                            : <option key={index} disabled>{time.hour}</option>
                    })
                : hours.map((time,index) => {
                    return <option key={index}>{time}</option>
                }
                )
            }
        </>
    )
}

export default BookingSlots

/*
            {
                hours !== undefined
                    ?
                        hours.times.map((time,index) => {
                        return time.free
                            ? <option key={index}>{time.hour}</option>
                            : <option key={index} disabled>{time.hour}</option>
                        })
                    : <option></option>
            }
*/