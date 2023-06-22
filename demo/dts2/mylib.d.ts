export type Status = "success" | "failure";

const Departments = ["Electronics", "Home & Kitchen", "Toys & Games"] as const;
export type Department = (typeof Departments)[number];

export interface ApiResponseItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  department: Department;
}

export interface ApiResponse {
  status: Status;
  data: {
    items: ApiResponseItem[]
  }
}

export function apiResponse(): ApiResponse | undefined;
