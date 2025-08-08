import React from 'react';

function RoomButtons() {
  const rooms = ["Lounge", "Kitchen", "Bedroom", "Bathroom", "Garden"];
  const [activeRoom, setActiveRoom] = React.useState(rooms[0]);

  const handleClick = (room) => {
    setActiveRoom(room);
    console.log(`Room selected: ${room}`);
  };

  return (
    <div className="flex gap-4 overflow-x-auto  hide-scrollbar scrollbar-transparent  w-full ">
      {rooms.map((room) => (
        <button
          key={room}
          onClick={() => handleClick(room)}
          className={` p-2 rounded-lg w-fit h-10 text-sm transition-colors ${
            activeRoom === room
              ? 'bg-[#9aa710] text-white shadow-md'
              : 'bg-[#f7f7f7] text-[#706f6f] hover:bg-[#e0e0e0]'
          }`}
        >
          {room}
        </button>
      ))}
    </div>
  );
}

export default RoomButtons;