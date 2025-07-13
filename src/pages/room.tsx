import { Navigate, useParams } from 'react-router-dom'

type RoomParams = {
  roomid: string
}

export default function Rooms() {
  const params = useParams<RoomParams>()

  if (!params.roomid) {
    return <Navigate replace to="/" />
  }

  return (
    <div>
      <h1>Room</h1>
    </div>
  )
}
