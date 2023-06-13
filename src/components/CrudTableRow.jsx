export const CrudTableRow = ({element, setDataToEdit, deleteData, dataToEdit}) => {
  const {name, constallation, id} = element;
  const isEditing = dataToEdit && dataToEdit.id === id;
  return (
    <tr>
      <td>{name}</td>
      <td>{constallation}</td>
      <td className="d-flex justify-content-end">
        <button className="btn btn-primary me-3" onClick={()=>setDataToEdit(element)}>{isEditing? 'Editing...': 'Edit'}</button>
        <button className="btn btn-danger" onClick={()=>deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
};
