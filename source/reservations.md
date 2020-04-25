---
layout: page
title: Reservations
permalink: /reservations/
---

<div class="container bg-light">
    <h2>Reservations</h2>
    <div class="row mt-3">
        <div id="new_reservations" class="col-sm-4">
            <p>Select date</p>
            <div class="form-group">
                <div class='input-group date' id='datetimepicker'>
                    <input type='date' class="form-control datepicker" onchange="date_changed(event);"/>
                </div>
            </div>
            <!-- <div id="signed_in" hidden>
            </div> -->
            <!-- <div id="signed_out" hidden>
                <p>You need to sign in first to make a new reservation!</p>
            </div> -->
        </div>
        <div class="col-sm">
            <p>Reservations for <a id="display_date">today</a></p>
            <table class="table">
                <thead>
                    <th scope="col">Time</th>
                    <th scope="col">Reserved by</th>
                </thead>
                <tbody id="times_body">
                <!-- Entries will be populated with JS -->
                </tbody>
            </table>
        </div>
    </div>
</div>

<script>

var hour_start = 10;
var minute_start = 0;

var hour_end = 21;
var minute_end = 30;

var step = 30; // minutes

$(function(){
    if (Cookies.get("auth") === "1") {
        show_signed_in();
    } else {
        show_signed_out();
    }
});

function get_reservations(date) {
    let obj = Cookies.get(date);
    if (obj === undefined) {
        obj= "{}";
    }
    return JSON.parse(obj);
}

function show_signed_in() {
    $("#signed_in").removeAttr("hidden");
    $("#signed_out").attr("hidden", "");
}

function show_signed_out() {
    $("#signed_out").removeAttr("hidden");
    $("#signed_in").attr("hidden", "");
}

function format_date(hour, minute) {
    ret = "";
    if (hour < 10)
        ret += "0";
    ret += hour.toString();
    ret += ":";
    if (minute < 10)
        ret += "0";
    ret += minute.toString();
    return ret;
}

function refresh_event_list(date) {
    $("#times_body").empty();
    let reservations = get_reservations(date);
    for (i = hour_start*60+minute_start; i <= hour_end*60+minute_end; i+= step) {
        let row = $("<tr/>");
        let time = $('<th scope="row" class="col-sm-3"/>');
        let reserved_by = $('<td/>');

        let hh = Math.floor(i/60).toString();
        let mm = (i%60).toString();
        let formatted_time = format_date(hh, mm);
        time.text(formatted_time);

        if (formatted_time in reservations) {
            reserved_by.text(reservations[formatted_time]);
        } else {
            reserved_by.text("Free").addClass("disabled")
        }

        $("#times_body").append(row.append(time).append(reserved_by))
    }
}

function date_changed(event) {
    var new_date = event.target.value;
    $("#display_date").text(new_date);
    refresh_event_list(new_date);
}
</script>
