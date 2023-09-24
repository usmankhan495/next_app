/* eslint-disable @next/next/no-img-element */
export const PrimaryHeader = ({ bgColor = 'bg-sky-950', name = "JimmyFallon.AI", buttonLabel1 = 'About', buttonLabel2 = 'Contact' }) => {
  const color = 'text-white'
  return (
    <div className={`${bgColor} bg-sky-950 px-20 h-20 items-center flex`}>

      <p className={`${color} flex-1  text-3xl font-bold`}>
        {name}
      </p>

      <div className="flex-row">
        <button  className={`${color} ml-10 text-xl `}>
          {buttonLabel1}
        </button>
        <button className={`${color} ml-10 text-xl`}>
          {buttonLabel2}
        </button>
      </div>
      <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-2-800x800.jpg" alt="..." className="shadow rounded-full mx-5  h-15 w-20 " />



    </div>);
}
