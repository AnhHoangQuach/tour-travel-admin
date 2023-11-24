import { Card, Typography } from "@material-tailwind/react";


const TABLE_HEAD = ["Email", "Password", "FullName","Actions"];
 
const TABLE_ROWS = [
  {
    email: "john.doe@example.com",
    password: "password123",
    fullName: "John Doe",
  },
 
];

const Account = () => {
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
          {TABLE_ROWS.map(({ email, password, fullName }, index) => (
            <tr key={email} className="even:bg-blue-gray-50/50">
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {email}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {password}
                </Typography>
              </td>
              <td className="p-2">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {fullName}
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

export default Account;
