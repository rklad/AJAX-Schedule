$(document).ready(function () {

    //JSON LINK: https://api.npoint.io/88e5f5cd29d3eaedfa72

    const scheduleUrl = 'https://api.npoint.io/88e5f5cd29d3eaedfa72';

    const bellSchedule = {
        1: { start: "8:24 AM", end: "9:31 AM" },
        2: { start: "9:36 AM", end: "10:48 AM" },
        3: { start: "10:53 AM", end: "11:55 AM" },
        4: { start: "12:00 PM", end: "12:35 PM" },
        5: { start: "12:41 PM", end: "1:48 PM" },
        6: { start: "1:53 PM", end: "3:00 PM" }
    };

    $('#submitDay').on('click', function () {
        const userInput = $('#dayInput').val().trim().toUpperCase();
        let days = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        if (days.includes(userInput)) {
            $.ajax({
                type: "GET",
                url: "https://api.npoint.io/88e5f5cd29d3eaedfa72",
                success: function (data) {
                    let schedule = data.schedule.filter(classItem =>
                        classItem.days.includes(userInput))

                    let htmlString = "<tr>"

                    schedule.forEach(classItem => {
                        htmlString += `<td> ${classItem.period}</td>
                                        <td> "Coming back to this" </td>
                                        <td> ${classItem.class} </td>
                                        <td> ${classItem.teacher} </td>
                                        <td> ${classItem.room} </td>
                                        </tr>`
                        console.log(htmlString)
                    })

                }
            });
        } else {
            alert('Please type in one of the correct letter days.')
        }
    })

});