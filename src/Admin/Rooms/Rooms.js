import React, { useEffect, useState } from "react";
import { getAllRooms, deleteRoom } from "../../helper/ApiHelper";
import { useNotifications } from "@mantine/notifications";
import "./rooms.css";
const Rooms = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const notifications = useNotifications();

  const [values, setValues] = useState({
    err: "",
    didRedirect: false,
    loading: false,
  });

  const { err, didRedirect, loading } = values;

  const preloadProducts = async () => {
    await getAllRooms().then((data) => {
      console.log(data);

      if (data.err) {
        setError(data.err);
      } else {
        setProducts(data);
      }
    });
  };

  function handleDelete(id) {
    deleteRoom(id)
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, err: data.err, loading: false });
          notifications.showNotification({
            color: "red",
            title: "Error",
            message: data.message,
          });
        } else {
          notifications.showNotification({
            color: "green",
            title: "Success",
            message: "Successfully Deleted",
          });
        }
      })
      .catch((e) => {
        notifications.showNotification({
          color: "red",
          title: "Error",
          message: "failed to Delete",
        });
      });
  }

  useEffect(() => {
    preloadProducts();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>All rooms</h1>

      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Title
              </th>
              <th scope="col" class="px-6 py-3">
                Description
              </th>
              <th scope="col" class="px-6 py-3">
                District
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map((data) => (
              <>
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {data.owner.title}
                  </th>
                  <td class="px-6 py-4">{data.owner.description}</td>
                  <td class="px-6 py-4">{data.owner.roomAddress.district}</td>
                  <td class="px-6 py-4">
                    {data.owner.roomDetails.rentPerMonth}
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(data.owner._id)}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <div className="cards-wrapper"></div>
        <div className="cards-wrapper1"></div>
      </div>
    </div>
  );
};

export default Rooms;
