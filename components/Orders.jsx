import { data } from "@/data/Data"
import { FaShoppingBag } from 'react-icons/fa';

const Orders = () => {
  return (
    <div className="w-full col-span-1 overflow-y-scroll relative lg:h-[70vh] h-[50vh] m-auto border rounded-lg bg-white">
      <h1 className="text-center mt-2">Recent Orders</h1>
      <ul>
        {data.map((item,id) => (
          <li key={id} className="bg-gray-100 my-3 p-2 flex items-center cursor-pointer">
            <div className="p-3">
              <FaShoppingBag className="text-purple-900"/>
            </div>
            <div className="pl-4">
              <p className="font-bold text-gray-800">{item.total}</p>
              <p>{item.name.first }</p>
            </div>
            <p className="lg:flex md:hidden absolute right-6">{ item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Orders