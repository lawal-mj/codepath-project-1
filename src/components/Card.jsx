const image_url = "https://listings-prod.tcimg.net/listings/302809/00/41/5YM23EC09P9R74100/K5BM4FSREDHFIG4VIFK4ZRT5VA-cr-540.jpg"

export default function Card(props) {
  return (
    <div className="w-80 h-96 flex flex-col rounded-md bg-slate-300 shadow-md">
      
      <img className="flex-1 rounded-t-xl " src={props.image} alt="" height="300px"/>
      
      <div className="flex-3/4 text-center" >
        <h1 className="text-2xl font-bold justify-self-center p-3">{props.name}</h1>
        <h2 className="p-3">{props.type}</h2>
        <button className="py-2 bg-red-300 px-8 rounded-md mb-3 hover:bg-red-500">Buy</button>
      </div>

    </div>

  );
}
