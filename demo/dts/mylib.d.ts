export function add(a: number, b: number, ...numbers: number[]): number;
export function max(arr: number[]): number | null;
export function quote(message: string): () => string;

const CaseKinds = ["lowercase", "uppercase"] as const;
export type CaseKind = (typeof CaseKinds)[number];
export function setCase(message: string, kind: CaseKind): string;
