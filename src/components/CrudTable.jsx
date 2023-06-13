import { CrudTableRow } from "./CrudTableRow";

export const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Data Table</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
            <th>Constallations</th>
            <th className="d-flex justify-content-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td>No information</td>
            </tr>
          ) : (
            data.map((element) => <CrudTableRow key={element.id} element={element}/>)
          )}
        </tbody>
      </table>
    </div>
  );
};
