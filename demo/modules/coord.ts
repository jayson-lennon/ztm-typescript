
// Interfaces can be exported:
export interface Point {
  x: number;
  y: number;
}

// Default exported item. Prefer to NOT use this because it can break code
// completion.
export default Point;

