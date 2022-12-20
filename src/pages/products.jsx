import { DataGrid } from "@mui/x-data-grid";
import { Avatar } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { productsData } from "../data/dummyData";

const Products = () => {
  const [data, setData] = useState(productsData);

  const deleteUser = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    {
      field: "productName",
      headerName: "Name",
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-2 items-center">
          <Avatar alt="product" src={params.row.img} />
          {params.row.productName}
        </div>
      ),
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Status",

      width: 120,
    },
    {
      field: "price",
      headerName: "Price",

      width: 120,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div className="flex gap-2">
          <Link to={"/product/" + params.row.id}>
            <button className="bg-green-500 font-bold text-white px-3 py-1 rounded-md">
              Edit <Edit fontSize="small"></Edit>
            </button>
          </Link>
          <button
            onClick={() => deleteUser(params.row.id)}
            className="bg-red-500 font-bold text-white px-3 py-1 rounded-md"
          >
            Delete <Delete fontSize="small"></Delete>
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[700px] shadow-lg p-6 m-2">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default Products;
