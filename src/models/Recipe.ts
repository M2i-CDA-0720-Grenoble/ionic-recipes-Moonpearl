export default interface Recipe {
  id: number;
  name: string;
  source: string;
  image: string;
  video: string;
  instructions: string;
  areaId: number;
  categoryId: number;
  category: {
    name: string;
    id: number;
  };
  area: {
    name: string;
    id: number;
  };
}
