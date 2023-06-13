export const CrudTableRow = ({element}) => {
  return (
    <tr>
      <td>{element.name}</td>
      <td>{element.constallation}</td>
      <td className="d-flex justify-content-end">
        <button className="btn btn-primary me-3">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </td>
    </tr>
  );
};
