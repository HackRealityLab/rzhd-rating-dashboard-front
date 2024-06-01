import axios from "axios";

export const getAllPolygons = async () => {
  const polygonInfo = await axios.get(
    "http://localhost:8888/api/get_values?name=Полигон"
  );
  return polygonInfo;
};

export const getPolygonInfo = async (name: string) => {
  const polygonInfo = await axios.get(
    "http://localhost:8888/api/get_polygon_info?name=" + name
  );
  return polygonInfo;
};

export const getUnitInfo = async (name: string) => {
  const unitInfo = await axios.get(
    "http://localhost:8888/api/get_vehicle_division_info?name=" + name
  );
  return unitInfo;
};

export const getVehicleInfo = async (name: string) => {
  const vehicleInfo = await axios.get(
    "http://localhost:8888/api/get_vehicle_info?name=" + name
  );
  return vehicleInfo;
};
