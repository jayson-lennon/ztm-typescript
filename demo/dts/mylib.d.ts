export function add(a: number, b: number, ...numbers: number[]): number;
export function max(arr: number[]): number | null;
export function quote(str: string): () => string;

type CaseType = 'upper' | 'lower';
export function setCase(str: string, caseType: CaseType): string;
