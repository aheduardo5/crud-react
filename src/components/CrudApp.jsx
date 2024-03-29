import { useState } from "react";
import { CrudForm } from "./CrudForm";
import { CrudTable } from "./CrudTable";

const initialDB = [
  {
    id: 1,
    name: "Paco",
    constallation: "Piscis",
  },
  {
    id: 2,
    name: "Martin",
    constallation: "Geminis",
  },
  {
    id: 3,
    name: "Perla",
    constallation: "Cancer",
  },
];
export const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([data, ...db]);
  };

  const updateData = (data) => {
    let newData = db.map((element) =>
      element.id === data.id ? data : element
    );
    setDb(newData);
  };

  const deleteData = (id) => {
    const isDelete = confirm(`Are you sure to delete the item with the id: ${id}?`);
    if(isDelete){
      setDb(db.filter(element => element.id !== id));
    }
  };
  return (
    <div className="container">
      <h1>Ejercicios con React</h1>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
        db={db}
      />
      <hr />
      <CrudTable
        data={db}
        deleteData={deleteData}
        setDataToEdit={setDataToEdit}
        dataToEdit={dataToEdit}
      />
    </div>
  );
};
