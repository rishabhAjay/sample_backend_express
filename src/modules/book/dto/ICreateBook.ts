export interface ICreateBookDTO {
   title: string;
    description: string;
    
  }
  export interface IUpdateBookDTO {
    id: number
    title: string;
     description: string;
     
   }
  enum Status {
    active= "active",
    inactive = "inactive"
  }