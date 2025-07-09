import axios from 'axios';

export interface ApiResponse {
	result: boolean;
}

export async function getMikanChanStatus(): Promise<ApiResponse> {
	const response = await axios.get<ApiResponse>('http://localhost:3000/');
	return response.data;
}
