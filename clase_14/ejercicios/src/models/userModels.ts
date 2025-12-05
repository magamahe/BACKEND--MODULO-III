// src/models/userModel.ts
import * as fs from 'fs/promises';
import * as path from 'path';

export interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Path to the users.json file
const usersFilePath = path.join(__dirname, '..', 'database', 'users.json');

// User model with methods to read and write users
const userModel = {
    // Read users from the JSON file
    async readUsers(): Promise<User[]> {
        try {
            const data = await fs.readFile(usersFilePath, 'utf8');
            return JSON.parse(data) as User[];
        } catch (error) {
            console.error('Error reading users file:', error);
            return [];
        }
    },

    // Write users to the JSON file
    async writeUsers(usersData: User[]): Promise<void> {
        try {
            await fs.writeFile(usersFilePath, JSON.stringify(usersData, null, 2), 'utf8');
        } catch (error) {
            console.error('Error writing users file:', error);
        }
    },
    // Generate a new unique ID for a user
    generateId(users: User[]): number {
        const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
        return maxId + 1;
    }
};

export default userModel;
