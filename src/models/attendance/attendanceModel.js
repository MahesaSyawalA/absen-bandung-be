const client = require("../../db/connection");

const Attendance = {
    add: async (date, status, user_id) => {
        try {
            const result = await client.query(
                'INSERT INTO attendance (date, status, user_id) VALUES ($1, $2, $3) RETURNING *',
                [date, status, user_id]
            );
            return result.rows[0];
        } catch (error) {
            throw new Error(`Error adding attendance: ${error.message}`);
        }
    },

    getAll: async () => {
        try {
            const result = await client.query(`
                SELECT 
                    TO_CHAR(date, 'YYYY-MM-DD') as date,
                    status,
                    user_id
                FROM attendance 
                ORDER BY date DESC
            `);
            return result.rows;
        } catch (error) {
            throw new Error(`Error getting attendance: ${error.message}`);
        }
    }
};

module.exports = Attendance;
