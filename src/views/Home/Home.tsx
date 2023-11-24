import { useState } from 'react';
import { Card, Typography } from "@material-tailwind/react";


const TABLE_HEAD = ["Name Place Tour", "Description", "Price", "Time" ,"Image", "Action"];
 
const TABLE_ROWS = [
  {
    name: "Đà Nẵng",
    desription: "Tour Đà Nẵng thơ mộng",
    price:"1000 USD",
    time:"3N2D",
    image:"",
  }
];


  

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
  <div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={openModal}>
      <i className="fa-solid fa-plus"></i>
       {"   "} Add tour travel
    </button>
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ name, desription, price, time, image }, index) => (
            <tr key={name} className="even:bg-blue-gray-50/50">
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {name}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {desription}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {price}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {time}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {image}
                </Typography>
              </td>
              <td className="p-2">
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium pr-5 hover:underline hover:text-blue-500">
                    Edit
                </Typography>
                <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium hover:underline hover:text-red-500">
                    Delete
                </Typography>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    {/* Modal */}
    <div
        id="authentication-modal"
        tabIndex={-1}
        aria-hidden="true"
        className={`${
          modalIsOpen ? '' : 'hidden'
        } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:max-w-md bg-[#FFFFFF] rounded-lg shadow-lg dark:bg-gray-700`}
      >
        <div className="relative">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Điền thông tin tour du lịch
            </h3>
            <button
              type="button"
              className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="authentication-modal"
              onClick={() => setModalIsOpen(false)}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div className="p-4 md:p-5">
              <form className="space-y-4" action="#">
                  <div>
                      <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tên Tour</label>
                      <input type="text" name="name" id="name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" 
                        placeholder="Đà Nẵng" required />
                  </div>
                  <div>
                      <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                      <input type="text" name="description" id="description" placeholder="Tour Đà Nẵng thơ mộng" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div>
                      <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                      <input type="text" name="price" id="price" placeholder="1000 USD" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div>
                      <label htmlFor="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
                      <input type="text" name="time" id="time" placeholder="3N2D" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <div>
                      <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                      <input type="text" name="image" id="image" placeholder="Link......" 
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                  </div>
                  <button type="submit" className="w-1/4 ml-40 text-center bg-[#00FFFF] hover:bg-[#FF0000] border-3 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={closeModal} 
                    >
                    Submit </button>
              </form>
          </div>
        </div>
    </div>
  </div>
)};

export default Home;
