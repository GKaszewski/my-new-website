import axios from 'axios';
import { BASE_URL } from './ApiData';

interface Data {
    email: string;
    subject: string;
    content: string;
}

export default async function sendMail(data: Data) {
    let res = await axios.post<Data>(`${BASE_URL}/mail/`, {
        email: data.email,
        subject: data.subject,
        content: data.content
    });
    return res.data;
}