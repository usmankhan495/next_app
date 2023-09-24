// userName, userIcon, message
export const ChatCard = () => {
  return (
    <div className='mt-5 flex items-center rounded-lg bg-white p-4 shadow-md'>
      <div className='mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white'>
        UK
      </div>
      <div>
        <p className='font-bold'>userName</p>
        <p className='text-gray-700'>message</p>
      </div>
    </div>
  );
};
