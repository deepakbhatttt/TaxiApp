import mysql from "mysql2";
import {MYSQL_DB_NAME} from "../../constants.js";

const connectDB = async()=>{
    try {
        const connectionInstance = await mysql.createConnection({
            host: process.env.MYSQL_DB_HOST,
            user: process.env.DB_USER,
            password: process.env.MYSQL_DB_PASSWORD,
            database: MYSQL_DB_NAME,
            port: process.env.MYSQL_DB_PORT
        })
        console.log(`MySQL Connected ${connectionInstance.config.host}`);
    } catch (error) {
        console.log("MySQL Connection Error", error);
        process.exit(1);
    }
}
export default connectDB;




/* Connecting to DB using IIFE(Self Executing Anonymous Function) in the db file(db/index.js)
// ;(async () => {
//     try {
        const dbConnection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: DB_NAME,
            port: process.env.DB_PORT
        });
//         console.log('Connected to the MySQL database.');
//         module.exports = dbConnection;
//     } catch (error) {
//         console.error('Error connecting to the database:', error);
//     }
// })();
*/


/* Connecting to DB using IIFE(Self Executing Anonymous Function) in the main(index.js) file
// ;(async () => {
//     try {
//         await mysql.connect();
//         app.on("error", (error) =>{
//             console.log("ERROR", error);
//             throw error;
//         })

//         app.listen(process.env.PORT, ()=> {
//             console.log(`App is Listening On Port ${process.env.PORT}`);
//         })
//     } catch (error){
//         console.error("ERROR: ",error);
//         throw error;
//     }
// })
*/