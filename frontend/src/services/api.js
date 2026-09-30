const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api'

async function request(path, options = {}) {
    const url = `${API_BASE_URL}${path}`
    const res = await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
        ...options,
    })

    if (!res.ok) {
        throw new Error(`API error: ${res.status} ${res.statusText}`)
    }

    return res.json()
}

// Email endpoints
export const fetchEmails = () => request('/emails')
export const fetchEmailById = (id) => request(`/emails/${id}`)

// Actions (pending/approved/rejected)
export const fetchActions = () => request('/actions')
export const approveAction = (id) => request(`/actions/${id}/approve`, { method: 'POST' })
export const rejectAction = (id) => request(`/actions/${id}/reject`, { method: 'POST' })

// Sync trigger
export const triggerSync = () => request('/sync', { method: 'POST' })

// Tasks
export const fetchTasks = () => request('/tasks')

export default {
    fetchEmails,
    fetchEmailById,
    fetchActions,
    approveAction,
    rejectAction,
    triggerSync,
    fetchTasks,
}
