$(document).ready(function () {

    //JSON LINK: https://api.npoint.io/88e5f5cd29d3eaedfa72

    const scheduleUrl = 'https://api.npoint.io/88e5f5cd29d3eaedfa72';

    const bellSchedule = {
        1: { start: "8:24 AM", end: "9:31 AM" },
        2: { start: "9:36 AM", end: "10:48 AM" },
        3: { start: "10:53 AM", end: "11:55 AM" },
        Lunch: { start: "12:00 PM", end: "12:35 PM" },
        4: { start: "12:41 PM", end: "1:48 PM" },
        5: { start: "1:53 PM", end: "3:00 PM" }
    };

    const periods = {
        A: [1, 2, 3, "Lunch", 5, 6],
        B: [4, 1, 2, "Lunch", 7, 5],
        C: [3, 4, 1, "Lunch", 6, 7],
        D: [2, 3, 4, "Lunch", 5, 6],
        E: [1, 2, 3, "Lunch", 7, 5],
        F: [4, 1, 2, "Lunch", 6, 7],
        G: [3, 4, 7, "Lunch", 5, 6]
    }

    

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
                    $('#scheduleList').empty()
                    let htmlString = "<tr>"
                    schedule.forEach(classItem => {
                        htmlString += `<td> ${classItem.period}</td>
                                        <td> "COMING BACK TO THIS"</td>
                                        <td> ${classItem.class} </td>
                                        <td> ${classItem.teacher} </td>
                                        <td> ${classItem.room} </td>`
                        htmlString += '</tr>'
                    })

                    $('#scheduleList').append(htmlString)

                }
            });
        } else {
            alert('Please type in one of the correct letter days.')
        }
    })

});