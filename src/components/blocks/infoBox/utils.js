function getArrPlanetsData(objectData) {
  const arrInfoHomeworld = [
    `Population: ${objectData?.population}`,
    `Diameter: ${objectData?.diameter}`,
    `Rotation period: ${objectData?.rotation_period}`,
    `Climate: ${objectData?.climate}`,
    `Gravity: ${objectData?.gravity}`,
    `Terrain: ${objectData?.terrain}`,
    `Surface water: ${objectData?.surface_water}`,
    `Orbital period: ${objectData?.orbital_period}`,
  ];
  return arrInfoHomeworld;
}
function getArrStarshipsData(objectData) {
  const arrInfoHomeworld = [
    `model: ${objectData?.model}`,
    `MGLT: ${objectData?.MGLT}`,
    `Consumables: ${objectData?.consumables}`,
    `Crew: ${objectData?.crew}`,
    `Hyperdrive rating: ${objectData?.hyperdrive_rating}`,
    `Length: ${objectData?.hyperdrive_rating}`,
    `Manufacturer: ${objectData?.manufacturer}`,
    `Max atmosphering speed: ${objectData?.max_atmosphering_speed}`,
    `Passengers: ${objectData?.passengers}`,
    `Starship class: ${objectData?.starship_class}`,
  ];
  return arrInfoHomeworld;
}
function getArrPeopleData(objectData) {
  const arrInfoPerson = [
    `Gender: ${objectData?.gender}`,
    `Height: ${objectData?.height}`,
    `Mass: ${objectData?.mass}`,
    `Hair color: ${objectData?.hair_color}`,
    `Skin color: ${objectData?.skin_color}`,
    `Eye color: ${objectData?.eye_color}`,
    `Birth year: ${objectData?.birth_year}`,
  ];
  return arrInfoPerson;
}

export function getArrHomeworldData(objectData) {
  const arrInfoHomeworld = [
    `Homeworld: ${objectData?.name}`,
    `Population: ${objectData?.population}`,
    `Diameter: ${objectData?.diameter}`,
    `Rotation period: ${objectData?.rotation_period}`,
  ];
  return arrInfoHomeworld;
}

export function getRelativeUrl(url) {
  return url.split("/").splice(4);
}
export function getHandlerDataFor(namePage) {
  switch (namePage) {
    case "people":
      return getArrPeopleData;
    case "planets":
      return getArrPlanetsData;
    case "starships":
      return getArrStarshipsData;
    default:
      return getArrHomeworldData;
  }
}
