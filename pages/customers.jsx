import Header from "@/components/Header";
import { data } from "../data/Data";
import { BsPersonFill, BsThreeDotsVertical } from "react-icons/bs";
const customers = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className=" bg-white w-full border rounded-lg  ">
        <div className="grid md:grid-cols-4  sm:grid-cols-3 grid-col-2 my-3 p-3">
        <span>Name</span>
            <span className='sm:text-left text-right'>Email</span>
            <span className='hidden md:grid'>Last Order</span>
            <span className='hidden sm:grid'>Method</span>
        </div>
        <ul>
            {data.map((order, id) => (
                <li key={id} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2  cursor-pointer'>
                    <div className='flex items-center'>
                        <div className='bg-purple-100 p-3 rounded-lg'>
                            <BsPersonFill className='text-purple-800' />
                        </div>
                        <p className='pl-4'>{order.name.first + ' ' + order.name.last}</p>
                    </div>
                    <p className='text-gray-600 sm:text-left text-right'>{order.name.first}@gmail.com</p>
                    <p className='hidden md:flex'>{order.date}</p>
                    <div className='sm:flex hidden justify-between items-center'>
                        <p>{order.method}</p>
                        <BsThreeDotsVertical />
                    </div>
                </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default customers;
