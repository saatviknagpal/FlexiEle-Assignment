import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import EditableCard from "./components/EditableCard";
import { response } from "./data/data";

function App() {
  const [showCard, setShowCard] = useState(null);
  const [formData, setFormData] = useState({});
  const [draggedContent, setDraggedContent] = useState({});
  const [updateResponse, setUpdateResponse] = useState(false);
  const stages = [
    "Source",
    "Applied",
    "In-Touch",
    "Interview",
    "Hired",
    "Rejected",
  ];

  const candidatesByStage = stages.reduce(
    (obj, stage) => ({ ...obj, [stage]: [] }),
    {}
  );

  response.forEach((candidate) => {
    candidatesByStage[candidate.stages].push(candidate);
  });

  useEffect(() => {
    if (updateResponse === true) {
      if (Object.keys(formData).length !== 0) response.push(formData);
      setFormData({});
      setUpdateResponse(false);
    }
  }, [updateResponse]);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleOnDrop = (e, stage) => {
    const objIndex = response.findIndex(
      (obj) => obj.candidate_name === draggedContent.candidate_name
    );
    response[objIndex].stages = stage;
    const element = response.splice(objIndex, 1)[0];
    response.splice(response.length, 0, element);
    setUpdateResponse(true);
  };
  const onDragStart = (e, candidate) => {
    setDraggedContent(candidate);
  };

  return (
    <div className="App bg-[#EDF2F9] min-h-screen p-8 flex flex-col">
      <h1 className="text-3xl font-bold">Stages</h1>
      <div className="relative overflow-y-hidden pt-10">
        <table className="w-full text-sm text-left table-auto">
          <thead className="text-xs text-gray-900 ">
            <tr className="bg-white border-t-[#259BE0] border-4">
              {stages.map((item, index) => (
                <th
                  key={index}
                  scope="col"
                  className="px-6 py-3 border-r-2 text-center border text-[#259BE0] text-lg font-semibold"
                >
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="flex-wrap">
              {stages.map((stage, index) => (
                <td
                  key={index}
                  className="align-top"
                  onDragOver={(e) => onDragOver(e)}
                  onDrop={(e) => handleOnDrop(e, stage)}
                >
                  <ul>
                    {candidatesByStage[stage].map((candidate, index) => (
                      <li
                        onDragStart={(e) => onDragStart(e, candidate)}
                        draggable
                        key={index}
                      >
                        <Card data={candidate} />
                      </li>
                    ))}
                    {showCard === stage ? (
                      <li>
                        <EditableCard
                          formData={formData}
                          setFormData={setFormData}
                          showCard={showCard}
                          setShowCard={setShowCard}
                          stage={stage}
                          updateResponse={updateResponse}
                          setUpdateResponse={setUpdateResponse}
                        />
                      </li>
                    ) : null}
                    <li
                      className="text-[#259BE0] font-bold text-3xl cursor-pointer w-max mx-auto"
                      onClick={() => {
                        setShowCard(stage);
                      }}
                    >
                      +
                    </li>
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
