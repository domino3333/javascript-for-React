const Timer = ({ time }) => {
  const { hour, minute, second } = time

  const format = num => String(num).padStart(2, '0')

  return (
    <h1>
      {format(hour)}:{format(minute)}:{format(second)}
    </h1>
  )
}

export default Timer