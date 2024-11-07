export const  calculateAge =(dob) => {
    const today = new Date();
    const birthDate = new Date(dob); 
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const dayDifference = today.getDate() - birthDate.getDate();

   
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    return age;
}