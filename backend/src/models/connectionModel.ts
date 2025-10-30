import mysql from 'mysql2/promise'
import { config } from 'dotenv'

export const connectModule = mysql.createPool({})
