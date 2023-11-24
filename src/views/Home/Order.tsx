import { Card, Typography } from "@material-tailwind/react";


const TABLE_HEAD = ["Name Customer", "Phone Number", "Name Tour", "Time" ,"Amount of Money", "Action"];
 
const TABLE_ROWS = [
  {
    name: "Đà Nẵng",
    desription: "Tour Đà Nẵng thơ mộng",
    price:"1000 USD",
    time:"3N2D",
    image:"",
  },
  {
    name: "Đà Nẵng",
    desription: "Tour Đà Nẵng thơ mộng",
    price:"1000 USD",
    time:"3N2D",
    image:"",
  },
  {
    name: "Đà Nẵng",
    desription: "Tour Đà Nẵng thơ mộng",
    price:"1000 USD",
    time:"3N2D",
    image:"",
  },
  {
    name: "Đà Nẵng",
    desription: "Tour Đà Nẵng thơ mộng",
    price:"1000 USD",
    time:"3N2D",
    image:"",
  },
];

const Order = () => {
  return (
  <div>
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
  </div>
)};

export default Order;
