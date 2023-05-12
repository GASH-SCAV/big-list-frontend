import { useState } from "react";
import Form from "../components/Form";
import { getItems } from "../services/EthelAPI.js";

const ItemIndex = () => {
  const [formData, setFormData] = useState({
    year: "",
    itemNumber: "",
    itemText: "",
    points: "",
    rating: "Caution",
  });
  const [items, setItems] = useState([]);
  const render = (
    <>
      <h1>Ethel</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        onSubmit={() => getItems(formData).then((res) => console.log(res))}
      />
      {/* {items.length > 0 && <TableContainer />} */}
    </>
  );

  console.log("formData", formData);
  return render;
};

export default ItemIndex;
