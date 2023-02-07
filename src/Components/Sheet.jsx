import React from "react";
import "./Sheet.css";

const Sheet = () => {
  return (
    <section className="min-h-[100vh] bg-[#EEEEEE] py-10">
      <div className="border border-black lg:w-[98%] xl:w-[80%] mx-auto p-4">
        {/* top section */}
        <div className="">
          <button className="py-2.5 px-10 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            A/C
          </button>
          <input type="text" id="name" className="w-[250px] p-1" />
        </div>
        {/* under top section */}
        <div>
          {/* top section */}
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="bg-white border border-gray-400 p-2">
              <h6 className="text-center text-lg">Main Menu</h6>
            </div>
            <div className="bg-white  border border-gray-400 p-2">
              <h6 className="text-center text-lg">Vouchers</h6>
            </div>
            <div className="bg-white  border border-gray-400 p-2">
              <h6 className="text-center text-lg">Short Keys</h6>
            </div>
          </div>

          {/* bottom section */}
          <div>
            <table className=" w-full grid gap-4 grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 bg-white p-4">
              <div>
                <tr>
                  <th>Maintain</th>
                  <th>Flag</th>
                </tr>
                <tr>
                  <td>Maintain</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Voucher</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Feeding</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Reports</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
              </div>
              <div>
                <tr>
                  <th>Maintain</th>
                  <th>Flag</th>
                </tr>
                <tr>
                  <td>Maintain</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Voucher</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Feeding</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Reports</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
              </div>
              <div>
                <tr>
                  <th>Maintain</th>
                  <th>Flag</th>
                </tr>
                <tr>
                  <td>Maintain</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Voucher</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Feeding</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Reports</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
              </div>
              <div>
                <tr>
                  <th>Maintain</th>
                  <th>Flag</th>
                </tr>
                <tr>
                  <td>Maintain</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Voucher</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Feeding</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
                <tr>
                  <td>Reports</td>
                  <td>
                    <input type="checkbox" name="" id="" />{" "}
                  </td>
                </tr>
              </div>
              <div className="border-none">
                <div className="border-none">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">Don't Allow Bhav Vouchers</label>
                </div>
                <div className="border-none">
                  <input type="checkbox" name="" id="" className="mr-2" />
                  <label htmlFor="">Don't Allow Transfer Vouchers</label>
                </div>
              </div>
            </table>

            <div className="mt-6 flex justify-center">
              <button className="px-8 py-2.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm  mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Save
              </button>
              <button className="px-8 py-2.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm  mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sheet;
