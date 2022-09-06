interface CustomResponse {

    valid: boolean

    error: string

}

   class MyValidator implements CustomResponse{

       valid: boolean

       error: string



       constructor(valid:boolean=false,error:string='') {

        this.error=error;

        this.valid=valid;

       }



        errorResponse = (): CustomResponse => {

        return { valid: false, error: 'error occurred' }

       }



       validator = (func?:any):any=>{

        return func=this.errorResponse();

       }

   }



   const Myobj=new MyValidator();

   console.log(Myobj.validator(() => Myobj.errorResponse()).valid)

    console.log(Myobj.validator().error)

