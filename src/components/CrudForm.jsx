/* eslint-disable react/prop-types */
import { useState } from "react";
import { Card } from "../UI/Card";

const initialForm = {
  id: null,
  name: "",
  constallation: "",
};
export const CrudForm = ({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
  db,
}) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.constallation) {
      return alert("Datos incompletos");
    }

    const isDuplicate = db.some(
      (item) =>
        item.name === form.name && item.constallation === form.constallation
    );

    if(isDuplicate) return alert('Name and constallation cant be duplicated');

    if (form.id != null) {
      return updateData();
    }
    createData(form);
    handleReset();
  };

  const handleReset = (e) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="name"
            aria-describedby="nameHelp"
            onChange={handleChange}
            value={form.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="constallation" className="form-label">
            Constallation
          </label>
          <input
            name="constallation"
            type="text"
            className="form-control"
            id="constallation"
            aria-describedby="constallationHelp"
            value={form.constallation}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex gap-2">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <input
            type="reset"
            value="Reset"
            onClick={handleReset}
            className="btn btn-secondary"
          />
        </div>
      </form>
    </Card>
  );
};
