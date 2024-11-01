$(document).ready(function () {

    //JSON LINK: https://api.npoint.io/88e5f5cd29d3eaedfa72

    const scheduleUrl = 'https://api.npoint.io/88e5f5cd29d3eaedfa72';

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
        const selectedDay = $('#dayInput').val().trim().toUpperCase();
        let days = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
        if (days.includes(selectedDay)) {
            $.ajax({
                type: "GET",
                url: "https://api.npoint.io/88e5f5cd29d3eaedfa72",
                success: function (data) {
                    let schedule = data.schedule.filter(classItem =>
                        classItem.days.includes(selectedDay))
                    
                    
                    $('#scheduleList').empty()

                    let htmlString = ''

                    periods[selectedDay].forEach(period => {
                        if (period === "Lunch") {
                            htmlString += `<tr><td colspan="5" class="text-center">Lunch</td></tr>`
                        }
                            const classItem = schedule.find(function (item) {
                                return item.period === period;
                            });
                            if (classItem) {
                                htmlString +=`<tr>
                                    <td> ${classItem.period}</td>
                                    <td> ${classItem.class} </td>
                                    <td> ${classItem.teacher} </td>
                                    <td> ${classItem.room} </td> </tr>`
                            };
                    });

                    $('#scheduleList').append(htmlString);



                }
            });
        } else {
            alert('Please type in one of the correct letter days.')
        }
    })

});