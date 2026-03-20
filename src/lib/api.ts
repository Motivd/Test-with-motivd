/**
 * API client for TODOODO application
 * Handles communication with Motivd Cloud backend
 */

import { Task, CreateTaskInput, UpdateTaskInput, ApiResponse } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
const MOTIVD_API_URL = process.env.NEXT_PUBLIC_MOTIVD_API_URL;
const MOTIVD_API_KEY = process.env.MOTIVD_API_KEY;

/**
 * Generic fetch wrapper with error handling
 */
async function fetchAPI<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const url = `${API_URL}${endpoint}`;
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }

    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Task API endpoints
 */
export const taskAPI = {
  /**
   * Get all tasks
   */
  async getTasks(): Promise<ApiResponse<Task[]>> {
    return fetchAPI<Task[]>('/tasks');
  },

  /**
   * Get a single task by ID
   */
  async getTask(id: string): Promise<ApiResponse<Task>> {
    return fetchAPI<Task>(`/tasks/${id}`);
  },

  /**
   * Create a new task
   */
  async createTask(input: CreateTaskInput): Promise<ApiResponse<Task>> {
    return fetchAPI<Task>('/tasks', {
      method: 'POST',
      body: JSON.stringify(input),
    });
  },

  /**
   * Update an existing task
   */
  async updateTask(id: string, input: UpdateTaskInput): Promise<ApiResponse<Task>> {
    return fetchAPI<Task>(`/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(input),
    });
  },

  /**
   * Delete a task
   */
  async deleteTask(id: string): Promise<ApiResponse<void>> {
    return fetchAPI<void>(`/tasks/${id}`, {
      method: 'DELETE',
    });
  },

  /**
   * Toggle task completion status
   */
  async toggleTask(id: string): Promise<ApiResponse<Task>> {
    return fetchAPI<Task>(`/tasks/${id}/toggle`, {
      method: 'PATCH',
    });
  },
};

/**
 * Health check for API
 */
export async function checkAPIHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
}
