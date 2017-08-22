export class AppError {
    constructor(public originalError?: any){
        alert('An unexpected error occurred.');
    }
}