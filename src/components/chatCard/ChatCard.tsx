export const  ChatCard=({ userName, userIcon, message })=> {

  return(
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center mt-5">
      <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3">
        UK
      </div>
      <div>
        <p className="font-bold">{userName}</p>
        <p className="text-gray-700">{message}</p>
      </div>
    </div>
  )

}