function getAllExistSpecificProps(data) {
  return [
    { name: "Starships", values: data.starships },
    { name: "Vehicles", values: data.vehicles },
    { name: "Films", values: data.films },
    { name: "Species", values: data.species },
    { name: "Residents", values: data.residents },
    { name: "Pilots", values: data.pilots },
  ];
}

function filterProps(props) {
  const filteredProps = props.filter((prop) => {
    const { values } = prop;
    const IsExitValues = values !== undefined;
    const IsNotEmptyValues = values?.length > 0;

    return IsExitValues && IsNotEmptyValues ? prop : null;
  });

  return filteredProps;
}

const getFilteredProps = (data) => {
  let result = null;
  if (data) {
    const allExistSpecificProps = getAllExistSpecificProps(data);
    result = filterProps(allExistSpecificProps);
  }
  return result;
};

export default getFilteredProps;
