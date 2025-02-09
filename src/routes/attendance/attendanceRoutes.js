// routes/attendance.js
const express = require('express');
const router = express.Router();
const Attendance = require('../../models/attendance/attendanceModel');
const response = require('../../utils/response');

// Get all attendance
router.get('/', async (req, res) => {
    try {
        const attendances = await Attendance.getAll();
        response(200, attendances, "SUCCESS", res);
    } catch (error) {
        response(500, error.message, "ERROR", res);
    }
});

// Create attendance
router.post('/', async (req, res) => {
    try {
        const { date, status, user_id, school_id, photo_path, latitude, longtitude } = req.body;
        
        // Validasi input
        if (!date || !status || !user_id || !school_id || !photo_path || !latitude || !longtitude ) {
            return response(400, "Semua field harus diisi", "ERROR", res);
        }

        const newAttendance = await Attendance.add(date, status, user_id, school_id, photo_path, latitude, longtitude);
        response(201, newAttendance, "Attendance berhasil ditambahkan", res);
    } catch (error) {
        response(500, error.message, "ERROR", res);
    }
});

module.exports = router;