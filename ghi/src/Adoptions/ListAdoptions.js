import { React, useState, useCallback } from "react";
import { useGetAdoptionsQuery } from "../store/pawsitiveApi";
import AdoptionDetailModal from "./Modals/AdoptionDetailModal";

function ListAdoptions() {
  const { data, isLoading } = useGetAdoptionsQuery();
  const [activeAdoptionDetailModal, setActiveAdoptionDetailModal] =
    useState(false);
  const [adoptionId, setAdoptionId] = useState(null);
  const [dogId, setDogId] = useState(null);
  const [query, setQuery] = useState("");
  const [choice, setChoice] = useState("adoption.dog.name");

  const activateAdoptionDetailModal = useCallback(
    (adoption_id, dog_id) => () => {
      setAdoptionId(adoption_id);
      setDogId(dog_id);
      setActiveAdoptionDetailModal(true);
    },
    []
  );

  const handleChange = (e) => {
    setChoice(e.target.value);
  };

  if (isLoading) {
    return <progress className="progress is-primary" max="100"></progress>;
  }

  return (
    <>
      {data.adoptions && (
        <div>
          <div className="d-flex my-3">
            <input
              className="my-3 p-2 flex-grow-1 fs-3 fw-bold border border-dark border-3 rounded"
              placeholder=" 🔍 Search"
              onChange={(event) => setQuery(event.target.value)}
            />
            <select
              onChange={handleChange}
              placeholder="select"
              required
              type="text"
              name="select"
              id="select"
              className="dropdown-toggle btn fw-bold my-3 py-3 px-1 fs-3 border border-dark border-3 rounded"
              data-toggle="dropdown"
              style={{ backgroundColor: "#f55c7a", color: "#343a40" }}
            >
              <option value="adoption.dog.name">Dog Name</option>
              <option value="adopter_name">Adopter's Name</option>
              <option value="date_of_adoption">Date of Adoption</option>
            </select>
          </div>
          <table
            className="table table-striped m-2"
            style={{ backgroundColor: "#fff1ab" }}
          >
            <thead>
              <tr>
                <th className="fs-4" scope="col">
                  Dog Name
                </th>
                <th className="fs-4" scope="col">
                  Adopter Name
                </th>
                <th className="fs-4" scope="col">
                  Date of Adoption
                </th>
                <th className="fs-4" scope="col">
                  More Details
                </th>
              </tr>
            </thead>
            <tbody>
              {data.adoptions.map((adoption) => {
                if (choice === "adoption.dog.name") {
                  if (
                    adoption.dog.name
                      .toLowerCase()
                      .includes(query.toLowerCase()) ||
                    query === ""
                  )
                    return (
                      <tr key={adoption.id}>
                        <td className="fw-bold fs-5">{adoption.dog.name}</td>
                        <td className="fw-bold fs-5">
                          {adoption.adopter_name}
                        </td>
                        <td className="fw-bold fs-5">
                          {adoption.date_of_adoption}
                        </td>
                        <td>
                          <button
                            className="btn fw-bolder fs-6 border border-dark border-2 rounded"
                            style={{
                              backgroundColor: "#87c4f2",
                              color: "#343a40",
                            }}
                            onClick={activateAdoptionDetailModal(
                              adoption.id,
                              adoption.dog.dog_id
                            )}
                          >
                            Adoption Deets
                          </button>
                        </td>
                      </tr>
                    );
                } else if (
                  adoption[choice]
                    .toLowerCase()
                    .includes(query.toLowerCase()) ||
                  query === ""
                ) {
                  return (
                    <tr key={adoption.id}>
                      <td className="fw-bold fs-5">{adoption.dog.name}</td>
                      <td className="fw-bold fs-5">{adoption.adopter_name}</td>
                      <td className="fw-bold fs-5">
                        {adoption.date_of_adoption}
                      </td>
                      <td>
                        <button
                          className="btn fw-bolder fs-6 border border-dark border-2 rounded"
                          style={{
                            backgroundColor: "#87c4f2",
                            color: "#343a40",
                          }}
                          onClick={activateAdoptionDetailModal(
                            adoption.id,
                            adoption.dog.dog_id
                          )}
                        >
                          Adoption Deets
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      )}
      <AdoptionDetailModal
        activeAdoptionDetailModal={activeAdoptionDetailModal}
        setActiveAdoptionDetailModal={setActiveAdoptionDetailModal}
        adoptionId={adoptionId}
        dogId={dogId}
      />
    </>
  );
}
export default ListAdoptions;
