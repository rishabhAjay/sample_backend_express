export interface ICreateBookDTO {
  email: string;
  password: string;
}
export interface IUpdateBookDTO {
  role: string;
  email: string;
  password: string;
}
enum Status {
  active = "active",
  inactive = "inactive",
}
