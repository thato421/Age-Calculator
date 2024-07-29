// Main JS File

function calcAge(){

    const ageInput = document.querySelector(".age_input").value;

    const todaysDateInput = document.querySelector(".todays_date_input").value;

    const ageResult = document.querySelector(".age_result_txt");

    if(!ageInput || !todaysDateInput){

        ageResult.innerHTML = "Input Valid Dates";

        ageResult.classList.add("warning")
        return;

    }

    const dob = new Date(ageInput);

    const currentDate = new Date(todaysDateInput);

    let age = currentDate.getFullYear() - dob.getFullYear();

    const monthDiff = currentDate.getMonth() - dob.getMonth();

    if( monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())){
        age--;
    }

    const yearFormat = age < 2 ? "Year" : "Years";

    ageResult.style.display = 'flex';
    ageResult.innerHTML = `You Are ${age} ${yearFormat} Old`;
}