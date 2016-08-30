//my redrocks javascript

var row2Keys = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62, 65, 68, 71, 74, 77, 80, 83, 86, 89];

var r2Seats = ['R2_2.JPG',
                 'R2_5.JPG',
                 'R2_8.JPG',
                 'R2_11.JPG',
                 'R2_14.JPG',
                 'R2_17.JPG',
                 'R2_20.JPG',
                 'R2_23.JPG',
                 'R2_26.JPG',
                 'R2_29.JPG',
                 'R2_32.JPG',
                 'R2_35.JPG',
                 'R2_38.JPG',
                 'R2_41.JPG',
                 'R2_44.JPG',
                 'R2_47.JPG',
                 'R2_50.JPG',
                 'R2_53.JPG',
                 'R2_56.JPG',
                 'R2_59.JPG',
                 'R2_62.JPG',
                 'R2_65.JPG',
                 'R2_68.JPG',
                 'R2_71.JPG',
                 'R2_74.JPG',
                 'R2_77.JPG',
                 'R2_80.JPG',
                 'R2_83.JPG',
                 'R2_86.JPG',
                 'R2_89.JPG',
                ];

var kvArray = [[row2Keys[0], r2Seats[0]   ],
               [row2Keys[1], r2Seats[1]   ],
               [row2Keys[2], r2Seats[2]   ],
               [row2Keys[3], r2Seats[3]   ],
               [row2Keys[4], r2Seats[4]   ],
               [row2Keys[5], r2Seats[5]   ],
               [row2Keys[6], r2Seats[6]   ],
               [row2Keys[7], r2Seats[7]   ],
               [row2Keys[8], r2Seats[8]   ],
               [row2Keys[9], r2Seats[9]   ],
               [row2Keys[10], r2Seats[10] ],
               [row2Keys[11], r2Seats[11] ],
               [row2Keys[12], r2Seats[12] ],
               [row2Keys[13], r2Seats[13] ],
               [row2Keys[14], r2Seats[14] ],
               [row2Keys[15], r2Seats[15] ],
               [row2Keys[16], r2Seats[16] ],
               [row2Keys[17], r2Seats[17] ],
               [row2Keys[18], r2Seats[18] ],
               [row2Keys[19], r2Seats[19] ],
               [row2Keys[20], r2Seats[20] ],
               [row2Keys[21], r2Seats[21] ],
               [row2Keys[22], r2Seats[22] ],
               [row2Keys[23], r2Seats[23] ],
               [row2Keys[24], r2Seats[24] ],
               [row2Keys[25], r2Seats[25] ],
               [row2Keys[26], r2Seats[26] ],
               [row2Keys[27], r2Seats[27] ],
               [row2Keys[28], r2Seats[28] ],
               [row2Keys[29], r2Seats[29] ],
              ];

$(document).ready(function () {

   
    //seat row
    $("#FormsEditField1").click(function () {
        this.value = '';
        console.log("clicked FormsEditField1");
    })

    $("#FormsEditField2").click(function () {
        this.value = '';
        console.log("clicked FormsEditField2");
    })

    
    $("#FormsButton1").click(function () {
        console.log("clicked FormsButton1");

        var rowNum = FormsEditField1.value;
        var seatNum = FormsEditField2.value;
        rowNum = parseInt(rowNum);

        if (!validateNumber(rowNum)) {
            console.log("invalid number")
            return;
        }

        var center = Math.ceil(seatNum / 3) * 3 - 1;
        var index = row2Keys.indexOf(center);
        console.log('center is ' + center + ' index is ' + index);
        
        
        
        if(index > -1)
        {
            console.log('myMap.get is ' + kvArray[index][1]);
            $('#Picture112').attr('src', './Row 2/' + kvArray[index][1]);
        }
        else { Reset() }
        
    })

    $("#FormsButton2").click(function () {
        $('#Picture112').attr('src', "./Autogen/RedRocksFisheye.jpg");
        $("#FormsEditField1").attr('value', "Enter Seat Row");
        $("#FormsEditField2").attr('value', "Enter Seat Number");
    });

})

function validateNumber(rowNum) {
    return Number.isInteger(rowNum)
}

function Reset()
{
    console.log('Reset() called');
    $('#Picture112').attr('src', "./Autogen/RedRocksFisheye.jpg");
    $("#FormsEditField1").attr('value', "Enter Seat Row");
    $("#FormsEditField2").attr('value', "Enter Seat Number");
    return;
}

