import React, { useEffect, useState } from 'react'

export default function Countdown({ expiryDate }) {
    const [countdown, setCountdown] = useState(expiryDate)

    const updateTimer = () => {
        const millisLeft = new Date(countdown) - Date.now()
        const secondsLeft = Math.floor((millisLeft / 1000) % 60)
        const minutesLeft = Math.floor((millisLeft / (1000 * 60)) % 60)
        const hoursLeft = Math.floor(millisLeft / (1000 * 60 * 60))
        const displayTimer = millisLeft > 0

        setCountdown((prevNft) => ({
            ...prevNft,
            secondsLeft,
            minutesLeft,
            hoursLeft,
            displayTimer,
        }))
    }

    useEffect(() => {
        const interval = setInterval(updateTimer, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])
    
  return (
    <>
    {countdown.displayTimer && (
        <div className='de_countdown'>
            {`${countdown.hoursLeft}h ${countdown.minutesLeft}m ${countdown.secondsLeft}s`}
        </div>
    )}
    </>
  )
}
