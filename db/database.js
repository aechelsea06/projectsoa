const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'pluem',
  port: 5432,
})
const getAllCountry = async () => { 
    const sql=`select "Province/State" ,"Country/Region" , from covid19_confirmed_csv ccc`
    try {
        const data = await pool.query(sql);
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
}
module.exports = { getAllCountry,
}