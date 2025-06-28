interface buttonInterface{
    lable: string,
    onClick: (e:any)=>void
}
export function Button({lable, onClick}:buttonInterface){
    return(
         <button type="button" onClick={onClick} className="mt-2 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5">{lable}</button>
    )
}